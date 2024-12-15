import { Student } from './index';

describe('Student', () => {
  it('should have a name', () => {
    const student = new Student('Jane Doe', 20);
    expect(student.name).toEqual('Jane Doe');
  });

  it('should have an age', () => {
    const student = new Student('Jane Doe', 20);
    expect(student.age).toEqual(20);
  });
});
