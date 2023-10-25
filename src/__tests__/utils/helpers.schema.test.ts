import { expect } from "@jest/globals";
import { readFileSync } from "fs";
import ColumnDto from "../../schemas/ddl/column.dto";
import ConstraintDto from "../../schemas/ddl/constraint.dto";
import ReferentialDto from "../../schemas/ddl/referential.dto";
import columns from "../../utils/ddl/columns";
import constraints from "../../utils/ddl/constraints";
import referential from "../../utils/ddl/referential";
import toSystemPath, { SolutionFilePath } from "../../utils/solution-path";
import { Filename as DDLSchema } from "../../utils/types/ddl-path.type";
import { TestSuite } from "../ddl/helpers.type";
import { ClientPtr } from "./helpers.row.test";

const toReadableColumnInfo = ({
  column_name,
  table_name,
  data_type,
  character_octet_length,
  is_nullable,
}: ColumnDto): string =>
  `COLUMN: ${table_name}.${column_name} TYPE=${data_type}${
    character_octet_length ? ` CHAR LENGTH=${character_octet_length / 4}` : ""
  } NULLABLE? ${is_nullable}`;

const toReadableConstraintInfo = ({
  table_schema,
  table_name,
  column_name,
  constraint_type,
}: ConstraintDto): string =>
  `CONSTRAINT: ${
    column_name
      ? `${table_schema}.${table_name}.${column_name}: ${constraint_type}`
      : `${table_schema}.${table_name}: ${constraint_type}`
  }`;

const toReadableReferentialInfo = ({
  from_schema,
  from_table,
  from_column,
  to_schema,
  to_table,
  to_column,
  delete_rule,
  update_rule,
}: ReferentialDto): string =>
  `REFERENTIAL: ${from_schema}.${from_table}.${from_column} => ${to_schema}.${to_table}.${to_column} WHEN DELETE -> ${delete_rule}, WHEN UPDATE -> ${update_rule}`;

export async function schemaTest<T extends "CREATE" | "ALTER">(
  type: T,
  ptr: ClientPtr,
  solFileName: DDLSchema<T>,
  tableName: string
) {
  if (ptr.client === null) throw new Error("Receiving null pointer");

  const expectedColumns: ColumnDto[] = JSON.parse(
    readFileSync(
      toSystemPath(`ddl/${type}/columns/${solFileName}` as SolutionFilePath<T>)
    ).toString()
  );

  const actualColumns = (await columns(tableName)(ptr.client)).map(
    toReadableColumnInfo
  );

  expect(`Your DDL columns length: ${actualColumns.length}`).toMatch(
    `columns length: ${expectedColumns.length}`
  );

  expectedColumns
    .map(toReadableColumnInfo)
    .forEach((col) => expect(actualColumns).toContain(col));

  const expectedConstraints: ConstraintDto[] = JSON.parse(
    readFileSync(
      toSystemPath(
        `ddl/${type}/constraints/${solFileName}` as SolutionFilePath<T>
      )
    ).toString()
  );

  const actualConstraints = (await constraints(tableName)(ptr.client)).map(
    toReadableConstraintInfo
  );

  expectedConstraints
    .map(toReadableConstraintInfo)
    .forEach((col) => expect(actualConstraints).toContain(col));

  const expectedReferentials: ReferentialDto[] = JSON.parse(
    readFileSync(
      toSystemPath(
        `ddl/${type}/constraints/referential/${solFileName}` as SolutionFilePath<T>
      )
    ).toString()
  );

  const actualReferentials = (await referential(tableName)(ptr.client)).map(
    toReadableReferentialInfo
  );

  expectedReferentials
    .map(toReadableReferentialInfo)
    .forEach((col) => expect(actualReferentials).toContain(col));
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
