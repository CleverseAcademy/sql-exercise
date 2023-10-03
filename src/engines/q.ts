import { Client } from 'pg'
import { SQLReturnRowInterface } from '../schemas/SQLReturnRowInterface.type'

export type QueryGenerator = <T extends SQLReturnRowInterface>(
  stmt: string,
) => (client: Client) => Promise<T[]>

const q: QueryGenerator = (stmt) => (client: Client) =>
  client.query(stmt).then((r) => r.rows)

export default q
