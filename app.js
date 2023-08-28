const reviewData = [
    {
        profilePicture: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
        profileName: "John",
        profilePosition: "Web-developer",
        profileDescription: "Site works fine, CSS isn't fully implemented. The JS works fine enough. 2/5"
    },
    {
        profilePicture: "https://st4.depositphotos.com/4157265/41100/i/450/depositphotos_411005388-stock-photo-profile-picture-of-smiling-30s.jpg",
        profileName: "Mark",
        profilePosition: "Software engineer",
        profileDescription: "Site is complete garbage. Needs to be redone"
    },
    {
        profilePicture: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3763188.jpg&fm=jpg",
        profileName: "Maria",
        profilePosition: "Frontend developer",
        profileDescription: "The CSS of the website needs a complete overhaul. The javascript seems to be working fine enough",
    }
];

const leftButton = document.getElementById("buttonLeft");
const rightButton = document.getElementById("buttonRight");
const randomButton = document.getElementById("buttonRandom");

let currentReviewIndex = 0;
let currentReview = reviewData[currentReviewIndex];

document.getElementById("cardPhoto").src = currentReview.profilePicture;
document.getElementById("cardName").textContent = currentReview.profileName;
document.getElementById("cardPosition").textContent = currentReview.profilePosition;
document.getElementById("cardDescription").textContent = currentReview.profileDescription;


leftButton.addEventListener("click", function(){
    currentReviewIndex = (currentReviewIndex - 1 + reviewData.length) % reviewData.length;
    currentReview = reviewData[currentReviewIndex];

    document.getElementById("cardPhoto").src = currentReview.profilePicture;
    document.getElementById("cardName").textContent = currentReview.profileName;
    document.getElementById("cardPosition").textContent = currentReview.profilePosition;
    document.getElementById("cardDescription").textContent = currentReview.profileDescription;

});

rightButton.addEventListener("click", function(){
    currentReviewIndex = (currentReviewIndex + 1) % reviewData.length;
    currentReview = reviewData[currentReviewIndex];

    document.getElementById("cardPhoto").src =currentReview.profilePicture;
    document.getElementById("cardName").textContent = currentReview.profileName;
    document.getElementById("cardPosition").textContent = currentReview.profilePosition;
    document.getElementById("cardDescription").textContent = currentReview.profileDescription;
});

randomButton.addEventListener("click", function(){
    let randomIndex;

    do{
        randomIndex = Math.floor(Math.random()*reviewData.length);
    } while(randomIndex === currentReviewIndex);

    currentReviewIndex = randomIndex;
    const currentReview = reviewData[currentReviewIndex];

    document.getElementById("cardPhoto").src =currentReview.profilePicture;
    document.getElementById("cardName").textContent = currentReview.profileName;
    document.getElementById("cardPosition").textContent = currentReview.profilePosition;
    document.getElementById("cardDescription").textContent = currentReview.profileDescription;
});

