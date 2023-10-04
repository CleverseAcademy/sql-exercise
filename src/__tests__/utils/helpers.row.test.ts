import { expect } from '@jest/globals'
import { readFileSync } from 'fs'
import { Client } from 'pg'
import { QueryGenerator } from '../../engines/q'
import SQLReturnRowInterface from '../../schemas/SQLRowInterface.type'
import toSystemPath, { SolutionFilePath } from '../../utils/solution-path'

export const unorderedRowTest = (clientGetter: () => Client) => async (
  _: string,
  sol: SolutionFilePath,
  intermediateQuery: ReturnType<QueryGenerator>,
) => {
  const solution: SQLReturnRowInterface[] = JSON.parse(
    readFileSync(toSystemPath(sol)).toString(),
  )
  const queryResult = await intermediateQuery(clientGetter())

  solution.forEach((row) => expect(queryResult).toContainEqual(row))
}

export const orderedRowTest = (clientGetter: () => Client) => async (
  _: string,
  sol: SolutionFilePath,
  intermediateQuery: ReturnType<QueryGenerator>,
) => {
  const solution: SQLReturnRowInterface[] = JSON.parse(
    readFileSync(toSystemPath(sol)).toString(),
  )
  const queryResult = await intermediateQuery(clientGetter())

  solution.forEach((row, index) => expect(queryResult[index]).toEqual(row))
}
