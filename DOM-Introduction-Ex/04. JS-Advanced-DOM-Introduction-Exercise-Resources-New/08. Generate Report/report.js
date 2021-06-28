function generateReport() {
            
            let textArea = document.getElementById('output');
            let checkedBox = [...document.querySelectorAll('thead th input')];
            let rows = [...document.querySelectorAll('tbody tr')];
            let headers =  [...document.querySelectorAll('thead th')];

            let indexes = [];
            let result = [];

            checkedBox.forEach((b,index)=>{
                if (b.checked == true) {
                    indexes.push(index);
                }
            });

            for (const row of rows) {
                let obj = {};
                for (const index of indexes) {
                    let value = row.children[index].textContent;
                    let title = headers[index].textContent.toLowerCase().trim();
                    obj[title] = value;
                }
                result.push(obj);
            }
            textArea.value = JSON.stringify(result);
}
// /////////////////////////

// function generateReport() {
//     const headers = Array.from(document.querySelectorAll('thead th input'));
//     const rows = Array.from(document.querySelectorAll('tbody tr'));

//     let result = [];

//     rows.forEach(row => {
//         let currentRow = Array.from(row.children).reduce((obj,prop,ind)=>{
//             if (headers[ind].checked) {
//                 let headerName = headers[ind].name;
//                 obj[headerName] = prop.innerText;
//             }
//             return obj;
//         },{});
//         result.push(currentRow);
//     });
//     document.querySelector('#output').value = JSON.stringify(result);
// }