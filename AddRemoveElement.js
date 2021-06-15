// function solve(arr){
//     let num = 1;
//     let result=[];

//     for (let i = 0; i < arr.length; i++) {
//        if (arr[i] == 'add') {
//            result.push(num);          
//        }else{
//         result.pop();
//        }
//        num++;
//     }
//     return result.length>0 ?result.join('\n') : 'Empty';
// }

//other solution
function solve(input) {
    let commands = {
        counter: 1,
        add: (arr, num) => [...arr, num],
        remove: (arr) => [...arr.slice(0, arr.length - 1)]
    };

    let result = input.reduce((acc, curr) => {
        acc = commands[curr](acc, commands.counter);
        commands.counter++;
        return acc;
    }, []);
    return result.length > 0 ? result.join('\n') : 'Empty';

}

console.log(solve(['add',
    'add',
    'remove',
    'add',
    'add']
));