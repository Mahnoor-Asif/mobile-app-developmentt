function doAdd(num1, num2) {
    if (arguments.length == 1) {
        return num1 + 10;
    } else if (arguments.length == 2) {
        return arguments[0] + num2;
    }
}

console.log(doAdd(5,8)); // Output: 8
