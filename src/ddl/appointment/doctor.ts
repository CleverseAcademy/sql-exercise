import ddl from "../../engines/ddl";

export const createTableStmt = ddl(`CREATE `);

//  rename `department` column to `specialization`
export const renameColStmt = ddl(`ALTER `);
