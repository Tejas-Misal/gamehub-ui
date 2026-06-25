const input =
    document.querySelector(".actions input");


const cards =
    document.querySelectorAll(".card");



input.addEventListener("keyup", () => {


    let value = input.value.toLowerCase();



    cards.forEach(card => {


        let img = card.querySelector("img");


        let name = img.src.toLowerCase();



        if (name.includes(value)) {

            card.style.display = "block";

        }

        else {

            card.style.display = "none";

        }


    });


});




window.addEventListener("scroll", () => {


    let nav = document.querySelector(".navbar");


    if (window.scrollY > 50) {

        nav.style.background = "#000";

    }

    else {

        nav.style.background = "rgba(0,0,0,0.8)";

    }


});