function carritoVacio () {
    Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'carrito vacio',
        showConfirmButton: false,
        timer: 1500
      })
}




const renderInfoCompra = () => {
    let salida = `<h4 class="scrollNone text-center">productos</h4>`;

    for (productos of productos__carrito){
        salida+=`
        <div class="ms-2 mt-3 d-flex justify-content-between">
            <img src="../imagenes/${productos.imagen}" whidth="32" height="32" class="mt-2 me-2"></a>
            <p class="me-2">${productos.nombre}</p>
            <p><b>$${productos.precio}</b></p>
        </div>`
    }

    document.getElementById("infoCompra").innerHTML= salida+=`<div class="d-flex justify-content-between mt-3">
    <h3 class="scrollNone">TOTAL</h3>
    <p><b>$${sumarCarrito()}</b></p>
</div>`;
}

const mostrar = (valor) => {
    document.getElementById("titular").innerHTML = valor;
}

const mostrarNumero = (valor) => {
    document.getElementById("numeroTarjeta").innerHTML = valor;
}

const mostrarVencimiento = (valor) => {
    document.getElementById("vencimiento").innerHTML = valor;
}

function mostrarErrorTitular () {
    swal.fire ({
        title: "Ha ocurrido un error",
        text:"completar del titular",
        icon: "error",
        confirmButtonText:"OK",
        customClass:{
            title:"scrollNone",
            icon:"scrollNone"
        }
    })
}

function mostrarErrorTarjeta () {
    swal.fire ({
        title: "Ha ocurrido un error",
        text:"completar numero de tarjeta",
        icon: "error",
        confirmButtonText:"OK",
        customClass:{
            title:"scrollNone",
            icon:"scrollNone"
        }
    })
}

function mostrarErrorVencimiento () {
    swal.fire ({
        title: "Ha ocurrido un error",
        text:"completar fehca de vencimiento",
        icon: "error",
        confirmButtonText:"OK",
        customClass:{
            title:"scrollNone",
            icon:"scrollNone"
        }
    })
}

function mostrarErrorSeguridad () {
    swal.fire ({
        title: "Ha ocurrido un error",
        text:"completar codigo de seguridad",
        icon: "error",
        confirmButtonText:"OK",
        customClass:{
            title:"scrollNone",
            icon:"scrollNone"
        }
    })
}

function mostrarErrorDni () {
    swal.fire ({
        title: "Ha ocurrido un error",
        text:"completar dni",
        icon: "error",
        confirmButtonText:"OK",
        customClass:{
            title:"scrollNone",
            icon:"scrollNone"
        }
    })
}

function compraExitosa () {
    swal.fire ({
        title: "compra exitosa",
        text:"gracias por tu compra",
        icon: "success",
        confirmButtonText:"OK",
        customClass:{
            title:"scrollNone",
            icon:"scrollNone text-center"
        }
    })
}


const formulario = document.getElementById("form");
formulario.addEventListener("submit", function(event){
    event.preventDefault();
    formulario.reset();
    document.getElementById("titular").innerHTML = " nombre y apellido ";
    document.getElementById("numeroTarjeta").innerHTML = "****  ****  ****  ****";
    document.getElementById("vencimiento").innerHTML = "** / **";

})

function mostrarAlerta () {
    let titular = document.getElementById("tituular").value;
    let numeroTarjeta = document.getElementById("numeroDeTarjeta").value;
    let vencimiento = document.getElementById("vencimientoo").value;
    let seguridad = document.getElementById("seguridad").value;
    let dni = document.getElementById("dni").value;
    if (titular.trim() == ""){
        mostrarErrorTitular ();
        return false;
    }
    if ( numeroTarjeta.trim() == ""){
        mostrarErrorTarjeta();
        return false;
    }
    if(vencimiento.trim() == ""){
        mostrarErrorVencimiento ();
        return false;
    }
    if(seguridad.trim() == ""){
        mostrarErrorSeguridad ();
        return false;
    }
    if (dni.trim() == ""){
        mostrarErrorDni ();
        return false;
    }
    compraExitosa();
}

document.getElementById("enviar").addEventListener("click", mostrarAlerta);

renderInfoCompra();