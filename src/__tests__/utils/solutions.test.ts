import { describe, expect, test } from '@jest/globals'
import { openSync } from 'fs'
import toSystemPath, { SolutionFilePath } from '../../utils/solution-path'

describe('sol-path', () => {
  test.each<SolutionFilePath>([
    'sfw/query_results-2023-10-03_14308',
    'sfw/query_results-2023-10-03_81527',
    'sfw/query_results-2023-10-03_84741',
    'sfw/query_results-2023-10-03_90248',
    'sfw/query_results-2023-10-03_91144',
  ])('Preflight check - %s', (filename) => {
    expect(openSync(toSystemPath(filename), 'r')).toEqual(expect.any(Number))
  })
})
