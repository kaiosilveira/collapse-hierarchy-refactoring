import { Person } from '../person/index.js';

export class Student extends Person {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}
