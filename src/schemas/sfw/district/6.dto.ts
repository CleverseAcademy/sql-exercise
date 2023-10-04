import Schema from './schema.type'

export default interface Dto
  extends Pick<Schema, 'd_zip' | 'd_name' | 'd_state' | 'd_tax' | 'd_city'> {}
