function f() {
  try {
    console.log("try");
    //JSON.parse("{ bad json o_O }");
    //return true;
  } catch (err) {
    console.log("catch");
    //JSON.parse("{ bad json o_O }"); //no se lanza el finally al lanzar un erros en el catch.
    alert(err.name);
    alert(err.message);
    return true;
  } finally {
    console.log("finally");
  }
}

//
