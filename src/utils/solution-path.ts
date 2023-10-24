import { join } from "path";
import { DDLCommand } from "../schemas/ddl/enforce.type";
import { SolutionFilePath as DDLSolutionFilePath } from "./types/ddl-path.type";
import { SolutionFilePath as DMLSolutionFilePath } from "./types/dml-path.type";

type SolutionFilePathTypeParam = DDLCommand | "DML";
export type SolutionFilePath<
  T extends SolutionFilePathTypeParam = "DML" | "CREATE" | "ALTER",
> = T extends DDLCommand ? DDLSolutionFilePath<T> : DMLSolutionFilePath;

const toSystemPath = <T extends SolutionFilePathTypeParam>(
  solPath: SolutionFilePath<T>
): string => join(__dirname, `../../cases.test/${solPath}.json`);

export default toSystemPath;
