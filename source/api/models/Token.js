/**
 * Token.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    // many to one
    owner: {
      model: 'user',
      allowNull: false
    },

    // the actual token string
    value:{
      type: 'string',
      allowNull: false,
    }
  },

  // generate the token automatically
  beforeCreate: function (valuesToSet, proceed) {
    valuesToSet.value = sails.helpers.random(10);

    return proceed();
  }

};

