const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  // const newUser = await prisma.user.create({
  //   data: {
  //     name: "Michael",
  //     todos: {
  //       create: [
  //         {text: "Walk the dog"},
  //         {text: "Mop the floor"}
  //       ]
  //     }
  //   }
  // })
  // console.log(prisma.todo.findMany())
  // const usersWithTodos = await prisma.user.findMany({
  //   include: {
  //     todos: true
  //   }
  // })
  // console.log(JSON.stringify(usersWithTodos, null, 2))

  return await prisma.todo.update({
    where: {id: 3},
    data: {
      text: "Do laundry",
      completed: true
    }
  })
  // const allTodos = await prisma.todo.findMany();
  // console.log(allTodos);
  // return await prisma.user.delete({
  //   where: {
  //     userId: parseInt(17)
  //   }
  // })
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
