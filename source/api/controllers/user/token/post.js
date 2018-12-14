module.exports = {

  friendlyName: 'Create a token for a user',

  description: 'Fetches or creates a user, and creates a token',

  inputs: {
    email: {
      description: 'The email address of the user',
      type: 'string',
      example: 'someone@somewhere.com',
      required: true
    }
  },

  fn: async function (inputs) {

    var user = await User.findOrCreate(
      { email: inputs.email },
      { email: inputs.email }
    );

    console.log('----------------------');
    console.log(user);
    console.log('----------------------');

    var token = await Token.create(
      {owner: user.id}
    ).fetch();

    return this.res.json({
      'token': token.value,
      'email': inputs.email,
    });
  }
};
