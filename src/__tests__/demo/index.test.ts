import { afterAll, beforeAll, describe, test } from '@jest/globals'
import { connect } from '../../connect'
import { q0 } from '../../demo'
import { QueryGenerator } from '../../engines/q'
import { SolutionFilePath } from '../../utils/solution-path'
import {
  ClientPtr,
  orderedRowTest,
  unorderedRowTest,
} from '../utils/helpers.row.test'

const clientPtr: ClientPtr = {
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

describe('Demo code', () => {
  test.each<[string, SolutionFilePath, ReturnType<QueryGenerator>]>([
    [`Q0: D-Question`, 'demo/query_results-2023-10-12_121838', q0],
  ])('%s - cases.test/%s', unorderedRowTest(clientPtr))

  test.each<[string, SolutionFilePath, ReturnType<QueryGenerator>]>([
    [`Q0: D-Question`, 'demo/query_results-2023-10-12_121838', q0],
  ])('Sort strictly %s - cases.test/%s', orderedRowTest(clientPtr))
})
