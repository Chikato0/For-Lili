// function scrollToTop() {
//     window.scrollTo({
//         top: 0,
//     });
// }

// window.onload = scrollToTop;

function whenClick() {
    window.scrollTo({
        top: document.body.scrollHeight,
    });
}
let enter = document.getElementById("enter")
let teks = document.getElementById("teks");
let teks1 = document.getElementById("teks1");
let teks2 = document.getElementById("teks2");
let teks3 = document.getElementById("teks3");
let teks4 = document.getElementById("teks4");
let teks5 = document.getElementById("teks5");
let teks6 = document.getElementById("teks6");
let teks7 = document.getElementById("teks7");
let teks8 = document.getElementById("teks8");
const eheLimit = 5
let eheCounter = 0
let eheRemainingLeft;
function whileClick() {
    if (eheCounter == 0) {
        teks.style.display = "block"
        teks1.style.display = "none"
        teks2.style.display = "none"
        teks3.style.display = "none"
        teks4.style.display = "none"
        teks5.style.display = "none"
        teks6.style.display = "none"
        teks7.style.display = "none"
        teks8.style.display = "none"

    }
    if (eheCounter == 1) {
        teks.style.display = "none"
        teks1.style.display = "block"
        teks2.style.display = "none"
        teks3.style.display = "none"
        teks4.style.display = "none"
        teks5.style.display = "none"
        teks6.style.display = "none"
        teks7.style.display = "none"
        teks8.style.display = "none"
        
    }
    if (eheCounter == 2) {
        teks.style.display = "none"
        teks1.style.display = "none"
        teks2.style.display = "block"
        teks3.style.display = "none"
        teks4.style.display = "none"
        teks5.style.display = "none"
        teks6.style.display = "none"
        teks7.style.display = "none"
        teks8.style.display = "none"

        }
    if (eheCounter == 3) {
        teks.style.display = "none"
        teks1.style.display = "none"
        teks2.style.display = "none"
        teks3.style.display = "block"
        teks4.style.display = "none"
        teks5.style.display = "none"
        teks6.style.display = "none"
        teks7.style.display = "none"
        teks8.style.display = "none"
 
       }
    if (eheCounter == 4) {
        teks.style.display = "none"
        teks1.style.display = "none"
        teks2.style.display = "none"
        teks3.style.display = "none"
        teks4.style.display = "block"
        teks5.style.display = "none"
        teks6.style.display = "none"
        teks7.style.display = "none"
        teks8.style.display = "none"

        }
    if (eheCounter == 5) {
        teks.style.display = "none"
        teks1.style.display = "none"
        teks2.style.display = "none"
        teks3.style.display = "none"
        teks4.style.display = "none"
        teks5.style.display = "block"
        teks6.style.display = "none"
        teks7.style.display = "none"
        teks8.style.display = "none"
    }
    if (eheCounter == 6) {
        teks.style.display = "none"
        teks1.style.display = "none"
        teks2.style.display = "none"
        teks3.style.display = "none"
        teks4.style.display = "none"
        teks5.style.display = "none"
        teks6.style.display = "block"
        teks7.style.display = "none" 
        teks8.style.display = "none"

    }
    if (eheCounter == 7) {
        teks.style.display = "none"
        teks1.style.display = "none"
        teks2.style.display = "none"
        teks3.style.display = "none"
        teks4.style.display = "none"
        teks5.style.display = "none"
        teks6.style.display = "none"
        teks7.style.display = "block"
        teks8.style.display = "none"
    }
    if (eheCounter == 8) {
        teks.style.display = "block"
        teks1.style.display = "none"
        teks2.style.display = "block"
        teks3.style.display = "block"
        teks4.style.display = "block"
        teks5.style.display = "block"
        teks6.style.display = "block"
        teks7.style.display = "block"
        teks8.style.display = "none"
    }
    if (eheCounter == 9) {
        teks.style.display = "none"
        teks1.style.display = "none"
        teks2.style.display = "none"
        teks3.style.display = "none"
        teks4.style.display = "none"
        teks5.style.display = "none"
        teks6.style.display = "none"
        teks7.style.display = "none"
        teks8.style.display = "block"
    }
    if (eheCounter == 10) {
        location.reload()
    }

    






    eheCounter += 1;
    eheRemainingLeft = eheLimit - eheCounter;
};