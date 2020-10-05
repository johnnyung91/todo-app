function test(parent, args, context, info) {
  return "Hello World";
}

function getUsers(parent, args, context, info) {
  return context.prisma.user.findMany({
    include: {
      todos: true,
    },
  });
}

function getTodos(parent, args, context, info) {
  return context.prisma.todo.findMany();
}

function getCompleted(parent, args, context, info) {
  const { completed } = args;

  return context.prisma.todo.findMany({
    where: { completed },
  });
}

module.exports = {
  test,
  getUsers,
  getTodos,
  getCompleted,
};
