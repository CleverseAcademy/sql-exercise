import { expect } from '@jest/globals'
import { readFileSync } from 'fs'
import { Client } from 'pg'
import { QueryGenerator } from '../../engines/q'
import SQLReturnRowInterface from '../../schemas/SQLRowInterface.type'
import toSystemPath, { SolutionFilePath } from '../../utils/solution-path'

export interface ClientPtr {
  client: Client | null
}

export const unorderedRowTest = (ptr: ClientPtr) => async (
  _: string,
  sol: SolutionFilePath,
  intermediateQuery: ReturnType<QueryGenerator>,
) => {
  if (ptr.client === null) throw new Error('Receiving null pointer')
  const solution: SQLReturnRowInterface[] = JSON.parse(
    readFileSync(toSystemPath(sol)).toString(),
  )
  const queryResult = await intermediateQuery(ptr.client)

  // console.log(`Expected # of rows: ${solution.length}`)
  solution.forEach((row) => expect(queryResult).toContainEqual(row))
}

export const orderedRowTest = (ptr: ClientPtr) => async (
  _: string,
  sol: SolutionFilePath,
  intermediateQuery: ReturnType<QueryGenerator>,
) => {
  if (ptr.client === null) throw new Error('Receiving null pointer')
  const solution: SQLReturnRowInterface[] = JSON.parse(
    readFileSync(toSystemPath(sol)).toString(),
  )
  const queryResult = await intermediateQuery(ptr.client)

  queryResult.forEach((row, index) => expect(row).toEqual(queryResult[index]))
}
