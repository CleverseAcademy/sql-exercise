import q from "../../engines/q";
import Dto from "../../schemas/ddl/constraint.dto";

export default (tableName: string) =>
  q<Dto, [string]>(
    `SELECT
    tc.table_schema,
    tc.table_name,
    tc.constraint_type,
    kcu.column_name
  FROM
    information_schema.table_constraints AS tc
    LEFT JOIN information_schema.key_column_usage AS kcu ON tc.constraint_name = kcu.constraint_name
  WHERE
    tc.table_name = $1`,
    [tableName],
  );
