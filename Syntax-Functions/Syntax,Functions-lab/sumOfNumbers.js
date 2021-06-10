function solve(x,y){
    let num1 =  Number(x);
    let num2 =  Number(y);
    let sum = 0;

    for (let index = num1; index <=num2; index++) {
        sum+= index;
    }

    return sum;
}
console.log(solve('1', '5' ));