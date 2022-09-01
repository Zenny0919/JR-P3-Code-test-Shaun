// write your code here
arr = [];
element = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 || i % 5 !== 0) {
        element = i;
        if (i % 3 === 0) {
            element = 'Fizz';
        } else if (i % 5 === 0) {
            element = 'Buzz'
        } 
        } else {
            element = 'FizzBuzz';
        }
    arr.push(element);
}

console.log(arr);

