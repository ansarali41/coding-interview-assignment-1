const calculateFactorial = n => {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial = factorial * i;
    }
    return factorial;
};

const getFactorial = calculateFactorial(5);

console.log('getFactorial', getFactorial);

// ** time complexity is O(n) and Space Complexity is O(1)
