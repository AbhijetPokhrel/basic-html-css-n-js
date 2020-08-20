

let images = [
    new Image("Dog", "Dog is a social animal","https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"),
    new Image("Harly and David Son", "A stylish bike","https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"),
    new Image("bulb", "Bulb gives light when introduced with electricity","https://images.unsplash.com/photo-1529310399831-ed472b81d589?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"),
    new Image("Mountain", "Mountains are beautiful","https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60")
]
function init() {

    images.forEach(function (image, index) {

        let imageHolder = document.createElement("div")
        imageHolder.setAttribute("class", "image-holder")

        if ((index % 2)) {
            imageHolder.style.background = "#303030"
        } else {
            imageHolder.style.background = "#DEDEDE"
        }

        let imgElem = document.createElement("img")
        imgElem.setAttribute("id", "img-" + index)
        imgElem.src = image.getImageURL()
        imgElem.onclick = imgClicked

        imageHolder.appendChild(imgElem)

        document.getElementById("imgGallery").appendChild(imageHolder)

    })

}

function imgClicked(event) {
    const clickedElem = event.target
    const elemID = clickedElem.id
    let slice = elemID.split("-")
    document.getElementsByClassName("description-holder")[0].style.display = "block"

    let image = images[slice[1]]

    let img = document.createElement("img")
    img.src = image.getImageURL()

    let h2 = document.createElement("h2")
    h2.innerHTML = image.name

    let description = document.createElement("p")
    description.innerHTML = image.description

    let container = document.getElementById("descriptionContainer")
    container.innerHTML = ""
    container.appendChild(img)
    container.appendChild(h2)
    container.appendChild(description)

}

function closeDescription(){
    document.getElementsByClassName("description-holder")[0].style.display = "none"
}


function Image(name, description, url) {
    this.name = name
    this.description = description
    this.url = url
}

Image.prototype.getImageURL = function () {
    return this.url
}

window.addEventListener('load', init)
