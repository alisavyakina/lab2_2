let arr1 = [89, 555, 34, 0, -2, -55, 47, 8, 2, 90];
function minElem(arr) {
    let min = Number.MAX_VALUE;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log('Массив: ' + arr1);
console.log('Минимальный элемент: ' + minElem(arr1));

let arr2 = [[4, 0, 7], [1, 0, 5], [0, 3, 9]];
function countZero(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] == 0) {
                count++;
            }
        }
    }
    return count;
}
console.log('Двумерный массив: ' + arr1);
console.log('Количество нулевых элементов :' + countZero(arr2));

let tuple = ["String1", "String2", "String3"];
function concatTuple(tuple) {
    let result = "";
    for (let i = 0; i < tuple.length; i++) {
        result += tuple[i];
    }
    return result;
}
console.log('Кортеж :' + concatTuple(tuple));

var Print;
(function (Print) {
    Print["Matrix"] = "Matrix";
    Print["Inkjet"] = "Inkjet";
    Print["Laser"] = "Laser";
    Print["Sublimation"] = "Sublimation";
    Print["Thermal"] = "Thermal";
})(Print || (Print = {}));
console.log('Принтеры: ');
console.log(Print);
console.log('Один из типов:' + Print.Thermal);



class Pet {
    constructor() {
        this.name = 'Some pet';
        this.age = -1;
    }
    speak() {
        return "No speak. I am fish!";
    }
}
class Dog extends Pet {
    constructor() {
        super(...arguments);
        this.label = "AngryHunter";
        this.age = 8;
    }
    speak() {
        return "Yaw-Gaw!";
    }
}
class Cat extends Pet {
    constructor() {
        super(...arguments);
        this.name = 'Barsik';
        this.age = 2;
    }
    speak() {
        return "Miyau!";
    }
}
function informPet(pet) {
    console.log(`name: ${pet.name}, age: ${pet.age}`);
}
const dog1 = new Dog();
const cat1 = new Cat();
console.log('Информация о питомцах:')
informPet(dog1);
informPet(cat1);

class Office {
    constructor(room, label, print) {
        this.room = room;
        this.label = label;
        this.print = print;
    }
}
let off = new Office(111, "CopyCenter", Print.Inkjet);
const jsonOff = JSON.stringify(off);
console.log(jsonOff);
