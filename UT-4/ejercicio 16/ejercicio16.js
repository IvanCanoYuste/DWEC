let data = {
  Fish: {
    trout: {},
    salmon: {},
  },

  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      "apple tree": {},
      magnolia: {},
    },
  },
};

function createTree(container, data) {
  let principal = document.createElement("ul");
  for (let key in data) {
    let padre = document.createElement("li");
    padre.append(key);
    for (let key2 in data[key]) {
      let hijo2 = document.createElement("li");
      let principal2 = document.createElement("ul");
      hijo2.append(key2);
      for (let key3 in data[key][key2]) {
        let hijo3 = document.createElement("li");
        let principal3 = document.createElement("ul");
        hijo3.append(key3);
        principal3.append(hijo3);
        hijo2.append(principal3);
      }
      principal2.append(hijo2);
      padre.append(principal2);
    }

    principal.append(padre);
  }

  container.append(principal);
}

let container = document.getElementById("container");
createTree(container, data); // crea el árbol en el contenedor
