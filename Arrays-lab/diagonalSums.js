function solve(arr){

    let first = 0;
    let second = 0;

    for (let i = 0; i < arr.length; i++) {
        first += arr[i][i];
        second += arr[i][arr.length - 1 - i];
    }
    return [first,second].join(' ');
}
console.log(solve([[20, 40],
                   [10, 60]]
   ));