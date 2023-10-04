import Schema from './schema.type'

export default interface Dto
  extends Pick<Schema, 'd_name' | 'd_state' | 'd_ytd' | 'd_next_o_id'> {}
