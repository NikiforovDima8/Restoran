let lianer=0 //смещение к левому краю 
const sliderLine=document.querySelector('.slider-line')
let ofer=0  //смещение к правому краю

document.querySelector('.icon-angle-left').addEventListener('click', function(){
lianer = lianer + 540;
if(lianer>2700){
    lianer=0
}
sliderLine.style.left= -lianer + 'px'
})


document.querySelector('.icon-angle-right').addEventListener('click', function(){
   ofer=ofer - 540;
    if(ofer<0){
        ofer=2700
    }
    sliderLine.style.left= -ofer + 'px'
    })