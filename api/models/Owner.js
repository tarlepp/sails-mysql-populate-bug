/**
 * Bar.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: 'STRING',
    age: 'INTEGER',
    isAwesome: 'boolean',
    pets: {
      collection: 'pet',
      via: 'owner'
    }
  }
};
