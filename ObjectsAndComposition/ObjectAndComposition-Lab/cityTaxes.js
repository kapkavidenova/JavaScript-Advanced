function creatCity(name,population,treasury) {
    const city = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes:function(){
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percent){
            this.population += Math.floor(this.population * percent/100);
        },
        applyRecession(percent){
            this.treasury -= Math.floor(this.treasury * percent/100);
        },
    };
    return city;
}

console.log(creatCity('Tortuga', 7000, 15000));
const result = creatCity('Tortuga', 7000, 15000);
result.applyGrowth(10);
result.collectTaxes();
result.applyRecession(30);
console.log(result.treasury)
console.log(result.population)
console.log(result.population)

    
  