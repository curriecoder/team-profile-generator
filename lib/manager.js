// bring in employee class
const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, offNum) {
    super(name, id, email);

    this.offNum = offNum;
  }

  getRole() {
    return "Manager";
  }
}

// exports class intern
module.exports = Manager;
