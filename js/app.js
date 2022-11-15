/*=============== SELECTORS ===============*/
const ratingList = document.querySelectorAll("#rating-list li");
const ratingsCard = document.getElementById("ratings");
const resultsCard = document.getElementById("results");
const btn = document.getElementById("btn");
const ratingEl = document.getElementById("rating");

/*=============== FUNCTIONS ===============*/
for (let i = 0; i < ratingList.length; i++) {
    
    ratingList[i].addEventListener("click", () => {
        let rating = ratingList[i].innerHTML;
        

        for (let i = 0; i < ratingList.length; i++) {
            ratingList[i].classList.contains("active");
            ratingList[i].classList.remove("active");
        }

        ratingList[i].classList.add("active");

        btn.addEventListener("click", () => {
            ratingsCard.classList.add("hidden");
            resultsCard.classList.remove("hidden");
            resultsCard.classList.add("flex");
            ratingEl.innerHTML = rating;
        })
    })
    
}