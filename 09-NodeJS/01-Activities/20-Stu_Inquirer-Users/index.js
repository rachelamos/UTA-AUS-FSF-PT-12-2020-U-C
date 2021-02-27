const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What languages can you speak?',
      name: 'languages',
    },
    {
      type: 'input',
      message: 'What is your preferred method of communication',
      name: 'comm',
    },
  ])

console.log(inquirer.prompt.name);
//   .then((response) =>
//     response.confirm === response.password
//       ? console.log('Success!')
//       : console.log('You forgot your password already?!')
//   );