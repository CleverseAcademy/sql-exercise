import { KeyValueObject } from '../../utils/field'

export interface ExpectedFields extends KeyValueObject {
  d_name: string
  d_street_1: string
  d_street_2: string
  d_city: string
  d_zip: string
}
