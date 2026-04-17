function muestra(valor, tabla, contenido) {
    contenido.style.visibility = "visible";

    for (var i = 1; i <= 10; i++) {
        var fila = tabla.insertRow(-1);

        var celda1 = fila.insertCell(0);
        var celda2 = fila.insertCell(1);
        var celda3 = fila.insertCell(2);

        celda1.innerHTML = valor + " x " + i;
        celda2.innerHTML = '<input type="text" name="res' + i + '">';
        celda3.innerHTML = '';
    }
}

function califica(valor, tabla) {
    var filas = tabla.rows;

    for (var i = 1; i < filas.length; i++) {
        var operacion = filas[i].cells[0].innerHTML;
        var respuesta = filas[i].cells[1].children[0].value;

        var partes = operacion.split(" x ");
        var correcto = parseInt(partes[0]) * parseInt(partes[1]);

        if (parseInt(respuesta) === correcto) {
            filas[i].cells[2].innerHTML = "✔";
        } else {
            filas[i].cells[2].innerHTML = "✘";
        }
    }
}
