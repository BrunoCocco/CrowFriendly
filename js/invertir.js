/* RECUPERA LA INFORMACION DEL USUARIO Y LA MUESTRA COMO SALUDO. */
const infoUsuario = [];

const recuperarData = () => {
    let datosStorage = JSON.parse(localStorage.getItem("listaUSuarios")) || [];

    console.log(datosStorage);
    if (datosStorage.length > 0) {
        const ultimoUsuario = datosStorage[datosStorage.length - 1];
        // Seleccionar el article
        infoUsuario.push(datosStorage);

        const InverArticle = document.getElementById("invertirArticle");

        // Mostrar saludo dentro del article
        InverArticle.innerHTML = `
            <h1>¡Bienvenido, ${ultimoUsuario.user}!</h1>
            <h3>${ultimoUsuario.user},estas preparado para invertir, recuerda que nuestros proyectos son colaborativos y se juntan presupuestos totales antes de empezar a invertirlos.</h3>
            <h3> Debes completar esta planilla para poder continuar</h3>
            
            `;
    }
};
recuperarData();

/* RECUPERA LOS DATOS DEL FORMULARIO Y CONSTRUYE UN OBJETO CON ELLOS. */
const nuevaGestion = []
class InverNew {
    constructor(monto, plazo, interes) {
        this.monto = monto;
        this.plazo = plazo;
        this.interes = interes;
    }
}

const formularioInver = document.getElementById("formInver");

formularioInver.addEventListener("submit", (e) => {
    e.preventDefault();

    const montoInvertido = Number(document.getElementById("montoInv").value);
    const plazoInvertido = document.getElementById("plazoInv").value;
    const interesObt = document.getElementById("interesInv").value;

    const nuevaInversion = new InverNew(montoInvertido,plazoInvertido,interesObt)
    nuevaGestion.push(nuevaInversion);
    console.log(nuevaGestion);
});
