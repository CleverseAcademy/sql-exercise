import q from "../../engines/q";
import Dto from "../../schemas/ddl/referential.dto";

export default (tableName: string) =>
  q<Dto, [string]>(
    `SELECT
    kcu.constraint_schema AS from_schema,
    kcu.table_name AS from_table,
    STRING_AGG(
      kcu.column_name,
      ','
      ORDER BY
        kcu.ordinal_position
    ) AS from_column,
    rc.unique_constraint_schema AS to_schema,
    rc.update_rule,
    rc.delete_rule,
    (
      SELECT
        kcu2.table_name
      FROM
        information_schema.key_column_usage AS kcu2
      WHERE
        kcu2.constraint_name = rc.unique_constraint_name
      LIMIT
        1
    ) AS to_table,
    (
      SELECT
        STRING_AGG(
          kcu2.column_name,
          ','
          ORDER BY
            kcu2.ordinal_position
        )
      FROM
        information_schema.key_column_usage AS kcu2
      WHERE
        kcu2.constraint_name = rc.unique_constraint_name
    ) AS to_column
  FROM
    information_schema.key_column_usage AS kcu
    JOIN information_schema.table_constraints AS tc ON tc.constraint_name = kcu.constraint_name
    JOIN information_schema.referential_constraints AS rc ON rc.constraint_name = kcu.constraint_name
  WHERE
    tc.constraint_type = 'FOREIGN KEY'
    AND kcu.table_schema NOT LIKE 'pg_%'
    AND kcu.table_name = $1
  GROUP BY
    kcu.constraint_schema,
    kcu.table_name,
    rc.unique_constraint_schema,
    rc.unique_constraint_name,
    tc.constraint_name,
    rc.update_rule,
    rc.delete_rule`,
    [tableName],
  );
