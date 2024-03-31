function randomChar(length: number = 20) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  const randomArray = new Uint8Array(length)
  crypto.getRandomValues(randomArray)
  randomArray.forEach((number) => {
    result += chars[number % chars.length]
  })
  return result
}

export default randomChar
