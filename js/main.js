
const containers = document.querySelectorAll('.container');
const mobile_nav = document.getElementById('mobile_nav');
const main_header = document.getElementById('main_header');
document.getElementById('nav_btn').addEventListener('click',toggle_nav_effects);
document.getElementById('close_nav_btn').addEventListener('click',toggle_nav_effects);

function toggle_nav_effects(){
    toggle_blur_nav();
    toggle_mb_nav_height();
}
function toggle_blur_nav(){
   containers.forEach((con)=>{
        con.classList.toggle('blur-sm');
   });
}
function toggle_mb_nav_height(){
    if(mobile_nav.style.height == '0px'){

        mobile_nav.style.height = '400px'
    }else{
        mobile_nav.style.height = '0px'

    }
}
// only for test
// window.addEventListener('load',toggle_nav_effects)


window.addEventListener('scroll',function(e){
    if(window.scrollY >= 800){
        main_header.classList.add('nav_style_inScroll');
    }
    if(window.scrollY == 0){
        main_header.classList.remove('nav_style_inScroll');
    }
})