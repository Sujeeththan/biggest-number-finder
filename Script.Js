function compare(event) {
         event.preventDefault();

         let x = parseFloat(document.getElementById("a").value);
         let y = parseFloat(document.getElementById("b").value);
         let z = parseFloat(document.getElementById("c").value);
         let output;

       if (x == y && y == z) {
        output = `All are equal ${x} `;
       }   else if (x == y && x > z) {
        output = `a(${x}) and b(${y}) are equal and biggest`;
       }   else if (y == z && y > x) {
        output = `b(${y}) and c(${z}) are equal and biggest`;
       }  else if (x == z && x > y) {
        output = `a(${x}) and c(${z}) are equal and biggest`;
       }  else if (x > y && x > z) {
        output = `a(${x}) is biggest`;
       } else if (y > x && y > z) {
        output = `b(${y}) is biggest`;
       } else if (z > x && z > y) {
        output = `c(${z}) is biggest`;
       } else {
        output;
       }

       console.log(output);
       
       document.getElementById("output").innerHTML = output;

}