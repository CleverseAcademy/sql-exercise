import columns from "../../utils/ddl/columns";
import constraints from "../../utils/ddl/constraints";
import referential from "../../utils/ddl/referential";
import { SolutionFilePath } from "../../utils/solution-path";
import { Filename as DDLSchema } from "../../utils/types/ddl-path.type";
import { TestSuite } from "../ddl/helpers.type";
import { ClientPtr, unorderedRowTest } from "./helpers.row.test";

export async function schemaTest<T extends "CREATE" | "ALTER">(
  type: T,
  clientPtr: ClientPtr,
  solFileName: DDLSchema<T>,
  tableName: string
) {
  await unorderedRowTest(clientPtr)(
    type,
    `ddl/${type}/columns/${solFileName}` as SolutionFilePath<T>,
    columns(tableName)
  );

  await unorderedRowTest(clientPtr)(
    type,
    `ddl/${type}/constraints/${solFileName}` as SolutionFilePath<T>,
    constraints(tableName)
  );

  await unorderedRowTest(clientPtr)(
    type,
    `ddl/${type}/constraints/referential/${solFileName}` as SolutionFilePath<T>,
    referential(tableName)
  );
}
export const ExecAndVerify =
  (clientPtr: ClientPtr) =>
  async <D extends "CREATE" | "ALTER">({
    directive,
    schema,
    schemaType,
  }: TestSuite<D, D>): Promise<void> => {
    if (clientPtr.client === null) throw new Error("Receiving null pointer");

    const [_, tableName, stmt] = directive;
    await stmt(clientPtr.client).then(() =>
      schemaTest(schemaType, clientPtr, schema, tableName)
    );
  };
