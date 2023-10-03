import { afterAll, beforeAll, describe, expect, test } from '@jest/globals'
import { readFileSync } from 'fs'
import { join } from 'path'
import { Client } from 'pg'
import { connect } from '../../src/connect'
import { ExpectedFields } from '../../src/schemas/sfw/1.dto'
import { districtQuery } from '../../src/sfw/district'

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
  test('Where tax is >= 20%', async () => {
    const solution: ExpectedFields[] = JSON.parse(
      readFileSync(
        join(
          __dirname,
          '../../cases.test/sfw/query_results-2023-10-03_14308.json',
        ),
      ).toString(),
    )

    const queryResult = await districtQuery(client)
    queryResult.forEach((row) => expect(solution).toContainEqual(row))
  })
})
