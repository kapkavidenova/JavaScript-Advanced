function check(a,b){
    return a.filter((element,index)=>
    b[index]===element),element;
}
function solve(array){
    let count = 0;
    for(let i = 0;i<array.length - 1;i++){
        count += check(array[i],arr[i+1]);
    }
    return count;
}
console.log(solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
));