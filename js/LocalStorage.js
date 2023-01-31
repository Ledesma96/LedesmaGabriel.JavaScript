/*local storag procesadores */

const GuardarProductosLS = (productos__procesadores) => {
    localStorage.setItem("productosProcesadores", JSON.stringify(productos__procesadores));
};

const cargarProductosLS = () => {
    return (JSON.parse(localStorage.getItem("productosProcesadores")) || []);
};

GuardarProductosLS(productos__procesadores);

/*local storage tarjetas graficas */

const GuardarProductoosLS = (productos__grafica) => {
    localStorage.setItem("productosGrafica", JSON.stringify(productos__grafica));
};

const cargarProductoosLS = () => {
    return (JSON.parse(localStorage.getItem("productosGrafica")) || []);
};

GuardarProductoosLS(productos__grafica);


/*local storage memoria*/

const GuardarProductoossLS = (productos__memoria) => {
    localStorage.setItem("productosMemoria", JSON.stringify(productos__memoria));
};

const cargarProductoossLS = () => {
    return (JSON.parse(localStorage.getItem("productosMemoria")) || []);
};

GuardarProductoossLS(productos__memoria);


/*loca storage fuentes*/

const guardaarProductosLS = (productos__fuentes) => {
    localStorage.setItem("productosFuente", JSON.stringify(productos__fuentes))
};

const cargaarProductosLS = () => {
    return(JSON.parse(localStorage.getItem("productosFuente")) || [])
};

guardaarProductosLS (productos__fuentes);


/*local storage mothers*/

const guuardarProductosLS = (productos__mothers) => {
    localStorage.setItem("productosMothers",  JSON.stringify(productos__mothers));
}

const caargarProductosLS = () => {
    return (JSON.parse(localStorage.getItem("productosMothers")) || []);
}

guuardarProductosLS(productos__mothers);


/*local storage gabinetes*/

const guaarrdarProductosLS = (productos__gabinetes) => {
    localStorage.setItem("productosGabinete", JSON.stringify(productos__gabinetes));
};

const caarrgarProductosLS =() => {
    return(JSON.parse(localStorage.getItem("productosGabinete")) || []);
};

guaarrdarProductosLS(productos__gabinetes);
