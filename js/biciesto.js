function obteneraño(){
	let año = document.getElementById("año").value;
	console.log(año);
	biciesto(año);
}

function biciesto(año){
    if(Number.isInteger(año / 4)){
        console.log("es divisible por 4")
        if (Number.isInteger(año / 100)) {
            console.log("es divisible por 100");
            if (Number.isInteger(año / 400)) {
                console.log("es divisible por 400");
                const biciesto = "<h1> El año es biciesto </h1>"
                console.log(biciesto);
                document.getElementById("resultadoAño").innerHTML = biciesto ;
                return true;
            }else{
                const nobiciesto = "<h1> El año no es biciesto </h1>"
                console.log(nobiciesto);
                document.getElementById("resultadoAño").innerHTML = nobiciesto ;
                return false;
            }
        }else{
            const nobiciesto = "<h1> El año no es biciesto </h1>"
            console.log(nobiciesto);
            document.getElementById("resultadoAño").innerHTML = nobiciesto ;
            return false;
        }
    }else{
        const nobiciesto = "<h1> El año no es biciesto </h1>"
        console.log(nobiciesto);
        document.getElementById("resultadoAño").innerHTML = nobiciesto ;
        return false;
    }
}