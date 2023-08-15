const passwordMain=document.querySelector('#password-input')
const passwordControl=document.querySelector('#password-control')


passwordControl.onclick=()=>{
   if(passwordMain.getAttribute('type')=='password'){
passwordMain.setAttribute('type','text')
passwordControl.innerHTML='Скрыть'
   } else{
    passwordMain.setAttribute('type','password')
passwordControl.innerHTML='Показать'
   }
}

