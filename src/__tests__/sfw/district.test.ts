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
    [
      'Q0: where tax is greater or equal to 20%',
      'sfw/query_results-2023-10-03_14308',
      q0,
    ],
    [
      'Q1: where the zip code ends with 9',
      'sfw/query_results-2023-10-03_81527',
      q1,
    ],
    [
      `Q2: where year-to-date balance is less than $1,900,000`,
      'sfw/query_results-2023-10-03_84741',
      q2,
    ],
    [
      `Q3: where year-to-date balance is in the range of $1,850,000 to $2,050,000`,
      'sfw/query_results-2023-10-03_90248',
      q3,
    ],
    [
      `Q4: where tax is greater than or equal to 7% but not greater than 12%`,
      'sfw/query_results-2023-10-03_91144',
      q4,
    ],
  ])('%s - cases.test/%s', unorderedRowTest(clientPtr))

  test.each<[string, SolutionFilePath, ReturnType<QueryGenerator>]>([
    [
      `Q5: where the year-to-date balance is greater than $2,000,000. Sort by next available order ID from smallest to biggest`,
      'sfw/query_results-2023-10-04_34501',
      q5,
    ],
    [
      `Q6: where its tax is in the range of 12% - 15%. Sort by tax rate from largest to smallest`,
      'sfw/query_results-2023-10-04_34751',
      q6,
    ],
  ])('Sort strictly %s - cases.test/%s', orderedRowTest(clientPtr))
})
