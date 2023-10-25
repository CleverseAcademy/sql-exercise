import ddl from "../../engines/ddl";

export const createTableStmt = ddl(`CREATE `);

export const renameColStmt = ddl(`ALTER `);

export const changeColumnTypeStmt = ddl(`ALTER `);
