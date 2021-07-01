function lockedProfile() {
        let buttonElements = Array.from(document.querySelectorAll('#main .profile button'));
        buttonElements.forEach(el=>{
            el.addEventListener('click',toggleButton);

            function toggleButton(e){
                let button = e.target;
                let profile = button.parentElement;
                let radioButton = profile.querySelector(`input:checked`);
                if(radioButton.value === 'unlock'){
                    let hiddenFieldElement = button.previousElementSibling;
                    hiddenFieldElement.style.display = hiddenFieldElement.style.display
                    === 'block' ? 'none' : 'block';
                button.textContent = button.textContent === 'Show more'
                    ? 'Hide it'
                    : 'Show more';
                }
            }
        })


    // let buttons = document.querySelectorAll('#main .profile button');

    // for (let i = 0; i < buttons.length; i++) {
    //     buttons[i].addEventListener('click', () => {
    //         let radioButtonName = `user${i + 1}Locked`;
    //         let radioButton = document.querySelector(`input[name="${radioButtonName}"]:checked`);

    //         if (radioButton.value === 'unlock') {
    //             let hiddenFieldElement = document.getElementById(`user${i + 1}HiddenFields`);
    //             hiddenFieldElement.style.display = hiddenFieldElement.style.display
    //                 === 'block' ? 'none' : 'block';
    //             buttons[i].textContent = buttons[i].textContent === 'Show more'
    //                 ? 'Hide it'
    //                 : 'Show more';

    //         }

    //     });
    // }
}