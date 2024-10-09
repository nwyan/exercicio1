let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

let sum = firstNumber + secondNumber
alert('A soma dos dois números é: ' + sum)
alert('A subtração dos dois números é: ' + (firstNumber - secondNumber))
alert('A multiplicação dos dois números é: ' + (firstNumber * secondNumber))
alert('A divisão dos dois números é: ' + (firstNumber / secondNumber))
alert('A resto da divisão dos dois números é: ' + (firstNumber % secondNumber))

let parOuImpar = (sum % 2) === 0 ? 'Par' : 'Impar'
alert('A soma dois números é: ' + parOuImpar)

if (firstNumber == secondNumber) {
    alert('Os números inseridos são iguais')
} else {
    alert('Os números inseridos são diferentes')
}