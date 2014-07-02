exports.users = function(api, next){

  api.users = {};

  api.users._start = function(api, next){
    next();
  };

  api.users._stop =  function(api, next){
    next();
  };

  next();
}