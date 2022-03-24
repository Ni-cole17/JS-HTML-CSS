let array = ["string 1",1,2,true,"a",["array2"]]

//formas de manipular o array:
//forEach(), push(), pop(),shift(),unshift(),indexOf(),splice(),slice()

//forEach
array.forEach(function(item, index){console.log(item,index)});

//push
array.push(["array3"]);

//pop
array.pop(1);

//object
var object = { string: 'string', number: 1, boolean: true, array: ["array"], objectinterno = {interno: 'interno'}}

console.log(object.objectinterno);

var string = object.string;
console.log(string);

var arrayinterno = object.array;
console.log(arrayinterno);

var {string, boolean, objectinterno} = object;
