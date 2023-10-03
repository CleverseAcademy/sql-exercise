import SQLReturnRowInterface from '../../SQLRowInterface.type'

export default interface Dto extends SQLReturnRowInterface {
  d_name: string
  d_state: string
}
