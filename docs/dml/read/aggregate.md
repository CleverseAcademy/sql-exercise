# Aggregate

## Customer

**Worksheet:** [aggregate/customer.ts](/src/aggregate/customer.ts)

**Verification command:**

```sh
npm run dml-test-aggregate-customer [Question No.]
```

### Questions

1. Calculate the average year-to-date payment `average_ytd_payment` of every customer.
2. Calculate the average customer year-to-date payment `state_avg_ytd` for each state.
3. Calculate the maximum of each family discount, `max_family_discount`, where their last name begins with `CALLY` or `ANTI`.
4. For families whose last name starts with `OUGHT` or `EINGEIN`, determine the family minimum balance, `lowest_family_balance`.
5. To determine which consumers have good and bad credit, count a number of them, `cnt`.
6. Report the customer discount percentage distribution, which is divided into six groups.
   - discount = 0%
   - 0% < discount <= 10%
   - 10% < discount <= 20%
   - 20% < discount <= 30%
   - 30% < discount <= 40%
   - 40% < discount <= 50%  
     And report it as a 2-column table, `discount_percentage_ceiling`, and `amt`. `discount_percentage_ceiling` is an upper boundary within each group, while `amt` is a number of discounts that fit in a given group.
7. Add up all customer year-to-date payments `sum_state_ytd_payment`, grouping by state.
8. Report all states in which the total customer year-to-date payment `sum_state_ytd_payment` is greater than $360,000.
9. Summarize districts' total of customer year-to-date payment `sum_district_ytd_payment`.
10. Report the only state with more than 450 consumers', `state_ppls_cnt`, total year-to-date payments, `state_ytd_payment`, for each state. **Sort by state's total year-to-date payment in an increasing order.**
11. Indicate how many consumers, `state_ppls_cnt`, there are in each state where the average customer discount is no less than 25%, `state_avg_discount`. **Sort in decreasing order by average customer discount.**
