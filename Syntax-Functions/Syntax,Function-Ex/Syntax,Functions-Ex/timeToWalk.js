function solve(steps, length, speed) {
    let distance = steps * length;
    let rest = Math.floor(distance / 500) * 60;
    let time = distance / (speed * 1000 / 3600) + rest;

    const hours = Math.floor(time / 3600).toFixed(0).padStart(2, "0");
    const minutes = Math.floor((time - hours * 3600) / 60).toFixed(0).padStart(2, "0");
    const seconds = (time - hours * 3600 - minutes * 60).toFixed(0).padStart(2, "0");
    // console.log(hours);
    // console.log(minutes);
    // console.log(seconds);

    return `${hours}:${minutes}:${seconds}`;
}
console.log(solve(4000, 0.60, 5));
