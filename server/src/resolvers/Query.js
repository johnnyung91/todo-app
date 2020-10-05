function test(parent, args, context, info) {
  return "Hello World"
}

function getStudents(parent, args, context, info) {
  return context.prisma.student.findMany()
}

module.exports = {
  test,
  getStudents
}
