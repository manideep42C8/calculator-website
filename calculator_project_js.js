let result = localStorage.getItem('result')||'';
document.querySelector('.js-display').innerHTML=result;
function updateCalculation(value){
  result+=value;
   
  document.querySelector('.js-display').innerHTML=result;
  localStorage.setItem('result',result);
}
function click(){
  
}