import { connect } from "./connect";
import qColumns from "./utils/ddl/columns";
import qConstraint from "./utils/ddl/constraints";
import qRef from "./utils/ddl/referential";

const [mode, table] = process.argv.splice(2);

const main = async () => {
  const client = await connect();
  switch (mode) {
    case "constraints":
      return await qConstraint(table)(client);

    case "constraints/referential":
      return await qRef(table)(client);

    case "columns":
      return await qColumns(table)(client);
  }
};

main()
  .then(
    (d) => JSON.stringify(d, null, 2),
    // d.forEach((r) =>
    //   console.log(Object.entries(r).map(([k, v]) => [k, typeof v])),
    // ),
  )
  .then(console.log)
  .then(() => process.exit(1));
