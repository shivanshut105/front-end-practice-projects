const mainContainer = document.querySelector(".container");
const thanksContainer = document.querySelector(".thank-you-state");

const submitButton = document.getElementById("submit");

const rating = document.getElementById("rating-scale");
const ratingButtons = document.querySelectorAll(".btn-secondary");

submitButton.addEventListener("click", ()=>{
    if(rating.innerHTML=="0") return;
    thanksContainer.classList.remove("hidden");
    mainContainer.style.display = "none";
})

ratingButtons.forEach(rate => {
    rate.addEventListener("click", ()=>{
        rating.innerHTML = rate.innerHTML;
        console.log(rate.innerHTML);
    })
});