<template>


    <section class="page-section" >

        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center ">
                <div class="col-lg-8 col-xl-6 text-center">
                            <h2 class="mt-0">Apuntes</h2>
                            <hr class="divider" />
                            <p class="text-muted mb-1">
                            En esta sección pueden encontrarse los apuntes tomados durante el desarrollo de las
                            clases, tanto prácticas como teóricas que fueron impartidas a lo largo de este computo.
                            </p>
                            <br>
                </div>
                
                <carousel :Slides="imagenes" ></carousel>

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

            '../src/assets/img01.png',
            '../src/assets/img02.png',
            '../src/assets/img03.png',
            '../src/assets/img04.png',
            '../src/assets/img05.png',
            '../src/assets/img113.png',
            '../src/assets/img123.png',
            '../src/assets/img06.png',
            '../src/assets/img07.png',
            '../src/assets/img08.png',
            '../src/assets/img09.png',
            '../src/assets/img10.png',

            
        ]
    })
});


</script>
  