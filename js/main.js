const images= [
    "img/codelve/thumbnail.png",
    "img/wakemeapp/thumbnail.png",
    "img/banner/thumbnail.png",
    "img/portfolio/thumbnail.png",
];

let count=0;

const main1 = document.getElementById("codelve");
const main2 = document.getElementById("wakemeapp");
const main3 = document.getElementById("banner");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

main1.src = images[count];
main2.src = images[count+1];
main3.src = images[count+2];

next.addEventListener("click", () => {
    if (count === images.length - 1) {
        count = 0;
        main1.src = images[count];
        main2.src = images[count + 1];
        main3.src = images[count + 2];
    } else if (count === images.length - 2) {
        count++;
        main1.src = images[count];
        main2.src = images[0];
        main3.src = images[1];
    } else if (count === images.length - 3) {
        count++;
        main1.src = images[count];
        main2.src = images[count + 1];
        main3.src = images[0];
    } else {
        count++;
        main1.src = images[count];
        main2.src = images[count + 1];
        main3.src = images[count + 2];
    }
});

prev.addEventListener("click", () => {
    if (count < 1) {
        count = images.length - 1;
        main1.src = images[count];
        main2.src = images[0];
        main3.src = images[1];
    } else if (count === images.length - 1) {
        count--;
        main1.src = images[count];
        main2.src = images[count + 1];
        main3.src = images[0];
    } else if (count === images.length - 2) {
        count--;
        main1.src = images[count];
        main2.src = images[count + 1];
        main3.src = images[count + 2];
    } else {
        count--;
        main1.src = images[count];
        main2.src = images[count + 1];
        main3.src = images[count + 2];
    }
});

window.addEventListener("load", () => {
    timer();
})
