# SFW exercises

## District

**Worksheet:** [sfw/district.ts](/src/sfw/district.ts)

**Verification command:**
```sh
npm run test-sfw-district [Question no.]
```

### Questions

0. Retrieve every district's names, streets, cities, and zip codes where its tax is greater or equal to 20%.
1. Retrieve every district's city and state where the zip code ends with `9`
2. Retrieve every district's name and state where its year-to-date balance is less than $1,900,000.
3. Retrieve every district's name, city, and state where its year-to-date balance is in the range of $1,850,000 to $2,050,000.
4. Retrieve every district's year-to-date balance, name, state, and tax where its tax is greater than or equal to 7% but not greater than 12%.
5. Retrieve every district's name, state, year-to-date balance, and next available order ID where the year-to-date balance is greater than $2,000,000. **Sort by next available order ID from smallest to biggest.**
6. Retrieve every district's name, state, city, tax, and zip code where its tax is in the range of 12%–15%. **Sort by tax rate from largest to smallest.**

## Customer

**Worksheet:** [sfw/customer.ts](/src/sfw/customer.ts)

**Verification command:**
```sh
npm run test-sfw-customer [Question no.]
```

### Questions

1. Retrieve every customer's first and last name, zip code, and phone number whose last name begins with `CALLYB` and their phone number begins with `71`.
2. Retrieve every customer's first and last name, city, state, and phone number, whose last name ends with `BLE` and their phone number ends with `0151`.
3. Retrieve every customer's first and last name and phone number, with the first name containing a two-consecutive character `o` and the last name containing the word `see`.
4. Retrieve every customer city, state, zip code, and phone number whose 4<sup>th</sup> – 6<sup>th</sup> digits in the phone number are `417`.
5. Retrieve every customer first and last name, zip code, phone number, and year-to-date payment whose first name, after removing a prefix `first-`, has a minimum length of 5, their last name ends with `BLE`, and the 3<sup>rd</sup> to 5<sup>th</sup> digits in their phone number are `218`.
6. Retrieve every customer's first and last name, credit status, and year-to-date payment whose year-to-date payment is greater than $10,000. The last name containing a four-character word begins with `B` and ends with `A` (`B??A`).
7. Retrieve every customer city, state, zip code, phone number, and street name, both first and second, who lives in state `oh`, `my`, `nu`, `mb`, or `er`, and phone number contains a lucky number of `777`.
8. Retrieve every customer city, state, zip code, balance, credit, and year-to-date payment, whose lives in state `it`, `is` or `me`, while balance is less than -$5,000.
9. Retrieve every customer first and last name, zip code, city, state, and balance, whose is a good credit guy, and live in state `we`, `go`, `up`, `on`, `pa`, `or`, or `ma`, and balance is greater than $82,417.
10. Retrieve every customer first and last name, phone number, state, credit status, phone number, and balance whose a good credit guy, live in state `be`,`on`, or `us`, and phone number contains `836`
11. Retrieve every customer's first and last name, as well as phone number, who is a member of the `BARABLEATION`, `ABLEESEEING`, `ABLEPRESATION`, or `CALLYPRESANTI` clan, and phone number's second and third digits are `00`.
12. Retrieve every customer first and last name, phone number, state, entitled discount, year-to-date payment, and balance, who live in state `cl`, `ev`, `er`, or `se`, entitled to more than 30% discount, and last name containing the words `CALL` and `TI`, respectively.
13. Retrieve every customer's first and last name, zip code, and phone number that begins with `202` and ends with `77`. **Sort by customer's first name, alphabetically ascendant.**
14. Retrieve every customer's first and last name, state, phone, credit, registration timestamp, and balance who has more than $100,000 and has been registered as a customer after Sunday, September 24, 2023, 09:20:00 GMT. **Sort by registration timestamp first; if two customers have been registered at the same time, then sort by their balance from largest to smallest.**

    > Tips: Use the TO_CHAR function to convert the timestamp type to the serializable text type as follows:
    > ```sql
    > TO_CHAR(input_col, 'YYYY-MM-DD"T"HH24:MI:SS"Z"') as alias_col
    > ```

15. Retrieve the first and last names, cities, credit ratings, zip codes, and phone numbers of every client whose phone number ends in `151` and whose last name ends in `TION`. **Sort the results by zip code in reverse lexical order.**