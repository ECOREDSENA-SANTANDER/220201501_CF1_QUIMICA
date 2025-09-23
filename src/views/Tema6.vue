<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Introducción a la química orgánica
      
      .row.justify-content-center.mb-5.align-items-center
        .col-sm-12.col-lg-2.d-none.d-lg-block
          img(src='@/assets/curso/temas/t6/1.svg', alt='')
        .col-sm-12.col-lg-10
            p.mb-0.mt-4 La química orgánica se enfoca en el estudio de los compuestos cuya base es el átomo de carbono. Se estima que existen alrededor de 24 millones de compuestos orgánicos, entre los que se incluyen polímeros, fármacos, derivados del petróleo, cosméticos, fibras, pigmentos y biomoléculas, tales como carbohidratos, lípidos, proteínas, vitaminas y ácidos nucleicos, entre otros.
      
      .bg-full-width.bg-fondo-4.mb-0
        .p-full-width
          .row.justify-content-center.align-items-center.mb-5
            .col-sm-12.col-lg-6
              .card-cus.d-flex.p-4.flex-column
                .d-flex.flex-column.justify-content-center.align-items-center.mb-4
                  h4.mb-3 Química orgánica
                  p.mb-5 Rama de la química que estudia los compuestos que contienen carbono.
                  
                  h4.mb-3 Química del carbono
                  p.mb-3 Posición en la tabla periódica (número atómico).
                  .bg-color-10.br-5.px-3.py-0.w-fit.m-auto.mb-3
                    p.mb-0.tit-cus-3.text-center 6
                  p.mb-3 Masa atómica
                  .bg-color-17.br-5.px-3.py-0.w-fit.m-auto.mb-3
                    p.mb-0.tit-cus-4.text-center 12.O11u
                  p.mb-3 Símbolo
                  .titulo-sexto.color-acento-contenido
                    p.mb-0 #[b Figura 23.] Símbolo del carbono
                  img.wcus-7.m-auto(src='@/assets/curso/temas/t6/2.svg', alt='Representación del elemento carbono de la tabla periódica, con la letra C mayúscula, símbolo del elemento en la parte central del cuadrado, en la parte superior izquierda se tiene el número atómico (6), en la parte superior derecha la masa atómica (12.011) y en la parte inferior se tiene el nombre completo del elemento: carbono. ')
                ul.lista-ul--color.mb-0
                  li.d-flex
                    i.fas.fa-circle-check.icon-list
                    p.mb-0 Elemento químico presente en los seres vivos.

                  li.d-flex
                    i.fas.fa-circle-check.icon-list
                    p.mb-0 Es la base de millones de compuestos orgánicos. 

                  li.d-flex
                    i.fas.fa-circle-check.icon-list
                    p.mb-0 Da origen a moléculas como proteínas, lípidos y carbohidratos, también forma plásticos, medicamentos, combustibles y más. 

                  li.d-flex
                    i.fas.fa-circle-check.icon-list
                    p.mb-0 El carbono es el único elemento capaz de formar enlaces covalentes estables consigo mismo y con elementos como el hidrógeno, el oxígeno y otros, generando una gran variedad de estructuras lineales, ramificadas y cíclicas. 
      
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t6/3.svg', alt='')
        .col-sm-12.col-lg-5
            p.mb-0 La diversidad de compuestos orgánicos se explica por las propiedades singulares del átomo de carbono. En primer lugar, el carbono es un elemento tetravalente, es decir, tiene la capacidad de formar cuatro enlaces covalentes. Estos enlaces pueden establecerse entre átomos de carbono, dando lugar a largas cadenas carbonadas que presentan una notable estabilidad química, lo que permite la existencia de un número prácticamente infinito de compuestos. La fuerza y estabilidad de estos enlaces se deben, en gran medida, a la capacidad del carbono para experimentar hibridación, es decir, la combinación de sus orbitales atómicos s y p para formar nuevos orbitales híbridos equivalentes en energía.
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t6/4.png', alt='')
      
      
      
      
      
      
      
      
      Separador
      #t_6_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 6.1 Grupos funcionales orgánicos
      p.mb-5 La química de los compuestos orgánicos está determinada en gran parte por los #[b grupos funcionales], los cuales constan de uno o varios átomos enlazados en forma específica. 
      .row.align-items-center.mb-5.titulo-icono
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2  Hidrocarburos
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t6/5.png', alt='')
        .col-sm-12.col-lg-8
            p.mb-3 Los hidrocarburos constituyen el tipo más sencillo de compuestos orgánicos, contienen solo átomos de carbono e hidrógeno. Estos elementos pueden formar cadenas abiertas o cerradas, lineales o ramificadas. Para nombrar estos compuestos, se utilizan prefijos que indican la cantidad de átomos de carbono presentes en la cadena principal. 
            p.mb-0 Con base en la estructura, los hidrocarburos se dividen en dos clases principales: alifáticos y aromáticos. Los hidrocarburos alifáticos (alcanos, cicloalcanos, alquenos y alquinos), no contienen el grupo benceno o anillo bencénico, sin embargo, los hidrocarburos aromáticos contienen uno o más de ellos.
      
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-7
          AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-5")
            .row(titulo="Alcanos")
              .col-12.pcus-2
                p.mb-3 Formados por #[b enlaces sencillos] (C-C) que forman cadenas carbonadas saturadas, que contienen el número máximo de átomos de hidrógenos que pueden unirse con la cantidad de átomos de carbono presentes. El alcano más sencillo es el metano (CH#[sub 4]). Para nombrar los alcanos, se debe identificar la cadena continua más larga de átomos de carbono, identificar y nombrar los grupos alquilo y finalmente usar la terminación propia de la familia #[b -ano] en el nombre base del compuesto, determinado por el número de átomos de carbono en la cadena más larga. 
                img(src='@/assets/curso/temas/t6/7.svg', alt='')
            .row(titulo="Cicloalcanos")
              .col-12.pcus-2
                p.mb-5 Son alcanos cuyos átomos de carbono se unen formando anillos. El cicloalcano más sencillo es el ciclopropano (C#[sub 3]H#[sub 6]). Muchas sustancias de importancia biológica, como el colesterol, la testosterona y la progesterona contienen uno o más de estos sistemas cíclicos. 
                img(src='@/assets/curso/temas/t6/8.svg', alt='')
            .row(titulo="Alquenos")
              .col-12.pcus-2
                p.mb-5 También conocidos como olefinas, los alquenos son compuestos formados por cadenas de carbono que contienen al menos un #[b enlace doble] entre carbonos (C=C). El alqueno más sencillo es el etileno (C#[sub 2]H#[sub 4]). Se nombran de manera similar a los alcanos, pero su terminación cambia a #[b -eno]. Es importante incluir un número antes del nombre que indique la posición del doble enlace dentro de la cadena principal.
                img(src='@/assets/curso/temas/t6/9.svg', alt='')

            .row(titulo="Alquinos")
              .col-12.pcus-2
                p.mb-5 Formados por cadenas de carbono que contienen al menos un #[b enlace triple] entre átomos de carbono (C≡C), los alquinos se nombran de manera similar a los alcanos, pero con la terminación #[b -ino]. Al igual que en el caso de los alquenos, es importante incluir un número antes del nombre que indique la posición del enlace triple en la cadena principal.
                img(src='@/assets/curso/temas/t6/10.svg', alt='')

            .row(titulo="Aromáticos")
              .col-12.pcus-2
                p.mb-5 Hacen referencia a los derivados del grupo benceno (C#[sub 6]H#[sub 6]). 
                img.mb-5(src='@/assets/curso/temas/t6/11.svg', alt='')
                p.mb-5 Existen bencenos monosustituidos, en los que un átomo o grupo de átomos sustituye uno de los hidrógenos del grupo benceno. Para nombrar esos compuestos, se coloca el nombre del grupo sustituyente seguido de la palabra #[b benceno].  
                img.mb-5(src='@/assets/curso/temas/t6/12.svg', alt='')
                p.mb-5 Para el caso en el que esté presente más de un sustituyente, se debe indicar la posición del segundo grupo respecto del primero, numerando los átomos de carbono; posteriormente identificar la posición y colocar el nombre de los grupos sustituyentes seguido de la palabra benceno. 
                img.mb-5(src='@/assets/curso/temas/t6/13.svg', alt='')


        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t6/6.png', alt='')

      .tarjeta.color-acento-contenido.px-3.py-4.mb-5(data-aos="fade-left")
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
            img(src="@/assets/curso/temas/t3/9.svg", alt="")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h4.mb-1.tit-cus-1 Química orgánica. 
                p.mb-0 Para profundizar en los diferentes tipos de compuestos orgánicos, nomenclatura, propiedades y reacciones, se invita a consultar el capítulo 24 de la Química de Raymond Chang, disponible en el siguiente enlace.
              .col-sm-auto
                a.boton.color-acento-botones(href="https://archive.org/details/libro-de-quimica-raymond-chang-12va-edi/page/1026/mode/1up" target="_blank")
                  span.tit-cus-2 Ir al sitio
                  i.fas.fa-link.tit-cus-2

      .row.align-items-center.mb-5.titulo-icono
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Compuestos oxigenados 

      .row.justify-content-center.mb-5.align-items-center
        .col-sm-12.col-lg-2.d-none.d-lg-block
          img(src='@/assets/curso/temas/t6/14.svg', alt='')
        .col-sm-12.col-lg-10
            p.mb-0.mt-4 Los compuestos oxigenados son aquellos que además de átomos de carbono e hidrógeno, contienen átomos de oxígeno en su estructura. Hacen parte de esta categoría, grupo funcionales característicos, como los alcoholes, los aldehídos, las cetonas, los éteres y ésteres y los ácidos carboxílicos. Estos compuestos son muy diversos y desempeñan roles importantes en la química orgánica, la bioquímica y la industria.
  
  
      TabsA.color-acento-botones.mb-5
        .tarjeta.bg-color-5.p-4(titulo="Alcoholes")
          .row.justify-content-center.mb-0
            .col-sm-12
              h4.mb-4 Alcoholes
              p.mb-4 Formados por cadenas de carbono a la cual se une el grupo funcional #[b hidroxilo] (-OH). El alcohol etílico o etanol es el más conocido de este grupo. Se nombran de manera similar a los alcanos, seleccionando la cadena más larga que contenga el grupo hidroxilo, numerando de modo que el carbono con el -OH tenga el número más bajo posible, indicando la posición del -OH, nombrando la cadena de acuerdo al número de carbonos y cambiando la terminación #[b -o] del alcano por #[b -ol].
              img(src='@/assets/curso/temas/t6/15.svg', alt='')

        .tarjeta.bg-color-5.p-4(titulo="Éteres")
          .row.justify-content-center.mb-0
            .col-sm-12
              h4.mb-4 Éteres
              p.mb-4 Los éteres contienen los enlaces #[b R – O – R’], donde R y R’ son grupos derivados de un hidrocarburo, ya sea alifáticos o aromáticos, llamados grupos alquilo o arilo, respectivamente. Uno de los éteres más conocidos es el éter dietílico, usado principalmente como solvente orgánico. Los éteres, al igual que los alcoholes, son muy inflamables y cuando se dejan al aire libre en reposo, tienden a formar, lentamente, peróxidos explosivos.  
              img(src='@/assets/curso/temas/t6/16.svg', alt='')

        .tarjeta.bg-color-5.p-4(titulo="Aldehídos")
          .row.justify-content-center.mb-0
            .col-sm-12
              h4.mb-4 Aldehídos
              p.mb-4 El grupo funcional de los aldehídos es el grupo #[b carbonilo] (C=O). En un aldehído hay por lo menos un átomo de hidrógeno unido al carbono del grupo carbonilo y este siempre está ubicado al final de la cadena. El aldehído más sencillo es el formaldehído (H#[sub 2]C=O), es un líquido de olor bastante desagradable y se usa como materia prima en la industria de los polímeros por su tendencia a polimerizarse fácilmente. Se nombran de manera similar a los alcanos, el carbono del grupo carbonilo siempre llevará el primer número indicador (C1) y se reemplazará la terminación #[b -o] del alcano por #[b -al].
              img(src='@/assets/curso/temas/t6/17.svg', alt='')

        .tarjeta.bg-color-5.p-4(titulo="Cetonas")
          .row.justify-content-center.mb-0
            .col-sm-12
              h4.mb-4 Cetonas
              p.mb-2 Estos compuestos, al igual que los aldehídos, tienen el grupo #[b carbonilo] en su estructura, sin embargo, en una cetona, el átomo de carbono del grupo carbonilo está unido a dos grupos hidrocarbonados, es decir, que está dentro de la cadena carbonada. 
              p.mb-4 La cetona más sencilla es la acetona, un líquido de olor agradable que se usa principalmente como solvente de compuestos orgánicos y como removedor que esmalte de uñas. Por lo general, las cetonas son menos reactivas que los aldehídos. Se nombran similar a los alcanos, se debe indicar el carbono en el que se encuentra el grupo carbonilo y su terminación es #[b -ona.] 
              img(src='@/assets/curso/temas/t6/18.svg', alt='')

        .tarjeta.bg-color-5.p-4(titulo="Ácidos carboxílicos")
          .row.justify-content-center.mb-0
            .col-sm-12
              h4.mb-4 Ácidos carboxílicos
              p.mb-2 Están formados por cadenas de carbono que contienen es su estructura el grupo #[b carboxilo] (-COOH). Los ácidos carboxílicos abundan en la naturaleza, se encuentran tanto en el reino vegetal como animal. Todas las moléculas de proteínas están formadas por aminoácidos, los cuales son ácidos carboxílicos con un grupo amino (-NH#[sub 2]). 
              p.mb-4 A diferencia de los ácidos inorgánicos, los ácidos carboxílicos son débiles. Reaccionan con los alcoholes para formar ésteres. Se nombran de manera similar a los alcanos, considerando que el grupo carboxilo siempre está ubicado al final de la cadena y lleva el primer número indicador (C1), se antepone la palabra ácido, se nombra la cadena base de acuerdo con el número total de carbonos y se cambia la terminación #[b -o] del alcano por #[b -oico].
              img(src='@/assets/curso/temas/t6/19.svg', alt='')

        .tarjeta.bg-color-5.p-4(titulo="Ésteres")
          .row.justify-content-center.mb-0
            .col-sm-12
              h4.mb-4 Ésteres
              p.mb-4 El grupo funcional éster es el #[b -COOR] y tienen fórmula general #[b R’-COO-R], donde R’ puede ser un hidrógeno o un grupo derivado de un hidrocarburo (grupo alquilo) y R es un grupo derivado de un hidrocarburo. Los ésteres se utilizan en la manufactura de perfumes y como agentes saborizantes en las industrias de confitería y de bebidas gaseosas. Muchas frutas deben su olor y sabor característicos a la presencia de pequeñas cantidades de ésteres. Por ejemplo, los plátanos contienen acetato de 3-metilbutilo, las naranjas, acetato de octilo y las manzanas, butirato de metilo. 
              img(src='@/assets/curso/temas/t6/20.svg', alt='')

  
  
  
      .row.align-items-center.mb-5.titulo-icono
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Compuestos nitrogenados
      p.mb-5 Los compuestos nitrogenados son compuestos orgánicos que contienen átomos de nitrógeno (N) en su estructura molecular. Este tipo de compuestos es muy variado y tiene gran importancia biológica, farmacéutica e industrial, ya que muchas biomoléculas, fármacos, explosivos y colorantes los contienen. 
  
  
   
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-6.col-md-6.col-lg-6.mb-4.mb-lg-0
          .tarjeta--boton.bg-color-1.p-4.hcard-7
            .row.mb-3
              .col-2.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t6/21.svg', alt='')

            .bg-color-19.mb-4
              h3.px-4.py-1.text-center.text-white Aminas
            p.mb-3 Son compuestos orgánicos derivados del amoniaco (NH#[sub 3]) en los cuales uno, dos o los tres átomos de hidrógeno han sido reemplazados por un grupo derivado de un hidrocarburo (grupo alquilo) o de un benceno (grupo arilo). Existen aminas primarias, secundarias y terciarias, según el número de sustituyentes. Se nombran como derivados de los alcanos, con el sufijo #[b -amina].
            p.mb-5 Muchas moléculas biológicamente activas, como los neurotransmisores (adrenalina, histamina, entre otros), ciertos fármacos y pesticidas, son aminas. 
            img(src='@/assets/curso/temas/t6/23.svg', alt='')
  
        .col-sm-6.col-md-6.col-lg-6.mb-4.mb-lg-0
          .tarjeta--boton.bg-color-11.p-4.hcard-7
            .row.mb-3
              .col-2.d-none.d-lg-block
                  img(src='@/assets/curso/temas/t6/22.svg', alt='')

            .bg-color-15.mb-4
              h3.px-4.py-1.text-center.text-white Amidas
            p.mb-3 Son compuestos orgánicos derivados de los ácidos carboxílicos, que resultan de la reacción entre un ácido carboxílico y una amina. El grupo hidroxilo (-OH) del grupo carboxilo (-COOH) del ácido es sustituido por un grupo amino (-NH#[sub 2], -NH-R, -N-R-R’) para formar el grupo amida. Estos compuestos se caracterizan por tener un grupo carbonilo (C=O) unido directamente a un átomo de nitrógeno (N). 
            p.mb-5 Al igual que las aminas, las amidas pueden ser primarias, secundarias y terciarias, según el número de sustituyentes en el nitrógeno. Se nombran como derivados de ácido carboxílico, reemplazando el sufijo #[b -oico] por #[b -amida]. Las proteínas están formadas por enlaces amida, llamados enlaces peptídicos. Muchas fibras sintéticas, como el nailon, son polímeros de amidas, también se usan como solventes o como intermediarios en la síntesis de fármacos. 
            img(src='@/assets/curso/temas/t6/24.svg', alt='')
  
  
  
  
  
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
