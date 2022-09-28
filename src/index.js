
document.addEventListener('DOMContentLoaded', () => {
    fetchImgs(URL);
    addEventToForm();
})

const ramenDiv = document.getElementById('ramen-menu');
const URL = "http://localhost:3000/ramens";
const imgDiv = document.getElementById('ramen-menu');
const imgDisplay = document.querySelector('.detail-image');
const nameDisplay = document.querySelector('.name');
const restaurantDisplay = document.querySelector('.restaurant');
const form = document.getElementById('new-ramen');
const newName = document.getElementById('new-');
const newRestaurant = document.getElementById('new-restaurant');
const newImg = document.getElementById('new-image');
const newRating = document.getElementById('new-image');
const newComment = document.getElementById('new-comment');





function fetchImgs(url) {
    fetch(url)
        .then(res => res.json())
        .then(json => render(json))
}

function render(ramenData) {
    ramenData.forEach((ramen) => {
        addRamenToDom(ramen.image, ramen.name, ramen.restaurant);
    })
};

function addRamenToDom(image, name, restaurant) {
    const img = document.createElement('img');
    img.src = image;
    imgDiv.appendChild(img);
    img.addEventListener('click', (e) => {
        imgDisplay.src = e.target.src;
        nameDisplay.innerText = name;
        restaurantDisplay.innerText = restaurant;
    });
    // console.log(imgDiv)
}

function addEventToForm() {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(e);
        newName.textContent = e.target[0].value;
        newRestaurant.textContent = e.target[1].value;
        newImg.src = e.target[2].value;
        newRating.textContent = e.target[3].value;
        newComment.textContent = e.target[4].value;
        console.log(newName, newRestaurant, newImg, newRating, newComment);
    })
}