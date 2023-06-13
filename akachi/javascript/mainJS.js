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

if(document.readyState){
    setInterval(() => {
    document.getElementById('containLoaders').remove()
    }, 2000);
}

console.log(window.scrollY * document.body.offsetHeight)


function min(a,b){
    return Math.min(a,b)
}
console.log(min(4,8))
