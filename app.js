// importing other stuff, utility functions for:
// working with supabase:
// import { checkAuth, signOutUser } from './fetch-utils.js';
// pure rendering (data --> DOM):
import { getComments, addComment } from './fetch-utils.js';
/*  "boiler plate" auth code */
// checking if we have a user! (will redirect to auth if not):
// checkAuth();
// can optionally return the user:
// const user = checkAuth();

// sign out link:
// const signOutLink = document.getElementById('sign-out-link');
// signOutLink.addEventListener('click', signOutUser);
/* end "boiler plate auth code" */

// grab needed DOM elements on page:

// local state:

// display functions:

// events:

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

const fullName = document.querySelector('.full-name');
const ryanName = document.querySelector('.ryan-name');
const ryanImg = document.getElementById('ryan-img');
// const toggleButton = document.getElementsById('toggle');
// const navbarLinks = document.getElementsById('links');

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

const board = document.getElementById('board');

async function renderComments(comment) {
    const span = document.createElement('span');
    span.classList.add('comment');
    const p = document.createElement('p');
    p.classList.add('comment-text');
    p.textContent = comment.text;

    span.append(p);
    return span;
}

async function displayComments() {
    board.textContent = '';
    const comments = await getComments();

    for (let comment of comments) {

        const newComment = await addComment(comment);
        const singleComment = renderComments(newComment);

        board.append(singleComment);
    }

}

ryanImg.addEventListener('mouseover', () => {
    fullName.classList.remove('hidden');
});

window.addEventListener('click', () => {
    fullName.classList.add('alt-name');
    ryanName.classList.toggle('alt-full');
});

displayComments();