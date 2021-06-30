 function addItem() {
     const text = document.getElementById('newItemText');
     const liElement = document.createElement('li');
     liElement.textContent = text.value;

    const deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';

    deleteBtn.addEventListener('click',(event)=>{
        event.target.parentNode.remove();
    });

    liElement.appendChild(deleteBtn);

    document.getElementById('items').appendChild(liElement);
   text.value = '';
}

