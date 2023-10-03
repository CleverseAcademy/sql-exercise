import { Client } from 'pg'
import { ExpectedFields } from '../schemas/sfw/1.dto'

export const districtQuery = async (
  client: Client,
): Promise<ExpectedFields[]> => {
  const res = await client.query<ExpectedFields>(
    `SELECT dt.d_name, dt.d_street_1, dt.d_street_2, dt.d_city, dt.d_zip FROM district1 dt WHERE dt.d_tax >= 0.2;`,
  )
  return res.rows
}
