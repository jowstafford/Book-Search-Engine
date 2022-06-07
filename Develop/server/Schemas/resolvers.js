const { signToken } = require('../utils/auth');

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

    login: async function ({ email }) {
      const client = await client.findOne({ email });
      const SignToken = signToken(client);
      return { SignToken, client };
    },

    saveBook: async function ({ newBook }, input) {
      if (input) {
        const updatedNewUser = await findByIdAndUpdate(
          { _id: input_id },
          { $push: { savedBooks: newBook } },
          { new: true }
        );
        return updatedNewUser;
      }
    },

    removeBook: async ({ bookId }, input) => {
      if (input) {
        const updatedUser = await findByIdAndUpdate(
          { _id: input_id },
          { $pull: { savedBooks: { bookId } } },
          { new: true }
        );
        return updatedUser;
      }
    },
  },
};

module.exports = resolvers;
