function obtener(){
	let cadena = document.getElementById("pangrama").value;
	console.log(cadena);
	pangrama(cadena);
}


function pangrama(cadena) {
	const ALFABETO_MINUSCULAS = "abcdefghijklmnñopqrstuvwxyz";
	cadena = cadena.toLowerCase();
	let alfabetoComoArreglo = Array.from(ALFABETO_MINUSCULAS);
	for (let i = 0; i < alfabetoComoArreglo.length; i++) {
        let letraActual = alfabetoComoArreglo[i];
		if (!cadena.includes(letraActual)){
			const error ="<h1>el texto no es pagrama</h1>";
			console.log(error);
			document.getElementById("resultado").innerHTML = error;
            return false;
        } 
		
	}
	const pangrama ="<h1>El texto efectivamente es PANGRAMA</h1>";
	console.log(pangrama);
	document.getElementById("resultado").innerHTML = pangrama ;
	return true;
};