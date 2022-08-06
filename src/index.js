module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) return false;
  let strLengthOld = str.length;
  let strLengthNew = '';
  while (strLengthNew !== strLengthOld) {
    strLengthOld = str.length;
    bracketsConfig.forEach(bracketPair => {
      bracketPair = bracketPair.join('');
      while (str.indexOf(bracketPair) >= 0) {
      str = str.replace(bracketPair,'');
      }     
    }) 
    strLengthNew = str.length;
  }  
  if (str.length > 0) return false  
  return true   
}
