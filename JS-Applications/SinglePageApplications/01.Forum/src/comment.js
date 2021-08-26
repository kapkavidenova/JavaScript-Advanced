import { e } from "./dom.js";

export async function addNewComment(event) {
    event.preventDefault();

    const textareaInput = event.target.parentElement.querySelector('#comment');
    const currUsernameInput = event.target.parentElement.querySelector('input');
    const textarea = textareaInput.value;
    const currUsername = currUsernameInput.value;
    const currTime = new Date();

    try {
        const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ textarea, currUsername, currTime })
        })

        if (!response.ok) {
            throw new Error;
        }


        const newComment = e('div', { id: 'user-comment' },
            e('div', { className: 'topic-name-wrapper' },
                e('div', { className: 'topic-name' },
                    e('p', {}, `<strong>${currUsername}</strong> commented on <time>${currTime.toISOString()}</time>`),
                    e('div', { className: 'post-content' },
                        e('p', {}, `${textarea}`)))));



        event.target.parentElement.parentElement.parentElement.parentElement.querySelector('.comment').appendChild(newComment);

        event.target.parentElement.querySelector('#comment').value = '';
        event.target.parentElement.querySelector('input').value = '';


    } catch (error) {
        alert(error.message);
    }
}