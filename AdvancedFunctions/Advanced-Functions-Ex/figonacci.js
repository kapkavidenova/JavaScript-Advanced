function solve(){
    let[a,b] = [0, 1];

    return ()=> {
        let c = a + b;
        a = b;
        b = c;
        return a;
    }
}
const fib = solve();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
