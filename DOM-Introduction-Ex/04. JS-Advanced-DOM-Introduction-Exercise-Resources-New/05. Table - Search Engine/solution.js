function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchElementR = document.getElementById('searchField');
      let rowElements = Array.from(document.querySelectorAll('tbody tr'));
      let searchElement = searchElementR.value;
      rowElements.forEach(row=>{
         row.className = '';
      });
         let filteredRows = rowElements.filter(row=>{
            let values = Array.from(row.children);
            if (values.some(td=>td.textContent.includes(searchElement))) {
               row.className = 'select';
            }
      });
      searchElement.value = '';
   }
}
///////////////////////////
function solve() {

   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const rows = document.querySelectorAll('tbody tr');

   function onClick() {

       let input = document.querySelector('#searchField').value.toLowerCase();

       for (const row of rows) {
           if (row.textContent.toLowerCase().includes(input)) {

               row.setAttribute('class', 'select');

           } else {
               row.removeAttribute('class');
           }
       }



   }
}