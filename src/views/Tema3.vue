<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 El átomo: unidad fundamental
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8
          .row.justify-content-center.mb-4
            .col-sm-12.col-lg-3.d-none.d-lg-block
              img(src='@/assets/curso/temas/t3/1.svg', alt='')
            .col-sm-12.col-lg-9
                p.mb-0 Los primeros en cuestionarse acerca de la composición de la materia fueron los griegos Leucipo y su discípulo Demócrito en el siglo V a. de C. Estos filósofos expresaron la idea de que toda la materia estaba formada por muchas partículas pequeñas e indivisibles llamadas átomos. No obstante, otros pensadores de la época sostenían que la materia era continua, es decir, que podía dividirse indefinidamente.  Una característica de esta época fue la ausencia de experimentación y verificación empírica de las ideas, por lo que las conclusiones se basaban únicamente en el razonamiento lógico. 
          p.mb-0 Estas inquietudes fueron retomadas en Europa solo hasta el siglo XVII, cuando se intentó explicar las propiedades de los gases, entre ellos, el aire. La experimentación comenzó a formar parte del ejercicio de los científicos, lo que les permitió medir las cantidades de sustancias que reaccionaban para formar otras diferentes. Las evidencias experimentales de algunas investigaciones científicas apoyaron el concepto del “atomismo”, lo que condujo de manera gradual, a las definiciones modernas de elementos y compuestos. 
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/2.svg', alt='')
      
      
      Separador
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.1 Teoría atómica
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/3.svg', alt='')
        .col-sm-12.col-lg-6
            p.mb-0 En 1808, el científico inglés y profesor John Dalton, formuló una definición precisa de las unidades indivisibles con las que está formada la materia y que llamamos átomos. El trabajo de Dalton marcó el principio de la era de la química moderna. Las hipótesis sobre la naturaleza de la materia, en las que se basa la teoría atómica de Dalton, pueden resumirse como sigue (Chang, 2021):
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8
          ul.lista-ul--color.mb-0
            li.d-flex
              i.fas.fa-check-circle.icon-list
              p.mb-0 Los elementos están formados por partículas extremadamente pequeñas llamadas átomos. 

            li.d-flex
              i.fas.fa-check-circle.icon-list
              p.mb-0 Todos los átomos de un mismo elemento son idénticos, tienen igual tamaño, masa y propiedades químicas, pero son diferentes a los átomos de otros elementos. 

            li.d-flex
              i.fas.fa-check-circle.icon-list
              p.mb-0 Los compuestos están formados por átomos de más de un elemento, y estos pueden combinarse entre sí en proporciones de números enteros o fracciones sencillas, es decir que, para cualquier compuesto, los átomos presentes siempre están en la misma proporción (ley de las proporciones definidas de Proust). Por ejemplo, si se analizan muestras de dióxido de carbono gaseoso de diferentes fuentes, en todas ellas se encontrará la misma proporción de masa de carbono y oxígeno. 

            li.d-flex
              i.fas.fa-check-circle.icon-list
              p.mb-0 Los átomos del mismo elemento pueden combinarse en más de una proporción para formar dos o más compuestos (ley de las proporciones múltiples). Por ejemplo, el carbono forma dos compuestos estables con el oxígeno, llamados monóxido de carbono y dióxido de carbono. 

            li.d-flex
              i.fas.fa-check-circle.icon-list
              p.mb-0 Una reacción química implica sólo la separación, combinación o reordenamiento de los átomos, nunca supone la creación o destrucción de los mismos.  
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/4.png', alt='')
      
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.2 Estructura del átomo
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-2.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/5.svg', alt='')
        .col-sm-12.col-lg-10
            p.mb-0 Con base en la teoría atómica de Dalton, un átomo se describe como una partícula extremadamente pequeña e indivisible. Sin embargo, una serie de investigaciones iniciadas aproximadamente en 1850, y que continuaron hasta el siglo XX, demostraron que los átomos tienen estructura interna, es decir, que están formados por partículas subatómicas. Estas investigaciones condujeron al descubrimiento de tres partículas: electrones, protones y neutrones. 
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton.bg-color-12.p-4.hcard-5
            .row.justify-content-center.mb-3
              .col-4.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t3/6.svg', alt='')

            .bg-color-15.mb-4.m-auto(data-aos="fade-left")
              h3.px-4.py-1.text-center Electrón
            p.mb-0 Es una partícula subatómica con carga negativa (-1.6022 x 10-19 C, donde C corresponde a coulombs) y masa de 9.1 x 10-28 g, que se localiza con probabilidad en la periferia del átomo. 
        .col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton.bg-color-12.p-4.hcard-5
            .row.justify-content-center.mb-3
              .col-4.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t3/7.svg', alt='')

            .bg-color-15.mb-4.m-auto(data-aos="fade-left")
              h3.px-4.py-1.text-center Protón
            p.mb-0 Es una partícula subatómica con carga positiva (1.6022 x 10-19 C), que se encuentra en el núcleo atómico y que tienen una masa de 1.67262 x 10-24 g. 

        .col-sm-6.col-lg-4.mb-4.mb-lg-0
          .tarjeta--boton.bg-color-12.p-4.hcard-5
            .row.justify-content-center.mb-3
              .col-4.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t3/8.svg', alt='')

            .bg-color-15.mb-4.m-auto(data-aos="fade-left")
              h3.px-4.py-1.text-center Neutrón
            p.mb-0 Es una partícula eléctricamente neutra presente en el núcleo atómico, con una masa ligeramente mayor que la masa de los protones (1.67493 x 10-24 g). 
      
      .tarjeta.color-acento-contenido.px-3.py-4.mb-5(data-aos="fade-left")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/temas/t3/9.svg", alt="")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1.tit-cus-1 Modelos atómicos.
                p.mb-0 Para profundizar sobre la evolución de los modelos atómicos a lo largo de la historia, lo invitamos a consultar el siguiente sitio web: https://concepto.de/modelos-atomicos/ 
              .col-sm-auto
                a.boton.color-acento-botones(href="https://concepto.de/modelos-atomicos/" target="_blank")
                  span.tit-cus-2 Enlace web
                  i.fas.fa-link.tit-cus-2

      .mb-5 &nbsp;
      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Número atómico, número de masa e isótopos

      p.mb-5(data-aos='fade-right') Todos los átomos se pueden identificar por el número de protones y neutrones que contienen.
      .row.justify-content-center.mb-4(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/10.svg', alt='')
        .col-sm-12.col-lg-7
            p.mb-4 #[b El número atómico (Z)] es el número de protones en el núcleo del átomo de un elemento. En un átomo neutro el número de protones es igual al número de electrones, de manera que el número atómico también indica el número de electrones presentes en un átomo. Así es que, la identidad química de un átomo queda determinada por su número atómico. 
            p.mb-0 #[b El número de masa (A)] o número másico es el número total de neutrones y protones presentes en el núcleo de un átomo. En general el número de masa está dado por:

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/11.png', alt='')
        .col-sm-12.col-lg-7
          .bg-color-4.mb-4.m-auto.w-fit.br-5
              h5.px-5.py-3 Número de masa = número de protones + número de neutrones 

          p.mb-3 Lo que es igual que:
          .bg-color-4.mb-4.m-auto.w-fit.br-5
              h5.px-5.py-3 Número de masa = número atómico + número de neutrones
          p.mb-0 Por tanto, el número de neutrones es un átomo es igual a la resta entre el número de masa y el número atómico (A-Z).

      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-10
            p.mb-0 No todos los átomos de un elemento determinado tienen la misma masa. Los isótopos son átomos que tienen el mismo número de atómico pero diferente número de masa. La mayoría de los elementos tiene dos o más isótopos. Por ejemplo, existen tres isótopos de hidrógeno. Uno de ellos, que se conoce como hidrógeno, tiene un protón y no tiene neutrones. El isótopo llamado deuterio contiene un protón y un neutrón, y el tritio tiene un protón y dos neutrones (Chang, 2021). La forma para denotar el número atómico y el número de masa para los isótopos de hidrógeno es como sigue:
        .col-sm-12.col-lg-2.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/12.svg', alt='')

      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-8
          img(src='@/assets/curso/temas/t3/13.svg', alt='')
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-7
            p.mb-0 Con excepción del hidrógeno, que tiene un nombre diferente para cada uno de los isótopos, los isótopos de los elementos se identifican por su número de masa. Así, a los isótopos, por ejemplo, del uranio se les conoce como uranio-235 y uranio-238. Las propiedades químicas de un elemento están determinadas, principalmente, por los protones y electrones de sus átomos; los neutrones no participan en los cambios químicos en condiciones normales. En consecuencia, los isótopos del mismo elemento tienen un comportamiento químico semejante, forman el mismo tipo de compuestos y presentan reactividades semejantes (Chang, 2021). 
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/14.png', alt='')

      .mb-5 &nbsp;
      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Niveles de energía 

      p.mb-5(data-aos='fade-right') Los niveles de energía de un átomo representados por el #[b número cuántico principal] (n), que puede tomar valores enteros del 1 al 7, se relaciona con las regiones (o conjunto de orbitales) alrededor del núcleo donde es más probable encontrar a los electrones, y representan los distintos estados de energía que estos puedan tener. Dependiendo de su distancia al núcleo, cada electrón se puede encontrar en un nivel energético. Cuánto más grande es el valor de n, mayor es la distancia entre un electrón en el orbital respecto del núcleo y en consecuencia más grande es el orbital. 
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10
          .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 7.] Niveles de energía en un átomo
          figure.mb-0
              img(src='@/assets/curso/temas/t3/15.svg', alt='')

      .mb-5 &nbsp;
      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Subniveles de energía
      p.mb-5(data-aos='fade-right') Cada nivel de energía principal, representado por el número cuántico principal #[b n], se divide en subniveles determinados por el #[b número cuántico secundario, del momento angular o azimutal (#[b ℓ])]. El valor de #[b ℓ] puede ir desde 0 hasta n – 1. Cada valor de #[b ℓ] está asociado a un tipo de subnivel que tiene una forma específica del orbital y se identifican con letras como lo indica la siguiente tabla:
      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
            .col-sm-12.col-lg-8
              .titulo-sexto.color-acento-contenido
                  p.mb-0 #[b Tabla 4.] Características de los subniveles de energía 
              .tabla-a.color-acento-contenido.mb-5
                table(alt="La tabla presenta las siete magnitudes físicas fundamentales establecidas por el Sistema Internacional de Unidades, junto con el nombre de unidad correspondiente y su símbolo. Entre ellas están la longitud, la masa, el tiempo, la corriente eléctrica, la temperatura, la cantidad de sustancia y la intensidad luminosa. ")
                  thead
                    tr.encabezado
                      th Valor de ℓ
                      th Subnivel
                      th Tipo de orbital
                      th Máximo de electrones
                  tbody
                    tr
                      td 0
                      td s
                      td Esférico
                      td 2
                    tr
                      td 1
                      td p
                      td Doble lóbulo
                      td 6
                    tr
                      td 2
                      td d
                      td Cuatro lóbulos
                      td 10
                    tr
                      td 3
                      td f
                      td Complejo
                      td 14
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5
          .bg-color-1.p-5
            p.mb-0 Los subniveles de energía representan cómo se distribuyen los electrones dentro de cada nivel principal, determinan la forma del orbital y el número máximo de electrones que este puede contener. Cada electrón tiene, además, un número magnético (mℓ), que describe la orientación del orbital en el espacio y un número de espín asociado (ms), que determina la distribución de los electrones en el orbital e indica la orientación del giro del electrón sobre su propio eje. Estos conceptos son esenciales para entender la configuración electrónica, la estructura periódica y la reactividad de los elementos. 
        .col-sm-12.col-lg-4.d-none.d-lg-block
          .bg-color-3.p-4
            img(src='@/assets/curso/temas/t3/17.svg', alt='')

        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/16.png', alt='')
      
      
      
      .mb-5 &nbsp;
      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Configuración electrónica 
      
      p.mb-3(data-aos='fade-right') La configuración electrónica hace referencia a la forma en que los electrones están distribuidos en la región periférica de un átomo, compuesta por orbitales atómicos.  El comportamiento electrónico y muchas de las propiedades fisicoquímicas del átomo pueden explicarse a partir de esta distribución.
      p.mb-5(data-aos='fade-right') Para escribir correctamente la configuración electrónica de un átomo, se aplican tres reglas fundamentales:
      
      TabsB.color-acento-contenido.mb-5(data-aos='fade-right')
        .py-4.py-md-5(titulo="Regla de Aufbau" :icono="require('@/assets/curso/temas/t3/18.svg')")
          .row.justify-content-center.align-items-center.mb-0
            .col-sm-12.col-lg-5.mb-cus
              h4 Regla de Aufbau (principio de construcción)
              p.mb-4 Los electrones ocupan los orbitales en orden creciente de energía, es decir, se llenan primero los orbitales de menor energía y siguiendo un orden energético creciente hasta los de mayor energía. Para facilitar la distribución electrónica, se hace uso del diagrama de Moeller. 
              .bg-color-11.mb-0.p-4
                p.mb-4 Es importante seguir el orden de las flechas (de arriba hacia abajo y de derecha a izquierda), de tal modo que, si se escribiera de forma horizontal, quedaría:
                .bg-color-2.mb-0.m-auto.mb-0
                  h5.px-3.py-2 1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p6 5s2 4d10 5p6 6s2 4f14 5d10 6p6 7s2 5f14 6d10 7p6 6f14 7d10 7f14
            .col-sm-12.col-lg-5
              .titulo-sexto.color-acento-contenido
                  p.mb-0 #[b Figura 8.] Diagrama de Moeller
              figure.mb-0
                  img(src='@/assets/curso/temas/t3/19.svg', alt='Diagrama que expone el orden en el cual se llenan los subniveles atómicos en un átomo polielectrónico. Comenzando con el orbital 1s y descendiendo en dirección de las flechas, siguiente el orden: 1s<2s<2p<3s<3p<4s<3d y así sucesivamente.')
                  figcaption.mb-0 #[b Fuente:] https://misuperclase.com/configuracion-electronica-de-los-elementos/ 
      
      
        .py-4.py-md-5(titulo="Principio de exclusión de Pauli" :icono="require('@/assets/curso/temas/t3/21.svg')")
          .row.justify-content-center.align-items-center.mb-0
            .col-sm-12.col-lg-10
              h4 Principio de exclusión de Pauli
              p.mb-4 Cada orbital puede contener un máximo de dos electrones, y estos deben tener espines opuestos o antiparalelos. El espín se representa con las flechas hacia arriba y hacia abajo (↑ y ↓). Por ejemplo, para el átomo de helio, la configuración que es físicamente aceptable es la que se muestra en la siguiente figura:              
            
              .titulo-sexto.color-acento-contenido
                  p.mb-0 #[b Figura 9.] Aplicación del principio de exclusión de Pauli para el helio
              figure.mb-0
                  img.w-50(src='@/assets/curso/temas/t3/20.svg', alt='Configuración electrónica del helio, cuyo número atómico es 2 y se representa como 1s2, indicando que los dos electrones del átomo se encuentran en el subnivel 1s y que el orbital tiene dos electrones con pines opuestos representados con dos flechas en posiciones opuestas (una hacia arriba y otra hacia abajo), de acuerdo con el principio de exclusión de Pauli. ')
                  figcaption.mb-0.w-50 #[b Fuente:] Chang (2021).
      
        .py-4.py-md-5(titulo="Regla de Hund" :icono="require('@/assets/curso/temas/t3/23.svg')")
            .row.justify-content-center.align-items-center.mb-0
              .col-sm-12.col-lg-10
                h4 Regla de Hund
                p.mb-2 Establece que la distribución electrónica más estable en los subniveles es la que tiene el mayor número de espines paralelos, es decir, que cuando hay varios orbitales de igual energía (degenerados), como en un subnivel p, d o f, los electrones se distribuyen en orbitales separados primero y con espines paralelos. 
                p.mb-4 Por ejemplo, en la siguiente figura se muestran las distintas formas en que se pueden distribuir los electrones entre los tres orbitales p para el carbono:
              
                .row.justify-content-center.align-items-center.mb-4
                  .col-sm-12.col-lg-8
                    .titulo-sexto.color-acento-contenido
                        p.mb-0 #[b Figura 10.]  Aplicación de la regla de Hund en el carbono
                    figure.mb-4
                        img(src='@/assets/curso/temas/t3/22.svg', alt='')
                        figcaption.mb-0 #[b Fuente:] Chang (2021).
                
                p.mb-0 Ninguna de las 3 distribuciones viola el principio de exclusión de Pauli, de modo que solo quedaría determinar cuál de ellas dará más estabilidad. La respuesta está en la regla de Hund, y la distribución c) de la figura es la que satisface esta condición. 
      
      p.mb-5(data-aos='fade-right') A continuación, se explicará el procedimiento para encontrar la configuración electrónica del átomo de cloro (Cl):
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8.mb-cus
          .bg-color-1.pcus-5.py-4
            img(src='@/assets/curso/temas/t3/24.svg', alt='')
        .col-sm-12.col-lg-4
          p.mb-3 Si Z = 17, significa que tiene 17 electrones para distribuir en los orbitales atómicos. 
          p.mb-4 Se construye la configuración electrónica de acuerdo con el diagrama de Moeller: 
          .bg-color-5.mb-0.m-auto.mb-5
            h5.px-3.py-3.text-center 1s2 2s2 2p6 3s2 3p5
          p.mb-4 De acuerdo con lo anteriormente expuesto, el subnivel 3p puede albergar máximo 6 electrones, pero con 5 electrones para el caso del cloro se completan los 17 electrones, así:
          .bg-color-5.mb-0.m-auto.mb-0
            h5.px-3.py-3.text-center 2 +2 + 6 + 2 + 5 = 17 electrones
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8
            p.mb-4 Conocer la configuración electrónica de un átomo permite:
            ul.lista-ul--color.mb-4
              li.d-flex.mb-3
                i.fas.fa-check-circle.icon-list
                p.mb-0 Visualizar la organización de los electrones alrededor del núcleo. 

              li.d-flex.mb-3
                i.fas.fa-check-circle.icon-list
                p.mb-0 Predecir propiedades químicas, teniendo en cuenta que átomos con configuraciones electrónicas similares tienen comportamientos químicos parecidos (como los elementos de un mismo grupo en la tabla periódica). 

              li.d-flex.mb-3
                i.fas.fa-check-circle.icon-list
                p.mb-0 Determinar si un elemento es reactivo o inactivo (por ejemplo, los gases nobles tienen configuraciones electrónicas completas, por eso son poco reactivos).

              li.d-flex.mb-3
                i.fas.fa-check-circle.icon-list
                p.mb-0 Deducir la posición de un elemento en la tabla periódica (ordenada según la configuración electrónica). 

              li.d-flex
                i.fas.fa-check-circle.icon-list
                p.mb-0 Predecir el estado de oxidación de un elemento a partir de los electrones de valencia (electrones del último nivel de energía). 
            .row.justify-content-center.mb-0.bg-color-16.px-2.py-4.align-items-center
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img.w-75.m-auto(src='@/assets/curso/temas/t3/26.svg', alt='')
              .col-sm-12.col-lg-10
                  h5.mb-3 Nota
                  p.mb-0 Los #[b electrones de valencia] son los electrones más externos de un átomo y son los que están más involucrados en las interacciones químicas entre elementos. 
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/25.png', alt='')
      
      
      .bg-full-width.bg-fondo-2.mb-0.pcus-4
          .px-4.px-md-5.pb-md-3
            .row.justify-content-center.mb-0(data-aos='fade-right')
              .col-sm-12.col-lg-6
                p.mb-3 Así que, para el cloro, a partir de su configuración electrónica, se puede deducir lo siguiente:
                .bg-color-5.mb-5.m-auto.mb-0.w-fit.px-5
                  h5.px-3.py-3.text-center 1s#[sup 2] 2s#[sup 2] 2p#[sup 2] 3s#[sup 2] 3p#[sup 5]
                ul.lista-ul--color.mb-5
                  li.d-flex
                    i.fas.fa-check-circle.icon-list
                    p.mb-0 Los niveles de energía en los cuales hay electrones son: 1, 2 y 3.

                  li.d-flex
                    i.fas.fa-check-circle.icon-list
                    p.mb-0 El último nivel energético que contiene por lo menos un electrón es el nivel 3. #[b Por tanto, el cloro se ubica en el tercer periodo de la tabla periódica.]

                  li.d-flex
                    i.fas.fa-check-circle.icon-list
                    p.mb-0 La tabla periódica posee regiones relacionadas con la configuración de los orbitales. Si la configuración electrónica termina en #[b s] o #[b p], el elemento hace parte de los grupos representados por la letra #[b A], si por el contrario terminan en #[b d] o #[b f], este se ubica en los grupos representados por la letra #[b B] o elementos de transición, como se muestra en la figura 8.   

                .row.justify-content-center.mb-5.align-items-center
                  .col-sm-12.col-lg-2.d-none.d-lg-block
                    img(src='@/assets/curso/temas/t3/27.svg', alt='')
                  .col-sm-12.col-lg-10
                      p.mb-0 La configuración electrónica del cloro termina en el subnivel #[b p], por tanto, #[b este elemento pertenece a un grupo de la letra A.] 
                ul.lista-ul--color.mb-5
                  li.d-flex
                    i.fas.fa-check-circle.icon-list
                    p.mb-0 El último nivel de energía (nivel 3), tiene los subniveles s y p. Al sumar los electrones presentes en estos subniveles (2 en el subnivel s y 5 en el subnivel p), se obtiene un total de 7 electrones. Por tanto, se puede inferir que #[b el cloro pertenece al grupo 7A de la tabla periódica.]

                  li.d-flex
                    i.fas.fa-check-circle.icon-list
                    p.mb-0 Con el número de electrones presentes en el último nivel de energía (7 electrones de valencia) se establece que #[b el cloro tiene una valencia de 7.] 
                .row.justify-content-center.mb-0.bg-color-16.px-2.py-4.align-items-center.mb-cus
                  .col-sm-12.col-lg-2.d-none.d-lg-block
                    img.w-75.m-auto(src='@/assets/curso/temas/t3/28.svg', alt='')
                  .col-sm-12.col-lg-10
                      h5.mb-3 Notas 1.
                      p.mb-0 Los electrones de valencia coinciden con el número del grupo en los elementos representativos. Por ejemplo, los elementos del grupo 1A (como el sodio) tienen 1 electrón de valencia; los del grupo 7A (como el cloro), tienen 7 electrones de valencia. 
              
              .col-sm-12.col-lg-6
                img.mb-5.d-none.d-lg-block(src='@/assets/curso/temas/t3/29.png', alt='')
                .titulo-sexto.color-primario
                    p.mb-0 #[b Figura 11.] Regiones de la tabla periódica de acuerdo con el último subnivel
                figure.mb-3
                    img(src='@/assets/curso/temas/t3/30.svg', alt='')
                    figcaption.mb-0 #[b Fuente:] https://misuperclase.com/configuracion-electronica-de-los-elementos/ 
                .row.justify-content-center.mb-0.bg-color-16.px-2.py-2.align-items-center.mx-1
                  .col-sm-12.col-lg-2.d-none.d-lg-block
                    img.w-75.m-auto(src='@/assets/curso/temas/t3/28.svg', alt='')
                  .col-sm-12.col-lg-10
                      h5.mb-3 Notas 2.
                      p.mb-2 Para el caso de los elementos de transición, establecer los electrones de valencia, es un proceso más complejo, ya que no todos se usan igual en las reacciones químicas para formar los enlaces. Esto explica la existencia de varios estados de oxidación en los elementos de transición.  
      
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.3 Tabla periódica
      
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-2.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/31.svg', alt='')  
        .col-sm-12.col-lg-10
            p.mb-0 Más de la mitad de los elementos que se conocen en la actualidad se descubrieron entre 1800 y 1900. Durante este periodo los químicos observaron que muchos elementos mostraban grandes semejanzas entre ellos. El reconocimiento de las regularidades periódicas en las propiedades físicas y en el comportamiento químico, así como la necesidad de organizar la gran cantidad de información disponible sobre la estructura y propiedades de las sustancias elementales, condujeron al desarrollo de la #[b tabla periódica.]
      .tarjeta.color-acento-contenido.px-3.py-4.mb-5(data-aos="fade-left")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/temas/t3/32.svg", alt="")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1.tit-cus-1 La tabla periódica
                p.mb-0 Para conocer las generalidades de la tabla periódica, se invita a explorar el siguiente video. 
              .col-sm-auto
                a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=nV_bwV7PJpE&t=3s" target="_blank")
                  span.tit-cus-2 Consultar video
                  i.fas.fa-link.tit-cus-2
      p.mb-5(data-aos='fade-right') En la tabla periódica los elementos están acomodados de acuerdo con su número atómico, en filas horizontales llamadas periodos, y en columnas verticales, conocidas como  grupos. Estos #[b grupos o familias], de acuerdo con sus semejanzas en las propiedades químicas. 
      .mb-5 &nbsp;
      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Símbolos químicos 
  
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/33.svg', alt='')
        .col-sm-12.col-lg-11
            p.mb-0 Son letras que codifican los nombres de los elementos. Una de sus características es que este símbolo es único e irrepetible. Está conformado por una o dos letras. La primera letra siempre es mayúscula y la siguiente siempre es minúscula. Por ejemplo: carbono (C), oxígeno (O), nitrógeno (N), hidrógeno (H), azufre (S), magnesio (Mg), manganeso (Mn), oro (Au), plata (Ag). 
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          p.mb-0 #[b Figura 12.] Símbolos químicos en la tabla periódica
      .bg-color-1.pcus-5.py-5.mb-5(data-aos='fade-right')
          img(src='@/assets/curso/temas/t3/34.svg', alt='Tabla periódica de los elementos, codificada por colores para identificar los distintos tipos de elementos químicos según su clasificación. Cada casilla contiene el símbolo químico, número atómico, nombre y masa atómica del elemento.')
      .mb-5 &nbsp;
      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Grupos
      p.mb-5(data-aos='fade-right') También conocidos como familias. Existen 18 grupos y dependiendo de la distribución electrónica, la tabla se fracciona en zonas o regiones de elementos con propiedades similares. Los grupos se identifican con números y letras, por ejemplo, grupo 1A, grupo 2A, grupo 1B, grupo 2B, y así sucesivamente. 
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          p.mb-0 #[b Figura 13.] Grupos de la tabla periódica
      .row.justify-content-center.mb-5.align-items-center.bg-color-1(data-aos='fade-right')
        .col-sm-12.col-lg-10
          .pcus-5.py-5.mb-0
            img(src='@/assets/curso/temas/t3/35.svg', alt='Tabla periódica de los elementos, codificada por colores para identificar los distintos grupos o familias. Se tienen 18 grupos en total, etiquetados con letras y números del grupo 1A, al grupo 8 A y del grupo 1B al grupo 8B.  ')
      
      .mb-5 &nbsp;
      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Periodos
      p.mb-5(data-aos='fade-right') Existen 7 periodos en la tabla periódica, estos coinciden con los niveles energéticos de la configuración electrónica de los elementos representativos. 
   
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-10
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 14.] Periodos en la tabla periódica
          .bg-color-1.p-5
            img(src='@/assets/curso/temas/t3/36.svg', alt='Tabla periódica de los elementos, codificada por colores para identificar los distintos periodos. Se tienen 7 periodos en total numerados del 1 al 7.')
      .mb-5 &nbsp;
      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Regiones o categorías
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5
          p.mb-3 Los elementos se dividen en tres categorías: metales, no metales y metaloides. Un #[b metal] es un buen conductor del calor y la electricidad, sin embargo, #[b un no metal] generalmente es mal conductor del calor y la electricidad. Un #[b metaloide] presenta propiedades intermedias entre los metales y los no metales. 
          p.mb-5 La mayoría de los elementos que se conocen son metales; solo 17 elementos son no metales y 8 elementos son metaloides. De izquierda a derecha, a lo largo de cualquier periodo, las propiedades físicas y químicas de los elementos cambian de forma gradual de metálicas a no metálicas. 
          img.d-none.d-lg-block(src='@/assets/curso/temas/t3/38.png', alt='')
        .col-sm-12.col-lg-7
          .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 15.] Regiones o categorías en la tabla periódica
          figure.mb-0
              img(src='@/assets/curso/temas/t3/39.svg', alt='Tabla periódica de los elementos, codificada por colores para identificar las distintas regiones o categorías de elementos. Se tienen 3 regiones o categorías que son: metales, no metales y metaloides.')
              figcaption.mb-0  #[b Fuente:] Chang, (2021).  
      .mb-5 &nbsp;
      .row.align-items-center.mb-5.titulo-icono(data-aos='fade-right')
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Regiones o categorías
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-lg-10
            p.mb-3 La configuración electrónica de los elementos señala una variación periódica al aumentar el número atómico. Como consecuencia, los elementos también presentan variaciones periódicas en sus propiedades físicas y su comportamiento químico (Chang, 2021).
            p.mb-0 La siguiente figura presenta el comportamiento de las propiedades periódicas para los elementos de la tabla periódica: 
        .col-sm-12.col-lg-2.d-none.d-lg-block
          img(src='@/assets/curso/temas/t3/40.svg', alt='')
      .titulo-sexto.color-primario(data-aos='fade-right')
          p.mb-0 #[b Figura 16.] Propiedades periódicas de los elementos en la tabla periódica 
      figure.mb-5(data-aos='fade-right')
          img(src='@/assets/curso/temas/t3/41.svg', alt='Esquema de las propiedades periódicas de los elementos, divididas en cuatro categorías que son: el radio atómico, que aumenta de arriba hacia abajo y de derecha a izquierda, la afinidad electrónica, el potencial de ionización y la electronegatividad, que aumentan de abajo hacia arriba y de izquierda a derecha.')
          figcaption.mb-0 #[b Fuente:] Chang, (2021). 
      .tarjeta.color-acento-contenido.px-3.py-4.mb-5(data-aos="fade-left")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/temas/t3/9.svg", alt="")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1.tit-cus-1 Capítulo 8. Relaciones periódicas entre los elementos.
                p.mb-0 Para ampliar esta información se invita a consultar el capítulo 8 de la Química de Raymond Chang, en el siguiente enlace:  
                p.mb-0 https://archive.org/details/libro-de-quimica-raymond-chang-12va-edi/page/n5/mode/1up 
              .col-sm-auto
                a.boton.color-acento-botones(href="https://archive.org/details/libro-de-quimica-raymond-chang-12va-edi/page/n5/mode/1up " target="_blank")
                  span.tit-cus-2 Enlace web
                  i.fas.fa-link.tit-cus-2
  </template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
