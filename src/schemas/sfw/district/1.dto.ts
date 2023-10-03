import { SQLReturnRowInterface } from '../../SQLReturnRowInterface.type'

export default interface Dto extends SQLReturnRowInterface {
  d_city: string
  d_state: string
}
