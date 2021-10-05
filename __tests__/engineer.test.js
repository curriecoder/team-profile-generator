// adds Employee constructor
const Engineer = require("../lib/engineer");

test("creates an Engineer obj", () => {
  // make an instance of engineer
  const engineer = new Engineer(
    "Andy",
    46,
    "andrew.j.currie0@gmail.com",
    "curriecoder"
  );

  // check that github is correct constructor
  expect(engineer.github).toEqual(expect.any(String));
});

test("retrieves engineer github with getGithub()", () => {
  // make an instance of employee
  const engineer = new Engineer(
    "Andy",
    46,
    "andrew.j.currie0@gmail.com",
    "curriecoder"
  );
  // testing getName() method
  expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test("retrieves engineer Role", () => {
  // make an instance of employee
  const engineer = new Engineer(
    "Andy",
    46,
    "andrew.j.currie0@gmail.com",
    "curriecoder"
  );

  // testing getRole() method
  expect(engineer.getRole()).toEqual("Engineer");
});
