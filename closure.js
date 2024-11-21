function A() {
    const name = "Mozilla";

    function B() {
      console.log(name);
    }
     return B;
  }
  // A();
  const C = A();
  C();