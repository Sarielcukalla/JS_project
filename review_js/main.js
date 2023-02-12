const reviews = [
    {
        id: 1,
        name: "Sariel Cukalla",
        job: "Web developer",
        img: "./image/person_1.webp",
        text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia minima sunt, quaerat
        quasi provident vitae atque at numquam deleniti suscipit. Sapiente beatae dolores corrupti in
        cupiditate blanditiis ab saepe vitae`

    },

    {
        id: 2,
        name: "Endri Lickollari",
        job: "Programus",
        img: "./image/person_4.jpeg",
        text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia minima sunt, quaerat
        quasi provident vitae atque at numquam deleniti suscipit. Sapiente beatae dolores corrupti in
        cupiditate blanditiis ab saepe vitae`
    },

    {
        id: 3,
        name: "Reda Cukalla",
        job: "ux designer",
        img: "./image/person_3.jpeg",
        text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia minima sunt, quaerat
        quasi provident vitae atque at numquam deleniti suscipit. Sapiente beatae dolores corrupti in
        cupiditate blanditiis ab saepe vitae`


    },

    {
        id: 4,
        name: "Arsela Cukalla",
        job: "Graphic Designer",
        img: "./image/person_2.jpeg",
        text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia minima sunt, quaerat
        quasi provident vitae atque at numquam deleniti suscipit. Sapiente beatae dolores corrupti in
        cupiditate blanditiis ab saepe vitae`
,
    }
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
    showPerson()
});

function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }

    showPerson()

});

prevBtn.addEventListener('click', function () {
    currentItem --;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
      }
    showPerson()
});

randomBtn.addEventListener('click', function () {

 currentItem = Math.floor(Math.random() * reviews.length);
 showPerson();
    
})