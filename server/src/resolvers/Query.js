const listOfStudents = require("../index")

function test(parent, args, context, info) {
  return "Hello World"
}

function getStudents(parent, args, context, info) {
  return listOfStudents.students
}

module.exports = {
  test,
  getStudents
}
