import { afterAll, beforeAll, describe, expect, test } from '@jest/globals'
import { readFileSync } from 'fs'
import { Client } from 'pg'
import { connect } from '../../connect'
import { QueryGenerator } from '../../engines/q'
import SQLReturnRowInterface from '../../schemas/SQLRowInterface.type'
import { q0, q1, q2, q3, q4 } from '../../sfw/district'
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
  ])('%s - %s', async (_, sol, intermediateQuery) => {
    const solution: SQLReturnRowInterface[] = JSON.parse(
      readFileSync(toSystemPath(sol)).toString(),
    )
    const queryResult = await intermediateQuery(client)

    solution.forEach((row) => expect(queryResult).toContainEqual(row))
  })
})
