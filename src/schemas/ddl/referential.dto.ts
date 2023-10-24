import SQLReturnRowInterface from "../SQLRowInterface.type";

type ReferentialRule =
  | "CASCADE"
  | "SET NULL"
  | "SET DEFAULT"
  | "RESTRICT"
  | "NO ACTION";

export default interface Dto
  extends Record<
      | "from_schema"
      | "from_table"
      | "from_column"
      | "to_schema"
      | "to_table"
      | "to_column",
      string
    >,
    SQLReturnRowInterface {
  update_rule: ReferentialRule;
  delete_rule: ReferentialRule;
}
