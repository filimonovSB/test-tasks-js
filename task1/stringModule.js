class StringModule {

  static lowerString(str) {

    let temp = str[0].toUpperCase()
    let sub = str.substr(1).toLowerCase()

    return temp + sub
  }

  static deleteSpace(str) {

    let str2 = str.replace(/[,]/g, ', ')
    str2 = str2.replace(/[.]/g, '. ')

    str2 = str2.replace(/\s,/g, ',')
    str2 = str2.replace(/\s\./g, '.')

    str2 = str2.replace(/\s{2,}/g, ' ').trim()

    return str2

  }

  static countWords(str) {
    return str.split(' ').length
  }

  static uniqWords(str) {
    let arr = str.split(/[, .:!?;()'"]/)

    let result = {}

    arr.forEach(word => {
      let w = word.toLowerCase()

      if (w === '') return

      if (result.hasOwnProperty(w)) {
        result[w] = result[w] + 1
      } else {
        result[w] = 1
      }
    })

    return result
  }

}

module.exports = { StringModule }