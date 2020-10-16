
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let resalt = [];
  if (matrix !== undefined) {
    for (i = 0; i < matrix.length; i++ ) {
      if (i % 2) {
        Array.prototype.push.apply (resalt,matrix[i].reverse()); 
      } else {
         Array.prototype.push.apply (resalt,matrix[i]);
        }
    }
  }
 return resalt;
}
