const recuperarData = () =>{
        let datosStorage = JSON.parse(localStorage.getItem("listaUSuarios")) || []; 
         
        console.log(datosStorage)
        if (datosStorage.length > 0) {
        
            const ultimoUsuario = datosStorage[datosStorage.length - 1];
           // Seleccionar el article
            const miArticle = document.getElementById("usuarioArticle");

            // Mostrar saludo dentro del article
            miArticle.innerHTML = `<h1>¡Bienvenido, ${ultimoUsuario.user}!</h1>`;
    }
    }

recuperarData();