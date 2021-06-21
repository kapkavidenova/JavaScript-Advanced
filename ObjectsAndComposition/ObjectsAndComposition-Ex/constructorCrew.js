function solve(worker) {
  
    if (worker.dizziness) {
        worker.levelOfHydrated += worker.weight * 0.1 * worker.experience;
        worker.levelOfHydrated = false;
    }
    return worker;
}
console.log(solve({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
));