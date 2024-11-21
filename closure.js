function A() {
    const name = "Mozilla";

    function B() {
      console.log(name);
    }
    return B;
  }
  
  const C = A();
  C();