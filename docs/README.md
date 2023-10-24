# Exercises

This exercise is organized into two parts: [DDL (*Data Definition Language)*](./ddl/README.md) and [DML (*Data Manipulation Language)*](./dml/README.md).

## How can I verify my query to see if it's correct?

Typically, each exercise part will provide you with instructions on where to put your query and how to test it.

For instance, [the District section of the SFW Exercise](/docs/dml/read/sfw.md#district) will inform you about the **Worksheet** and the **Verification command**. Your query should go in the _Worksheet_, and the _Verification command_ is an `npm` command that should be run in your terminal to verify if the query is correct.

As mentioned above, the *Verification command* is an `npm` command with two mandatory `run` and `<module-to-test>` arguments or, only for DML, an optional `[Question No.]` one.

There are two primary approaches to check whether our query for [the District section of the SFW Exercise](/docs/dml/read/sfw.md#district) is correct:

- `npm run dml-test-sfw-customer`; this command will test the whole file, which means that every question in the district section will be tested just once.
- `npm run dml-test-sfw-customer Q1`. This command will exclude the other questions and test only the first question's query. This allows us to check each query's correctness individually. need less time to complete the test.

Choose it wisely. 🖊️
