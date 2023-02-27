<template >

    <section class="page-section" >

        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center ">
                <div class="col-lg-8 col-xl-6 text-center">
                            <h2 class="mt-0">Sumario</h2>
                            <hr class="divider" />
                            <p class="text-muted mb-1">
                               En esta sección puede encontrarse un resumen de cada uno de los contenidos estudiados hasta el momento.
                            </p>
                        </div>

                <div class="container my-5">
                    <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">

                        <button  class="nav-link active text-danger" id="nav-cont1-tab" data-bs-toggle="tab" 
                        data-bs-target="#nav-cont1" type="button" role="tab" aria-controls="nav-cont1" 
                        aria-selected="true">Contenido 1</button>

                        <button class="nav-link text-danger" id="nav-cont2-tab" data-bs-toggle="tab" 
                        data-bs-target="#nav-cont2" type="button" role="tab" aria-controls="nav-cont2" 
                        aria-selected="false">Contenido 2</button>

                        <button class="nav-link text-danger" id="nav-cont3-tab" data-bs-toggle="tab" 
                        data-bs-target="#nav-cont3" type="button" role="tab" aria-controls="nav-cont3" 
                        aria-selected="false">Contenido 3</button>

                        <button class="nav-link text-danger" id="nav-cont4-tab" data-bs-toggle="tab" 
                        data-bs-target="#nav-cont4" type="button" role="tab" aria-controls="nav-cont4" 
                        aria-selected="false">Contenido 4</button>

                        <button class="nav-link text-danger" id="nav-cont5-tab" data-bs-toggle="tab" 
                        data-bs-target="#nav-cont5" type="button" role="tab" aria-controls="nav-cont5" 
                        aria-selected="false">Contenido 5</button>

                    </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">

                    <div class="tab-pane fade show active p-3" id="nav-cont1" role="tabpanel" aria-labelledby="nav-cont1-tab">
                        <h2>Contenido #1 JavaScript</h2>
                        <p>
                            JavaScript es un lenguaje de programación que los desarrolladores web utilizan para hacer sus páginas web interactivas. 
                            Permite mostrar animaciones y proporcionar una mejor experiencia de uso al usuario, también puede ser utilizado en la 
                            parte del servidor.   
                        <br>
                        <br>
                            Al principio surgió para hacer que las aplicaciones web fueran más dinámicas, los desarrolladores hicieron evolucionar el 
                            lenguaje permitiendo que fuera usado fuera de los navegadores.   
                        <br>
                        <br>
                            Funcionamiento JavaScript: 

                            <ul>
                                <li>Es interpretado.</li>
                                <li>Puede ser utilizado tanto en el lado del cliente como en el lado del servidor. </li>
                            </ul>

                            <img src="../assets/usosJS.webp" class="img-fluid" alt="usos de JavaScript">

                        </p>

                            <dl><dt>JavaScript del lado del cliente</dt><dd> 
                                En este caso JavaScript funciona en el navegador, cada navegador incluye un motor de JavaScript con el cual se 
                                ejecutan las diferentes funciones asociadas a diferentes eventos. Estas funciones realizan cambios en HTML y CSS.
                            </dd></dl>
                            <dl><dt>JavaScript del lado del servidor</dt><dd>
                                En este caso se hace referencia a la codificación en la lógica del servidor. Es decir, en el backend.

                                El motor de JavaScript se encuentra directamente en el servidor, por lo tanto, una función de JavaScript es capaz de acceder a 
                                la información contenida en una base de datos, realizar diferentes operaciones en ella y responder a diferentes eventos
                                a partir del sistema operativo del servidor.

                            </dd></dl>
                        <br>
                        <h4> Bibliotecas y Frameworks en JavaScript</h4>
                        <p>
                            Las bibliotecas son fragmentos de códigos escritos previamente para la realización de funciones estándar en JavaScript. 
                            Mientras que los Frameworks son Marcos de trabajo que contienen una gran colección de fragmentos de códigos que permiten 
                            realizar diferentes funciones y que se pueden reutilizar.
                            Javascript contiene diferentes tipos de datos. Entre los cuales se pueden mencionar Boolean, Undefined, Number, String, Date, 
                            Object, Array.
                        </p>



                    </div>

                    <div class="tab-pane fade p-3" id="nav-cont2" role="tabpanel" aria-labelledby="nav-cont2-tab">
                        <h2>Contenido #2 Bootstrap-VueJS</h2>
                      
                        <p>
                            Bootstrap es un marco de desarrollo web, orientado a la creación de interfaces web, El enfoque del marco, esencialmente
                             consiste en permitir a los desarrolladores crear diseños y ayudar a desarrollar una apariencia consistente, proporcionando 
                             estilos para botones, formularios y otros componentes de la interfaz de usuario.  
                        <br>
                        <br>

                            Principalmente es una herramienta útil en: 

                            <ul>
                                <li>Diseño.</li>
                                <li>Contenido.</li>
                                <li>Componentes.</li>
                                <li>Soporte Móvil</li>
                                <li>Clases</li>
                                <li>Compatibilidad (Soporta la mayoría de los navegadores modernos).</li>
                                <li>Cuadricula.</li>
                                <li>Texto Ajustable</li>
                                <li>Controles de formulario</li>
                                <li>Personalización.</li>
                            </ul>

                            <img src="../assets/bootstrap.jpg" class="img-fluid" alt="imagen bootstrap">

                        </p>

                            <dl><dt>¿Qué es VueJS?</dt><dd> 
                                Es un marco de trabajo pensado para el desarrollo de páginas web con él se pueden crear todas las vistas de una página web. 
                                Se pueden hacer dinámicas, pueden conectarse a un servidor para tener datos dinámicos de una base de datos. Y está diseñado 
                                desde cero para ser adaptable de forma incremental.                         
                            </dd></dl>
                            <dl><dt>Características de VueJS.</dt><dd>
                                <ul>
                                    <li>Progresividad.</li>
                                    <li>Modularidad.</li>
                                    <li>Reactividad.</li>
                                    <li>Basado en Componentes web.</li>
                                    <li>Virtual DOM.</li>
                                    <li>Eventos y Transiciones.</li>
                                    <li>Mixins.</li>
                                    <li>Lifecicle.</li>
                                    <li>Aplicaciones SPA</li>

                                </ul>
                            </dd></dl>

                            <img src="../assets/caractsVue.png" class="img-fluid" alt="imagen bootstrap">

                        <br>
                        <br>
                        <h4> Vue-CLI</h4>
                        <p>
                            Vue cuenta con su propia interfaz de línea de comandos que permite inicializar una aplicación Vue y otras configuraciones que se 
                            desean dentro de un proyecto con Vue.
                            <br>
                            Existen diferentes formas de inicializar una aplicación con Vue usando Vue CLI.
                            <br>
                            <ul>
                                <li>vue init webpack</li>
                                <li>vue init webpack-simple</li>
                                <li>vue init browserify</li>
                                <li>vue init browserify-simple</li>
                                <li>Virtual DOM.</li>
                                <li>vue init simple</li>

                            </ul>
                            La diferencia entre estas diferentes formas de inicializar una aplicación podrá ser notada en la estructura del proyecto creado.
                        </p>

                    </div>

                    <div class="tab-pane fade p-3" id="nav-cont3" role="tabpanel" aria-labelledby="nav-cont3-tab">
                        <h2>Contenido #3 Rendering Declarativo - Directivas</h2>
                        
                        <p>
                            El rendering declarativo es una opción que propone VueJS para interactuar con el DOM, que se basa en:
                            <br>
                            <br>
                            Vista: HTML.
                            <br>
                            Estado: Datos JS.
                            <br>
                            Usuario: interactúa e introduce cambios en la vista.

                        <br>
                        <br>
                            <u>Funcionamiento</u>
                            <br>
                            Render: es la función que le permite al Estado indicarle a la vista como y cuando 
                            copilar y cuál será el resultado que debe de mostrar.  
                        <br>
                        <br>
                            Comandos proyecto VueJS: 

                            <ul>
                                <li>Crear proyecto -> vue create vuejs-app</li>
                                <li>Ejecución proyecto -> npm run serve </li>
                            </ul>



                        </p>

                            <dl><dt>Directivas</dt><dd> 
                                Son atributos especiales que se colocan en las etiquetas HTML y están prefijados por v-, como por ejemplo, v-for, v-bind o v-on, 
                                entre muchas otras. Estas directivas permiten realizar acciones dinámicas potentes (bucles, condicionales, etc.…).

                            </dd></dl>
                            
                            <img src="../assets/partesdirectiva.png" class="img-fluid" alt="partes de una directiva">

                        <p>
                            <br>
                            Existen diferentes tipos de directivas en VueJS divididas en diferentes grupos:
                            <br>
                            <br>

                            <ul>
                                <li><b>Directivas básicas:</b> Permite realizar tareas simples. Ejemplos v-pre, v-once, v-model </li>
                                <li><b>Directivas condicionales:</b> Permiten realizar acciones según condiciones. Ejemplos v-show, v-if, v-else</li>
                                <li><b>Directivas de bucles:</b> Permiten realizar operaciones varias veces. Ejemplos v-for</li>
                                <li><b>Directivas avanzadas:</b> Permiten realizar tareas más específicas. Ejemplos v-bind, v-on, v-slot</li>
                            </ul>

                            <br>
                            

                            <u>Representación de lista</u>

                            <br>
                            Se puede representar una lista usando la directiva v-for. La sintaxis requiere que especifique la matriz de origen para iterar, 
                            y un alias que se usará para hacer referencia a cada elemento en la iteración.

                            <br>
                            <br>

                            <img src="../assets/directivafor.png" class="img-fluid" alt="partes de una directiva for">

                        </p>

                        <br>
                        <h5> Directivas Personalizadas</h5>
                        <p>
                            Además de las directivas por defecto del incluidas en el núcleo de VueJS, también se permite registrar directivas personalizadas 
                            que proporcionan mecanismos para asignar cambios de datos a un comportamiento arbitrario de DOM.

                            <br>
                            <br>

                            <u>Sintaxis</u>

                            <br>
                            <ul>
                                <li>Vue.directive(id, definition);</li>
                            </ul>
                                
                            <u>Parametros</u>

                            <br>

                                <ul>
                                    <li>Id: cadena -> ID de la directiva que se utilizara</li>
                                    <li>Definition: objeto -> un objeto de definición</li>
                                </ul>
  
                    
                        </p>

                            <dl><dt>Propiedades de las directivas personalizadas</dt><dd> 
                                <ul>
                                    <li><b>el:</b> el elemento al que está dirigida la directiva.</li>
                                    <li><b>vm:</b> el contexto ViewModel que posee esta directiva.</li>
                                    <li><b>expresión:</b> la expresión del enlace, excluyendo argumentos y filtros.</li>
                                    <li><b>arg:</b> el argumento, si está presente.</li>
                                    <li><b>nombre:</b> el nombre de la directiva, sin el prefijo.</li>
                                    <li><b>modificadores:</b> un objeto que contiene modificadores, si los hay.</li>
                                    <li><b>descriptor:</b> un objeto que contiene el resultado del análisis de toda la directiva.</li>
                                    <li><b>params:</b> un objeto que contiene atributos param</li>
                                </ul>
                            </dd></dl>

                        <br>
                            <b>Infografia Direcitivas VUE</b>
                        <br>

                        <img src="../assets/infografiaVue.png" class="img-fluid" alt="Infografia directivas">

                    </div>

                    <div class="tab-pane fade p-3" id="nav-cont4" role="tabpanel" aria-labelledby="nav-cont4-tab">
                        <h2>Contenido #4 Eventos y Clases</h2>
                        
                        <h5>¿Qué son los eventos?</h5>
                        <p>
                            
                            <br>
                            Es una acción del usuario ante la cual puede realizarse algún proceso (por ejemplo, el cambio del valor de un formulario, 
                            o la pulsación de un enlace). 
                        <br>
                        <br>
                            <b>Manejadores de evento</b><br>

                            La interacción con el usuario se consigue mediante la captura de eventos, estos se capturan mediante manejadores de eventos. 
                            El proceso por realizar se programa mediante funciones JavaScript que reciben este nombre.
                            La directiva v-on se puede utilizar para escuchar eventos del DOM. Cuando la lógica es muy compleja v-on también es capaz de 
                            aceptar el nombre del método al que quiere llamar.

                        <br>
                        <img src="../assets/manejadoresVue.png" class="img-fluid" alt="partes de una directiva">

                        <br>
                        <br>

                            <b>Modificadores de eventos</b><br>
                            La directiva v-on funciona como un listener y para manejar eventos del DOM a través de estos se proporcionan modificadores, 
                            como por ejemplo: event.preventDefault() o event.stopPropagation(). Se usa el sufijo (.) para invocar los modificadores, 
                            algunos ejemplos: .stop .prevent .capture .self .once

                        <br>
                        <br>

                            <b>Modificadores de teclas</b><br>
                            Para facilitar la tarea de verificar códigos de teclas comunes, vue proporciona alias para las claves más utilizadas. 
                            Ejemplos: (.enter .tab .delete .esc .up .down .left .right )

                        <br>
                        <br>

                            <b>Clases y estilos</b><br>
                            Usando la directive v-binding se pueden aplicar clases y estilos reactivos a la etiquetas dentro del DOM, se deben especificar 
                            como texto entre comillas dobles que dentro llevan comillas simple sobre la clase que se quiere asignar. 
                            <br>
                            Usando :style se puede cambiar el estilo de algún elemento HTML en tiempo de ejecución. Para esto se utiliza el 
                            nombre de la propiedad CSS seguido del valor que se quiere que tome entre comillas simples y todo dentro de {}.

                        </p>

                    
                    </div>

                    <div class="tab-pane fade p-3" id="nav-cont5" role="tabpanel" aria-labelledby="nav-cont5-tab">
                        <h2>Contenido #5 Componentes en VueJS</h2>
                        <h5>Componentes</h5>
                        <p>
                             
                            Es la forma de reutilizar una instancia de Vue tantas veces como sea necesario. Usando componentes 
                            se pueden crear elementos html propios, con sus propiedades y métodos particulares que pueden reutilizar 
                            en toda la aplicación.

                        <br>
                        <br>
                            Sintaxis para la creación de componentes: Vue.component(“name”, { options })<br>

                            <ul>
                                <li>Name -> nombre del componente</li>
                                <li>{ options } -> todas las opciones que se pueden enviar a una instancia de Vue</li>
                            </ul>

                            -	No se especifica {el:’#app’} <br>
                            -	Data es una función que retorna un objeto.

                        <br>
                        <br>

                        <img src="../assets/vueComponents.png" class="img-fluid" alt="partes de una directiva for">

                        <br>
                        <br>

                            <b>Registro Global de componentes </b><br>
                            El registro global se realiza al llamar al método component de Vue. Que un componente se registre de forma 
                            global significa que estará disponible en cualquier componente de Vue. <br><br>

                            <b>Registro Local de componentes </b><br>
                            Acumular componentes globales los cuales se utilizan en pocas o solamente en una vista es una mala práctica, 
                            por ello Vue aporta la flexibilidad de agregar los componentes que se utilizarán en un componente específico.

                        <br>
                        <br>

                        </p>

                        <h5>Comunicación entre componentes: propiedades y eventos</h5>

                        <p>

                            <b>Pasando datos mediante métodos(propiedades)</b><br>
                            En Vue.js se envían datos desde un componente padre hacia el hijo mediante sus propiedades ( props ) 
                            y desde el componente hijo hacia el padre mediante eventos ( $emit ).

                        <br>
                        <br>

                            <b>Pasando datos mediante eventos</b><br>
                            Paso de datos con el bus de eventos, un bus de eventos no es más que otra instancia de Vue. Una instancia 
                            que puede tener las mismas propiedades que cualquier otra instancia.


                        </p>

                    
                    </div>
                    
                    </div>
                </div>
            </div>
 
        </div>

    </section>

</template>
    
<style>
    

</style>

