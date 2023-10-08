import { afterAll, beforeAll, describe, test } from '@jest/globals'
import { connect } from '../../connect'
import { QueryGenerator } from '../../engines/q'
import { q0, q1, q2, q3, q4, q5, q6 } from '../../sfw/district'
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

describe('District SFW query', () => {
  test.each<[string, SolutionFilePath, ReturnType<QueryGenerator>]>([
    ['Where tax is >= 20%', 'sfw/query_results-2023-10-03_14308', q0],
    ['Where zip code ending with 9', 'sfw/query_results-2023-10-03_81527', q1],
    [
      `Where district's year-to-date is less than 1900000`,
      'sfw/query_results-2023-10-03_84741',
      q2,
    ],
    [
      `Where district's year-to-date is between 1850000 to 2050000`,
      'sfw/query_results-2023-10-03_90248',
      q3,
    ],
    [
      `Where district's tax is between 0.07 to 0.12`,
      'sfw/query_results-2023-10-03_91144',
      q4,
    ],
  ])('%s - %s', unorderedRowTest(clientPtr))

  test.each<[string, SolutionFilePath, ReturnType<QueryGenerator>]>([
    [`Q5`, 'sfw/query_results-2023-10-04_34501', q5],
    [`Q6`, 'sfw/query_results-2023-10-04_34751', q6],
  ])('Strict order %s - %s', orderedRowTest(clientPtr))
})
