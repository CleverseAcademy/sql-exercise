import ddl from "../../engines/ddl";

export const createTableStmt = ddl(`CREATE `);

// rename `fullname` column to `full_name`.
export const renameColStmt = ddl(`ALTER `);

// change the type of `full_name` column to TEXT type.
export const changeColumnTypeStmt = ddl(`ALTER `);
