// bring in employee class
const Employee = require('./employee');

class Engineer extends Employee {
  constructor (name, id, email, github) {
    super (name, id, email);

    this.github = github;
  }
  
  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
};

// export class Engineer
module.exports = Engineer;