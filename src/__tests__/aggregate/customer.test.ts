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
    [
      `Q1: Calculate the average year-to-date payment of every customer.`,
      'aggregate/query_results-2023-10-04_45202',
      q1,
    ],
    [
      `Q2: Calculate the average customer year-to-date payment for each state`,
      'aggregate/query_results-2023-10-04_45829',
      q2,
    ],
    [
      `Q3: Calculate the maximum of the family discount, where their last name begins with CALLY or ANTI`,
      'aggregate/query_results-2023-10-04_45901',
      q3,
    ],
    [
      `Q4: For families whose last name starts with OUGHT or EINGEIN, determine the family minimum balance.`,
      'aggregate/query_results-2023-10-04_45923',
      q4,
    ],
    [
      `Q5: To determine which consumers have good and bad credit, count a number of them.`,
      'aggregate/query_results-2023-10-04_45941',
      q5,
    ],
    [
      `Q6: Report the customer discount percentage distribution`,
      'aggregate/query_results-2023-10-04_50004',
      q6,
    ],
    [
      `Q7: Add up all customer year-to-date payments, grouping by state`,
      'aggregate/query_results-2023-10-04_50113',
      q7,
    ],
    [
      `Q8: Report all states in which the total customer year-to-date payment is greater than $360,000`,
      'aggregate/query_results-2023-10-04_50131',
      q8,
    ],
    [
      `Q9: Summarize districts' total of customer year-to-date payment`,
      'aggregate/query_results-2023-10-04_50150',
      q9,
    ],
  ])('%s - %s', unorderedRowTest(clientPtr))
})
