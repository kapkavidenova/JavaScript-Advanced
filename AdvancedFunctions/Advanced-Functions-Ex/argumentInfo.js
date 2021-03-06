function solve(...input){
   let counts = {};
   
   input.forEach(x=>{
       const type = typeof x;
       console.log(`${type}: ${x}`);

       if(!counts[type]){
           counts[type] = 0;
       }
       counts[type]++;
   });
   Object.keys(counts)
   .sort((a,b)=>counts[b] - counts[a])
   .forEach((key)=>console.log(`${key} = ${counts[key]}`));
}
result = solve('cat', 42, function () { console.log('Hello world!'); });
console.log(result);
