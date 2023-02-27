<template>
    
    <section class="page-section" >

        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center ">
                <div class="col-lg-8 col-xl-6 text-center">
                            <h2 class="mt-0">Evaluaciones</h2>
                            <hr class="divider" />
                            <p class="text-muted mb-1">
                            En esta sección pueden encontrarse las calificaciones obtenidas a lo largo de este periodo,
                            tomadas como capturas de la plataforma de educación en línea de la universidad.

                            </p>
 
                    </div>
                </div>

                <p class="text-md-start">
                    <br> 

                    <ul class="text-md-start">
                        <li> <b>Sitio Web de CVs y Asignación</b> </li>
                        <li> <b>Entrega de Repositorio de prácticas GIT</b> </li>
                        <li> <b>Parcial Teórico</b> </li>
                    </ul>
                    <carousel :Slides="imagenes" ></carousel>
                </p>
                


        </div>


    </section>

</template>

<script>

import carousel from '../components/carousel.vue';


export default({
components:{
carousel,

},
data: () => ({
imagenes: [

    '../src/assets/notaLab.jpeg',
    '../src/assets/nota2.png',
    '../src/assets/nota3.png',
    
],



})
});


</script>