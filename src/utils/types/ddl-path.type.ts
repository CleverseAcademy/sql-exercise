import { DDLCommand } from "../../schemas/ddl/enforce.type";

type SchemaChecks = "columns" | "constraints" | "constraints/referential";
export type Filename<T extends DDLCommand> = T extends "ALTER"
  ? `${number}_${string}`
  : string;
type PathName<T extends DDLCommand> = `ddl/${T}/${SchemaChecks}`;

export type SolutionFilePath<T extends DDLCommand> =
  `${PathName<T>}/${Filename<T>}`;
