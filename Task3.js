function sum(x) {
    return function(y) {
        return x + y;
    };
}

console.log( sum(2)(2), sum(5)(10));