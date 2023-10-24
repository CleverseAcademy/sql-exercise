import SQLReturnRowInterface from "../SQLRowInterface.type";

export default interface Dto extends SQLReturnRowInterface {
  table_schema: string;
  table_name: string;
  constraint_type: string;
  column_name: string | null;
}
