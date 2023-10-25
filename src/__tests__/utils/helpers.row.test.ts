import { expect } from "@jest/globals";
import { readFileSync } from "fs";
import { Client } from "pg";
import { QueryGenerator } from "../../engines/q";
import SQLReturnRowInterface from "../../schemas/SQLRowInterface.type";
import toSystemPath, { SolutionFilePath } from "../../utils/solution-path";

export interface ClientPtr {
  client: Client | null;
}

const mapObjectToHumanReadableRow = (value: SQLReturnRowInterface) =>
  Object.entries(value)
    .sort(([k1], [k2]) => (k1 < k2 ? -1 : 1))
    .map(([k, v]) => `${k}=${v}`)
    .join(", ");

export const unorderedRowTest =
  (ptr: ClientPtr) =>
  async (
    _: string,
    sol: SolutionFilePath,
    intermediateQuery: ReturnType<QueryGenerator>
  ) => {
    if (ptr.client === null) throw new Error("Receiving null pointer");
    const solution: SQLReturnRowInterface[] = JSON.parse(
      readFileSync(toSystemPath(sol)).toString()
    );
    const queryResult = (await intermediateQuery(ptr.client)).map(
      mapObjectToHumanReadableRow
    );

    expect(queryResult).toHaveLength(solution.length);
    solution
      .map(mapObjectToHumanReadableRow)
      .forEach((row) => expect(queryResult).toContainEqual(row));
  };

export const orderedRowTest =
  (ptr: ClientPtr) =>
  async (
    _: string,
    sol: SolutionFilePath,
    intermediateQuery: ReturnType<QueryGenerator>
  ) => {
    if (ptr.client === null) throw new Error("Receiving null pointer");
    const solution: SQLReturnRowInterface[] = JSON.parse(
      readFileSync(toSystemPath(sol)).toString()
    );
    const queryResult = (await intermediateQuery(ptr.client)).map(
      mapObjectToHumanReadableRow
    );

    expect(queryResult).toHaveLength(solution.length);
    solution
      .map(mapObjectToHumanReadableRow)
      .forEach((row, index) => expect(row).toEqual(queryResult[index]));
  };
