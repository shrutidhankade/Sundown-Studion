const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var elemc = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed_image")

elemc.addEventListener("mouseenter", function () {
    fixed.style.display = "block"
})
elemc.addEventListener("mouseleave", function () {
    fixed.style.display = "none"
})


var elems = document.querySelectorAll(".elem")
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})

var h1 = document.querySelectorAll(".left4 span")
var right4 = document.querySelector(".right4")

h1.forEach(function(val){
    val.addEventListener("click", function(){
       const rohit = val.getAttribute("data-shruti")
       right4.style.backgroundImage = `url(${rohit})`
    })
})

// h1.addEventListener("click", function (val) {
//     document.querySelector("#right4 img").click();
//     console.log(val);
//     console.log(right4
//     );
// })


//  <script>
//     document.querySelector("#selectpic")
//     .addEventListener("click", function(){
//         document.querySelector("#uploadform input").click();
//     });
//   </script>


var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 100,

});


var loader = document.querySelector("#loader")

setTimeout(function () {
    loader.style.top = "-100%"
}, 4000)