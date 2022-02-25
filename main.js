let menus = document.querySelectorAll('.text8 .col-lg-3');

for (let i = 0; i < menus.length; i++) {
    menus[i].addEventListener('click', (e) => {
        e.preventDefault();
        for (let j = 0; j < menus.length; j++) {
            menus[j].classList.remove('actev')
        }
        e.target.parentNode.className += ' actev';
    })
};

const carousel = document.querySelector(".text16");
const slider = document.querySelector(".slider");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
let direction;

next.addEventListener("click", function () {
    direction = -1;
    carousel.style.justifyContent = "flex-start";
    slider.style.transform = "translate(-20%)";
});

prev.addEventListener("click", function () {
    if (direction === -1) {
        direction = 1;
        slider.appendChild(slider.firstElementChild);
    }
    carousel.style.justifyContent = "flex-end";
    slider.style.transform = "translate(20%)";
});

slider.addEventListener(
    "transitionend",
    function () {
        if (direction === 1) {
            slider.prepend(slider.lastElementChild);
        } else {
            slider.appendChild(slider.firstElementChild);
        }

        slider.style.transition = "none";
        slider.style.transform = "translate(0)";
        setTimeout(() => {
            slider.style.transition = "all 0.5s";
        });
    },
    false
);
let menyu = document.querySelector('.text-icon');
let menyu2 = document.querySelector('.text-icon2');
let btn = document.querySelectorAll('.click button');
let bool = { it: true };
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', (e) => {
        e.preventDefault();
        if (bool.it) {
            menyu.style.display = 'none';
            menyu2.style.display = 'flex';
            menyu.style.transition = '1s';
            bool.it = false;
        }
        else {
            menyu2.style.display = 'none';
            menyu.style.display = 'flex';
            menyu2.style.transition = '1s';
            bool.it = true;
        }
    })
}