const resolvers = {
  Query: {
    me: async function (input) {
      if (input) {
        const inputQuery = await User.findOne({ _id: input_id });
        return inputQuery;
      }
    },
  },
  Mutation: {
    addUser: async function (i) {
      const client = await client.create(i);
      const SignToken = signToken(client);
      return { SignToken, client };
    },
  },
};

module.exports = resolvers;
