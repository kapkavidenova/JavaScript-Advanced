import { html } from '../../node_modules/lit-html/lit-html.js';
import { getBookById } from '../api/data.js';
import { deleteBook,getLikesById,addLike,getOwnLikesById } from '../api/data.js';


const detailsTemplate = (book,isOwner,onDelete) => html`
        <!-- Details Page ( for Guests and Users ) -->
        <section id="details-page" class="details">
            <div class="book-information">
                <h3>${book.title}</h3>
                <p class="type">Type: ${book.type}</p>
                <p class="img"><img src=${book.imageUrl}></p>
                <div class="actions">
                
                    ${isOwner ? html`
                    <a class="button" href="/edit/${book._id}">Edit</a>
                    <a class="button" @click=${onDelete} "href="javascript:void(0)">Delete</a>` : ''}

                </div>
            </div>
            <div class="book-description">
                <h3>Description:</h3>
                <p>${book.description}</p>
            </div>
        </section>`;

export async function detailsPage(ctx) {
    const userId = sessionStorage.getItem('userId');

    const bookId = ctx.params.id;
    const book = await getBookById(bookId);
    
    const isOwner = userId === book._ownerId;

    ctx.render(detailsTemplate(book,isOwner,onDelete));

    async function onDelete() {
        const confirmed = confirm('Are you sure?');
        if (confirmed) {
            await deleteBook(bookId);
            ctx.page.redirect('/dashboard');
        }
    }
   
}