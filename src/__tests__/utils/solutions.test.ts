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
    'sfw/query_results-2023-10-04_30601',
    'sfw/query_results-2023-10-04_32555',
    'sfw/query_results-2023-10-04_33455',
    'sfw/query_results-2023-10-04_34501',
    'sfw/query_results-2023-10-04_34751',
    'aggregate/query_results-2023-10-04_45202',
    'aggregate/query_results-2023-10-04_45829',
    'aggregate/query_results-2023-10-04_45901',
    'aggregate/query_results-2023-10-04_45923',
    'aggregate/query_results-2023-10-04_45941',
    'aggregate/query_results-2023-10-04_50004',
    'aggregate/query_results-2023-10-04_50113',
    'aggregate/query_results-2023-10-04_50131',
    'aggregate/query_results-2023-10-04_50150',
    'aggregate/query_results-2023-10-10_111323',
    'aggregate/query_results-2023-10-10_111414',
    'join/query_results-2023-10-06_30553',
    'join/query_results-2023-10-06_30822',
    'join/query_results-2023-10-08_45117',
    'join/query_results-2023-10-08_65712',
  ])('Preflight check - %s', (filename) => {
    expect(openSync(toSystemPath(filename), 'r')).toEqual(expect.any(Number))
  })
})
