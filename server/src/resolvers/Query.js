const students = [{
  id: 1,
  firstName: "Johnny",
  lastName: "Ung",
  gradeLevel: "freshman",
  email: "johnnyung91@gmail.com",
  phoneNumber: "626-586-8079"
}, {
  id: 2,
  firstName: "Michael",
  lastName: "Zhu",
  gradeLevel: "freshman",
  email: "mzhu23@gmail.com",
  phoneNumber: "626-123-4567"
}]

function test(parent, args, context, info) {
  return "Hello World"
}

function getStudents(parent, args, context, info) {
  return students
}

module.exports = {
  test,
  getStudents
}
