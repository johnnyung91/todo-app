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
  const { id, text, completed } = args;
  return context.prisma.todo.update({
    where: { id: parseInt(id) },
    data: {
      text,
      completed,
    },
  });
}

function deleteTodo(parent, args, context, info) {
  const { id } = args;
  return context.prisma.todo.delete({
    where: {
      id: parseInt(id),
    },
  });
}

function completeTodo(parent, args, context, info) {
  const { id, completed } = args;

  const todo = context.prisma.todo.findOne({
    where: { id: parseInt(id) },
  });

  if (!todo) throw new Error("Todo not found!");

  return context.prisma.todo.update({
    data: {
      completed,
    },
    where: { id: parseInt(id) },
  });
}

function assignTodo(parent, args, context, info) {
  const { id, assignedId } = args;

  const todo = context.prisma.todo.findOne({
    where: { id: parseInt(id) },
  });
  if (!todo) throw new Error("Todo not found!");

  const user = context.prisma.user.findOne({
    where: {id: parseInt(assignedId)}
  })
  if (!user) throw new Error("User not found!")

  return context.prisma.todo.update({
    where: {id: id},
    data: {
      assigned: {
        connect: {
          id: assignedId
        }
      }
    }
  })
}

module.exports = {
  addUser,
  addTodo,
  updateTodo,
  deleteTodo,
  completeTodo,
  assignTodo,
};
