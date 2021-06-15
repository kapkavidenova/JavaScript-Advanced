function solve(arr){
    return arr.reduce(function(acc,curr,index,initialArray){
        if (curr>=acc[acc.length - 1] || acc.length === 0) {
            acc.push(curr);
        }
        return acc;
    },[])
}

console.log(solve(
    [1,
        3,
        8,
        4,
        10,
        12,
        3,
        2,
        24
    ]))