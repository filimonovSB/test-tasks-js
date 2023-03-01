class Product {
  constructor(name, price, quantity, description) {
    this.name = name
    this.price = price
    this.quantity = quantity
    this.description = description
  }
}

String.prototype.contains = String.prototype.includes
String.prototype.starts = String.prototype.startsWith
String.prototype.ends = String.prototype.endsWith

Number.prototype['='] = function (value) {
  return this == value
}

Number.prototype['>'] = function (value) {
  return this > value
}

Number.prototype['<'] = function (value) {
  return this < value
}

Number.prototype['<='] = function (value) {
  return this <= value
}
Number.prototype['>='] = function (value) {
  return this >= value
}

function filterProductString(arr, str) {
  const arr = str.split('&')

  const props = arr.map(item => ({
    ops: item.split(/(-|>=?|<=?|=)/).filter((v) => v && /[^-]/.test(v))
  }))

  const result = arr.filter(value => {
    for (let prop of props) {
      if (!value[prop.ops[0]][prop.ops[1]](prop.ops[2]))
        return false
    }

    return true
  })
  return result
}

function createProduct(name, price, quantity, description) {
  return new Product(name, price, quantity, description)
}

const str = 'name-starts-fd&quantity=5'
const str2 = 'name-contains-fd&price-=2&quantity->5&description-ends-abc'



const arr = [
  createProduct('mifdlk', 60, 5, '---abc'),
  createProduct('Foodfd', 2, 34, 'asdabc'),
  createProduct('fdbread', 25, 5, 'asdqw abc'),
  createProduct('Cola', 50, 100, 'cdqa2 abc'),
  createProduct('Milk', 60, 4, 'description Milk'),
  createProduct('milk', 60, 5, '---abc'),
  createProduct('Foodfd', 2, 34, 'asdabc'),
  createProduct('fdbread', 25, 5, 'cool abc'),
  createProduct('water', 50, 5, 'cool'),
  createProduct('Milk2', 28, 4, 'abc milk')
]


console.log(str, '=>', filterProductString(arr, str))
console.log(str2, '=>', filterProductString(arr, str2)) 
