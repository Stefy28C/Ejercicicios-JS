const validacionDeImagenes = [];

function mostrarSugerencia(eleccion) {
    let paisElegido = "";



    if (eleccion == 'espana') {
        paisElegido = 'España';
    } else if (eleccion == 'mexico') {
        paisElegido = 'México';

    } else if (eleccion == 'argentina') {
        paisElegido = 'Argentina';
    } else if (eleccion == 'colombia') {
        paisElegido = 'Colombia'
    } else {
        paisElegido = 'ninguno';
    }

    let xmlhttp;
    if (eleccion = 0 || paisElegido == 'ninguno') {
        document.getElementById("textInfo").innerHTML = "No hay seleccion";
        mostrarCiudades();
        return;
    }

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            let jsonResponse = xmlhttp.responseText;
            let objetoJson = JSON.parse(jsonResponse);
            paisesRecibidos = objetoJson.listadoPaises.pais;

            for (let i = 0; i < paisesRecibidos.length; i++) {
                let nombrePais = objetoJson.listadoPaises.pais[i].nombre;
                if (nombrePais == paisElegido) {
                    // Mostrar el país seleccionado 
                    document.getElementById("textInfo").innerHTML = "El pais seleccionado es " + nombrePais;

                    // Mostrar las cidades del país seleccionado
                    let ciudadesPais = objetoJson.listadoPaises.pais[i].ciudadImportante;
                    mostrarCiudades(ciudadesPais);

                    // Mostrar la capital del país
                    let capital = objetoJson.listadoPaises.pais[i].capital;
                    let mostrarCapital = "";
                    mostrarCapital = mostrarCapital + '<div id="capital">';
                    mostrarCapital += capital + '</div>';
                    document.getElementById("capital").innerHTML = mostrarCapital;

                    // Mostrar la información de la capital del país
                    let infoCap = objetoJson.listadoPaises.pais[i].textoCapital;
                    mostrarInfoCapital(infoCap);

                    // Mostrar platos típicos de las cuidades 
                    let platos = objetoJson.listadoPaises.pais[i].platosCiudad;
                    mostrarPlatos(platos);

                    // Mostrar platos típicos desordenados
                    mostrarPlatosRandom(platos);
                }
            }

        }
    }
    xmlhttp.open("GET", "listadoPaises.json?nocache='+(new Date()).getTime()");
    xmlhttp.send();
}

function mostrarCiudades(arrayCiudades) {
    let nodoMostrarResultados = document.getElementById("nose");
    if (!arrayCiudades) {
        nodoMostrarResultados.innerHTML = "";
        return;
    }
    let contenidoAMostrar = "";
    for (let i = 1; i < arrayCiudades.length; i++) {
        contenidoAMostrar = contenidoAMostrar + '<div id="ciudades' + i + '">';
        contenidoAMostrar += '<a href="https://es.wikipedia.org/wiki/' + arrayCiudades[i] + '">' + arrayCiudades[i] + '</a></div>';
    }

    if (contenidoAMostrar) {
        nodoMostrarResultados.innerHTML = contenidoAMostrar;
    }
}

function mostrarInfoCapital(info) {
    let infoCapital = document.getElementById("infoCapital");
    infoCapital.innerHTML = '<section id="infoCapital">' + info + '</section>';
}

function mostrarPlatos(arrayPlatos) {
    let nodoMostrarPlatos = document.getElementById("platos");
    if (!arrayPlatos) {
        nodoMostrarPlatos.innerHTML = "";
        return;
    }

    let mostrarImg = "";
    for (let x = 0; x < arrayPlatos.length; x++) {
        mostrarImg = mostrarImg + '<img id="' + arrayPlatos[x] + '" src="' + arrayPlatos[x] + '"onclick="verCiudad(this.id)" alt="' + arrayPlatos[x] + '">';
    }

    if (mostrarImg) {
        nodoMostrarPlatos.innerHTML = mostrarImg;
    }
}



function mostrarPlatosRandom(arrayPlatosRandom) {
    let nodoPlatosRandom = document.getElementById("platosRandom");
    if (!arrayPlatosRandom) {
        nodoMostrarPlatos.innerHTML = "";
        return;
    }

    // Desorganizar las imagenes
    platosDesordenados = arrayPlatosRandom.sort();

    let mostrarPlatos = "";
    for (x = 0; x < platosDesordenados.length; x++) {
        mostrarPlatos = mostrarPlatos + '<img id="' + platosDesordenados[x] + '" src="' + platosDesordenados[x] + '"onclick="verImagen(this.id)" alt="' + platosDesordenados[x] + '">';
    }

    if (mostrarPlatos) {
        nodoPlatosRandom.innerHTML = mostrarPlatos;
    }
}

function verCiudad(idCiudad) {
    validacionDeImagenes.push(idCiudad);
    if (validacionDeImagenes.length === 2) {
        if (validacionDeImagenes[0] == validacionDeImagenes[1]) {
            document.getElementById("imprimirInfoParejas").innerHTML = "Correcto";
            validacionDeImagenes.splice(0, validacionDeImagenes.length);
        } else {
            document.getElementById("imprimirInfoParejas").innerHTML = "Incorrecto";
            validacionDeImagenes.splice(0, validacionDeImagenes.length);
        }
    }
}

function verImagen(idImagen) {
    validacionDeImagenes.push(idImagen);
    if (validacionDeImagenes.length === 2) {
        if (validacionDeImagenes[0] == validacionDeImagenes[1]) {
            document.getElementById("imprimirInfoParejas").innerHTML = "Correcto";
            validacionDeImagenes.splice(0, validacionDeImagenes.length);
        } else {
            document.getElementById("imprimirInfoParejas").innerHTML = "Incorrecto";
            validacionDeImagenes.splice(0, validacionDeImagenes.length);
        }
    }
}