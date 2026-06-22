// MÓDULOS EXTERNOS
const inquirer = require('inquirer')
const chalk = require('chalk')

//MÓDULOS INTERNOS

const fs = require('fs')

operation()

function operation() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'O que você deseja fazer?',
            choices: ['Criar conta', 'Consultar saldo', 'Depositar', 'Sacar', 'Sair'],
        }
    ])
    .then((answer) => {
        const action = answer['action']
        console.log(action)
    })
    .catch((err) => console.log(err))
}


// create an account

function createAccount(){

}