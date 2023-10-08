import { afterAll, beforeAll, describe, test } from '@jest/globals'
import { q1, q2, q3, q4, q5, q6, q7, q8, q9 } from '../../aggregate/customer'
import { connect } from '../../connect'
import { QueryGenerator } from '../../engines/q'
import { SolutionFilePath } from '../../utils/solution-path'
import { ClientPtr, unorderedRowTest } from '../utils/helpers.row.test'

let clientPtr: ClientPtr = {
  client: null,
}

beforeAll(async () => {
  clientPtr.client = await connect()
})

beforeAll((done) => done())

afterAll((done) => {
  if (clientPtr.client !== null) clientPtr.client.end()
  done()
})

describe('Customer Aggregate query', () => {
  test.each<[string, SolutionFilePath, ReturnType<QueryGenerator>]>([
    [`Q1`, 'aggregate/query_results-2023-10-04_45202', q1],
    [`Q2`, 'aggregate/query_results-2023-10-04_45829', q2],
    [`Q3`, 'aggregate/query_results-2023-10-04_45901', q3],
    [`Q4`, 'aggregate/query_results-2023-10-04_45923', q4],
    [`Q5`, 'aggregate/query_results-2023-10-04_45941', q5],
    [`Q6`, 'aggregate/query_results-2023-10-04_50004', q6],
    [`Q7`, 'aggregate/query_results-2023-10-04_50113', q7],
    [`Q8`, 'aggregate/query_results-2023-10-04_50131', q8],
    [`Q9`, 'aggregate/query_results-2023-10-04_50150', q9],
  ])('%s - %s', unorderedRowTest(clientPtr))
})
