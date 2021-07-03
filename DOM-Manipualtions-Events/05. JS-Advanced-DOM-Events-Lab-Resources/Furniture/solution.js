function solve() {

  let [generateTextArea, buyTextArea] = document.querySelectorAll('textarea');
  //let generateTextArea = textAreas[0];
  //let buyTextArea = textAreas[1];

  let [generateButton, buyButton] = document.querySelectorAll('button');
  //let generateButton = buttonsElement[0];
  //let buyButton = buttonsElement[1];

  generateButton.addEventListener('click', generateItems);

  function generateItems() {
    let items = JSON.parse(generateTextArea.value);
    let tableBody = document.querySelector('.table tbody');

    items.forEach(el => {
      let tr = document.createElement('tr');
      let imageTd = document.createElement('td');
      let image = document.createElement('img');
      image.src = el.img;
      imageTd.appendChild(image);

      let nameTd = document.createElement('td');
      let nameP = document.createElement('p');
      nameP.textContent = el.name;
      nameTd.appendChild(nameP);

      let priceTd = document.createElement('td');
      let priceP = document.createElement('p');
      priceP.textContent = el.price;
      priceTd.appendChild(priceP);

      let decorationTd = document.createElement('td');
      let decorationP = document.createElement('p');
      decorationP.textContent = el.decFactor;
      decorationTd.appendChild(decorationP);

      let checkboxTd = document.createElement('td');
      let checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkboxTd.appendChild(checkbox);

      tr.appendChild(imageTd);
      tr.appendChild(nameTd);
      tr.appendChild(priceTd);
      tr.appendChild(decorationTd);
      tr.appendChild(checkboxTd);
      tableBody.appendChild(tr);
    });
  }

  buyButton.addEventListener('click', buyItems);

  function buyItems() {
    let tableRows = Array.from(document.querySelectorAll('.table tbody tr'));
    let selectedRows = tableRows.filter(row => row.querySelectorAll('input:checked').length > 0);

    let names = selectedRows
      .map(row => row.querySelector('td:nth-of-type(2) p'))
      .map(x => x.textContent)
      .join(', ');

    let prices = selectedRows
      .map(row => row.querySelector('td:nth-of-type(3) p'))
      .map(x => Number(x.textContent));

    let decFactors = selectedRows
      .map(row => row.querySelector('td:nth-of-type(4) p'))
      .map(x => Number(x.textContent));

    totalPrice = prices.reduce((acc, el) => acc + el, 0).toFixed(2);
    averageDecFactor = decFactors.reduce((acc, el) => acc + el, 0) / decFactors.length;

    furnitureText = `Bought furniture: ${names}`;
    priceText = `Total price: ${totalPrice}`;
    decText = `Average decoration factor: ${averageDecFactor}`;

    buyTextArea.textContent = `${furnitureText}\n${priceText}\n${decText}`;
  }

}