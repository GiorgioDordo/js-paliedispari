
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function isEven(number) {
       return number % 2 === 0;
} 

const result = isEven(10);
console.log(result);