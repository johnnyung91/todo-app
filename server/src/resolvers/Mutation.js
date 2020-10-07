async function addUser(parent, args, context, info) {
  const { name } = args;
  if (!name) throw new Error("Name must be provided")

  const newUser = await context.prisma.user.create({
    data: {
      name,
    },
  });
  return newUser;
}

async function addTodo(parent, args, context, info) {
  const { text, completed, assignedId } = args;
  const newTodo = await context.prisma.todo.create({
    data: {
      text,
      completed,
      // Assigning todo using connect
      assigned: {
        connect: {
          userId: assignedId
        }
      }
    },
  });
  return newTodo;
}

async function updateTodo(parent, args, context, info) {
  const { id, text, completed, assignedId } = args;
  return await context.prisma.todo.update({
    where: { id: parseInt(id) },
    data: {
      text,
      completed,
      assigned: {
        connect: {
          userId: assignedId
        }
      }
    },
  });
}

async function deleteTodo(parent, args, context, info) {
  const { id } = args;
  return await context.prisma.todo.delete({
    where: {id: parseInt(id)},
  });
}

async function completeTodo(parent, args, context, info) {
  const { id, completed } = args;

  const todo = await context.prisma.todo.findOne({
    where: { id: parseInt(id) },
  });

  if (!todo) throw new Error("Todo not found!");

  return await context.prisma.todo.update({
    data: {
      completed,
    },
    where: { id: parseInt(id) },
  });
}

module.exports = {
  addUser,
  addTodo,
  updateTodo,
  deleteTodo,
  completeTodo,
};
