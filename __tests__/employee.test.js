// adds Employee constructor
const Employee = require('../lib/employee');

test('creates an employee obj', () => {
  const employee = new Employee("Andy", 13, "andrew.j.currie0@gmail.com");

  expect(employee.getName()).toEqual(expect.any(String));
  expect(employee.getId()).toEqual(expect.any(Number));
  expect(employee.getEmail()).toEqual(expect.any(String));
});

test('retrieves employee Name', () => {
  const employee = new Employee('Andy', 46, 'andrew.j.currie0@gmail.com')

  expect(employee.getName()).toEqual(expect.any(String));
});

test("retrieves employee ID", () => {
  const employee = new Employee("Andy", 46, "andrew.j.currie0@gmail.com");

  expect(employee.getId()).toEqual(expect.any(Number));
});

test("retrieves employee Email", () => {
  const employee = new Employee("Andy", 46, "andrew.j.currie0@gmail.com");

  expect(employee.getEmail()).toEqual(expect.any(String));
});

test("retrieves employee Role", () => {
  const employee = new Employee("Andy", 46, "andrew.j.currie0@gmail.com");

  expect(employee.getRole()).toEqual("Employee");
});