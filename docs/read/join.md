# JOIN

**Worksheet:** [join/index.ts](/src/join/index.ts)

**Verification command:**

```sh
npm run test-join [Question No.]
```

### Questions

1. Retrieve customers' first and last name, phone number, and district where they are living, whose phone number from 3<sup>rd</sup> to 5<sup>th</sup> is `018`.
2. Retrieve a customer's payment history, consisting of payment amount, customer first and last name, and customer phone number, where the historically paid amount is less than $10.
3. Retrieve all order lines that have been placed after Sunday, September 24, 2023, 16:23:00 BKK timezone, have not been delivered yet, and whose price is in the range of $3,000–$5,000; **sort in an increasing order by order placement timestamp first; if both rows were at the same time, then sort by order-lines amount in the same direction.**
4. In order to say thank you to all customers in the top-3 districts that have the most year-to-date balance, please write a query to retrieve all customer whose a good credit guys, and their balance is positive (greater than 0). **Sort by individual's ytd-payment from largest to smallest, with last name alphabetically ascending.**  
   Each retrieved row must consist of:
	- Personally Identifiable Information; PII 
		- Full name: *c_first*, *c_middle*, *c_last*
		- Address: *c_street_1*, *c_street_2*, *c_city*, *c_city*, and *c_zip*
		- *c_phone*
	- District information
		- *d_name*
		- *d_ytd_payment*
5. Retrieve all item names, prices, and overall stock quantities, `total_amount_in_stock`. The item price is between 50 and 60, and the combination of stock quantities in every warehouse is less than 300.
6. Retrieve all customers who is in `cl`, `ev`, `er`, or `se` state. and place an order after Sun, 01 Oct 2023 00:00:00 but before Mon, 02 Oct 2023 18:45:00, both are in Bangkok timezone.
   Each row must consist of
	1.  Personally Identifiable Information; PII 
		- First and last name
		- Phone number
		- credit status
	2. Order information
		1. Number of order-lines: *o_ol_cnt*
7. Supposedly, we're going to shut down warehouses because their tax is higher than 15% as a reason for cost optimization.
	1. Retrieve items' name, price, and combined going-to-be-closed stock quantity, `combined_quantity`, whose price is between 80 and 90 and overall stock quantity while counting only the going-to-be-closed warehouses is less than 100.
	2. Assume that the cost of stock transit is 9% of the total item price within the warehouse's stocks. Calculate the transit cost, cluster by warehouses.
    > Hint: Read the 11<sup>th</sup> page of the [summarized TPC-C specification](/tpcc-schema-and-transaction.pdf) to get some idea of how the item's total price is calculated.
	3. Write a query that reports if it's possible to move items from the above-mentioned warehouses to the rest, each row distinct by item id, consisting of:
		- *i_id*
		- *i_name*
		- *old_warehouse_cnt*: a number of items that are currently being kept in the warehouses being shut down 
		- *status*: either `SUITABLE` or `UNSUITABLE`; show `SUITABLE` if the remaining capacity of the remaining warehouses, calculated by `100 - S_QUANTITY` when *S_QUANTITY* is chosen from the row with matching *I_ID* for each item, is greater than the sum of *S_QUANTITY* for the warehouses being shut down. <br/> Otherwise, show `UNSUITABLE`. 
  
        **Sort by item ID in an increasing order.**