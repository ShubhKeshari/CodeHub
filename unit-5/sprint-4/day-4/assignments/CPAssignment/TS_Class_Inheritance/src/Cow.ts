import { ICow } from "./ICow";
import Animal from "./Animal";
interface ParamType {
  gender: "Male" | "Female";
  age: number;
  givesMilk: boolean;
  hasOwner: boolean;
}
class Cow extends Animal implements ICow {
  givesMilk: boolean;
  hasOwner: boolean;
  constructor({
    gender,
    age,
    givesMilk,
    hasOwner,
  }: ParamType) {
    super(gender, age);
    this.givesMilk = givesMilk;
    this.hasOwner = hasOwner;
  }
}

export default Cow;
