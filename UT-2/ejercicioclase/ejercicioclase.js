/**funcion que recibe numeros de parametros numericos y devuelve un objeto con las propiedades:
maximo, minimo usando math.max y min */

function func(...num) {
  console.log(num);
  let suma = 0;
  for (let i = 0; i < num.length; i++) {
    suma += num[i];
  }

  return suma;
}

console.log(func(12, 5, 4));
