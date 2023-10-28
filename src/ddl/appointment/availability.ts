import ddl from "../../engines/ddl";

export const createTableStmt = ddl(`CREATE `);

// Add `id` column to the table, its type is UUID.
export const addCol1Stmt = ddl(`ALTER `);

// Add `date` column to the table, its type is DATE.
export const addCol2Stmt = ddl(`ALTER `);

// Add `start_time` column to the table, its type is TIME.
export const changeColTypeStmt = ddl(`ALTER `);

// Make the `id` column PRIMARY KEY.
export const addPrimaryKeyStmt = ddl(`ALTER `);
