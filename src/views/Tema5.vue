<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Reacciones químicas
      
      .row.justify-content-center.align-items-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-10
          .bloque-texto-f.color-acento-contenido.pt-4.px-5.mb-5
            .bloque-texto-f__comillas
              i.fas.fa-quote-left
              i.fas.fa-quote-right
            h4.text-regular.bloque-texto-f__texto Cuesta reconocer que absolutamente todo alrededor es resultado de la química y sus reacciones, que lo asombroso de esta ciencia no se limita a recipientes burbujeantes en un laboratorio; fue gracias a esta que el universo, el cosmos y la misma vida en la tierra tuvieron un principio. Las transformaciones químicas toman lugar a cada instante y en todo momento, en lugares insospechados. Se dice que cada segundo se dan 100 000 reacciones químicas solo en el cerebro humano.
            .bloque-texto-f__autor.mb-3.text-right
              h3.mb-0.text-right-cus (El País, 2017)
            .bloque-texto-f__avatar
              .bloque-texto-f__avatar__img
                img(src='@/assets/curso/temas/t2/51.svg')
      
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-7
          .row.justify-content-center.mb-4.align-items-center
            .col-sm-12.col-lg-2.d-none.d-lg-block
              img.w-95(src='@/assets/curso/temas/t5/1.svg', alt='')
            .col-sm-12.col-lg-10
                p.mb-0 Una reacción química es un proceso en el que una o más sustancias de partida, denominadas reactivos, se transforman en otras químicamente diferentes, denominadas productos, mediante separación, intercambio y/o reordenamiento de los átomos constituyentes. Una #[b ecuación química], es una representación alfanumérica que utiliza los símbolos químicos para mostrar que sucede durante una reacción química. 
          p.mb-3 A continuación, se presenta una ecuación química genérica, en la que se asume que A y B son reactivos y C y D, los productos formados. 
          .bg-color-1.py-3.mb-3.w-fit.br-5.justify-self-center.m-auto
              p.mb-0.fw-bold.text-center.pcus-6 aA+bB → cC+dD
        
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t5/2.png', alt='')
      
      p.mb-4(data-aos='fade-right') El signo más (+) significa “reacciona con”, la flecha significa “produce” y las letras a, b, c, d (minúsculas) corresponden a los coeficientes estequiométricos de la ecuación. 
      p.mb-5(data-aos='fade-right') El vasto número de reacciones químicas puede clasificarse según el siguiente esquema de categorías.
      SlyderF.mb-5(columnas="col-lg-6 col-xl-6")(data-aos='fade-right')
        .tarjeta.bg-color-12.p-3.p-md-3.p-lg-4
          .row.my-4.justify-content-start.d-none.d-lg-block
              .col-sm-12.col-md-3.col-lg-2
                  img(src='@/assets/curso/temas/t5/3.svg', alt='')
          
          p.mb-5 #[b Reacciones de síntesis o combinación:] dos o más sustancias se combinan para formar un solo producto. 
          img(src='@/assets/curso/temas/t5/4.svg', alt='')

        .tarjeta.bg-color-12.p-3.p-md-3.p-lg-4
          .row.my-4.justify-content-start.d-none.d-lg-block
              .col-sm-12.col-md-3.col-lg-2
                  img(src='@/assets/curso/temas/t5/3.svg', alt='')
          
          p.mb-2 #[b Reacciones de descomposición:] una sustancia se descompone en dos o más productos simples. En este caso, un reactivo da lugar a dos o más productos, en un proceso que requiere de energía para desarrollarse. 
          img(src='@/assets/curso/temas/t5/5.svg', alt='')


        .tarjeta.bg-color-12.p-3.p-md-3.p-lg-4
          .row.my-4.justify-content-start.d-none.d-lg-block
              .col-sm-12.col-md-3.col-lg-2
                  img(src='@/assets/curso/temas/t5/3.svg', alt='')
          
          p.mb-4 #[b Reacciones de sustitución o desplazamiento simple:] se produce cuando un elemento toma el lugar de otro durante la formación de un compuesto. 
          img(src='@/assets/curso/temas/t5/6.svg', alt='')

        .tarjeta.bg-color-12.p-3.p-md-3.p-lg-4
          .row.my-4.justify-content-start.d-none.d-lg-block
              .col-sm-12.col-md-3.col-lg-2
                  img(src='@/assets/curso/temas/t5/3.svg', alt='')
          
          p.mb-4 #[b Reacciones de sustitución doble:] ocurre cuando dos compuestos intercambian sus componentes iónicos para generar productos completamente diferentes. 
          img(src='@/assets/curso/temas/t5/7.svg', alt='')

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t5/8.png', alt='')
        .col-sm-12.col-lg-8
          p.mb-5.mt-2 Se debe garantizar que toda ecuación química cumpla con la #[b ley de la conservación de la materia], la cual establece que la masa total de los reactivos debe ser igual a la masa total de los productos. Para lograrlo, es necesario balancear la ecuación, colocando los coeficientes estequiométricos a cada una de las sustancias involucradas en la reacción, de tal manera que el número de átomos de cada elemento sea el mismo en ambos lados de la ecuación. 
          .bg-color-11.p-4.br-5
            p.mb-0 Uno de los métodos mayormente usados para el #[b balanceo de ecuaciones es el método del balanceo por tanteo o inspección], que consiste en asignar números enteros a cada sustancia, para ajustar el número de átomos a cada lado de la ecuación.

      p.mb-5(data-aos='fade-right')  Al usar este método, se recomienda realizar el balanceo siguiendo el siguiente orden:
      .row.justify-content-center.mb-5.align-items-center(data-aos='fade-right')
        .col-sm-12.col-md-6.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t5/9.svg', alt='')
        .col-sm-12.col-md-6.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t5/10.svg', alt='')
        .col-sm-12.col-md-6.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t5/11.svg', alt='')
        .col-sm-12.col-md-6.col-lg-3.d-none.d-lg-block
          img(src='@/assets/curso/temas/t5/12.svg', alt='')

      h4(data-aos='fade-right') Ejemplo
      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-8
          p Se requiere balancear la siguiente ecuación por el método del tanteo:
          .bg-color-1.py-3.mb-3.w-fit.br-5.justify-self-center.m-auto
              p.mb-0.fw-bold.text-center.pcus-6 Fe#[sub 2]O#[sub 3] + C → Fe + CO
          p Se realiza una inspección previa y se comprueba que la cantidad de átomos de cada elemento es diferente a cada lado de la ecuación. Por tanto, se deben ajustar ambos lados de la ecuación. 
          .tabla-a.color-acento-contenido.mb-5
            table.table-cus
              thead
                tr
                  th Elemento
                  th Número de átomos del elemento en los reactivos
                  th Número de átomos del elemento en los productos
              tbody
                tr
                  td Fe
                  td 2
                  td 1
                tr
                  td C
                  td 1
                  td 1
                tr
                  td O
                  td 3
                  td 1
        .col-sm-12.col-lg-4.d-none.d-lg-block
          img(src='@/assets/curso/temas/t5/13.png', alt='')

      .row.justify-content-center.mb-5(data-aos='fade-right')
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t5/14.png', alt='')
        .col-sm-12.col-lg-7
          p Se inicia balanceando los átomos del hierro (metal).
          .bg-color-1.py-3.mb-5.w-fit.br-5.justify-self-center.m-auto
              p.mb-0.fw-bold.text-center.pcus-6 Fe#[sub 2]O#[sub 3] + C → 2Fe + CO

          p Luego se balancean los átomos de oxígeno. 
          .bg-color-1.py-3.mb-5.w-fit.br-5.justify-self-center.m-auto
              p.mb-0.fw-bold.text-center.pcus-6 Fe#[sub 2]O#[sub 3] + C → 2Fe + 3CO

          p Dado que el coeficiente estequiométrico 3, que fue colocado en el lado derecho de la ecuación para ajustar los oxígenos, modifica la cantidad de átomos de carbono (C), es necesario balancear los átomos de carbono del lado izquierdo de la ecuación. 
          .bg-color-1.py-3.mb-5.w-fit.br-5.justify-self-center.m-auto
              p.mb-0.fw-bold.text-center.pcus-6 Fe#[sub 2]O#[sub 3] + 3C → 2Fe + 3CO
          
          p Finalmente, se verifica que, a cada lado de la ecuación, la cantidad de átomos de cada elemento sea igual y se escribe la ecuación balanceada final. 
          .row.justify-content-center.align-items-center.mb-0.bg-color-4.p-4.br-5
            .col-sm-12.col-md-6.col-lg-6.mb-cus
              p Fe: 2 átomos en ambos lados.  
              p C: 3 átomos en ambos lados.  
              p.mb-0 O: 3 átomos en ambos lados. 
            .col-sm-12.col-md-6.col-lg-6
              .bg-color-1.br-5.px-3.py-3
                  p.mb-0.fw-bold.text-center Fe#[sub 2]O#[sub 3] + 3C → 2Fe + 3CO


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
