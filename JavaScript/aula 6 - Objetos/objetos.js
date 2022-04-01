let obj = {}

obj.name = 'Nicole';

obj.age = 22;
console.log(obj)

console.log(Object.values(obj))
console.log(Object.keys(obj))

let person = {
    name: 'Nicole',
    age: 22,
    adress: 'Rua das flores'
}
console.log(person['age'])
person['numberOfSiblings'] = 1

console.log(person['numberOfSiblings'])

// Formas de criar uma nova Key
let mom = "nameOfMom"

person[mom] = 'Iolanda'

