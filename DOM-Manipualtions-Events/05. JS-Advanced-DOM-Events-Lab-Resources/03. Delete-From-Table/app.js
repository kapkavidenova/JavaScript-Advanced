function deleteByEmail() {
    //read input field value
    const email = document.querySelector('input[name="email"]').value;
    //select all table cells from the list column
    const rows = Array.from(document.querySelectorAll('tbody tr'));
    //iterate over cells
    const result = document.getElementById('result');
    let deleted = false;
    for (const row of rows) {
        if(row.children[1].textContent==email){
            row.parentNode.removeChild(row);
            deleted = true;
            result.textContent = 'Deleted.';
        }
    }
    if(deleted != true){
        result.textContent = 'Not found.';
    }
}
///////////other solution

function deleteByEmail() {
    const email = document.querySelector('input[name="email"]').value;
    const result = document.getElementById('result');
    const rows = Array.from(document.querySelectorAll('tbody tr'));
    const matches = rows.filter(x=>x.children[1].textContent ==email);
    if(matches.length>0){
        matches.forEach(x=>x.remove());
        result.textContent = 'Deleted.';
    }else{
        result.textContent = 'Not found.';
    }
}

