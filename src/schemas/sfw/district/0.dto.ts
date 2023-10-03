import { SQLReturnRowInterface } from '../../SQLReturnRowInterface.type'

export default interface Dto extends SQLReturnRowInterface {
  d_name: string
  d_street_1: string
  d_street_2: string
  d_city: string
  d_zip: string
}
