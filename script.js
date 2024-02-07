let points = 0;
let items = document.querySelectorAll(".item");
let show = document.querySelectorAll(".show .imgshow");
let dots = document.querySelectorAll(".units .unit .dot");
items.forEach((e,i)=>{
    e.addEventListener("click",()=>{
        points = i;
        active();
    })
})

dots.forEach((e,i)=>{
    e.addEventListener("click",()=>{
        points = i;
        active()
    })
})

function next(num){
    if(points < items.length-1){
        points += num
    }else{
        points = 0;
    }
    active();
    activeImg()
}
function prev(num){
    if(points > 0){
        points += num
    }else{
        points = items.length-1
    }
    active();
    activeImg()
}
function active(){
    items.forEach(e=> e.classList.remove("active"))
    items[points].classList.add("active")
    activeImg()
}
function activeImg(){
    show.forEach(e=>{
        e.classList.remove("activeImg");
    })
    dots.forEach(m=>{
        m.classList.remove("activeDot");
    })
    show[points].classList.add("activeImg")
    dots[points].classList.add("activeDot");
}
let x ;

function time(){
     x = setInterval(function(){
        next(1);
    },5000)
}
function stoptime(){
    clearInterval(x)
}

