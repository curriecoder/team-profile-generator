// adds Engineer constructor
const Intern = require("../lib/intern");

test("creates an Intern obj", () => {
  // make an instance of intern
  const intern = new Intern("Andy", 46, "andrew.j.currie0@gmail.com", "UPenn");

  // check that school is of correct constructor
  expect(intern.school).toEqual(expect.any(String));
});

test("retrieves intern school with getSchool()", () => {
  // make an instance of intern
  const intern = new Intern("Andy", 46, "andrew.j.currie0@gmail.com", "UPenn");
  // testing getSchool() method
  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});

test("retrieves intern Role", () => {
  // make an instance of intern
  const intern = new Intern("Andy", 46, "andrew.j.currie0@gmail.com", "UPenn");

  // testing getRole() method
  expect(intern.getRole()).toEqual("Intern");
});
