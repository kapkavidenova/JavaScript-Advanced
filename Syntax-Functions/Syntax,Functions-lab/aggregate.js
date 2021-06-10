
    function solve(input){
        function sum(total,num){
            return total + num;
        }
        function inversedSum(input){
            let result = 0;
            
            for(let i = 0; i<input.length;i++){
                result += 1/input[i];
            }
            return result;
        }

        function concatArray(input){
            let concat = '';

            for(let i = 0; i<input.length;i++){
                concat += input[i];
            }
            return concat;
        }

        let totalSum = input.reduce(sum);
        let inversedSumArrays = inversedSum(input);
        let concatResult = concatArray(input);

        console.log(totalSum);
        console.log(inversedSumArrays);
        console.log(concatResult);
    }


solve([1, 2, 3])
