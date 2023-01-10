//NUMEROS PRIMOS
Number.prototype.isPrime = function() {
    let raiz=Math.sqrt(this);
    for(let i = 2; i <= raiz; i++)  {
        if( this % i === 0 ) {        
            return false;
        }
    }
    return true;
}
const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // por razones matemáticas, 1 se considera primo
while( primeCount < 10000 ) {
    if( num.isPrime() ) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num-1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);


    


//REVERTIR STRINGS------------------------------------------------------------------------------------------------------------------------------------
let cad = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
function revertirCad (cad){
    let separarCadena = cad.split(""); // se aplica split sobre el parametro de entrada (cad) de la funcion, como separador una cadena de texto vacia (""), por lo que el parametro de entrada se separara en cada caracter. Formando así el array que contendra los caracter [....]. que forman parte del parametro de entrada
    let invertirArreglo = separarCadena.reverse(); // se usa reverse para dar la vuelta a el orden de estos caracteres 
    let unirArreglo = invertirArreglo.join(""); // se usa join para volver a unir los caracteres, que se habian separado al usar el metodo split 
    return unirArreglo;
}
console.log(revertirCad (cad));

//FUNCION MAS CORTA PARA INVERTIR STRINGS
revertirCad = (cad) => { return cad.split("").reverse().join("");}
console.log(revertirCad (cad));


//Fibonacci-----------------------------------------------------------------------------------------------------------------------------------------------------------
// recursive
function rFib( n ) {
        if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
rFib(20);  // 0.937 seconds
    // iterative
function iFib( n ) {
        const vals = [ 0, 1 ];
        while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
iFib(20); // 0,343 seconds 
    