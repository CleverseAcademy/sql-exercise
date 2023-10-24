import { afterAll, beforeAll, describe, test } from "@jest/globals";
import { connect } from "../../connect";
import {
  alterApplicantStmt1,
  alterApplicantStmt2,
  createApplicantStmt,
} from "../../ddl/organization/applicant";
import { createDepartmentStmt } from "../../ddl/organization/department";
import { createJobStmt } from "../../ddl/organization/job";
import { createJobApplicationStmt } from "../../ddl/organization/job_application";
import {
  alterJobAvailabilityStmt1,
  alterJobAvailabilityStmt2,
  createJobAvailabilityStmt,
} from "../../ddl/organization/job_availability";
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
    `DROP TABLE IF EXISTS job_application;
    DROP TABLE IF EXISTS job;
    DROP TABLE IF EXISTS job_availability;
    DROP TABLE IF EXISTS applicant;
    DROP TABLE IF EXISTS department;`
  )(clientPtr.client);
});

beforeAll((done) => done());

afterAll((done) => {
  if (clientPtr.client !== null) clientPtr.client.end();
  done();
});

describe("Applicant DDL", () => {
  const ddlSeq: [
    TestSuite<"CREATE", "ALTER">,
    TestSuite<"ALTER", "ALTER">,
    TestSuite<"ALTER", "ALTER">,
  ] = [
    {
      directive: ["CREATE table", "applicant", createApplicantStmt],
      schema: `0_applicant`,
      schemaType: "ALTER",
    },
    {
      directive: [
        "ALTER type of phone number",
        "applicant",
        alterApplicantStmt1,
      ],
      schema: `1_applicant`,
      schemaType: "ALTER",
    },
    {
      directive: ["ALTER rename CV column", "applicant", alterApplicantStmt2],
      schema: `2_applicant`,
      schemaType: "ALTER",
    },
  ];

  test.each(ddlSeq)("$directive.0", ExecAndVerify(clientPtr));
});

describe("Job Availability DDL", () => {
  const ddlSeq: [
    TestSuite<"CREATE", "ALTER">,
    TestSuite<"ALTER", "ALTER">,
    TestSuite<"ALTER", "ALTER">,
  ] = [
    {
      directive: [
        "CREATE table",
        "job_availability",
        createJobAvailabilityStmt,
      ],
      schema: `0_job_availability`,
      schemaType: "ALTER",
    },
    {
      directive: [
        "ALTER table by removing duration column",
        "job_availability",
        alterJobAvailabilityStmt1,
      ],
      schema: `1_job_availability`,
      schemaType: "ALTER",
    },
    {
      directive: [
        "ALTER table after duration removal, migrate cost_per_hour to be per day instead",
        "job_availability",
        alterJobAvailabilityStmt2,
      ],
      schema: `2_job_availability`,
      schemaType: "ALTER",
    },
  ];

  test.each(ddlSeq)("$directive.0", ExecAndVerify(clientPtr));
});

describe("Department DDL", () => {
  const ddlSeq: [TestSuite<"CREATE", "CREATE">] = [
    {
      directive: ["CREATE table", "department", createDepartmentStmt],
      schema: `department`,
      schemaType: "CREATE",
    },
  ];

  test.each(ddlSeq)("$directive.0", ExecAndVerify(clientPtr));
});

describe("Job DDL", () => {
  const ddlSeq: [TestSuite<"CREATE", "CREATE">] = [
    {
      directive: ["CREATE table", "job", createJobStmt],
      schema: `job`,
      schemaType: "CREATE",
    },
  ];

  test.each(ddlSeq)("$directive.0", ExecAndVerify(clientPtr));
});

describe("Job Application DDL", () => {
  const ddlSeq: [TestSuite<"CREATE", "CREATE">] = [
    {
      directive: ["CREATE table", "job_application", createJobApplicationStmt],
      schema: `job_application`,
      schemaType: "CREATE",
    },
  ];

  test.each(ddlSeq)("$directive.0", ExecAndVerify(clientPtr));
});
