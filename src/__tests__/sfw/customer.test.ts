import { afterAll, beforeAll, describe, test } from "@jest/globals";
import { connect } from "../../connect";
import { QueryGenerator } from "../../engines/q";
import {
  q1,
  q10,
  q11,
  q12,
  q13,
  q14,
  q15,
  q2,
  q3,
  q4,
  q5,
  q6,
  q7,
  q8,
  q9,
} from "../../sfw/customer";
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

describe("Customer SFW query", () => {
  test.concurrent.each<[string, SolutionFilePath, ReturnType<QueryGenerator>]>([
    [
      `Q1: whose last name begins with CALLYB and their phone number begins with 71`,
      "sfw/query_results-2023-10-04_11322",
      q1,
    ],
    [
      "Q2: whose last name ends with BLE and their phone number ends with 0151",
      "sfw/query_results-2023-10-04_12002",
      q2,
    ],
    [
      `Q3: first name containing a two-consecutive character o and the last name containing the word SEE`,
      "sfw/query_results-2023-10-04_12350",
      q3,
    ],
    [
      `Q4: whose 4th – 6th digits in the phone number are 417`,
      "sfw/query_results-2023-10-04_12633",
      q4,
    ],
    [
      `Q5: whose first name, after removing a prefix first-, has a minimum length of 5, their last name ends with BLE, and the 3rd to 5th digits in their phone number are 218`,
      "sfw/query_results-2023-10-04_13011",
      q5,
    ],
    [
      `Q6: whose year-to-date payment is greater than $10,000. The last name containing a four-character word begins with B and ends with A`,
      "sfw/query_results-2023-10-04_13829",
      q6,
    ],
    [
      `Q7: who lives in state 'oh', 'my', 'nu', 'mb', or 'er', and phone number contains a lucky number of 777`,
      "sfw/query_results-2023-10-04_14422",
      q7,
    ],
    [
      `Q8: whose lives in state 'it', 'is' or 'me', while balance is less than -$5,000`,
      "sfw/query_results-2023-10-04_20141",
      q8,
    ],
    [
      `Q9: whose is a good credit guy, and live in state 'we', 'go', 'up', 'on', 'pa', 'or', or 'ma', and balance is greater than $82,417`,
      "sfw/query_results-2023-10-04_20653",
      q9,
    ],
    [
      `Q10: whose a good credit guy, live in state 'be', 'on', or 'us', and phone number contains 836`,
      "sfw/query_results-2023-10-04_21107",
      q10,
    ],
    [
      `Q11: who is a member of the BARABLEATION, ABLEESEEING, ABLEPRESATION, or CALLYPRESANTI clan, and phone number's second and third digits are 00`,
      "sfw/query_results-2023-10-04_21345",
      q11,
    ],
    [
      `Q12: who live in state 'cl', 'ev', 'er', or 'se', entitled to more than 30% discount, and last name containing the words 'CALL' and 'TI', respectively`,
      "sfw/query_results-2023-10-04_21837",
      q12,
    ],
  ])("%s - cases.test/%s", unorderedRowTest(clientPtr));

  test.concurrent.each<[string, SolutionFilePath, ReturnType<QueryGenerator>]>([
    [
      `Q13: whose phone number that begins with 202 and ends with 77. Sort by customer's first name, alphabetically ascendant`,
      "sfw/query_results-2023-10-04_30601",
      q13,
    ],
    [`Q14`, "sfw/query_results-2023-10-04_32555", q14],
    [
      `Q15: whose phone number ends in 151 and whose last name ends in TION. Sort the results by zip code in reverse lexical order`,
      "sfw/query_results-2023-10-04_33455",
      q15,
    ],
  ])("Sort strictly %s - cases.test/%s", orderedRowTest(clientPtr));
});
