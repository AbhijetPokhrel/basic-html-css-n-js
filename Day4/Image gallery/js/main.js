
var imgURLs = [
    "https://images.unsplash.com/photo-1529310399831-ed472b81d589?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1514805081229-07bc65454fd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80",
    "https://images.unsplash.com/photo-1509829073816-3e06f139b626?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1520207756688-175b32d0917d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    "https://images.unsplash.com/photo-1529310399831-ed472b81d589?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1514805081229-07bc65454fd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80",
    "https://images.unsplash.com/photo-1509829073816-3e06f139b626?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
    "https://images.unsplash.com/photo-1520207756688-175b32d0917d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
]

function init() {

    imgURLs.forEach(function (url, index) {

        let imageHolder = document.createElement("div")
        imageHolder.setAttribute("class", "image-holder")

        if ((index % 2)) {
            imageHolder.style.background = "#303030"
        } else {
            imageHolder.style.background = "#DEDEDE"
        }

        let imgElem = document.createElement("img")
        imgElem.setAttribute("id", "img-" + index)
        imgElem.src = url
        imgElem.onclick = imgClicked

        imageHolder.appendChild(imgElem)

        document.getElementById("imgGallery").appendChild(imageHolder)

    })

    document.getElementById("title").innerHTML = "Js tutorial - Day 3"

    let img3 = document.getElementById("img-3")
    img3.src = "https://images.unsplash.com/photo-1597606328849-b52282a3e395?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"

}

function imgClicked(event) {
    const clickedElem = event.target
    const elemID = clickedElem.id
    let slice = elemID.split("-")
    alert("You clicked " + slice[1])
}

// window.onload = init
// window.onload = function(){
//     init()
// }
window.addEventListener('load', init)
