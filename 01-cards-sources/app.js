const slides = document.querySelectorAll('.slide')

for(const slide of slides){

    slide.addEventListener('click',() => {
        clearActiveClass()
        slide.classList.add('active')
    })
}

function clearActiveClass(){
    slides.forEach( (slide)=>{
        slide.classList.remove('active')
    })
}