
function displayFullRut() {
    // Mision Principal : Esta funcion debe llenar el span con id 'resultado' con el rut completo, en este formato -> Ex: 16.354.300-1.
	// Pero antes de esto, es la encargada de :
	// - Validar que el campo rut solo posea numeros
	let numero = document.querySelector("form input[name='rut']").value;
		if(isNaN(numero) || numero.length == 0 || numero.length > 8 ) {
			// - En caso de error, limpiar el span con id 'resultado' y el form
			document.getElementById('resultado').innerHTML = '';
			document.querySelector("form input[name='rut']").value = '';
		} else {
			// - En caso de exito llamar a calculaDV pasandole el dato del campo rut para que retorne su digito verificador.
			let dv = calculaDV(numero);
			// 	 Asi tendremos el dv para completar la Mision Principal de esta funcion
			document.getElementById('resultado').innerHTML = numero + '-' +dv;
		}

};



function calculaDV(rut){
		//Unica Mision : Recibir un rut entero sin dv y retornar su dv.
	let result='';
	rut_aux = rut.toString().split("").reverse().join("");
	for(i=0,j=2,suma=0; i < rut_aux.length; i++, ((j==7) ? j=2 : j++)) {
			suma += (parseInt(rut_aux.charAt(i)) * j); 
	}
	digito_verificador = 11 - (suma % 11);

	switch (digito_verificador) {
		case 10:
			result = 'K';
			break	
		case 11:
			result = 0;
			break
		default:
			result = digito_verificador;
	}

	return result;
}