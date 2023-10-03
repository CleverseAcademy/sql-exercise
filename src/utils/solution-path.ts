import { join } from "path";
// https://github.com/type-challenges/type-challenges/issues/9988
type TupleOfLength<N, T extends any[] = []> = T["length"] extends N
  ? T[number]
  : TupleOfLength<N, [...T, T["length"]]>

type NumberRange<L, H> = Exclude<TupleOfLength<H>, TupleOfLength<L>> | H

type FolderName = 'sfw' | 'join' | 'aggregate'

type D = NumberRange<0, 9>
type Years = `20${NumberRange<23, 99>}`

type Months = `0${NumberRange<1, 9>}` | `${NumberRange<10, 12>}`

type Dates = `0${NumberRange<1, 9>}` | `${NumberRange<10, 31>}`


type SolutionFilename = `query_results-${Years}-${Months}-${Dates}_${number}`

export type SolutionFileDirectory = `${FolderName}/${SolutionFilename}`

const toSystemPath = (solPath: SolutionFileDirectory): string => join(__dirname, `../../cases.test/${solPath}.json`)

export default toSystemPath