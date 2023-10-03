import SQLReturnRowInterface from '../../SQLRowInterface.type'

export default interface Dto extends SQLReturnRowInterface {
  d_ytd: number
  d_name: string
  d_state: string
  d_tax: number
}
