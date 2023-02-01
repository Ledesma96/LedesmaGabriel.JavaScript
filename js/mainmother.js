const renderProductosMhoterss = () => {
    const productos__mother = caargarProductosLS();
    let salida= "";

    for (productos of productos__mother) {
        salida += `
        <div class="d-flex flex-row m-4 text-center alto border-0 tarjeta bg-white w-90 h-25">
        <img src="../imagenes/${productos.imagen}" class="card-img-top tarjeta__imagen" alt="${productos.nombre}...">
        <div class="w-75 d-flex flex-column mt-3">
            <a href="#" class="w-100 text-decoration-none" onCLick="guuardarProductMotherr(${productos.id})">
                <div class="w-75 card-body scrollNone tarjeta__div d-flex flex-column justify-content-center align-items-start ms-4">
                    <h5 class="card-title scrollNone tarjeta__div__nombre text-dark">${productos.nombre}</h5>
                    <p class="card-text tarjeta__div__precio ">$${productos.precio}</p>
                </div>
            </a>
            <button class="bg text-light border-white border border-1 p-1 w-50 rounded-pill mt-4 ms-4"  onClick="agregarProductoAlCarritoMother(${productos.id})">agregar al carrito</button>  
        </div>  
    </div>`;
    }

    document.getElementById("main__mother").innerHTML = salida;
}

function aplicar () {
    let id1 = document.getElementById("asus").checked;
    let id2 = document.getElementById("asrock").checked;
    const productos__mother= caargarProductosLS();
    if (id1){
        const filtradoAsus = productos__mother.filter(item => item.marca == "asus")
        let salida= "";
        for (productos of filtradoAsus){
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

        document.getElementById("main__mother").innerHTML=salida;
    } else if (id2){
        const filtradoAsrock = productos__mother.filter(item => item.marca == "asrock")
        let salida= "";
    
        for (productos of filtradoAsrock){
            salida+= `
            <div class="d-flex flex-row m-4 text-center alto border-0 tarjeta bg-white w-90 h-25">
            <img src="../imagenes/${productos.imagen}" class="card-img-top tarjeta__imagen" alt="${productos.nombre}...">
            <div class="w-75 d-flex flex-column mt-3">
                <a href="#" class="w-100 text-decoration-none" onCLick="guuardarProductMotherr(${productos.id})">
                    <div class="w-75 card-body scrollNone tarjeta__div d-flex flex-column justify-content-center align-items-start ms-4">
                        <h5 class="card-title scrollNone tarjeta__div__nombre text-dark">${productos.nombre}</h5>
                        <p class="card-text tarjeta__div__precio ">$${productos.precio}</p>
                    </div>
                </a>
                <button class="bg text-light border-white border border-1 p-1 w-50 rounded-pill mt-4 ms-4"  onClick="agregarProductoAlCarritoMother(${productos.id})">agregar al carrito</button>  
            </div>  
        </div>`;
        }

        document.getElementById("main__mother").innerHTML=salida;
    } else {
        renderProductosMhoterss();
    }
}

const eliminar = () =>{
    const form = document.getElementById("form");
    form.reset();
    renderProductosMhoterss();
}

renderProductosMhoterss();
botonCarrito();