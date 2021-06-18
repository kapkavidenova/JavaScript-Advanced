function solve(matrix){
   let magic = Number.MIN_SAFE_INTEGER;
    let isMagic = true;

    for (let i = 0; i < matrix.length; i++) {
        let sum1 = matrix[i].reduce((acc,x)=>acc + x); 
        if (magic===Number.MIN_SAFE_INTEGER){
            magic = sum1;
        }
        if (sum1!==magic){
           isMagic = false;
        }
    }
    return isMagic;
}

console.log(solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   ));
