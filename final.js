
// 1- Resolver el problema utilizando javascript, para identificar una figura geométrica:
//Teniendo una variable numérica que representa el número de lados de una figura geométrica, 
//mostrar por consola su tipo. Los tipos son: "Círculo", "Triángulo", "Cuadrado", "Pentágono", "Hexágono" o "Polígono", 
//según corresponda: 
//Círculo: si el número de lados es 0.
//Triángulo: si el número de lados es 3.
//Cuadrado: si el número de lados es 4.
//Pentágono: si el número de lados es 5.
//Hexágono: si el número de lados es 6.
//Polígono: si el número de lados es mayor que 6.
//Asegúrate de incluir un mensaje de error si el número de lados es menor que cero.

function identificarFigura (numeroLados){
  if (numeroLados < 0) {
    console.log ("Error")
  }
  else if(numeroLados ===0) {
    console.log ("Circulo");
  }
  else if (numeroLados ===3) {
    console.log ("Triangulo");
  }
  else if (numeroLados ===4) {
    console.log ("Cuadrado");
  }
  else if (numeroLados ===5) {
    console.log ("Pentagono");
  }
  else if (numeroLados ===6) {
    console.log ("Hexagono");
  }
  else {
  console.log ("Poligono")
  }
  }

  identificarFigura (-1);
  identificarFigura (0);
  identificarFigura (3);
  identificarFigura (4);
  identificarFigura (5);
  identificarFigura (6);
  identificarFigura (7);
  
  // 2- Mejorar el ejercicio anterior con manejo de errores:Modifica la función tipoFigura para que,
  // además de determinar el tipo de figura geométrica, verifique que el número de lados sea válido 
  // (mayor o igual a cero). Si el número de lados es menor a cero,  debe mostrar  un mensaje de error 
  // indicando que el número de lados no es correcto.

  function tipoFigura (lados){
    if (lados < 0) {
      console.log ("Error. El numero no puede ser negativo")
    }
    else if ( lados === 1 || lados ===2){
        console.log ( "Error. El numero de lados no es correcto"
        )
    }
    else if(lados ===0) {
      console.log ("Circulo");
    }
    else if (lados ===3) {
      console.log ("Triangulo");
    }
    else if (lados ===4) {
      console.log ("Cuadrado");
    }
    else if (lados ===5) {
      console.log ("Pentagono");
    }
    else if (lados ===6) {
      console.log ("Hexagono");
    }
    else {
    console.log ("Poligono")
    }
    }
  tipoFigura (-1)
  tipoFigura (1)
  tipoFigura (2)
  tipoFigura (3)
  tipoFigura (4)
  tipoFigura (5)
  tipoFigura (6)
  tipoFigura (7)

  // 3- Mejorar el ejercicio anterior para calcular el perímetro de la figura geométrica:
  // Amplía la funcionalidad del programa definiendo ademas una variable numerica que representa el largo de un lado,
  //  calcule y retorne el perímetro de la misma. El perímetro de una figura geométrica se calcula sumando las longitudes 
  // de todos sus lados. Si es un círculo, el perímetro será la circunferencia, calculada como 2 * π * radio, donde π es 
  // una constante (aproximadamente 3.14159) y radio es el radio del círculo.
//(para simplificar el ejercicio, se toma solo 1 lado asumiendo que todos los lados restantes son iguales) .



function tipoFigura (lados, longitudLado){
    let perimetro ; 

    if (lados < 0) {
      console.log ("Error. El numero no puede ser negativo")
    }
    else if ( lados === 1 || lados ===2){
        console.log ( "Error. El numero de lados no es correcto"
        )
    }
    else if(lados ===0) {
        perimetro = 2 * Math.PI * longitudLado;
        console.log ("El perimetro de Circulo es:", perimetro);
    }
    else if (lados ===3) {
      perimetro = 3* longitudLado
      console.log ("El perimetro de Triangulo es:", perimetro );
    }
    else if (lados ===4) {
        perimetro = 4* longitudLado
      console.log ("El perimetro de Cuadrado es:", perimetro);
    }
    else if (lados ===5) {
        perimetro = 5* longitudLado
      console.log ("El perimetro de Pentagono es:", perimetro);
    }
    else if (lados ===6) {
      perimetro = 6* longitudLado
      console.log ("El perimetro de Hexagono es:",perimetro);
    }
    else {
    perimetro = lados* longitudLado
    console.log ("El perimetro de Poligono es:", perimetro)
    }
    }
  
  tipoFigura (-1, 4)
  tipoFigura (1, 4)
  tipoFigura (2, 5)
  tipoFigura (3, 5)
  tipoFigura (4, 6)
  tipoFigura (5, 6)
  tipoFigura (6, 8)
  tipoFigura (7, 8)
