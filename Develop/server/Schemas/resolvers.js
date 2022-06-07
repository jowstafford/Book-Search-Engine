const resolvers = {
  Query: {
    me: async function (input) {
      if (input) {
        const inputQuery = await User.findOne({ _id: input_id });
        return inputQuery;
      }
    },
  },
};

module.exports = resolvers;
