console.log("hi")
const arr = ["111111", "22222", "33333", "44444"]
var i = 0;
const changeWord = () => {
    document.querySelector(".tax p").textContent = arr[i];
    if (i < 3) { i++; }
    else {
        i = 0;
    }
}
changeWord();
var timer = setInterval(() => changeWord(), 2000)


const carousel = document.getElementById("carousel-container")

const leftArr = document.querySelector(".arrow img.left")
const rightArr = document.querySelector(".arrow img.right")
console.log(leftArr)

leftArr.addEventListener("click", () => handleArrow("left"))
rightArr.addEventListener("click", () => handleArrow("right"))
const carCardWidth = document.querySelector(".car-card").clientWidth
console.log(carCardWidth)
const handleArrow = (dir) => {
    if (dir === "left") {
        carousel.scrollLeft -= carCardWidth
        // console.log(`${dir} clicked`)
    }
    if (dir === "right") {
        // console.log(`${dir} clicked`)
        carousel.scrollLeft += carCardWidth
    }
}
const showCookies = () => {
    const cookieDiv = document.querySelector(".cookies");
    cookieDiv.style.bottom="0px"
    

};


setTimeout(showCookies, 1000);
const cookieDivBtn = document.querySelectorAll(".cookies button");
cookieDivBtn.forEach(btn=>btn.addEventListener("click", () => {
    console.log("clicked")
    const cookieDiv = document.querySelector(".cookies");
    cookieDiv.style.bottom="-600px";

}))




