/*procesadores*/

const verProducto = (id) => {
    const producto = cargarProductosLS(id)
    return producto.find(item => item.id === id)
}

const guardarProductt = (id) => {
    const producto = verProducto (id);
    localStorage.setItem("producto",JSON.stringify(producto));
    location.href= "../ver-producto.html"
}

const guardarProduct = (id) => {
    const producto = verProducto (id);
    localStorage.setItem("producto",JSON.stringify(producto));
    location.href= "ver-producto.html"
}


/*graficas*/

const veerProducto = (id) => {
    const producto = cargarProductoosLS (id)
    return producto.find(item => item.id === id)
}

const guuardarProductt = (id) => {
    const producto = veerProducto (id);
    localStorage.setItem("producto",JSON.stringify(producto));
    location.href= "../ver-producto-grafica.html"
}

const guuardarProduct = (id) => {
    const producto = veerProducto (id);
    localStorage.setItem("producto",JSON.stringify(producto));
    location.href= "ver-producto-grafica.html"
}

/*memorias*/

const veerProoducto = (id) => {
    const producto = cargarProductoossLS (id)
    return producto.find(item => item.id === id)
}

const guuardarProoductt = (id) => {
    const producto = veerProoducto (id);
    localStorage.setItem("producto",JSON.stringify(producto));
    location.href= "../ver-producto-memoria.html"
}

const guuardarProoduct = (id) => {
    const producto = veerProoducto (id);
    localStorage.setItem("producto",JSON.stringify(producto));
    location.href= "ver-producto-memoria.html"
}

/*fuentes*/

const veerProductoFuente = (id) => {
    const producto = cargaarProductosLS (id)
    return producto.find(item => item.id === id)
}

const guuardarProductFuentee = (id) => {
    const producto = veerProductoFuente (id);
    localStorage.setItem("producto",JSON.stringify(producto));
    location.href= "../ver-producto-fuente.html"
}

const guuardarProductFuente = (id) => {
    const producto = veerProductoFuente (id);
    localStorage.setItem("producto",JSON.stringify(producto));
    location.href= "ver-producto-fuente.html"
}

/*mother*/ 

const veerProductoMother = (id) => {
    const producto = caargarProductosLS (id)
    return producto.find(item => item.id === id)
}

const guuardarProductMotherr = (id) => {
    const producto = veerProductoMother (id);
    localStorage.setItem("producto",JSON.stringify(producto));
    location.href= "../ver-producto-mother.html"
}

const guuardarProductMother = (id) => {
    const producto = veerProductoMother (id);
    localStorage.setItem("producto",JSON.stringify(producto));
    location.href= "ver-producto-mother.html"
}
/*gabinete*/

const veerProductoGabinete = (id) => {
    const producto = caarrgarProductosLS (id)
    return producto.find(item => item.id === id)
}

const guuardarProductGabinetee = (id) => {
    const producto = veerProductoGabinete (id);
    localStorage.setItem("producto",JSON.stringify(producto));
    location.href= "../ver-producto-gabinete.html"
}

const guuardarProductGabinete = (id) => {
    const producto = veerProductoGabinete (id);
    localStorage.setItem("producto",JSON.stringify(producto));
    location.href= "ver-producto-gabinete.html"
}