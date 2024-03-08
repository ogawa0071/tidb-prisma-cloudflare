# TiDB Serverless + Prisma (Edge Functions Early Access) + Cloudflare Workers

This repository showcases an example of integrating TiDB Serverless with Cloudflare Workers, leveraging the edge function deployment support provided by Prisma.

Despite the [documentation for TiDB Serverless](https://docs.pingcap.com/tidbcloud/serverless-driver-prisma-example#use-the-prisma-adapter-in-edge-environments) stating that "Currently, `@tidbcloud/prisma-adapter` is not compatible with edge environments", this demo proves otherwise by successfully operating in such conditions.

Please note that this setup **does not use Prisma Accelerate** connection pool.

For more details on Prisma Edge Functions Early Access, check out: https://pris.ly/early-access/edge-functions.

## Demo

https://tidb-prisma-cloudflare.ogawa0071.workers.dev/

## How to Use

You will need the following:

- A Cloudflare account
- A TiDB Serverless account

1. Clone the repository

```sh
git clone https://github.com/ogawa0071/tidb-prisma-cloudflare.git
cd tidb-prisma-cloudflare
npm install
```

2. Copy `.env` and `.dev.vars` files by running the following commands:

```sh
cp .env.example .env
cp .dev.vars.example .dev.vars
```

3. Update `.env` and `.dev.vars` files with your TiDB Serverless connection string.

4. Run the following commands to apply the existing database migrations located in the `/prisma` directory:

```sh
npx prisma migrate dev --name init
npx prisma generate
```

5. Run the following command to seed the database with initial data:

```sh
npx prisma db seed
```

6. Run the following command to start the server:

```sh
npm run dev
```

7. Open the browser at http://localhost:8787 to see result.

8. Run the following commands to deploy application and configure secret on the Cloudflare Workers platform:

```sh
npm deploy
npx wrangler secret put DATABASE_URL
```
