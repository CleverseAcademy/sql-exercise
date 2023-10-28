# DDL Exercises

## To-do
**Worksheets:** 
1. [User table](/src/ddl/to-do/User.ts)
2. [Todo table](/src/ddl/to-do/Todo.ts)

**Verification command:**

> Complete all of your DDL commands and manually test them on a separate database first, then run the below command.

```sh
npm run ddl-test-to-do
```

### Tables definition

1. `User`: ***case-sensitive***
![User definition](/docs/assets/ddl/User.png)
2. `Todo`: ***case-sensitive***
![Todo definition](/docs/assets/ddl/Todo.png)

## Medical appointment
**Worksheets:** 
1. [personal_info table](/src/ddl/appointment/personal_info.ts)
2. [patient table](/src/ddl/appointment/patient.ts)
3. [doctor table](/src/ddl/appointment/doctor.ts)
4. [availability table](/src/ddl/appointment/availability.ts)
5. [appointment table](/src/ddl/appointment/appointment.ts)

**Verification command:**

> Complete all of your DDL commands and manually test them on a separate database first, then run the below command.

```sh
npm run ddl-test-appointment
```
### Tables definition
1. `personal_info`
   1. `createTableStmt`
   ![initial definition](/docs/assets/ddl/personal_info_0.png)
   2. Then rename `fullname` column to `full_name`.
   3. Then change the type of `full_name` column to TEXT type.

   Final table definition should be look like this
  ![personal_info definition](/docs/assets/ddl/personal_info.png)
1. `patient`
![patient definition](/docs/assets/ddl/patient.png)
1. `doctor`
   1. `createTableStmt`
   ![initial definition](/docs/assets/ddl/doctor_0.png)
   2. Then rename `department` column to `specialization`

   Final table definition should be look like this
  ![doctor definition](/docs/assets/ddl/doctor.png)
1. `availability`
   1. `createTableStmt`
   ![initial definition](/docs/assets/ddl/availability_0.png)
   2. Then add `id` column to the table, its type is `UUID`
   3. Then add `date` column to the table, its type is `DATE`
   4. Then add `start_time` column to the table, its type is `TIME`
   5. Make the `id` column PRIMARY KEY
   
   Final table definition should be look like this
  ![availability definition](/docs/assets/ddl/availability.png)
1. `appointment`
![appointment definition](/docs/assets/ddl/appointment.png)

## Organization
**Worksheets:** 
1. [applicant table](/src/ddl/organization/applicant.ts)
2. [job_availability table](/src/ddl/organization/job_availability.ts)
3. [department table](/src/ddl/organization/department.ts)
4. [job table](/src/ddl/organization/job.ts)
5. [job_application table](/src/ddl/organization/job_application.ts)

**Verification command:**

> Complete all of your DDL commands and manually test them on a separate database first, then run the below command.

```sh
npm run ddl-test-organization
```

### Tables definition

1. `applicant` 
   1. `createApplicantStmt`
   ![initial definition](/docs/assets/ddl/applicant_0.png)
   2. Then change the type of `phone` column to 10-character
   3. Then rename `cv` column to `resume`

   Final table definition should be look like this
  ![applicant definition](/docs/assets/ddl/applicant.png)
1. `job_availability` 
   1. `createJobAvailabilityStmt`
   ![initial definition](/docs/assets/ddl/job_availability_0.png)
   2. Then drop `duration` column
   3. Then rename `cost_per_hour` column to `cost_per_day`

   Final table definition should be look like this
  ![job_availability definition](/docs/assets/ddl/job_availability.png)
1. `department`
![department definition](/docs/assets/ddl/department.png)
1. `job`
![job definition](/docs/assets/ddl/job.png)
1. `job_application`
![job_application definition](/docs/assets/ddl/job_application.png)