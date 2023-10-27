import ddl from "../../engines/ddl";

// create table with all necessary columns and `fullname` of 64-character varying type
export const createTableStmt = ddl(`CREATE `);

// rename `fullname` column to `full_name`.
export const renameColStmt = ddl(`ALTER `);

// change the type of `full_name` column to TEXT type.
export const changeColumnTypeStmt = ddl(`ALTER `);
