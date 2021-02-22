const output = document.querySelector('output')
const btn = document.querySelectorAll('.btn')
const symbol = document.querySelectorAll('.symbol')
btn.forEach(function(btn){
    btn.addEventListener('click',function(){
        func(Number(btn.textContent))
    })
})
symbol.forEach(symBtn =>{
   symBtn.addEventListener('click',()=>{
      culc(symBtn.textContent)
   })
})
let num = Number(output.textContent) 
function func(num){
   output.textContent += num
   console.log()
}
function culc(value){
   if(value === "+"){
      num = Number(output.textContent)
      output.textContent = ''
      
      console.log(num)
      sum() 
     
   }
     function sum(){
      
       res = Number(output.textContent) + num
    }
    
if(value === '=') output.textContent = res + Number(output.textContent)


if(value === 'C'){
   output.textContent ='поле очищено'
   setTimeout(()=>{
      output.textContent = ''
   },1500)
} 
}

