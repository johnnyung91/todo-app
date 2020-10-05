const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const users = await prisma.users.findMany()
  console.log(users)
}

// Call main()
main()
  .catch((e) => {
    throw e;
  })
  // Close database connections
  .finally(async () => {
    await prisma.$disconnect();
  });
