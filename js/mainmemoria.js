const renderProductosMemoriass = () => {
    const productos__memoria = cargarProductoossLS();
    let salida= "";

    for (productos of productos__memoria) {
        salida += `
        <div class="d-flex flex-row m-4 text-center alto border-0 tarjeta bg-white w-90 h-25">
        <img src="../imagenes/${productos.imagen}" class="card-img-top tarjeta__imagen" alt="${productos.nombre}...">
        <div class="w-75 d-flex flex-column mt-3">
            <a href="#" class="w-100 text-decoration-none" onCLick="guuardarProoductt(${productos.id})">
                <div class="w-75 card-body scrollNone tarjeta__div d-flex flex-column justify-content-center align-items-start ms-4">
                    <h5 class="card-title scrollNone tarjeta__div__nombre text-dark">${productos.nombre}</h5>
                    <p class="card-text tarjeta__div__precio ">$${productos.precio}</p>
                </div>
            </a>
            <button class="bg text-light border-white border border-1 p-1 w-50 rounded-pill mt-4 ms-4"  onClick="agregarProductoAlCarritoMemoria(${productos.id})">agregar al carrito</button>  
        </div>  
    </div>`;
    }

    document.getElementById("maaiin").innerHTML = salida;
}



function aplicar () {
    let id1 = document.getElementById("geil").checked;
    let id2 = document.getElementById("vulcan").checked;
    let id3 = document.getElementById("adata").checked;
    let id4 = document.getElementById("oloy").checked;

    const productos__memoria = cargarProductoossLS();
    if (id1){
        const filtradoGeil = productos__memoria.filter(item => item.marca == "geil")
        let salida= "";
        for (productos of filtradoGeil){
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

        document.getElementById("maaiin").innerHTML=salida;
    } else if (id2){
        const filtradoVulcan = productos__memoria.filter(item => item.marca == "vulcan")
        let salida= "";
    
        for (productos of filtradoVulcan){
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

        document.getElementById("maaiin").innerHTML=salida;
    }else if (id3){
        const filtradoAdata = productos__memoria.filter(item => item.marca == "adata")
        let salida= "";
    
        for (productos of filtradoAdata){
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

        document.getElementById("maaiin").innerHTML=salida;
    } else if (id4){
        const filtradoOloy = productos__memoria.filter(item => item.marca == "oloy")
        let salida= "";
    
        for (productos of filtradoOloy){
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

        document.getElementById("maaiin").innerHTML=salida;
    }
    else {
        renderProductosGraficass();
    }
}

const eliminar = () =>{
    const form = document.getElementById("form");
    form.reset();
    renderProductosMemoriass();
}

renderProductosMemoriass();
botonCarrito();