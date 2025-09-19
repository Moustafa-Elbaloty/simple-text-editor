let list = document.querySelector("#font")
let text = document.querySelector(".text")
let btns = document.querySelectorAll("button")
let size = document.querySelector("span")
let bold = document.querySelector(".type")
let incBtn = document.querySelector(".Increment")
let decBtn = document.querySelector(".Decrement")


if (localStorage.getItem(list.id)) {
    list.value = localStorage.getItem(list.id)
    text.style.fontFamily = list.value
}
if (localStorage.getItem("size")) {
    size.textContent = localStorage.getItem("size")
    text.style.fontSize = size.textContent + "px"
}

if (localStorage.getItem("style")) {
    text.style.fontWeight = localStorage.getItem("style")
}

list.addEventListener("change", () => {
    text.style.fontFamily = list.value
    localStorage.setItem(list.id, list.value)

})

bold.addEventListener("click", () => {
    if (!text.style.fontWeight) {
        text.style.fontWeight = "900"
        localStorage.setItem("style", text.style.fontWeight)
    }
    else {
        text.style.removeProperty("font-weight")
        localStorage.setItem("style", "normal")
    }

})


incBtn.addEventListener("click", () => {
    if (size.textContent < 50) {
        size.textContent = ++size.textContent
        text.style.fontSize = size.textContent + "px"
        decBtn.removeAttribute("disabled")
        localStorage.setItem("size", size.textContent)
    }
    else {
        incBtn.setAttribute("disabled", "")
    }
})


decBtn.addEventListener("click", () => {
    if (size.textContent > 15) {
        size.textContent = --size.textContent
        text.style.fontSize = size.textContent + "px"
        incBtn.removeAttribute("disabled")
        localStorage.setItem("size", size.textContent)
    }
    else {
        decBtn.setAttribute("disabled", "")
    }


})

// way 2
// If you have many buttons with the same behavior

// btns.forEach(btn => {
//     btn.addEventListener("click", (e) => {
//         let inc = e.target.classList.contains("Increment")
//         let dec = e.target.classList.contains("Decrement")

//         if (inc) {
//             if (size.textContent < 50) {
//              size.textContent = ++size.textContent
//              text.style.fontSize = size.textContent + "px"
//              decBtn.removeAttribute("disabled")
//              localStorage.setItem("size", size.textContent)
//             }
//             else {
//                 e.target.setAttribute("disabled", "")
//             }
//         }
//         if (dec) {
// if (size.textContent > 15) {
//     size.textContent = --size.textContent
//     text.style.fontSize = size.textContent + "px"
//     e.target.removeAttribute("disabled")
//     localStorage.setItem("size", size.textContent)
// }
//             else {
//                 e.target.setAttribute("disabled", "")
//             }

//         }

//     })
// })
