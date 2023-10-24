import "dotenv/config";
import { Client } from "pg";

const firstQueryArgument = "cleverse-sql-exercise";

export const connect = async () => {
  const client = new Client();
  await client.connect();

  const res = await client.query("SELECT $1::text as message", [
    firstQueryArgument,
  ]);
  if (res.rows[0].message === firstQueryArgument) return client;

  throw new Error(
    `First query doesn't match the expected return value: ${firstQueryArgument}
    Return value: ${res}`,
  );
};
