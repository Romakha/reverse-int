module.exports = function reverse (n) {
  let result = ''
  
  n = n + ''
  for(let i = n.length-1; i >= 0; i--){
    result+=n[i]
  }
  let a = parseInt(result)
  return a

}
