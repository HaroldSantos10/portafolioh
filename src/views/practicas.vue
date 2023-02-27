<template>
    
    <section class="page-section" >

        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center ">
                <div class="col-lg-8 col-xl-6 text-center">
                            <h2 class="mt-0">Prácticas</h2>
                            <hr class="divider" />
                            <p class="text-muted mb-1">
                            En esta sección pueden encontrarse las prácticas que fueron realizadas a lo largo de este computo
                            se incluye una pequeña explicación de forma general de estas.

                            </p>
                        
                
                </div>

            <br>
                <h5>Práctica #1</h5>
                <p class="text-md-start">
                    <br>

                    En esta primera práctica se estudiaro las nociones básicas de Javascript, entre las temáticas
                    se pueden mencionar:
                    
                    <br>
                    <br>
                    <ul class="text-md-start">
                        <li>Tipos de datos soportados por JavaScript</li>
                        <li>Caracteríscticas del código escrito en JavaScript</li>
                        <li>Tipos de sintaxis de funciones dentro de JavaScript</li>
                        <li>Algunos métodos de JavaScript</li>
                    </ul>
                    
                </p>
                <carousel :Slides="imagenes" ></carousel>

                <hr>
                <br>
                <br>
                <h5>Práctica #2</h5>
                <p class="text-md-start">
                    <br>
                    En esta primera práctica se comenzó a integrar código Html con un script de JavaScript
                    para darle ciertas funcionalidades adicionales con las cuales ser capaces de darle mayor
                    dinamismo a los componentes. 
                    <br>

                    Al mismo tiempo se comenzó a utilizar Javascript para "escuchar" y manipular eventos dentro 
                    del DOM.
                    
                    <br>
                    <br>

                    
                </p>
                <carousel :Slides="imagenes2" ></carousel>

                <hr>
                <br>
                <br>
                <h5>Práctica #3</h5>
                <p class="text-md-start">
                    <br>

                    En esta primera práctica se comenzó a Trabajar con VueJS, estableciendo los primeros conceptos básicos del 
                    funcionamiento, la instalación de Vue, la instalación del Vue CLI, los diferentes tipos de proyectos que 
                    se pueden crear haciendo uso de Vue y la diferencia en su estructura..
                    
                    <br>
                    <br>

                    
                </p>
                <carousel :Slides="imagenes3" ></carousel>

                <hr>
                <br>
                <br>
                <h5>Práctica #4</h5>
                <p class="text-md-start">
                    <br>

                    En esta primera práctica se trabajó mas ampliamente con vue, en este caso utilizando vipe para 
                    mostrar una forma más rápida de levantar un proyecto, se comenzó a consumir el API Countries 
                    para mostrar de que forma vue puede trabajar los datos dinámicamente mediante las directivas.
                    <br>

                    Al mismo tiempo se comenzó a utilizar el módulo 'vue-route' configurado de manera manual para controlar
                    las rutas de como se deben mostrar las vistas dentro de la página web, ya que se agregó una nueva vista 
                    que consiste en un filtro de donde se dividen los datos del API según su región.
                    
                    <br>
                    <br>

                    
                </p>
                <carousel :Slides="imagenes4" ></carousel>

                <hr>
                <br>
                <br>
                <h5>Práctica #5</h5>
                <p class="text-md-start">
                    <br>

                    En esta primera práctica se terminó de cosumir la API countries, en esta caso el filtro ya 
                    fue capaz de mostrar los paises que forman parte de cada continente en la vista ordenados.
                    Para hacer mas ordenado el proceso de visualización se tomó a bien la utilización de un 
                    paginador llamado vue-paginate el cual mediante la directiva v:for fue capaz de ordenar los datos.
                    <br>

                    Tambien se incluyo bootstrap en el proyecto, como una forma de darle un estilo más apropiado y llamativo.
                    
                    <br>
                    <br>

                    
                </p>
                <carousel :Slides="imagenes5" ></carousel>


            </div>
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

    '../src/assets/Semana101.png',
    '../src/assets/Semana102.png',
    '../src/assets/Semana103.png',
    
],
imagenes2: [

    '../src/assets/s21.png',
    '../src/assets/s22.png',
    '../src/assets/s23.png',
    
],
imagenes3: [

    '../src/assets/s31.png',
    '../src/assets/s32.png',
    '../src/assets/s33.png',

],

imagenes4: [

    '../src/assets/countries.png',
    '../src/assets/filters.png',
    '../src/assets/requests.png',
    '../src/assets/router.png',
    '../src/assets/indexView.png',
    '../src/assets/agregarmain.png',
    
],
imagenes5: [
    '../src/assets/52.png',
    '../src/assets/54.png',
    '../src/assets/56.png',    
    '../src/assets/51.png',
    '../src/assets/55.png',
    '../src/assets/53.png', 
],


})
});


</script>