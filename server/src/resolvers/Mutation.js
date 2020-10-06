function addUser(parent, args, context, info) {
  const { name } = args;
  const newUser = context.prisma.user.create({
    data: {
      name,
    },
  });
  return newUser;
}

function addTodo(parent, args, context, info) {
  const { text, completed } = args;
  const newTodo = context.prisma.todo.create({
    data: {
      text,
      completed,
    },
  });
  return newTodo;
}

function updateTodo(parent, args, context, info) {
  const { todoId, text, completed } = args;
  return context.prisma.todo.update({
    where: { todoId: parseInt(todoId) },
    data: {
      text,
      completed,
    },
  });
}

function deleteTodo(parent, args, context, info) {
  const { todoId } = args;
  return context.prisma.todo.delete({
    where: {todoId: parseInt(todoId)},
  });
}

function completeTodo(parent, args, context, info) {
  const { todoId, completed } = args;

  const todo = context.prisma.todo.findOne({
    where: { todoId: parseInt(todoId) },
  });

  if (!todo) throw new Error("Todo not found!");

  return context.prisma.todo.update({
    data: {
      completed,
    },
    where: { todoId: parseInt(todoId) },
  });
}

function assignTodo(parent, args, context, info) {
  const { todoId, assignedId } = args;

  const todo = context.prisma.todo.findOne({
    where: { todoId: parseInt(todoId) },
  });
  if (!todo) throw new Error("Todo not found!");

  const user = context.prisma.user.findOne({
    where: { userId: assignedId },
  });
  if (!user) throw new Error("User not found!");

  return context.prisma.todo.update({
    where: { todoId: parseInt(todoId) },
    data: {
      assigned: {
        connect: {
          userId: assignedId,
        },
      },
    },
  });
}

module.exports = {
  addUser,
  addTodo,
  updateTodo,
  deleteTodo,
  completeTodo,
  assignTodo,
};
