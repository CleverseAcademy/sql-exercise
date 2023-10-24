import q from "../../engines/q";
import Dto from "../../schemas/ddl/column.dto";

export default (tableName: string) =>
  q<Dto, [string]>(
    `SELECT
    c.table_name,
    c.column_name,
    c.is_nullable,
    c.data_type,
    c.character_octet_length
  FROM
    information_schema.columns c
  WHERE
    c.table_name = $1
  ORDER BY
    c.ordinal_position`,
    [tableName],
  );
