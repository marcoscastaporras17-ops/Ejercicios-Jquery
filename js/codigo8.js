function info(cadena) {
    let resultado = "";

    if (cadena == cadena.toUpperCase())
        resultado = "Está formada por mayúsculas";
    else if (cadena == cadena.toLowerCase())
        resultado = "Está formada por minúsculas";
    else
        resultado = "Está formada por mayúsculas y minúsculas";

    return resultado;
}

alert(info("Ovni -OBJETON VOLADOR NO IDENTIFICADO"));
alert(info("En un lugar de la mancha..."));
alert(info("aprendiendo javascript..."));
