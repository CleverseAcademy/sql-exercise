import { Client } from 'pg'
import { KeyValueInterface } from '../utils/field'

export default <T extends KeyValueInterface>(stmt: string) => async (
  client: Client,
): Promise<T[]> => (await client.query<T>(stmt)).rows
