function calcula(e){
// Va a prevenir que el input type submit envie la informacion hacia una url
  e.preventDefault();
  let valor_1 = document.querySelector("form input[name='num1']").value;
  let valor_2 = document.querySelector("form input[name='num2']").value;
  let operacion = document.querySelector("form select[name='operacion']").selectedIndex;
  let resultado = '';

  switch (operacion) {
    case 0:
      resultado = Number(valor_1) + Number(valor_2)
      break;
    case 1:
      resultado = Number(valor_1) -  Number(valor_2)
      break;
    case 2:
      resultado = Number(valor_1) * Number(valor_2)
      break;
    default:
      if(valor_2 === 0){
        alert('División entre (0) no permitida...')
      } else {
        resultado = Number(valor_1) /  Number(valor_2);
      }
  }
  document.getElementById('resultado').innerHTML = resultado;    
};

function isNumber(element){

  if(element && isNaN(element) ){
    //console.log('Por favor introducir valores numericos...');
    alert('Por favor introducir valores numericos...');
    return 1;
  }
  return 0;
}

function validar(e){
  let valorR =  isNumber(e.srcElement.value);

  if(valorR) {
    e.srcElement.value = '';
    e.target.focus();
  }
    
}