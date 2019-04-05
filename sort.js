var list = [];

module.exports.add_nums = function (number) {
  list.push(number);
}
module.exports.sort_array = function(){
  list.sort((a,b) => a - b);
  return list;
}