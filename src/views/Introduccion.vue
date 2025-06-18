<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-5
      .col-sm-12.col-lg-2.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/1.svg', alt='')
      .col-sm-12.col-lg-10
          p.mb-0.mt-3 La química es una ciencia activa y en evolución que tiene importancia vital en nuestro planeta, tanto en la naturaleza como en la sociedad. Aunque sus raíces son antiguas, la química es el todos los sentidos una ciencia moderna. Como ciencia que estudia la composición, estructura, propiedades y transformaciones de la materia, la química permite comprender los fenómenos que ocurren tanto a nivel microscópico como macroscópico, siendo clave para explicar los procesos del mundo natural y para propiciar el desarrollo de soluciones tecnológicas en campos diversos como la salud, la energía, la industria alimentaria, la agricultura, la nanotecnología y la protección de medio ambiente. 

    p.mb-5 Este componente formativo, tiene como objetivo proporcionar al aprendiz una base sólida en los principios fundamentales de la química, incluyendo el método científico, que es la base para la investigación en diversas ciencias, las mediciones y las unidades de medida, la estructura atómica, los estados de la materia, el enlace químico, las reacciones químicas y una introducción a la ciencia del carbono, la química orgánica. La química no es sólo una ciencia de laboratorio, es una herramienta poderosa para transformar el mundo. Lo invitamos a explorar el entorno químico con curiosidad, disciplina y entusiasmo. 
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
