import { Client } from "pg";
import { DDLCommand } from "../schemas/ddl/enforce.type";

type Whitespace = " " | "\n";
type Empty = "";
type TerminalSymbol = ";" | Empty;

type TrimLeft<S extends string> = S extends `${Whitespace}${infer rest}`
  ? TrimLeft<rest>
  : S;

type TerminalOrNext<SubQ extends string> =
  SubQ extends `${string};${infer consequetive}`
    ? TrimLeft<consequetive> extends Empty
      ? ";"
      : consequetive
    : SubQ extends `${string}${Whitespace | Empty}`
    ? Empty
    : SubQ;

type GetDDLType<S extends string> = TrimLeft<S> extends DDLCommand
  ? TrimLeft<S>
  : "NOT_A_DDL";

type DDLType<Q extends string> =
  Q extends `${infer Prefix}${infer Command} ${infer rest}`
    ? Prefix extends Whitespace
      ? DDLType<`${Command} ${rest}`>
      : TerminalOrNext<rest> extends TerminalSymbol
      ? GetDDLType<`${Prefix}${Command}`>
      : "MULTIPLE_DDL"
    : "NOT_A_SQL";

const ddl =
  <Query extends string, Type = DDLType<Query>>(stmt: Query) =>
  (client: Client) =>
    client.query(stmt).then((r) => r.command as Type);

export default ddl;
