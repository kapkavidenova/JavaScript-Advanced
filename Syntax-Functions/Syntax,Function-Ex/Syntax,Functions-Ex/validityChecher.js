function solve(x1,y1,x2,y2){
    
    function distance(x1,y1,x2,y2){

        let distX = x1 - x2;
        let distY = y1 - y2;

        return Math.sqrt(distX ** 2 + distY ** 2);
    }

    let status = 'valid';
    if (!Number.isInteger(distance(x1,y1,0,0))) {
        status = 'invalid';
    }

    console.log(`{${x1}, ${y1}} to {0, 0} is ${status}`);

    let status2 = 'valid';
    if (!Number.isInteger(distance(x2,y2,0,0))) {
        status2 = 'invalid';
    }
    console.log(`{${x2}, ${y2}} to {0, 0} is ${status2}`);

    let status3 = 'valid';
    
    if (!Number.isInteger(distance(x1,y1,x2,y2))) {
        status3 = 'invalid';
    }
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${status3}`);
}

solve(3, 0, 0, 4);
solve(2, 1, 1, 1);
