/*

Recibe 3 parametros y devuelve el valor maximo


Si un parametro no es un numero entero, no lo considera.

Si no recibe ningun parametro devuelve 0
*/

function nuevoN(n) {
    if (isNaN(n) || n < 0 || n == undefined || n == "") {
        n = 0
    }
    return n;
}

function maximo(n1, n2, n3) {
    n1 = nuevoN(n1)
    n2 = nuevoN(n2)
    n3 = nuevoN(n3)
    
    return Math.max(n1, n2, n3);
}



alert(maximo(prompt("Introduce valor"),prompt("Introduce valor"),prompt("Introduce valor")))