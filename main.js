let albumContainer = document.getElementById("container_Album")
let albumTag1 = document.getElementById("tag1")
let albumtag2 = document.getElementById("tag2")
let albumtag3 = document.getElementById("tag3")

let section3 =()=>{


albumContainer.addEventListener('mouseenter', function(){
albumContainer.classList.add('transitionElement')
albumContainer.style.backgroundColor = "white"
albumTag1.style.opacity = 1
albumtag2.style.opacity=1
albumtag3.style.opacity=1
albumTag1.style.color = "black"
albumtag2.style.color="black"
albumtag3.style.color= "black"
albumtag3.style.borderTop = "1px solid black"
albumtag3.style.marginLeft ="1rem"
albumtag3.style.marginRight ="1rem"
})

albumContainer.addEventListener('mouseleave', function(){
albumContainer.style.backgroundColor = "black"
albumTag1.style.opacity = 0
albumtag2.style.opacity=0
albumtag3.style.opacity=0
})






}


section3()


