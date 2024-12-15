import { Person } from './index';

describe('Person', () => {
  it('should have a name', () => {
    const person = new Person('John Doe');
    expect(person.name).toEqual('John Doe');
  });
});
