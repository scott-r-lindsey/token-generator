module.exports = {

  friendlyName: 'Random String Generator',

  description: 'Return a random string to the required length.',

  inputs: {

    charcount: {
      type: 'number',
      example: 10,
      description: 'The length of the random string to create',
      required: true
    },

    chars: {
      type: 'string',
      example: 'abcdefghijklomnpqrstuvwxyz0123456789',
      defaultsTo: 'abcdefghijklomnpqrstuvwxyz0123456789',
      description: 'The list of chars that may be used',
      required: false
    }

  },

  sync: true,

  fn: function (inputs) {

    var randomized = '';

    for (var i = 0; i < inputs.charcount; i++){
      randomized += inputs.chars.charAt(Math.floor(Math.random() * inputs.chars.length));
    }

    return randomized;
  }

};
