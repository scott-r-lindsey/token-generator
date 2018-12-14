/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    email:{
      type: 'string',
      unique: true,
      allowNull: false,
      required: true
    },

    // one to many
    tokens: {
      collection: 'token',
      via: 'owner'
    }

  },

};

