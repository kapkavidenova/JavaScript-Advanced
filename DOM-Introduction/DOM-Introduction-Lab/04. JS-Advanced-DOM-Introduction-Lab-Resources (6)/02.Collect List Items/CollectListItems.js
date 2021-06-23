function extractText() {
  let itemsElements = document.getElementsByTagName('li');
  let areaElements = [...itemsElements].map((el)=>el.textContent);
  document.getElementById('result').value = areaElements.join('\n');
}