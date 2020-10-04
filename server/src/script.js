const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function addStudent() {
  const newStudent = await prisma.student.create({
    data: {
      firstName: "Michael",
      lastName: "Zhu",
      gradeLevel: "freshman",
      email: "mzhu23@gmail.com",
      phoneNumber: "626-123-4567",
    },
  })

  const getStudents = await prisma.student.findMany();
  console.log(getStudents);

}

// Call main()
addStudent()
  .catch((e) => {
    throw e;
  })
  // Close database connections
  .finally(async () => {
    await prisma.$disconnect();
  });
