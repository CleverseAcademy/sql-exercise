import { afterAll, beforeAll, describe, expect, test } from '@jest/globals'
import { readFileSync } from 'fs'
import { Client } from 'pg'
import { connect } from '../../connect'
import { QueryGenerator } from '../../engines/q'
import SQLReturnRowInterface from '../../schemas/SQLRowInterface.type'
import {
  q1,
  q10,
  q11,
  q12,
  q2,
  q3,
  q4,
  q5,
  q6,
  q7,
  q8,
  q9,
} from '../../sfw/customer'
import toSystemPath, { SolutionFilePath } from '../../utils/solution-path'

let client: Client

beforeAll(async () => {
  client = await connect()
})

beforeAll((done) => done())

afterAll((done) => {
  client.end()
  done()
})

describe('Customer SFW query', () => {
  test.each<[string, SolutionFilePath, ReturnType<QueryGenerator>]>([
    [
      `Q1: Customer last name begin with 'CALLYB', and their phone number begin with 71`,
      'sfw/query_results-2023-10-04_11322',
      q1,
    ],
    ['Q2', 'sfw/query_results-2023-10-04_12002', q2],
    [`Q3`, 'sfw/query_results-2023-10-04_12350', q3],
    [`Q4`, 'sfw/query_results-2023-10-04_12633', q4],
    [`Q5`, 'sfw/query_results-2023-10-04_13011', q5],
    [`Q6`, 'sfw/query_results-2023-10-04_13829', q6],
    [`Q7`, 'sfw/query_results-2023-10-04_14422', q7],
    [`Q8`, 'sfw/query_results-2023-10-04_20141', q8],
    [`Q9`, 'sfw/query_results-2023-10-04_20653', q9],
    [`Q10`, 'sfw/query_results-2023-10-04_21107', q10],
    [`Q11`, 'sfw/query_results-2023-10-04_21345', q11],
    [`Q12`, 'sfw/query_results-2023-10-04_21837', q12],
  ])('%s - %s', async (_, sol, intermediateQuery) => {
    const solution: SQLReturnRowInterface[] = JSON.parse(
      readFileSync(toSystemPath(sol)).toString(),
    )
    const queryResult = await intermediateQuery(client)

    solution.forEach((row) => expect(queryResult).toContainEqual(row))
  })
})
