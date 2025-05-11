function generateNumber(){
   
    const min = Math.ceil(document.querySelector('.input-min').value)
    const max = Math.floor(document.querySelector('.input-max').value)

   const result = Math.floor(Math.random() * (max - min + 1)) + min;
    
   const resultado =  document.getElementById("resultado")

 resultado.innerHTML = result 

 resultado.classList.remove("animate");
 void resultado.offsetWidth;
 resultado.classList.add("animate");
}