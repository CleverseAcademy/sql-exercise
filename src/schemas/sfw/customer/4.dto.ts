import Schema from "./schema.type";

export default interface Dto
  extends Pick<Schema, "c_city" | "c_state" | "c_zip" | "c_phone"> {}
