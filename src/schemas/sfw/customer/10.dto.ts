import Schema from "./schema.type";

export default interface Dto
  extends Pick<
    Schema,
    | "c_first"
    | "c_last"
    | "c_phone"
    | "c_state"
    | "c_credit"
    | "c_phone"
    | "c_balance"
  > {}
