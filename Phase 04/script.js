const cardsContainer = document.getElementById('cards-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const currentEl = document.getElementById('current');
const showEl = document.getElementById('show');
const hideEl = document.getElementById('hide');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const addCardBtn = document.getElementById('add-card');
const clearBtn = document.getElementById('clear');
const addContainer = document.getElementById('add-container');

// Keep track of current card
let currentActiveCard = 0;

// Store DOM cards
const cardsEl = [];

// Store card data
const cardsData = [
    {
        question: 'What are the 7 layers of the OSI model?',
        answer: 'Layer 1 - Physical, Layer 2 - Data link, Layer 3 - Network, Layer 4 - Transport, Layer 5 - Session, Layer 6 - Presentation, Layer 7 - Application.'
    },
    {
        question: 'What are the first 3 steps in the CompTIA troubleshooting methodology?',
        answer: '1 - Identify the problem, 2 - Establish a theory of probable cause, 3 - Test the theory to determine the cause.'
    },
    {
        question: 'What are the last 3 steps in the CompTIA troubleshooting methodology?',
        answer: '4 - Establish a plan of action, 5 - Verify full system functionality, 6 - Document findings, actions and outcomes.'
    },
    {
        question: 'What are the best Frontend Frameworks?',
        answer: '1 - React, 2 - Angular, 3 - Vue.js, 4 - Svelte, 5 - Ember.js, 6 - Semantic, 7 - Backbone.js, 8 - Preact, 9 - jQuery, 10 - Foundation.'
    },
    {
        question: 'What are the best Backend Frameworks?',
        answer: '1 - Spring, 2 - Django, 3 - Express.js, 4 - ASP.NET core, 5 - Laravel, 6 - Ruby on Rails, 7 - Fiber (Golang), 8 - CakePHP, 9 - Flask, 10 - Play.'
    },
    {
        question: 'What is Node.js?',
        answer: 'Node.js is an open-source runtime framework designed to run JavaScript browser free.'
    },
    {
        question: 'What are the best CSS frameworks?',
        answer: '1 - Bootstrap, 2 - Foundation, 3 - Bulma, 4 - Tailwind, 5 - UIkit, 6 - Milligram, 7 - Pure, 8 - Tachyons, 9 - Materialize.'
    },
    {
        question: 'When dealing with suspicious items apply the 5 C\'s protocol?',
        answer: 'Confirm, Clear, Communicate, Cordon and Control'
    }
];

// Create all cards
function createCards () {
    cardsData.forEach((data, index) => createCard(data, index));
}

// Create a single card in the DOM
function createCard(data, index) {
    const card = document.createElement('div');
    card.classList.add('card');

    if (index === 0) {
        card.classList.add('active');
    }

    card.innerHTML = `
        <div class="inner-card">
            <div class="inner-card-front">
                <p>${data.question}</p>
            </div>
            <div class="inner-card-back">
                <p>${data.answer}</p>
            </div>
        </div>
    `;

    card.addEventListener('click', () => card.classList.toggle('show-answer'));

    // Add to DOM cards
    cardsEl.push(card);
    cardsContainer.appendChild(card);
    updateCurrentText();
}

function updateCurrentText() {
    currentEl.innerText = `${currentActiveCard + 1}/${cardsEl.length}`;
}

createCards();
