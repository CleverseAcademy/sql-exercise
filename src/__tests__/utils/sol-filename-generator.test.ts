import { describe, expect, test } from '@jest/globals'
import { openSync } from 'fs'
import toSystemPath, { SolutionFileDirectory } from '../../utils/solution-path'

describe('sol-filename-generator', () => {
  test.each<SolutionFileDirectory>(['sfw/query_results-2023-10-03_14308'])(
    'Should return file path which is accessible',
    (filename) => {
      expect(openSync(toSystemPath(filename), 'r')).toEqual(expect.any(Number))
    },
  )
})
