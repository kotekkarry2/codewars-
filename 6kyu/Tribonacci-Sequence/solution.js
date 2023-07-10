function tribonacci(signature,n){
  let result = signature
  if (n < 3) return signature.slice(0, n)
  for (let i = 3; i < n; i++) {
    result[i] = result[i - 3] + result[i - 2] + result[i- 1]
  }
  return result
}
console.log(tribonacci( [1,1,1], 10))