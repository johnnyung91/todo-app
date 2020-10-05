const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function addStudent() {
  const newStudent = await prisma.student.create({
    data: {
      firstName: "Sarah",
      lastName: "Choung",
      gradeLevel: "freshman",
      email: "sarahchoung@gmail.com",
      phoneNumber: "714-987-6543",
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
