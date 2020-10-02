const { GraphQLServer } = require("graphql-yoga");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation")

const students = [
  {
    id: 1,
    firstName: "Johnny",
    lastName: "Ung",
    gradeLevel: "freshman",
    email: "johnnyung91@gmail.com",
    phoneNumber: "626-586-8079",
  },
  {
    id: 2,
    firstName: "Michael",
    lastName: "Zhu",
    gradeLevel: "freshman",
    email: "mzhu23@gmail.com",
    phoneNumber: "626-123-4567",
  },
];

exports.students = students

const resolvers = {
  Query,
  Mutation
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
});
server.start(() => console.log(`Server is running on http://localhost:4000`));
