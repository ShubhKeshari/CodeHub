import { IAnimal } from "./IAnimal"

export interface ICow extends IAnimal {
    givesMilk:boolean;
    hasOwner: boolean;
}
