let maxNum = prompt('Enter maximum number.');
let target = Math.floor(Math.random() * maxNum);

// Helper functions

function isImputValid() {
    if (!(maxNum > 1)) {
        return 'Imput must be a number and must be higher than 0.';
    } else if (maxNum > 1) {
        return maxNum;
    }
}

console.log(isImputValid(maxNum));














console.log(`maxNum = ${maxNum}`);
console.log(`target = ${target}`);