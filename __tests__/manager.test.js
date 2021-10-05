// adds Manager constructor
const Manager = require("../lib/manager");

test("creates an Manager obj", () => {
  // make an instance of manager
  const manager = new Manager("Andy", 46, "andrew.j.currie0@gmail.com", 13);

  // check that Office Number is of correct constructor
  expect(manager.offNum).toEqual(expect.any(Number));
});

test("retrieves manager Role", () => {
  // make an instance of manager
  const manager = new Manager("Andy", 46, "andrew.j.currie0@gmail.com", 13);

  // testing getRole() method
  expect(manager.getRole()).toEqual("Manager");
});
