function obtenercaracteres(){
    let caracteres= document.getElementById("caracteres").value;
	console.log(caracteres);
	caracteresNoUnicos(caracteres);
}

function caracteresNoUnicos(caracteres){  
    let posiciones = [];
    let posicionesNounicas = [];
    let vectorBorrado=[];
    let caracteresComoArreglo = Array.from(caracteres);
    for (let  i= 0;  i < caracteresComoArreglo.length; i ++) {
        let caracter = caracteresComoArreglo[i];
        let p =0 ;
        for (let j = 0; j < caracteresComoArreglo.length; j++) {
            if (caracter == caracteresComoArreglo[j]) {
                posiciones[p] = j;
                p++;
            }    
        }
        if (posiciones.length > 1) {
            for (let k = 0; k < posiciones.length; k++) {
                if(!posicionesNounicas.includes(posiciones[k])){
                    posicionesNounicas.push(posiciones[k]);
                }
            }
        }
        posiciones = [];
    }
    posicionesNounicas.sort((a, b) => a - b );
    console.log(posicionesNounicas); 
    for (let h = 0; h < posicionesNounicas.length; h++) {
        if (caracteresComoArreglo.length > posicionesNounicas[h] ) {
            vectorBorrado[h] = caracteresComoArreglo.splice(posicionesNounicas[h], 1);
        }
        caracteresComoArreglo = Array.from(caracteres);
    }
    console.log(caracteresComoArreglo); 
    document.getElementById("resultadot").innerHTML = "Estos son los caracteres no unicos que se ingresaron";
    document.getElementById("resultadocaracter").innerHTML = vectorBorrado;
    console.log("Estos son los caracteres no unicos que se ingresaron"+vectorBorrado); 
    
    return true;
}