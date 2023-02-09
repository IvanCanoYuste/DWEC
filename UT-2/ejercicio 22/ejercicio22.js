let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function limpiar(arr) {
  let map = new Map();
  let palabra = "";
  let anagrama = [];
  for (let i = 0; i < arr.length; i++) {
    palabra = arr[i];
    map.set(palabra.split("").sort().join("").toLowerCase(), arr[i]);
  }

  anagrama = Array.from(map.values());
  return anagrama;
}
