let card3D = document.querySelector('.card');
let container = document.querySelector('.card-container');

// card 3D
card3D.addEventListener('click', (e) => {
    // Quando eu clicar no card, adicionar a classe 'card--flipped'
    card3D.classList.toggle('card--flipped');

}   );