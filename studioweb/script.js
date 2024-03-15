const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page3Animation(){
    
var elemC = document.querySelector("#elem-container")

var fixed = document.querySelector("#fixed-image")

elemC.addEventListener("mouseenter",function(){
    fixed.style.display = "block"
})

elemC.addEventListener("mouseleave",function(){
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})
}

function swiperAnimation(){
    
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 90,
  });
}

function menuanimation(){
    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#menuscrn")
    var navimg =document.querySelector("nav img")
    var count = 0

    menu.addEventListener("click",function (){
        if(count==0){
        full.style.top = 0
        navimg.style.opacity=0
        count = 1
     }else{
        full.style.top = "-100%"
        navimg.style.opacity = 1
        count = 0
    }
})
}

function loaderanimation(){
    
    var loader =document.querySelector("#loader")
    setTimeout(function(){
    loader.style.top=("-100%")
    },3500)
}

menuanimation()
page3Animation()
swiperAnimation()
loaderanimation()
