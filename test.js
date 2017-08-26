var ferror =  require('./index');
var error_map = require('./sample_error_map');

ferror.set_error_map(error_map);


s = new ferror("DB_101");
sconsole.log(s)