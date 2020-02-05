
/*
 * GET home page.
 */

var group = require('../Groups.json');

exports.view = function(req, res){
  console.log(group);
  res.render('index', group);
};