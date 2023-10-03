import { afterAll, beforeAll, describe, expect, test } from '@jest/globals'
import { readFileSync } from 'fs'
import { Client } from 'pg'
import { connect } from '../../connect'
import FirstQueryDto from '../../schemas/sfw/1.dto'
import { districtQuery } from '../../sfw/district'
import toSystemPath from '../../utils/solution-path'

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
    const solution: FirstQueryDto[] = JSON.parse(
      readFileSync(
        toSystemPath('sfw/query_results-2023-10-03_14308'),
      ).toString(),
    )

    const queryResult = await districtQuery(client)
    queryResult.forEach((row) => expect(solution).toContainEqual(row))
  })
})
