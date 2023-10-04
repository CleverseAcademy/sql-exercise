import Schema from './schema.type'

export default interface Dto
  extends Pick<
    Schema,
    'c_state' | 'c_city' | 'c_zip' | 'c_credit' | 'c_balance' | 'c_ytd_payment'
  > {}
