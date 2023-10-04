import Schema from './schema.type'

export default interface Dto
  extends Pick<Schema, 'c_first' | 'c_last' | 'c_zip' | 'c_phone'> {}
