function solve(arr,number){
    
    let rotations= number % arr.length;

    for (let i = 0; i < rotations; i++) {
        
        arr.unshift(arr.pop());
    }
    return arr.join(' ');
}

console.log(solve(['1', 
'2', 
'3', 
'4'], 
2
));