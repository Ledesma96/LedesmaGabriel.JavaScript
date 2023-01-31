/* procesadores */

const renderProductosProcesadores = () =>{
    const productos_Procedasores = cargarProductosLS();
    let salida= "";

    for (productos of productos_Procedasores){
        salida+= `
        <a href="#" class="text-decoration-none" onCLick="guardarProduct(${productos.id})">
            <div class="card m-4 alto text-center text-decoration-none border-0" style="width:14rem;">
                <img src="./imagenes/${productos.imagen}" class="card-img-top " alt="${productos.nombre}...">
                <div class="card-body scrollNone ">
                    <h5 class="card-title scrollNone text-dark mt-3">${productos.nombre}</h5>
                    <h5 class="card-text scrollNone mt-4">$${productos.precio}</h5>
                </div>
            </div>
        </a>`;
    }

    document.getElementById("procesadores").innerHTML=salida;
}

renderProductosProcesadores();



/* tarjetas graficas */



const renderProductosGrafica = () =>{
    const productos__grafica = cargarProductoosLS();
    let salida= "";

    for (productos of productos__grafica){
        salida+= `
        <a href="#" class="text-decoration-none" onCLick="guuardarProduct(${productos.id})">
            <div class="card m-4 alto text-center text-decoration-none border-0" style="width:14rem;">
                <img src="./imagenes/${productos.imagen}" class="card-img-top " alt="${productos.nombre}...">
                <div class="card-body scrollNone ">
                    <h5 class="card-title scrollNone text-dark mt-3">${productos.nombre}</h5>
                    <h5 class="card-text scrollNone mt-4">$${productos.precio}</h5>
                </div>
            </div>
        </a>`;
    }

    document.getElementById("grafica").innerHTML=salida;
}

renderProductosGrafica();

/* tarjetas de memoria */


const renderProductosMemoria = () =>{
    const productos__memoria = cargarProductoossLS();
    let salida= "";

    for (productos of productos__memoria){
        salida+= `
        <a href="#" class="text-decoration-none" onCLick="guuardarProoduct(${productos.id})">
        <div class="card m-4 alto text-center text-decoration-none border-0" style="width:14rem;">
            <img src="./imagenes/${productos.imagen}" class="card-img-top " alt="${productos.nombre}...">
            <div class="card-body scrollNone ">
                <h5 class="card-title scrollNone text-dark mt-3">${productos.nombre}</h5>
                <h5 class="card-text scrollNone mt-4">$${productos.precio}</h5>
            </div>
        </div>
    </a>`;
    }

    document.getElementById("memoria").innerHTML=salida;
}

renderProductosMemoria();

/*fuentes*/

const renderProductosFuente = () => {
    const productos__fuentes = cargaarProductosLS ();
    let salida = "";
   
    for (productos of productos__fuentes){
    salida+=`
    <a href="#" class="text-decoration-none" onCLick="guuardarProductFuente(${productos.id})">
        <div class="card m-4 alto text-center text-decoration-none border-0" style="width:14rem;">
            <img src="./imagenes/${productos.imagen}" class="card-img-top " alt="${productos.nombre}...">
            <div class="card-body scrollNone ">
                <h5 class="card-title scrollNone text-dark mt-3">${productos.nombre}</h5>
                <h5 class="card-text scrollNone mt-4">$${productos.precio}</h5>
            </div>
        </div>
    </a>`;
    }

    document.getElementById("fuente").innerHTML=salida;
}

renderProductosFuente();


/*mothers*/

const renderProductosMothers = () => {
    const productos_mothers = caargarProductosLS();
    let salida= "";

for (productos of productos_mothers){
    salida+=`
    <a href="#" class="text-decoration-none" onCLick="guuardarProductMother(${productos.id})">
        <div class="card m-4 alto text-center text-decoration-none border-0" style="width:14rem;">
            <img src="./imagenes/${productos.imagen}" class="card-img-top " alt="${productos.nombre}...">
            <div class="card-body scrollNone ">
                <h5 class="card-title scrollNone text-dark mt-3">${productos.nombre}</h5>
                <h5 class="card-text scrollNone mt-4">$${productos.precio}</h5>
            </div>
        </div>
    </a>`;
    }

    document.getElementById("mother").innerHTML=salida;
}

renderProductosMothers();

/*gabinetes*/

const renderProductosGabinete = () => {
    const productos__gabinete = caarrgarProductosLS();
    let salida = ""

    for (productos of productos__gabinete){
        salida+=`
        <a href="#" class="text-decoration-none" onCLick="guuardarProductGabinete(${productos.id})">
        <div class="card m-4 alto text-center text-decoration-none border-0" style="width:14rem;">
            <img src="./imagenes/${productos.imagen}" class="card-img-top " alt="${productos.nombre}...">
            <div class="card-body scrollNone ">
                <h5 class="card-title scrollNone text-dark mt-3">${productos.nombre}</h5>
                <h5 class="card-text scrollNone mt-4">$${productos.precio}</h5>
            </div>
        </div>
    </a>`
    }

    document.getElementById("gabinete").innerHTML=salida;
}

renderProductosGabinete();
botonCarrito();
