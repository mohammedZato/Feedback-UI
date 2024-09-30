const containerElt = document.querySelector('.social-container');
const socialImages = document.querySelectorAll('.social-divs');
const reviewBtn = document.getElementById('review-btn');

let selectedSocialText = '';

socialImages.forEach((socialElt) => {
    socialElt.addEventListener('click', (event) => {
        removeUi();
        
        selectedSocialText = event.target.innerText ||
        event.target.parentNode.innerText;

        event.target.classList.add('active');
        event.target.parentNode.classList.add('active');
    });
});
function removeUi() {
    socialImages.forEach((socialElt) => {
        socialElt.classList.remove('active');
    });
}
reviewBtn.addEventListener("click", sendRating);
function sendRating() {
    containerElt.innerHTML = `
    Thank You! <br>
    Feedback: ${selectedSocialText} <br>
    Your Feedback will be factored in the survey
    `
    reviewBtn.style.display = 'none';
}