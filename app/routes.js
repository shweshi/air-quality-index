var requestService = require('../app/services/requestService');
var responseTransformer = require('../app/transformer/responseTransformer');

module.exports = function(app) {
  app.get('/:city', function(req, res) {
    var path = '/feed/' + req.params.city;
    requestService.get(path)
      .then((data) => {
        console.log(data.data);
        if (data.status == "ok") {
          res.send(responseTransformer.transformData(data.data));
        } else {
          res.send(responseTransformer.transformError(data.data));
        }
      }).catch((error) => {
        res.send(responseTransformer.transformError(error));
      });
  });

};