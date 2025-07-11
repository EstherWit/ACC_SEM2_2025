const ratingButtons = document.querySelectorAll(".number");
const ratingContainer = document.querySelector(".container");
const submitButton = document.querySelector(".hero-button");
const thankYouContainer = document.querySelector(".thank-you-container");
const selectedRatingSpan = document.querySelector(".selected-rating");

let selectedRating = null;

ratingButtons.forEach(button => {
    button.addEventListener('click', () =>{
        ratingButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedRating = button.textContent;
    });
});

submitButton.addEventListener('click', () => {
    if(selectedRating) {
        selectedRatingSpan.textContent = selectedRating;
        ratingContainer.style.display = 'none';
        thankYouContainer.style.display = 'block';
    } else{
        alert('Please select a rating before submitting.')
    }
})