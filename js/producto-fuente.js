/*funciones fuente*/

const veerProductoFuente = (id) => {
    const producto = cargaarProductosLS (id)
    return producto.find(item => item.id === id)
}

const caargarProductFuente = () => {
    return JSON.parse(localStorage.getItem("producto"));
}

const reenderProductFuente = () =>{
    const product = caargarProductFuente();
    salida =`
        <div class="w-50 text-center mt-5">
            <img class="w-50 " src="./imagenes/${product.imagen}" alt="${product.nombre}">
        </div>
        <div class="w-50 h-90">
            <h1 class="scrollNone mt-5">${product.nombre}</h1>
            <div class="d-flex flex-row  justify-content-center align-items-center m-2 mt-4 border-top border-bottom ">
                <h3 class="scrollNone w-25">$${product.precio}</h3>
                <h5 class="w-75 text-center scrollNone"> 12 coutas sin interes </h5>
            </div>
            <div  class="d-flex flex-row  justify-content-start align-items-center text-success border-bottom">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-shield-fill-check" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647z"/>
                </svg>
                <h6 class="p-2" > garantia - 12 meses </h6>
            </div>
            <div  class="d-flex flex-row  justify-content-start align-items-center text-success border-bottom">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                </svg>
                <h6 class="p-2" > stock disponible </h6>
            </div>
            <div  class="d-flex flex-row  justify-content-start align-items-center text-success border-bottom">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16">
                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                </svg>
                <h6 class="p-2" > envios a todo el país </h6>
            </div>
            <a class="btn btn-primary mb-0 pb-2 mt-3" onClick="agregarProductoAlCarrito(${product.id})">Agregar al carrito</a>
        </div>`;

    document.getElementById("product").innerHTML = salida;
}

const reenderDescrProductFuente = () =>{
    const product = caargarProductFuente();
    salida =`
        <div class="w-50 d-flex flex-column justify-content-center alaing-items-center p-2  shadow-lg">
            <h5 class="scrollNone mb-3 text-center border-bottom border-info pb-2">CARACTERISTICAS GENERALES</h5>
            <div>
                <div class="d-flex justify-content-between aling-items-end border-bottom border-info">
                    <p class="mb-0"><b> watts</b></p>
                    <p class="mb-0"> ${product.watts} </p>
                </div>
                <div class="d-flex justify-content-between align-items-end border-bottom border-info mt-2">
                    <p class="mb-0 "><b>Watts Reales</b></p>
                    <p class="mb-0"> ${product.wattsr} </p>
                </div>
                <div class="d-flex justify-content-between align-items-end border-bottom border-info mt-2">
                    <p class="mb-0"><b>Formato</b></p>
                    <p class="mb-0"> ${product.formato} </p>
                </div>
                <div class="d-flex justify-content-between align-items-end border-bottom border-info mt-2">
                    <p class="mb-0"><b>Compatible Con Posición Inferior</b></p>
                    <p class="mb-0"> ${product.compatible} </p>
                </div>
                <div class="d-flex justify-content-between align-items-end border-bottom border-info mt-2">
                    <p class="mb-0"><b>Certificacion 80 Plus</b></p>
                    <p class="mb-0"> ${product.certificacion} </p>
                </div>
                <div class="d-flex justify-content-between align-items-end border-bottom border-info mt-2">
                    <p class="mb-0"><b>Modo Híbrido</b></p>
                    <p class="mb-0"> ${product.modoh} </p>
                </div>
                <div class="d-flex justify-content-between align-items-end border-bottom border-info mt-2">
                    <p class="mb-0"><b>Tipo De Cableado </b></p>
                    <p class="mb-0"> ${product.tipo} </p>
                </div>
                <div class="d-flex justify-content-between align-items-end border-bottom border-info mt-2">
                    <p class="mb-0"><b>Ampers En Linea +12V</b></p>
                    <p class="mb-0"> ${product.ampers} </p>
                </div>
                <div class="d-flex justify-content-between align-items-end border-bottom border-info mt-2">
                    <p class="mb-0"><b>Fuente Digital</b></p>
                    <p class="mb-0"> ${product.fuente} </p>
                </div>
                <div class="d-flex justify-content-between align-items-end border-bottom border-info mt-2">
                    <p class="mb-0"><b>Color</b></p>
                    <p class="mb-0"> ${product.color} </p>
                </div>
                <div class="d-flex justify-content-between align-items-end border-bottom border-info mt-2">
                    <p class="mb-0"><b>Iluminacion</b></p>
                    <p class="mb-0"> ${product.iluminacion} </p>
                </div>
            </div>
        </div>
        `;

    document.getElementById("descripcion").innerHTML = salida;
}

botonCarrito();
reenderProductFuente();
reenderDescrProductFuente();