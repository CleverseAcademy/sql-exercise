import { connect } from './connect'
import { q0 } from './sfw/district'

const main = async () => {
  const client = await connect()
  return await q0(client)
}

main()
  .then(console.log)
  .then(() => process.exit(1))
