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
    'sfw/query_results-2023-10-04_11322',
    'sfw/query_results-2023-10-04_12002',
    'sfw/query_results-2023-10-04_12350',
    'sfw/query_results-2023-10-04_12633',
    'sfw/query_results-2023-10-04_13011',
    'sfw/query_results-2023-10-04_13829',
    'sfw/query_results-2023-10-04_14422',
    'sfw/query_results-2023-10-04_20141',
    'sfw/query_results-2023-10-04_20653',
    'sfw/query_results-2023-10-04_21107',
    'sfw/query_results-2023-10-04_21345',
    'sfw/query_results-2023-10-04_21837',
  ])('Preflight check - %s', (filename) => {
    expect(openSync(toSystemPath(filename), 'r')).toEqual(expect.any(Number))
  })
})
