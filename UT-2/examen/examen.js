/**
 * @author Ivan Cano Yuste
 */

/*-------------------------------------------------
Ejercicio 1
-------------------------------------------------*/

function muestraSalario(personas, salarios) {
  for (let [clave1, valor1] of personas) {
    for (let [clave2, valor2] of salarios) {
      if (clave1 == clave2) {
        console.log(
          "NIF: " + clave1 + " , nombre: " + valor1 + " y salario: " + valor2
        );
      }
    }
  }
}

/*-------------------------------------------------
Ejercicio 2
-------------------------------------------------*/

let personas = new Map([
  ["71654554R", "Juan"],
  ["71654555R", "Pepe"],
  ["71654556R", "Maria"],
  ["71654557R", "Pedro"],
]);

let salarios = new Map([
  ["71654554R", 335456],
  ["71654555R", 12375456],
  ["71654556R", 12375456],
  ["71654557R", 1535456],
]);

/*-------------------------------------------------
Ejercicio 3
-------------------------------------------------*/

function almacenaPersonas() {
  localStorage.setItem(
    "personas",
    JSON.stringify(Array.from(personas.entries()))
  );
}

function recuperaPersonas() {
  let array = localStorage.getItem("personas");
  let separada = array.split(",");
  console.log(array);
  console.log(separada);
  //return separada;
}

/*-------------------------------------------------
Ejercicio 4
-------------------------------------------------*/

class Empleo {
  static salarioMinimo = 1000;
  constructor(sueldoMensual, categoria, fecha) {
    if (sueldoMensual < Empleo.salarioMinimo) {
      this.sueldoMensual = Empleo.salarioMinimo;
    } else this.sueldoMensual = sueldoMensual;
    this.categoria = categoria;
    this.fecha = fecha;
  }
  sueldoHoras(horas) {
    return (this.sueldoMensual / 40) * horas;
  }
}

/*-------------------------------------------------
Ejercicio 5
-------------------------------------------------*/

class Escultor extends Empleo {
  constructor(sueldo, fecha) {
    super(sueldo, fecha);
    this.categoria = "Escultor";
  }
}

/*-------------------------------------------------
Ejercicio 6
-------------------------------------------------*/

let oferta = {
  empleos: [],
  insertar(sueldoMensual, categoria) {
    let a = new Empleo(sueldoMensual, categoria, new Date());
    this.empleos.push(a);
  },

  buscarEmpleo(categoria) {
    return this.empleos.filter((cat) => cat.categoria == categoria);
  },

  eliminarEmpleo(categoria) {
    let seguir = true;
    for (let i = 0; i < this.empleos.length; i++) {
      if (this.empleos[i].categoria == categoria) {
        console.log(this.empleos[0]);
        while (seguir) {
          let entrada = prompt("Si quiere borrarlo pulse 1 sino pulse 0");
          entrada = parseInt(entrada);
          if (entrada == 1 || entrada == 0) {
            if (entrada == 1) {
              this.empleos = this.empleos.splice(i + 1, 1);
              seguir = false;
            } else seguir = false;
          }
        }
      }
    }
  },

  sueldosMaximos() {
    let mapCatSal = new Map();
    for (let i = 0; i < this.empleos.length; i++) {
      mapCatSal.set(this.empleos[i].categoria, this.empleos[i].sueldoMensual);
    }

    return mapCatSal;
  },
};

/*-------------------------------------------------
Ejercicio 7
-------------------------------------------------*/

function menu() {
  let seguir = true;
  while (seguir) {
    let opcion = prompt(
      "Elija la opción:\n1.-Insertar empleo.\n2.-Buscar empleos.\n3.-Eliminar empleos.\n4.-Sueldos maximos\n5.- Terminar"
    );
    if (isNaN(opcion) || opcion <= 0 || opcion > 5) {
      alert("no es opcion valida");
    } else {
      opcion = parseInt(opcion);
      switch (opcion) {
        case 1:
          let sueldo = prompt("Indique el sueldo.");
          sueldo = parseInt(sueldo);
          let categoria = prompt("Indique la categoria");
          oferta.insertar(sueldo, categoria);
          break;
        case 2:
          let categoria2 = prompt("Indique la categoria");
          oferta.buscarEmpleo(categoria2);
          break;
        case 3:
          let categoria3 = prompt("Indique la categoria");
          oferta.eliminarEmpleo(categoria3);
          break;
        case 4:
          oferta.sueldosMaximos();
          break;
        case 5:
          seguir = false;
          break;
      }
    }
  }
}
