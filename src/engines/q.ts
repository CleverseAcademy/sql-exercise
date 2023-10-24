import { Client } from "pg";
import SQLReturnRowInterface from "../schemas/SQLRowInterface.type";

export type QueryGenerator = <
  T extends SQLReturnRowInterface,
  I extends any[] = any[],
>(
  stmt: string,
  values?: I,
) => (client: Client) => Promise<T[]>;

const q: QueryGenerator = (stmt, values) => (client) =>
  client.query(stmt, values).then((r) => r.rows);

export default q;
