
    function validarFormulario() {
        // Aquí puedes implementar validaciones adicionales usando JavaScript

        // Ejemplo de validación básica de correo electrónico
        var email = document.getElementById('email').value;
        if (!isValidEmail(email)) {
            alert('Por favor, introduce un correo electrónico válido.');
            return false;
        }

        return true;
    }

    function isValidEmail(email) {
        // Validación simple de correo electrónico
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
