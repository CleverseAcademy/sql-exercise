import SQLReturnRowInterface from '../../SQLRowInterface.type'

export default interface Dto extends SQLReturnRowInterface {
  d_city: string
  d_state: string
}
