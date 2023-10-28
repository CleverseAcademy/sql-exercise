import ddl from "../../engines/ddl";

export const createJobAvailabilityStmt = ddl(`CREATE `);

// Drop `duration` column
export const alterJobAvailabilityStmt1 = ddl(`ALTER `);

// Rename `cost_per_hour` column to `cost_per_day`
export const alterJobAvailabilityStmt2 = ddl(`ALTER `);
