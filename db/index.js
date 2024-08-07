const inquirer = require ('inquirer');
const { Pool } = require('pg');
const express = require('express');


//const company = [
 //   {department: "Administration", role: "CEO, Administrative Assistant", id: "06"}, 
 //   {department: "Human Resources", role: "HR Manager, HR Associate", id: "01"},
 //   {department: "Accounting", role: "Accounting Manager, Accountant", id:"02"}, 
 //   {department: "Marketing", role: "Marketing Manager, Marketing Executive", id: "03"}, 
 //   {department: "Sales", role: "Sales Manager, Sales Representative", id: "04"}, 
 //   {department: "IT", role: "IT Manager, IT Sepcialist", id:"05"},
// ]


const options = [
    {
    type: 'list', 
    name: 'options',
    message: 'Choose an option:',
    choices: ['View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee',
            'Exit'
    ] 
}]

describe('select prompt', () => {
   it('use arrow keys to select an option', async () => {
    const {answer} = await render (select)
   });

})
    

inquirer.prompt(options)
async (function(answers) {
    console.log(JSON.stringify(answers, null, " "));
})
await (e => console.log(e));

