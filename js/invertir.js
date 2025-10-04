/* RECUPERA LA INFORMACION DEL USUARIO Y LA MUESTRA COMO SALUDO. */
const infoUsuario = [];

const recuperarData = () => {
    let datosStorage = JSON.parse(localStorage.getItem("listaUSuarios")) || [];

    console.log(datosStorage);
    if (datosStorage.length > 0) {
        const ultimoUsuario = datosStorage[datosStorage.length - 1];
        // Seleccionar el article
        infoUsuario.push(ultimoUsuario);

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
/* Escuchamos el evento. */
const formularioInver = document.getElementById("formInver");

formularioInver.addEventListener("submit", (e) => {
    e.preventDefault();

    /*captamos los datos del form */
    const montoInvertido = Number(document.getElementById("montoInv").value);
    const plazoInvertido = document.getElementById("plazoInv").value;
    const interesObt = document.getElementById("interesInv").value;
    /* Aca armamos el objeto. */
    const nuevaInversion = new InverNew(montoInvertido,plazoInvertido,interesObt)
    nuevaGestion.push(nuevaInversion);
    console.log(nuevaGestion);
    
    /*guardamos en una variable "ultimo" el ultimo objoeto del array */
    const ultimo = infoUsuario[infoUsuario.length - 1];
    console.log(ultimo.user);
    
    /* Imprimimos en pantalla el "comprobante" de la ops */
    const screemView = document.getElementById('DescripInversion')
    screemView.innerHTML = `
    <section>
        <article>
            <h3> hola ${ultimo.user} Esta es tu detalle de inversion. </h3>
            <h4>El Monto total a invertir es : ${nuevaInversion.monto}</h4>
            <h4>El plazo acordado es de: ${nuevaInversion.plazo}</h4>
            <h4>La taza de interes elegida es: ${nuevaInversion.interes}</h4>
        </article>
    </section>
    `
});
