function GetRandom(min, max) {
    let rnd = Math.round(Math.random() * (max - min) + min);
    return rnd;
}

function GetResult(x, y) {
    if (x >= 0 && y >= 0) {
        return x - y;
    } else if (x < 0 && y < 0) {
        return x * y;
    } else {
        return x + y;
    }
}

function Sum(x, y) {
    return x + y;
}

function Deduct(x, y) {
    return x - y;
}

function Multiply(x, y) {
    return x * y;
}

function Division(x, y) {
    return x / y;
}

function power(val, pow) {
    if (pow == 0) {
        return 1;
    } else if (pow > 0) {
        return val * power(val, pow - 1);
    } else {
        return power(val, pow + 1) / val;
    }
}

function mathOperation(x, y, operation) {
    switch (operation) {
        case '+':
            return Sum(x, y);
        case '-':
            return Deduct(x, y);
        case '*':
            return Multiply(x, y);
        case '/':
            return Division(x, y);
        default:
            return undefined;
    }
}

var a = GetRandom(-15, 15);
var b = GetRandom(-15, 15);
console.log('a = ' + a);
console.log('b = ' + b);
console.log('Result: ' + GetResult(a, b));
console.log(a + ' ^ ' + b + ' = ' + power(a, b));
