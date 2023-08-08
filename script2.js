let leter=0

const sliderLinePovar=document.querySelector('.slider-line-povar')
const iconAngleLeft1Povar =document.querySelector('.icon-angle-left1-povar')
const iconAngleRight1Povar =document.querySelector('.icon-angle-right1-povar')

iconAngleLeft1Povar.addEventListener('click', num=()=>{
leter+=306
if(leter>612){
    leter=0
}
sliderLinePovar.style.left=-leter+'px'
})


iconAngleRight1Povar.addEventListener('click', num=()=>{
    leter-=306
    if(leter<0){
        leter=612
    }
    sliderLinePovar.style.left=-leter+'px'
    })