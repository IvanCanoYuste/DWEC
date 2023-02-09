let salaries = {
  John: 100,
  Pete: 300,
  Mary: 350,
};

function topSalaries(salaries) {
  let array = Object.entries(salaries);
  let maximo = 0;
  let persona = "";
  if (array.length == 0) {
    return null;
  } else {
    for (let i = 0; i < array.length; i++) {
      let [empleado, salario] = array[i];
      if (salario > maximo) {
        maximo = salario;
        persona = empleado;
      }
    }
    return persona;
  }
}

topSalaries(salaries);
