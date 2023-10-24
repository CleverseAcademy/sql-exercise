import { afterAll, beforeAll, describe, test } from "@jest/globals";
import { connect } from "../../connect";
import { createTodoStmt } from "../../ddl/to-do/Todo";
import { createUserStmt } from "../../ddl/to-do/User";
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
    `DROP TABLE IF EXISTS "Todo";
  DROP TABLE IF EXISTS "User";`
  )(clientPtr.client);
});

beforeAll((done) => done());

afterAll((done) => {
  if (clientPtr.client !== null) clientPtr.client.end();
  done();
});

describe("User DDL", () => {
  const ddlSeq: [TestSuite<"CREATE", "CREATE">] = [
    {
      directive: ["CREATE table", "User", createUserStmt],
      schema: `User`,
      schemaType: "CREATE",
    },
  ];

  test.each(ddlSeq)("$directive.0", ExecAndVerify(clientPtr));
});

describe("Todo DDL", () => {
  const ddlSeq: [TestSuite<"CREATE", "CREATE">] = [
    {
      directive: ["CREATE table", "Todo", createTodoStmt],
      schema: `Todo`,
      schemaType: "CREATE",
    },
  ];

  test.each(ddlSeq)("$directive.0", ExecAndVerify(clientPtr));
});
