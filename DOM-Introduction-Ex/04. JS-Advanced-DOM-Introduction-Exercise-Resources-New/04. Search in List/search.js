function search() {
   let townsEl = Array.from(document.querySelectorAll('#towns li'));
   let searchEl = document.getElementById('searchText').value;
   let resultEl = document.getElementById('result');

   let count = 0;

   for (const town of townsEl) {
      if (town.textContent.includes(searchEl)) {
         count++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      } else {
         town.style.fontWeight = '';
         town.style.textDecoration = '';
      }
   }
   resultEl.textContent = `${count} matches found`;
}
//other solution - not
function search() {
   let townsEl = Array.from(document.querySelectorAll('#towns li'));
   let searchEl = document.getElementById('searchText').value;
   
   let filteredTownEl = townsEl
   .filter(x => x.textContent.includes(searchEl));
   filteredTowns = filteredTownEl.foreEach(x => {
      x.style.fontWeight = 'bold';
      x.style.textDecoration = 'underline';
   });
   let resultEl = document.getElementById('result');
      resultEl.textContent = `${filteredTowns.length} matches found`;
}
