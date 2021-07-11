let app = document.getElementById('app')

window.addEventListener('load', ()=>{
    let cumLoader = document.getElementById('cube-loader')
    app.style.filter = 'blur(0)';
    cumLoader.style.display = 'none';
    document.body.style.overflow = 'visible'

})


// let  activeCard = document.querySelector('.swiper-slide-active').children[0]
let slider = document.querySelector('.swiper-container');

new Swiper('.slider', {
    slidesPerView: 5,
    loop: true,
    centerSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
           
        },
        800: {
            slidesPerView: 3,
        },
        1000: {
            slidesPerView: 5,
        }
    }
});


function activeBurger(flag){
    let navigation = document.querySelector('.navigation__items')
    let burger =  document.querySelector('.burger')
    let exit = document.querySelector('.exit')
    let body = document.body

    if(flag){
        exit.style.opacity = '0';
        navigation.style.transform = 'translate(0, 0)';
        exit.style.animation = 'exit 1s ease 1.5s forwards'
        body.classList.add('body-active')
    }else{
        exit.style.opacity= 0;
        navigation.style.transform = 'translate(0, -500px)';
        exit.style.animation = '';
        body.classList.remove('body-active')
       
        

    }
        
}

let filterFlag = true

function filter(){
    let blockFilter = document.querySelector('.search-place-button-items')
    let mobilWind = document.querySelector('.search-place-button_mobil')
    let animation = document.querySelector('.search-place-button_mobil').children[2]
    let row = document.querySelector('.search-place-button_mobil').children[1]
    if(filterFlag){
        animation.style.marginTop = '49%'
        setTimeout(()=>{ row.style.transform = 'rotate(180deg)' },10)
        
        setTimeout(()=>{
            mobilWind.style.height = '150px'
            // animation.style.display = ' none'
            blockFilter.style.display = 'grid'
            blockFilter.style.opacity = 1
            filterFlag = false
        },1200)
    }else{
        blockFilter.style.opacity = 0 
        blockFilter.style.display = 'none'
        mobilWind.style.height = ''
        animation.style.marginTop = '0'
        row.style.transform = 'rotate(360deg)'
        row.style.transform = 'translate(0, 25px)'
        filterFlag = true
        let checkbox = document.querySelector('.search-place-button-items').children
        for(let element of checkbox){
                element.children[0].checked = false
        }
    }
}

let input = document.querySelector('.search-place-input').children[0]
let audio = document.getElementsByTagName('audio')[0]
let exitAudio = document.querySelector('.audio').children[1]
let windAudio = document.querySelector('.audio')
let text = null
input.onchange = function(){
    text = input.value 
}


function startAudio(flag){
    if(flag){
        audio.setAttribute('src', '')
        console.log(234)
        windAudio.style.opacity = '0'
        app.style.filter = 'blur(0)'
        windAudio.style.display = 'none'
        document.body.style.overflow = 'visible'
    }else if(text == 15){
        input.value = ''
        audio.setAttribute('src', './assets/music/Maneskin - I Wanna Be Your Slave (mp3ha.org).mp3')
        
        windAudio.style.display = 'flex'
        windAudio.children[2].classList.add('js-container')
        conf()
        
        document.body.style.overflow = 'hidden'
        windAudio.style.opacity = '1'
        app.style.filter = 'blur(5px)'
        setTimeout(()=>{
            audio.style.opacity = 1;
            setTimeout(()=>{
                exitAudio.style.opacity = 1;
            },1000)
        },3000)
    }
}
   





