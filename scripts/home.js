// ******** SELECTED ELEMENTS
const openmenu = document.getElementById("menupoper");
const closemenu = document.querySelector("[data-id = 'closemenu']");
const compass = document.querySelector(".compass");
const products = [... document.querySelectorAll(".prod")];


// ****** CONDITIONS OR OPTIONS
let currentpage;
let pausepage = false;

// ********** EVENT LISTENER
openmenu.addEventListener("click", openmenubar);
closemenu.addEventListener("click", closemenubar);
products.forEach(singleproduct => {
    singleproduct.addEventListener("click", widen);
})


// listener to stop the scroll function when my menubar is on
window.addEventListener("scroll", () => {
    if(pausepage) {
        window.scrollTo(0, currentpage)
    }
})

// ************ FUNCTIONS
// function widen
function widen(e) {
    elem = e.currentTarget;
    elemchild = elem.querySelector(".prod_details");
    products.forEach(single => {
        let singchild = single.querySelector(".prod_details");
        if(elem != single) {
            single.classList.remove("showhidden");
            singchild.classList.remove("show_prod_detail")
        }
    })
    elem.classList.toggle("showhidden")
    elemchild.classList.toggle("show_prod_detail");
}
// function close menu bar
function closemenubar() {
    compass.classList.remove("show_compass");
    pausepage = false;
}
function openmenubar() {
    compass.classList.add("show_compass");
    currentpage = window.pageYOffset;
    pausepage = true;
}
