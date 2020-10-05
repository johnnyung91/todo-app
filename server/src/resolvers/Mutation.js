function addStudent(parent, args, context, info) {
  const {firstName, lastName, gradeLevel, email, phoneNumber} = args

  const newStudent = context.prisma.student.create({
    data: {
      firstName,
      lastName,
      gradeLevel,
      email,
      phoneNumber
    }
  })

  return newStudent
}

module.exports = {
  addStudent
}
