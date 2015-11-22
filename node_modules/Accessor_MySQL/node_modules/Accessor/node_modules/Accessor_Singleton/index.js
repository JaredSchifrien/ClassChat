var Accessor = require("Accessor");

var instance_pool = {};

module.exports = function(table_name, engine) {
	if( typeof instance_pool[table_name] === "undefined") {
		instance_pool[table_name] = Accessor(table_name, engine);
	}

	return instance_pool[table_name];
};
