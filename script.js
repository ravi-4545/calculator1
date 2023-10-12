form=document.querySelector('#form')
kay=document.querySelectorAll('#n')
display=document.querySelector('#display')
equal=document.querySelector('#equal')
clear=document.querySelector('#clear')
dec_by_1=document.querySelector('#dec_by_1')

form.addEventListener('click',(e)=>{
    e.preventDefault()
})

kay.forEach(function(button){
    button.addEventListener('click',function(){
        display.innerHTML += button.value
    })
      
})
equal.addEventListener('click',()=>{
    display.innerHTML= eval(display.innerHTML)
})
dec_by_1.addEventListener('click',()=>{
    display.innerHTML = ''
})
clear.addEventListener('click',()=>{
    display.innerHTML=display.innerHTML.slice(0,-1)
})