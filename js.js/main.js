
let nombreCliente= prompt("Ingrese su nombre:");
function saludo(){
    alert("Bienvenido/a " + nombreCliente + " a La Cafetería!");
}

saludo();

class Producto{
    constructor(nombre, precio){
    this.nombre= nombre;
    this.precio= precio;
    }
}

const bebidasCalientes= [];

const cafeAmericano= new Producto("Café Americano", 200);
const cappuchino= new Producto("Cappuchino", 250);
const caramelLatte= new Producto("Caramel Latte", 300);
const matchaLatte= new Producto("Matcha Latte", 400);


function cargarProductos(array, valor){
    array.push(valor);
}

cargarProductos(bebidasCalientes, cafeAmericano);
cargarProductos(bebidasCalientes, cappuchino);
cargarProductos(bebidasCalientes, caramelLatte);
cargarProductos(bebidasCalientes, matchaLatte);

console.log(bebidasCalientes);


const promo1= [];

cargarProductos(promo1, cafeAmericano);
cargarProductos(promo1, matchaLatte);

const promo2= [];

cargarProductos(promo2, caramelLatte);
cargarProductos(promo2, cappuchino);

console.log(promo1);
console.log(promo2);

let totalPromo1= promo1.reduce((acumulador, elemento) => acumulador + elemento.precio, 0);

let totalPromo2= promo2.reduce((acumulador, elemento) => acumulador + elemento.precio, 0);


let opcion= prompt("Tenemos dos promociones, cuál desea ordenar?. \nSeleccione 1 ó 2: \n1- Café Americano + Matcha Latte \n2- Caramel Latte + Cappuchino");

if(opcion == 1){
    alert("Usted eligió la promoción 1, el precio total es: " + totalPromo1);
}else if (opcion == 2){
    alert("Usted eligió la promoción 2, el precio total es: " + totalPromo2);
}
    alert("Gracias por elegirnos, vuelva pronto.");


