import SQLReturnRowInterface from "../SQLRowInterface.type";

export default interface Dto extends SQLReturnRowInterface {
  table_name: string;
  column_name: string;
  is_nullable: "YES" | "NO";
  data_type: string;
  character_octet_length: number | null;
}
