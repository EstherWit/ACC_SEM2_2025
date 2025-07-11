const quoteText = document.getElementById("quote");
const quoteNumber = document.querySelector(".quote-number");
const generateBtn = document.getElementById("generate-quote-btn");

async function getAdvice() {
    try{
        const response = await fetch ('https://api.adviceslip.com/advice');
        const data = await response.json();
        const advice = data.slip;

        quoteNumber.textContent = `Advice #${advice.id}`;
        quoteText.textContent = `"${advice.advice}"`
    }catch(error){
        quoteText.textContent = "Oops! Couldn't fetch advice. Try again.";
        quoteNumber.textContent = "";
        console.log(error)
    }
    
}
generateBtn.addEventListener('click', getAdvice);
