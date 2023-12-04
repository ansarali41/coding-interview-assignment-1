const sumOfAllNaturalNumberAtoB = (A, B) => {
    let sum = 0;
    if (A > B) {
        let temp = A;
        A = B;
        B = temp;
    }

    for (let i = A; i <= B; i++) {
        sum = sum + i;
    }
    return sum;
};

const getSum = sumOfAllNaturalNumberAtoB(10, 6);
console.log('get Sum of all natural numbers A to B', getSum);

//  ** Time Complexity is O(n) and Space Complexity is O(1)
