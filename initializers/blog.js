exports.blog = function(api, next){
	//SKAL BARE LAGE EN KOMMIT, SLETT MEG!

	var redis = api.redis.client;

  api.blog = {
  	//constants
  	seperator: ";",
  	postPrefix: "posts",
  	commentPrefix: "comments",
  	//posts
  	postAdd: function(userName, title, content, next){
  		var key = this.buildTitleKey(userName, title);
  		var data = {
  			content: content,
  			title: title,
  			userName: userName,
  			createdAt: new Date().getTime(),
  			UpdatedAt: new Date().getTime(),
  		}
  		redis.hmset(key, data, function(error){
  			next(error);
  		});
  	},

  	postView: function(userName, title, next){
  		var key = this.buildTitleKey(userName, title);
  		redis.hgetall(key, function(error, data){
  			next(error, data);
  		});
  	},

  	postsList: function(userName, next){
  		var self = this;
  	},
  	postEdit: function(userName, title, content, next){},
  	postDelete: function(userName, title, next){},
  	//comments
  	commentAdd: function(userName, title, commenterName, comment, next){},
  	commentsView: function(userName, title, next){},
  	commentDelete: function(userName, title, commentId, next),
  };

  api.blog._start = function(api, next){
    next();
  };

  api.blog._stop =  function(api, next){
    next();
  };

  next();
}