let arr1: number[] = [89, 555, 34, 0, -2, -55, 47, 8, 2, 90];

function minElem(arr: number[]): number{
    let min = Number.MAX_VALUE;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}
console.log('Массив: ' + arr1);
console.log('Минимальный элемент: ' + minElem(arr1));

let arr2: number[][] = [[4,0,524],[0,0,4],[4,4,1]];

function countZero(arr: number[][]): number{
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i][j] == 0){
                count++;
            }
        }
    }
    return count;
}
console.log('Двумерный массив: ' + arr1);
console.log('Количество нулевых элементов :' + countZero(arr2));

let tuple: [string, string, string] = ["cat", "dog", "cow"];

function concatTuple(tuple: [string, string, string]): string{
    let result: string = "";
    for(let i = 0; i < tuple.length; i++){
        result += tuple[i];
    }
    return result;
}
console.log('Кортеж :' + concatTuple(tuple));

enum Print {
    Matrix = "Matrix",
    Inkjet = "Inkjet",
    Laser = "Laser",
    Sublimation = "Sublimation",
    Thermal = "Thermal"
}
console.log('Принтеры: ');
console.log(Print);
console.log('Один из типов:' + Print.Thermal);

class Pet {
    name: string = 'Some pet';
    age: number = -1;
    speak() {
        return "No speak. I am fish!";
    }
}

class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
        return "Miyau!";  
    } 
}
function informPet(pet: Pet){
    console.log(`name: ${pet.name}, age: ${pet.age}`);
}

const dog1 = new Dog();
const cat1 = new Cat();
console.log('Информация о питомцах:')
informPet(dog1);
informPet(cat1);

class Office{
    room: Number;
    label: String;
    print: Print;
    constructor(room: number, label: string, print: Print){
        this.room = room;
        this.label = label;
        this.print = print;
    }
}

let off = new Office(111, "CopyCenter", Print.Inkjet);
const jsonOff: string = JSON.stringify(off);
console.log(jsonOff);


