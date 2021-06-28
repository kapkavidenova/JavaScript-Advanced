function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let input = document.querySelector('#inputs textarea');
   let bestRestaurant = document.querySelector('#bestRestaurant p');
   let bestWorkers = document.querySelector('#workers p');

   function onClick() {
      let restaurants = {};

      JSON.parse(input.value).forEach((x) => {
         let [restaurantName, data] = x.split(' - ');
         let workers = data.split(', ');
         let arrayWorkers = [];

         for (const worker of workers) {
            let[name,salary] = worker.split(' ');
            arrayWorkers.push({
               name,
               salary,
            });
         };
      }); 
   };

   if (restaurants[restaurantName]) {
      arrayWorkers = arrayWorkers.concat(restaurants[restaurantName].arrayWorkers);
   };

   arrayWorkers.sort((a,b)=>b.salary - a.salary);
   let bestSalary = Number(arrayWorkers[0].salary);
   let averageSalary = arrayWorkers
   .reduce((sum,worker) => sum + Number(worker.salary),0 / arrayWorkers.length);

   restaurants[restaurantName] = {
      arrayWorkers,
      averageSalary,
      bestSalary,
   };

   let bestRestaurant = undefined;
   let bestAverageSalary = 0;
   let bestName = undefined;

   for (const restaurant in restaurants) {
      let currAverageSalary = restaurants[restaurant].averageSalary;
      if (currAverageSalary>bestAverageSalary) {
         bestAverageSalary = currAverageSalary;
         bestRestaurant = restaurants[restaurant];
         bestName = restaurant;
      }
   };

   const x = bestRestaurant;
   bestRestaurant.textContent = `"Name: {bestName}  Average Salary: ${bestResaturant.averageSalary.toFixed(2)}
   Best Salary: ${bestResaturant.bestSalary.toFixed(2)}`;

   let arrOfBestWorkers = [];
   bestResaturant.arrayWorkers.forEach((worker)=>{
      arrOfBestWorkers.push(`Name: ${worker.name} With Salary: ${worker.salary}`);


   });

   bestWorkers.textContent = arrOfBestWorkers.join(' ');
}