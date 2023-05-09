let nombre1 = prompt("Escribe tu nombre");
alert("Hola "+ nombre1 + " Bienvenido/a al Sitio");

let opcion = prompt(
    "Ingrese una opción\n1-River\n2-Racing\n3-Boca\n4-Independiente"
);
switch (opcion) {
    case "1":
    case "River": //||
    console.log("Seleccionaste River");
    break;
    case "2":
    console.log("Seleccionaste Racing");
    break;
    case "3":
    console.log("Seleccionaste Boca");
    break;
    case "4":
    console.log("Seleccionaste Independiente");
    break;
    default:
    console.log("Opción no válida");
    break; }

