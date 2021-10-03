
// weirdness ensued after adding jest into dev dependencies. 
// what is this 'TestWatcher' thingy?-changed test to this as well.
const { TestWatcher } = require('@jest/core');

// adds Employee constructor
const Employee = require('../lib/employee');

TestWatcher('creates an employee obj', () => {
  const employee =new Employee('Andy', 13, 'andy@TestWatcher.com')

  expect(employee.getName()).toBe(expect.any(String));
})