document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById('formulario');
    const mensajeError = document.getElementById('mensajeError');

    formulario.addEventListener('submit', function (evento) {
        evento.preventDefault(); // Previene el envío del formulario para poder validarlo con Javascript
        // Datos personales
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const correo = document.getElementById('correo').value;
        // - Sector
        const sector = document.getElementById('sector').value;
        // terminos y condiciones
        const terminos = document.getElementById('terminos').checked;


        // Validación de los campos
        if (nombre.trim() === '') {
            alert("Por favor, escribe tu nombre");
             return;
        }
        if (apellido.trim() === '') {
            alert("Por favor, escribe tu apellido");
            return;
        }

        if (correo.trim() === '') {
            alert("Por favor, escribe tu email");
            return;
        }

        if (!validarEmail(correo)) {
            mensajeError.innerText = 'El formato del email no es válido.';
            return;
        }

        if (sector === '') {
            alert("Por favor, selecciona un sector");
            return;
        }
        if (!terminos) {
            alert("Debes aceptar terminos y condiciones");
            return;
        }

        // Si todo está correcto, se puede proceder a enviar el formulario o hacer alguna otra acción
        mensajeError.innerText = '';
        // alert('Formulario enviado con éxito!');
        formulario.submit(); // Descomentar esta línea para permitir el envío del formulario
    });

    function validarEmail(correo) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(correo).toLowerCase());
    }
});