
const guardarProductosCarrito = (productos__procesadores) => {
    localStorage.setItem("carrito", JSON.stringify(productos__procesadores));
}

const cargarProductosCarrito = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}


const BuscarEnElCarrito = (id) => {
    const productos__carrito = cargarProductosCarrito();
    return productos__carrito.some(item => item.id === id)
}


const productos__carrito = cargarProductosCarrito();


const agregarProductoAlCarrito = (id) => {
    let productos = cargarProductosLS();

    
    if (BuscarEnElCarrito(id)){
        let pos = productos__carrito.findIndex(item => item.id === id)
        productos__carrito[pos].cantidad += 1;
        
    } else {
        const producto = productos.find(item => item.id === id );
        producto.cantidad = 1;
        productos__carrito.push(producto);
    }


    guardarProductosCarrito(productos__carrito);
    botonCarrito();
}



const agregarProductoAlCarritoGrafica = (id) => {
    let productoos = cargarProductoosLS();
    if (BuscarEnElCarrito(id)){
        let pos = productos__carrito.findIndex(item => item.id === id)
        productos__carrito[pos].cantidad += 1;
        
    } else {
        const producto = productoos.find(item => item.id === id );
        producto.cantidad = 1;
        productos__carrito.push(producto);
    }
    guardarProductosCarrito(productos__carrito);
    botonCarrito();
}


const agregarProductoAlCarritoMemoria = (id) => {
    let productoos = cargarProductoossLS();
    if (BuscarEnElCarrito(id)){
        let pos = productos__carrito.findIndex(item => item.id === id)
        productos__carrito[pos].cantidad += 1;
        
    } else {
        const producto = productoos.find(item => item.id === id );
        producto.cantidad = 1;
        productos__carrito.push(producto);
    };
    guardarProductosCarrito(productos__carrito);
    botonCarrito();
}


const agregarProductoAlCarritoFuente = (id) => {
    let productoos = cargaarProductosLS();
    if (BuscarEnElCarrito(id)){
        let pos = productos__carrito.findIndex(item => item.id === id)
        productos__carrito[pos].cantidad += 1;
        
    } else {
        const producto = productoos.find(item => item.id === id );
        producto.cantidad = 1;
        productos__carrito.push(producto);
    }
    guardarProductosCarrito(productos__carrito);
    botonCarrito();
}


const agregarProductoAlCarritoMother = (id) => {
    let productoos = caargarProductosLS ();
    if (BuscarEnElCarrito(id)){
        let pos = productos__carrito.findIndex(item => item.id === id)
        productos__carrito[pos].cantidad += 1;
        
    } else {
        const producto = productoos.find(item => item.id === id );
        producto.cantidad = 1;
        productos__carrito.push(producto);
    }
    guardarProductosCarrito(productos__carrito);
    botonCarrito();
}


const agregarProductoAlCarritoGabinete = (id) => {
    let productoos = caarrgarProductosLS();
    if (BuscarEnElCarrito(id)){
        let pos = productos__carrito.findIndex(item => item.id === id)
        productos__carrito[pos].cantidad += 1;
        
    } else {
        const producto = productoos.find(item => item.id === id );
        producto.cantidad = 1;
        productos__carrito.push(producto);
    }
    guardarProductosCarrito(productos__carrito);
    botonCarrito();
}


const totalCarrito = () => {
    return productos__carrito.reduce((total, item)=>total += item.cantidad, 0);
}

const sumarCarrito = () => {
    return productos__carrito.reduce((total, item)=> total += item.precio*item.cantidad, 0);
    
}


const botonCarrito = () => {
    let salida = `
    <button type="button" class="btn btn-primary btn_carrito">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart3 m-3" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        <span class="position-absolute start-90 translate-middle badge rounded-pill bg-danger notificaciones">
        ${totalCarrito()}
        </span>
    </button>`;

    document.getElementById("btn__carrito").innerHTML=salida;
}


 const RenderProductosCarrito = () => {
     let salida =  `<h3 class="scrollNone text-center mt-4">carrito de compras</h3>
     <div class="d-flex justify-content-end aling-items-center pe-5 me-4" onClick="vaciarCarrito()">
         <button type="button" class="btn bg-danger text-white">vaciar carrito</button>
     </div> ` ; 

     if(totalCarrito() > 0 ){
         for (productos of productos__carrito){
             salida += `
             <div class="d-flex flex-row m-auto mt-3 alto tarjeta__carrito bg-white">
                 <img src="../imagenes/${productos.imagen}" class="card-img-top tarjeta__imagen__carrito" alt="${productos.nombre}...">
                 <div class="card-body scrollNone tarjeta__div d-flex flex-row justify-content-between align-items-center ms-4">
                     <h5 class="card-title scrollNone tarjeta__div__nombre ps-3 w-50">${productos.nombre}</h5>
                     <div class=" botonera d-flex justify-content-center align-items-center">
                         <button type="button" class="btn btn-outline-secondary h-75" onClick="eliminarItemCarrito(${productos.id})">-</button>
                         <p class="text-center  botonera__cantidad mt-3 w-25"><b>${productos.cantidad}</b></p>
                         <button type="button" class="btn btn-outline-secondary h-75" onClick="agregarItemCarrito(${productos.id})">+</button>
                     </div>
                     <p class="card-text text-end tarjeta__div__precio pe-5 w-25">$${productos.precio * productos.cantidad}</p>
                 </div>
                 <a href="" alt="" class="d-flex justify-content-center align-items-center">
                     <img src="../imagenes/trash.svg" alt="papelera" width="35" heigth="35" class="pe-3" onCLick="eliminarDelCArrito(${productos.id})">
                 </a>
             </div>`;
         }
         salida+= `
         <div class="mt-3 d-flex justify-content-between align-items-center tarjeta__carrito m-auto bg-info ">
             <h5 class="scrollNone ps-2 text-white"><b>Total a pagar</b></h5>
             <h4 class="scrollNone pe-5 text-white"><b>$${sumarCarrito()}</b></h4>
         </div>`;
     } else {
         salida=`
         <div class="alert alert-danger text-center mt-3 w-90" role="alert">
         Carrito vacio!
         </div>`
     }
    

     document.getElementById("contenido_carrito").innerHTML=salida;
 }


const eliminarDelCArrito = (id) => {
    const productos__carrito = cargarProductosCarrito();
    const nuevo__carrito = productos__carrito.filter(item => item.id !== id);
    guardarProductosCarrito(nuevo__carrito);
    RenderProductosCarrito();
    botonCarrito();
}


const vaciarCarrito = () => {
    localStorage.removeItem("carrito");
    RenderProductosCarrito();
    botonCarrito();
}

const agregarItemCarrito = (id) => {
    const productos__carrito = cargarProductosCarrito();
    let pos = productos__carrito.findIndex(item => item.id === id)
    productos__carrito[pos].cantidad += 1;
    guardarProductosCarrito(productos__carrito);
    RenderProductosCarrito();
    botonCarrito();
}

const eliminarItemCarrito = (id) => {
    const productos__carrito = cargarProductosCarrito();
    let pos = productos__carrito.findIndex(item => item.id === id)
    productos__carrito[pos].cantidad -= 1;
    
    if (productos__carrito[pos].cantidad == 0){
        eliminarDelCArrito(id);
        
    } else {
        guardarProductosCarrito(productos__carrito);
    }
    RenderProductosCarrito();
    botonCarrito();
}

const pagar = () => {
    if (productos__carrito.length <= 0){
        carritoVacio();
        return false;
    }
    location.href= "pago.html"
}

RenderProductosCarrito();
botonCarrito();