
const MAX = '9007199254740991'.length

class numbersModule {

  static _numberSeparation(num) {

    const numArray = []

    if (num.length >= 8) {

      let index = 0

      for (let i = 1; i < Math.round(num.length / 8); i++) {
        numArray.push(num.slice(index, 8 * i))
        index = 8 * i
      }

      numArray.push(num.slice(index))

    } else {
      numArray.push(num.slice(0, 8))
    }

    return numArray
  }

  static sumBig(num1, num2) {

    let num1Array = this._numberSeparation(num1)
    let num2Array = this._numberSeparation(num2)

    // console.log('num1Array =', num1Array);
    // console.log('num2Array =', num2Array);

    let sum = []

    let ostatok = 0
    let maxNumber = 100000000

    for (let i = num1Array.length - 1; i >= 0; i--) {

      // if (num2Array[i] == undefined) break
      let currentSum = +num1Array[i] + +num2Array[i]

      if (i == 0) {
        sum.push(currentSum + ostatok)
        break
      }

      if (currentSum >= maxNumber) {
        sum.push(currentSum - maxNumber + ostatok)
        ostatok = Math.floor(currentSum / maxNumber)
      } else {
        sum.push(currentSum + ostatok)
        ostatok = 0
      }

    }
    let answer = sum.reverse()

    // console.log(answer);

    return answer.join('')

  }


  static multiply(num1, num2) {

    let sum = num1

    for (let i = 1; i < +num2; i++) {
      // console.log(i)
      sum = this.sumBig(sum, num1)
    }
    return sum
  }

  static subBig(num1, num2) {
    let num1Array = this._numberSeparation(num1)
    let num2Array = this._numberSeparation(num2)

    // console.log('num1Array =', num1Array);
    // console.log('num2Array =', num2Array);

    let sub = []
    let maxNumber = 100000000
    let ostatok = 0
    for (let i = num1Array.length - 1; i >= 0; i--) {

      let currentSum = +num1Array[i] - +num2Array[i]

      if (i == 0) {
        sub.push(currentSum)
        break
      }

      if (currentSum < 0) {
        sub.push(maxNumber - currentSum)
        ostatok = 1
      } else {
        sub.push(currentSum - ostatok)
        ostatok = 0
      }

    }
    sub.reverse()
    // let result = var number = "0.00558";
    // number = number.replace(/^[0\.]+/, "");
    // console.log(number);//number is now "558"

    let answer = sub.join('')
    answer = answer.replace(/^[0]+/, "");
    if (answer == '') answer = 0

    return answer

  }
  static div(num1, num2) {
    return num1 / num2
  }

  static _createNum1(str) {

  }
}
module.exports = { numbersModule }