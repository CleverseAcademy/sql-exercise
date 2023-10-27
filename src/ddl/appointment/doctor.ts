import ddl from "../../engines/ddl";

// Create table with all necessary columns and `department` of 64-character varying type
export const createTableStmt = ddl(`CREATE `);

//  rename `department` column to `specialization`
export const renameColStmt = ddl(`ALTER `);
