# SQL Fundamental exercises

## Database setup

```sh
docker run -p 5432:5432 --name=intro-sql -e POSTGRES_PASSWORD=academy postgres:15
```

The aforementioned command will construct a database container with the name `intro-sql`.

To stop the database, run the following command:

```sh
docker stop intro-sql
```

And for the next time, use:

```sh
docker start intro-sql
```

to start the database again without losing any data.

## Codebase setup

First, install all required packages, both dependencies and devDependencies, with the following command:

```sh
npm install
```

Secondly, run the following test command to make sure that everything is in place where it is supposed to be.

```sh
npm run dml-test-demo
```

The final result was envisioned to look like this as a solid beginning to our long journey down this path.

![Warm welcoming message](/docs/assets/the-beginning.png)

## Looking for the next step?

Browse all exercises at [docs folder](docs/README.md)
