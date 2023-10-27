import ddl from "../../engines/ddl";

// Create applicant table with all necessary columns and `phone` of INT type and cv of type text
export const createApplicantStmt = ddl(`CREATE `);

// change the type of `phone` column to 10-character
export const alterApplicantStmt1 = ddl(`ALTER `);

// rename `cv` column to `resume`
export const alterApplicantStmt2 = ddl(`ALTER `);
