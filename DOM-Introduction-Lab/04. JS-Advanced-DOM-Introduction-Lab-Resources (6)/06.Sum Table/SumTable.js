function sumTable() {
    let rows = document.querySelectorAll('table tr');
    let result = 0;

    for (let i = 1; i < rows.length - 1; i++) {
        let cols = rows[i].children;
        result += +(cols[cols.length - 1].textContent);
    }
    const sum = document.getElementById('sum');
    sum.textContent = result;
}