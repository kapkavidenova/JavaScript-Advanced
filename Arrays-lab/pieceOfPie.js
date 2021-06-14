function solve(arr=[],first,second){
    let firstPie = arr.indexOf(first);
    let secondPie = arr.indexOf(second);
    return result = arr.slice(firstPie,secondPie+1);
}
console.log(solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
).join(',\n'));