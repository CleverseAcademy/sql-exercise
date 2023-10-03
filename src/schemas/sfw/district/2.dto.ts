import { SQLReturnRowInterface } from '../../SQLReturnRowInterface.type'

export default interface Dto extends SQLReturnRowInterface {
  d_name: string
  d_state: string
}
