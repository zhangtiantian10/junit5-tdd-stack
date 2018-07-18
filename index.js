const reference = [{key: 3, value: 'Fizz'}, {key: 5, value: 'Buzz'}, {key: 7, value: 'Whizz'}];

const judgeNumber = (number) => {

    const output = reference.filter(element => isIncludes(number, element.key) || isMultiple(number, element.key))
        .map(element => element.value).join('');

    return output ? output : number;
}

const isMultiple = (number, referenceNumber) => {
    return number % referenceNumber === 0;
}

const isIncludes = (number, referenceNumber) => {
    return number.toString().includes(referenceNumber);
}

console.log(judgeNumber(15))
console.log(judgeNumber(70))
console.log(judgeNumber(21))
console.log(judgeNumber(105))
console.log(judgeNumber(1))
