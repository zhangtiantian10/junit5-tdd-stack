const judgeNumber = (number) => {
    if (isIncludes(number, 3) || isMultiple(number, 3)) {
        return 'Fizz';
    } else if (isIncludes(number, 5) || isMultiple(number, 5)) {
        return 'Buzz';
    } else if (isIncludes(number, 7) || isMultiple(number, 7)) {
        return 'Whizz';
    }

    return number;
}

const isMultiple = (number, referenceNumber) => {
    return number % referenceNumber === 0;
}

const isIncludes = (number, referenceNumber) => {
    return number.toString().includes(referenceNumber);
}

console.log(judgeNumber(3))
console.log(judgeNumber(5))
console.log(judgeNumber(7))
console.log(judgeNumber(1))