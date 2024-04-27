
import { IAnimal } from "./IAnimal";

class Animal implements IAnimal {
    noOfLegs: number;
    type: "Herbivores" | "Carnivorous" ; 
    gender: "Male" | "Female";
    hasHorn: boolean ;
    age: number;
    constructor( gender: "Male" | "Female", age: number) {
        this.noOfLegs = 4 ;
        this.type = "Herbivores";
        this.gender = gender;
        this.hasHorn = true;
        this.age = age;
    }
}

export default Animal;
