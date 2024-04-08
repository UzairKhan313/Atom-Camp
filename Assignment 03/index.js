#! /usr/bin/env node

import inquirer from 'inquirer'
import chalk from 'chalk'

const answer = await inquirer.prompt([
  {
    type: 'String',
    name: 'name',
    message: 'Enter your Name : ',
  },
  {
    type: 'age',
    name: 'age',
    message: 'Enter your Age : ',
  },
  {
    type: 'String',
    name: 'email',
    message: 'Enter your email : ',
  },
])

const { name, age, email } = answer

console.log(chalk.green('Your Name is : ', name))
console.log(chalk.green('Your Age is : ', age))
console.log(chalk.green('Your email is : ', email))
