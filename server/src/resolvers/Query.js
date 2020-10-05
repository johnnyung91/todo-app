function test(parent, args, context, info) {
  return "Hello World"
}

function getUsers(parent, args, context, info) {
  return context.prisma.users.findMany()
}

module.exports = {
  test,
  getUsers
}
