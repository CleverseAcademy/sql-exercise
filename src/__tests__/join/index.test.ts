import { afterAll, beforeAll, describe, test } from '@jest/globals'
import { connect } from '../../connect'
import { QueryGenerator } from '../../engines/q'
import { q1, q2, q3, q5 } from '../../join'
import { SolutionFilePath } from '../../utils/solution-path'
import {
  ClientPtr,
  orderedRowTest,
  unorderedRowTest,
} from '../utils/helpers.row.test'

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

describe('Join query', () => {
  test.each<[string, SolutionFilePath, ReturnType<QueryGenerator>]>([
    [`Q1`, 'join/query_results-2023-10-06_30553', q1],
    [`Q5`, 'join/query_results-2023-10-08_65712', q5],
  ])('%s - %s', unorderedRowTest(clientPtr))

  test.each<[string, SolutionFilePath, ReturnType<QueryGenerator>]>([
    [`Q2`, 'join/query_results-2023-10-06_30822', q2],
    [`Q3`, 'join/query_results-2023-10-08_45117', q3],
  ])('Sort strictly %s - %s', orderedRowTest(clientPtr))
})
