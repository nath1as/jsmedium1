function debugIt() {
  var status = 'debugging';
  function logger() {
    console.log(status); // debugging in scope
  }

  logger();
}

debugIt();

