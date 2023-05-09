import { Dog } from "./08-inheritance";

// function getValue(value: unknown) {
//   return value;
// }

import axios from "axios";

// function getValue(value: string | number) {
//   return value;
// }

function getValue<myType>(value: myType) {
  const array: myType[] = [value]
  return value;
}
getValue<number>(12).toFixed();
getValue<string>('12').toLowerCase();
getValue<number[]>([12,121,212]).forEach;
const fifi = new Dog('fif', 'mauro');
getValue<Dog>(fifi).greeting
// Promise<boolean>
// axios.get<string[]>
