import {createRouter, createWebHistory } from 'vue-router';
import Home from './views/home.vue';
import Intro from './views/intro.vue';
import Sumario from './views/sumario.vue'
import Jornalizacion from './views/jornalizacion.vue'
import Apuntes from './views/apuntes.vue'
import Practicas from './views/practicas.vue'
import TareasExaula from './views/tareasex.vue'
import Investigaciones from './views/investigaciones.vue'
import Evaluaciones from './views/evaluaciones.vue'


export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Portada',
            component: Home
        }, 
        {
            path: '/intro',
            name: 'Introduccion',
            component: Intro 
        },
        {
            path: '/sumario',
            name: 'Sumario',
            component: Sumario
        },
        {
            path: '/jornalizacion',
            name: 'Jornalizacion',
            component: Jornalizacion
        },
        {
            path: '/apuntes',
            name: 'Apuntes',
            component: Apuntes
        },
        {
            path: '/practicas',
            name: 'Practicas',
            component: Practicas
        },
        {
            path: '/tareasex',
            name: 'Exaula',
            component: TareasExaula
        },
        {
            path: '/investigaciones',
            name: 'Investigaciones',
            component: Investigaciones
        },
        {
            path: '/evaluaciones',
            name: 'Evaluaciones',
            component: Evaluaciones
        },


        

    ]
});

/*
listado de vistas. 
    Home -> en esta se mostraran la vista de la portada

    Introduction -> se mostrará la vista de la introducción

    Sumario de Contenidos -> la vista del sumario de contenidos (resumenes)

    Jornalizacion -> Fechas de las actividades

    Apuntes -> capturas de los apuntes tomados durante la clase

    Practicas -> Capturas de las prácticas realizadas

    Tareas Exaula -> Exposición realizada en pareja (agregar asignación, y algunas vistas)

    Investigaciones -> fuentes externas consultadas

    Pepeletas y evidencias eva -> capturas de canvas



*/