
<template>

        <header class="masthead">
            <div class="container px-4 px-lg-5 h-100">
                <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div class="col-lg-8 align-self-end">
                        <h1 class="text-white font-weight-bold">Universidad Gerardo Barrios</h1>
                        <hr class="divider" />
                    </div>
                    <div class="col-lg-8 align-self-baseline">
                        <div class="container px-4 px-lg-5">
                            <h4 class="text-white-75 mb-5">Carrera: Ingeniería en Sistemas y Redes Informáticas.</h4>
                        </div>
                        
                        <br><h5 class="text-white-75 mb-">Asignatura: Programación Cumputacional IV</h5>
                        <br><h5 class="text-white-75 mb-">Docente: Ing. Gisela Yasmin Espinoza</h5>
                        <br><h5 class="text-white-75 mb-">Alumno: Harold Enoc Santos</h5>

                        <br><h5 class="text-white-75 mb-">Actividad: Crear un portafolio a manera de resumen de las temáticas y actividades</h5>
                        <h5 class="text-white-75 mb-"> realizadas durante este primer computo utilizando VueJs y GitHub Pages para el deploy. </h5>
                        <br><h5 class="text-white-75 mb-">Ciclo: I-2023</h5>
                        <br><h5 class="text-white-75 mb-">San Miguel, 26 de febrero 2023.</h5>
                        
                        <br><a class= 'brn btn-primary btn-xl' href="intro">Iniciar Recorrido</a>
                    </div>
                </div>
            </div>
        </header>


</template>

<script>

    window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

    });


</script>


