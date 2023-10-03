import { describe, expect, test } from '@jest/globals'
import isMatchFieldsExpectation from '../../utils/field'

describe('Utility test - isMatchFieldsExpectation', () => {
  test.each([
    [
      [
        { a: 1, b: 2, c: 3 },
        { a: 11, b: 21, c: 31 },
      ],
      { a: 1, b: 2, c: 3 },
      true,
    ],
    [
      [
        { a: 1, b: 2, c: 3 },
        { a: 2, b: 3 },
      ],
      { a: 1, b: 2, c: 3 },
      false,
    ],
    [
      [
        { a: 1, b: 2, c: 3 },
        { a: 2, b: 3 },
      ],
      { a: 1, b: 2, c: 3, d: 4 },
      false,
    ],
    [
      [
        { a: 1, b: 2, c: 3 },
        { a: 2, b: 3 },
      ],
      { a: 1, b: 2 },
      false,
    ],
    [[{ a: 1 }, { a: 2, b: 3 }], { a: 1 }, false],
    [
      [
        { b: 1, a: 2 },
        { b: 12, a: 22 },
      ],
      { a: 2, b: 1 },
      true,
    ],
  ])('matching keys of Array: %j v. Object: %j', (arr, obj, expected) => {
    expect(isMatchFieldsExpectation(arr, obj)).toBe(expected)
  })
})
