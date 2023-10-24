import { afterAll, beforeAll, describe, test } from "@jest/globals";
import { connect } from "../../connect";
import { QueryGenerator } from "../../engines/q";
import { q1, q2, q3, q4, q5, q6, q7_1, q7_2, q7_3 } from "../../join";
import { SolutionFilePath } from "../../utils/types/dml-path.type";
import {
  ClientPtr,
  orderedRowTest,
  unorderedRowTest,
} from "../utils/helpers.row.test";

const clientPtr: ClientPtr = {
  client: null,
};

beforeAll(async () => {
  clientPtr.client = await connect();
});

beforeAll((done) => done());

afterAll((done) => {
  if (clientPtr.client !== null) clientPtr.client.end();
  done();
});

describe("Join query", () => {
  test.concurrent.each<[string, SolutionFilePath, ReturnType<QueryGenerator>]>([
    [
      `Q1: customers' first and last name, phone number, and district where they are living, whose phone number from 3rd to 5th is 018`,
      "join/query_results-2023-10-06_30553",
      q1,
    ],
    [
      `Q2: a customer's payment history, consisting of payment amount, customer first and last name, and customer phone number, where the historically paid amount is less than $10`,
      "join/query_results-2023-10-10_42903",
      q2,
    ],
    [
      `Q5: all items name, price, and overall stock quantity, total_amount_in_stock. The item price is between 50 and 60, and the combination of stock quantity in every warehouse is less than 300`,
      "join/query_results-2023-10-10_40855",
      q5,
    ],
    [
      `Q6: all customers who is in cl, ev, er, or se state. and place an order in October`,
      "join/query_results-2023-10-08_65712",
      q6,
    ],
    [`Q7.1`, "join/query_results-2023-10-10_72005", q7_1],
    [`Q7.2`, "join/query_results-2023-10-10_80606", q7_2],
  ])("%s - cases.test/%s", unorderedRowTest(clientPtr));

  test.concurrent.each<[string, SolutionFilePath, ReturnType<QueryGenerator>]>([
    [
      `Q3: all order lines that have been placed after Sunday, September 24, 2023, 16:23:00 BKK timezone, have not been delivered yet, and whose price is in the range of $3,000 - $5,000`,
      "join/query_results-2023-10-06_30822",
      q3,
    ],
    [`Q4: top-3 districts`, "join/query_results-2023-10-08_45117", q4],
    [`Q7.3`, "join/query_results-2023-10-10_222417", q7_3],
  ])("Sort strictly %s - cases.test/%s", orderedRowTest(clientPtr));
});
