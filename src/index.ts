// https://docs.pingcap.com/tidbcloud/serverless-driver-prisma-example
// https://prismaio.notion.site/Prisma-Edge-Functions-Early-Access-062612545bbd436d9705b43f65655669

import { connect } from "@tidbcloud/serverless";
import { PrismaTiDBCloud } from "@tidbcloud/prisma-adapter";
import { PrismaClient } from "@prisma/client";

interface Env {
  DATABASE_URL: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const connection = connect({ url: env.DATABASE_URL });
    const adapter = new PrismaTiDBCloud(connection);
    const prisma = new PrismaClient({ adapter });

    const users = await prisma.user.findMany();
    const result = JSON.stringify(users);
    return new Response(result);
  },
};
