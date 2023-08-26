// Espera a que se cargue completamente la página antes de mostrar la animación
window.onload = function() {
    // Mostrar el título con una animación de entrada más lenta
    var title = document.querySelector(".title");
    setTimeout(function() {
        title.style.opacity = 1;
        title.style.transform = "translateY(0)";
    }, 500);

    // Mostrar los botones con una animación de entrada más lenta y escalonada
    var buttons = document.querySelectorAll(".menu-button");
    setTimeout(function() {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].style.opacity = 1;
            buttons[i].style.transform = "translateY(0)";
        }
    }, 1000); // Retraso para que los botones aparezcan después del título

    // Obtén los elementos del modal
    var modal = document.getElementById("about-modal");
    var aboutButton = document.getElementById("about-button");
    var closeButton = document.querySelector(".close");

    // Función para mostrar el modal con efecto de transición
    function showModal() {
        modal.style.display = "block";
        setTimeout(function() {
            modal.style.opacity = 1; // Hacer el modal visible gradualmente
        }, 50); // Un pequeño retraso para permitir que el modal se muestre correctamente
    }

    // Función para ocultar el modal con efecto de transición
    function hideModal() {
        modal.style.opacity = 0; // Hacer el modal gradualmente transparente
        setTimeout(function() {
            modal.style.display = "none"; // Ocultar el modal después de la transición
        }, 500); // El mismo tiempo que la transición en CSS
    }

    // Mostrar el modal cuando se hace clic en "Acerca de"
    aboutButton.onclick = function() {
        showModal();
    }

    // Cerrar el modal cuando se hace clic en la "X" de cierre
    closeButton.onclick = function() {
        hideModal();
    }

    // Cerrar el modal cuando se hace clic fuera del contenido del modal
    window.onclick = function(event) {
        if (event.target == modal) {
            hideModal();
        }
    }

}
