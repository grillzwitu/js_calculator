const calculate = () => {

    num1 = prompt('Enter a number')
    op = prompt('Enter an operation(+, -, *, /)')
    num2 = prompt('Enter a number')

    if (op === '+') {
        console.log(`${num1} ${op} ${num2} = ${parseFloat(num1) + parseFloat(num2)}`)
        alert(`${num1} ${op} ${num2} = ${parseFloat(num1) + parseFloat(num2)}`)
    }
    else if (op === '-') {
        console.log(`${num1} ${op} ${num2} = ${parseFloat(num1) - parseFloat(num2)}`)
        alert(`${num1} ${op} ${num2} = ${parseFloat(num1) - parseFloat(num2)}`)
    }
    else if (op === '*') {
        console.log(`${num1} ${op} ${num2} = ${parseFloat(num1) * parseFloat(num2)}`)
        alert(`${num1} ${op} ${num2} = ${parseFloat(num1) * parseFloat(num2)}`)
    }
    else if (op === '/') {
        console.log(`${num1} ${op} ${num2} = ${parseFloat(num1) + parseFloat(num2)}`)
        alert(`${num1} ${op} ${num2} = ${parseFloat(num1) / parseFloat(num2)}`)
    }
    else{
        console.log('Invalid operation')
        alert('Invalid operation')
    }

    restart = prompt('Do you want to perform another calculation (y/n)?')
    if (restart == 'y') {
        calculate()
    } else {
        return
    }
}

calculate()
