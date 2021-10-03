const Engineer = require("../lib/engineer");

// create Manager card
const createManagerCard = (manager) => {
  return `
  <div class="card justify-content-center align-items-center" style="width: 18rem;">
    <i class="fas fa-book-reader fa-5x"></i>
    <div class="card-body">
      <h5 class="card-title">${manager.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
      <ul class="card-text">
        <li class="id">${manager.id}</li>
        <li class="email">Email: <a href="mailto:${manager.email}"</a>${manager.email}</li>
        <li class="offNum">${manager.offNum}</li>
      </ul>
    </div>
  </div>
  `;
}

// create Engineer card
const createEngineerCard = (engineer) => {
  return `
  <div class="card justify-content-center align-items-center" style="width: 18rem;">
    <i class="fas fa-book-reader fa-5x"></i>
    <div class="card-body">
      <h5 class="card-title">${engineer.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
      <ul class="card-text">
        <li class="id">${engineer.id}</li>
        <li class="email">Email: <a href="mailto:${engineer.email}"</a>${engineer.email}</li>
        <li class="github">${engineer.github}</li>
      </ul>
    </div>
  </div>
  `;
}

// create Intern card
const createInternCard = (intern) => {
  return `
  <div class="card justify-content-center align-items-center" style="width: 18rem;">
    <i class="fas fa-book-reader fa-5x"></i>
    <div class="card-body">
      <h5 class="card-title">${intern.name}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
      <ul class="card-text">
        <li class="id">${intern.id}</li>
        <li class="email">Email: <a href="mailto:${intern.email}</a>${intern.email}</li>
        <li class="school">${intern.school}</li>
      </ul>
    </div>
  </div>
  `;
}


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Profile</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css">
  <link rel="stylesheet" href="./assets/css/style.css">
</head>
<body>
  <header class="container-fluid bg-success">
    <h1 class="display-1 row justify-content-center">Meet the Team</h1>
  </header>

<div class="container">
  <div class="card justify-content-center align-items-center" style="width: 18rem;">
    <i class="fas fa-book-reader fa-5x"></i>
    <div class="card-body">
      <h5 class="card-title">Alex</h5>
      <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>

</body>
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script src="./assets/js/index.js"></script>
</html>