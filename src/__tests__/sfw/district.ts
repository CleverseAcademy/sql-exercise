import { afterAll, beforeAll, describe, expect, test } from '@jest/globals'
import { readFileSync } from 'fs'
import { Client } from 'pg'
import { connect } from '../../connect'
import { QueryGenerator } from '../../engines/q'
import { SQLReturnRowInterface } from '../../schemas/SQLReturnRowInterface.type'
import { q0, q1 } from '../../sfw/district'
import toSystemPath, { SolutionFileDirectory } from '../../utils/solution-path'

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
  test.each<[string, SolutionFileDirectory, ReturnType<QueryGenerator>]>([
    ['Where tax is >= 20%', 'sfw/query_results-2023-10-03_14308', q0],
    ['Where zip code ending with 9', 'sfw/query_results-2023-10-03_81527', q1],
  ])('%s - %s', async (_, sol, queryIntermediate) => {
    const solution: SQLReturnRowInterface[] = JSON.parse(
      readFileSync(toSystemPath(sol)).toString(),
    )
    const queryResult = await queryIntermediate(client)

    solution.forEach((row) => expect(queryResult).toContainEqual(row))
  })
})
