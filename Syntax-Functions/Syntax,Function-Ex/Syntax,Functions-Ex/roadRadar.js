function solve(speed,area){

    let limit = 0;
    let diff = 0;
    //let speed = Number(speedStr)
    let status;

    switch(area){
        case "motorway": limit = 130;
        break;
        case "interstate": limit = 90;
        break;
        case "city": limit = 50;
        break;
        case "residential": limit = 20;
        break;
    }

    if (+speed <= limit) {
        return `Driving ${speed} km/h in a ${limit} zone`; 

    }else{
        diff = Number(speed) - limit;
        if (diff <=20) {
            status = 'speeding';
        }else if(diff <=40){
            status = 'excessive speeding';    
        }else if(diff >40){
            status = 'reckless driving';    
        }
        return `The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`;
    }
}
console.log(solve(40, 'city'));
console.log(solve(200, 'motorway'));

