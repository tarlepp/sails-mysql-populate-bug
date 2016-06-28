module.exports = {
    test1: function (request, response) {
        sails.models.owner.find().populate('pets').exec(function(error, results) {
            return response.json(results);
        });
    },
    test2: function (request, response) {
        sails.models.pet.find().populate('owner').exec(function(error, results) {
            return response.json(results);
        });
    }
};
