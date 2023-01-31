const renderProductosGraficass = () => {
    const productos__grafica = cargarProductoosLS();
    let salida= "";

    for (productos of productos__grafica) {
        salida += `
        <div class="d-flex flex-row m-4 text-center alto border-0 tarjeta bg-white w-90 h-25">
        <img src="../imagenes/${productos.imagen}" class="card-img-top tarjeta__imagen" alt="${productos.nombre}...">
        <div class="w-75 d-flex flex-column mt-3">
            <a href="#" class="w-100 text-decoration-none" onCLick="guuardarProductt(${productos.id})">
                <div class="w-75 card-body scrollNone tarjeta__div d-flex flex-column justify-content-center align-items-start ms-4">
                    <h5 class="card-title scrollNone tarjeta__div__nombre text-dark">${productos.nombre}</h5>
                    <p class="card-text tarjeta__div__precio ">$${productos.precio}</p>
                </div>
            </a>
            <button class="bg text-light border-white border border-1 p-1 w-50 rounded-pill mt-4 ms-4"  onClick="agregarProductoAlCarritoGrafica(${productos.id})">agregar al carrito</button>  
        </div>  
    </div>`;
    }

    document.getElementById("maain").innerHTML = salida;
}

function aplicar () {
    let id1 = document.getElementById("amd").checked;
    let id2 = document.getElementById("geforce").checked;
    const productos__grafica = cargarProductoosLS();
    if (id1){
        const filtradoAmd = productos__grafica.filter(item => item.marca == "amd")
        let salida= "";
        for (productos of filtradoAmd){
            salida+= `
                <div class="d-flex flex-row m-4 text-center alto border-0 tarjeta bg-white w-96">
                    <img src="../imagenes/${productos.imagen}" class="card-img-top tarjeta__imagen" alt="${productos.nombre}...">
                    <div class="w-75 d-flex flex-column mt-3">
                        <a href="#" class="w-100 text-decoration-none" onCLick="guardarProductt(${productos.id})">
                            <div class="w-75 card-body scrollNone tarjeta__div d-flex flex-column justify-content-center align-items-start ms-4">
                                <h5 class="card-title scrollNone tarjeta__div__nombre text-dark">${productos.nombre}</h5>
                                <p class="card-text tarjeta__div__precio ">$${productos.precio}</p>
                            </div>
                        </a>
                        <button class="bg text-light border-white border border-1 p-1 w-50 rounded-pill mt-4 ms-4"  onClick="agregarProductoAlCarrito(${productos.id})">agregar al carrito</button>  
                    </div>  
                </div>`;
        }

        document.getElementById("maain").innerHTML=salida;
    } else if (id2){
        const filtradoGeforce = productos__grafica.filter(item => item.marca == "geforce")
        let salida= "";
    
        for (productos of filtradoGeforce){
            salida+= `
            <div class="d-flex flex-row m-4 text-center alto border-0 tarjeta bg-white w-90 h-25">
            <img src="../imagenes/${productos.imagen}" class="card-img-top tarjeta__imagen" alt="${productos.nombre}...">
            <div class="w-75 d-flex flex-column mt-3">
                <a href="#" class="w-100 text-decoration-none" onCLick="guuardarProductt(${productos.id})">
                    <div class="w-75 card-body scrollNone tarjeta__div d-flex flex-column justify-content-center align-items-start ms-4">
                        <h5 class="card-title scrollNone tarjeta__div__nombre text-dark">${productos.nombre}</h5>
                        <p class="card-text tarjeta__div__precio ">$${productos.precio}</p>
                    </div>
                </a>
                <button class="bg text-light border-white border border-1 p-1 w-50 rounded-pill mt-4 ms-4"  onClick="agregarProductoAlCarritoGrafica(${productos.id})">agregar al carrito</button>  
            </div>  
        </div>`;
        }

        document.getElementById("maain").innerHTML=salida;
    } else {
        renderProductosGraficass();
    }
}

const eliminar = () =>{
    const form = document.getElementById("form");
    form.reset();
    renderProductosGraficass();
}

renderProductosGraficass();
botonCarrito();