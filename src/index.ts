import 'dotenv/config'
import { Client } from 'pg'

const client = new Client()

const main = async () => {
  try {
    await client.connect()
    const res = await client.query('SELECT $1::text as message', [
      'Hello world!',
    ])
    console.log(res.rows[0].message) // Hello world!
  } catch (error) {
    console.error(error)
  }
}

main().then(() => process.exit(1))
