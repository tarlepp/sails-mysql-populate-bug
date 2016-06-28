/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */
var async = require('async');

module.exports.bootstrap = function(cb) {
  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)

  var cleanPets = function (callback) {
    sails.models.pet.destroy({}).exec(function (error) {
      callback(error);
    });
  };

  var cleanOwners = function (callback) {
    sails.models.owner.destroy({}).exec(function (error) {
      callback(error);
    });
  };

  var createOwner = function (callback) {
    sails.models.owner.create({name:'Mike', age:'21', isAwesome: true}).exec(function (error, owner) {
      callback(error, owner);
    });
  };

  var createPet1 = function (owner, callback) {
    sails.models.pet.create({name: 'Pinkie Pie', color: 'pink', owner: owner.id}).exec(function (error) {
      callback(error, owner);
    });
  };

  var createPet2 = function (owner, callback) {
    sails.models.pet.create({name:'Applejack', color: 'orange', owner: owner.id}).exec(function (error) {
      callback(error);
    });
  };

  async.waterfall([
      cleanPets,
      cleanOwners,
      createOwner,
      createPet1,
      createPet2
  ], cb);
};
