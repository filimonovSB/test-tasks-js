const { StringModule } = require('./stringModule')

console.log('\nМетод с регистром')
console.log("sErgey =>", StringModule.lowerString('sErgey'))

console.log('\nМетод который удаляет лишние пробелы')
console.log('Вот пример строки,в которой используются знаки препинания. После знаков должны стоять пробелы, а перед знаками их быть не должно. Если есть лишние подряд идущие пробелы, они должны быть устранены. =>')
console.log(StringModule.deleteSpace('Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.'))

console.log('\nМетод с подчетом слов')
console.log('Я счастливый как никто\n', StringModule.countWords('Я счастливый как никто'))

console.log('\nМетод с подчетом уникальных слов')
console.log('Текст, в котором слово текст несколько раз встречается и слово тоже')
console.log(StringModule.uniqWords('Текст, в котором слово текст несколько раз встречается и слово тоже')) 