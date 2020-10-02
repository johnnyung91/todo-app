const listOfStudents = require("../index")

function addStudent(parent, args, context, info) {
  const {firstName, lastName, gradeLevel, email, phoneNumber} = args
  const student = {
    id: listOfStudents.students.length + 1,
    firstName,
    lastName,
    gradeLevel,
    email,
    phoneNumber,
  }
  listOfStudents.students.push(student)
  return student
}

module.exports = {
  addStudent
}
