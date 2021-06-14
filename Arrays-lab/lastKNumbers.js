function solve(n, k,arr) {
    let arr = [];
    arr[0] = 1;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < k; j++) {
            arr[i] += arr[j];

        }

    }
}

console.log(solve(6, 3));