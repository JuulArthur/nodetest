exports.blog = function(api, next){
	//SKAL BARE LAGE EN KOMMIT, SLETT MEG!

  api.blog = {};

  api.blog._start = function(api, next){
    next();
  };

  api.blog._stop =  function(api, next){
    next();
  };

  next();
}