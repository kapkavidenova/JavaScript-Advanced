function solve(array){
    array.sort((a,b)=>a.localeCompare(b))
    .forEach((item,i) => console.log(`${++i}.${item}`));
}

solve(["John", "Bob", "Christina", "Ema"]);