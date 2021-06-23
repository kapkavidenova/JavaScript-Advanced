function extractText() {

    //     let listItems = document.querySelectorAll('ul#items li');
    //     let result = '';

    //     for (const listItem of listItems) {
    //         result += listItem.textContent.trim() + '\n';
    //     }
    // let resultElement = document.getElementById('result');
    // resultElement.textContent = result.trim();
    const items = document.querySelectorAll("ul#items li");
    let area = document.querySelector("#result");

    for (const item of items) {
        area.value += item.textContent + "\n";
    }
}