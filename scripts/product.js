// ******* SELECTED ELEMENTS
const productImages = [...document.querySelectorAll(".prod_image")];
const operations = [...document.querySelectorAll(".operations")];
const range_value = document.querySelector(".price_num");
const range = document.getElementById("range");
const current_price = document.querySelector(".current_price");

// **************** CONDITIONS AND OPTIONS;
let dragging = false,
  pageYStart,
  pageYEnd,
  pageXStart,
  pageXEnd,
  pageInterval,
  pageIntervalCount = 0,
  prev_scrollTop;
const prod_class = ["scaleone", "scaletwo", "scalethree", "scalefour"];
let num = 0;

// ************ Event listener and functions
range.addEventListener("input", (e) => {
  range_value.textContent = range.value;
  current_price.classList.add("show");
  current_price.style.left = range.value / 11 + "%";
  setTimeout(() => current_price.classList.remove("show"), 3000);
});

operations.forEach((button) => {
  button.addEventListener("click", (e) => {
    let elementClass = e.currentTarget.classList;
    elementClass.contains("next") ? shufflePic() : unShufflePic();
  });
});

productImages.forEach((img) => {
  img.addEventListener("touchstart", (e) => {
    e.preventDefault();
    const { pageY } = e.touches[0];
    pageYStart = pageY;
    pageInterval = setInterval(() => pageIntervalCount++, 200);
  });

  img.addEventListener("touchmove", () => {
    dragging = true;
    const { pageY } = e.touches[0];
    pageYEnd = pageY;
  });

  img.addEventListener("touchend", (e) => {
    clearInterval(pageInterval);
    const isLessThanFive = pageIntervalCount < 5;

    if (pageYStart > pageYEnd && isLessThanFive && dragging) shufflePic();
    if (pageYStart < pageYEnd && isLessThanFive && dragging) unShufflePic();

    dragging = false;
    pageIntervalCount = 0;
  });
});

//* function to shuffle pic
function shufflePic() {
  productImages.forEach((prod) => {
    prod.classList.remove(prod_class[num]);
    num++;
  });
  num = 0;
  let pop = prod_class.pop();
  prod_class.unshift(pop);

  productImages.forEach((prod) => {
    prod.classList.add(prod_class[num]);
    num++;
  });
  num = 0;
}
//*** function to unShuffle
function unShufflePic() {
  productImages.forEach((prod) => {
    prod.classList.remove(prod_class[num]);
    num++;
  });

  num = 0;
  let shift = prod_class.shift();
  prod_class.push(shift);

  productImages.forEach((prod) => {
    prod.classList.add(prod_class[num]);
    num++;
  });
  num = 0;
}
