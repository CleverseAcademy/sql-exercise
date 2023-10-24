import ddl from "../../engines/ddl";

export type DDLCommand = "ALTER" | "CREATE" | "DROP" | "TRUNCATE";

type tableName = string;

type enforceDDLType<T extends DDLCommand> = [
  `${T}${string}`,
  tableName,
  ReturnType<typeof ddl<string, T>>,
];

export default enforceDDLType;
