import { afterAll, beforeAll, describe, test } from "@jest/globals";
import { connect } from "../../connect";
import { createTableStmt as createAppointTableStmt } from "../../ddl/appointment/appointment";
import {
  addCol1Stmt as avaiAddCol1Stmt,
  addCol2Stmt as avaiAddCol2Stmt,
  addPrimaryKeyStmt as avaiAddPrimaryKeyStmt,
  changeColTypeStmt as avaiChangeColTypeStmt,
  createTableStmt as createAvaiTableStmt,
} from "../../ddl/appointment/availability";
import {
  createTableStmt as createDoctorTableStmt,
  renameColStmt as doctorRenameColStmt,
} from "../../ddl/appointment/doctor";
import { createTableStmt as createPatientTableStmt } from "../../ddl/appointment/patient";
import {
  createTableStmt as createPersonalInfoTableStmt,
  changeColumnTypeStmt as personalInfoChangeColumnTypeStmt,
  renameColStmt as personalInfoRenameColStmt,
} from "../../ddl/appointment/personal_info";
import ddl from "../../engines/ddl";
import { ClientPtr } from "../utils/helpers.row.test";
import { ExecAndVerify } from "../utils/helpers.schema.test";
import { TestSuite } from "./helpers.type";

const clientPtr: ClientPtr = {
  client: null,
};

beforeAll(async () => {
  clientPtr.client = await connect();
  await ddl(
    `DROP TABLE IF EXISTS appointment;
    DROP TABLE IF EXISTS availability;
    DROP TABLE IF EXISTS doctor;
    DROP TABLE IF EXISTS patient;
    DROP TABLE IF EXISTS personal_info;`
  )(clientPtr.client);
});

beforeAll((done) => done());

afterAll((done) => {
  if (clientPtr.client !== null) clientPtr.client.end();
  done();
});

describe("personal_info DDL", () => {
  const ddlSeq: [
    TestSuite<"CREATE", "ALTER">,
    TestSuite<"ALTER", "ALTER">,
    TestSuite<"ALTER", "ALTER">,
  ] = [
    {
      directive: ["CREATE table", "personal_info", createPersonalInfoTableStmt],
      schema: `0_personal_info`,
      schemaType: "ALTER",
    },
    {
      directive: [
        "ALTER fullname column name",
        "personal_info",
        personalInfoRenameColStmt,
      ],
      schema: `1_personal_info`,
      schemaType: "ALTER",
    },
    {
      directive: ["ALTER", "personal_info", personalInfoChangeColumnTypeStmt],
      schema: `2_personal_info`,
      schemaType: "ALTER",
    },
  ];

  test.each(ddlSeq)("$directive.0", ExecAndVerify(clientPtr));
});

describe("patient DDL", () => {
  const ddlSeq: [TestSuite<"CREATE", "CREATE">] = [
    {
      directive: ["CREATE table", "patient", createPatientTableStmt],
      schema: `patient`,
      schemaType: "CREATE",
    },
  ];

  test.each(ddlSeq)("$directive.0", ExecAndVerify(clientPtr));
});

describe("doctor DDL", () => {
  const ddlSeq: [TestSuite<"CREATE", "ALTER">, TestSuite<"ALTER", "CREATE">] = [
    {
      directive: ["CREATE table", "doctor", createDoctorTableStmt],
      schema: `0_doctor`,
      schemaType: "ALTER",
    },
    {
      directive: ["ALTER", "doctor", doctorRenameColStmt],
      schema: `doctor`,
      schemaType: "CREATE",
    },
  ];

  test.each(ddlSeq)("$directive.0", ExecAndVerify(clientPtr));
});

describe("availability DDL", () => {
  const ddlSeq: [
    TestSuite<"CREATE", "ALTER">,
    TestSuite<"ALTER", "ALTER">,
    TestSuite<"ALTER", "ALTER">,
    TestSuite<"ALTER", "ALTER">,
    TestSuite<"ALTER", "ALTER">,
  ] = [
    {
      directive: ["CREATE table", "availability", createAvaiTableStmt],
      schema: `0_availability`,
      schemaType: "ALTER",
    },
    {
      directive: ["ALTER", "availability", avaiAddCol1Stmt],
      schema: `1_availability`,
      schemaType: "ALTER",
    },
    {
      directive: ["ALTER", "availability", avaiAddCol2Stmt],
      schema: `2_availability`,
      schemaType: "ALTER",
    },
    {
      directive: ["ALTER", "availability", avaiAddPrimaryKeyStmt],
      schema: `3_availability`,
      schemaType: "ALTER",
    },
    {
      directive: ["ALTER", "availability", avaiChangeColTypeStmt],
      schema: `4_availability`,
      schemaType: "ALTER",
    },
  ];

  test.each(ddlSeq)("$directive.0", ExecAndVerify(clientPtr));
});

describe("appointment DDL", () => {
  const ddlSeq: [TestSuite<"CREATE", "CREATE">] = [
    {
      directive: ["CREATE table", "appointment", createAppointTableStmt],
      schema: `appointment`,
      schemaType: "CREATE",
    },
  ];

  test.each(ddlSeq)("$directive.0", ExecAndVerify(clientPtr));
});
