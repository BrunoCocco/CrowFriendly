/* 
    CrowFriendly - Grupo de financiacion minorista.

    - Vamos a armar el proyecto desde cero e ir avanzando poco a poco.
    

                      ROAD MAP.

────────────────────────────────────────────
 FASE 1 – MVP Básico
────────────────────────────────────────────
🔹 Landing page (presentación simple)
🔹 Registro/Login básico
🔹 Crear campaña (formulario simple)
🔹 Explorar campañas
🔹 Ver campaña (detalle básico)
🔹 Aportar (simulado o promesa de aporte)
────────────────────────────────────────────
 FASE 2 – UX & Funcionalidad Mejorada
────────────────────────────────────────────
🔸 Validaciones de formularios
🔸 Página de perfil (mis campañas, aportes)
🔸 Comentarios o actualizaciones en campaña
🔸 Confirmación de aporte
🔸 Mejoras visuales (diseño, feedback visual)
────────────────────────────────────────────
 FASE 3 – Procesos Financieros
────────────────────────────────────────────
🔺 Integración de pagos (Stripe, PayPal)
🔺 Recompensas por niveles de aporte
🔺 Gestión de fondos (simulada o real)
🔺 Aprobación de campañas (manual/automática)
🔺 Panel de movimientos (backoffice)
────────────────────────────────────────────
 FASE 4 – Escalabilidad y Moderación
────────────────────────────────────────────
🟥 Panel de administración completo
🟥 Notificaciones (email, in-app)
🟥 Fechas límite / cierre automático
🟥 Múltiples monedas / idiomas
🟥 Seguridad de acceso / backups
────────────────────────────────────────────
 FASE 5 – Comunidad y Viralidad
────────────────────────────────────────────
🟦 Seguimiento de campañas / creadores
🟦 Comentarios abiertos / sistema social
🟦 Compartir campañas fácilmente
🟦 Página de campañas destacadas
🟦 Blog / casos de éxito
────────────────────────────────────────────
 FASE 6 – Inteligencia y Mobile
────────────────────────────────────────────
🟩 App móvil (iOS/Android)
🟩 Panel de métricas (analytics)
🟩 Recomendaciones personalizadas
🟩 A/B testing
🟩 Arquitectura escalable (cloud, microservicios)
────────────────────────────────────────────



Objetivo: Tener una plataforma funcional mínima que permita:

Ver campañas.

Crear campañas.

Aportar (simulado).

Registro e inicio de sesión.

🧩 Secciones del MVP


1. Landing page / Home

Mensaje claro: qué es la plataforma.

Llamados a la acción:

"Explorar campañas"

"Publicar campaña"

"Iniciar sesión / Registrarse"




2. Registro / Login básico

Campos mínimos:

Nombre

Email

Contraseña

Roles:

Creador (puede crear campañas)

Aportante (puede apoyar campañas)

Autenticación básica (sin redes sociales aún).



3. Explorar campañas

Vista tipo grid o lista.

Muestra: título, imagen, monto objetivo, recaudado.

Filtro por categoría (opcional).

Click lleva al detalle.




4. Detalle de campaña

Información básica:

Título

Imagen o video

Descripción

Meta de recaudación

Monto actual

Botón: “Aportar” (abre modal o simula acción).




5. Crear campaña

Formulario básico:

Título

Descripción

Imagen destacada (opcional)

Meta de dinero

Fecha límite (opcional)

Guardado simple, sin moderación aún.





6. Aportar a una campaña

Simulado: el usuario elige monto, se actualiza el total.

No se realiza pago real (solo suma al progreso).

Puede mostrar un resumen de “Gracias por tu aporte”.

*/


/* AQUI EVENTO FORMULARIO LOGIN */

const listaUSuarios = [];

const Formulario = document.getElementById('login');

Formulario.addEventListener( 'submit', function(datos) {
        datos.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

 if (CheckDatos(username, password)) {
        const nuevoUsuario = new Usuario(username, password);

        listaUSuarios.push(nuevoUsuario);
        
        saveData();

        console.log("Usuario guardado:", nuevoUsuario);
        console.log("Lista actualizada:", listaUSuarios);
        console.log("✅ Usuario guardado correctamente");

        window.location.href = "logSussef.html";
    } else {
        console.log("❌ Los datos ingresados no son válidos");
    }
}
);
    

    /* FUNCION CONSTRUCTORA */

    class Usuario {
        constructor(user, pass) {
            this.user = user;
            this.pass = pass;
    }
}
    /* VALIDACION DE DATOS Y FILTROS LOGIN */

    const CheckDatos = (user,pass) => {

        const soloLetras = /^[A-Za-z]+$/;
        const numeros = /^[A-Za-z0-9]+$/;

    if (!soloLetras.test(user)) {
        console.log("❌ El usuario debe contener solo letras");
        return false;
    } if (!numeros.test(pass)) {
        console.log("❌ La contraseña debe contener solo números");
        return false;
    }

    console.log("✅ Datos correctos: usuario y contraseña válidos");
    return true;

    };

    
    /* GUARDAR DATOS EN EL STAGE. */
    
    const saveData = () => {
        localStorage.setItem("listaUSuarios", JSON.stringify(listaUSuarios));
    }
    
    