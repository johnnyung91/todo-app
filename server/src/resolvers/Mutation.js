function addUser(parent, args, context, info) {
  const { name } = args;

  const newUser = context.prisma.users.create({
    data: {
      name,
    },
  });

  return newUser;
}

module.exports = {
  addUser,
};
