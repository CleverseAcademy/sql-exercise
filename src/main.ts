import { connect } from './connect'
import { districtQuery } from './sfw/district'

const main = async () => {
  const client = await connect()
  return await districtQuery(client)
}

main()
  .then(console.log)
  .then(() => process.exit(1))
