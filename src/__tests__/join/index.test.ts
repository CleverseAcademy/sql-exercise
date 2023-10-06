import { afterAll, beforeAll, describe, test } from '@jest/globals'
import { Client } from 'pg'
import { connect } from '../../connect'
import { QueryGenerator } from '../../engines/q'
import { q1, q2 } from '../../join'
import { SolutionFilePath } from '../../utils/solution-path'
import { orderedRowTest, unorderedRowTest } from '../utils/helpers.row.test'

let client: Client

beforeAll(async () => {
  client = await connect()
})

beforeAll((done) => done())

afterAll((done) => {
  client.end()
  done()
})

describe('Join query', () => {
  test.each<[string, SolutionFilePath, ReturnType<QueryGenerator>]>([
    [`Q1`, 'join/query_results-2023-10-06_30553', q1],
  ])(
    '%s - %s',
    unorderedRowTest(() => client),
  )

  test.each<[string, SolutionFilePath, ReturnType<QueryGenerator>]>([
    [`Q2`, 'join/query_results-2023-10-06_30822', q2],
  ])(
    'Strict order %s - %s',
    orderedRowTest(() => client),
  )
})
