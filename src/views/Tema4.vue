<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Enlace químico y nomenclatura de compuestos
      
      .row.justify-content-center.align-items-center.mb-5
        .col-sm-12.col-lg-2.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/1.svg', alt='')
        .col-sm-12.col-lg-10
          p.mb-0.mt-5 Los compuestos químicos se representan mediante arreglos alfanuméricos denominados fórmulas químicas, que se utilizan para expresar la composición de las moléculas. Haciendo uso de los símbolos químicos de cada especie elemental y determinados subíndices, se puede expresar de manera precisa y coherente la composición de cualquier sustancia. Composición no solo significa los elementos presentes, sino también la proporción en la cual se combinan los átomos.

      Separador
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.1 Fórmula química
      .row.justify-content-center.align-items-center.mb-5
        .col-sm-12.col-lg-4.mb-cus
          img.wcus-7.mb-4.d-none.d-lg-block(src='@/assets/curso/temas/t4/2.svg', alt='')
          p.mb-0 La #[b fórmula molecular] de un compuesto indica el número exacto de átomos de cada elemento que están presentes en la unidad más pequeña de una sustancia y la proporción entre los átomos, como se presenta en la figura:
        .col-sm-12.col-lg-3
          .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 17.] Elementos de una fórmula química
          figure.mb-0
              img(src='@/assets/curso/temas/t4/3.svg', alt='Estructura de una fórmula química compleja donde se resaltan los componentes que la conforman, como los símbolos químicos, los subíndices y los paréntesis.')
        .col-sm-12.col-lg-5
          p.mb-3.ml-cus-2 #[b Símbolos:] identifican los elementos constituyentes del compuesto. 
          p.mb-3 #[b Subíndices:] indican la atomicidad, es decir, el número de átomos presentes de cada elemento. 
          p.mb-0 #[b Paréntesis:] se usan para agrupar un conjunto de átomos que actúan como una unidad poliatómica (en el caso de la figura, el ion sulfato), viene acompañado de un subíndice para indicar el numero de veces que se repite la unidad en la fórmula.
      .row.justify-content-center.align-items-center.mb-5
        .col-sm-12.col-lg-8
          .row.justify-content-center.mb-0.bg-color-16.px-2.py-4.align-items-center
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img.w-75.m-auto(src='@/assets/curso/temas/t3/26.svg', alt='')
            .col-sm-12.col-lg-10
                h5.mb-3 Nota
                p.mb-0 En el caso del H2O, no aparece subíndice para el O, debido a que sólo hay un átomo de oxígeno en una molécula de agua; de esta manera se omite el subíndice “uno” en las fórmulas.
      
     


      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.2 Enlaces químicos
      p.mb-5 El desarrollo de la tabla periódica y el concepto de configuración electrónica dieron los fundamentos para entender cómo se forman las moléculas y los compuestos. La explicación propuesta por Gilbert Lewis es que los átomos se combinan para alcanzar la configuración electrónica más estable. La máxima estabilidad se logra cuando un átomo alcanza el mismo número de electrones de un gas noble.  
       .row.justify-content-center.align-items-center.mb-5
        .col-sm-12.col-lg-2.mb-cus
          img(src='@/assets/curso/temas/t4/4.png', alt='')
        .col-sm-12.col-lg-5
          p.mb-3 Cuando los átomos interactúan para formar un enlace químico, sólo entran en contacto sus regiones más externas. Por esta razón, cuando se estudian los enlaces químicos se consideran sobre todo los electrones de valencia de los átomos. Para reconocer los electrones de valencia y asegurarse de que el número total de electrones no cambia en una reacción química, se utiliza el #[b sistema de puntos desarrollado por Lewis]. 
          p.mb-0 En los elementos representativos, a excepción del helio, el número de electrones de valencia de cada átomo es igual al número del grupo del elemento. Por ejemplo, el litio (Li) es un elemento del grupo 1A y tienen un electrón de valencia, el berilio (Be) es un elemento del grupo 2A y tiene dos electrones de valencia, y así sucesivamente. Los elementos de un mismo grupo poseen configuraciones electrónicas externas similares y, por tanto, también sus puntos de Lewis. 
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/5.png', alt='')

      .row.justify-content-center.align-items-center.mb-5
        .col-sm-12.col-lg-8
          .row.justify-content-center.mb-0.bg-color-16.px-2.py-4.align-items-center
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img.w-75.m-auto(src='@/assets/curso/temas/t3/26.svg', alt='')
            .col-sm-12.col-lg-10
                h5.mb-3 Nota
                p.mb-0 Los metales de transición, lantánidos y actínidos, tienen capas internas incompletas y en general no es posible escribir sistemas sencillos de puntos de Lewis para ellos. 
      
      .row.justify-content-center.align-items-center.mb-5
        .col-sm-12.col-lg-8
          TabsC.color-acento-contenido
            .py-3.py-md-4.px-5(titulo="Enlace iónico")
              h4 Enlace iónico:
              p.mb-3 El enlace iónico se da por la interacción entre un metal y un no metal, presentándose una transferencia completa de electrones del elemento metálico hacia el no metálico. Este tipo de enlace es característico en compuestos iónicos como las sales, un ejemplo de ello es el cloruro de sodio (NaCl) o sal de cocina, en el que el sodio (Na) pierde un electrón para formar un catión (Na+), y el cloro gana un electrón para formar un anión (Cl-).
              .titulo-sexto.color-acento-contenido
                  p.mb-0 #[b Figura 18.]  Enlace iónico en el cloruro de sodio (NaCl)
              figure.mb-0
                  img.mb-1(src='@/assets/curso/temas/t4/7.svg', alt='Esquema del enlace tipo iónico que se presenta entre el sodio y el cloro, en donde el sodio le transfiere su único electrón de valencia al cloro formándose los iones Na+ y Cl-. ')
                  figcaption.mb-0 Fuente: https://www.shutterstock.com/es/image-vector/vector-illustration-sodium-chloride-formation-by-2231546289 
        
            .py-3.py-md-4.px-5(titulo="Enlace covalente")
              h4 Enlace covalente:
              p.mb-3 en enlace covalente ocurre cuando se establece una unión entre átomos no metálicos. En este enlace no se produce una transferencia completa de electrones, sino que uno o más pares de electrones son compartidos por los átomos para alcanzar una configuración electrónica más estable. 
              p.mb-3 Un ejemplo de ello es la molécula de flúor (F2), cada átomo de flúor tiene siete electrones de valencia, uno de ellos no apareado o libre, por tanto, cada átomo comparte su electrón no apareado con el otro átomo para alcanzar una configuración más estable. Los demás electrones no enlazantes, se llaman pares libres. 

              .titulo-sexto.color-acento-contenido
                  p.mb-0 #[b Figura 19.]   Enlace covalente en el flúor (F2)
              figure.mb-0
                  img.mb-1(src='@/assets/curso/temas/t4/8.svg', alt='Esquema del enlace covalente que se presenta en la molécula de flúor, en donde los dos átomos se comparten el electrón desapareado para alcanzar la configuración más estable. ')
                  figcaption.mb-0 Fuente: Chang, (2021). 
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/6.png', alt='')

      .row.justify-content-center.mb-5.align-items-end
        .col-sm-12.col-lg-6
            p.mb-3 Los átomos pueden formar distintos tipos de enlaces covalentes. En un #[b enlace sencillo], los átomos se unen por medio de un par de electrones. En muchos otros compuestos se forman enlaces múltiples, es decir, cuando los átomos comparten dos o más pares de electrones. Si dos átomos comparten dos pares de electrones, el enlace covalente se denomina enlace doble. Un enlace triple surge cuando dos átomos comparten tres pares de electrones.
            p.mb-0 Por otro lado, cuando un solo átomo aporta el par de electrones que se comparte con otro átomo que no tiene electrones disponibles, el enlace se denomina #[b enlace coordinado o dativo]. 
        .col-sm-12.col-lg-6
          .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 20.]  Tipos de enlaces covalentes
          figure.mb-0
              img(src='@/assets/curso/temas/t4/9.svg', alt='Esquema de los tipos de enlace covalente: sencillo, donde se comparte un par de electrones; doble, donde se comparten dos pares de electrones; triple, donde se comparten tres pares de electrones y dativo donde uno de los átomos es el que dona el o los pares de electrones para compartir. ')
      
      
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.3 Estructuras de Lewis
      
      .row.justify-content-center.align-items-center.mb-5
        .col-sm-12.col-lg-4
          img.wfit-1.mb-4.d-none.d-lg-block(src='@/assets/curso/temas/t4/10.png', alt='')
          p.mb-0 Una estructura de Lewis es una representación de un enlace covalente, donde el par de electrones compartidos se indica con líneas o como pares de puntos entre dos átomos y los pares libres no compartidos se indican como pares de puntos en los átomos individuales. En una estructura de Lewis sólo se muestran los electrones de valencia y la formación de los enlaces para conseguir la estabilidad de la molécula o compuesto cumpliendo la #[b regla del octeto]. 
        .col-sm-12.col-lg-4.mb-cus
          .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 21.] Estructura de Lewis del ácido perclórico
          figure.mb-0
              img.mb-1(src='@/assets/curso/temas/t4/11.svg', alt='Estructura de Lewis del ácido perclórico (HClO4). En el centro se tiene un átomo de cloro enlazado a cuatro átomos de oxígeno. Tres de los oxígenos están unidos al cloro mediante enlaces dobles. El cuarto oxígeno está enlazado al cloro mediante un enlace sencillo y a su vez está enlazado a un átomo de hidrógeno, formando un grupo hidroxilo. La estructura muestra la distribución de los electrones alrededor de los átomos, exponiendo el tipo de enlaces químicos que se dan en ese compuesto. ')
              figcaption.mb-0 Fuente: https://www.lifeder.com/acido-perclorico/ 
        .col-sm-12.col-lg-4
            img.wcus-7.mb-4.d-none.d-lg-block(src='@/assets/curso/temas/t4/12.svg', alt='')
            .bg-color-16.px-3.py-3.mb-3
              p.mb-0 #[b Regla del octeto], propuesta por Lewis, establece que un átomo diferente del hidrógeno y del helio tiende a formar enlaces hasta que se rodea de ocho electrones de valencia. 
            p.mb-0 La regla del octeto se aplica principalmente a los elementos del segundo periodo. Las excepciones a la regla del octeto caen en tres categorías que son: octeto incompleto, número impar de electrones y más de ocho electrones de valencia alrededor del átomo central.   
      
      .tarjeta.color-acento-contenido.px-3.py-4.mb-5(data-aos="fade-left")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/temas/t3/9.svg", alt="")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1.tit-cus-1 Excepciones a la regla del octeto. 
                p.mb-0 Para profundizar en las excepciones a la regla del octeto, se invita a consultar el numeral 9.9 de la Química de Raymond Chang, disponible en el siguiente enlace: https://archive.org/details/libro-de-quimica-raymond-chang-12va-edi/page/392/mode/1up  
              .col-sm-auto
                a.boton.color-acento-botones(href="https://archive.org/details/libro-de-quimica-raymond-chang-12va-edi/page/392/mode/1up" target="_blank")
                  span.tit-cus-2 Enlace web
                  i.fas.fa-link.tit-cus-2

      .row.align-items-center.mb-5.titulo-icono
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Pasos para realizar una estructura de Lewis
      
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-6
          LineaTiempoD.color-primario
            .row(numero="1" titulo="Paso 1")
              .col-m-auto
                p.mb-3 Escribir la fórmula del compuesto (H2SO4) y determinar la cantidad de átomos presentes.
              img(src='@/assets/curso/temas/t4/14.svg', alt='')
            .row(numero="2" titulo="Paso 2")
              .col-m-auto
                p.mb-3 Contar los electrones de valencia totales.
              img(src='@/assets/curso/temas/t4/15.svg', alt='')

            .row(numero="3" titulo="Paso 3")
              .col-m-auto
                p.mb-3 Determinar y ubicar el átomo central con sus electrones de valencia, para el caso del azufre (S) estos coinciden con el número del grupo en el que se encuentra ubicado en la tabla periódica (6).  
              img(src='@/assets/curso/temas/t4/16.svg', alt='')

            .row(numero="4" titulo="Paso 4")
              .col-m-auto
                p.mb-3 Ubicar alrededor del azufre, los cuatro oxígenos con sus electrones de valencia.
              img(src='@/assets/curso/temas/t4/17.svg', alt='')

            .row(numero="5" titulo="Paso 5")
              .col-m-auto
                p.mb-3 Ubicar los hidrógenos en la estructura para completar ocho electrones en los oxígenos que faltan.
              img(src='@/assets/curso/temas/t4/18.svg', alt='')

            .row(numero="6" titulo="Paso 6")
              .col-m-auto
                p.mb-3 Verificar el total de enlaces, el total de electrones y que todos los elementos del compuesto cumplan con la ley del octeto. 
              img(src='@/assets/curso/temas/t4/19.svg', alt='')
        .col-sm-12.col-lg-6.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/13.png', alt='')
      
      
      
      
      Separador
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 4.4 Nomenclatura de los compuestos inorgánicos
      p.mb-5 Para iniciar el estudio de la #[b nomenclatura de los compuestos químicos], es necesario, primero distinguir entre compuestos inorgánicos y orgánicos. Los compuestos orgánicos contienen carbono, comúnmente combinados con elementos como hidrogeno, oxigeno, nitrógeno y azufre. El resto de los compuestos se clasifican como compuestos inorgánicos. Sin embargo, algunos compuestos que contienen carbono como monóxido de carbono (CO) y dióxido de carbono (CO2), se consideran compuestos inorgánicos. 
      .bg-color-6.mb-4(data-aos="fade-left")
          h3.px-4.py-1 Estados de oxidación
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-8
          p.mb-4 En estado natural, los átomos son eléctricamente neutros, es decir, el número de protones en su núcleo es igual al número de electrones que los rodean. Sin embargo, al formar compuestos, los átomos pueden ganar o perder electrones, lo que da lugar a un valor llamado #[b estado de oxidación o número de oxidación.]
          .bg-color-1.p-4
            p.mb-0 Este estado representa la carga hipotética que tendría un átomo si todos los enlaces fueran completamente iónicos, es decir, si los electrones compartidos en un enlace covalente se asignaran por completo al átomo más electronegativo. El estado de oxidación depende, en gran parte, del número de #[b electrones de valencia.]
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/20.png', alt='')
        
      p.mb-5 La #[b ubicación del elemento en la tabla periódica], específicamente el grupo al que pertenece, permite predecir los estados de oxidación más comunes. Por ejemplo:
      .row.justify-content-center.align-items-center.mb-5
        .col-sm-12.col-lg-3
          .bg-color-17.br-4.p-5.align-items-center.hcard-6.mb-cus
            img.mb-4.wcus-7.m-auto(src='@/assets/curso/temas/t4/21.svg', alt='')
            p.mb-0.text-center Grupo 1 o 1A (alcalinos): siempre presentan +1, porque pierden un electrón fácilmente.
        .col-sm-12.col-lg-3
          .bg-color-17.br-4.p-5.align-items-center.hcard-6.mb-cus
            img.mb-4.wcus-7.m-auto(src='@/assets/curso/temas/t4/22.svg', alt='')
            p.mb-0.text-center Grupo 2 o 2A (alcalinotérreos): típicamente +2.

        .col-sm-12.col-lg-3
          .bg-color-17.br-4.p-5.align-items-center.hcard-6.mb-cus
            img.mb-4.wcus-7.m-auto(src='@/assets/curso/temas/t4/23.svg', alt='')
            p.mb-0.text-center Grupo 17 o 7A (halógenos): usualmente -1 cuando se combinan con metales, aunque pueden presentar otros estados positivos en compuestos con oxígeno.

        .col-sm-12.col-lg-3
          .bg-color-17.br-4.p-5.align-items-center.hcard-6.mb-cus
            img.mb-4.wcus-7.m-auto(src='@/assets/curso/temas/t4/24.svg', alt='')
            p.mb-0.text-center Elementos de transición: pueden tener múltiples estados de oxidación debido a la participación de electrones de los subniveles d.

      p.mb-5 En la siguiente tabla se presentan los estados de oxidación más comunes tanto de elementos representativos como de elementos de transición. 
      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8
          .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 5.] Estados de oxidación de algunos elementos
          .tabla-a.color-acento-contenido.mb-5
            table(alt="Números de oxidación conocidos de los elementos más comunes, ordenados según su posición en la tabla periódica.")
              
              thead
                tr
                  th Grupo
                  th Elemento
                  th Símbolo
                  th Estados de oxidación
              tbody
                tr
                  td(rowspan="2") 1A (1)
                  td Hidrógeno
                  td H
                  td +1
                tr
                  td Sodio
                  td Na
                  td +1
                tr
                  td(rowspan="2") 2A (2)
                  td Magnesio
                  td Mg
                  td +2
                tr
                  td Calcio
                  td Ca
                  td +2
                tr
                  td(rowspan="2") 3A (13)
                  td Aluminio
                  td Al
                  td +3
                tr
                  td Galio
                  td Ga
                  td +3
                tr
                  td(rowspan="2") 4A (14)
                  td Carbono
                  td C
                  td +4, +2, -4
                tr
                  td Silicio
                  td Si
                  td +4, -4
                tr
                  td(rowspan="2") 5A (15)
                  td Nitrógeno
                  td N
                  td +1, +2, +3, +4, +5, -3
                tr
                  td Fósforo
                  td P
                  td +3, +5, -3
                tr
                  td(rowspan="2") 6A (16)
                  td Oxígeno
                  td O
                  td -2, -1 (peróxidos)
                tr
                  td Azufre
                  td S
                  td +2, +4, +6, -2
                tr
                  td(rowspan="2") 7A (17)
                  td Flúor
                  td F
                  td -1
                tr
                  td Cloro
                  td Cl
                  td +7, -5, +3, +1, -1
                tr
                  td 8A (18)
                  td Gases nobles
                  td He, Ne, Ar
                  td 0 (no reaccionan)
                tr
                  td(rowspan="2") VIII (8)
                  td Hierro
                  td Fe
                  td +2, +3
                tr
                  td Cobre
                  td Cu
                  td +1, +2
                tr
                  td(rowspan="2") IB (11)
                  td Plata
                  td Ag
                  td +1
                tr
                  td Oro
                  td Au
                  td +1, +3
              tfoot
                tr.bg-color-18
                  td.text-left(colspan="4") #[b Fuente:] Chang, (2021). 




      .bg-color-6.mb-4(data-aos="fade-left")
            h3.px-4.py-1 Grupos funcionales
      p.mb-5 Los grupos funcionales son grupos de átomos, que juntos dan características específicas a las moléculas. Los principales grupos funcionales de la química inorgánica son los óxidos, los hidróxidos, los ácidos y las sales, como se presenta en la figura: 
      .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 21.] Estructura de Lewis del ácido perclórico
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-10
          figure.mb-0
              img(src='@/assets/curso/temas/t4/25.svg', alt='Esquema de los grupos funcionales inorgánicos como los óxidos, los hidróxidos, los ácidos y las sales. Se expone el origen y la transformación de distintos compuestos a partir de elementos metálicos y no metálicos al reaccionar con el oxígeno, hidrógeno y agua. ')
              figcaption.mb-0 Fuente: https://www.lifeder.com/acido-perclorico/ 
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-9
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Óxidos")
              .col-sm-12.col-lg-12
                p.mb-0 Son compuestos binarios formados por la combinación del oxígeno con otro elemento de la tabla periódica, ya sea un metal o un no metal. Cuando el oxigeno se combina con un metal, se forman los óxidos básicos, y cuando el oxígeno se combina con un no metal, se forman los óxidos ácidos. 

            .row(titulo="Hidróxidos")
              .col-sm-12.col-lg-12
                p.mb-0 Son compuestos químicos inorgánicos formados por la combinación de un óxido básico con el agua. Su característica especifica consiste en la presencia del grupo OH- en su estructura. También se conocen como bases o álcalis y en solución liberan iones. 

            .row(titulo="Ácidos")
              .col-sm-12.col-lg-12
                p.mb-0 Son compuestos químicos que se forman de la unión del hidrógeno con un no metal, en presencia o no del oxígeno. Existen dos tipos de ácidos: los ácidos oxácidos, en donde el hidrogeno se unió a un no metal en presencia del oxígeno, por ejemplo, el ácido sulfúrico (H2SO4), y los ácidos hidrácidos, en donde el hidrogeno se unió a un no metal en ausencia de oxígeno, como en el caso del ácido clorhídrico (HCl). 

            .row(titulo="Sales")
              .col-sm-12.col-lg-12
                p.mb-3 Son compuestos químicos formados por la reacción entre un ácido y una base. En esta reacción el hidrógeno del ácido es reemplazado total o parcialmente por un metal o un ion positivo diferentes. Como resultado, se produce una sustancia iónica y pueden ser de 6 tipos:
                ul.lista-ul--color.mb-0
                  li.d-flex
                    i.fas.fa-circle.icon-list
                    p.mb-0 Sales neutras: se forman cuando todos los hidrógenos del ácido son reemplazados.
                  li.d-flex
                    i.fas.fa-circle.icon-list
                    p.mb-0 Sales ácidas: se forman cuando no todos los hidrógenos del ácido son reemplazados. 
                  li.d-flex
                    i.fas.fa-circle.icon-list
                    p.mb-0 Sales básicas: se forman cuando la base no pierde todos sus grupos OH-.
                  li.d-flex
                    i.fas.fa-circle.icon-list
                    p.mb-0 Sales oxácidas: provienen de ácidos oxácidos (con oxígeno).
                  li.d-flex
                    i.fas.fa-circle.icon-list
                    p.mb-0 Sales hidrácidas: provienen de ácidos hidrácidos (sin oxígeno). 
                  li.d-flex
                    i.fas.fa-circle.icon-list
                    p.mb-0 Sales dobles: contienen dos cationes metálicos diferentes en la estructura. 
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/26.png', alt='')
      .bg-color-6.mb-4(data-aos="fade-left")
            h3.px-4.py-1 Nomenclatura de los compuestos inorgánicos
      p.mb-5 La nomenclatura de los compuestos inorgánicos sigue reglas definidas por la IUPAC (Unión Internacional de Química Pura y Aplicada), y permite nombrar sustancias según su composición química, valencia y grupo funcional. Hay tres sistemas de nomenclatura principales: sistemática, stock y tradicional.
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-9
          TabsA.color-acento-botones
            .tarjeta.bg-color-5.p-4(titulo="Nomenclatura sistemática")
                  h4.mb-4 Nomenclatura sistemática
                  p.mb-4 En este sistema se nombran los compuestos en base al número de átomos de cada elemento, usando prefijos numéricos como mono- (para uno), di- (para dos), tri- (para tres), y así sucesivamente. Por ejemplo:
                  .bg-color-2.br-4.p-4
                    p CO = monóxido de carbono.
                    p CO2 = dióxido de carbono. 
                    p N2O3 = trióxido de dinitrógeno.
                    p.mb-0 Fe2O3 = trióxido de dihierro.
            .tarjeta.bg-color-5.p-4(titulo="Nomenclatura stock")
                  h4.mb-4 Nomenclatura #[i stock]
                  p.mb-4 En este sistema se incluyen números romanos que indican la valencia de los átomos presentes en la molécula del compuesto. Se construye colocando el nombre del grupo funcional, seguido del nombre del átomo que lo acompaña y entre paréntesis en números romanos, se coloca el estado de oxidación del elemento. Por ejemplo:
                  .bg-color-2.br-4.p-4
                    p Fe2O3 = óxido de hierro (III).
                    p Ni2O3 = óxido de níquel (III).
                    p CuO = óxido de cobre (II).
                    p Al(OH)3 = hidróxido de aluminio (III)
                    p.mb-0 Pb(OH)2 = hidróxido de plomo (II). 
            .tarjeta.bg-color-5.p-4(titulo="Nomenclatura tradicional")
                  h4.mb-4 Nomenclatura tradicional
                  p.mb-4 En este sistema se emplean diversos prefijos y sufijos como hipo-, per-, -oso, -ico, según la valencia atómica de los elementos del compuesto, como se indica en la tabla. 
                  p.mb-4 Por Ejemplo:
                  .bg-color-2.br-4.p-4
                    p FeO = óxido ferroso.
                    p Fe2O3 = óxido férrico. 
                    p HClO = ácido hipocloroso.
                    p HClO2 = ácido cloroso.
                    p HClO3 = acido clórico.
                    p.mb-0 HClO4 = ácido perclórico.  
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t4/27.png', alt='')
  
  
  
  
  
  
  
  
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
