const reference = [{key: 3, value: 'Fizz'}, {key: 5, value: 'Buzz'}, {key: 7, value: 'Whizz'}];

const numberGame = () => {
    let i = 1;
    while (i <= 120) {
        console.log(judgeNumber(i));
        i++;
    }
}

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

numberGame();