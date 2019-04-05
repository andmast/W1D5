var sort = require("./sort");
var list = [20,50,40,10,36,34,2,10,1]
var log = console.log;
log(sort)

list.forEach(number => sort.add_nums(number));
log(sort.sort_array(list));