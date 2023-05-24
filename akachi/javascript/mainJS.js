window.addEventListener('scroll', () => {
    const nav = document.getElementById('nav')

    if(window.scrollY * document.body.offsetHeight >= 2000){
        nav.classList.add('navFixed');
        nav.classList.remove('nav');
    }else{
        // nav.classList.remove('nav-top-color');
        nav.classList.add('nav');
        nav.classList.remove('navFixed');
    }
})

console.log(window.scrollY * document.body.offsetHeight)

// mobile nav
// function mobileNav(){
    
//     const mobNav = document.getElementById('burger').checked 
    
//     let w = Number(window.innerWidth);
//     if(w <= 700) {
//         if(mobNav){
//             document.getElementById('ulNone').style.display = 'flex';
//             document.getElementById('navDivNone').style.display = 'flex';
//         }else{
//             document.getElementById('ulNone').style.display = 'none';
//             document.getElementById('navDivNone').style.display = 'none';
//         }
//     }else if(w <= 500){
//         if(mobNav){
//         document.getElementById('ulNone').style.display = 'block';
//         document.getElementById('navDivNone').style.display = 'block';
//         }else{
//             document.getElementById('ulNone').style.display = 'none';
//         document.getElementById('navDivNone').style.display = 'none';
//         }
//     }else{
//        if(document.getElementById('burger').style.display = 'none' ) 
//         document.getElementById('ulNone').style.display = 'flex';
//         document.getElementById('navDivNone').style.display = 'flex';
//     } 

// }

// let wi = Number(window.innerWidth);
// if(wi => 1000){

// }



// console.log(window.innerWidth)
// function screen_resize() {
//     var h = parseInt(window.innerHeight);
//     var w = parseInt(window.innerWidth);

//     if(w <= 500) {
//         //max-width 500px
//         // actions here...
//         return mobileNav();
//     } 
//     // else if(w > 500 && w <=850) {
//     //     //max-width 850px
//     //     // actions here...
//     //     orange();
//     // } else {
//     //     // 850px and beyond
//     //     // actions here...
//     //     green();
//     // }

// }
// screen_resize()