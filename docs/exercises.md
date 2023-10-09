# Exercises

This exercise is organized into four parts; each part corresponds to each data operation in the CRUD acronym.

In order to get a better understanding of the database scheme, a list of each table column and a database relation overview can be found in the first eight pages of the [Summarized TPC-C specification](/tpcc-schema-and-transaction.pdf).

## How can I verify my query to see if it's correct?

Typically, each exercise part will provide you with instructions on where to put your query and how to test it.

For instance, [the District section of the SFW Exercise](/docs/read/sfw.md#district) will inform you about the **Worksheet** and the **Verification command**. Your query should go in the *Worksheet*, and the *Verification command* is an `npm` command that should be run in your terminal to verify if the query is correct.

As mentioned above, the _Verification command_ is an `npm` command with two mandatory `run` and `<module-to-test>` arguments and another optional `[Question No.]` one.

There are two primary approaches to check whether our query for [the District section of the SFW Exercise](/docs/read/sfw.md#district) is correct:

- `npm run test-sfw-customer`; this command will test the whole file, which means that every question in the district section will be tested just once.
- `npm run test-sfw-customer Q1`. This command will exclude the other questions and test only the first question's query. This allows us to check each query's correctness individually. need less time to complete the test.

Choose it wisely. 🖊️

## Mandatory exercises

### SELECT - C*R*UD
1. [SFW - SELECT *field(s)* FROM *table(s)* WHERE *predicate(s)*](./read/sfw.md) 
2. [Aggregate](./read/aggregate.md)
3. [JOIN - TBD](./read/join.md)

### INSERT - *C*RUD

[TBD](./create/readme.md)

### UPDATE - CR*U*D

[TBD](./update/readme.md)

### DELETE - CRU*D*

[TBD](./delete/readme.md)

## Advanced exercises

4. Windowing - TBD
5. UNION, INTERSECT, EXCEPT - TBD
6. Subquery - TBD