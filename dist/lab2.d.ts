declare let arr1: number[];
declare function minElem(arr: number[]): number;
declare let arr2: number[][];
declare function countZero(arr: number[][]): number;
declare let tuple: [string, string, string];
declare function concatTuple(tuple: [string, string, string]): string;
declare enum Print {
    Matrix = "Matrix",
    Inkjet = "Inkjet",
    Laser = "Laser",
    Sublimation = "Sublimation",
    Thermal = "Thermal"
}
declare class Pet {
    name: string;
    age: number;
    speak(): string;
}
declare class Dog extends Pet {
    label: string;
    age: number;
    speak(): string;
}
declare class Cat extends Pet {
    name: string;
    age: number;
    speak(): string;
}
declare function informPet(pet: Pet): void;
declare const dog1: Dog;
declare const cat1: Cat;
declare class Office {
    room: Number;
    label: String;
    print: Print;
    constructor(room: number, label: string, print: Print);
}
declare let off: Office;
declare const jsonOff: string;
