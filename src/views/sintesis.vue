<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente ofrece una visión integral de los principios fundamentales de la ciencia química, orientada a comprender los conceptos esenciales que rigen el comportamiento de la materia y sus transformaciones. Se abordan aspectos generales de la materia, incluyendo su clasificación en sustancias puras y mezclas, los diferentes estados físicos y las propiedades características que permiten identificarla. Se introduce además le uso de unidades y sistemas de medición, esenciales para la descripción de los fenómenos químicos. Se profundiza en el átomo como unidad fundamental de la materia, revisando las estructuras subatómicas y la organización de los elementos en la tabla periódica, herramienta fundamental para predecir propiedades químicas y relaciones entre elementos. Mas adelante, se estudian los diferentes tipos de enlace químico, que permiten la formación de compuestos, se analiza la representación de los enlaces mediante las estructuras de Lewis, y se introduce la nomenclatura inorgánica conforme las reglas IUPAC. Se exploran también las reacciones químicas entendidas como procesos de transformación de la materia, identificando sus tipos y el balanceo de ecuaciones. Finalmente, se introduce a la química orgánica, presentando los principales grupos funcionales que definen la estructura y reactividad de los compuestos orgánicos más comunes. 

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Descripción imagen")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
