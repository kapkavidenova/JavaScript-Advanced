function solve(...params) {

    let number = +params.shift();

    let operations = {
        chop: (number) => number / 2,
        dice: (number) => Math.sqrt(number),
        spice: (number) => ++number,
        bake: (number) => number *= 3,
        fillet: (number) => +(number *= 0.8).toFixed(1) 
    }

    for (let index = 0; index < params.length; index++) {
        number = operations[params[index]](number);
        console.log(number);

    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
