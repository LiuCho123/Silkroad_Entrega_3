import { useState } from 'react'; 
import Accordion from 'react-bootstrap/Accordion'; 
import Button from 'react-bootstrap/Button';
const guiaSections = [
  {
    eventKey: '0', 
    title: 'El viaje a Bocasucia',
    content:`<p>Una vez que tomes el control del Caballero, avanza hacia la derecha por el Paso del Rey, abriéndote paso a
          tajos a través de las puertas y eliminando a los pequeños escarabajos hasta llegar a las plataformas elevadas.
          Sube por las plataformas hasta la cima y continúa por el túnel hacia la izquierda. Aquí encontrarás un punto
          en la pared con el que puedes interactuar. Hazlo para aprender a recolectar Alma, una energía espiritual que
          podrás usar para curarte o, más adelante, para utilizar habilidades.</p>
        <img src="/img/Hollow_knight_1_2.jpg" alt="Guia_1_1" class="img-fluid my-2">
        <p>
          A la izquierda del lugar donde aprendiste sobre el Alma, encontrarás otra cámara con más plataformas. Sube por
          ellas hasta la cima y allí te toparás con una sala de Sangre Vital.
        </p>
        <img src="/img/Hollow_knight_1_1.jpg" alt="Guia_1_2" class="img-fluid my-2">
        <p>
          Destruye el capullo azul de Sangre Vital y a las criaturas azules de su interior para obtener varias Máscaras
          de Sangre Vital, las cuales otorgan un aumento de salud temporal.
        </p>
        <img src="/img/Hollow_knight_1_3.jpg" alt="Guia_1_3" class="img-fluid my-2">
        <p>
          Sal de la sala de Sangre Vital y dirígete a la derecha. Atraviesa la puerta a tajos y continúa. El suelo unos
          pasos más adelante se derrumbará, así que avanza lentamente y luego salta a la izquierda para evitar caer
        </p>
        <img src="/img/Hollow_knight_1_4.jpg" alt="Guia_1_4" class="img-fluid my-2">
        <p>
          Ahora, manteniéndote pegado al lado izquierdo, déjate caer en el foso y moviendote a la izquierda para
          encontrar un depósito de Geo adicional. Continúa hacia la derecha. Salta por
          las plataformas elevadas para cruzar las de púas, esquivando las estalactitas que caen.
          Tras esquivar la última púa, déjate caer desde el borde derecho de la última plataforma para descubrir una
          zona oculta
        </p>
        <img src="/img/Hollow_knight_1_5.jpg" alt="Guia_1_5" class="img-fluid my-2">
        <p>
          El área secreta supone tu primer gran desafío de plataformas en Hollow Knight. Para atravesar el suelo
          cubierto de púas, tendrás que utilizar un movimiento conocido como el Salto de Aguijón.
          Dominar esta técnica te permitirá rebotar sobre obstáculos peligrosos, como las propias púas, y usar las
          cabezas de los enemigos para impulsarte.
        </p>
        <img src="/img/Hollow_knight_1_6.jpg" alt="Guia_1_6" class="img-fluid my-2">
        <p>
          Usa el Salto de Aguijón sobre las púas y baja de un salto para encontrar un cofre. Golpéalo para abrirlo y
          reclamar tu primer Amuleto: Furia de los Caídos.
          No puedes equipar Amuletos hasta que descanses en una Banca y abras el menú.<br>Con tu primer Amuleto en
          posesión, déjate caer por el borde izquierdo para
          volver a una sección anterior del área. Desde ahí, avanza de nuevo y, pasado el foso con púas, dirígete hacia
          arriba para continuar en dirección a Bocasucia.</p>
        <h2>De vuelta al camino principal.</h2>
        <p>
          Sigue por el sendero hasta encontrar un soporte de madera que sujeta una pasarela de piedra. Golpéalo para
          destruirlo,
          luego sube al nivel de arriba y avanza a la derecha en dirección al gran portón
        </p>
        <img src="/img/Hollow_knight_1_7.jpg" alt="Guia_1_7" class="img-fluid my-2">
        <p>
          Una vez que hayas roto la puerta, salta desde el saliente y continúa avanzando hacia la derecha hasta que
          llegues a Bocasucia. Siéntate en la Banca para curarte y guardar la partida.
          Aquí también puedes equipar Amuletos. Cuando estés listo, continúa hacia la derecha y salta dentro del pozo
          para llegar a Los Cruces Olvidados.
        </p>
        <img src="/img/Hollow_knight_1_8.jpg" alt="Guia_1_8" class="img-fluid my-2"></img>`
  }, 
  {
    eventKey: '1', 
    title: 'Encrucijada olvidada',
    content:`<p>
          A la derecha de los Cruces Olvidados hay una hondonada con un insecto furioso abajo. ¡Asegúrate de eliminarlo
          antes de que te haga daño! Una vez despejado,
          salta por las plataformas flotantes hacia la derecha hasta el borde superior, ya sea matando o esquivando al
          insecto blanco que patrulla en la segunda plataforma.
        </p>
        <img src="/img/Hollow_knight_2_1.jpg" alt="Guia_2_1" class="img-fluid my-2">
        <p>
          Atraviesa los pilares para continuar. Camina hacia la derecha para entrar en esta silenciosa cámara y verás un
          gran templo resplandeciente. Interactúa con la puerta para entrar
        </p>
        <img src="/img/Hollow_knight_2_2.jpg" alt="Guia_2_2" class="img-fluid my-2">
        <h2>Templo del Huevo Negro</h2>
        <p>
          Esta extraña apariencia de paz y luz es el Templo del Huevo Negro. Recorre el templo y conocerás a Quirrel. Él
          tiene varias líneas de diálogo que puedes agotar hasta que comience a repetir
          «Una maravilla...». Como tú, es un explorador y le interesa particularmente la entidad con forma de huevo en
          el centro de este templo
        </p>
        <img src="/img/Hollow_knight_2_3.jpg" alt="Guia_2_3" class="img-fluid my-2">
        <p>
          Cuando hayas terminado, sal del templo. A partir de aquí, puedes regresar a la entrada e ir hacia la
          izquierda. Sin embargo,
          si prefieres explorar un poco más para obtener Geo, continúa a la derecha desde la puerta. Encontrarás otros
          dos insectos hostiles patrullando el área
        </p>
        <img src="/img/Hollow_knight_2_4.jpg" alt="Guia_2_4" class="img-fluid my-2">
        <p>
          El último peligro aquí es una estalactita en la plataforma final, lista para caer, así que mucho ojo. También
          hay una en la segunda plataforma.
          Después, puedes seguir hasta el fondo a la derecha y avanzar por el pequeño pasaje iluminado, ¡pero ten
          cuidado antes de cruzar el umbral!
        </p>
        <img src="/img/Hollow_knight_2_5.jpg" alt="Guia_2_5" class="img-fluid my-2">
        <p>
          En esa extraña zona de comedor hay un gran enemigo de espaldas a la puerta. Te verá y su ataque causa un daño
          devastador. Este enemigo, llamado Cascara guardiana,
          es bastante más fuerte que todo lo que has enfrentado hasta este momento. Quizás quieras volver más tarde
          cuando seas más fuerte, pero derrotarlo tiene un premio.
        </p>
        <img src="/img/Hollow_knight_2_6.jpg" alt="Guia_2_6" class="img-fluid my-2">
        <p>
          Luego de coger la Oruga, sal y déjate caer por el hueco. Si bajas por completo, vas a la derecha y cruzas un
          arco de madera, llegarás a una zona que parece una mina.
          No puedes avanzar mucho por aquí, pero si sigues la voz cantante, encontrarás a un bicho amigable pero
          despistado que pica piedras preciosas.
          ¡Es Myla! Es encantadora, pero no te ayudará en tu viaje. Puedes pasarla de largo, pero tu aventura se
          detendrá en un cuarto cuyo suelo vibra.
          No podrás hacer nada con el suelo hasta que obtengas una habilidad específica. Apunta este lugar, porque
          volverás.
        </p>
        <img src="/img/Hollow_knight_2_7.jpg" alt="Guia_2_7" class="img-fluid my-2">
        <p>
          Vuelve a la zona anterior a la mina. Si vas hacia la izquierda, entrarás en un camino que finalmente regresa a
          la entrada de los Cruces Olvidados, aunque es una ruta mucho más peligrosa.
          Hay un depósito de Geo en una plataforma flotante pasando la entrada, pero necesitarás eliminar a dos insectos
          voladores para alcanzarlo de forma segura.
        </p>
        <img src="/img/Hollow_knight_2_8.jpg" alt="Guia_2_8" class="img-fluid my-2">
        <p>
          En esta zona, te encontrarás con tres tipos de insectos hostiles (uno que embiste con un cuerno, uno que salta
          y el redondo que camina torpemente hacia ti),
          junto con otros bichos más pequeños por los alrededores. Si no te sientes preparado para luchar contra ellos
          con tu armamento básico, vuelve a la superficie.
          De lo contrario, sigue avanzando hacia la izquierda hasta que llegues a un pasaje con plataformas encadenadas.
        </p>
        <img src="/img/Hollow_knight_2_9.jpg" alt="Guia_2_9" class="img-fluid my-2">
        <p>
          Si eliges avanzar por la izquierda, verás a una Oruga triste en un frasco en lo alto. Todavía no puedes
          liberarla, pero memoriza su ubicación para cuando consigas una habilidad que te permita cruzar el abismo.
        </p>
        <img src="/img/Hollow_knight_2_10.jpg" alt="Guia_2_10" class="img-fluid my-2">
        <h2>La izquierda de la Encrucijada olvidada</h2>
        <p>
          Para continuar por el camino principal, necesitarás dirigirte a la izquierda desde el pozo por donde entraste
          a los Cruces Olvidados. Pronto llegarás a un pasaje con plataformas encadenadas,
          donde te encontrarás con un nuevo enemigo volador de alas diminutas. Deambula un poco, pero asegúrate de
          atacarlo antes de que te ataque a ti.
        </p>
        <img src="/img/Hollow_knight_2_11.jpg" alt="Guia_2_11" class="img-fluid my-2">
        <p>
          A la izquierda hay un pasaje iluminado con follaje para explorar, pero no te preocupes: ¡conseguirás un mapa
          pronto! Es más sencillo dejarlo para después y explorarlo
          cuando llegues al fondo de esta sala. Si quieres, puedes bajar de un salto y esquivar a los enemigos que
          acechan.
          En la esquina superior izquierda de la sala encontrarás un cuarto. Adentro, un bicho amigable te dará
          recompensas por encontrar a sus familiares perdidos.
        </p>
        <img src="/img/Hollow_knight_2_12.jpg" alt="Guia_2_12" class="img-fluid my-2">
        <p>
          También hay un pasaje a la derecha, pero eso te desviará mucho del camino y necesitarás volver por aquí para
          continuar. Si aun así quieres explorar, te recomendamos volver a subir,
          ir a la derecha desde la entrada y luego regresar.
          Si quieres continuar rápidamente, puedes dejarte caer directamente mientras esquivas a los pequeños insectos
          enemigos.
        </p>
        <h2>Como conseguir el mapa de la Encrucijada Olvidada / Localizacion de Cornifer</h2>
        <p>
          Para progresar mejor en esta zona, necesitarás descubrir cómo conseguir el mapa de los Cruces Olvidados. Para
          ello, déjate caer por el agujero que hay en el fondo de la cámara con las plataformas encadenadas.
        </p>
        <img src="/img/Hollow_knight_2_13.jpg" alt="Guia_2_13" class="img-fluid my-2">
        <p>
          Una vez abajo, dirígete a la derecha para encontrarte con Cornifer, el cartógrafo. Te lo encontrarás en cada
          una de las áreas principales de Hollow Knight, momento en el que podrás comprarle un mapa de la zona.
        </p>
        <img src="/img/Hollow_knight_2_14.jpg" alt="Guia_2_14" class="img-fluid my-2">
        <p>
          Cómprale el mapa de los Cruces Olvidados por 30 Geo. Puedes volver a hablar con Cornifer para saber más sobre
          su vida y tener una presentación adecuada. En este momento, la esposa de Cornifer, Iselda,
          habrá abierto la tienda de objetos en Bocasucia, la cual contiene algunos artículos increíblemente útiles.
          Deberías volver a Bocasucia y hablar con Iselda, quien vende objetos para mejorar tu mapa. Uno de los mejores
          objetos para conseguir al principio es la Pluma, por 120 Geo. Si no tienes el Geo suficiente,
          asegúrate de eliminar algunos enemigos y explorar el lado derecho de los Cruces Olvidados si aún no lo has
          hecho.
        </p>
        <img src="/img/Hollow_knight_2_15.jpg" alt="Guia_2_15" class="img-fluid my-2">
        <p>
          Una vez que tengas la Pluma, cada mapa de zona que poseas se actualizará automáticamente cuando te sientes en
          una Banca. Iselda vende algunos objetos increíblemente útiles, como marcadores que identificarán y
          señalarán las ubicaciones de Aguas Termales, Bancas y Vendedores, así como marcadores personalizados. Así que
          asegúrate de ahorrar tu Geo si quieres sacarle el máximo provecho a tu mapa.
        </p>
        <h2>De vuelta en Los Cruces Olvidados</h2>
        <p>
          Sumérgete de nuevo en los Cruces Olvidados, descendiendo más allá de donde está Cornifer. ¡Ten cuidado al
          bajar, eso sí! Hay púas en el fondo de este pozo. Cuando estés listo, avanza hacia la derecha,
          pero primero sube por el pozo que hay después de la puerta. Aquí encontrarás tres útiles montículos de Geo
          para que los destruyas antes de seguir adelante.
        </p>
        <img src="/img/Hollow_knight_2_16.jpg" alt="Guia_2_16" class="img-fluid my-2">
        <p>
          ¡Pero espera, aquí hay una pared falsa! Golpea la pared que está detrás del depósito de Geo que se encuentra
          solo en un pequeño saliente para revelarla.
        </p>
        <img src="/img/Hollow_knight_2_17.jpg" alt="Guia_2_17" class="img-fluid my-2">
        <p>
          Detrás de la pared falsa hay otro montón de Geo. Salta hacia adelante y a la derecha para encontrar una fuente
          termal donde puedes descansar y reponer tu salud. Tu mapa también recibirá una pequeña actualización.
        </p>
        <img src="/img/Hollow_knight_2_18.jpg" alt="Guia_2_18" class="img-fluid my-2">
        <p>
          Sal de la fuente termal y entra en la cámara que hay debajo de su puerta. Una reja se cerrará dramáticamente
          detrás de ti. Aparecerá un nuevo enemigo volador con un abdomen amarillo y bulboso.
          Al principio solo verás uno, pero dos más saldrán desde arriba.
          Ten cuidado de no tocarlos y esquiva sus ataques a distancia saltando tácticamente (o dejándote caer, aquí no
          juzgamos) bajo las plataformas. La plataforma superior izquierda y
          las del centro también tienen estalactitas que caen, así que ten un cuidado extra. Las rejas se abrirán
          después de que hayas eliminado a los tres bichos.
        </p>
        <img src="/img/Hollow_knight_2_19.jpg" alt="Guia_2_19" class="img-fluid my-2">
        <p>
          Una reja se habrá abierto en los lados inferior izquierdo e inferior derecho de la sala. Entra rápidamente en
          la sala de la izquierda, déjate caer hasta el fondo y destruye tres depósitos de Geo.
        </p>
        <img src="/img/Hollow_knight_2_20.jpg" alt="Guia_2_20" class="img-fluid my-2">
        <p>
          Todavía no podrás alcanzar la plataforma lejana que está arriba a la izquierda, así que vuelve por donde
          viniste y luego avanza por el camino de la derecha.
        </p>
        <h2>Como desbloquear la estacion de Ciervos de Los Cruces Olvidados</h2>
        <p>
          Antes de continuar, déjate caer en el agujero que hay después de la puerta para encontrar a un insecto furioso
          que custodia un depósito de Geo.
        </p>
        <img src="/img/Hollow_knight_2_21.jpg" alt="Guia_2_21" class="img-fluid my-2">
        <p>
          Continúa a la derecha, pero asegúrate de coger el depósito de Geo custodiado por el gusano. Calcula el momento
          en que emerge para evitar recibir daño. Avanza por la puerta de arriba a la derecha.
          La siguiente sala te ofrece dos caminos para progresar. Puedes tomar la ruta superior siguiendo las
          plataformas flotantes.
          Allí encontrarás un depósito de Geo protegido por dos gusanos móviles. Calcula bien el momento para alcanzar
          el Geo. Sigue a la derecha y salta el hueco hasta la plataforma para encontrar otro depósito de Geo,
          ¡pero ten cuidado con el gusano que emerge de la pared! Déjate caer desde ahí y dirígete a la derecha para
          continuar.
        </p>
        <img src="/img/Hollow_knight_2_22.jpg" alt="Guia_2_22" class="img-fluid my-2">
        <p>
          Si vas por abajo, tendrás que enfrentarte a varios gusanos. Hay menos plataformeo, pero no obtendrás las
          recompensas de Geo.
          En la siguiente sala, verás una señal que apunta a un agujero en el techo. Si entras en la cámara de abajo y
          te diriges a la esquina superior derecha,
          encontrarás un depósito de Geo. Hay otra entrada en la sección inferior izquierda, pero no podrás avanzar por
          la ruta principal desde ahí.
        </p>
        <img src="/img/Hollow_knight_2_23.jpg" alt="Guia_2_23" class="img-fluid my-2">
        <p>
          Cuando estés listo, sigue la señal hacia arriba a través del agujero del techo hasta la sala superior. Una vez
          que entres, sigue la señal a través de la puerta que está inmediatamente a la izquierda.
        </p>
        <img src="/img/Hollow_knight_2_24.jpg" alt="Guia_2_24" class="img-fluid my-2">
        <p>
          El camino te lleva a la Estación del Ciervo de los Cruces Olvidados. Paga 50 Geo para desbloquear la campana y
          golpéala para llamar a un transporte que te llevará de vuelta a la superficie.
          Esta red de estaciones se convertirá en la forma más rápida de moverte por Hallownest, y reunir todos los
          coleccionables, mejoras y objetos requerirá volver atrás de vez en cuando,
          así que asegúrate de desbloquear cada una que encuentres.
        </p>
        <img src="/img/Hollow_knight_2_25.jpg" alt="Guia_2_25" class="img-fluid my-2">
        <p>
          Usa el Ciervo para volver al pueblo y desbloquear la puerta de la estación en Bocasucia, luego regresa a la
          Estación del Ciervo de los Cruces Olvidados.
        </p>
        <h2>Como desbloquear el atajo</h2>
        <p>
          Dirígete a la derecha para salir de la estación y luego asciende por la sala que hay más allá. ¡Ten cuidado
          con los insectos enemigos que infestan los pasajes estrechos! Es fácil recibir daño aquí.
          Continúa subiendo hasta que llegues a un pozo que está justo después de una puerta en el lado derecho.
          Asciende hasta la cima del pozo y acciona la palanca para desbloquear un atajo de vuelta a las
          secciones superiores de los Cruces Olvidados.
        </p>
        <img src="/img/Hollow_knight_2_26.jpg" alt="Guia_2_26" class="img-fluid my-2">
        <p>
          Desde ahí, vuelve a bajar por el pozo y toma la primera salida a tu izquierda, siguiendo el camino hasta que
          llegues al primer jefe: El Falso Caballero.`
  }, 
    {
    eventKey: '2', 
    title: 'El Falso Caballero',
    content:`<p>
          El Caballero Falso está ubicado en una habitación cercana al centro de los Cruces Olvidados. Para encontrarlo,
          desciende por el conducto del lado occidental y luego avanza hacia el este. En el lado oriental de la zona hay
          otro conducto,
          donde hallarás la Estación del Ciervo y un atajo para volver a la superficie.
          Avanza hacia el oeste por un pasillo en el lado izquierdo del conducto hasta alcanzar una sala grande llena de
          bichos hostiles. Acaba con ellos y sigue a la izquierda hasta que las puertas de ambos lados de la sala se
          cierren violentamente, atrapándote.
        </p>
        <img src="/img/Hollow_knight_3_1.jpg" alt="Guia_3_1" class="img-fluid my-2">
        <p>
          El falso Caballero caera del techo para empezar el combate.
        </p>
        <img src="/img/Hollow_knight_3_2.jpg" alt="Guia_3_2" class="img-fluid my-2">
        <h2>Como derrotar al Falso Caballero</h2>
        <p>
          Para vencer al Caballero Falso en Hollow Knight, recuerda que su mayor fortaleza es su alcance y su habilidad
          para negarte el acceso a partes de la pantalla. Aunque no inflige una cantidad significativa de daño con cada
          golpe
          (en comparación con jefes posteriores), este combate trata más sobre enseñarte cómo interactuar con los
          encuentros contra jefes en Hollow Knight. El Caballero Falso utiliza varios ataques. Puede que empiece
          saltando hacia ti,
          infligiendo daño si aterriza sobre tu diminuta cabeza.
        </p>
        <img src="/img/Hollow_knight_3_3.jpg" alt="Guia_3_3" class="img-fluid my-2">
        <p>
          También puede blandir su enorme maza a dos manos hacia abajo después de saltar en el aire, golpeándola contra
          el suelo sólido tras aterrizar.
        </p>
        <img src="/img/Hollow_knight_3_4.jpg" alt="Guia_3_4" class="img-fluid my-2">
        <p>
          Un tercer ataque consiste en que el jefe carga un golpe llevando su maza hacia atrás en preparación para el
          mandoble. Aproximadamente dos segundos después, golpeará el suelo con la maza,
          provocando que una onda de choque se propague a la izquierda y a la derecha del arma.
        </p>
        <img src="/img/Hollow_knight_3_5.jpg" alt="Guia_3_5" class="img-fluid my-2">
        <p>
          En su mayor parte, puedes esquivar cada ataque sin recibir daño si reconoces el tipo de ataque. Aléjate del
          Caballero Falso cuando salte por los aires para evitar tanto el golpe de la maza como el peso de su trasero
          acorazado.
          Cuando lo veas cargar un ataque, aléjate para crear algo de espacio. Después de que ataque, salta por encima
          de la onda de choque en dirección al jefe.
          Ataca al jefe con tu Aguijón siempre que sea seguro. Cuando la bestia esté en el suelo, golpéala hasta que
          prepare su siguiente movimiento. Para el ataque cargado, salta sobre la onda de choque hacia el bicho y dale
          unos cuantos buenos golpes antes de escabullirte.
        </p>
        <img src="/img/Hollow_knight_3_6.jpg" alt="Guia_3_6" class="img-fluid my-2">
        <p>
          Si te ves arrinconado contra una pared, aprovecha el momento en que el caballero salte por los aires para
          escabullirte por debajo y llegar al otro lado.
        </p>
        <h2>Fase 2</h2>
        <p>
          Ataca al jefe hasta que se derrumbe. Cuando lo haga, la verdadera forma del Caballero aparecerá: una oruga
          pálida y regordeta. Golpea a la oruga en la cara hasta que se retire dentro de la armadura,
          dando comienzo a la siguiente fase del combate.
        </p>
        <img src="/img/Hollow_knight_3_7.jpg" alt="Guia_3_7" class="img-fluid my-2">
        <p>
          Después de que el Caballero Falso se levante, sus ataques de golpe contra el suelo durante un berrinche harán
          que lluevan explosivos desde el techo. Esto no cambia el combate de forma drástica, pero en este punto,
          mantener la distancia se vuelve aún más importante, así que ataca cuando puedas.
          Intenta moverte hacia la pared, donde tendrás que lidiar con menos bombas (también puedes arriesgarte a
          curarte en este momento).
        </p>
        <img src="/img/Hollow_knight_3_8.jpg" alt="Guia_3_8" class="img-fluid my-2">
        <p>
          Como en muchos combates en Hollow Knight (y en juegos similares), la paciencia es la clave de la victoria.
          Aprende los patrones, espera el momento oportuno, ataca brevemente y luego retírate a un lugar seguro
          . Sigue esa estrategia y pronto derribarás al Caballero Falso.
          Después de que el Caballero Falso haya tenido suficiente, saltará y golpeará el suelo hasta romperlo, haciendo
          que él (y tú, si no tienes cuidado) caiga al piso de abajo.
          Salta para bajar y ataca la cabeza vulnerable del Caballero Falso para asestar el golpe de gracia y reclamar
          el Escudo de la Ciudad de su cuerpo como recompensa.
        </p>
        <img src="/img/Hollow_knight_3_9.jpg" alt="Guia_3_9" class="img-fluid my-2">
        <p>
          Una vez derrotado el Caballero Falso, tu siguiente objetivo es aprender tu primer Hechizo.
        </p>`
  }, 
    {
    eventKey: '3', 
    title: 'Un pincel Magico',
    content:`<p>Después de despachar al Caballero Falso y recoger el Escudo de la Ciudad, dirígete a la izquierda y reclama
          el cofre lleno de Geo que está justo encima del pasillo principal.
        </p>
        <img src="/img/Hollow_knight_4_1.jpg" alt="Guia_4_1" class="img-fluid my-2">
        <p>
          Déjate caer al piso principal y continúa a la izquierda hasta que llegues a una palanca junto a una pared.
        </p>
        <img src="/img/Hollow_knight_4_2.jpg" alt="Guia_4_2" class="img-fluid my-2">
        <p>
          Golpea la palanca para abrir un atajo de vuelta al lado izquierdo de los Cruces Olvidados. Pero antes de
          continuar hacia la siguiente zona, date la vuelta a la derecha y sube,
          siguiendo las antorchas hasta que llegues a una entrada.
        </p>
        <img src="/img/Hollow_knight_4_3.jpg" alt="Guia_4_3" class="img-fluid my-2">
        <p>
          Atraviesa la puerta y siéntate en la banca, luego habla con el Chamán Caracol. Después de que aceptes su
          hechizo mágico, Espíritu Vengativo, te desmayarás y despertarás detrás de una reja.
        </p>
        <h2>Despejar el templo</h2>
        <p>
          El Chamán te pide como favor que elimines a una bestia que acecha en el templo, así que sigue el camino y
          practica usando tu nueva y poderosa arma.
        </p>
        <img src="/img/Hollow_knight_4_4.jpg" alt="Guia_4_4" class="img-fluid my-2">
        <p>
          A medida que te acerques al final del templo, habrá varios tablones de madera que podrás romper para abrirte
          paso a una zona secreta con varios depósitos de Geo y un nido de Sangre Vital.
        </p>
        <img src="/img/Hollow_knight_4_5.jpg" alt="Guia_4_5" class="img-fluid my-2">
        <p>
          Despues de recolectar el Geo baja para enfrentar al Minijefe.
        </p>
        <img src="/img/Hollow_knight_4_6.jpg" alt="Guia_4_6" class="img-fluid my-2">
        <p>
          El minijefe escupe ácido, así que esquiva sus ataques y despacha a los enemigos rodantes que libera de vez en
          cuando. Concéntrate en lanzar Espíritu Vengativo al jefe y
          en matar a los enemigos rodantes con tu Aguijón para restaurar tu Alma y así poder curarte o lanzar más
          Espíritus Vengativos.
          Una vez que hayas librado al templo de esta gran plaga, dirígete a la izquierda y recoge el poderoso Amuleto
          Atrapa Almas, el cual, cuando está equipado,
          aumenta la cantidad de Alma que reúnes de los enemigos cada vez que los golpeas con tu Aguijón.
        </p>
        <img src="/img/Hollow_knight_4_7.jpg" alt="Guia_4_7" class="img-fluid my-2">
        <p>
          Baja, y el Chamán te liberará del templo. Puedes usar la Banca cerca del chamán para equiparte el Atrapa
          Almas. Es un Amuleto poderoso, por lo que se sugiere que te lo equipes para las batallas que se avecinan.
          Continúa más allá de la Estación del Ciervo y desciende a las profundidades de los Cruces Olvidados. Cuando no
          puedas descender más, dirígete a la derecha y pronto te encontrarás con una puerta cerrada con una criatura
          durmiendo a su lado. Atácala para comenzar el encuentro con el jefe Madre Gruz.
        </p>`
  }, 
    {
    eventKey: '4', 
    title: 'Madre Gruz',
    content:`<p>
          La Madre Gruz se encuentra en la esquina sureste de los Cruces Olvidados. Bloquea la entrada a Sly el Tendero
          y a la Amante de Amuletos Salubra, así como un pasadizo entre los Cruces Olvidados y los Terrenos de Reposo.
          Entra en la arena del jefe y acércate a la Madre Gruz durmiente. Para empezar la pelea, atácala con un Hechizo
          o con tu Aguijón, lo que la despertará. La reja se cerrará de golpe detrás de ti cuando comience el combate.
        </p>
        <img src="/img/Hollow_knight_5_1.jpg" alt="Guia_5_1" class="img-fluid my-2">
        <h2>Derrotando a la Madre Gruz</h2>
        <p>
          La Madre Gruz es una de las batallas contra jefes más sencillas de Hollow Knight. Inflige poco daño, y todos
          sus ataques pueden ser anticipados y contrarrestados.
        </p>
        <h2>Fase 1</h2>
        <p>
          Mientras la Madre Gruz esté viva, rebotará diagonalmente por la arena. Permanece en cualquiera de las esquinas
          de la sala hasta que el jefe se acerque al suelo,
          luego dale un tajo rápido y corre por debajo de ella cuando se estrelle contra el techo.
        </p>
        <img src="/img/Hollow_knight_5_2.jpg" alt="Guia_5_2" class="img-fluid my-2">
        <p>
          Ocasionalmente, el jefe se detendrá y realizará ataques de un solo golpe cerca de tu posición. Esquívalo
          saliendo rápidamente de la zona de daño.
          Atácalo después del golpe y luego crea algo de distancia. Repite este proceso hasta que la Madre Gruz caiga, y
          entrarás en la segunda fase del combate.
        </p>
        <img src="/img/Hollow_knight_5_3.jpg" alt="Guia_5_3" class="img-fluid my-2">
        <h2>Fase 2</h2>
        <p>
          No bajes la guardia una vez que derrotes a la Madre Gruz, porque el encuentro aún no ha terminado. Las rejas
          siguen cerradas y, al cabo de un momento,
          el cuerpo del jefe comenzará a agitarse antes de estallar en un enjambre de las crías de la Madre Gruz.
        </p>
        <img src="/img/Hollow_knight_5_4.jpg" alt="Guia_5_4" class="img-fluid my-2">
        <p>
          Retrocede a una esquina y atácalas con tajos a medida que se acerquen. Cuando tengas un respiro, también
          puedes saltar y usar Espíritu Vengativo
          para eliminar a varias de ellas a la vez. Acaba con cada una para ganar la batalla y desbloquear el camino a
          seguir.
        </p>
        <h2>Recompensas de la Madre Gruz</h2>
        <p>
          A diferencia de otros combates contra jefes, derrotar a la Madre Gruz lamentablemente no te recompensará con
          un Amuleto o una nueva Habilidad. Sin embargo, recogerás una buena cantidad de Geo bien merecido.
          El Geo recolectado de jefes y Depósitos de Geo a través de Hallownest puede ser usado como moneda para comprar
          mejoras y objetos de algunos NPCs, tales como Fragmentos de Máscara, Fragmentos de Vasija y Artes del Aguijón.
          Hablando de vendedores NPC, ahora que la Madre Gruz ya no bloquea tu camino, tu siguiente paso es encontrar a Sly, un personaje que se convertirá en un
          recurso indispensable a medida que continúes por Hollow Knight.
        </p>`
  }, 
    {
    eventKey: '5', 
    title: 'Encontrando a Sly',
    content:`<p>
          Después de despachar a la Madre Gruz, sal de la arena del jefe y déjate caer por el saliente. Detente tras
          llegar al suelo y dirígete a la izquierda.
        </p>
        <img src="/img/Hollow_knight_6_1.jpg" alt="Guia_6_1" class="img-fluid my-2">
        <p>
          Pronto, llegarás a una pequeña cabaña, la única que está intacta y con la puerta abierta.
        </p>
        <img src="/img/Hollow_knight_6_2.jpg" alt="Guia_6_2" class="img-fluid my-2">
        <p>
          Métete dentro y encontrarás a un pequeño insecto con brillantes ojos naranjas. Escúchalo hasta que salga de su
          aturdimiento.
          Se presentará como Sly, quien solía "vivir una vida sin incidentes arriba en Bocasucia". Con la cabeza
          despejada, decide regresar al pueblo.
        </p>
        <img src="/img/Hollow_knight_6_3.jpg" alt="Guia_6_3" class="img-fluid my-2">
        <h2>Desbloquear el atajo</h2>
        <p>
          Después de salir de la vieja cabaña de Sly, dirígete a la izquierda y salta a la segunda plataforma. Rompe la
          viga de madera para crear un atajo y
          regresa a la zona en la que estabas antes de encontrarte con la Madre Gruz.
        </p>
        <img src="/img/Hollow_knight_6_4.jpg" alt="Guia_6_4" class="img-fluid my-2">
        <p>
          Antes de volver al pueblo, deberías considerar hacer una parada rápida al norte de la vieja cabaña de Sly para
          conseguir una Oruga y algo de Geo.
        </p>
        <h2>Volver a Bocasucia</h2>
        <p>
          Dirígete a la Estación del Ciervo de los Cruces Olvidados y toma el Ciervo de vuelta a Bocasucia. Busca la
          tienda de Sly a la izquierda de la Banca del pueblo
          (¡ahora está abierta!). Entra y encontrarás las ofertas de Sly, que incluyen los Amuletos Enjambre Recolector
          y Coraza Robusta, Fragmentos de Máscara, Fragmentos de Vasija,
          una Llave Simple, la Linterna de Lumantis y un Huevo Rancio.
          Los objetos de mayor prioridad son la Linterna de Lumantis (que abrirá varias zonas nuevas para explorar), el
          amuleto Enjambre Recolector
          (que recoge automáticamente todo el Geo que sueltan los enemigos, incluido el que cae a largas distancias, en
          el ácido o sobre púas) y la Llave Simple
          (que desbloquea o bien un servicio para recuperar tu Sombra en el extremo derecho de Bocasucia, o una gran
          zona debajo de la Ciudad de las Lágrimas).
        </p>
        <img src="/img/Hollow_knight_6_5.jpg" alt="Guia_6_5" class="img-fluid my-2">
        <p>
          Los Fragmentos de Máscara y los Fragmentos de Vasija aumentarán tu salud y tu capacidad de Alma,
          respectivamente, cuando reúnas suficientes. Deberías comprar esos objetos más adelante,
          cuando tengas Geo en abundancia. Sin embargo, tu cantidad actual de Salud y Alma es suficiente para la
          siguiente zona, y es casi seguro que no tienes suficiente Geo para conseguirlo todo en este momento.
        </p>
        <h2>Camino a Sendero Verde</h2>
        <p>
          Viaja a la izquierda y sigue el camino hasta que llegues una vez más al largo abismo vertical con las
          plataformas encadenadas. Si recuerdas, está al norte de la ubicación de Cornifer en los Cruces Olvidados.
        </p>
        <img src="/img/Hollow_knight_6_6.jpg" alt="Guia_6_6" class="img-fluid my-2">
        <p>
          Baja por el pozo, toma la primera salida a la izquierda y sigue el pasillo hasta que llegues a Sendero Verde.
        </p>
        <img src="/img/Hollow_knight_6_7.jpg" alt="Guia_6_7" class="img-fluid my-2">`
  }, 
    {
    eventKey: '6', 
    title: 'Sendero Verde',
    content:`<img src="/img/Hollow_knight_7_1.jpg" alt="Guia_7_1" class="img-fluid my-2">
        <p>
          Sendero Verde es una zona exuberante y cubierta de flora al oeste de los Cruces Olvidados. Para encontrar
          Sendero Verde en Hollow Knight,
          dirígete al lado izquierdo del pozo de los Cruces Olvidados, por encima de la sala donde te encontraste con
          Cornifer. Aquí encontrarás la entrada.
        </p>
        <img src="/img/Hollow_knight_6_7.jpg" alt="Guia_7_2" class="img-fluid my-2">
        <p>
          La entrada se encuentra aproximadamente a mitad de camino del pozo y está marcada por arbustos verdes, con una
          farola afuera. Entra,
          y pronto te encontrarás cara a cara con el mismo tipo de criatura que acechaba en el templo del Chamán
          Caracol. Una vez más, te encuentras frente a un Baldur Anciano, el insecto acorazado que encontraste después
          de despachar al Caballero Falso.
        </p>
        <img src="/img/Hollow_knight_7_2.jpg" alt="Guia_7_3" class="img-fluid my-2">
        <p>
          Debido a que la criatura se enroscará en su caparazón si te acercas demasiado, tu Aguijón no la derrotará. En
          lugar de eso, retrocede hasta que la criatura se desenrosque y luego despáchala con varios lanzamientos de
          Espíritu Vengativo.
          Una vez que hayas matado al bicho, avanza, y pronto te encontrarás en Sendero Verde propiamente dicho.
        </p>
        <img src="/img/Hollow_knight_7_3.jpg" alt="Guia_7_4" class="img-fluid my-2">
        <p>
          Sendero Verde tiene nuevas criaturas con las que lidiar y nuevos peligros que evitar. Dirígete a la izquierda
          y cruza las plataformas elevadas, pero ten cuidado de no caer en el ácido burbujeante de abajo.
        </p>
        <img src="/img/Hollow_knight_7_4.jpg" alt="Guia_7_5" class="img-fluid my-2">
        <p>
          Ten cuidado al caminar por los pasillos boscosos de Sendero Verde, ya que a menudo los enemigos emergerán del
          suelo sin previo aviso. Uno de los primeros enemigos que encontrarás escupirá nubes de veneno,
          así que emplea tácticas de "golpear y correr" o usa Espíritu Vengativo para despacharlos y seguir avanzando
          hacia la izquierda por la zona.
          Sigue por la parte superior de las plataformas, en dirección oeste. Entra en la siguiente sala y asciende por
          las plataformas hasta que encuentres un lugar con una Banca.
          Siéntate para guardar tu progreso, luego déjate caer desde la plataforma del lado izquierdo y desciende.
        </p>
        <img src="/img/Hollow_knight_7_5.jpg" alt="Guia_7_6" class="img-fluid my-2">
        <h2>Obtener el Mapa de Sendero Verde</h2>
        <p>
          Vagar sin rumbo por Sendero Verde probablemente no suene muy divertido, ¡así que vamos a buscar ese mapa!
          Para encontrar el mapa de Sendero Verde, ve a la izquierda en la parte inferior de la sala de la banca y entra
          por la puerta. Dentro, verás a un guerrero envuelto en una capa roja de pie en un saliente.
          Pronto se moverá a la siguiente zona, y de momento no tienes los medios para seguirlo, así que en su lugar,
          desciende por el pozo.
        </p>
        <img src="/img/Hollow_knight_7_6.jpg" alt="Guia_7_7" class="img-fluid my-2">
        <p>
          A mitad de camino del pozo hay una alcoba en el lado derecho, donde verás una pequeña piscina de ácido con una
          plataforma flotante.
          Desciende hasta que llegues a un saliente con una pequeña plataforma flotante justo debajo. Continúa hasta el
          fondo y sal por la salida del lado derecho.
        </p>
        <img src="/img/Hollow_knight_7_7.jpg" alt="Guia_7_8" class="img-fluid my-2">
        <p>
          Pronto, escucharás el tarareo de nuestro amigo, Cornifer. Sube de un salto a las piedras suspendidas por
          enredaderas, luego corta las enredaderas para crear plataformas
          y abrir el camino. Continúa a la derecha para encontrar a Cornifer y comprar el mapa de Sendero Verde por 60
          Geo.
        </p>
        <img src="/img/Hollow_knight_7_8.jpg" alt="Guia_7_9" class="img-fluid my-2">
        <p>
          Ahora tienes el mapa de Sendero Verde en tu posesión, pero no es el único premio que se puede reclamar en el
          escondite de Cornifer. Vuelve a la izquierda y corta la enredadera restante que sujeta la gran losa de piedra
          (si no lo hiciste ya). Déjate caer encima de ella y salta a través de las púas hasta el saliente de la
          izquierda. Corta la otra enredadera que tienes delante para desbloquear un atajo,
          luego déjate caer por el suelo hacia la siguiente zona.
        </p>
        <img src="/img/Hollow_knight_7_9.jpg" alt="Guia_7_10" class="img-fluid my-2">
        <p>
          Continua cortando las enredaderas hasta crear un camino hacia delante.
        </p>
        <h2>Como conseguir el Diario del Cazador</h2>
        <p>
          Antes de continuar con la misión, deberías hacer un viaje para conseguir el objeto Diario del Cazador. Sigue
          bajando hasta que veas una losa de piedra colgante frente a un túnel que parece estar revestido de dientes.
        </p>
        <img src="/img/Hollow_knight_7_10.jpg" alt="Guia_7_11" class="img-fluid my-2">
        <p>
          Entra en el túnel (¡es seguro!) y dirígete a la sala que hay más allá. Acércate al montículo de hojas en la
          cueva, desde el cual una criatura con seis ojos rugirá a modo de advertencia.
          Interactúa con la criatura para que se te presente el Cazador, quien te reconoce como un compañero cazador.
        </p>
        <img src="/img/Hollow_knight_7_11.jpg" alt="Guia_7_12" class="img-fluid my-2">
        <p>
          El Cazador te da el objeto Diario del Cazador. Interactúa con él en el suelo para añadirlo a tu menú. Para
          verlo, abre tu menú y navega hasta la pestaña "Diario".
          Aquí, puedes ver todas las criaturas que has matado hasta ahora.
        </p>
        <img src="/img/Hollow_knight_7_12.jpg" alt="Guia_7_13" class="img-fluid my-2">
        <p>
          Matar a una cantidad suficiente de un bicho en particular revelará más datos sobre él. El Diario del Cazador
          no es un objeto necesario para completar Hollow Knight,
          pero es una herramienta útil para aquellos que quieran saber más sobre las criaturas que habitan en su mundo.
        </p>
        <img src="/img/Hollow_knight_7_13.jpg" alt="Guia_7_14" class="img-fluid my-2">
        <p>
          Abandona al Cazador cuando estés listo. Déjate caer, pegándote a la pared de la derecha, y pronto llegarás al
          fondo del pozo y a una piscina de ácido. Dirígete a la izquierda,
          viajando sobre la piscina de ácido a través de las plataformas flotantes. Finalmente, llegarás a una entrada
          que conduce a un pasillo en dirección oeste. Entra en el pasillo,
          donde te encontrarás de nuevo con el guerrero de capa roja, quien se alejará rápidamente a medida que te
          acerques. Antes de continuar hacia el oeste,
          ahora sería un buen momento para un desvío rápido para curarte y guardar tu progreso. Déjate caer desde el
          saliente donde viste al guerrero y entra en el agujero de abajo.
          Dirígete a la sala de abajo. Ve a la derecha, sigue el túnel y entra en la siguiente sala, donde encontrarás
          una Banca. Es una buena idea hacer una parada ahora para que puedas curarte y guardar tu progreso.
          Regresa a la sala donde viste por última vez al guerrero. Continúa a la izquierda, matando a los enemigos en
          la sala iluminada por faroles. Sal de la sala por la salida de la izquierda.
          Aquí, te enfrentarás a los Carga Musgosa, que aparecen desde el suelo y, bueno, embisten. Golpéalos una vez
          para quitarles las hojas, forzándolos a retirarse.
        </p>
        <img src="/img/Hollow_knight_7_14.jpg" alt="Guia_7_15" class="img-fluid my-2">
        <p>
          Ten cuidado si usas la salida del techo cerca del final del pasillo. La sala contiene un desafío de
          plataformeo que requiere una mejora que aún no tienes.
          Deberías marcarlo en tu mente para después de que derrotes al jefe de Sendero Verde.
        </p>
        <img src="/img/Hollow_knight_7_15.jpg" alt="Guia_7_16" class="img-fluid my-2">
        <h2>Asciende por el Pozo Occidental.</h2>
        <p>
          Sal del pasillo por la entrada del oeste y asciende por el pozo. Continúa hasta que llegues a una puerta de
          peaje.
          Paga los 50 Geo necesarios para desbloquearla, luego descansa en la Banca para actualizar el mapa y guardar tu
          progreso.
        </p>
        <img src="/img/Hollow_knight_7_16.jpg" alt="Guia_7_17" class="img-fluid my-2">
        <p>
          Continúa subiendo por el abismo, luchando contra los enemigos que encuentres por el camino. Sigue avanzando
          hasta que llegues a la siguiente zona,
          luego dirígete a la derecha y te encontrarás con el minijefe Caballero Musgoso.
        </p>
        <img src="/img/Hollow_knight_7_17.jpg" alt="Guia_7_18" class="img-fluid my-2">
        <img src="/img/Hollow_knight_7_18.jpg" alt="Guia_7_19" class="img-fluid my-2">
        <h2>Derrota al Caballero Musgoso</h2>
        <p>
          El Caballero Musgoso puede ser un cliente complicado, but la paciencia en este combate tiene su recompensa.
          Mientras sostiene su escudo al frente, el Caballero Musgoso no puede ser dañado con tu Aguijón.
          Acércate, o ataca el escudo, para hacer que el Caballero ataque. Antes del mandoble, puedes conseguir uno o
          dos tajos de daño. Retrocede rápidamente del ataque del Caballero Musgoso, que es un combo de uno o dos
          golpes.
        </p>
        <img src="/img/Hollow_knight_7_19.jpg" alt="Guia_7_20" class="img-fluid my-2">
        <p>
          El Caballero Musgoso también puede escupirte varias bolas de enredaderas en arco. Puedes esquivarlas o
          destruirlas con el Aguijón.
        </p>
        <img src="/img/Hollow_knight_7_20.jpg" alt="Guia_7_21" class="img-fluid my-2">
        <p>
          Puedes hacerle un Salto de Aguijón en la cabeza al Caballero Musgoso si te sientes atrevido, e incluso puedes
          dañarlo de esa manera.
          Pero finalmente prevalecerás si juegas de forma segura y lenta. Usa tu Espíritu Vengativo para infligir daño
          adicional, o guarda Alma para curarte con Concentración.
          Cuando el Caballero caiga, recoge el Geo que suelte y continúa.
          Sigue el túnel hacia arriba en dirección a la superficie, luego gira a la izquierda, y el entorno comenzará a
          parecerse de nuevo a los Cruces Olvidados.
        </p>
        <h2>¿Deberias salvar a zote?</h2>
        <p>
          Continúa avanzando hacia el oeste hasta que oigas los gruñidos de un bicho que parece estar en apuros. Bueno,
          eso pensarías, ya que en realidad está en las fauces de un enemigo aterrador.
        </p>
        <img src="/img/Hollow_knight_7_21.jpg" alt="Guia_7_22" class="img-fluid my-2">
        <p>
          Este es Zote el Magnífico, un PNJ que puedes rescatar. Hacerlo desbloquea la misión secundaria de Zote, si
          eliges seguirla más adelante. Si lo rescatas,
          Zote aparecerá en otras zonas de Hallownest. Elegir no salvar a Zote provocará su muerte, lo que te impedirá
          completar su historia.
        </p>
        <h2>Cómo Vencer al Rey Vengamosca y Rescatar a Zote.</h2>
        <p>
          Si eliges salvar a Zote, deberás enfrentarte al Rey Vengamosca, el bicho que intentaba convertir al guerrero
          en su almuerzo. Golpea al insecto, lo que provocará que Zote caiga de sus mandíbulas.
          El Rey Vengamosca no tiene muchos trucos bajo la manga. O bajo sus patas. Brazos de bicho. Lo que sea.
          Normalmente se elevará en el aire y mantendrá la distancia, quedando fuera del alcance de tu Aguijón,
          pero probablemente no de tu Espíritu Vengativo.
        </p>
        <img src="/img/Hollow_knight_7_22.jpg" alt="Guia_7_23" class="img-fluid my-2">
        <p>
          El insecto ataca lanzándose frecuentemente hacia ti. Tu mejor estrategia es esperar a que se lance y luego
          atacarlo con un Salto de Aguijón. Repite el proceso hasta que ganes.
        </p>
        <img src="/img/Hollow_knight_7_23.jpg" alt="Guia_7_24" class="img-fluid my-2">
        <p>
          Pronto, Zote se incorporará hasta ponerse de pie, momento en el que podrás tener una breve conversación. Te
          regañará por haberte interpuesto en su combate.
          Sigue interactuando con él hasta que agotes su diálogo. Después, eres libre de marcharte.
        </p>
        <img src="/img/Hollow_knight_7_24.jpg" alt="Guia_7_25" class="img-fluid my-2">
        <p>
          Sigue el pasillo a la izquierda hasta que puedas volver a bajar a la frondosa y verde región de Sendero Verde
          una vez más.
        </p>
        <img src="/img/Hollow_knight_7_25.jpg" alt="Guia_7_26" class="img-fluid my-2">
        <h2>Como desbloquear la estacion de Ciervos</h2>
        <p>
          Desciende por el pozo, luego dirígete a la derecha y corta la enredadera para desbloquear un atajo. Continúa
          hacia abajo a la siguiente zona y encontrarás la Estación del Ciervo de Sendero Verde a tu izquierda.
        </p>
        <img src="/img/Hollow_knight_7_26.jpg" alt="Guia_7_27" class="img-fluid my-2">
        <p>
          Paga 140 Geo para desbloquear la estacion de Sendero Verde.
        </p>
        <h2>Ve a la sala del Jefe</h2>
        <p>
          Después de desbloquear la estación del ciervo, regresa a la zona anterior y toma la primera salida a la
          izquierda, siguiendo el camino hasta que llegues al encuentro con la jefa Hornet.
        </p>
        <img src="/img/Hollow_knight_7_27.jpg" alt="Guia_7_28" class="img-fluid my-2">`
  }, 
    {
    eventKey: '7', 
    title: 'Hornet(Protectora)',
    content:`<h2>Derrotando a Hornet(Protectora)</h2>
        <img src="/img/Hollow_knight_8_1.jpg" alt="Guia_8_1" class="img-fluid my-2">
        <p>
          Hornet es, posiblemente, el primer encuentro contra un jefe verdaderamente desafiante en Hollow Knight. Con
          una variedad de ataques rápidos y
          siendo efectiva tanto a corta como a larga distancia, es una adversaria formidable. No te alarmes si te lleva
          unos cuantos intentos aprender sus patrones antes de que empieces a hacer progresos serios.
        </p>
        <img src="/img/Hollow_knight_8_2.jpg" alt="Guia_8_2" class="img-fluid my-2">
        <p>
          Uno de los ataques a larga distancia de Hornet es su ataque de embestida, en el que se prepara antes de cargar
          rápidamente hasta la mitad de la pantalla. Salta cuando realice su carga y
          lánzale un tajo hacia abajo para infligirle daño mientras evitas que te hiera.
        </p>
        <img src="/img/Hollow_knight_8_3.jpg" alt="Guia_8_3" class="img-fluid my-2">
        <p>
          Otro de sus ataques es el lanzamiento de aguja. Con este, se preparará y lanzará su arma hacia adelante,
          cubriendo casi dos tercios de la longitud de la arena, y luego la recogerá.
        </p>
        <img src="/img/Hollow_knight_8_4.jpg" alt="Guia_8_4" class="img-fluid my-2">
        <p>
          Este ataque la inmoviliza durante un corto periodo, así que si puedes mantenerte fuera de su alcance, es un
          momento excelente para curarte. Si estás bien posicionado, también puedes saltar por encima de la aguja,
          golpearla y luego alejarte de un salto mientras regresa a Hornet, pero la sincronización debe ser precisa.
        </p>
        <img src="/img/Hollow_knight_8_5.jpg" alt="Guia_8_5" class="img-fluid my-2">
        <p>
          En ocasiones, Hornet saltará en el aire y lanzará un tajo a su alrededor en un gran círculo dañino. Tu Aguijón
          no puede herirla durante este tiempo, así que mantén la distancia, cúrate o salta y lanza Espíritu Vengativo.
          Hornet también puede saltar en el aire y luego lanzarse en diagonal hacia el Caballero. Hazte a un lado de su
          zona de aterrizaje, y deberías poder asestar uno o dos golpes antes de tener que moverte.
        </p>
        <img src="/img/Hollow_knight_8_6.jpg" alt="Guia_8_6" class="img-fluid my-2">
        <p>
          Una vez que le inflijas una cierta cantidad de daño, Hornet quedará aturdida, permaneciendo en el sitio
          durante varios segundos antes de recuperarse. Durante este tiempo,
          puedes curarte hasta tres Máscaras de daño o, si ya tienes la salud al máximo, puedes colar un ataque extra
          sin que se defienda.
          Continúa luchando de forma conservadora y finalmente derrotarás a Hornet, provocando que huya. Eres libre de
          saquear el cuerpo en el centro de la arena,
          obteniendo la increíblemente útil Capa de Ala de Polilla por tus esfuerzos.
        </p>
        <img src="/img/Hollow_knight_8_7.jpg" alt="Guia_8_7" class="img-fluid my-2">
        <img src="/img/Hollow_knight_8_8.jpg" alt="Guia_8_8" class="img-fluid my-2">
        <p>
          "¿Acaso busca romper los Sellos? No pueden ser deshechos. Deben ser deshechos. Déjanos dormir, pequeña sombra.
          Regresa a tu oscuridad. Concédenos nuestra paz"
        </p>
        <img src="/img/Hollow_knight_8_9.jpg" alt="Guia_8_9" class="img-fluid my-2">
        <p>
          Tres figuras misteriosas aparecen de repente y la pantalla pronto emite un destello de un blanco brillante.
          Cuando recuperas la visión, el Caballero está inconsciente en el suelo. Despiértalo para continuar el viaje.
          El siguiente paso es prepararse para Desechos Fungicos
        </p>`
  }, 
    {
    eventKey: '8', 
    title: 'Preparacion para desechos fungicos',
    content:`<p>
          Ahora que has vencido a Hornet y has sido recompensado con la Capa de Ala de Polilla, el Caballero tiene
          acceso a uno de los vendedores más importantes del juego. Para empezar,
          dirígete a la izquierda desde la arena del jefe Hornet, luego baja y ve a la derecha, y usa tu nueva habilidad
          de dash para volver a subir por el lado derecho.
        </p>
        <img src="/img/Hollow_knight_9_1.jpg" alt="Guia_9_1" class="img-fluid my-2">
        <p>
          Destruye el soporte de madera en la cima del pozo para desbloquear un atajo de vuelta al resto de Sendero
          Verde, luego dirígete al sur y toma la Estación del Ciervo hacia los Cruces Olvidados.
          Desde allí, dirígete al sureste hasta que llegues a la zona donde rescataste a Sly. Continúa a la derecha y
          usa el dash para alcanzar otra Banca y la tienda de la Amante de Amuletos Salubra.
        </p>
        <img src="/img/Hollow_knight_9_2.jpg" alt="Guia_9_2" class="img-fluid my-2">
        <p>
          Salubra vende varios Amuletos poderosos, así como mejoras de Muescas para Amuletos, que te permiten equipar
          más Amuletos. Cada uno de sus artículos tiene su utilidad, pero los más poderosos son la Piedra de Chamán
          (que aumenta el poder de los hechizos), el Clavo Largo (que aumenta el alcance de tu ataque cuerpo a cuerpo) y
          el Foco Rápido (que reduce la cantidad de tiempo que se tarda en curarse canalizando Alma).
        </p>
        <img src="/img/Hollow_knight_9_3.jpg" alt="Guia_9_3" class="img-fluid my-2">
        <p>
          Compra tantos como puedas permitirte, luego siéntate en la Banca y equípalos antes de dirigirte de vuelta a
          Sendero Verde a través de la Estación del Ciervo.
          Sal de la Estación del Ciervo de Sendero Verde y desciende por el pozo. Continúa hasta que llegues a un pasaje
          descendente bloqueado por una reja. Cruza por encima de la reja y golpea la palanca para abrirla.
        </p>
        <img src="/img/Hollow_knight_9_4.jpg" alt="Guia_9_4" class="img-fluid my-2">
        <p>
          Dirígete a la derecha una vez que llegues al fondo del pozo. Cuando alcances la siguiente zona, un largo
          pasillo, detente después de llegar a la segunda plataforma larga.
          Sobre el borde de la plataforma hay una entrada en el techo que conduce a otro pozo. Allí puedes hacer un
          pequeño desvío para conseguir un Amuleto
          que no podías obtener antes sin la Capa de Ala de Polilla. Si quieres conseguirlo más tarde, continúa hacia la
          derecha. De lo contrario, lee el cuadro azul desplegable.
          Sigue avanzando hasta que llegues a la primera salida hacia abajo. Deberías aprovechar este momento para
          entrar en la primera sala a la derecha y descansar en la Banca para curarte y guardar tu progreso.
        </p>
        <img src="/img/Hollow_knight_9_5.jpg" alt="Guia_9_5" class="img-fluid my-2">
        <p>
          Después de descansar en la Banca, continúa bajando por la zona y pronto cruzarás hacia el Cañón de la Niebla.
        </p>
        <h2>Atravesar el cañon de la niebla</h2>
        <p>
          Continúa bajando por el pasillo y toma la última salida a la derecha. Desciende por ese pozo, tomando una vez
          más la última salida a la derecha para llegar a la Estación de la Reina, una enorme Estación del Ciervo.
          Dirígete a la parte inferior de la Estación de la Reina y ve a la izquierda para entrar en una sala con una
          Banca y una Estación del Ciervo, que puedes desbloquear por 120 Geo. También hay una banca al otro lado.
        </p>
        <img src="/img/Hollow_knight_9_6.jpg" alt="Guia_9_6" class="img-fluid my-2">
        <p>
          Descansa allí, luego toma la salida superior derecha para entrar en los Desechos Fúngicos.
        </p>
        <img src="/img/Hollow_knight_9_7.jpg" alt="Guia_9_7" class="img-fluid my-2">`
  }, 
    {
    eventKey: '9', 
    title: 'Desechos Fungicos',
    content:`<img src="/img/Hollow_knight_10_1.jpg" alt="Guia_10_1" class="img-fluid my-2">
        <p>
          Para llegar a los Páramos Fúngicos en Hollow Knight, empieza en la Banca de la Estación de la Reina, junto a
          la Estación del Ciervo,
          luego dirígete a la izquierda y asciende hasta la cima. Toma la salida en la esquina superior derecha y
          llegarás a los Páramos Fúngicos.
        </p>
        <img src="/img/Hollow_knight_10_2.jpg" alt="Guia_10_2" class="img-fluid my-2">
        <p>
          Esquiva o mata a los enemigos tipo globo que escupen veneno, llamados Fungoons, mientras avanzas hacia la
          derecha.
        </p>
        <h2>Cómo Encontrar el Mapa de los Páramos Fúngicos.</h2>
        <p>
          Explorar las zonas en Hollow Knight es difícil sin mapas y, por suerte, el de los Páramos Fúngicos se puede
          conseguir casi de inmediato. Para encontrar el mapa de los Páramos Fúngicos,
          avanza hacia el este desde la entrada principal de la zona hasta que llegues a un agujero en el suelo. Junto
          al agujero habrá un trozo de papel desechado, una señal inequívoca de que Cornifer está cerca.
        </p>
        <img src="/img/Hollow_knight_10_3.jpg" alt="Guia_10_3" class="img-fluid my-2">
        <p>
          ¡Y así es! Déjate caer por el agujero y oirás el característico tarareo de Cornifer. Desciende y toma la
          primera a la izquierda para encontrarlo en un recoveco.
        </p>
        <img src="/img/Hollow_knight_10_4.jpg" alt="Guia_10_4" class="img-fluid my-2">
        <p>
          Compra el mapa de la zona de los Páramos Fúngicos por 75 Geo, luego vuelve a subir a la zona anterior y
          dirígete a la derecha. Entrarás en un pequeño pozo cerca del centro de la zona.
          Varios pasajes están bloqueados, así que toma la única salida disponible y continúa a la derecha hacia la
          siguiente zona.
        </p>
        <img src="/img/Hollow_knight_10_5.jpg" alt="Guia_10_5" class="img-fluid my-2">
        <p>
          Después de despachar o esquivar a los nuevos enemigos con forma de hongo que chillan, sube a la plataforma
          superior y avanza a la izquierda, de vuelta a la zona anterior a través de la salida superior izquierda.
          Acciona la palanca para desbloquear la reja, luego sube de un salto por la salida de arriba y entra en la
          arena cerrada para iniciar el encuentro con el minijefe Ogro de Champiñones.
        </p>
        <img src="/img/Hollow_knight_10_6.jpg" alt="Guia_10_6" class="img-fluid my-2">
        <h2>Derrota al Ogro de Champiñones</h2>
        <img src="/img/Hollow_knight_10_7.jpg" alt="Guia_10_7" class="img-fluid my-2">
        <p>
          Al principio del combate, solo te enfrentarás a un único ogro. Evita la sustancia naranja que rezuma y dale al
          enemigo unos cuantos tajos, o desata varias ráfagas de Espíritu Vengativo
          (especialmente si compraste la Piedra de Chamán a la Amante de Amuletos Salubra) para despacharlo, y luego
          centra tu atención en el otro ogro.
          Después de que hayas destruido a los dos Ogros de Champiñones, una mejora de Muesca para Amuleto caerá del
          techo. Recógela para aumentar tus ranuras de Amuleto en una. Cuando estés listo,
          continúa a la derecha hacia la siguiente zona. Asciende, tomando la primera salida a la derecha para conocer a
          Devorapiernas.
        </p>
        <h2>Como desbloquear la tienda del Devorapiernas</h2>
        <p>
          Devorapiernas es un PNJ inusual, pero puede serte útil... por un precio. Habla con él y te pedirá una tarifa
          simbólica para "ver algo bonito". Págale 86 Geo y obtendrás acceso a su tienda de Amuletos.
        </p>
        <img src="/img/Hollow_knight_10_8.jpg" alt="Guia_10_8" class="img-fluid my-2">
        <p>
          Devorapiernas solo vende tres amuletos, pero cada uno de ellos es bastante poderoso: Corazón Frágil aumenta la
          salud disponible del Caballero en dos Máscaras; Avaricia Frágil aumenta la cantidad
          de Geo que el Caballero recibe de todas las fuentes; y Fuerza Frágil aumenta el daño infligido.
          Cada uno de los Amuletos Frágiles se rompe al morir, pero Devorapiernas puede repararlos por una tarifa
          relativamente baja. Los Amuletos pueden ser mejorados más adelante para volverse irrompibles.
        </p>
        <img src="/img/Hollow_knight_10_9.jpg" alt="Guia_10_9" class="img-fluid my-2">
        <h2>Adéntrate más en los Páramos.</h2>
        <p>
          Después de que hayas terminado con Devorapiernas, vuelve a bajar al fondo del abismo y continúa hacia la
          derecha, siguiendo la señal que parece un grupo de edificios.
          Una vez que hayas llegado al pozo vertical al final del camino, desciende a través del abismo lleno de ácido.
          Continúa hasta que llegues al fondo, luego dirígete a la izquierda y entra en la siguiente zona, donde te
          encontrarás con una compañera aventurera llamada Cloth.
          Cloth es un PNJ que, al igual que Zote, también tiene una misión secundaria que puedes seguir. Habla con Cloth
          si lo deseas y sigue interactuando hasta que agotes su diálogo.
          Te advertirá sobre una tribu guerrera que se encuentra en las profundidades.
        </p>
        <img src="/img/Hollow_knight_10_10.jpg" alt="Guia_10_10" class="img-fluid my-2">
        <p>
          Pasa delante de cloth a la siguiente zona. La sala contiene hongos morados que el Caballero puede usar como
          plataformas de rebote. Utiliza la técnica del Salto de Aguijón y
          lanza un tajo hacia abajo mientras caes para obtener un impulso extra en la altura de tu salto y superar el
          foso de ácido. Avanza hasta que llegues al fondo,
          donde verás a Hornet correr hacia la siguiente zona a la derecha. No tenemos el objeto necesario para
          seguirla, así que en su lugar, dirígete a la izquierda y continúa hacia la zona de abajo.
        </p>
        <h2>Cómo Desbloquear el Atajo de la Estación de la Reina.</h2>
        <p>
          A medida que desciendes por la siguiente zona vertical, toma la primera salida a la izquierda haciendo un
          Salto de Aguijón y luego un dash desde un grupo de hongos morados.
        </p>
        <img src="/img/Hollow_knight_10_11.jpg" alt="Guia_10_11" class="img-fluid my-2">
        <p>
          Sigue el pasillo a la izquierda hasta que llegues a una palanca que desbloquea un atajo de vuelta a la
          Estación del Ciervo y la Banca de la Estación de la Reina.
        </p>
        <h2>Entra al Territorio de las Mantis</h2>
        <p>
          Después de desbloquear el atajo, regresa a la cámara vertical anterior y continúa hacia abajo. Una vez que
          llegues al fondo, dirígete a la derecha.
          En este punto, comenzarás a encontrar enemigos de tipo Mantis. Sigue avanzando hasta la
              Aldea Mantis.
        </p>`
  }, 
    {
    eventKey: '10', 
    title: 'La aldea Mantis',
    content:`<p>
          Después de desbloquear el atajo entre la Estación de la Reina y el lado derecho de los Páramos Fúngicos,
          regresa a la cámara vertical de la derecha y continúa hacia abajo. Una vez que llegues al fondo,
          dirígete a la derecha. En este punto, comenzarás a encontrar enemigos de tipo Mantis.
          Los Guerreros Mantis utilizan rápidos ataques de embestida y luego retroceden ligeramente antes de volver a
          atacar. Enfréntate a ellos con cuidado e intenta siempre luchar de uno en uno hasta que estés
          íntimamente familiarizado con sus ataques. Los Jóvenes Mantis te acosarán con ataques de embestida voladores.
          Vigila las paredes y los techos a medida que continúas por la zona para evitar ser acorralado por grupos de
          Jóvenes alborotadores.
        </p>
        <img src="/img/Hollow_knight_11_1.jpg" alt="Guia_11_1" class="img-fluid my-2">
        <p>
          Después de despachar (o huir de) tus primeros enemigos Mantis, dirígete a la siguiente zona. Busca la salida
          en la parte inferior de la sala.
          Sigue el pozo hasta el fondo mientras sigues las señales que te indican dónde hay una Banca.
        </p>
        <img src="/img/Hollow_knight_11_2.jpg" alt="Guia_11_2" class="img-fluid my-2">
        <h2>Como conseguir el amuleto de maestro del tablero</h2>
        <p>
          Continúa siguiendo las señales hasta que, por fin, puedas tomarte un respiro en la Banca. Tómate un descanso
          para curarte y guardar tu progreso.
        </p>
        <img src="/img/Hollow_knight_11_3.jpg" alt="Guia_11_3" class="img-fluid my-2">
        <p>
          Dirígete a la salida inferior izquierda y desciende hasta que encuentres el Amuleto Maestro de la Embestida a
          los pies de una estatua.
          Maestro de la Embestida es un Amuleto de dos muescas que te permite hacer dashes más a menudo y también hacia
          abajo.
        </p>
        <img src="/img/Hollow_knight_11_4.jpg" alt="Guia_11_4" class="img-fluid my-2">
        <p>
          Después de reclamar el Amuleto, vuelve a subir a la zona anterior y toma la salida del medio a la izquierda,
          custodiada por un Guerrero Mantis y varios Jóvenes Mantis.
          Continúa a la izquierda y pronto llegarás al Poblado Mantis.
        </p>
        <img src="/img/Hollow_knight_11_5.jpg" alt="Guia_11_5" class="img-fluid my-2">
        <h2>Como conseguir las garras de Mantis</h2>
        <p>
          Dirígete al nivel del suelo y avanza hacia la parte más alejada de la izquierda. Luego, golpea la palanca en
          el techo para abrir la reja en la plataforma superior.
        </p>
        <img src="/img/Hollow_knight_11_6.jpg" alt="Guia_11_6" class="img-fluid my-2">
        <p>
          Regresa a la entrada de la Aldea Mantis y, esta vez, toma la fila de plataformas superior hacia la izquierda.
          Ten cuidado con
          los Jóvenes Mantis que se esconden y usa tu carrera aérea para cruzar entre las plataformas.
          Continúa hacia la esquina superior izquierda de la zona, cruza la reja que está abierta y luego déjate caer
          para obtener el siguiente objeto importante,
          la Garra de Mantis. La Garra de Mantis te permite saltar en las paredes, lo que te dará acceso a áreas que
          antes eran demasiado altas.
        </p>
        <img src="/img/Hollow_knight_11_7.jpg" alt="Guia_11_7" class="img-fluid my-2">
        <p>
          Una vez que tengas la Garra de Mantis, podrás explorar el resto de la sección superior de la Aldea Mantis.
          Regresa a las plataformas que cruzaste antes.
          Continúa hacia la derecha y usa tu nuevo objeto para saltar en la pared por un conducto estrecho que está
          encima de la plataforma donde ves máscaras de insectos adornando dos puertas.
        </p>
        <img src="/img/Hollow_knight_11_8.jpg" alt="Guia_11_8" class="img-fluid my-2">
        <p>
          Sigue el camino y avanza a gran velocidad por la sección de plataformas con pinchos en la parte superior de la
          Aldea Mantis para llegar a una palanca.
          Activa la palanca para abrir un gran agujero en el piso principal de la aldea.
        </p>
        <img src="/img/Hollow_knight_11_9.jpg" alt="Guia_11_9" class="img-fluid my-2">
        <p>
          Regresa al nivel del suelo y salta por la nueva abertura para descender al nivel inferior de la aldea, bajando
          por cualquier lado y usando el desplazamiento rápido para esquivar los pozos con pinchos.
          Sigue bajando, luego toma el primer camino a la izquierda y navega por las avenidas con pinchos de regreso
          hasta la parte superior, hasta que llegues a un nivel que desbloquea un atajo a la entrada del pozo.
        </p>
        <img src="/img/Hollow_knight_11_10.jpg" alt="Guia_11_10" class="img-fluid my-2">
        <p>
          Después de activar la primera palanca, deslízate por la pared izquierda hasta llegar a una segunda palanca.
          Golpéala para abrir la reja del medio a la izquierda.
        </p>
        <img src="/img/Hollow_knight_11_11.jpg" alt="Guia_11_11" class="img-fluid my-2">
        <p>
          Salta una vez más para desbloquear la reja inferior del lado izquierdo.
        </p>
        <img src="/img/Hollow_knight_11_12.jpg" alt="Guia_11_11" class="img-fluid my-2">
        <p>
          Una vez que hayas hecho eso, salta un nivel más, elimina al Guerrero Mantis y cruza hacia el lado derecho.
          Sube por el lado derecho y golpea la palanca para desbloquear la reja inferior derecha.
        </p>
        <img src="/img/Hollow_knight_11_13.jpg" alt="Guia_11_13" class="img-fluid my-2">
        <p>
          Una vez que se hayan abierto las rejas de esa zona, desciende hasta el fondo del pozo para desafiar a los Señores
            Mantis(encuentro con un jefe).
        </p>`
  }, 
    {
    eventKey: '11', 
    title: 'Señores Mantis',
    content:`<p>
          Los Señores Mantis representan un obstáculo de dificultad significativo si se les enfrenta al principio del
          juego, especialmente cuando se está viajando por primera vez a través de los Baldíos de Hongos. Sin embargo,
          pueden ser derrotados con la combinación correcta de Amuletos, una distancia adecuada y familiarizándose con
          sus ataques.
        </p>
        <img src="/img/Hollow_knight_12_1.jpg" alt="Guia_12_1" class="img-fluid my-2">
        <h2>Como derrotar a los Señores Mantis</h2>
        <p>
          Los Señores Mantis usan solo tres ataques y cada uno puede ser contrarrestado. En la primera parte de la
          pelea, solo te enfrentarás a uno de los tres Señores Mantis.
          Aprovecha esta fase para aprender y familiarizarte con los ataques y cómo pueden ser contrarrestados.
          Ten cuidado con las trampas de pinchos en la arena. Ambos lados del campo de batalla tienen pequeñas trampas
          en el piso con pinchos mortales. Tenlas en cuenta al moverte por la arena.
        </p>
        <h2>Fase 1</h2>
        <p>
          El primer movimiento que los Señores Mantis pueden usar es un ataque aéreo que comienza cuando el jefe aparece
          en el aire y apuñala rápidamente hacia abajo con su lanza, terminando cuando el Señor Mantis llega al suelo.
          Luego, se quedará por un momento antes de desaparecer y lanzar otro ataque.
          Para contrarrestar este ataque, esquiva o sal de su camino y luego ataca al Señor Mantis. Es posible que solo
          consigas un golpe, pero esta es una batalla de desgaste, así que cada ataque o hechizo cuenta.
        </p>
        <img src="/img/Hollow_knight_12_2.jpg" alt="Guia_12_2" class="img-fluid my-2">
        <p>
          El segundo ataque es un ataque de embestida terrestre. El Señor Mantis aparecerá en un lado de la arena,
          preparará su ataque y luego se lanzará al otro lado,
          quedándose por un momento antes de desaparecer.
          Para contrarrestar este ataque, salta mientras el jefe está embistiendo y ataca hacia abajo cuando estés
          encima de él. Si el momento del ataque te resulta difícil,
          salta un poco mientras avanza y aterriza a su lado. Ataca al enemigo antes de que desaparezca de nuevo.
        </p>
        <img src="/img/Hollow_knight_12_3.jpg" alt="Guia_12_3" class="img-fluid my-2">
        <p>
          El ataque final es uno que niega el área. Aquí, el Señor Mantis lanza un ataque de energía que avanza en
          zigzag lentamente por la pantalla.
          Puede comenzar bajo antes de cruzar la arena y regresar en un ángulo ascendente, o comenzar alto antes de
          cruzar la arena y regresar en un ángulo descendente.
        </p>
        <img src="/img/Hollow_knight_12_4.jpg" alt="Guia_12_4" class="img-fluid my-2">
        <p>
          Para contrarrestar este ataque, puedes agacharte bajo el proyectil alto o saltar y correr sobre el proyectil
          bajo. A continuación, puedes acortar la distancia y atacar con tu Aguijón o lanzar el Espíritu Vengativo
          mientras estás en el aire. También puedes simplemente evitar el ataque saltando sobre él. Si te preocupa caer
          sobre el ataque, usa el Salto de Aguijón para rebotar en él.
          Después de que derrotes al primero de los Señores Mantis, este se retirará y el encuentro entrará en la Fase
          Dos, donde las cosas se volverán mucho más desafiantes.
        </p>
        <h2>Fase 2</h2>
        <p>
          En la segunda fase de la pelea, los dos Señores Mantis restantes entran en la arena. Aunque usan los mismos
          ataques de la primera fase, ahora tendrás que moverte más rápido para esquivar el doble de ataques.
        </p>
        <img src="/img/Hollow_knight_12_5.jpg" alt="Guia_12_5" class="img-fluid my-2">
        <p>
          Los ataques llegan en una rápida sucesión y tendrás que usar la carrera más a menudo que los movimientos
          laterales para evitar recibir daño (debido a los posibles ataques de seguimiento del otro Señor).
          Es posible que tengas que atacar a un solo Señor Mantis a la vez para evitar el daño del otro, y no hay
          problema con eso.
          Recuerda, esta es una batalla que se gana con paciencia. No comparten la misma barra de vida, así que
          concentrarse en un solo Señor Mantis para eliminarlo rápidamente es una
          estrategia viable para recuperar el control de la pelea. Una vez que te ocupes de uno de los Señores, la
          batalla será similar a la Fase Uno.
          En su mayor parte, puedes usar las mismas estrategias mencionadas anteriormente para los ataques con armas de
          los Señores. El único ataque que debe ser tratado de manera diferente es el ataque de doble bumerán.
        </p>
        <img src="/img/Hollow_knight_12_6.jpg" alt="Guia_12_6" class="img-fluid my-2">
        Durante este ataque, ambos jefes lanzan ataques idénticos y reflejados, lo que le negará al jugador el acceso a
        una gran porción del espacio en la pantalla. Si el ataque comienza alto,
        corre rápidamente hacia la derecha, haz una pausa cuando los ataques lleguen al centro de la pantalla, luego
        salta y corre hacia el centro para evitar el daño.
        Si los ataques comienzan bajos, ve al medio de la pantalla, luego salta y corre a la izquierda o a la derecha
        para evitar el daño.
        <h2>Ganar el respeto de la tribu Guerrera</h2>
        <p>
          Una vez que derrotes a los Señores Mantis, te ganarás el respeto de la tribu, y los enemigos Mantis de la zona
          ya no te atacarán.
          También obtendrás acceso a los almacenes de tesoros de la Aldea Mantis, accesibles desde la salida superior
          derecha.
        </p>
        <h2>Como conseguir el tesoro de los Señores Mantis</h2>
        <p>
          Una vez que derrotes a los Señores Mantis y se rindan, tendrás acceso a la sala del tesoro. Esta nueva área
          contiene un considerable alijo de Geo,
          un Banco y el poderoso Amuleto de la Marca de Orgullo como recompensa por tu victoria.
          Para encontrarlo, sal de la arena del jefe usando la Garra de Mantis para escalar la pared de la sala en el
          lado derecho. Asciende hasta la zona de arriba.
          Busca una plataforma pequeña y flotante cerca de la parte inferior de la sala, frente a una entrada a la
          derecha. La plataforma debe tener un Joven Mantis adherido a su parte inferior.
          Busca la entrada que está junto a una lanza decorada con dos máscaras.
        </p>
        <img src="/img/Hollow_knight_12_7.jpg" alt="Guia_12_7" class="img-fluid my-2">
        <p>
          Déjate caer en la sala de abajo, pasa al Guerrero Mantis y sube por el conducto que está detrás de él en el
          lado derecho. Entra por la puerta de la derecha en la parte superior.
        </p>
        <img src="/img/Hollow_knight_12_8.jpg" alt="Guia_12_8" class="img-fluid my-2">
        <p>
          Dentro encontrarás la sala del tesoro de los Señores Mantis. Usa la Garra de Mantis para trepar por las
          paredes y esquivar los pinchos hasta encontrar tres cofres.
          El cofre que está en el centro de la sala contiene el Amuleto de la Marca de Orgullo.
        </p>
        <img src="/img/Hollow_knight_12_9.jpg" alt="Guia_12_9" class="img-fluid my-2">
        <p>
          Arriba, cerca de las vigas, hay un cofre con un Sello de Hallownest. Salta del saliente a la derecha del cofre
          que tiene el sello y
          entra por la puerta en el lado derecho del conducto para encontrar un cofre con Geo.
        </p>
        <img src="/img/Hollow_knight_12_10.jpg" alt="Guia_12_10" class="img-fluid my-2">
        <p>
          Tu próximo destino en Hollow Knight después de derrotar a los Señores Mantis es la
              Ciudad de Lágrimas, que te espera en el centro del reino caído.
        </p>`
  }, 
    {
    eventKey: '12', 
    title: 'Ciudad de lagrimas',
    content:`<h2>Como llegar a la Ciudad de Lágrimas y usar el Emblema de la Ciudad</h2>
        <p>
          Después de derrotar a los Señores Mantis y obtener la Marca de Orgullo, o incluso si solo conseguiste la Garra
          de Mantis,
          ya estás preparado para entrar a la Ciudad de Lágrimas.
          Desde la Aldea Mantis, sube a la parte superior de la aldea y continúa hacia la siguiente zona con los hongos
          morados. Toma la salida superior derecha y sigue subiendo hasta que vuelvas al
          letrero donde viste a Hornet por última vez.
          En el mapa, el letrero se encuentra cerca del centro de los Baldíos de Hongos. Sabrás que has llegado a la
          entrada cuando veas un gran letrero adornado fuera de un pasillo con rejas de metal y
          lámparas brillantes, que se ven fuera de lugar en medio de tanto hongo. Pasa la reja y sigue las lámparas
          hasta la sala que está al final.
        </p>
        <img src="/img/Hollow_knight_13_1.jpg" alt="Guia_13_1" class="img-fluid my-2">
        <p>
          Sigue el camino hacia la derecha y detente cuando llegues al borde donde el puente termina bruscamente. Desde
          ahí, salta y
          trepa a la plataforma flotante que tienes justo delante, pero ten cuidado con el enemigo que está encima.
        </p>
        <img src="/img/Hollow_knight_13_2.jpg" alt="Guia_13_2" class="img-fluid my-2">
        <p>
          Utiliza la Garra de Mantis y la Capa de Polilla para saltar en las paredes y avanzar rápidamente a través de
          la sección de plataformas con pinchos que está arriba.
          Recuerda: puedes mantener presionado el botón de dirección hacia la pared para agarrarte y empezar a
          deslizarte, soltarlo y luego presionar el botón o la tecla de la Capa de Polilla para impulsarte y deslizarte
          sin necesidad de saltar primero.
        </p>
        <img src="/img/Hollow_knight_13_3.jpg" alt="Guia_13_3" class="img-fluid my-2">
        <p>
          A mitad de las plataformas hay un agujero en el techo. Síguelo para encontrar un gran Tótem de Alma al que
          puedes golpear para obtener Alma si necesitas curarte.
        </p>
        <img src="/img/Hollow_knight_13_4.jpg" alt="Guia_13_4" class="img-fluid my-2">
        <p>
          Déjate caer a la mitad y golpea la palanca para levantar la primera sección del puente.
        </p>
        <img src="/img/Hollow_knight_13_5.jpg" alt="Guia_13_5" class="img-fluid my-2">
        <p>
          Avanza a través de la siguiente sección con pinchos y déjate caer al final. Golpea la palanca para levantar la
          segunda sección del puente.
        </p>
        <img src="/img/Hollow_knight_13_6.jpg" alt="Guia_13_6" class="img-fluid my-2">
        <p>
          Para usar el Emblema de la Ciudad que obtuviste del Falso Caballero, avanza y colócalo en la ranura de la
          estatua, y la reja de la Ciudad de Lágrimas se abrirá.
        </p>
        <img src="/img/Hollow_knight_13_7.jpg" alt="Guia_13_7" class="img-fluid my-2">
        <h2>Como mejorar tu aguijon</h2>
        <p>
          Una vez que entres a la Ciudad de Lágrimas, avanza hacia la derecha. Esquiva a los Belfly que se lanzan en
          picada y luego toma la salida al final del pasillo. Desciende hasta que llegues a un ascensor.
        </p>
        <img src="/img/Hollow_knight_13_8.jpg" alt="Guia_13_8" class="img-fluid my-2">
        <p>
          Para operar el elevador, golpea la palanca en el techo. Golpear la palanca aquí, en el piso superior, hace que
          descienda. Cada elevador tiene una palanca cerca de la entrada para llamarlo si no está en tu piso.
        </p>
        <img src="/img/Hollow_knight_13_9.jpg" alt="Guia_13_9" class="img-fluid my-2">
        <p>
          Cuando llegues a la parte inferior del primer elevador, sal y salta por encima del hueco en el suelo a la
          derecha para encontrar un Banco. Quirrel también está aquí,
          dándote la oportunidad de encontrarte con el habitante errante de Hallownest favorito de todos. Descansa en el
          Banco para curarte y guardar tu progreso antes de continuar hacia abajo.
        </p>
        <img src="/img/Hollow_knight_13_10.jpg" alt="Guia_13_10" class="img-fluid my-2">
        <p>
          Pronto llegarás a otro elevador. Antes de bajar, puedes descender por un agujero en el suelo a la izquierda.
          Sigue el camino, saltando por encima del hueco del elevador,
          para encontrar un cofre lleno de Geo. Cuando estés listo, entra en el elevador y bájalo a la planta baja.
        </p>
        <img src="/img/Hollow_knight_13_11.jpg" alt="Guia_13_11" class="img-fluid my-2">
        <p>
          Una vez que llegues abajo, ve a la izquierda, sigue la señal con forma de Aguijón para avanzar hacia el
          Forjador de Aguijones.
        </p>
        <img src="/img/Hollow_knight_13_12.jpg" alt="Guia_13_12" class="img-fluid my-2">
        <p>
          La siguiente sala te hace saltar de plataforma en plataforma mientras luchas contra enemigos. Continúa a la
          izquierda hasta que notes las señales de que te estás acercando al herrero, como los Aguijones desechados y el
          crecimiento de hongos.
        </p>
        <img src="/img/Hollow_knight_13_13.jpg" alt="Guia_13_13" class="img-fluid my-2">
        <p>
          Cuando llegues a la pared de la izquierda, trepa por ella y dirígete a la derecha hasta que descubras la
          cabaña del Forjador de Aguijones. Entra para conocer al maestro.
        </p>
        <img src="/img/Hollow_knight_13_14.jpg" alt="Guia_13_14" class="img-fluid my-2">
        <p>
          Aunque necesitarás Mineral Pálido para mejorar tu Aguijón a la cúspide de su fuerza, tu primer aumento de
          poder cuesta solo 250 de Geo. Entrégale tu Aguijón al Forjador de Aguijones, junto con los fondos necesarios,
          y espera a que mejore tu Aguijón Viejo a Aguijón Afilado. Cuando estés listo, regresa a la habitación de la
          derecha donde dejaste el elevador.
        </p>
        <img src="/img/Hollow_knight_13_15.jpg" alt="Guia_13_15" class="img-fluid my-2">
        <h2>Mapa de la Ciudad de Lágrimas</h2>
        <p>
          Para llegar a la siguiente área, debes subirte a la plataforma de metal que está muy por encima del hueco a la
          derecha del elevador. Entra en el elevador y golpea la palanca para ascender. Antes de llegar al piso de
          arriba,
          salta y corre hacia la plataforma de metal. Ahora debes avanzar a la derecha, saltando entre plataformas
          mientras luchas contra los molestos enemigos Centinela Alado. Sigue las plataformas hacia la derecha hasta que
          llegues a una salida elevada.
        </p>
        <img src="/img/Hollow_knight_13_16.jpg" alt="Guia_13_16" class="img-fluid my-2">
        <p>
          Dentro de la siguiente habitación hay un Centinela Pesado, un gran insecto guardia que empuña una lanza
          enorme. Dale espacio para evitar su golpe aéreo y salta sobre él cuando cargue.
          Usa el Salto de Aguijón cuando estés sobre él para infligirle un daño rápido.
        </p>
        <img src="/img/Hollow_knight_13_17.jpg" alt="Guia_13_17" class="img-fluid my-2">
        <p>
          Pasado el bruto hay un agujero en el suelo. A su derecha hay un letrero que te señala la dirección de un lugar
          actualmente desconocido. Baja por el hueco y golpea la palanca a la derecha del elevador para desbloquear una
          puerta.
        </p>
        <img src="/img/Hollow_knight_13_18.jpg" alt="Guia_13_18" class="img-fluid my-2">
        <p>
          Después de desbloquear la puerta, ve a la derecha y te encontrarás con Buscador de Reliquias Lemm, el primer
          comprador de objetos de Hollow Knight. Lemm compra Diarios de un Viajero, Sellos de Hallownest, Ídolos de Rey
          y Huevos Arcanos,
          dándote una cantidad de Geo que varía según la rareza de esos objetos. Por el Sello de Hallownest que
          conseguiste antes, Lemm te dará 450 de Geo.
        </p>
        <img src="/img/Hollow_knight_13_19.jpg" alt="Guia_13_19" class="img-fluid my-2">
        <p>
          Ahora que te has encontrado con Lemm, regresa al área anterior y toma el elevador, subiendo una parada. Sigue
          el camino hacia la izquierda, pero mantente alerta a los guardias Centinelas Corazas Pesadas. Asciende por el
          área,
          luchando contra los enemigos, hasta que llegues a una entrada bloqueada con un hueco arriba. Sube por el hueco
          hasta la siguiente área.
        </p>
        <img src="/img/Hollow_knight_13_20.jpg" alt="Guia_13_20" class="img-fluid my-2">
        <p>
          Salta de la pared y corre mientras avanzas por la siguiente habitación hasta que llegues a una palanca en la
          cima de un saliente.
        </p>
        <img src="/img/Hollow_knight_13_21.jpg" alt="Guia_13_21" class="img-fluid my-2">
        <p>
          Golpea la palanca para desbloquear una puerta justo debajo. Cruza la puerta abierta y baja, cayendo a la
          siguiente área.Aterrizarás al lado de otra palanca. Golpéala para abrir varias puertas justo debajo de la
          palanca.
          Cae por debajo y ve a la derecha, corriendo sobre el hueco del elevador.
        </p>
        <img src="/img/Hollow_knight_13_22.jpg" alt="Guia_13_22" class="img-fluid my-2">
        <p>
          Continúa a la derecha y pronto llegarás a un saliente con un camino que lleva tanto hacia arriba como hacia
          abajo. Desciende hasta que encuentres otra palanca. Golpea esta y
          abrirás la puerta cercana al hueco del elevador, y un atajo de regreso a la parte inferior de la pantalla.
        </p>
        <img src="/img/Hollow_knight_13_23.jpg" alt="Guia_13_23" class="img-fluid my-2">
        <p>
          Regresa al saliente mencionado, pero esta vez continúa hacia arriba hasta que llegues a una salida en el
          techo. Atraviesa la salida y sube a un saliente al lado de un elevador. Cuando llegues,
          verás un letrero que indica que hay un Banco cerca. Sigue el letrero y sube dos paradas en el elevador, luego
          dirígete a la izquierda.
        </p>
        <img src="/img/Hollow_knight_13_24.jpg" alt="Guia_13_24" class="img-fluid my-2">
        <p>
          Cuando llegues a la cima, notarás la señal inconfundible de que Cornifer está cerca: un trozo de papel
          descansa en el suelo justo a la derecha del elevador,
          atrayéndote en esa dirección. Ve a la izquierda, pero prepárate para luchar por el derecho a reclamar el mapa
          del área.
        </p>
        <img src="/img/Hollow_knight_13_25.jpg" alt="Guia_13_25" class="img-fluid my-2">
        <p>
          Al entrar en la habitación, las puertas a ambos lados te sellan. En esta arena, debes eliminar a un Centinela
          Pesado. Una vez que lo hayas matado,
          aparecerán un Centinela con Lanza y un Centinela Alado. Mátalos a ambos para abrir las puertas y continuar tu
          camino.
        </p>
        <img src="/img/Hollow_knight_13_26.jpg" alt="Guia_13_26" class="img-fluid my-2">
        <p>
          Pasa por el lado izquierdo de la arena, luego salta de la pared hacia la siguiente área, donde escucharás el
          suave tarareo de nuestro viejo amigo, Cornifer.
        </p>
        <img src="/img/Hollow_knight_13_27.jpg" alt="Guia_13_27" class="img-fluid my-2">
        <p>
          Compra su mapa del área por 90 de Geo, luego paga los 150 de Geo en el dispositivo cercano para obtener acceso
          al segundo Banco del área y descansa. A continuación, debes dirigirte al oeste,
          a través de un corredor, y hacia la Estación de Ciervos de la Ciudad de Lágrimas. Deja a Cornifer, ve a la
          izquierda, luego salta y corre hacia la salida izquierda.
        </p>
        <img src="/img/Hollow_knight_13_28.jpg" alt="Guia_13_28" class="img-fluid my-2">
        <h2>Como desbloquear la estacion de ciervo de la Ciudad de Lágrimas</h2>
        <p>
          Continúa por el camino, todo hacia la izquierda, hasta que llegues a otra palanca. Esta desbloquea la puerta
          al inicio de la Ciudad de Lágrimas.
        </p>
        <img src="/img/Hollow_knight_13_29.jpg" alt="Guia_13_29" class="img-fluid my-2">
        <p>
          Después de desbloquear la puerta, continúa subiendo por las plataformas, eliminando a los Centinelas Alados.
          Hay varias entradas a lo largo de la pared derecha, pero querrás llegar a la que está en la cima. Dirígete a
          la entrada superior derecha y entra.
        </p>
        <img src="/img/Hollow_knight_13_30.jpg" alt="Guia_13_30" class="img-fluid my-2">
        <p>
          Elimina al único guardia y recoge la Llave Simple.
        </p>
        <img src="/img/Hollow_knight_13_31.jpg" alt="Guia_13_31" class="img-fluid my-2">
        <p>
          Sal de la habitación y avanza hacia la izquierda. Salta por las plataformas y toma la salida superior
          izquierda hacia la siguiente área. ¡Ten cuidado de no caerte! Los techos de abajo están cubiertos de pinchos
          afilados que no se sienten muy bien.
        </p>
        <img src="/img/Hollow_knight_13_32.jpg" alt="Guia_13_32" class="img-fluid my-2">
        <p>
          Después de entrar en el área de arriba, notarás el letrero que señala la Estación de Ciervos cercana. Ahí es a
          donde necesitas ir, pero primero, debes hacer un par de paradas rápidas.
          Sube y ve a la izquierda. Sigue el camino hacia la izquierda, por encima del hueco, y entra en la siguiente
          área. Allí, encontrarás una sola máquina de peaje. Paga el peaje de 150 de Geo para activar el elevador y
          crear un camino rápido entre la Ciudad de Lágrimas y los Cruces Olvidados.
        </p>
        <img src="/img/Hollow_knight_13_33.jpg" alt="Guia_13_33" class="img-fluid my-2">
        <p>
          Una vez que pagues el peaje, regresa al área anterior, esta vez dirigiéndote a la parte superior derecha. Toma
          la salida del lado derecho y encontrarás un nuevo Banco y la Estación de Ciervos de la Ciudad de Lágrimas.
          Paga los 200 de Geo para desbloquearla.
        </p>
        <h2>Alcanza el Santuario del Alma</h2>
        <p>
          Ahora que la Estación de Ciervos de la ubicación está desbloqueada, es hora de continuar hacia el encuentro
          con el jefe. Tu objetivo es llegar a la entrada del Santuario de Almas, ubicado en la habitación debajo de
          Cornifer.
          Regresa a donde te encontraste con Cornifer y descansa en el Banco para curarte y guardar tu progreso.
        </p>
        <img src="/img/Hollow_knight_13_34.jpg" alt="Guia_13_34" class="img-fluid my-2">
        <p>
          Deja el Banco yendo a la izquierda. Baja y sal por el agujero en el suelo.
        </p>
        <img src="/img/Hollow_knight_13_35.jpg" alt="Guia_13_35" class="img-fluid my-2">
        <p>
          ¡Ten cuidado! El área justo debajo contiene un Centinela Pesado, que se mueve rápido para atacar. Una vez que
          esquives o dejes atrás al insecto, ve a la derecha,
          pasa el elevador y entra por la puerta del extremo derecho. Intenta no distraerte con las ominosas esferas
          blancas.
        </p>
        <img src="/img/Hollow_knight_13_36.jpg" alt="Guia_13_36" class="img-fluid my-2">
        <p>
          En la siguiente habitación está el nuevo enemigo Retorcido de Alma. Este enemigo flotante se teletransporta
          por la habitación, lanzando hechizos al Caballero, lo que te da una vista previa del próximo encuentro con el
          jefe.
          Elimínalo para desbloquear la puerta. Sube por las plataformas flotantes para llegar a la entrada de la
          siguiente área, el Santuario de Almas.
        </p>
        <img src="/img/Hollow_knight_13_37.jpg" alt="Guia_13_37" class="img-fluid my-2">
        <p>
          Tan pronto como entres al Santuario de Almas, ve a la izquierda y toma la salida hacia la siguiente pantalla.
          Pronto escucharás el inconfundible tarareo de nuestro cartógrafo favorito. Sube por el elevador y golpea con
          tu Aguijón la pared dañada del lado izquierdo del hueco del elevador a medida que pasas.
          Sigue en el elevador y golpea la sección del medio de la pared y pronto se romperá, desbloqueando un atajo
          entre el Banco y el Santuario de Almas.
        </p>
        <img src="/img/Hollow_knight_13_38.jpg" alt="Guia_13_38" class="img-fluid my-2">
        <h2>Alcanza el area del Jefe</h2>
        <p>
          Regresa a la derecha, a la primera habitación del Santuario de Almas, a la que entraste después de derrotar al
          primer Retorcido de Alma. Salta sobre el hueco y dirígete hacia el elevador.
        </p>
        <img src="/img/Hollow_knight_13_39.jpg" alt="Guia_13_39" class="img-fluid my-2">
        <p>
          Sube por el elevador. Ten cuidado si decides salir para investigar el misterioso objeto lleno de almas
          blancas. Estos objetos, cuando se rompen, reponen el Alma. Sin embargo, aparece un miembro del nuevo tipo de
          enemigo, los Errores.
          Los Errores son ciertamente espeluznantes, pero son una amenaza principalmente en grandes cantidades. Regresa
          al elevador y asciende.
        </p>
        <img src="/img/Hollow_knight_13_40.jpg" alt="Guia_13_40" class="img-fluid my-2">
        <p>
          Después de llegar a la cima del hueco del elevador, sal y entra en la habitación de arriba. Aquí, te
          enfrentarás a dos Retorcidos de Alma y a los Errores. Despeja la habitación y salta por la pared de la
          izquierda hasta la palanca en el saliente superior.
        </p>
        <img src="/img/Hollow_knight_13_41.jpg" alt="Guia_13_41" class="img-fluid my-2">
        <p>
          Golpéala para desbloquear una puerta sobre ti. Desciende hasta que el camino se desvíe a la izquierda, luego
          toma el elevador de la izquierda para llegar a la puerta ahora abierta.
        </p>
        <h2>Derrota al caballero del alma (Subjefe)</h2>
        <p>
          Entra por la puerta y te enfrentarás al mini-jefe Guerrero de Alma. Cuando entres a la arena, el enemigo
          aparecerá sobre tu cabeza. Aléjate rápidamente con un salto antes de que caiga sobre ti.
          El Guerrero de Alma se teletransporta con frecuencia, usando ataques de embestida, hechizos y un ataque aéreo
          que es muy similar a los que usan los Señores Mantis.
          Cuando veas que el guerrero levanta su arma por encima de su espalda, se está preparando para cargar. Haz un
          poco de espacio y prepárate para saltar por encima del ataque. Si sincronizas el movimiento con un Salto de
          Aguijón,
          podrás infligirle algo de daño en la cabeza mientras avanza por el suelo. A veces, el Guerrero de Alma camina
          después de una embestida, lo que te permite seguir dañándolo con un Salto de Aguijón.
        </p>
        <img src="/img/Hollow_knight_13_42.jpg" alt="Guia_13_42" class="img-fluid my-2">
        <p>
          La esfera que dispara se mueve hacia tu ubicación, pero no te seguirá muy lejos ni con precisión. Salta sobre
          la esfera, y su arco eventualmente la curvará hacia el suelo o el techo.
        </p>
        <img src="/img/Hollow_knight_13_43.jpg" alt="Guia_13_43" class="img-fluid my-2">
        <p>
          Sigue esquivando y atacando, y pronto el Guerrero de Alma caerá. Sal de la arena de batalla por la puerta del
          lado derecho.
          Una vez que entres en la siguiente área, desciende hasta el fondo y toma la salida de la izquierda para
          encontrar una palanca. Golpéala para desbloquear un atajo hacia la parte inferior.
        </p>
        <img src="/img/Hollow_knight_13_44.jpg" alt="Guia_13_44" class="img-fluid my-2">
        <p>
          Vuelve a pasar por la puerta a la derecha de la palanca y asciende todo lo que puedas. Salta por el agujero en
          el suelo en la esquina superior derecha y golpea la palanca de abajo, desbloqueando una puerta hacia el
          elevador en el lado derecho.
        </p>
        <img src="/img/Hollow_knight_13_45.jpg" alt="Guia_13_45" class="img-fluid my-2">
        <h2>Como encontrar el amuleto Tuercehechizos</h2>
        <p>
          Toma el elevador hasta la cima y avanza hasta que llegues a una habitación con un hueco en el suelo a la
          derecha de una puerta cerrada. Desciende por el agujero y avanza a la siguiente habitación, que está llena de
          Retorcidos de Alma.
        </p>
        <img src="/img/Hollow_knight_13_46.jpg" alt="Guia_13_46" class="img-fluid my-2">
        <p>
          Sube por las plataformas flotantes y ve hacia la izquierda. Continúa hasta llegar a la cima, donde puedes
          activar la palanca que abre la puerta cerrada.
        </p>
        <img src="/img/Hollow_knight_13_47.jpg" alt="Guia_13_47" class="img-fluid my-2">
        <p>
          Dirígete a la izquierda por el corredor cerca de la cima, pero detente justo antes de salir por la puerta.
          Cerca de la salida hay un agujero en el techo. Salta y usa tu Garra de Mantis para trepar a la habitación de
          arriba.
        </p>
        <img src="/img/Hollow_knight_13_48.jpg" alt="Guia_13_48" class="img-fluid my-2">
        <p>
          En esta área, serás asaltado por Errores, así que usa esto como una oportunidad para recolectar Alma y
          curarte. Luego dirígete a la derecha hacia la pequeña y difícil de ver alcoba.
        </p>
        <img src="/img/Hollow_knight_13_49.jpg" alt="Guia_13_49" class="img-fluid my-2">
        <p>
          Recoge el poderoso Talismán Retorcido de Hechizos, que reduce el costo de tus hechizos.
        </p>
        <img src="/img/Hollow_knight_13_50.jpg" alt="Guia_13_50" class="img-fluid my-2">
        <p>
          Regresa al Banco para equipar este potente talismán si lo deseas, o vuelve a bajar y ve a la izquierda para
          encontrarte con el próximo jefe, el Maestro de Almas.
        </p>`
  }, 
    {
    eventKey: '13', 
    title: 'El maestro de almas',
    content:`<p>
          El Maestro del Alma se encuentra en la parte superior del Santuario de Almas en Hollow Knight, una sub-área en
          la sección norte de la Ciudad de Lágrimas.
        </p>
        <img src="/img/Hollow_knight_14_1.jpg" alt="Guia_14_1" class="img-fluid my-2">
        <h2>Como derrotar al Maestro del Alma</h2>
        <p>
          El Maestro del Alma es un encuentro con un jefe que tiene dos fases. El enemigo usa cuatro ataques
          principales, uno de los cuales tiene el potencial de incluir una animación de engaño. Para vencer al Maestro
          del Alma en Hollow Knight,
          debes tener una constante conciencia de la situación y tomar decisiones rápidamente para evitar recibir daño
          mientras el jefe se mueve por la pantalla.
        </p>
        <img src="/img/Hollow_knight_14_2.jpg" alt="Guia_14_2" class="img-fluid my-2">
        <h2>Fase 1</h2>
        <p>
          El ataque más sencillo que utiliza el Maestro del Alma consiste en flotar de un lado a otro de la arena. Para
          contrarrestarlo, salta y esquiva, asestando un golpe descendente con tu Aguijón a medida que pasas sobre él.
          Si tienes dificultades con el tiempo
          (y especialmente si estás usando los Talismán Retorcido de Hechizos, Atrapaalmas y/o Piedra de Chamán),
          considera lanzar Espíritu Vengativo mientras el Maestro del Alma se acerca, y luego salta sobre el jefe.
        </p>
        <img src="/img/Hollow_knight_14_3.jpg" alt="Guia_14_3" class="img-fluid my-2">
        <p>
          En una versión modificada de este ataque, el jefe invocará cuatro orbes naranjas que girarán a su alrededor
          mientras cruza de un lado a otro de la arena. Mantente cerca y al mismo ritmo que el jefe, esquivando los
          orbes que giran lentamente mientras se mueve,
          y podrás darle varios golpes con tu Aguijón durante este tiempo.
          Una vez que llegue al otro lado, el jefe desaparecerá y los orbes viajarán de regreso a través de la pantalla,
          así que salta a través de los orbes mientras regresan para evitar recibir daño. Si te mueves a la esquina
          opuesta a donde se moverán los orbes,
          puedes aprovechar ese momento para curarte si lo necesitas.
        </p>
        <img src="/img/Hollow_knight_14_4.jpg" alt="Guia_14_4" class="img-fluid my-2">
        <p>
          El Maestro del Alma también se quedará flotando en varios puntos de la pantalla y lanzará pequeños orbes que
          te persiguen. Para contrarrestar este ataque, salta sobre el orbe a medida que se acerca y acorta la
          distancia, atacando tantas veces como puedas
          antes de que el Maestro del Alma se teletransporte para comenzar otro ataque. Lanzar Espíritu Vengativo
          mientras saltas sobre el orbe también es una buena forma de infligir daño adicional.
          Si tienes problemas para esquivar los orbes, muévete al otro lado de la habitación cuando comience el ataque.
          Salta sobre los orbes a medida que se acercan. Los orbes se disipan cuando tocan el entorno físico.
          Al poner tu espalda contra la pared, puedes destruir los orbes saltando sobre ellos, forzándolos a estrellarse
          contra la pared detrás de ti y desaparecer.
        </p>
        <img src="/img/Hollow_knight_14_5.jpg" alt="Guia_14_5" class="img-fluid my-2">
        <p>
          El Maestro del Alma también tiene un ataque de embestida contra el suelo. Este ataque es rápido y genera dos
          ondas de choque, que viajan rápidamente por el suelo en ambas direcciones. El jefe también puede
          teletransportarse en medio del ataque para cambiar la ubicación del golpe,
          así que quédate en el suelo y corre para apartarte hasta que el ataque caiga, luego salta y corre por encima
          de la onda de choque.
        </p>
        <img src="/img/Hollow_knight_14_6.jpg" alt="Guia_14_6" class="img-fluid my-2">
        <p>
          Después de recibir cierta cantidad de daño, el Maestro del Alma se desinflará y se detendrá, jadeando en el
          aire. Esto sucederá varias veces a lo largo de la pelea y es un excelente momento para curar tantas Máscaras
          de salud como puedas. Si tienes tiempo,
          también puedes intentar colar un ataque adicional. Utiliza estas estrategias y pronto terminarás la Fase Uno
          del encuentro. Cuando esto suceda, el Maestro del Alma explotará y dejará un Hechizo flotando en el aire. Si
          intentas reclamarlo, el Maestro del Alma regresará, atravesando el suelo e iniciando la Fase Dos.
        </p>
        <img src="/img/Hollow_knight_14_7.jpg" alt="Guia_14_7" class="img-fluid my-2">
        <h2>Fase 2</h2>
        <p>
          Es probable que el Maestro del Alma comience la Fase Dos con una ráfaga de ataques de embestida contra el
          suelo, uno tras otro. Esquiva cada uno y mantente en el centro de la pantalla para tener espacio para moverte
          en cualquier dirección. A diferencia de la Fase Uno,
          los ataques terrestres en la Fase Dos no emiten ondas de choque. Puedes esquivar sin necesidad de saltar.
        </p>
        <img src="/img/Hollow_knight_14_8.jpg" alt="Guia_14_8" class="img-fluid my-2">
        <p>
          Mantente con vida y el Maestro del Alma dejará de lanzarse en picada y se detendrá en un lado de la pantalla
          para comenzar a invocar orbes que te persiguen. Usa esta oportunidad para acortar la distancia y asestar
          tantos ataques como sea posible. De nuevo,
          si tienes problemas con este movimiento, pon tu espalda contra la pared y salta sobre los orbes para
          destruirlos. Repite el proceso para derrotar al Maestro del Alma.
        </p>
        <img src="/img/Hollow_knight_14_9.jpg" alt="Guia_14_9" class="img-fluid my-2">
        <h2>Recompensas por derrotar al Maestro del Alma</h2>
        <p>
          Una vez que hayas derrotado al jefe Maestro del Alma en Hollow Knight, desbloquearás el Hechizo Zancada
          Desoladora como recompensa.
        </p>
        <img src="/img/Hollow_knight_14_10.jpg" alt="Guia_14_10" class="img-fluid my-2">
        <p>
          Una vez que hayas dejado al Maestro del Alma a descansar, tu siguiente parada es los
              Canales Reales.
        </p>`
  }, 
    {
    eventKey: '14', 
    title: 'Canales Reales',
    content:`<p>
          Los Canales Reales son una ubicación que se encuentra debajo de la Ciudad de Lágrimas en Hollow Knight. Esta
          guía cubre cómo encontrar los Canales Reales en Hollow Knight,
          cómo navegar por la nueva área y cómo localizar el encuentro con el jefe, que es sorprendentemente maloliente.
        </p>
        <img src="/img/Hollow_knight_15_1.jpg" alt="Guia_15_1" class="img-fluid my-2">
        <h2>Como llegar a los Canales Reales</h2>
        <p>
          Ahora que has obtenido el Hechizo Zancada Desoladora, puedes llegar al área de Picos de Cristal. Sin embargo,
          antes de eso, puedes usar la Llave Simple que conseguiste en el Santuario de Almas para viajar a través de los
          Canales Reales
          y desbloquear el resto de la Ciudad de Lágrimas.
          Comenzando desde la arena del jefe Maestro del Alma, sal por la puerta que está en lo alto de la pared
          izquierda.
        </p>
        <img src="/img/Hollow_knight_15_2.jpg" alt="Guia_15_2" class="img-fluid my-2">
        <p>
          Ve hacia la izquierda y salta por el agujero
        </p>
        <img src="/img/Hollow_knight_15_3.jpg" alt="Guia_15_3" class="img-fluid my-2">
        <p>
          Continúa hasta que te encuentres con una lámina de cristal blanco y agrietado en el suelo. Colócate sobre el
          cristal, salta y usa Zancada Desoladora para atravesarlo.
        </p>
        <img src="/img/Hollow_knight_15_4.jpg" alt="Guia_15_4" class="img-fluid my-2">
        <p>
          Aterrizarás en un pozo lleno de Errores, así que elimínalos, luego usa Zancada Desoladora para atravesar el
          siguiente cristal en el suelo. Vuelve a subir por el hueco con un salto de pared, tomando la primera salida a
          la izquierda.
          A medida que te acercas al gran Tótem de Alma al final de la fila, el suelo dañado temblará bajo tus pies.
          Párate sobre él, luego usa Zancada Desoladora para romper el suelo.
        </p>
        <img src="/img/Hollow_knight_15_5.jpg" alt="Guia_15_5" class="img-fluid my-2">
        <p>
          Aterrizarás en otra área llena de Errores, así que elimínalos y sube por las plataformas de la derecha. Corre
          y salta por la pared para llegar al saliente, luego golpea la palanca para abrir la puerta al área que acabas
          de dejar.
        </p>
        <img src="/img/Hollow_knight_15_6.jpg" alt="Guia_15_6" class="img-fluid my-2">
        <p>
          Cuando estés listo, trepa por la pared a la derecha de la palanca y sal de la habitación por la puerta de
          arriba.
        </p>
        <img src="/img/Hollow_knight_15_7.jpg" alt="Guia_15_7" class="img-fluid my-2">
        <p>
          Pasa por debajo del cuerpo del Maestro del Alma, pasa por otro Tótem de Alma y entra a la siguiente área a la
          derecha. Sube a la parte superior del área, luego usa Zancada Desoladora para atravesar el cristal
          y ve a la derecha. Si necesitas Alma, rompe el contenedor de Alma a la izquierda del cristal agrietado.
        </p>
        <img src="/img/Hollow_knight_15_8.jpg" alt="Guia_15_8" class="img-fluid my-2">
        <p>
          Usa Zancada Desoladora para atravesar el siguiente cristal que veas y llegarás al área donde luchaste contra
          el mini-jefe Guerrero de Alma. Toma el elevador a la izquierda. Una vez que bajes,
          ve a la derecha y toma el siguiente elevador hacia abajo. Dirígete a la derecha, salta del saliente y toma la
          salida en la parte inferior de la pantalla.
          Continúa bajando por el edificio hasta que llegues a la tienda de Buscador de Reliquias Lemm. Si quieres,
          puedes vender cualquier reliquia que hayas recolectado. Cuando estés listo, continúa bajando a través del
          elevador cercano.
        </p>
        <img src="/img/Hollow_knight_15_9.jpg" alt="Guia_15_9" class="img-fluid my-2">
        <p>
          Después de llegar a la planta baja, sal del elevador y ve a la derecha. En unos pocos pasos, encontrarás un
          mecanismo extraño. Con la Llave Simple que encontraste en tu camino hacia el Maestro del Alma, y la Linterna
          de Lumélula de la
          tienda de Sly en Bocasucia (1800 de Geo), estás preparado para descender a los Canales Reales. Si no tienes
          estos objetos, puedes regresar a Bocasucia y comprarlos en la tienda de Sly (asumiendo que no le hayas
          comprado la Llave Simple a Sly).
        </p>
        <img src="/img/Hollow_knight_15_10.jpg" alt="Guia_15_10" class="img-fluid my-2">
        <h2>Como conseguir el mapa de los Canales Reales</h2>
        <p>
          Para encontrar el mapa de los Canales Reales y la ubicación de Cornifer en Hollow Knight, comienza
          dirigiéndote a la izquierda y baja tan pronto como entres en los Canales Reales, luego toma la salida del
          suelo.
          Si quieres recargar Alma, usa el pequeño Tótem de Alma que está justo encima del agujero en el suelo.
        </p>
        <img src="/img/Hollow_knight_15_11.jpg" alt="Guia_15_11" class="img-fluid my-2">
        <p>
          Al final del descenso, verás un tosco dibujo de un Banco en la pared. El dibujo apunta hacia la izquierda, así
          que dirígete en esa dirección.
        </p>
        <img src="/img/Hollow_knight_15_12.jpg" alt="Guia_15_12" class="img-fluid my-2">
        <p>
          Continúa siguiendo las señales, descendiendo hasta el fondo de un hueco. El último dibujo del Banco apunta
          hacia el suelo, donde deberías ver grietas. Usa Zancada Desoladora para atravesar el suelo.
        </p>
        <img src="/img/Hollow_knight_15_13.jpg" alt="Guia_15_13" class="img-fluid my-2">
        <p>
          En la parte inferior está el Banco. ¡Afortunadamente, las pinturas decían la verdad! Tómate un respiro para
          curarte y guardar tu progreso.
        </p>
        <img src="/img/Hollow_knight_15_14.jpg" alt="Guia_15_14" class="img-fluid my-2">
        <p>
          Dirígete por un estrecho pasaje a la derecha del banco y golpea la barrera de madera al final para desbloquear
          un atajo. Luego, regresa al Banco y usa el salto de pared en el hueco que está encima para volver al lugar
          donde rompiste el suelo.
        </p>
        <img src="/img/Hollow_knight_15_15.jpg" alt="Guia_15_15" class="img-fluid my-2">
        <p>
          Dirígete a la izquierda, manteniéndote alerta por el Volador que se esconde en el techo. Salta a través de las
          plataformas elevadas hasta que llegues a un saliente a la izquierda, donde verás uno de los característicos
          trozos de papel de Cornifer.
          Sigue el rastro de papel, que te llevará a más habitaciones.
        </p>
        <img src="/img/Hollow_knight_15_16.jpg" alt="Guia_15_16" class="img-fluid my-2">
        <p>
          Pronto entrarás en una habitación con huecos en el suelo, junto con un enjambre de Hwurmp que se inflan, un
          nuevo enemigo pasivo. Ten cuidado de permanecer en las plataformas y continúa hacia la izquierda hasta que
          llegues a la salida del lado izquierdo.
          Recoge el cofre de Geo en tu camino.
        </p>
        <img src="/img/Hollow_knight_15_17.jpg" alt="Guia_15_17" class="img-fluid my-2">
        <p>
          La siguiente habitación es un área grande llena de Hwurmp. Todas las puertas están cerradas y no se abrirán
          hasta que no quede un solo enemigo. Tómate tu tiempo y revienta a todos los insectos perezosos.
        </p>
        <img src="/img/Hollow_knight_15_18.jpg" alt="Guia_15_18" class="img-fluid my-2">
        <p>
          Una vez que todos los enemigos estén muertos, la puerta cerca de la parte inferior se abrirá, permitiéndote
          avanzar. Entra y sube hasta una palanca. Golpéala para desbloquear la puerta de arriba.
        </p>
        <img src="/img/Hollow_knight_15_19.jpg" alt="Guia_15_19" class="img-fluid my-2">
        <p>
          Usa las paredes a tu izquierda para subir al pasillo de arriba, donde por fin te encontrarás con Cornifer.
          Cómprale el mapa del área por 75 de Geo. Continúa a la derecha y caerás a través del suelo débil.
        </p>
        <img src="/img/Hollow_knight_15_20.jpg" alt="Guia_15_20" class="img-fluid my-2">
        <h2>Progreso al Este</h2>
        <p>
          Ahora que tienes el mapa, tu siguiente paso es encontrar al jefe del área. La bestia te espera en el lado este
          de los Canales Reales, prácticamente en el lado opuesto a la habitación de Cornifer.
        </p>
        <img src="/img/Hollow_knight_15_21.jpg" alt="Guia_15_21" class="img-fluid my-2">
        <p>
          Ahora que tienes el mapa, tu siguiente paso es encontrar al jefe del área. La bestia te espera en el lado este
          de los Canales Reales, prácticamente en el lado opuesto a la habitación de Cornifer.
        </p>
        <img src="/img/Hollow_knight_15_22.jpg" alt="Guia_15_22" class="img-fluid my-2">
        <p>
          Puedes ir hacia allí ahora, pero hay algunos desvíos que deberías tomar en el camino.
          Ve hacia el este hasta que entres en la habitación a la derecha de Cornifer. Detente cuando llegues al primer
          hueco en el suelo. Busca un trozo de papel en el saliente. Desciende al agua turbia de abajo.
          ¡No te preocupes! El suelo de la habitación no está cubierto de ácido o lodo de mal olor, pero puedes
          encontrar un par de objetos importantes.
        </p>
        <img src="/img/Hollow_knight_15_23.jpg" alt="Guia_15_23" class="img-fluid my-2">
        <p>
          Regresa al agua y continúa nadando hacia el este. Es una natación larga y lenta, y los enemigos intentarán
          atacarte mientras te mojas los dedos de los pies. Entra en la siguiente habitación, que es estrecha, oscura y
          contiene algunos Hwurmp.
          Continúa nadando hacia el este hasta que llegues a la siguiente pared a tu derecha, justo antes del Banco.
          Regresa al Banco, luego ve a la derecha y mantente en el camino de arriba. Sigue hasta llegar al extremo
          derecho. Ten cuidado al lidiar con los nuevos enemigos Flukemon.
        </p>
        <img src="/img/Hollow_knight_15_24.jpg" alt="Guia_15_24" class="img-fluid my-2">
        <p>
          Estos enemigos con forma de gusano no mueren incluso después de que los cortes por la mitad. La parte superior
          vuelve a la vida y ataca. Poco después, la mitad inferior desarrolla dientes y hace lo mismo. Tendrás que
          matarlo tres veces antes de que se quede muerto.
          Avanza hacia la derecha por el camino superior hasta que notes que el entorno comienza a volverse un poco...
          asqueroso. Ten en cuenta que los Canales Reales alguna vez fueron una poderosa cloaca.
        </p>
        <img src="/img/Hollow_knight_15_25.jpg" alt="Guia_15_25" class="img-fluid my-2">
        <p>
          Continúa a la derecha y dirígete al piso de arriba a través de un agujero en el techo cerca del final de la
          habitación.
        </p>
        <img src="/img/Hollow_knight_15_26.jpg" alt="Guia_15_26" class="img-fluid my-2">
        <p>
          En este punto, empezarás a escuchar las risas de uno de los jefes más absurdos de Hollow Knight. Continúa por
          el camino y pronto te encontrarás con el jefe con el mejor nombre del juego: el Defensor del
              Estiércol.
        </p>`
  }, 
    {
    eventKey: '15', 
    title: 'Defensor del estiércol',
    content:`<p>
          Puedes encontrar al Defensor del Estiércol en los Canales Reales, en una habitación que se encuentra en el
          extremo más oriental de la ubicación.
        </p>
        <img src="/img/Hollow_knight_16_1.jpg" alt="Guia_16_1" class="img-fluid my-2">
        <h2>Como derrotar al Defensor del Estiércol</h2>
        <p>
          Uno de los ataques más comunes del Defensor del Estiércol es uno en el que amasa montones de estiércol y los
          lanza al Caballero.
        </p>
        <img src="/img/Hollow_knight_16_2.jpg" alt="Guia_16_2" class="img-fluid my-2">
        <p>
          Estas bolas rebotarán en las paredes, pero no tienen capacidad de seguimiento, por lo que esquivarlas no es
          demasiado difícil. Puedes usar tu arma para golpear las bolas de estiércol y alejarlas si se acercan
          demasiado.
        </p>
        <img src="/img/Hollow_knight_16_3.jpg" alt="Guia_16_3" class="img-fluid my-2">
        <p>
          También puedes acortar la distancia y atacar al jefe durante la preparación o después de que haya lanzado el
          proyectil, pero no te quedes demasiado tiempo o podrías recibir daño de ataques subsiguientes.
        </p>
        <img src="/img/Hollow_knight_16_4.jpg" alt="Guia_16_4" class="img-fluid my-2">
        <p>
          El Defensor del Estiércol puede lanzar varios de estos proyectiles y luego hacerse una bola y rebotar por la
          habitación. Durante este tiempo, aún puede recibir daño con ataques de Aguijón y Hechizos.
          Al igual que con las bolas de estiércol, puedes golpear al Defensor del Estiérculo cuando está hecho una bola
          para empujarlo, infligiendo daño en todo momento. Intenta ponerte debajo de él cuando esté en forma de bola y
          ataca hacia arriba con tu Aguijón, y sigue golpeándolo como si estuvieras rebotando una pelota de voleibol.
        </p>
        <img src="/img/Hollow_knight_16_5.jpg" alt="Guia_16_5" class="img-fluid my-2">
        <p>
          El Defensor del Estiércol ocasionalmente se entierra en el suelo para uno de dos tipos de ataque. Para el
          primer ataque, se mueve de un lado de la arena al otro como un nadador campeón, saliendo a la superficie
          regularmente antes de sumergirse de nuevo.
          Para contrarrestar este movimiento, salta sobre el jefe y luego golpea con tu Aguijón mientras lo sigues de
          cerca. Intenta usar el Salto de Aguijón mientras sigues la dirección del Defensor del Estiércol. Puedes
          infligirle múltiples golpes de esta manera.
        </p>
        <img src="/img/Hollow_knight_16_6.jpg" alt="Guia_16_6" class="img-fluid my-2">
        <p>
          En el segundo ataque, el Defensor del Estiércol se queda bajo tierra, nadando de un lado a otro. De vez en
          cuando, salta desde el suelo y se eleva en el aire, disparando cuatro bolas de estiércol, dos a cada lado.
        </p>
        <img src="/img/Hollow_knight_16_7.jpg" alt="Guia_16_7" class="img-fluid my-2">
        <p>
          Para contrarrestar esto, mantente cerca del jefe que se está enterrando, luego hazte a un lado una vez que
          deje de moverse. Golpéalo con tu Aguijón a medida que emerge y una vez más cuando se acerque al suelo. También
          puedes usar Zancada Desoladora,
          el Hechizo obtenido al derrotar al Maestro del Alma, para obligar al Defensor del Estiércol a salir del suelo.
          Hacerlo lo dejará de espaldas, aturdido por un segundo. Aprovecha este momento para infligirle daño rápido.
          Ten en cuenta que Zancada Desoladora solo parece funcionar cuando el Defensor del Estiércol está completamente
          sumergido.
        </p>
        <img src="/img/Hollow_knight_16_8.jpg" alt="Guia_16_8" class="img-fluid my-2">
        <p>
          Después de recibir suficiente daño, el Defensor del Estiércol se volteará de espaldas, dándote una breve
          oportunidad. Usa este momento para curarte, o para colar un ataque adicional si no necesitas curación.
        </p>
        <img src="/img/Hollow_knight_16_9.jpg" alt="Guia_16_9" class="img-fluid my-2">
        <p>
          El Defensor del Estiércol también puede golpearse el tórax y rugir antes de entrar en un breve frenesí y
          realizar repetidos ataques de enterramiento en rápida sucesión. Mantén la calma y sigue estas estrategias,
          y pronto pondrás fin a este "jefe de mierda" y reclamarás el Talismán Escudo del Defensor como recompensa.
          El Escudo del Defensor, cuando se equipa (por una Muesca), provoca que una nube de gas tóxico se extienda
          alrededor del Caballero. Los enemigos que toquen la nube recibirán daño.
          Usar este Talismán también desbloquea opciones de diálogo adicionales con ciertos NPC.
        </p>
        <img src="/img/Hollow_knight_16_10.jpg" alt="Guia_16_10" class="img-fluid my-2">
        <p>
          Con eso hecho, la siguiente parada en tu viaje son las Tierras de descanso.
        </p>`
  }, 
    {
    eventKey: '16', 
    title: 'Tierras de descanso',
    content:`<p>
          La siguiente ubicación que deberías visitar en Hollow Knight son los Acantilados Aulladores, pero para llegar
          allí necesitas regresar a la Ciudad de Lágrimas. Para llegar a los Acantilados Aulladores en Hollow Knight,
          ve a la derecha y golpea la palanca en la plataforma elevada después de derrotar al Defensor del Estiércol y
          conseguir el Escudo del Defensor.
        </p>
        <img src="/img/Hollow_knight_17_1.jpg" alt="Guia_17_1" class="img-fluid my-2">
        <p>
          A continuación, baja, muévete por debajo de la plataforma y usa Zancada Desoladora en el suelo que se
          desmorona justo debajo.
        </p>
        <img src="/img/Hollow_knight_17_2.jpg" alt="Guia_17_2" class="img-fluid my-2">
        <p>
          Después de llegar al fondo, ve a la derecha y recoge el Ídolo de Rey, que se puede vender al Buscador de
          Reliquias Lemm por la asombrosa cantidad de 800 de Geo.
        </p>
        <img src="/img/Hollow_knight_17_3.jpg" alt="Guia_17_3" class="img-fluid my-2">
        <p>
          Vuelve a subir por el hueco y destruye el soporte de madera a la derecha. Cuando esté hecho, atraviesa el
          agujero y entra en la siguiente área.
          Asciende por el hueco, haciendo salto de pared contra la pared del lado izquierdo. En la cima, corre hacia el
          saliente en la esquina superior derecha de la pantalla y entra por la puerta para regresar a la Ciudad de
          Lágrimas.
        </p>
        <img src="/img/Hollow_knight_17_4.jpg" alt="Guia_17_4" class="img-fluid my-2">
        <p>
          Una vez dentro, salta al saliente de la izquierda y continúa a la siguiente pantalla. Elimina a los enemigos
          en esta área mientras avanzas, tomando la salida de la izquierda.
        </p>
        <img src="/img/Hollow_knight_17_5.jpg" alt="Guia_17_5" class="img-fluid my-2">
        <p>
          En la siguiente area encontraras una palanca, golpéala para abrir una puerta a la seccion anterior de la
          Ciudad de Lágrimas.
        </p>
        <img src="/img/Hollow_knight_17_6.jpg" alt="Guia_17_6" class="img-fluid my-2">
        <p>
          Dirígete a la izquierda y te encontrarás con Hornet una vez más. Ella hablará del sacrificio que lo sustenta y
          sugerirá al jugador que busque la "Tumba en Ceniza".
          Llegaremos allí lo suficientemente pronto, pero por ahora, inspecciona la estatua, que tiene la imagen del
          titular Hollow Knight. Esto también añadirá el Templo del Huevo Negro a tu mapa, representado por la cabeza
          del Hollow Knight.
        </p>
        <img src="/img/Hollow_knight_17_7.jpg" alt="Guia_17_7" class="img-fluid my-2">
        <p>
          Deja la fuente y dirígete a la derecha, continúa pasando el camino a los Canales Reales, dirigiéndote hacia la
          Estación del Rey. En el camino, deberías hacer una o tres paradas rápidas para recoger objetos y botín.
          Sigue las plataformas en la Estación del Rey hacia arriba y toma la salida en la plataforma del medio del lado
          derecho para encontrar un Banco y la segunda Estación de Vaguamundo en la Ciudad de Lágrimas.
          Paga los 300 de Geo para desbloquear la estación. Cuando estés listo, ve a la izquierda y regresa a la
          Estación del Rey. Asciende las plataformas hasta llegar a la cima, donde encontrarás una salida en el techo.
          Sube para llegar al área de arriba.
        </p>
        <img src="/img/Hollow_knight_17_8.jpg" alt="Guia_17_8"
          class="img-fluid my-2">
        <h2>Como conseguir el Aguijon Onirico</h2>
        <p>
          Sigue el camino hacia arriba y usa el primer elevador, luego ve a la derecha y toma el segundo elevador hacia
          arriba. Ve a la izquierda hasta que alcances la salida y atraviesala.
        </p>
        <img src="/img/Hollow_knight_17_9.jpg" alt="Guia_17_9" class="img-fluid my-2">
        <p>
          Toma el enorme elevador hacia arriba, luego ve a la izquierda y usa las plataformas para llegar a la palanca
          en la esquina superior izquierda de la habitación. Salta a través de la abertura y entra a la siguiente área
        </p>
        <img src="/img/Hollow_knight_17_10.jpg" alt="Guia_17_10" class="img-fluid my-2">
        <p>
          Una vez arriba, te encontrarás bajo una plataforma cubierta de tumbas. Interactuar con la tumba del centro te
          da el mensaje: "Malditos sean aquellos que se vuelvan contra el Rey". Misterioso. Puedes resolver este
          acertijo más tarde cuando regreses con el Aguijón Onírico.
        </p>
        <img src="/img/Hollow_knight_17_11.jpg" alt="Guia_17_11" class="img-fluid my-2">
        <p>
          Dirígete a la derecha y pronto llegarás a una plataforma con tres grandes obeliscos sobre ella. Sube a la
          plataforma y quedarás atrapado en una burbuja de luz. Unas voces le hablarán al Caballero antes de
          transferirlo al reino onírico.
        </p>
        <img src="/img/Hollow_knight_17_12.jpg" alt="Guia_17_12" class="img-fluid my-2">
        <p>
          Pronto, una figura resplandeciente aparece, creando plataformas flotantes para el Caballero. Síguelas hacia la
          derecha hasta que llegues al final, luego habla con la figura para obtener el Aguijón Onírico.
        </p>
        <img src="/img/Hollow_knight_17_13.jpg" alt="Guia_17_13" class="img-fluid my-2">
        <h2>Explora las Tierras de descanso</h2>
        <img src="/img/Hollow_knight_17_14.jpg" alt="Guia_17_14" class="img-fluid my-2">
        <p>
          Luego despertarás y te encontrarás con un nuevo personaje, el Vidente. El Vidente explica que pueden potenciar
          tu nuevo Aguijón Onírico si les traes Esencia, una sustancia que se puede recolectar de las pequeñas plantas
          enrolladas
          (llamadas Raíces Susurrantes) esparcidas por todo Hallownest. Sal y descubrirás que has sido llevado al área
          de los Acantilados Aulladores.
        </p>
        <img src="/img/Hollow_knight_17_15.jpg" alt="Guia_17_15" class="img-fluid my-2">
        <p>
          Baja un nivel y encontrarás tu primera Raíz Susurrante. Golpéala con el Aguijón Onírico y esparcirá pequeños
          orbes por el área.
        </p>
        <img src="/img/Hollow_knight_17_16.jpg" alt="Guia_17_16" class="img-fluid my-2">
        <p>
          Rastréalos todos y absorbe su Esencia. Cuando termines, vuelve a subir y aterriza en el segundo saliente de
          arriba hacia abajo en el lado izquierdo. Continúa a la izquierda y entrarás en una alcoba secreta que contiene
          el Talismán Escudo de Sueño.
        </p>
        <img src="/img/Hollow_knight_17_17.jpg" alt="Guia_17_17" class="img-fluid my-2">
        <p>
          Regresa al hueco central, luego desciende hasta el fondo y ve a la derecha. Salta sobre la tumba, luego usa
          Zancada Desoladora para atravesar y entrar en las cuevas debajo de los Acantilados Aulladores.
        </p>
        <img src="/img/Hollow_knight_17_18.jpg" alt="Guia_17_18" class="img-fluid my-2">
        <p>
          Dirígete a la derecha y golpea la pared dañada. Continúa hacia la derecha y sigue el camino. Detente cuando
          llegues a una pared. Aquí, al golpear la parte inferior de la pared, se revela una superficie rompible.
          ¡Ábrete paso a través de ella!
        </p>
        <img src="/img/Hollow_knight_17_19.jpg" alt="Guia_17_19" class="img-fluid my-2">
        <p>
          Más allá de la pared rota hay un nuevo tipo de enemigo llamado Cáscara Sepultada. Estos enemigos pueden
          parecer lentos y perezosos, pero se mueven engañosamente rápido con un corte hacia adelante si te acercas
          demasiado.
          Para vencerlos, camina hacia ellos, golpéalos y luego aléjate rápidamente. Repite este proceso hasta que
          prevalezcas.
        </p>
        <img src="/img/Hollow_knight_17_20.jpg" alt="Guia_17_20" class="img-fluid my-2">
        <p>
          Continúa por el túnel, rompiendo las paredes dañadas hasta que llegues al extremo derecho. Sigue moviéndote
          para evitar los fosos con pinchos a medida que avanzas hacia la derecha, y finalmente,
          encontrarás el extremadamente poderoso Talismán Devoraalmas, que aumenta en gran medida la cantidad de Alma
          que se recolecta al golpear a los enemigos con el Aguijón.
        </p>
        <img src="/img/Hollow_knight_17_21.jpg" alt="Guia_17_21" class="img-fluid my-2">
        <p>
          Dirígete a la izquierda y avanza por el resto del área, rompiendo el soporte de madera en el extremo
          izquierdo. Esto abrirá un camino que lleva al elevador de la Ciudad de Lágrimas.
          En este punto, has hecho todo lo que puedes en los Acantilados Aulladores. Puedes regresar a Bocasucia o a los
          Cruces Olvidados. Ambas ubicaciones son a donde debes dirigirte antes de ir a la siguiente área, Picos de Cristal.
        </p>`
  }, 
    {
    eventKey: '17', 
    title: 'Picos de Cristal',
    content:`<h2>Como llegar a los Picos de Cristal</h2>
        <p>
          Picos de Cristal hace honor a su nombre, ya que el área se encuentra al este de Bocasucia y es el punto más
          alto del juego. ¿Recuerdas haber conocido a Myla, el insecto minero, cuando exploraste por primera vez los
          Cruces Olvidados?
          Pasando ella en el túnel está la entrada a Picos de Cristal, a la que no podías acceder sin Zancada
          Desoladora. Ahora puedes. Después de que hayas terminado tus asuntos en Bocasucia, salta por el pozo para
          entrar a los Cruces Olvidados.
          Dirígete a la derecha hasta que llegues a la primera salida hacia abajo y avanza hasta que encuentres un
          camino que se ramifica. Hay una entrada a la derecha y un camino sinuoso que baja, que conduce a la mina. Baja
          y entra en la mina,
          marcada por una arcada de madera.
        </p>
        <img src="/img/Hollow_knight_18_1.jpg" alt="Guia_18_1" class="img-fluid my-2">
        <p>
          Toma el camino de arriba hasta que llegues a un elevador. Súbete en él hasta el nivel más alto, luego continúa
          hacia la derecha y llegarás a una habitación con un grupo de tierra oscura que retumba cuando caminas sobre
          ella.
          Salta y usa Zancada Desoladora para entrar al área de Picos de Cristal.
        </p>
        <img src="/img/Hollow_knight_18_2.jpg" alt="Guia_18_2" class="img-fluid my-2">
        <h2>Donde encontrar el mapa de Los Picos de Cristal</h2>
        <img src="/img/Hollow_knight_18_3.jpg" alt="Guia_18_3" class="img-fluid my-2">
        <p>
          Dirígete hacia abajo a la siguiente área, luego ve a la izquierda. Continúa a la izquierda hasta que llegues a
          una puerta de peaje. Paga los 50 de Geo para desbloquear el camino de regreso a los Cruces Olvidados. Después
          de desbloquear la puerta,
          ve a la izquierda y baja por el agujero en el suelo donde verás dos grandes insectos con cristales rosados en
          la espalda. Sus cuartos traseros están protegidos del daño, lo que significa que solo puedes atacarlos con tu
          Aguijón desde el frente.
          Aún así recibirán daño de Espíritu Vengativo/Alma Sombría sin importar en qué dirección estén. Mata a los dos
          Espaldares Brillantes, ve a la derecha y luego destruye el soporte de madera. Continúa a la derecha para
          regresar al área anterior.
          Baja y ve a la derecha, cruzando las cintas transportadoras hasta que llegues a la siguiente sección de suelo
          sólido.
        </p>
        <img src="/img/Hollow_knight_18_4.jpg" alt="Guia_18_4" class="img-fluid my-2">
        <p>
          Entra en la habitación a la derecha de las cintas transportadoras y baja al piso inferior. Elimina al Minero
          Coraza y busca un letrero que señala un Banco en la parte inferior derecha.
        </p>
        <img src="/img/Hollow_knight_18_5.jpg" alt="Guia_18_5" class="img-fluid my-2">
        <p>
          Sigue el letrero para entrar en la siguiente habitación. El Banco se encuentra en el piso inferior, a la
          derecha. Descansa un poco para curarte y guardar tu progreso.
        </p>
        <img src="/img/Hollow_knight_18_6.jpg" alt="Guia_18_6" class="img-fluid my-2">
        <p>
          Ahora que has establecido un punto de guardado, regresa al área que acabas de dejar. Dirígete a la izquierda,
          pasa al Minero Coraza y
          detente cuando llegues al saliente antes de la habitación con las cintas transportadoras. Sube por el hueco
          cerca de la puerta.
        </p>
        <img src="/img/Hollow_knight_18_7.jpg" alt="Guia_18_7" class="img-fluid my-2">
        <p>
          Entra por el agujero en el techo en la esquina superior izquierda. En la siguiente habitación, avanza hacia
          arriba. Elimina al Espaldar Brillante y a los Mineros Coraza,
          y continúa ascendiendo por el camino del lado izquierdo. Salta a la cinta transportadora que sube por la pared
          izquierda y tómala hasta la plataforma de arriba.
        </p>
        <img src="/img/Hollow_knight_18_8.jpg" alt="Guia_18_8" class="img-fluid my-2">
        <p>
          Salta por la salida y entra en la siguiente área. Esta zona presenta escarabajos de cristal, llamados
          Reptadores de Cristal, que emiten esporádicamente rayos láser. Esquívalos con cuidado mientras sigues el
          camino hacia la cima.
          Una forma fácil de ascender sin ser golpeado repetidamente es hacer un salto de pared en la pared del extremo
          derecho, esperar una abertura, y luego saltar y correr al saliente de la izquierda.
          Por encima de aquí y a la izquierda, te encontrarás con dos caminos con cintas transportadoras en las paredes.
          Ambos te llevan a la cima y a la puerta de salida,
          aunque el camino de la derecha está lleno de pinchos, lo que te obliga a mantenerte en movimiento para evitar
          el daño. ¿Por qué tomarías la ruta de la derecha? ¡Pues para rescatar a un amigo, por supuesto!
        </p>
        <img src="/img/Hollow_knight_18_9.jpg" alt="Guia_18_9" class="img-fluid my-2">
        <p>
          Normalmente invulnerables, los Reptadores de Cristal pueden ser eliminados con Hechizos como Espíritu
          Vengativo/Alma Sombría y Zancada Desoladora/Oscuridad Descendente. Una buena estrategia es intentar alinearlos
          y volar a varios con Espíritu Vengativo.
          Mata al Minero Coraza y destruye la pared detrás de él (volveremos a esta área más tarde).
        </p>
        <img src="/img/Hollow_knight_18_10.jpg" alt="Guia_18_10" class="img-fluid my-2">
        <p>
          salta por la pared a traves de la siguiente seccion de plataformas y Reptadores de Cristal
        </p>
        <img src="/img/Hollow_knight_18_11.jpg" alt="Guia_18_11" class="img-fluid my-2">
        <p>
          Sigue las plataformas hacia arriba, esquivando los láseres, hasta que llegues a la cima. Toma la salida a la
          izquierda y encontrarás a Cornifer. Págale sus bien merecidos 112 de Geo para reclamar el mapa de Picos de
          Cristal.
        </p>
        <img src="/img/Hollow_knight_18_12.jpg" alt="Guia_18_12" class="img-fluid my-2">
        <h2>Consigue el Corazon de cristal</h2>
        <p>
          Después de que te despidas de Cornifer, es hora de buscar la habilidad que te dará más acceso al mapa. Deja a
          Cornifer y regresa a la habitación de la derecha. Poco después de entrar, salta por la salida que está encima
          de ti.
        </p>
        <img src="/img/Hollow_knight_18_13.jpg" alt="Guia_18_13" class="img-fluid my-2">
        <p>
          En la siguiente habitación, sube por el hueco y entra en el segundo pasaje a la izquierda, justo después de un
          camino a la derecha que lleva a un Banco.
        </p>
        <img src="/img/Hollow_knight_18_14.jpg" alt="Guia_18_14" class="img-fluid my-2">
        <img src="/img/Hollow_knight_18_15.jpg" alt="Guia_18_15" class="img-fluid my-2">
        <p>
          Sube por el camino del lado izquierdo, a través de los Reptadores de Cristal, y continúa hasta que llegues a
          la salida en el techo. Entra para llegar a la siguiente área.
          Una vez allí, sigue el camino hasta el extremo derecho y toma la salida de la derecha.
          En la siguiente habitación, avanza un poco hasta que llegues a un hueco en el suelo. Desciende hasta que
          aterrices sobre una puerta.
        </p>
        <img src="/img/Hollow_knight_18_16.jpg" alt="Guia_18_16" class="img-fluid my-2">
        <p>
          En la parte inferior, encontrarás una palanca. Golpéala para abrir la puerta de abajo, luego salta por la
          puerta recién abierta a la izquierda y golpea la siguiente palanca que encuentres.
        </p>
        <img src="/img/Hollow_knight_18_17.jpg" alt="Guia_18_17" class="img-fluid my-2">
        <p>
          Realiza un salto de pared de vuelta a la primera palanca y luego baja por el siguiente hueco a tu derecha.
          Después de aterrizar, ve a la derecha de nuevo y desciende por el largo
          hueco vertical con cintas transportadoras en ambos lados. Una vez que llegues al fondo, golpea la palanca de
          la izquierda para abrir otra puerta, luego ve por la salida de la derecha.
        </p>
        <img src="/img/Hollow_knight_18_18.jpg" alt="Guia_18_18" class="img-fluid my-2">
        <p>
          La siguiente habitación presenta un desafío de plataformas, que consiste en cintas transportadoras y
          plataformas giratorias con cristales dañinos. Tendrás que navegar sobre las plataformas giratorias
          rápidamente, ya que girarán después de ser tocadas.
        </p>
        <img src="/img/Hollow_knight_18_19.jpg" alt="Guia_18_19" class="img-fluid my-2">
        <p>
          Continúa a la derecha, a través de las cintas transportadoras y las plataformas giratorias, luego salta a las
          cintas transportadoras verticales y asciende a suelo firme. Ten cuidado con los pinchos. Usa tu carrera para
          evitar el daño.
        </p>
        <img src="/img/Hollow_knight_18_20.jpg" alt="Guia_18_20" class="img-fluid my-2">
        <p>
          Una vez que llegues a la cima de la primera cinta vertical, habrá un soporte de madera que esconde un pequeño
          Tótem de Alma a tu izquierda, así que úsalo si necesitas curarte. Después de eso,
          ve a la derecha para acercarte a una serie de cristales que disparan láser.
        </p>
        <img src="/img/Hollow_knight_18_21.jpg" alt="Guia_18_21" class="img-fluid my-2">
        <p>
          Sincroniza tus movimientos para evitar recibir daño de los cristales en los techos y paredes. Los láseres
          delgados no te harán daño, así que puedes moverte o correr a través de ellos sin problema.
          Los láseres más gruesos duelen, pero se disipan después de aproximadamente dos segundos.
        </p>
        <img src="/img/Hollow_knight_18_22.jpg" alt="Guia_18_22" class="img-fluid my-2">
        <p>
          Después de superar la primera sección, que es sencilla, el área se abrirá, añadiendo plataformas giratorias
          con pinchos y cintas transportadoras a la "serenata" de láseres. Una vez más,
          si te quedas atascado en una plataforma, usa el Salto de Aguijón para hacerla girar de nuevo. Mantén un ritmo
          lento y deliberado.
        </p>
        <img src="/img/Hollow_knight_18_23.jpg" alt="Guia_18_23" class="img-fluid my-2">
        <p>
          Llega hasta el final a la derecha y encontrarás otro Tótem de Alma. Cúrate si recibiste daño, luego salta y
          sigue el camino. Pronto llegarás a una cinta transportadora vertical.
        </p>
        <img src="/img/Hollow_knight_18_24.jpg" alt="Guia_18_24" class="img-fluid my-2">
        <p>
          Tómala hasta el fondo, luego ve a la derecha cruzando el puente y pronto encontrarás una gran figura mecánica
          con una luz brillante saliendo de su estómago.
          Inspéctala para obtener el increíble Corazón de Cristal. Este artefacto te otorga la Súper Carrera, que te
          permite cruzar largas distancias, ya sea por encima de huecos o de otra manera.
        </p>
        <img src="/img/Hollow_knight_18_25.jpg" alt="Guia_18_25" class="img-fluid my-2">
        <p>
          La explosión por consumir el Corazón de Cristal ha destruido el puente, pero eso no debería molestar a un
          insecto ahora volador como tú. Mientras miras a la izquierda sobre el puente,
          carga la Súper Carrera manteniendo presionado el gatillo izquierdo (LT) en el control de Xbox, L2 en el de
          PlayStation, ZL en el de Switch o la tecla S en un teclado.
        </p>
        <img src="/img/Hollow_knight_18_26.jpg" alt="Guia_18_26" class="img-fluid my-2">
        <p>
          Vuela a la izquierda para regresar a donde comenzaste el desafío de plataformas, deteniéndote un momento para
          recoger ese Cristal de Geo.
        </p>
        <img src="/img/Hollow_knight_18_27.jpg" alt="Guia_18_27" class="img-fluid my-2">
        <p>
          Salta al saliente y vuela a la izquierda de nuevo. Sigue el camino hacia arriba y a la izquierda y continúa
          hacia la siguiente área.
        </p>
        <img src="/img/Hollow_knight_18_28.jpg" alt="Guia_18_28" class="img-fluid my-2">
        <p>
          Camina un poco y desciende por el primer agujero en el suelo.
        </p>
        <img src="/img/Hollow_knight_18_29.jpg" alt="Guia_18_29" class="img-fluid my-2">
        <p>
          Desciende hasta el fondo y avanza a la derecha a través de las trituradoras hidráulicas. Usa la Capa de
          Polilla para correr por debajo de ellas y evitar el daño.
        </p>
        <img src="/img/Hollow_knight_18_30.jpg" alt="Guia_18_30" class="img-fluid my-2">
        <p>
          Continúa a través de la primera ráfaga, luego baja al siguiente nivel y enfréntate al guantelete de
          trituradoras más desafiante a la izquierda. Salta, luego corre a través de cada trituradora y baja por el
          agujero en el suelo.
          La extraña habitación de abajo te presenta una palanca en un lado y un Grub en el otro. ¡Qué bien! Golpea la
          palanca, rescata al pobre Grub, luego ve a la izquierda y salta al saliente.
          Continúa a la derecha, corre a través de las plataformas elevadas y toma la salida del lado derecho.
        </p>
        <h2>Como conseguir La Oscuridad Descendente</h2>
        <p>
          Aunque es opcional, puedes adquirir Oscuridad Descendente, una mejora para tu Hechizo Caida Desoladora. Es una
          versión mucho más poderosa del hechizo, que te permite aumentar el daño infligido cuando lo usas en enemigos.
          Para conseguirla, continúa por la caverna oscura hacia la derecha, saltando de plataforma en plataforma y
          evitando los fosos de pinchos y los Cazadores de Cristal voladores. Destruye el Espaldar Brillante al final
          del túnel y toma la salida de la derecha.
        </p>
        <img src="/img/Hollow_knight_18_31.jpg" alt="Guia_18_31" class="img-fluid my-2">
        <p>
          Ahora te encontrarás en un saliente con vista a un gran abismo. Carga tu Súper Carrera y vuela sobre el abismo
          hacia la derecha, y llegarás al Montículo Cristalizado.
          Un gran Tótem de Alma se encuentra a la derecha de la entrada. Siéntete libre de usarlo si necesitas recargar
          Alma o curarte (o ambas cosas).
        </p>
        <img src="/img/Hollow_knight_18_32.jpg" alt="Guia_18_32" class="img-fluid my-2">
        <p>
          Entra en el edificio y usa Caida Desoladora para atravesar el suelo.
        </p>
        <img src="/img/Hollow_knight_18_33.jpg" alt="Guia_18_33" class="img-fluid my-2">
        <p>
          Dirígete a la derecha y te encontrarás con Cazadores de Cristal y plataformas de cristal con interruptores.
          Salta rápidamente de una plataforma a otra, luego sube y realiza un salto de pared en la pared de la izquierda
          para llegar a suelo firme.
        </p>
        <img src="/img/Hollow_knight_18_34.jpg" alt="Guia_18_34" class="img-fluid my-2">
        <p>
          Desde allí, baja por el hueco a tu derecha y deslízate por la pared del lado izquierdo, luego corre para
          aterrizar en la plataforma con el interruptor a la derecha. Sube por las plataformas y esquiva/mata al Cazador
          de Cristal,
          luego regresa a la parte superior izquierda y aterriza en un saliente seguro. Elimina al Balder y usa tu Alma
          para curarte si recibiste daño.
        </p>
        <img src="/img/Hollow_knight_18_35.jpg" alt="Guia_18_35" class="img-fluid my-2">
        <p>
          Sigue las plataformas con interruptores hacia arriba y aterriza en el saliente a la derecha. Vuelve a saltar a
          la plataforma con el interruptor de la izquierda, salta y corre hacia la pared del lado izquierdo,
          luego usa el salto de pared para llegar a un lugar seguro.
        </p>
        <img src="/img/Hollow_knight_18_36.jpg" alt="Guia_18_36" class="img-fluid my-2">
        <p>
          Camina a la izquierda, luego rompe las tablas de madera en el suelo. Baja para encontrar un Chamán Caracol
          cristalizado.
        </p>
        <img src="/img/Hollow_knight_18_37.jpg" alt="Guia_18_37" class="img-fluid my-2">
        <p>
          Rompe la prisión del Chamán Caracol y consumirás una porción del Vacío, potenciando tu Hechizo Caida
          Desoladora y convirtiéndolo en el hechizo más formidable, Oscuridad Descendente.
        </p>
        <img src="/img/Hollow_knight_18_38.jpg" alt="Guia_18_38" class="img-fluid my-2">
        <h2>Como conseguir el Amuleto Concentración Profunda</h2>
        <p>
          Antes de que termines todo y regreses al mundo, hay una última parada que puedes hacer para conseguir un
          Talismán que está cerca. Con el hechizo Oscuridad Descendente adquirido, regresa al Banco del área para
          actualizar tu mapa.
          Cuando estés listo, regresa a la sección de pared rota de la que tomamos nota antes. Está a mitad del hueco
          occidental que atraviesa verticalmente Picos de Cristal.
        </p>
        <img src="/img/Hollow_knight_18_39.jpg" alt="Guia_18_39" class="img-fluid my-2">
        <p>
          Dirígete a la izquierda a través de la abertura y Súper Corre hacia la izquierda y rápidamente usa el salto de
          pared para subir y moverte a la izquierda alrededor de la columna de piedra. Toma nota de los rayos láser que
          están justo delante.
        </p>
        <img src="/img/Hollow_knight_18_40.jpg" alt="Guia_18_40" class="img-fluid my-2">
        <p>
          Carga el Corazón de Cristal, sincroniza la liberación y vuela a través de los láseres. Haz esto en cada una de
          las plataformas a las que llegues, y pronto llegarás al extremo izquierdo de la caverna de cristal.
          Pasa por la salida hacia la siguiente área, luego baja y reclama el poderoso Talismán Enfoque Profundo.
        </p>
        <img src="/img/Hollow_knight_18_41.jpg" alt="Guia_18_41" class="img-fluid my-2">
        <p>
          Equipar el Talismán Enfoque Profundo hace que el Caballero recupere dos Máscaras de salud cada vez que
          canaliza Alma, aunque el tiempo de carga es un poco más largo. Combínalo con el Talismán Enfoque Rápido para
          mejorar enormemente
          tu habilidad de restaurar salud si tienes problemas para mantenerte con vida.
        </p>
        <img src="/img/Hollow_knight_18_42.jpg" alt="Guia_18_42" class="img-fluid my-2">
        <h2>Vuelta a Bocasucia</h2>
        <p>
          Después de que hayas recogido el Talismán, regresa al área anterior y toma la cinta transportadora de arriba,
          que te llevará de vuelta de forma segura al inicio de la caverna. Sal del área por la puerta de la derecha,
          luego vuelve a subir por el hueco y toma la siguiente salida. Continúa hasta que regreses a donde te
          encontraste con Cornifer, quien ya se fue de Picos de Cristal. Pasa por delante de la carta que Cornifer dejó
          en el suelo y detente en el saliente.
        </p>
        <img src="/img/Hollow_knight_18_43.jpg" alt="Guia_18_43" class="img-fluid my-2">
        <img src="/img/Hollow_knight_18_44.jpg" alt="Guia_18_44" class="img-fluid my-2">
        <p>
          Realiza una Súper Carrera a través del hueco. Pronto chocarás con una pared, así que salta y vuela a la
          izquierda de nuevo. Continúa abriéndote camino hacia la izquierda, usando tus habilidades de salto de pared y
          carrera. Cuando estés listo, avanza hasta el final del largo pasillo y toma la salida hacia la siguiente área.
          Cuando estés listo, avanza hasta el final del largo pasillo y toma la salida hacia la siguiente área.
        </p>
        <img src="/img/Hollow_knight_18_45.jpg" alt="Guia_18_45" class="img-fluid my-2">
        <p>
          Golpea la palanca para desbloquear el elevador y abrir un camino directo desde Picos de Cristal a Bocasucia,
          luego regresa a la ciudad para luego dirigirte a Nido Profundo.
        </p>`
  }, 
    {
    eventKey: '18', 
    title: 'Nido Profundo',
    content:`<h2>Como llegar al Nido Profundo</h2>
        <p>
          Para llegar a Nido Profundo en Hollow Knight, comienza tu viaje aventurándote a la Estación de la Reina a
          través de las Vías de Vaguamundo. Sal por la puerta este y dirígete al sureste hacia la Aldea Mantis.
          Continúa hacia abajo y entra en la arena donde luchaste contra los Señores Mantis. Ellos bloquean el camino a
          Nido Profundo, así que si no los derrotaste antes, ahora es el momento.
        </p>
        <img src="/img/Hollow_knight_19_1.jpg" alt="Guia_19_1" class="img-fluid my-2">
        <p>
          Con los Señores Mantis derrotados, busca una puerta en el lado izquierdo de la arena. Entra y avanza, y pronto
          llegarás a Nido Profundo.
        </p>
        <img src="/img/Hollow_knight_19_2.jpg" alt="Guia_19_2" class="img-fluid my-2">
        <h2>Como conseguir el mapa del Nido profundo</h2>
        <p>
          Salta de la pared en el primer hueco que encuentres (ignora la Esquirla de Máscara, ya que no podrás obtenerla
          hasta que adquieras una habilidad específica), luego avanza a la izquierda y
          encontrarás a Cornifer escondido de los horrores que acechan en la oscuridad de Nido Profundo.
        </p>
        <img src="/img/Hollow_knight_19_3.jpg" alt="Guia_19_3" class="img-fluid my-2">
        <p>
          Compra el mapa al modico precio de 38 Geo
        </p>
        <img src="/img/Hollow_knight_19_4.jpg" alt="Guia_19_4" class="img-fluid my-2">
        <h2>Resuelve el laberinto del Nido Profundo</h2>
        <p>
          Justo más allá de nuestro aterrorizado Cornifer hay un laberinto sinuoso de túneles, lleno de peligros
          extremos. Es fácil perderse y confundirse en el laberinto, así que debes leer las instrucciones primero antes
          de moverte. Esta parte de la guía te llevará a un lugar seguro.
          Cuando termines con Cornifer, regresa al nivel del suelo y avanza hacia la izquierda. A medida que avanzas,
          salta por encima de los pozos de jóvenes Garpede (criaturas parecidas a ciempiés) que se retuercen. No dudes
          en usar tu Carrera para cruzar los huecos.
        </p>
        <img src="/img/Hollow_knight_19_5.jpg" alt="Guia_19_5" class="img-fluid my-2">
        <p>
          Continúa hasta el extremo izquierdo del área, luego salta de la pared hasta que llegues a la salida en la
          parte superior izquierda. Salta a través de ella y entra en la siguiente área, donde encontrarás Garpedes
          adultos e indestructibles patrullando los túneles.
        </p>
        <img src="/img/Hollow_knight_19_6.jpg" alt="Guia_19_6" class="img-fluid my-2">
        <p>
          Salta y pégate a la pared izquierda hasta que llegues a la cima y continúa, eliminando al enemigo Tallatierra
          que emerge a medida que avanzas.
        </p>
        <img src="/img/Hollow_knight_19_7.jpg" alt="Guia_19_7" class="img-fluid my-2">
        <p>
          No olvides tomar el Depósito de Geo en tu camino hacia abajo.
        </p>
        <img src="/img/Hollow_knight_19_8.jpg" alt="Guia_19_8" class="img-fluid my-2">
        <p>
          Entra en el agujero del suelo y detente. Espera a que el Garpede pase, luego dirígete a la izquierda.
        </p>
        <img src="/img/Hollow_knight_19_9.jpg" alt="Guia_19_9" class="img-fluid my-2">
        <p>
          Corre sobre los fosos con pinchos y los huecos verticales y continúa a la izquierda hasta que entres en una
          pequeña habitación con un Cazador de Nido Profundo, un enemigo parecido a una araña que dispara veneno desde
          el techo.
        </p>
        <img src="/img/Hollow_knight_19_10.jpg" alt="Guia_19_10" class="img-fluid my-2">
        <img src="/img/Hollow_knight_19_11.jpg" alt="Guia_19_11" class="img-fluid my-2">
        <p>
          Ignora el agujero que aparece en el suelo. Una parte débil del suelo cederá en el centro de la habitación,
          pero debes pasarla por alto por ahora. Desde esa habitación con el Cazador de Nido Profundo, trepa por la
          pared de la izquierda.
          Sigue el camino de arriba a la derecha, luego salta de la pared en la siguiente pared.
        </p>
        <img src="/img/Hollow_knight_19_12.jpg" alt="Guia_19_12" class="img-fluid my-2">
        <p>
          Mata o esquiva al Cazador de Nido Profundo, continúa hacia arriba y luego gira a la izquierda. Sigue hasta que
          bajes a través del suelo débil. El suelo se romperá debajo de ti después de que te quedes parado en él por un
          momento.
        </p>
        <img src="/img/Hollow_knight_19_13.jpg" alt="Guia_19_13" class="img-fluid my-2">
        <p>
          Una vez que aterrices, ve a la izquierda y baja por el hueco vertical, asegurándote de caer en el lado
          izquierdo del abismo para evitar un foso de pinchos.
        </p>
        <img src="/img/Hollow_knight_19_14.jpg" alt="Guia_19_14" class="img-fluid my-2">
        <p>
          Continúa hasta el fondo, buscando un Tallatierra que emerge del suelo, y luego sal por la salida a tu
          izquierda. Toma la salida en la parte inferior de la pantalla. Cuando entres en la habitación de abajo, ve a
          la izquierda y sigue el pasadizo hacia abajo.
        </p>
        <img src="/img/Hollow_knight_19_15.jpg" alt="Guia_19_15" class="img-fluid my-2">
        <p>
          Eventualmente, bajarás a una habitación más grande. A la derecha hay un callejón sin salida, donde un
          Tallatierra saldrá del suelo.
        </p>
        <img src="/img/Hollow_knight_19_16.jpg" alt="Guia_19_16" class="img-fluid my-2">
        <p>
          Dirígete a la izquierda y baja a un pozo que se estrecha. Detente cuando llegues al suelo.
        </p>
        <img src="/img/Hollow_knight_19_17.jpg" alt="Guia_19_17" class="img-fluid my-2">
        <p>
          Muévete a la derecha rápidamente y no te detengas. El suelo a la derecha de donde aterrizaste es débil y
          cederá.
        </p>
        <img src="/img/Hollow_knight_19_18.jpg" alt="Guia_19_18" class="img-fluid my-2">
        <p>
          Continúa a la derecha hasta que llegues a un estrecho hueco que conduce a un túnel arriba. Espera a que el
          Garpede pase, luego síguelo a la derecha.
        </p>
        <img src="/img/Hollow_knight_19_19.jpg" alt="Guia_19_19" class="img-fluid my-2">
        <p>
          Al final del túnel hay una ligera caída en el suelo. Párate en ella para romper el suelo y caer.
        </p>
        <img src="/img/Hollow_knight_19_20.jpg" alt="Guia_19_20" class="img-fluid my-2">
        <p>
          Continúa por el camino a la izquierda, bajando por otro suelo débil, y pronto verás un doble del Caballero
          acechando en la oscuridad. ¡Qué miedo!
        </p>
        <img src="/img/Hollow_knight_19_21.jpg" alt="Guia_19_21" class="img-fluid my-2">
        <p>
        Avanza hasta que llegues a un cruce. Espera a que el Garpede pase, luego baja por el agujero por el que el animal se metió y toma el túnel de la derecha.
        </p>
        <img src="/img/Hollow_knight_19_22.jpg" alt="Guia_19_22" class="img-fluid my-2">
        <p>
        Sigue el túnel mientras se retuerce y gira hacia abajo. Cuando llegues a una intersección con un túnel que lleva a la izquierda y otro justo debajo que va a la derecha con un foso de pinchos a su izquierda, detente. Toma el camino de la izquierda.
        </p>
        <img src="/img/Hollow_knight_19_23.jpg" alt="Guia_19_23" class="img-fluid my-2">
        <p>
        Hay dos suelos débiles delante de ti a lo largo del túnel. Continúa rápidamente hacia la izquierda y salta al saliente para evitar la primera caída. Avanza hasta que llegues a dos huecos en el techo y detente antes del primero. 
        El suelo entre los huecos caerá a un foso de pinchos. Muévete rápidamente sobre él, o salta, para llegar al hueco en el extremo izquierdo.
        </p>
        <img src="/img/Hollow_knight_19_24.jpg" alt="Guia_19_24" class="img-fluid my-2">
        <p>
        Sube por el hueco y continúa hasta que llegues a un agujero en el suelo. Baja por el agujero. Después de caer por un rato, por fin llegarás al final del laberinto. ¡Hurra! No fue tan malo, ¿verdad? ¿Verdad?
        </p>
        <img src="/img/Hollow_knight_19_25.jpg" alt="Guia_19_25" class="img-fluid my-2">
        <h2>Como llegar al tranvia abandonado</h2>
        <p>
        Al fondo del agujero hay una encantadora y muy bienvenida habitación de Aguas Termales, con el primer Banco del área justo a la derecha. Siéntate en el Banco para curarte, crear un punto de guardado y actualizar tu mapa. 
        Cuando estés listo, ve a la izquierda hasta que entres en la siguiente habitación.
        </p>
        <img src="/img/Hollow_knight_19_26.jpg" alt="Guia_19_26" class="img-fluid my-2">
        <p>
        Saliendo de la reconfortante luz de las Aguas Termales, te encuentras de nuevo en la opresiva oscuridad de Nido Profundo. Continúa a la izquierda, cuidándote del único insecto loco. ¡Ten cuidado! De vez en cuando, cuando matas a un enemigo insecto 
        común como una Coraza Errante o una Coraza Cabeza Cuerno, pueden transformarse en un Reptador de Cadáveres. Presta atención a los cuerpos que se mueven y prepárate para defenderte contra este enemigo más peligroso. Salta a la plataforma elevada por 
        encima de los pozos de larvas, luego salta al saliente a la derecha.
        </p>
        <img src="/img/Hollow_knight_19_27.jpg" alt="Guia_19_27" class="img-fluid my-2">
        <p>
        Sigue el camino hacia arriba y a la izquierda, luego haz un salto de pared en la pared izquierda, y empezarás a ver telarañas. En este punto, tienes una elección que hacer. Si quieres o necesitas salir de Nido Profundo por alguna razón, 
        tendrás que seguir el camino que lleva hacia arriba hasta que desbloquees un atajo de regreso a la Aldea Mantis. Para seguir avanzando, ve por la salida llena de telarañas a la izquierda.
        </p>
        <img src="/img/Hollow_knight_19_28.jpg" alt="Guia_19_28" class="img-fluid my-2">
        <p>
        Tan pronto como entres, verás una pared con pinchos frente a ti. Baja por los tres pequeños salientes a tu izquierda, luego deslízate por la pared de abajo y corre sobre el foso para llegar al saliente a la izquierda.
        </p>
        <img src="/img/Hollow_knight_19_29.jpg" alt="Guia_19_29" class="img-fluid my-2">
        <p>
        Salta con cuidado y corre hacia la plataforma segura a la izquierda, evitando todos los pinchos. Salta y corre de nuevo a la izquierda, y la caverna se abrirá. En este punto, empezarás a encontrarte con más enemigos Reptador de Cadáveres, 
        que reanimarán los cuerpos de los recién fallecidos. No bajes la guardia, o podrías ser rodeado por estos enemigos de movimiento rápido, que son especialmente peligrosos debido al movimiento restringido en los túneles.
        </p>
        <img src="/img/Hollow_knight_19_30.jpg" alt="Guia_19_30" class="img-fluid my-2">
        <p>
        Continúa hacia la izquierda y te encontrarás con los poderosos enemigos con escudo: los Devotos Acechadores.
        </p>
        <img src="/img/Hollow_knight_19_31.jpg" alt="Guia_19_31" class="img-fluid my-2">
        <p>
        Estos grandes enemigos llenan los túneles, por lo que no podrás pasar por su lado. Usan máscaras defensivas y se acercan lentamente antes de bajar su escudo para lanzar una ráfaga de ataques. A lo largo del camino hacia el primer Devoto Acechador, 
        busca una pared sobre un pasadizo cerca de lo que parecen ser dos extremidades de insecto verticales saliendo del suelo. Salta y ve a la izquierda para agarrarte a la pared, y haz un salto de pared hacia el túnel de arriba.
        </p>
        <img src="/img/Hollow_knight_19_32.jpg" alt="Guia_19_32" class="img-fluid my-2">
        <p>
        Sigue el túnel a la derecha, luego sube por el hueco en el techo y continúa hasta que entres en la habitación de arriba. La gran habitación vertical contiene huecos que corren hasta la cima. Hay enemigos y trampas de pinchos, así que mantente alerta mientras subes. 
        Si eliges el hueco de la izquierda, entra en el siguiente hueco a la derecha cuando llegues a un cruce. En la cima y a la izquierda hay un Depósito de Geo.
        </p>
        <img src="/img/Hollow_knight_19_33.jpg" alt="Guia_19_33" class="img-fluid my-2">
        <img src="/img/Hollow_knight_19_34.jpg" alt="Guia_19_34" class="img-fluid my-2">
        <p>
        Toma el siguiente hueco justo a la derecha. Cerca de la cima, tendrás que avanzar a la derecha, saltando sobre un hueco con pinchos.
        </p>
        <img src="/img/Hollow_knight_19_35.jpg" alt="Guia_19_35" class="img-fluid my-2">
        <p>
        Continúa y toma la salida de arriba para llegar al sub-área Tranvía Abandonado.
        </p>
        <h2>Como conseguir el pase del tranvia</h2>
        <img src="/img/Hollow_knight_19_36.jpg" alt="Guia_19_36" class="img-fluid my-2">
        <p>
        En esta área, te encontrarás con grandes enemigos voladores llamados Eclosionadores Talladores. Volarán y hostigarán al Caballero por su cuenta, escupiendo esporádicamente Tallatierras. Elimínalos temprano con Espíritu Vengativo o ataques de Aguijón, para evitar ser abrumado por los enemigos.
        </p>
        <img src="/img/Hollow_knight_19_37.jpg" alt="Guia_19_37" class="img-fluid my-2">
        <p>
        Dirígete a la izquierda y pronto encontrarás un tranvía estrellado y la vieja estación de tranvías justo detrás. Entra en la estación abandonada y salta por encima de la pared baja. Haz un salto de pared en la pared izquierda para llegar a un Capullo de Sangre Vital escondido si necesitas salud extra.
        </p>
        <img src="/img/Hollow_knight_19_38.jpg" alt="Guia_19_38" class="img-fluid my-2">
        <p>
        Para continuar, baja por el agujero en el suelo y aterrizarás en un viejo vagón de tranvía. Entra por el agujero a la derecha donde ves la luz brillando.
        </p>
        <img src="/img/Hollow_knight_19_39.jpg" alt="Guia_19_39" class="img-fluid my-2">
        <p>
        Tienes que ir a la izquierda, pero la puerta está cerrada. Busca una palanca en el área que está a la derecha, pasando el vagón. Golpéala para abrir la puerta mencionada y entra en la siguiente habitación. Elimina al Eclosionador Tallador, 
        luego salta a la plataforma de la izquierda. Salta y corre hacia el saliente a la derecha y golpea la palanca para desbloquear el atajo a la entrada del área, luego regresa a la izquierda hasta que llegues al último vagón de tranvía a la izquierda. 
        Si tienes problemas con los Eclosionadores Talladores, puedes usar la Súper Carrera para cruzar la distancia rápidamente.
        </p>
        <img src="/img/Hollow_knight_19_40.jpg" alt="Guia_19_40" class="img-fluid my-2">
        <p>
        Salta a la parte superior del vagón y luego baja por el agujero.
        </p>
        <img src="/img/Hollow_knight_19_41.jpg" alt="Guia_19_41" class="img-fluid my-2">
        <p>
        Inspecciona el objeto en la parte delantera del vagón para obtener el Pase de Tranvía. Esto te proporciona más formas de viajar entre áreas, incluyendo una a la que te dirigirás muy pronto.
        </p>
        <img src="/img/Hollow_knight_19_42.jpg" alt="Guia_19_42" class="img-fluid my-2">        
        <h2>De vuelta a los Tuneles</h2>
        <p>
        Ahora que tienes el Pase de Tranvía, es hora de curarte y guardar tu progreso. Hay un Banco al que puedes llegar en el Tranvía Abandonado, pero está todo a la derecha, al lado opuesto del vagón que te dio el pase. 
        Regresa a la derecha y atraviesa la puerta recién abierta hacia la siguiente área. 
        Viaja todo el camino a la derecha, pasando el pasadizo que baja de nuevo a los túneles de Nido Profundo, y atraviesa la puerta del Tranvía hacia la siguiente habitación. Salta por encima del hueco y encontrarás a nuestra vieja amiga Tela y un Banco del área.
        </p>
        <img src="/img/Hollow_knight_19_43.jpg" alt="Guia_19_43" class="img-fluid my-2">
        <p>
        La pobre Cloth ha pasado por días mejores. Las cosas sin duda han ido mal desde la última vez que la viste en los Páramos Fúngicos. Habla con ella, y esta valiente guerrera admitirá sentirse un poco agotada por los peligros de Nido Profundo. 
        Agota su diálogo para enterarte de que planea irse y buscar un "desafío menos aterrador". Nido Profundo es rudo.
        </p>
        <img src="/img/Hollow_knight_19_44.jpg" alt="Guia_19_44" class="img-fluid my-2">
        <p>
        Después de haber hablado con Cloth y descansado en el Banco, ve a la izquierda, salta al hueco y sigue el camino hacia la derecha.
        </p>
        <img src="/img/Hollow_knight_19_45.jpg" alt="Guia_19_45" class="img-fluid my-2">
        <p>
        Continúa bajando y a la derecha hasta que llegues a un hueco en el suelo. Salta sobre él para romper el suelo débil, desbloqueando un atajo entre el Tranvía y las secciones anteriores de Nido Profundo.
        </p>
        <img src="/img/Hollow_knight_19_46.jpg" alt="Guia_19_46" class="img-fluid my-2">
        <p>
        Sube de nuevo por la pared hasta la cima y regresa a través de la puerta del Tranvía a la izquierda. Elimina al Eclosionador Tallador y toma la salida del piso para volver a entrar en los túneles de Nido Profundo, 
        descendiendo de nuevo por los huecos verticales que subiste para llegar al Tranvía Abandonado. Cuidado con los pinchos, y deslízate por la pared del lado izquierdo hasta que llegues al fondo. Salta al hueco de abajo, 
        luego sigue el camino a la izquierda, bajando dos veces hasta que te encuentres de nuevo en el túnel donde comenzaste el ascenso al Tranvía Abandonado. Esta vez, avanzarás hacia el oeste.
        </p>
        <img src="/img/Hollow_knight_19_47.jpg" alt="Guia_19_47" class="img-fluid my-2">
        <p>
        Una vez que llegues al fondo, corre a la izquierda por encima del pozo de larvas de ciempiés.
        </p>
        <img src="/img/Hollow_knight_19_48.jpg" alt="Guia_19_48" class="img-fluid my-2">
        <p>
        Detente después de llegar al otro lado. Camina hacia adelante y busca un hueco estrecho sobre el túnel. Haz un salto de pared para subir y toma el pequeño túnel a la izquierda para evitar al Devoto Acechador.
        </p>
        <img src="/img/Hollow_knight_19_49.jpg" alt="Guia_19_49" class="img-fluid my-2">
        <p>
        Continua a la izquierda y llegaras a la siguiente area.
        </p>
        <h2>Explorar el Nido de Arañas</h2>
        <p>
        En esta área, comenzarás a encontrar Pequeños Tejedores, enemigos parecidos a arañas que parecen volar, pero en realidad están atravesando las diminutas telarañas que se entrecruzan por toda la región. Pueden aparecer en cualquier momento, 
        así que ten cuidado al iniciar las secciones de plataformas complicadas en esta área, ya que algunas caídas pueden hacerte retroceder bastante. Baja por el pequeño saliente tan pronto como entres en el área, luego haz un salto de pared en el 
        pequeño hueco vertical y elimina a los diminutos enemigos Crías de Nido Profundo que encuentres allí.
        </p>
        <img src="/img/Hollow_knight_19_50.jpg" alt="Guia_19_50" class="img-fluid my-2">
        <p>
        Salta al saliente a la izquierda, corre a través del foso de pinchos y continúa a la izquierda. Salta sobre las diminutas plataformas suspendidas sobre el pozo, luego corre hasta el extremo izquierdo.
        </p>
        <img src="/img/Hollow_knight_19_51.jpg" alt="Guia_19_51" class="img-fluid my-2">
        <p>
        Mata a la Cría de Nido Profundo en el estrecho túnel del otro lado y salta los huecos con pinchos en el suelo. Continúa todo el camino a la izquierda y baja a un hueco escondido. En el fondo encontrarás un Bluggsac.
        Destrúyelo para obtener un Huevo de Desechos, luego ve a la derecha y destruye el soporte de madera para desbloquear un atajo al piso inferior.
        </p>
        <img src="/img/Hollow_knight_19_52.jpg" alt="Guia_19_52" class="img-fluid my-2">
        <p>
        Continúa a la derecha, sube por el pequeño saliente y sigue el camino hacia la izquierda. Haz un salto de pared para subir por la pared, luego sube por el pequeño saliente a la izquierda y sigue el camino hacia la izquierda.
        </p>
        <img src="/img/Hollow_knight_19_53.jpg" alt="Guia_19_53" class="img-fluid my-2">
        <p>
        Vuelve a subir por el hueco por el que acabas de bajar, corre a través de los fosos de pinchos, luego haz un salto de pared para subir por la pared y llegar al área de arriba.
        </p>
        <h2>Como conseguir el amuleto Canto de la tejedora</h2>
        <p>
        Antes de continuar por la ruta principal, ahora sería un buen momento para detenerse y conseguir un Talismán que está cerca. Sería una buena idea porque, por un lado, es un Talismán poderoso, y por otro, quizás no quieras volver a Nido Profundo 
        en un tiempo después de esta visita inicial. El Talismán Canto de Tejedor se encuentra al final del túnel, en el extremo derecho. Primero debes pasar a un enemigo Devoto Acechador, que ha hecho del pasadizo su hogar. 
        Deberías encontrar a la bestia a poca distancia a la derecha del hueco, con su cara mirando hacia otro lado. El espacio por encima de ella te ofrece suficiente espacio para saltar y correr por encima. Haz eso, y luego corre como el viento.
        </p>
        <img src="/img/Hollow_knight_19_54.jpg" alt="Guia_19_54" class="img-fluid my-2">
        <p>
        Dirígete a la derecha, luego salta sobre el hueco usando la pequeña plataforma flotante en el medio, para llegar a un túnel en el otro lado. Otro Devoto Acechador está esperando en el túnel, pero esta vez su mirada está dirigida hacia ti. 
        Acércate y atráelo hacia la izquierda, donde el techo del túnel es más alto. Cuando entre en este lugar, gira y salta sobre él, luego avanza por el túnel.
        </p>
        <img src="/img/Hollow_knight_19_55.jpg" alt="Guia_19_55" class="img-fluid my-2">
        <img src="/img/Hollow_knight_19_56.jpg" alt="Guia_19_56" class="img-fluid my-2">
        <p>
        Continúa a la derecha y sigue caminando para pasar por una puerta oculta. Pronto, descubrirás la entrada a la Guarida del Tejedor.
        </p>
        <img src="/img/Hollow_knight_19_57.jpg" alt="Guia_19_57" class="img-fluid my-2">
        <p>
        Entra y avanza a la derecha hasta que llegues a un gran hueco que sube. Mata al Cazador de Nido Profundo que espera en la pared y haz un salto de pared hacia el pasadizo de arriba.        </p>
        <img src="/img/Hollow_knight_19_58.jpg" alt="Guia_19_58" class="img-fluid my-2">
        <p>
        Avanza hacia la izquierda hasta que llegues a una fila de cuchillas que sobresalen del suelo. Tienes dos maneras de cruzar este peligro: Cruza rápidamente las cuchillas con la Súper Carrera. Presiona el botón o la tecla de nuevo cuando estés a salvo; 
        de esa manera, no pasarás volando más allá del Talismán o
        Usa el Salto de Aguijón para cruzar y demostrar a todas las arañas que te están observando que no le temes a nada.
        </p>
        <img src="/img/Hollow_knight_19_59.jpg" alt="Guia_19_59" class="img-fluid my-2">
        <p>
        Pasadas las cuchillas y en lo alto de un saliente, hay un objeto brillante en el suelo. Inspéctalo para adquirir el Talismán Canto de Tejedor.
        </p>
        <img src="/img/Hollow_knight_19_60.jpg" alt="Guia_19_60" class="img-fluid my-2">
        <p>
        Cuando estés listo, sal de la Guarida del Tejedor y regresa a la parte superior del hueco donde comenzaste tu búsqueda del Talismán. Esta vez, ve a la izquierda hasta que llegues a otro hueco que sube.
        </p>
        <h2>Como llegar a la Aldea Distante</h2>
        <p>
        Cuando estés listo para continuar, haz un salto de pared para subir por el hueco y llegar al siguiente saliente. Una vez arriba, ve a la izquierda hasta que llegues a una puerta. Entra para llegar al umbral de la Aldea Distante.
        </p>
        <img src="/img/Hollow_knight_19_61.jpg" alt="Guia_19_61" class="img-fluid my-2">
        <p>
        El túnel de adelante se detiene poco después de la entrada. Toma el hueco vertical en el techo, pero ten cuidado con los enemigos. Haz un salto de pared para subir por el hueco vertical y sigue el camino hacia arriba y 
        alrededor hasta que bajes de nuevo al suelo, que cederá a un foso de pinchos. ¡Corre rápidamente hacia la izquierda después de saltar del saliente!
        </p>
        <img src="/img/Hollow_knight_19_62.jpg" alt="Guia_19_62" class="img-fluid my-2">
        <p>
        Continúa por el camino, matando a los Cazadores de Nido Profundo mientras corres y saltas de pared en pared entre las paredes y los salientes, hasta que llegues a otro suelo débil. Una vez más, caerás sobre un suelo de pinchos. Mientras desciendes, ¡prepárate para correr a la izquierda!
        </p>
        <img src="/img/Hollow_knight_19_63.jpg" alt="Guia_19_62" class="img-fluid my-2">
        <img src="/img/Hollow_knight_19_64.jpg" alt="Guia_19_64" class="img-fluid my-2">
        <p>
        No te detengas: Otro agujero aparece en el suelo justo a la izquierda de los pinchos. Salta lejos del suelo débil antes de caer. Entra con cuidado en el agujero, pero mantén la dirección izquierda o derecha para agarrarte a la pared. Al fondo del agujero hay un foso de pinchos. Salta sobre él para evitar el daño.
        </p>
        <img src="/img/Hollow_knight_19_65.jpg" alt="Guia_19_65" class="img-fluid my-2">
        <p>
        Dirígete a la derecha y destruye el soporte de madera. Continúa y salta de pared para subir y destruir el soporte de madera de allí para desbloquear un atajo de regreso al área anterior.
        </p>
        <img src="/img/Hollow_knight_19_66.jpg" alt="Guia_19_66" class="img-fluid my-2">
        <p>
        Regresa al hueco por el que acabas de deslizarte, haz un salto de pared para subir y continúa a la izquierda. Un poco más adelante en el camino con columnas, el suelo cederá, así que salta y corre para evitar caer en los pinchos. Continúa a la izquierda y entra en la siguiente área, la Aldea Distante.
        </p>
        <h2>Como encontrar a la Bestia</h2>
        <p>
        Después de entrar en la Aldea Distante, ve a la izquierda y salta a través de las pequeñas plataformas elevadas. Sube por las plataformas suspendidas por telarañas, moviéndote hacia arriba y a la derecha. En la esquina superior derecha del área hay una plataforma que te lleva a una puerta.
        </p>
        <img src="/img/Hollow_knight_19_67.jpg" alt="Guia_19_67" class="img-fluid my-2">
        <p>
        Entra para encontrar un Banco sospechosamente destruido y una Estación de Vaguamundo (no destruida). Paga los 250 de Geo para desbloquear las Vías de Vaguamundo, luego regresa al gran capullo cubierto de telarañas en el centro de la aldea. 
        Entra, haz caso al consejo de todas las figuras sospechosamente cubiertas con túnicas y siéntate en el Banco.
        </p>
        <img src="/img/Hollow_knight_19_68.jpg" alt="Guia_19_68" class="img-fluid my-2">
        <p>
        Pronto te verás atrapado en telarañas; la traición de las figuras con túnica será revelada. Intenta moverte y se acercarán a ti, la pantalla se oscurecerá y el Caballero despertará en la Guarida de la Bestia, suspendido en un capullo. Usa tu Aguijón para liberarte, 
        luego ve a la derecha. Sigue caminando hasta que veas un saliente arriba. Cuando estés listo, sube por el hueco y ve a la izquierda. En el túnel hay un Devoto Acechador. Tendrás que entrar al túnel para continuar. Entra en el túnel y ve a la izquierda, donde encontrarás al Devoto Acechador. 
        Usa ataques de golpe y corre para matarlo, luego continúa a la izquierda. Haz un salto de pared en el hueco al final del túnel y sigue el camino alrededor. Mata a las Crías de Nido Profundo y avanza a la derecha.
        Pronto el suelo cederá, pero salta sobre el agujero y continúa hasta el final del túnel. Haz un salto de pared para subir y mata al Cazador de Nido Profundo antes de correr a través del abismo hasta el saliente de la izquierda.
        </p>
        <img src="/img/Hollow_knight_19_69.jpg" alt="Guia_19_69" class="img-fluid my-2">
        <p>
        Continúa subiendo por los pasadizos sinuosos. Después de saltar sobre un hueco, encontrarás otro suelo débil debajo de un hueco que sube.
        </p>
        <img src="/img/Hollow_knight_19_70.jpg" alt="Guia_19_70" class="img-fluid my-2">
        <p>
        Sube por el hueco que está sobre el suelo débil y sigue el túnel, que va a la derecha. ¡Detente antes de entrar en la parte inferior del siguiente hueco! El suelo de abajo cede y es una trampa de pinchos.
        </p>
        <img src="/img/Hollow_knight_19_71.jpg" alt="Guia_19_71" class="img-fluid my-2">
        <p>
        Sube por el hueco que está sobre la trampa y ve hacia la izquierda. Continúa hasta que el suelo ceda. ¡Esta vez la caída es segura! Sigue a la izquierda y salta a la pared, evitando el suelo de abajo, que se romperá y revelará otra trampa de pinchos. Sube por el hueco hasta la cima. 
        Ve a la izquierda y mata al Devoto Acechador. Continúa a la izquierda hasta que te encuentres con un hueco que sube, y un agujero en el suelo justo después. Sube por el hueco y ve a la derecha, pero mantente atento a otro Devoto Acechador. Mátalo, 
        y luego continúa a la derecha para encontrar a un Soñador. Usa tu Aguijón Onírico para golpearlos y entrar en el reino de los sueños.
        </p>
        <img src="/img/Hollow_knight_19_72.jpg" alt="Guia_19_72" class="img-fluid my-2">
        <p>
        Dirígete a la derecha y encontrarás a la Bestia, esperando pacientemente su final. Derrótala con el Aguijón, luego carga tu Alma para absorber su esencia y romper el primero de los tres sellos del Templo del Huevo Negro.
        </p>
        <img src="/img/Hollow_knight_19_73.jpg" alt="Guia_19_72" class="img-fluid my-2">
        <h2>Sal del Nido Profundo</h2>
        <p>
        Cuando despiertes, ve a la izquierda y sigue la pared del extremo izquierdo hasta el fondo. Dirígete a la derecha y pronto encontrarás una sección de suelo débil y otro Banco. Salta por el agujero a la izquierda y verás que la fiesta ha bajado un poco. 
        Ve a la izquierda para salir del capullo. En este punto, has hecho todo lo que podías en la aldea. Regresa a las Aguas Termales que dejaste hace tanto tiempo. Dependiendo de si has interactuado con él antes, puede que encuentres a Quirrel allí. 
        Recarga energías en el relajante agua, luego ve a la derecha, a través del largo corredor, y entra en la siguiente área.
        </p>
        <img src="/img/Hollow_knight_19_74.jpg" alt="Guia_19_74" class="img-fluid my-2">
        <p>
        Aquí encontrarás una sucesión rápida de ciempiés que se entierran por los túneles. Tendrás que sincronizar tu viaje a medida que avanzas hacia la parte superior derecha del área. Espera a que el primer Garpede pase, yendo de izquierda a derecha, y síguelo por el túnel.
        </p>
        <img src="/img/Hollow_knight_19_75.jpg" alt="Guia_19_75" class="img-fluid my-2">
        <p>
        Camina unos pocos pasos hacia adelante y salta al agujero en el techo del túnel. Golpea el Depósito de Geo a la derecha para conseguir algo de dinero rápido.
        </p>
        <img src="/img/Hollow_knight_19_76.jpg" alt="Guia_19_76" class="img-fluid my-2">
        <p>
        Espera a que el siguiente Garpede en el túnel de arriba pase, dirigiéndose a la izquierda. Cuando el camino esté despejado, salta al túnel y luego salta al siguiente túnel directamente arriba.
        </p>
        <img src="/img/Hollow_knight_19_77.jpg" alt="Guia_19_77" class="img-fluid my-2">
        <p>
        Dirígete a la derecha y baja por el agujero en el suelo al final del pasadizo después de que el Garpede pase, luego baja rápidamente por el agujero a la izquierda.
        </p>
        <img src="/img/Hollow_knight_19_78.jpg" alt="Guia_19_78" class="img-fluid my-2">
        <p>
        Muévete al agujero de la izquierda y espera al Garpede. Baja y ve a la derecha después de que pase.
        </p>
        <img src="/img/Hollow_knight_19_79.jpg" alt="Guia_19_79" class="img-fluid my-2">
        <p>
        Sígalo para salir, luego baje por el agujero. ¡Estás a salvo! Avanza a la derecha para entrar en la siguiente habitación. En la siguiente área, encontrarás el Tranvía, así que inserta tu pase, entra y presiona el botón brillante en el lado derecho del vagón para ponerlo en marcha. 
        También hay un Banco en el tranvía, así que siéntete libre de usarlo para curarte, actualizar tu mapa y guardar tu progreso.
        </p>
        <img src="/img/Hollow_knight_19_80.jpg" alt="Guia_19_80" class="img-fluid my-2"> <!-- Hasta aqui las imagenes estan guardadas-->
        <p>
        Una vez que el Tranvía se detenga, sal y te encontrarás en la Cuenca Antigua.
        </p>`
  }, 
    {
    eventKey: '19', 
    title: 'Cuenca Antigua',
    content:`<p>
        La Cuenca Antigua se encuentra en lo profundo de la Ciudad de Lágrimas, debajo de los Canales Reales. Puedes tomar un hueco que va desde los Canales hasta la Cuenca, 
        aunque es más probable que la hayas descubierto después de salir del temido Nido Profundo a través del Tranvía.
        </p>
        <img src="/img/Hollow_knight_20_1.jpg" alt="Guia_20_1" class="img-fluid my-2">
        <h2>Donde encontrar el mineral Palido</h2> 
        <p>
        Cerca hay un Mineral Pálido, que es necesario para mejorar tu Aguijón. Aquí te explicamos cómo encontrarlo. Después de salir del Tranvía, ve a la izquierda y salta del Tranvía. Corre por el suelo hasta que te acerques a la puerta del Tranvía, 
        y verás un agujero en el suelo. Salta y sigue el camino hacia la izquierda.
        </p>
        <img src="/img/Hollow_knight_20_2.jpg" alt="Guia_20_2" class="img-fluid my-2">
        <p>
        Ten cuidado con los enemigos en los túneles de abajo. Los Mawlek Menores se escabullen por el suelo, lanzándote manchas naranjas en un arco. Muévete rápido para pasar por debajo de las manchas y golpear al enemigo antes de que se escabulla.
        </p>
        <img src="/img/Hollow_knight_20_3.jpg" alt="Guia_20_3" class="img-fluid my-2">
        <p>
        Corre sobre el hueco en el medio del túnel y continúa hacia la izquierda y arriba. Mata a los Mawlek que encuentres, luego baja por el primer saliente.
        </p>
        <img src="/img/Hollow_knight_20_4.jpg" alt="Guia_20_4" class="img-fluid my-2">
        <p>
        Sigue el camino hasta que llegues a un gran orbe negro al final del corredor. Examínalo para obtener un Mineral Pálido (que necesitarás la próxima vez que regreses a la Ciudad de Lágrimas).
        </p>
        <img src="/img/Hollow_knight_20_5.jpg" alt="Guia_20_5" class="img-fluid my-2">
        <img src="/img/Hollow_knight_20_6.jpg" alt="Guia_20_6" class="img-fluid my-2">
        <p>
        Salta por el hueco del lado izquierdo, luego sigue el túnel hacia la derecha. Evita los Voladores que se lanzan en picada y destruye el soporte de madera para desbloquear el atajo de regreso al Tranvía.
        </p>
        <img src="/img/Hollow_knight_20_7.jpg" alt="Guia_20_7" class="img-fluid my-2">
        <h2>Como conseguir el mapa de La Cuenca Antigua</h2>
        <p>
        Después de regresar a la plataforma del Tranvía, busca un agujero a la izquierda del tren. Baja por el agujero cuando estés listo para continuar.
        </p>
        <img src="/img/Hollow_knight_20_8.jpg" alt="Guia_20_8" class="img-fluid my-2">
        <p>
        Ahora que has entrado en el área principal de la Cuenca Antigua, baja por el lado izquierdo de la plataforma hasta que llegues al segundo saliente a la derecha. Deberías poder ver la señal inconfundible de Cornifer: un trozo de papel desechado.
        </p>
        <img src="/img/Hollow_knight_20_9.jpg" alt="Guia_20_9" class="img-fluid my-2">
        <p>
        Entra en la habitación, donde encontrarás a nuestro amigo que tararea, Cornifer. Cómprale el mapa del área por 112 de Geo.
        </p>
        <img src="/img/Hollow_knight_20_10.jpg" alt="Guia_20_10" class="img-fluid my-2">
        <p>
        Después de conseguir el mapa, deja a Cornifer y baja, yendo a la izquierda, hasta el fondo del área. Busca una salida en la parte inferior izquierda.
        </p>
        <img src="/img/Hollow_knight_20_11.jpg" alt="Guia_20_11" class="img-fluid my-2">
        <p>
        Una vez que entres en la siguiente área, encontrarás una estación de peaje. Paga los 150 de Geo y aparecerá un Banco. Descansa, luego usa el Corazón de Cristal para volar hacia la izquierda. 
        A mitad de camino, pasarás una plataforma con un caché de Geo. Para conseguirlo, presiona el botón o la tecla de la Súper Carrera justo cuando llegues al caché.
        </p>
        <img src="/img/Hollow_knight_20_12.jpg" alt="Guia_20_12" class="img-fluid my-2">
        <p>
        Al final del área, encontrarás una plataforma con pinchos en una pared, apuntando en tu dirección. Presiona el botón de Salto o Súper Carrera antes de chocar con los pinchos para detenerte y evitar recibir daño. 
        Sube al saliente y continúa hacia el área a la izquierda. Baja por el agujero y llegarás a un pasadizo de cuatro vías. Enjambres de pequeños enemigos anaranjados se escabullirán en todas direcciones.
        </p>
        <img src="/img/Hollow_knight_20_13.jpg" alt="Guia_20_13" class="img-fluid my-2">
        <p>
        Dirígete por el pasadizo inferior izquierdo y baja por el suelo a la siguiente área. Sigue el camino hacia abajo y pronto te encontrarás con un Mawlurk que lanza ácido. Para matarlo sin recibir mucho o ningún daño, 
        acércate lo más posible. El ácido no parece caer tan a menudo al lado de la bestia. Mantén la dirección hacia arriba cuando ataques para dañar al Mawlurk sin que el retroceso te empuje al camino del ácido.
        </p>
        <img src="/img/Hollow_knight_20_14.jpg" alt="Guia_20_14" class="img-fluid my-2">
        <p>
        Después de matar o evitar al Mawlurk, baja por el hueco al final, manteniéndote a la izquierda para evitar los pinchos.
        </p>
        <img src="/img/Hollow_knight_20_15.jpg" alt="Guia_20_15" class="img-fluid my-2">
        <p>
        Más pequeños enemigos anaranjados saldrán de las paredes. Baja por el hueco y continúa yendo a la izquierda una vez que toques el suelo. Pronto entrarás en una habitación con un Mawlurk adherido al techo. Es totalmente posible que no tengas los medios para eliminarlo en este momento, así que siéntete libre de esquivar el ácido y seguir yendo a la izquierda. 
        La siguiente plataforma de abajo tendrá otro Mawlurk escupiendo veneno al aire. Puedes intentar esquivarlo y escapar, o usar la estrategia mencionada anteriormente para acabar con él.
        </p>
        <img src="/img/Hollow_knight_20_16.jpg" alt="Guia_20_16" class="img-fluid my-2">
        <p>
        Continúa por el camino a la izquierda, donde pronto te enfrentarás a otro Mawlurk en el techo. Evítalo, luego salta por el hueco a la izquierda de los pinchos.
        </p>
        <img src="/img/Hollow_knight_20_17.jpg" alt="Guia_20_17" class="img-fluid my-2">
        <p>
        Dirígete a la derecha y entra en el cadáver del Mawlurk para encontrar un insecto sosteniendo una Llave Simple.
        </p>
        <img src="/img/Hollow_knight_20_18.jpg" alt="Guia_20_18" class="img-fluid my-2">
        <p>
        Toma la llave, vuelve a subir por el hueco y continúa a la izquierda. Aquí, encontrarás un Mawlurk suspendido en una plataforma sobre un foso de pinchos. Salta y atácalo con tu Aguijón hasta que muera. Cuando lo hayas hecho, 
        haz un salto de pared en la pared del extremo izquierdo y continúa por el camino hacia arriba y a la derecha.
        </p>
        <img src="/img/Hollow_knight_20_19.jpg" alt="Guia_20_19" class="img-fluid my-2">
        <p>
        Encontrarás un Mawlurk más, esta vez en una plataforma elevada, lo que hace difícil evitarlo. Mátalo desde abajo y continúa. En la siguiente habitación, ve por el agujero en el techo y sube al área de arriba. Continúa siguiendo el camino hasta que encuentres un conjunto de tablones de madera que sostienen una sección de la pared. 
        Destrúyelos para crear un atajo de regreso al Banco de peaje.
        </p>
        <img src="/img/Hollow_knight_20_20.jpg" alt="Guia_20_20" class="img-fluid my-2">
        <p>
        Regresa al Banco si necesitas curarte. Vuelve a esta área una vez que estés listo para enfrentarte al jefe. Cuando regreses, avanza a la izquierda, a través del atajo recién abierto, y sigue el pasillo marcado por pilares, 
        que te llevará a la lucha contra el Recipiente Roto.
        </p>
        <img src="/img/Hollow_knight_20_21.jpg" alt="Guia_20_21" class="img-fluid my-2">`
  }, 
    {
    eventKey: '20', 
    title: 'Recipiente Roto',
    content:`          <p>
          La cámara donde puedes encontrar al Recipiente Roto se encuentra en el lado izquierdo del área de la Cuenca Antigua, a solo unas pocas pantallas a la izquierda del Banco de peaje. Entra en la habitación, pasa el cascarón caído de un recipiente roto y 
          acércate a la pared. La puerta se cerrará, y las Semillas de Vida, los pequeños insectos naranjas, rodearán al cadáver. Poco después, el cuerpo cobrará vida y comenzará su asalto.
          </p>
          <img src="/img/Hollow_knight_21_1.jpg" alt="Guia_21_1" class="img-fluid my-2">
          <h2>Como derrotar al Recipiente Roto</h2>
          <p>
          El Recipiente Roto es un jefe de movimientos rápidos que tiene varios tipos de ataques físicos y mágicos. Para esta pelea, te servirán los Amuletos que aumentan el daño y el alcance de tu Aguijón o que te permiten curarte rápidamente.
          Intenta mantenerte al borde del alcance del Aguijón para tener más tiempo de esquivar los ataques mientras sigues infligiendo daño de forma constante. Amuletos como el Canto de la Tejedora y el Niño Grimm te permiten infligir daño al 
          jefe mientras evitas los ataques de área o te curas, así que considera una configuración de compañero/curación si tienes problemas.
          </p>
          <img src="/img/Hollow_knight_21_2.jpg" alt="Guia_21_2" class="img-fluid my-2">
          <p>
          El primer ataque que el Recipiente Roto puede usar es un ataque de embestida estándar, que cubre alrededor de dos tercios de la arena de combate. El Recipiente Roto puede usarlo estando en el suelo o en el aire, 
          así que obsérvalo mientras se mueve. Si se detiene, pausa tu avance y espera a que termine su ataque para luego contraatacar con tu Aguijón o tus hechizos.
          </p>
          <img src="/img/Hollow_knight_21_3.jpg" alt="Guia_21_3" class="img-fluid my-2">
          <p>
          El jefe también saltará con frecuencia al aire, se detendrá un momento y luego ejecutará un corte descendente. Una vez que el corte impacte en el suelo, cuatro esferas naranjas flotarán hacia abajo, luego cambiarán de dirección, se dispersarán y volarán hacia arriba a través de la pantalla.
          Las esferas se mueven hacia arriba y hacia afuera en una curva desde el punto donde aterrizó el jefe, dejando suficiente espacio entre ellas para que evites el daño. Deslízate hacia un hueco o salta para darte más tiempo de observar la trayectoria.
          </p>
          <img src="/img/Hollow_knight_21_4.jpg" alt="Guia_21_4" class="img-fluid my-2">
          <p>
          El Recipiente Roto queda temporalmente vulnerable durante este ataque. Ataca rápidamente con el Aguijón o mantén la distancia y lanza Espíritu Vengativo para dañarlo mientras se mueve. Si regresas al Recipiente Roto rápidamente después de que aterrice, puedes golpearlo desde el aire 
          (como con el salto del Aguijón) o darle unos cuantos cortes con tu Aguijón. Zambullida Desolada (o Sombra Descendente) también es ideal si buscas infligir daño rápidamente.
          </p>
          <img src="/img/Hollow_knight_21_5.jpg" alt="Guia_21_5" class="img-fluid my-2">
          <p>
          El Recipiente Roto también se detendrá ocasionalmente en su lugar antes de lanzar una corriente de múltiples esferas naranjas. Estas esferas descienden desde el jefe antes de elevarse y dispersarse mientras vuelan hacia arriba. Durante este tiempo, trata de mantenerte lo más alejado posible del jefe. Si logras mantener suficiente distancia, este es un excelente momento para curarte (especialmente si llevas equipado el Amuleto de Enfoque Rápido).  
          Mantén la calma, continúa con el ataque y cúrate cuando se presente la oportunidad. Pronto pondrás fin al Recipiente Roto. Tu próximo destino son los Limites del Reino.          
          </p>`
  }, 
    {
    eventKey: '21', 
    title: 'Limites del Reino',
    content:`<h2>Como conseguir las alas del monarca</h2>
        <p>
        Lo primero que debes hacer es conseguir un nuevo hechizo después de derrotar al jefe de la zona de la Cuenca Antigua, el Recipiente Roto. Ahora que el enemigo por fin ha descansado, continúa a la izquierda a través de la pared que acaba de abrirse. Sigue el camino hasta el final, 
        donde encontrarás un pequeño orbe brillante flotando en el aire. Salta, tócalo, y obtendrás las Alas de Monarca, un hechizo que te otorga la habilidad de hacer un doble salto.
        </p>
        <img src="/img/Hollow_knight_22_1.jpg" alt="Guia_22_1" class="img-fluid my-2">
        <h2>Viaja a los Limites del reino</h2>
        <p>
        Despues de conseguir las alas del monarca ve a la arena donde peleaste con el Recipiente roto y ve a la derecha.
        Pasa volando el Banco de peaje y entra en la siguiente zona, luego sigue el camino hacia la derecha. Ahora que tienes las Alas de Monarca, úsalas para superar el espacio y salta hacia la salida en la parte inferior derecha para ir a la siguiente área. Busca un conducto en el techo, cerca del final del camino, indicado por un letrero.
        </p>
        <img src="/img/Hollow_knight_22_2.jpg" alt="Guia_22_2" class="img-fluid my-2">
        <p>
        Sobre esto, puedes usar el Corazón de Cristal para volar a través del área de los Terrenos del Palacio. Rompe la pared débil para encontrar la Estación de Vagonetas de la Cuenca Antigua. Paga los 300 Geo para desbloquear el camino y 
        tómalo hacia la Estación de Vagonetas de Almacenes de la Ciudad, en la Ciudad de Lágrimas.
        </p>
        <img src="/img/Hollow_knight_22_3.jpg" alt="Guia_22_3" class="img-fluid my-2">
        <p>
        Una vez que llegues, desciende por la ciudad y regresa al Forjaguijones. En el Forjaguijones, usa el Mineral Pálido de la Cuenca Antigua y 800 Geo y él mejorará tu Aguijón Afilado a Aguijón Canalizado.
        </p>
        <img src="/img/Hollow_knight_22_4.jpg" alt="Guia_22_4" class="img-fluid my-2">
        <p>
        Con tu arma recién afilada, regresa a la Estación de Vagonetas del Rey. Es hora de viajar a la entrada de los Confines del Reino, que está debajo de la Estación de Vagonetas.
        </p>
        <img src="/img/Hollow_knight_22_5.jpg" alt="Guia_22_5" class="img-fluid my-2">
        <p>
        Toma la salida a la izquierda del Banco y luego déjate caer hasta el piso de abajo.
        </p>
        <img src="/img/Hollow_knight_22_6.jpg" alt="Guia_22_6" class="img-fluid my-2">
        <p>
        Entra por la puerta a la derecha para encontrar un Banco roto y una Estación de Vagonetas inundada. Mata a las dos Moscas de la Venganza y salta al agua.
        </p>
        <img src="/img/Hollow_knight_22_7.jpg" alt="Guia_22_7" class="img-fluid my-2">
        <p>
        Nada hacia la derecha y atravesarás un pasaje escondido para entrar en una caverna.
        </p>
        <img src="/img/Hollow_knight_22_8.jpg" alt="Guia_22_8" class="img-fluid my-2">
        <p>
        Encima del agua hay una plataforma flotante. Sube a ella, pero esquiva rápidamente al Belfly que se lanza en picada. Cerca de ahí, detrás de la pared a la derecha, hay un Grub atrapado.
        </p>
        <img src="/img/Hollow_knight_22_9.jpg" alt="Guia_22_9" class="img-fluid my-2">
        <p>
        Procede hacia la derecha a través de la caverna hasta que llegues a la entrada de los Confines del Reino.
        </p>
        <img src="/img/Hollow_knight_22_10.jpg" alt="Guia_22_10" class="img-fluid my-2">
        <h2>Como conseguir el mapa de los limites del reino</h2>
        <p>
        Toma la salida de la derecha y saldrás en los Confines del Reino. Ahora, es hora de encontrar a nuestro cartógrafo favorito para conseguir un mapa de la zona. Camina hasta el borde de la plataforma y déjate caer.
        </p>
        <img src="/img/Hollow_knight_22_11.jpg" alt="Guia_22_11" class="img-fluid my-2">
        <p>
        Déjate caer a la izquierda y deslízate por la pared. En poco tiempo te detendrás sobre una tubería que sobresale del acantilado. También deberías poder oír el inconfundible tarareo de nuestro viejo amigo, Cornifer, y ver un trozo de papel.
        </p>
        <img src="/img/Hollow_knight_22_12.jpg" alt="Guia_22_12" class="img-fluid my-2">
        <p>
        Entra en la tubería y ve a la izquierda para encontrar a Cornifer cómodamente guardado en su escondite. Págale los 112 Geo por el mapa de la zona de los Confines del Reino, luego continúa por las pequeñas plataformas hasta llegar al fondo del abismo gigante. 
        Ten cuidado, el fondo del abismo está inundado de ácido.
        </p>
        <h2>Como conseguir el Arte Estocada Fulgurante</h2>
        <p>
        Después de llegar al fondo, ve hacia la derecha hasta encontrar un saliente que te lleva a la salida. Atraviesa la puerta.
        </p>
        <img src="/img/Hollow_knight_22_13.jpg" alt="Guia_22_13" class="img-fluid my-2">
        <p>
        En esta zona, comenzarás a encontrar enemigos llamados Saltarines. Estos enemigos de rápido movimiento saltan a intervalos fijos a lo largo de sus regiones específicas, 
        por lo que puedes pasar corriendo por debajo de ellos. Evítalos o enfréntalos a tu gusto mientras avanzas hacia la derecha.
        </p>
        <img src="/img/Hollow_knight_22_14.jpg" alt="Guia_22_14" class="img-fluid my-2">
        <p>
        Pronto llegarás a una gran columna. Salta por la pared para pasarla y continúa a la derecha, y un Gran Saltador se estrellará contra el techo y comenzará a perseguirte. A diferencia de sus primos más pequeños, el Gran Saltador se centrará en el Caballero y 
        será implacable en su persecución. Dado que atacan constantemente al Caballero, pueden cubrir mucho terreno en poco tiempo y, como son tan grandes, pueden causar un daño significativo rápidamente, así que trátalos como minibosses.
        </p>
        <img src="/img/Hollow_knight_22_15.jpg" alt="Guia_22_15" class="img-fluid my-2">
        <p>
        Continúa por el pasillo hacia la derecha, elimina o esquiva a los dos Grandes Saltadores, y sigue hasta un Banco que está al lado de un edificio. Entra y habla con el Maestro de Aguijones Oro. Él te instruirá sobre los puntos más 
        finos del combate con Aguijón si puedes desprenderte de 800 Geo. Págale, y aprenderás la Estocada Fulgurante.
        </p>
        <img src="/img/Hollow_knight_22_16.jpg" alt="Guia_22_16" class="img-fluid my-2">
        <h2>Proceede hacia la zona del Jefe</h2>
        <p>
        Una vez que hayas obtenido la Estocada Fulgurante, regresa hasta la gran columna que viste antes. Salta desde la parte superior de la columna a un saliente a la izquierda, pasando el hueco.
        </p>
        <img src="/img/Hollow_knight_22_17.jpg" alt="Guia_22_17" class="img-fluid my-2">
        <p>
        A continuación, debes saltar por la pared del conducto, pero no te olvides del Depósito de Geo que está en el pequeño túnel a la izquierda.
        </p>
        <img src="/img/Hollow_knight_22_18.jpg" alt="Guia_22_18" class="img-fluid my-2">
        <p>
        Dirígete a la izquierda desde la entrada hasta que llegues a una pared con plataformas flotantes. Asciende por las plataformas y avanza hacia arriba y a la derecha hasta que encuentres una entrada a la siguiente zona por un agujero en el techo.
        Entra por el agujero en el techo para llegar a la zona de arriba. Sigue por el área vertical, saltando por las plataformas y eliminando a los Áspid Primales y a los Saltarines hasta llegar a la cima. Luego, dirígete a la derecha. 
        Salta por la pared del lado derecho hasta que llegues a la parte superior, luego ve a la izquierda y verás un letrero de Banco doblado que apunta hacia arriba. 
        Pasa el letrero y detente debajo de la sección del techo sin estalactitas. Salta y golpea el techo para revelar una sección débil. Una vez que se rompa, salta por la pared hacia la siguiente área y descansa en el Banco. Asegúrate de agarrar el Diario del Vagabundo mientras estás allí.
        </p>
        <img src="/img/Hollow_knight_22_19.jpg" alt="Guia_22_19" class="img-fluid my-2">
        <p>
        Vuelve a bajar hasta el letrero del Banco doblado y dirígete a la derecha hasta que llegues a la salida de ese lado. Pasa por ella y entrarás en un pasillo largo. No hay enemigos aquí, así que evita los pinchos que caen y continúa hacia la derecha. Cerca del final, verás a Hornet. 
        Síguela a través de la salida hacia la siguiente zona. Aquí, encontrarás otro conducto vertical, este te lleva hacia abajo. Déjate caer hasta que llegues al fondo, luego ve a la derecha, entra en la arena, y el encuentro con Hornet (Centinela) comenzará.
        </p>`
  }, 
    {
    eventKey: '22', 
    title: 'Hornet (Centinela)',
    content:`<p>
        Durante este encuentro, Hornet utiliza una técnica más avanzada que la que usó en la primera pelea en Senda Verde. Además, crea zonas peligrosas que niegan el acceso a ciertas áreas cuando entra en su segunda fase. 
        En este enfrentamiento, la clave es la paciencia: esperar el momento adecuado para atacar, esquivar y destruir los peligros, y buscar oportunidades para curarte. Durante esta pelea, Hornet sigue usando muchos de los mismos movimientos del primer encuentro, 
        y no han evolucionado mucho. Esquiva, muévete a un lado, o salta sobre su ataque de embestida, y contraataca con el Aguijón o con Hechizos como el Clavo de la Desolación. Sin embargo, la preocupación esta vez es que es mucho más rápida y agresiva que antes. 
        Mantente alerta y no te detengas por mucho tiempo.
        </p>
        <img src="/img/Hollow_knight_23_1.jpg" alt="Guia_23_1" class="img-fluid my-2">
        <p>
        Evita su ataque aéreo de embestida con un movimiento lateral o un desplazamiento rápido, luego contraataca con el Aguijón o con Hechizos como el Espíritu Vengativo o el Clavo de la Desolación/Sombra Descendente. Salta sobre su ataque de Lanzamiento de Aguja y contraataca de la misma manera. 
        Tus contraataques normalmente solo consistirán en uno o dos golpes antes de que Hornet se retire, pero no te excedas. Mantén la paciencia y cúrate durante el ataque de Lanzamiento de Aguja, ya que Hornet se quedará en su sitio el tiempo suficiente para que te cures dos veces si tienes equipado el Amuleto de Foco Rápido. 
        A medida que la pelea avanza, Hornet comenzará a mostrar sus nuevas habilidades. Después de ciertos ataques, Hornet adoptará una postura agresiva y se quedará quieta por unos momentos. Durante este tiempo, sostendrá su Aguja sobre su cabeza en un ángulo descendente. Esta es su nueva postura de Parada.
        </p>
        <img src="/img/Hollow_knight_23_2.jpg" alt="Guia_23_2" class="img-fluid my-2">
        <p>
        Atacar durante este momento no le hará daño a Hornet, y ella contraatacará con un amplio movimiento de barrido. Evita atacar sin parar o podrías recibir varias Paradas. Saltar con el Aguijón después de su parada te colocará justo fuera del alcance de su balanceo.
        </p>
        <img src="/img/Hollow_knight_23_3.jpg" alt="Guia_23_3" class="img-fluid my-2">
        <p>
        Thankfully,a quick strike from the Nail destroys the barb. Make sure to stop attacking and clear the barbs whenever you can to keep the area clear. 
        Otra nueva estrategia que Hornet empleará durante el encuentro es el uso de púas con pinchos suspendidas por hilos. Después de cada pocos ataques, y con mayor frecuencia a medida que avanza la batalla, 
        Hornet dejará de atacar para suspender hilos con púas afiladas por toda la pantalla. Esto puede acorralarte, dificultando que te alejes de los ataques de Hornet sin recibir daño de las púas.
        Afortunadamente, un golpe rápido del Aguijón destruye la púa. Asegúrate de dejar de atacar y limpiar las púas siempre que puedas para mantener el área despejada.
        Sé paciente, mantén la arena libre de púas y evita atacar mientras Hornet está en su postura de Parada, y saldrás victorioso una vez más. Una vez que Hornet sea derrotada por segunda vez, tu siguiente parada es el Abismo.
        </p>`
  }, 
    {
    eventKey: '23', 
    title: 'El Abismo',
    content:`<p>
        Después de derrotar a Hornet por segunda vez, avanza por la arena y ve hacia la derecha. Continúa por el camino, baja y luego ve hacia la izquierda. Sigue el aullido del viento y pronto llegarás a la entrada de la Cáscara Desprendida.
        </p>
        <img src="/img/Hollow_knight_24_1.jpg" alt="Guia_24_1" class="img-fluid my-2">
        <p>
        Entra en la concha, luego avanza hacia la izquierda hasta que llegues a un objeto brillante. Examínalo para marcarte con la Marca del Rey. La marca te da acceso al Abismo, una zona debajo de la Cuenca Antigua reservada para el Rey mismo, 
        y sellada después de los horribles eventos que llevaron a la
        </p>
        <img src="/img/Hollow_knight_24_2.jpg" alt="Guia_24_2" class="img-fluid my-2">
        <p>
        Una vez que te hayas marcado, dirígete a la salida. La Cáscara Desprendida comenzará a colapsar. Después de una breve escena, recuperarás el control, lo que te permitirá explorar la zona o dirigirte al Abismo. 
        En los tramos inferiores de los Confines del Reino también hay una entrada oculta a una sub-área llamada La Colmena, donde puedes encontrar varios Amuletos útiles, un jefe y más Objetos de Colección.
        </p>
        <img src="/img/Hollow_knight_24_3.jpg" alt="Guia_24_3" class="img-fluid my-2">
        <h2>Como localizar el Abismo</h2>
        <p>
        Para seguir avanzando hacia el jefe final, regresa a la Estación del Rey. Toma la vagoneta hasta la Estación Escondida en la Cuenca Antigua, luego vuela a la izquierda a través de la siguiente pantalla y regresa a la Cuenca Antigua propiamente dicha. 
        Déjate caer por el primer agujero en el suelo que encuentres.
        </p>
        <img src="/img/Hollow_knight_24_4.jpg" alt="Guia_24_4" class="img-fluid my-2">
        <p>
        Desciende por el sinuoso camino, prestando atención a los insectos más débiles que encuentres. Ve hacia la izquierda después de llegar al suelo hasta que te topes con una enorme reja que lleva la Marca del Rey.
        Ahora que el Caballero está marcado con la Marca del Rey, simplemente acércate y la reja se abrirá, desbloqueando el Abismo.
        </p>      
        <img src="/img/Hollow_knight_24_5.jpg" alt="Guia_24_5" class="img-fluid my-2">
        <h2>Entra al Abismo</h2>
        <img src="/img/Hollow_knight_24_6.jpg" alt="Guia_24_6" class="img-fluid my-2">
        <p>
        Descender al Abismo es bastante sencillo. Aunque el enorme conducto vertical está lleno de enemigos y plataformas con pinchos, es bastante fácil dejarse caer desde la plataforma superior y usar el Aguijón hacia abajo. Esto asegurará que rebotarás en los pinchos 
        o enemigos con el Aguijón en lugar de recibir daño, especialmente si tienes equipado el Aguijón Rápido. 
        Sin embargo, es probable que te resulte más adecuado y menos arriesgado usar las plataformas flotantes para llegar al piso de abajo. Mantén presionado el botón de dirección hacia abajo en tu control o teclado para buscar superficies seguras. 
        Deberías poder ver plataformas entre las sombras.
        </p>
        <img src="/img/Hollow_knight_24_7.jpg" alt="Guia_24_7" class="img-fluid my-2">
        <p>
        Déjate caer hasta el fondo del conducto y ve hacia la derecha. Pronto comenzarás a encontrar enemigos que se parecen a la Sombra que el Caballero deja atrás cuando muere. Estos enemigos, llamados Hermanos, son débiles y se eliminan rápidamente con un solo golpe de tu Aguijón.
        </p>
        <img src="/img/Hollow_knight_24_8.jpg" alt="Guia_24_8" class="img-fluid my-2">
        <p>
        Una vez que entres en la siguiente zona, notarás unos pozos de líquido negro de aspecto siniestro. Sin embargo, una vez que el Caballero se acerque a ellos, tomarán la forma de insectos que se lanzan con tentáculos negros.
        </p>
        <img src="/img/Hollow_knight_24_9.jpg" alt="Guia_24_9" class="img-fluid my-2">
        <p>
        No hace falta decir que la piscina está cerrada, así que mantente fuera del agua. Usa la Capa de Polilla para correr y mantenerte fuera de su alcance mientras avanzas hacia la derecha.
        </p>
        <img src="/img/Hollow_knight_24_10.jpg" alt="Guia_24_10" class="img-fluid my-2">
        <p>
        Continúa avanzando a la derecha hasta que llegues a un verdadero océano de líquido oscuro, uno que no podemos cruzar sin ayuda.
        </p>
        <h2>Como cruzar el Mar Negro y conseguir la Capa Sombria</h2>
        <p>
        Una vez que llegues, salta por el saliente y entra en la zona de la derecha. Continúa avanzando hacia la derecha y salta por la pared en la primera oportunidad que tengas.
        </p>
        <img src="/img/Hollow_knight_24_11.jpg" alt="Guia_24_11" class="img-fluid my-2">
        <p>
        Una vez que llegues a la cima, sigue el camino hacia la derecha, luego déjate caer y continúa avanzando hacia la derecha. Llegarás a una figura enorme que sostiene un cuenco, el cual desborda un líquido oscuro. 
        Salta al cuenco y absorbe la esencia oscura para obtener la Capa Sombría. Este hechizo evita que recibas daño mientras te desplazas rápidamente y te permite atravesar barreras negras.
        </p>
        <img src="/img/Hollow_knight_24_12.jpg" alt="Guia_24_12" class="img-fluid my-2">
        <p>
        La Capa Sombría también te permite atravesar los Zarcillos del Vacío sin sufrir daño. Ve a la izquierda y usa tus nuevos poderes para atravesar el ataque de líquido oscuro y evitar tener que trepar. 
        Asegúrate de recoger el Huevo Arcano que está en el suelo, justo después del primer pozo. Los Huevos Arcanos son objetos que se pueden vender al Buscador de Reliquias Lemm por 1200 Geo. Vuela de regreso sobre el agua oscura hacia el faro, 
        luego continúa a la izquierda hacia el conducto principal y vuelve a subir. Cerca de la cima, el Caballero se encontrará con Hornet una vez más. Si lo deseas, habla con ella hasta que se agoten sus diálogos y luego sigue tu camino.
        </p>
        <img src="/img/Hollow_knight_24_13.jpg" alt="Guia_24_13" class="img-fluid my-2">
        <p>
        Una vez que regreses a la Estación de Vagonetas Escondida, toma la vagoneta hacia la Estación de la Reina. Tu siguiente parada es Bosque de Isma (y más allá) para encontrar un objeto poderoso y despertar al siguiente Soñador.
        </p>`
  }, 
    {
    eventKey: '24', 
    title: 'Bosque de Isma',
    content:`<p>
        Ve a la izquierda desde la Estación del Rey y busca la entrada al conducto que baja hacia la izquierda, después de los edificios grandes. Al regresar al conducto, salta por el lado izquierdo y toma la primera salida a la izquierda, 
        que te lleva de vuelta a la arena del Defensor del Estiércol.
        </p>
        <img src="/img/Hollow_knight_25_1.jpg" alt="Guia_25_1" class="img-fluid my-2">
        <p>
        Si esta es la primera vez que regresas a la arena del jefe, el Defensor del Estiércol estará esperando para hablar contigo. Si quieres, siéntete libre de charlar con él. Después de que sus diálogos se agoten, sal de la arena por la salida del lado izquierdo.
        </p>
        <img src="/img/Hollow_knight_25_2.jpg" alt="Guia_25_2" class="img-fluid my-2">
        <p>
        Avanza por los túneles serpenteantes que siguen a la arena hasta que llegues a la siguiente área de abajo. Viaja por los túneles de alcantarillado al suroeste de la arena del Defensor del Estiércol, dirigiéndote al sureste. Eventualmente, 
        descubrirás una sala solitaria con un agujero en el piso, que lleva a otro túnel abajo. Ve hacia abajo.
        </p>
        <img src="/img/Hollow_knight_25_3.jpg" alt="Guia_25_3" class="img-fluid my-2">
        <h2>Procede al bosque de Isma</h2>
        <p>
        Sigue el camino mientras se curva a la izquierda, luego desciende por el conducto, eliminando a los Flukefeys a medida que avanzas. El fondo del abismo está lleno de ácido, pero pronto harás algo al respecto. 
        Salta al saliente a la derecha y continúa siguiendo el camino hasta que llegues a un saliente con cristales rosados.
        </p>
        <img src="/img/Hollow_knight_25_4.jpg" alt="Guia_25_4" class="img-fluid my-2">
        <p>
        Carga el Corazón de Cristal y vuela hacia la derecha. Atravesarás la salida, pasarás por en medio de las secciones con pinchos en la siguiente área y llegarás a la siguiente pantalla, donde continúan las Vías Reales. 
        Si no te detienes a tiempo en el aire, aterrizarás en una sección de la pared que se desploma en el ácido. Salta rápidamente a la izquierda, deslízate hacia abajo y usa el Corazón de Cristal para volar a la siguiente pared.
        </p>
        <img src="/img/Hollow_knight_25_5.jpg" alt="Guia_25_5" class="img-fluid my-2">
        <p>
        Salta por la pared hasta el siguiente saliente y dirígete a la derecha. Salta por las plataformas, evitando o matando a los Hwurmps, luego sube al saliente en la esquina superior derecha del conducto.
        </p>
        <img src="/img/Hollow_knight_25_6.jpg" alt="Guia_25_6" class="img-fluid my-2">
        <p>
        Una vez en el saliente, salta por la pared del lado derecho.
        </p>
        <img src="/img/Hollow_knight_25_7.jpg" alt="Guia_25_7" class="img-fluid my-2">
        <p>
        Una vez que llegues a la cima, dirígete a la derecha. Aquí, encontrarás un letrero con una advertencia que dice: "Solo aquellos que demuestren su honor en combate pueden entrar en la arboleda de más allá". 
        Dado que el letrero fue escrito por el Defensor del Estiércol, y ya lo vencimos en combate singular, podemos continuar hacia la derecha y entrar en la Arboleda de Isma.
        </p>
        <img src="/img/Hollow_knight_25_8.jpg" alt="Guia_25_8" class="img-fluid my-2">
        <h2>Como encontrar la lagrima de Isma</h2>
        <p>
        Una vez que entres en la siguiente zona, salta por la pared del conducto que aparece en el techo, no mucho después de haber llegado.
        </p>
        <img src="/img/Hollow_knight_25_9.jpg" alt="Guia_25_9" class="img-fluid my-2">
        <p>
        Mata a los dos Centinelas Alados y salta por la pared izquierda. Salta de la pared izquierda y corre al saliente de la derecha, y continúa por el camino. Déjate caer por uno de los dos conductos y entrarás en una arena de batalla.
        </p> 
        <img src="/img/Hollow_knight_25_10.jpg" alt="Guia_25_10" class="img-fluid my-2">
        <p>
        Elimina las oleadas de Centinelas para despejar la arena y desbloquear las rejas.
        </p>
        <img src="/img/Hollow_knight_25_11.jpg" alt="Guia_25_11" class="img-fluid my-2">
        <p>
        Dirígete a la derecha, déjate caer por el conducto y continúa hasta que el túnel te deje en la Arboleda de Isma. Salta por las plataformas a la derecha y pronto llegarás a una gota verde brillante, 
        suspendida de una rama que, presumiblemente, crece del cuerpo de Isma.
        </p>
        <img src="/img/Hollow_knight_25_12.jpg" alt="Guia_25_12" class="img-fluid my-2">
        <p>
        Inspecciona la bola brillante para obtener la Lágrima de Isma y conseguir resistencia completa a las piscinas de ácido que puedes encontrar en todo Hallownest.
        </p>
        <h2>Vuleve a la ciudad</h2>
        <p>
        Ahora que eres invulnerable a los pozos de ácido, déjate caer del saliente inmediatamente a la izquierda y ve por debajo de la plataforma de Isma. Nada a la derecha para descubrir un conducto oculto.
        </p>
        <img src="/img/Hollow_knight_25_13.jpg" alt="Guia_25_13" class="img-fluid my-2">
        <p>
        Sube por las paredes para encontrar un Grub, luego continúa subiendo por el conducto hasta llegar a otro pozo de ácido que te lleva a la izquierda. Nada a través de la piscina y regresa al área de arriba. Sigue el camino superior, 
        luego déjate caer por el conducto en el lado izquierdo y regresa al área de la izquierda. Vuelve a subir al saliente donde el Defensor del Estiércol dejó su letrero de advertencia. Déjate caer desde el letrero hacia la izquierda, al saliente que está a la izquierda del conducto. Sigue el túnel hacia arriba.
        </p>
        <img src="/img/Hollow_knight_25_14.jpg" alt="Guia_25_14" class="img-fluid my-2">
        <p>
        En este punto, verás un tubo de líquido verde que corre en el fondo. El tubo te lleva a un conducto que sube. Salta por la pared hasta la cima y luego ve a la derecha. Sigue el camino hasta que el escenario cambie y llegues a una puerta iluminada.
        </p>
        <img src="/img/Hollow_knight_25_15.jpg" alt="Guia_25_15" class="img-fluid my-2">
        <p>
        Wall-jump to the top, then head right. Follow the path until the scenery changes and you arrive at a lit doorway.
        </p>
        <img src="/img/Hollow_knight_25_16.jpg" alt="Guia_25_16" class="img-fluid my-2">
        <p>
        Atraviesa la puerta y salta por la pared del conducto, luego toma la salida del lado izquierdo para entrar en una vivienda de la Ciudad de Lágrimas. Has llegado a la casa de la Emilitia Eterna, un insecto que logró evitar la plaga que afecta a los ciudadanos de la ciudad. 
        Golpea la palanca en la pared del lado izquierdo para abrir la puerta, luego sal para regresar a la Ciudad de Lágrimas.
        </p>
        <h2>Como encontrar la Atalaya del Vigilante</h2>
        <p>
        Ahora que estás de regreso en las calles de la Ciudad de Lágrimas, es hora de dirigirte a la sub-área de la Atalaya del Vigilante. Para encontrarla, ve a la izquierda desde la casa de Emilitia y salta por encima de la entrada al conducto que te lleva de vuelta a las Vías Reales. 
        Entra por la puerta a la izquierda.
        </p>
        <img src="/img/Hollow_knight_25_17.jpg" alt="Guia_25_17" class="img-fluid my-2">
        <p>
        Toma el primer ascensor hacia arriba, luego dirígete a la izquierda y detente cuando llegues a la sección de vidrio del suelo.
        </p>
        <img src="/img/Hollow_knight_25_18.jpg" alt="Guia_25_18" class="img-fluid my-2">
        <p>
        Ahora que tenemos las Alas de Monarca, podemos acceder a una nueva zona. Haz un doble salto hasta el saliente de la izquierda y salta a través del techo para entrar en la siguiente área.
        </p>
        <h2>Entra a la Atalaya del Vigilante</h2>
        <p>
        Has llegado al piso inferior de la Aguja del Vigilante, una subárea que se encuentra entre la Estación del Rey y la ciudad. La sala en la que estás se extiende hacia arriba. Al otro lado, en el piso inferior, 
        hay una reja que bloquea tu paso hacia un pasillo. Esta reja se interpone en el camino del progreso justo y debe ser abierta.
        </p>
        <img src="/img/Hollow_knight_25_19.jpg" alt="Guia_25_19" class="img-fluid my-2">
        <p>
        Para hacerlo, asciende por la sala mientras enfrentas a los Centinelas Alados. Haz un salto en pared hasta llegar a la parte superior y avanza hacia la izquierda hasta encontrar una abertura en el suelo, a la derecha de una puerta. 
        Deberías ver un letrero que indica un Banco.
        </p>
        <img src="/img/Hollow_knight_25_20.jpg" alt="Guia_25_20" class="img-fluid my-2">
        <p>
        Pasa por la salida de la izquierda para encontrar el Banco del área, luego regresa a esta zona y desciende. Sigue el camino sinuoso, eliminando a los distintos insectos que se crucen en tu camino. Al final, baja a la pequeña arena de abajo. 
        Pero asegúrate de recoger los Geo del cofre en el saliente al otro lado del hueco.
        </p>
        <img src="/img/Hollow_knight_25_21.jpg" alt="Guia_25_21" class="img-fluid my-2">
        <p>
        Elimina al Centinela Pesado y al Centinela Alado en la sala inferior para desbloquear la reja. Cuando todo esté despejado, dirígete a la derecha y acciona la palanca en el techo para abrir la reja en la parte inferior derecha del conducto, mencionada anteriormente.
        </p>
        <img src="/img/Hollow_knight_25_22.jpg" alt="Guia_25_22" class="img-fluid my-2">
        <p>
        Salta hacia abajo y atraviesa la reja recién abierta, luego sigue el camino hacia arriba. Pronto te encontrarás con un ascensor roto. Haz un salto en pared por el hueco del ascensor y aterriza en el saliente de la izquierda, donde descubrirás una palanca.
        </p>
        <img src="/img/Hollow_knight_25_23.jpg" alt="Guia_25_23" class="img-fluid my-2">
        <p>
        Acciona la palanca para desbloquear un atajo de regreso al Banco del área, luego continúa hacia la derecha por el camino y sube a la siguiente zona. 
        Una vez allí, sigue el camino en el nivel superior hacia la izquierda y entra en la siguiente área. También puedes acceder desde el nivel inferior, pero tendrás que enfrentarte a enemigos mucho más grandes.
        </p>
        <img src="/img/Hollow_knight_25_24.jpg" alt="Guia_25_24" class="img-fluid my-2">
        <p>
        Acciona la palanca en la siguiente sala para desbloquear un atajo entre la Torre del Vigilante y el Santuario del Alma.
        </p>
        <img src="/img/Hollow_knight_25_25.jpg" alt="Guia_25_25" class="img-fluid my-2">
        <h2>Como conseguir el Hechizo de Alma Sombría</h2>
        <p>
        Si obtuviste la Llave Elegante de Astuto después de encontrar la Llave del Comerciante en Picos de Cristal, ahora puedes adquirir la mejora del Hechizo Espíritu Vengativo: Alma Sombría. Tendrás que hacer un pequeño desvío para conseguir el hechizo, así que, si lo quieres ahora, sigue leyendo. Pero si prefieres saltarlo o conseguirlo más tarde, haz clic aquí para ir a la siguiente sección. 
        Para llegar a la mejora, dirígete a la izquierda y entra en la zona de la Ciudad de Lagrimas, pasando la palanca que acabas de accionar en el corredor. Entra en el ascensor a la izquierda y súbelo dos pisos.
        Una vez que llegues a la cima, sal a la derecha y continúa a través de la puerta escalofriante para entrar propiamente en el Santuario del Alma.
        </p>
        <img src="/img/Hollow_knight_25_26.jpg" alt="Guia_25_26" class="img-fluid my-2">
        <p>
        Salta por las plataformas y entra en el área de arriba, luego toma la primera salida a la izquierda y avanza hasta que entres por la puerta a la siguiente habitación.
        </p>
        <img src="/img/Hollow_knight_25_27.jpg" alt="Guia_25_27" class="img-fluid my-2">
        <p>
        Desde allí, toma el elevador hacia arriba, pasa la pared rota donde se encuentra el Banco de Cornifer, y sigue el camino para llegar a una puerta cerrada.
        </p>
        <img src="/img/Hollow_knight_25_28.jpg" alt="Guia_25_28" class="img-fluid my-2">
        <p>
        Usa la Llave Elegante para abrir la puerta, luego atraviesa la puerta para encontrar una arena con Errores flotantes y un Guerrero del Alma.
        </p>
        <img src="/img/Hollow_knight_25_29.jpg" alt="Guia_25_29" class="img-fluid my-2">
        <p>
        Derrota al Guerrero, luego sigue el camino a la izquierda. Sube por la pared hasta el siguiente nivel, luego inspecciona el dispositivo en el centro de la habitación para absorber la esencia del Vacío y obtener el potente Hechizo Alma Sombría.
        </p>
        <img src="/img/Hollow_knight_25_30.jpg" alt="Guia_25_30" class="img-fluid my-2">
        <p>
        Golpea la palanca a la derecha para desbloquear un atajo de regreso al elevador. Baja y desanda tus pasos hasta que llegues de nuevo al Campanario del Vigilante.
        </p>
        <h2>Sube la atalaya</h2>
        <p>
        Una vez que regreses al Campanario del Vigilante y estés en la habitación que está justo después del corredor entre las dos secciones, toma el camino de arriba. Ve a la derecha para llegar al elevador, luego súbete en él al siguiente nivel.
        </p>
        <img src="/img/Hollow_knight_25_31.jpg" alt="Guia_25_31" class="img-fluid my-2">
        <p>
        Sal del elevador, ve a la izquierda y entra en el agujero del techo al final del pasillo. Sigue el camino hasta que encuentres otro elevador. Súbete en él hasta la cima. Entra en la arena para comenzar la lucha contra los Caballeros Vigilantes.
        </p>`
  }, 
    {
    eventKey: '25', 
    title: 'Caballeros Vigilantes',
    content:`<p>
        Durante el encuentro, debes derrotar a seis Caballeros Vigilantes (cinco Caballeros Vigilantes si destruyes la araña de luces antes de entrar en la arena). 
        La pelea comenzará con un solo Caballero Vigilante, pero a intervalos determinados, o al derrotar al Caballero Vigilante actual, más serán poseídos y despertados por un enjambre de moscas naranjas que revolotean cerca del techo.
        </p>
        <img src="/img/Hollow_knight_26_1.jpg" alt="Guia_26_1" class="img-fluid my-2">
        <p>
        A pesar del gran número de Caballeros Vigilantes, no tendrás que luchar contra más de dos a la vez. El número puede estar en tu contra, pero afortunadamente, los Caballeros Vigilantes solo usan tres ataques durante la batalla, 
        y cada uno puede ser manejado con experiencia. Poner en práctica las siguientes estrategias puede resultar difícil, pero con un poco de tiempo, los Caballeros Vigilantes caerán ante tu Aguijón.
        </p>
        <img src="/img/Hollow_knight_26_2.jpg" alt="Guia_26_2" class="img-fluid my-2">
        <p>
        El ataque más simple que usarán los Caballeros Vigilantes solo ocurre si el jefe termina un ataque cerca de ti. Este ataque de doble corte se anuncia con mucha antelación, así que simplemente corre para alejarte y lanza Espíritu Vengativo, 
        o salta y usa el Salto de Aguijón desde el caparazón del Caballero Vigilante.
        </p>
        <img src="/img/Hollow_knight_26_3.jpg" alt="Guia_26_3" class="img-fluid my-2">
        <p>
        Los caballeros también usan un ataque de giro rodante que cubre todo el largo de la arena. Este ataque es bastante simple de saltar, y puedes atacar hacia abajo con el Aguijón mientras el Caballero Vigilante pasa. 
        Si te resulta difícil sincronizar un corte descendente, salta sobre el Caballero mientras rueda, luego corre para acortar la distancia y ataca hasta que inicie un nuevo ataque.
        </p>
        <img src="/img/Hollow_knight_26_4.jpg" alt="Guia_26_4" class="img-fluid my-2">
        <p>
        El último ataque que usarán los Caballeros Vigilantes es un ataque de giro rebotante. Este ataque es muy similar al que usa el Defensor del Estiércol, con una gran diferencia: los Caballeros Vigilantes pierden impulso después de cada rebote. 
        El ataque comienza con un gran rebote, seguido de un pequeño rebote. Usa este conocimiento a tu favor y evita tratar de correr o deslizarte por debajo del segundo rebote para evitar ser empujado a una esquina.
        </p>
        <img src="/img/Hollow_knight_26_5.jpg" alt="Guia_26_5" class="img-fluid my-2">
        <p>
        La técnica del Salto de Aguijón durante la pelea funciona de maravilla. Los Caballeros Vigilantes no tienen una forma significativa de contrarrestarla, especialmente si usas la Marca de Orgullo o el Aguijón Largo para aumentar tu alcance. 
        No es tan difícil evitar sus ataques si te mantienes alejado del suelo, ya que el doble corte y el ataque de giro rodante solo golpean cerca del suelo. Puedes usar el Manto Sombrío que acabas de conseguir para atravesar a los Caballeros Vigilantes 
        cuando intenten acorralarte. Aprende los ataques de los jefes, usa estas técnicas y prueba los Talismánes recomendados anteriormente, y derrotarás a los Caballeros Vigilantes, abriéndote camino hacia el siguiente Soñador, Lurien el Vigilante. 
        Tu siguiente objetivo es dirigirte al Cañón de la Niebla y localizar al último Soñador.
        </p>`
  }, 
    {
    eventKey: '26', 
    title: 'Cañon de la Niebla',
    content:`<p>
        Habiendo derrotado a los Caballeros Vigilantes, ve a la derecha para salir de la arena del jefe y haz un salto de pared en el hueco contra la pared hasta el siguiente nivel. Sigue el camino a la izquierda, 
        luego haz un salto de pared para subir por el hueco y toma la salida hacia el área de arriba. Dirígete a la izquierda y sube en el elevador hasta la cima. A la derecha, encontrarás a Lurien el Vigilante, durmiendo en una losa. 
        Y a la izquierda hay un telescopio con el que puedes interactuar para ver la lúgubre ciudad de abajo. No hay mucho más que puedas hacer con él, así que siéntete libre de contemplar la ciudad.
        </p>
        <img src="/img/Hollow_knight_27_1.jpg" alt="Guia_27_1" class="img-fluid my-2">
        <p>
        Usa el Aguijón Onírico en el Vigilante para entrar en el sueño de Lurien. Una vez dentro, sigue las plataformas a la derecha y golpéa a Lurien con el Aguijón hasta que entregue el alma. Canaliza el Alma para absorber su esencia y poner fin al sueño.
        </p>
        <h2>Vuelve al cañon de niebla</h2>
        <p>
        Una vez que despiertes, dirígete a la Estación de Vaguamundo del Rey y toma el Vagamundo hasta la Estación de la Reina. Desde el Banco, ve a la derecha y entra en la zona principal de las Vías de Vaguamundo. 
        Salta por las plataformas y toma la salida superior izquierda hacia el Cañón de la Niebla.
        </p>
        <img src="/img/Hollow_knight_27_2.jpg" alt="Guia_27_2" class="img-fluid my-2">
        <h2>Donde encontrar el mapa del cañon de niebla</h2>
        <p>
        Ahora que tienes el Manto Sombrío, puedes obtener el mapa del Cañón de la Niebla. En esta área, tendrás que lidiar con enemigos explosivos, así que ten precaución (especialmente si tienes Talismánes de ataque de compañeros), y cúrate a menudo.
        Salta hasta el final por el hueco vertical y toma la salida superior izquierda para llegar al siguiente área.
        </p>
        <img src="/img/Hollow_knight_27_3.jpg" alt="Guia_27_3" class="img-fluid my-2">
        <p>
        Esta nueva sección contiene ácido y varios enemigos explosivos, los Ooma, así que sube con precaución y toma la salida superior derecha.
        </p>
        <img src="/img/Hollow_knight_27_4.jpg" alt="Guia_27_4" class="img-fluid my-2">
        <p>
        En esta área, salta a través de las plataformas y pronto llegarás a un rayo vertical negro que bloquea el camino. Usa el Manto Sombrío para atravesarlo, luego asciende por las plataformas.
        </p>
        <img src="/img/Hollow_knight_27_5.jpg" alt="Guia_27_5" class="img-fluid my-2">
        <p>
        En la plataforma más alta, busca un pasaje estrecho en una pared arriba y a la izquierda. Entra en el pasaje y avanza, notando el trozo de papel desechado, hasta que llegues a nuestro amigo Cornifer.
        </p>
        <img src="/img/Hollow_knight_27_6.jpg" alt="Guia_27_6" class="img-fluid my-2">
        <p>
        Compra el mapa a Cornifer por 150 geo luego vuelve a bajar y toma la salida de la derecha.
        </p>
        <h2>Donde encontrar los Archivos de la maestra</h2>
        <p>
        En esta área, encontrarás un montón de pequeños enemigos, los Uoma, esparcidos por todas partes, así que avanza con cuidado y evita las burbujas explosivas de color naranja que están en el suelo. 
        Si lo deseas, puedes destruirlas con Espíritu Vengativo o Alma Sombría.
        </p>
        <img src="/img/Hollow_knight_27_7.jpg" alt="Guia_27_7" class="img-fluid my-2">
        <p>
        Continúa, saltando a través de las plataformas o nadando a través del ácido, y luego toma la salida del lado derecho. 
        Entrarás en un hueco vertical donde pequeños enjambres de Luméculas se unen regularmente para crear explosiones eléctricas. Espera una abertura cuando las moscas no estén descargando electricidad, luego corre a través de ellas.
        </p>
        <img src="/img/Hollow_knight_27_8.jpg" alt="Guia_27_8" class="img-fluid my-2">
        <p>
        Baja por el hueco y toma la salida del lado izquierdo. Avanza a la izquierda, a través de la siguiente área, luego toma la salida de la izquierda, y llegarás a los Archivos del Maestro. Habla con Quirrel, luego ve a la izquierda y 
        destruye el soporte de madera para desbloquear un atajo de regreso a la Estación de la Reina. Cuando estés listo, dirígete dentro del edificio para comenzar tu viaje a través de los Archivos de la maestra
        </p>
        <img src="/img/Hollow_knight_27_9.jpg" alt="Guia_27_9" class="img-fluid my-2">
        <h2>Entra a los Archivos</h2>
        <p>
        Una vez dentro, ve a la derecha y sube en la primera oportunidad para encontrar el Banco de los Archivos del Maestro. Descansa, luego baja al fondo y entra al área de abajo. 
        Los caminos de la izquierda y la derecha conducen al mismo lugar, pero el de la izquierda tiene menos enemigos. Y como tenemos la Lágrima de Isma, el ácido no representa una amenaza.
        Baja hasta el fondo y desciende por el hueco en el centro del suelo y entra en el área de abajo para iniciar la lucha contra el jefe Uumuu.
        </p>
        <img src="/img/Hollow_knight_27_10.jpg" alt="Guia_27_10" class="img-fluid my-2">`
  }, 
    {
    eventKey: '27', 
    title: 'Uumuu',
    content:`<h2>Como derrotar a Uumuu</h2>
        <p>
        La pelea contra Uumuu es bastante única entre el panteón de jefes de Hollow Knight, ya que el jefe es completamente inmune al daño durante la mayor parte de la pelea. No te molestes en golpear al jefe cuando está a la ofensiva. En su lugar, concéntrate en evitar los ataques de Uumuu y en mantener tu salud al máximo.
        Durante la pelea, Uumuu se concentra principalmente en negar el acceso a grandes porciones de la pantalla e infligir daño con ataques eléctricos.
        El primer ataque que Uumuu emplea causa una serie de pequeñas explosiones eléctricas que aparecen en tu ubicación. Sigue saltando alrededor de la arena en círculos grandes durante la duración del ataque para evitar recibir daño.
        </p>
        <img src="/img/Hollow_knight_28_1.jpg" alt="Guia_28_1" class="img-fluid my-2">
        <p>
        Durante el segundo ataque, el jefe dejará de moverse y hará que surjan explosiones eléctricas por toda la arena. Hay una pequeña preparación antes de este ataque, así que intenta encontrar un saliente (o salta al ácido en la parte inferior de la pantalla) para evitar el daño.
        Si puedes encontrar rápidamente un saliente seguro, esta es una excelente oportunidad para canalizar Alma y curarte tanto como puedas, especialmente si trajiste contigo los Talismánes Enfoque Profundo y Enfoque Rápido.
        </p>
        <img src="/img/Hollow_knight_28_2.jpg" alt="Guia_28_2" class="img-fluid my-2">
        <p>
        Pronto, Quirrel aparecerá, gritará y realizará un ataque de embestida que temporalmente destruye el exterior gomoso de Uumuu, forzando a la bestia parecida a una medusa a desinflarse ligeramente. Cierra la distancia cuando esto suceda y realiza tantos ataques como puedas. 
        Usa Espíritu Vengativo o Alma Sombría si estás demasiado lejos del jefe. También puedes usar este tiempo para curarte.
        </p>
        <img src="/img/Hollow_knight_28_3.jpg" alt="Guia_28_3" class="img-fluid my-2">
        <p>
        Uumuu se regenerará en breve, así que aléjate cuando eso suceda y repite el ciclo. Mantén la paciencia, sigue moviéndote y golpea con tus hechizos o Artes de Aguijón más potentes para terminar rápidamente la pelea.
        Con Uumuu perdiendo la chispa, es hora de empezar a prepararse para el final. Tienes un Soñador entre tú y el capítulo final del juego.
        </p>`
  }, 
    {
    eventKey: '28', 
    title: 'Preparandose para el final',
    content:`<p>
        Baja hasta el fondo. Nada hacia la izquierda o la derecha hasta que veas un gran hueco vertical. Haz un salto de pared en la pared izquierda, luego salta y corre sobre el gigantesco tubo lleno de líquido, y llegarás a un saliente.
        </p>
        <img src="/img/Hollow_knight_29_1.jpg" alt="Guia_29_1" class="img-fluid my-2">
        <p>
        Inspecciona la figura en el tubo y Quirrel llegará. Habla con él para saber que él también se sintió atraído por este lugar. Pronto te hablará de su historia con la Maestra, 
        luego usará su máscara para destruir los sellos que la protegen. Usa el Aguijón Onírico para entrar en el sueño, luego avanza a la derecha hasta que llegues a una gran plataforma.
        </p>
        <img src="/img/Hollow_knight_29_2.jpg" alt="Guia_29_2" class="img-fluid my-2">
        <p>
        Pronto, Monomon la Maestra aparecerá. Golpéala con tu Aguijón hasta que se disperse en Esencia, luego canaliza Alma para absorberla, destruyendo el tercer y último sello del Templo del Huevo Negro.
        </p>
        <img src="/img/Hollow_knight_29_3.jpg" alt="Guia_29_3" class="img-fluid my-2">
        <h2>Vuelve al templo del Huevo Negro</h2>
        <p>
        Ahora que el sello final ha sido extinguido, puedes entrar al Templo del Huevo Negro en los Cruces Olvidados. Viaja de regreso a la Estación de Vaguamundo, luego toma el Vagamundo de vuelta a Bocasucia. 
        Salta por el pozo y entrarás en los Cruces Olvidados, que ahora se han convertido en los Cruces Infectados. Dirígete a la derecha y pronto llegarás de nuevo al templo.
        </p>
        <img src="/img/Hollow_knight_29_4.jpg" alt="Guia_29_4" class="img-fluid my-2">
        <p>
        Entra, y la puerta se abrirá de golpe con un rugido ensordecedor.
        </p>
        <img src="/img/Hollow_knight_29_5.jpg" alt="Guia_29_5" class="img-fluid my-2">
        <p>
        Entra por la nueva abertura y camina hacia la derecha, a través de la oscuridad, y pronto llegarás al Banco final.
        </p>
        <img src="/img/Hollow_knight_29_6.jpg" alt="Guia_29_6" class="img-fluid my-2">
        <p>
        Inspecciona el sello a la derecha del Banco y se agregará un rastreador a la esquina inferior derecha de la pantalla de tu inventario, que lleva un registro de tu porcentaje total de finalización del juego.
        </p>
        <img src="/img/Hollow_knight_29_7.jpg" alt="Guia_29_7" class="img-fluid my-2">
        <p>
        En este punto, dirigirse a la derecha te llevará al encuentro final con el jefe. Esta es la última oportunidad para conseguir mejoras, objetos, hechizos, talismanes, y para completar cualquier encuentro opcional con jefes. 
        Algunas áreas opcionales incluyen los Jardines de la Reina, La Colmena, el Palacio Blanco, los Acantilados Aulladores, y más. Explora a gusto, luego dirígete a la derecha hasta que llegues a la siguiente área e 
        inicies el encuentro con el jefe final: The Hollow Knight.
        </p>`
  }, 
    {
    eventKey: '29', 
    title: 'Hollow Knight',
    content:`<h2>Como derrotar al Hollow Knight</h2>
        <p>
        The Hollow Knight es un jefe con múltiples fases, movimientos relativamente rápidos y una amplia gama de ataques y técnicas, cada una con un alcance considerable. Sin embargo, 
        debido a su naturaleza infectada, tienen algunas debilidades que pueden ser explotadas.
        </p>
        <img src="/img/Hollow_knight_30_1.jpg" alt="Guia_30_1" class="img-fluid my-2">
        <h2>Fase 1</h2>
        <p>
        El primer ataque utilizado por The Hollow Knight es un ataque de triple corte. The Hollow Knight avanza a medida que realiza cada ataque, y su Aguijón es bastante largo, lo que le permite cubrir una cuarta parte de la arena.
        </p>
        <img src="/img/Hollow_knight_30_2.jpg" alt="Guia_30_2" class="img-fluid my-2">
        <p>
        Debido a que el jefe no ataca hacia arriba, puedes contrarrestar este ataque saltando por encima de The Hollow Knight y usando el Salto de Aguijón en su cabeza hasta que se desvanezca y comience el siguiente ataque. 
        Pero ten en cuenta que el jefe saltará en ocasiones y puede dañarte si estás por encima de su cabeza. Con el Manto Sombrío, puedes correr a través de The Hollow Knight durante este movimiento y contraatacar después de recuperar el control.
        </p>
        <img src="/img/Hollow_knight_30_3.jpg" alt="Guia_30_3" class="img-fluid my-2">
        <p>
        El segundo movimiento utilizado por The Hollow Knight es una embestida de avance. Durante este ataque, The Hollow Knight empuña su Aguijón como una lanza antes de lanzarse rápidamente hacia adelante, cruzando alrededor de un cuarto de la arena.
        </p>
        <img src="/img/Hollow_knight_30_4.jpg" alt="Guia_30_4" class="img-fluid my-2">
        <p>
        Como en el triple corte, contrarresta este ataque saltando por encima de la embestida y luego usando el Salto de Aguijón en la cabeza del jefe. El siguiente movimiento ni siquiera es un ataque si juegas bien tus cartas. Durante la pelea, 
        el Hollow Knight adoptará una postura defensiva de parada y sostendrá su Aguijón por encima de su cabeza con la punta apuntando diagonalmente hacia el suelo.
        </p>
        <img src="/img/Hollow_knight_30_5.jpg" alt="Guia_30_5" class="img-fluid my-2">
        <p>
        Durante este tiempo, atacar al jefe resultará en un amplio contraataque de barrido. Evita atacar y usa esta oportunidad para curarte si tienes el Talismán Enfoque Rápido equipado.
        </p>
        <h2>Fase 2</h2>
        <p>
        Después de infligir suficiente daño al Hollow Knight, gritará como lo hizo al principio de la pelea, y la Fase Dos comenzará. En este momento, el jefe obtendrá ataques nuevos y más desesperados que cubren una parte más grande de la pantalla. 
        El Hollow Knight seguirá usando el triple corte, la embestida y los ataques de parada. Mantén tu estrategia para contrarrestar esos ataques mientras te mantienes atento a los nuevos movimientos. 
        El primer nuevo ataque que el Hollow Knight usará durante la Fase Dos es una ráfaga de ácido naranja. La capa de The Hollow Knight se abrirá, revelando grumos de moco naranja.
        </p>
        <img src="/img/Hollow_knight_30_6.jpg" alt="Guia_30_6" class="img-fluid my-2">
        <p>
        El jefe dispara los orbes en trayectorias arqueadas a través de la pantalla, comenzando cerca del suelo, luego elevándose a medida que el ataque continúa. Usa el Manto Sombrío para correr a través del primer orbe, luego ataca mientras el jefe lanza ácido por encima de tu cabeza.
        El segundo ataque que el Hollow Knight usará durante la Fase Dos es un ataque de embestida de dos etapas contra el suelo. Durante este movimiento, el jefe salta en el aire antes de estrellarse contra el suelo, 
        causando que pilares de energía infecciosa broten a intervalos fijos a través de la pantalla.
        </p>
        <img src="/img/Hollow_knight_30_7.jpg" alt="Guia_30_7" class="img-fluid my-2">
        <p>
        Habrá una breve ventana en la que se revelará la ubicación de los pinchos, así que colócate entre ellos para evitar recibir daño. El ataque ocurre rápido, así que prepárate para los pilares observando el suelo después de que el Hollow Knight se lance al aire. 
        Busca puntos en el suelo que brillen con luz naranja, envueltos en zarcillos oscuros, y párate entre dos de ellos.
        </p>
        <img src="/img/Hollow_knight_30_8.jpg" alt="Guia_30_8" class="img-fluid my-2">
        <p>
        Si eres lo suficientemente rápido, puedes curarte durante este tiempo usando el Enfoque Rápido. También puedes lanzar Espíritu Vengativo o Alma Sombría, si tienes cuidado. Pero estos hechizos causan algo de retroceso, así que considera el riesgo primero.
        </p>
        <h2>Fase 3</h2>
        <p>
        Durante la tercera fase, el Hollow Knight se vuelve cada vez más loco por la infección y obtiene varios ataques nuevos. Sin embargo, deja de usar el ataque de embestida y la parada de la Fase Uno.
        </p>
        <img src="/img/Hollow_knight_30_9.jpg" alt="Guia_30_9" class="img-fluid my-2">
        <p>
        Al comienzo de la Fase Tres, el Hollow Knight se empalará a sí mismo con su Aguijón varias veces. Usa esta oportunidad para curar cualquier daño que te quede de las Fases Uno y Dos y prepárate para los nuevos ataques de la Fase Tres. 
        El primero de estos nuevos movimientos es un ataque de embestida aérea. Aquí, el jefe flota en el aire y apunta a la ubicación actual del Caballero. Cuando está cerca, el Hollow Knight lanza su cuerpo hacia el Caballero, rebotando en el suelo. El jefe quedará momentáneamente aturdido después del ataque.
        </p>
        <img src="/img/Hollow_knight_30_10.jpg" alt="Guia_30_10" class="img-fluid my-2">
        <p>
        Corre para evitar el ataque y contraataca con Espíritu Vengativo, Espectros Aulladores, o con el Aguijón. Ten en cuenta que atacar con Espíritu Aullador no detendrá al Hollow Knight de golpearte, 
        así que asegúrate de haberte movido fuera de la zona de ataque antes de lanzar el hechizo.
        </p>
        <img src="/img/Hollow_knight_30_11.jpg" alt="Guia_30_11" class="img-fluid my-2">
        <p>
        El segundo nuevo ataque de la Fase Tres que usa el Hollow Knight es un ataque de lanzamiento de ácido que cubre toda la habitación. El jefe flota en el aire antes de abrir su capa para revelar grumos de ácido naranja, 
        que luego se extenderán por toda la arena. Evita correr en este momento, a menos que te ayude a llegar a un área despejada. Concéntrate en quedarte en un solo lugar y dar pasos ligeros de un lado a otro para evitar el ácido.
        </p>
        <img src="/img/Hollow_knight_30_12.jpg" alt="Guia_30_12" class="img-fluid my-2">
        <p>
        De vez en cuando, el jefe intentará usar el mismo triple corte de la Fase Uno, pero puede cansarse y caer al suelo después del primer corte. Usa esta oportunidad para contraatacar o curarte. Mantén la paciencia, concéntrate en evitar el daño y en mantener tu salud al máximo, 
        y pronto El Hollow Knight colapsará y la victoria será tuya.
        </p>`
  }];
function GuiaPage() {
  const [activeKey, setActiveKey] = useState(guiaSections[0].eventKey);
  return (
    <div className="container guia-container">
      {}
      {}
      <Accordion activeKey={activeKey} onSelect={(key) => setActiveKey(key)}>
        {guiaSections.map((section, index) => {
          const nextSectionKey = guiaSections[index + 1] ? guiaSections[index + 1].eventKey : null;

          return (
            <Accordion.Item eventKey={section.eventKey} key={index}>
              <Accordion.Header>{section.title}</Accordion.Header>
              <Accordion.Body>
                <div dangerouslySetInnerHTML={{ __html: section.content }} />
                {}
                {nextSectionKey && (
                  <Button 
                    variant="primary" 
                    className="mt-3"
                    onClick={() => setActiveKey(nextSectionKey)}
                  >siguiente sección
                  </Button>
                )}
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </div>
  );
}
export default GuiaPage;