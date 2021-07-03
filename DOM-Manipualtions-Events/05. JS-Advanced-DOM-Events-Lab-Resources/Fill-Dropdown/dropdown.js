function addItem() {
   let textElement = document.getElementById('newItemText');
   let valueElement = document.getElementById('newItemValue');
   let parentElement = document.getElementById('menu');

   let createdElement = document.createElement('option');
   createdElement.textContent =textElement.value; 
   createdElement.value = valueElement.value;

   parentElement.appendChild(createdElement);
    textElement.value = '';
    valueElement.value = '';
}