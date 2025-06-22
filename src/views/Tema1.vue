<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Ciencia: fundamentos y conceptualización básica
      p(data-aos="fade-right") La ciencia constituye, en sí misma, un conjunto de conocimientos en constante evolución, obtenidos mediante la observación, la experimentación y el razonamiento lógico. Proporciona una base confiable para comprender los fenómenos naturales y sociales, establecer principios y leyes que rigen el funcionamiento del universo y de la sociedad, así como generar conocimientos verificables que puedan ser aplicados a la solución de problemas (Editorial Etecé, 2025). 
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/1.png', alt='')
        .col-sm-12.col-lg-7
            p.mb-4 Gracias a la ciencia, las comunidades pueden avanzar en campos tan diversos como la salud, la tecnología, la energía, la educación, la agricultura y la industria. Desde los alimentos procesados que se consumen a diario, hasta la invención de fármacos para erradicar enfermedades, muchos de los logros que mejoran nuestra vida son el resultado de años de trabajo, investigación y esfuerzo científico (Schneegans et al., 2021). 
            .row.justify-content-center.mb-4
              .col-sm-12.col-lg-2.d-none.d-lg-block
                img(src='@/assets/curso/temas/t1/2.svg', alt='')
              .col-sm-12.col-lg-10
                  p.mb-0 Por, tanto la ciencia, constituye un elemento fundamental para el desarrollo de cualquier sociedad y para el progreso de la humanidad. Es a través de la generación e implementación de conocimiento científico que se construyen el bienestar social, la calidad de vida y el desarrollo económico. 
            p.mb-0 En términos generales, la ciencia se clasifica en tres grandes categorías: #[b las ciencias formales, las ciencias sociales y las ciencias naturales.]
      
      
      .row.mb-5(data-aos="fade-right")
        .col-sm-12.col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img.wcus-2(src='@/assets/curso/temas/t1/3.svg' alt='')
            .tarjeta.bg-color-1
              .p-4
                p.mb-0 #[b Las ciencias formales] tienen como objeto de estudio las estructuras lógicas y las abstracciones, basándose en la inferencia, la deducción, la comprobación y la construcción de teoremas. Las matemáticas y la lógica son ejemplos representativos de esta categoría. 
        .col-sm-12.col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img.wcus-1(src='@/assets/curso/temas/t1/4.svg' alt='')
            .tarjeta.bg-color-1
              .p-4
                p.mb-0  #[b Las ciencias sociales] se centran en el estudio de los hechos y procesos relacionados con la dinámica de las sociedades y el comportamiento humano. Disciplinas como la antropología, la sociología y la economía se incluyen en esta clasificación.
        .col-sm-12.col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img.wcus-2(src='@/assets/curso/temas/t1/5.svg' alt='')
            .tarjeta.bg-color-1
              .p-4
                p.mb-0 Por otro lado,  #[b las ciencias naturales] se enfocan en estudiar, comprender, explicar y predecir los fenómenos de la naturaleza. Según el Diccionario de Oxford (2021), un fenómeno se define como cualquier “manifestación de una actividad que se produce en la naturaleza y se percibe a través de los sentidos”. La física, la química y la biología son ejemplos clásicos de esta categoría. Las ciencias naturales se sustentan en principios, teorías y leyes, con relaciones, semejanzas y diferencias. 
      
      
      .row.justify-content-center.mb-5.align-items-center(data-aos="fade-right")
        .col-sm-12.col-lg-1.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/6.svg', alt='')
        .col-sm-12.col-lg-11
            p.mb-0 A lo largo de la historia, la ciencia ha evolucionado gracias a las mentes brillantes de mujeres y hombres que, con su curiosidad, dedicación y espíritu investigativo, han transformado nuestra comprensión del mundo. Sus descubrimientos, teorías y experimentos han marcado hitos que aún hoy impactan la tecnología, la medicina, la física, la química, la biología y muchas otras áreas del conocimiento. Conocer sus contribuciones permite valorar el legado de la ciencia y reconocer el camino recorrido para alcanzar los avances de la actualidad.
      p(data-aos="fade-right") A continuación, se presentan algunos personajes históricos, que han generado grandes ideas y contribuciones al desarrollo científico en diversas disciplinas.
      .bg-full-width.bg-fondo-1.mb-0
        .p-full-width
          .tarjeta.p-4.bg-color-2.br-4
            LineaTiempoC.color-acento-contenido(data-aos="fade-right")
              .row.justify-content-center.mb-0.pcus-1(titulo="Leonardo Da Vinci")
                .col-sm-12.col-lg-8.mb-cus
                  h4.mb-5 Leonardo Da Vinci
                  p.mb-0 Polímata florentino nacido en 1452, reconocido como una de las mentes más brillantes de la historia. Fue pintor, inventor, anatomista, arquitecto, filósofo, científico e ingeniero. Su insaciable curiosidad y su profunda sed de conocimiento lo llevaron a explorar diversas áreas del saber, buscando comprender el funcionamiento del mundo natural. Sus bosquejos, que hoy se consideran obras de arte, reflejan su enfoque analítico y su visión científica adelantada a su tiempo.
                .col-sm-12.col-lg-4
                  figure.mb-0
                    img(src='@/assets/curso/temas/t1/7.png', alt='')

              .row.justify-content-center.mb-0.pcus-1(titulo="Galileo Galilei")
                .col-sm-12.col-lg-8.mb-cus
                  h4.mb-5 Galileo Galilei
                  p.mb-0 Físico, astrónomo y matemático italiano, considerado el padre de la ciencia moderna. Sus observaciones con el telescopio revolucionaron la astronomía, al confirmar fases de Venus, lunas de Júpiter y montañas en la Luna. Defendió la teoría heliocéntrica y formuló principios clave de la dinámica.
                .col-sm-12.col-lg-4
                  figure.mb-0
                    img(src='@/assets/curso/temas/t1/8.png', alt='')
              
              .row.justify-content-center.mb-0.pcus-1(titulo="René Descartes")
                .col-sm-12.col-lg-8.mb-cus
                  h4.mb-5 René Descartes
                  p.mb-0 Físico, matemático y filósofo francés nacido en 1596. Es conocido por su célebre locución filosófica “pienso, luego existo”, la cual supone una afirmación de independencia del pensamiento y del uso de la razón como único camino para alcanzar la verdad. Descartes promovía la duda, sosteniendo que se debía dudar de absolutamente todo hasta que comprobarlo mediante la experiencia y el razonamiento lógico. Es considerado el padre de la geometría analítica y uno de los fundadores de la filosofía moderna. 
                .col-sm-12.col-lg-4
                  figure.mb-0
                    img(src='@/assets/curso/temas/t1/9.png', alt='')

                    
              .row.justify-content-center.mb-0.pcus-1(titulo="Isaac Newton")
                .col-sm-12.col-lg-8.mb-cus
                  h4.mb-5 Isaac Newton
                  p.mb-0 Este físico, teólogo, matemático e inventor inglés nació en 1642. Se hizo célebre por postular la ley de la gravitación universal en 1687. Entre sus aportes a la ciencia se destacan el desarrollo del cálculo infinitesimal, el descubrimiento del espectro de color, sus estudios sobre la naturaleza de la luz, su incursión en la mecánica de fluidos y la formulación de la ley de la viscosidad, entre otros. Es considerado uno de los genios más grandes de la historia. Ocupó el cargo de presidente de la Real Sociedad de Londres hasta su muerte, ocurrida en 1727.
                .col-sm-12.col-lg-4
                  figure.mb-0
                    img(src='@/assets/curso/temas/t1/10.png', alt='')

                    
              .row.justify-content-center.mb-0.pcus-1(titulo="John Dalton ")
                .col-sm-12.col-lg-8.mb-cus
                  h4.mb-5 John Dalton 
                  p.mb-0 Fisicoquímico inglés nacido en 1766. Es reconocido por haber formulado y divulgado la teoría atómica moderna en 1808, a través de su obra “A New System of Chemical Philosophy”. Aunque enfrentó acusaciones de plagio durante su vida, Dalton propuso un método propio para calcular los pesos atómicos relativos de las sustancias elementales, destacándose por su esfuerzo en conceptualizar la estructura y naturaleza del átomo. Es célebre también por sus contribuciones al estudio de los gases (especialmente la formulación de la Ley de Dalton), así como por sus investigaciones sobre la ceguera al color, condición que él mismo padecía y que, en su honor, se conoce hoy como daltonismo. Es considerado el padre de la química moderna.
                .col-sm-12.col-lg-4
                  figure.mb-0
                    img(src='@/assets/curso/temas/t1/11.png', alt='')

                    
              .row.justify-content-center.mb-0.pcus-1(titulo="Dmitri Ivánovich Mendeléyev")
                .col-sm-12.col-lg-8.mb-cus
                  h4.mb-5 Dmitri Ivánovich Mendeléyev
                  p.mb-0 Químico ruso nacido en 1834. Entre sus logros se destacan la formulación de la ley periódica de los elementos, a partir de la cual desarrolló la primera versión coherente de la tabla periódica moderna. Esta herramienta, de carácter predictivo, permitió una comprensión más profunda de los elementos químicos y de sus propiedades fisicoquímicas. Su trabajo sentó las bases para importantes descubrimientos y avances en la química del siglo XX, consolidando su legado como uno de los científicos más influyentes de la historia de esta disciplina.
                .col-sm-12.col-lg-4
                  figure.mb-0
                    img(src='@/assets/curso/temas/t1/12.png', alt='')

                    
              .row.justify-content-center.mb-0.pcus-1(titulo="Marie Curie")
                .col-sm-12.col-lg-8.mb-cus
                  h4.mb-5 Marie Curie
                  p.mb-0 Nacida en Polonia en 1867, fue una destacada física, matemática y química pionera en el estudio de la radiactividad. En reconocimiento a sus investigaciones, recibió el Premio Nobel de Física en 1903, junto a su esposo Pierre Curie y el físico Henri Becquerel, convirtiéndose en la primera mujer en obtener esta distinción. Posteriormente, fue galardonada con el Premio Nobel de Química en 1911, gracias al descubrimiento de dos nuevos elementos: el polonio y el radio. Marie Curie fue la primera persona en recibir dos premios nobel en distintas áreas científicas. Falleció en 1934 a causa de una anemia aplásica, provocada por su prolongada exposición a materiales radiactivos. Es considerada una figura central en la historia de la ciencia y madre de la física moderna.
                .col-sm-12.col-lg-4
                  figure.mb-0
                    img(src='@/assets/curso/temas/t1/13.png', alt='')

                    
              .row.justify-content-center.mb-0.pcus-1(titulo="Charles Darwin ")
                .col-sm-12.col-lg-8.mb-cus
                  h4.mb-5 Charles Darwin 
                  p.mb-0 Naturalista y biólogo británico. Su obra más influyente, “El origen de las especies” (1859), propuso la teoría de la evolución mediante la selección natural. Esta teoría revolucionó la biología y modificó radicalmente la comprensión del origen y desarrollo de las especies, incluida la humana. Su enfoque científico se basó en una extensa recolección de datos, observación sistemática y análisis comparativo.
                .col-sm-12.col-lg-4
                  figure.mb-0
                    img(src='@/assets/curso/temas/t1/14.png', alt='')

                    
              .row.justify-content-center.mb-0.pcus-1(titulo="Antoine Lavoisier")
                .col-sm-12.col-lg-8.mb-cus
                  h4.mb-5 Antoine Lavoisier
                  p.mb-0 La ley de la conservación de la materia se atribuye a Antoine Lavoisier, científico naturalista francés del siglo XVIII, quien la enunció de la siguiente manera: “la masa de un sistema permanece invariable, cualquiera que sea la transformación que ocurra dentro de él”. En el contexto de las reacciones químicas, esto significa que la masa total de los reactivos es igual a la masa total de los productos. Por lo tanto, debe garantizarse que el número de átomos de cada elemento presente en los reactivos sea igual al número de átomos en los productos: los átomos no se crean ni se destruyen, simplemente se reorganizan durante una reacción.
                .col-sm-12.col-lg-4
                  figure.mb-0
                    img(src='@/assets/curso/temas/t1/15.png', alt='')

                    
              .row.justify-content-center.mb-0.pcus-1(titulo="Nikola Tesla")
                .col-sm-12.col-lg-8.mb-cus
                  h4.mb-5 Nikola Tesla
                  p.mb-0 Inventor e ingeniero serbocroata, nacionalizado estadounidense. Dedicó su vida al entendimiento de la electricidad y sus misterios. Es conocido por sus brillantes aportes al electromagnetismo, el desarrollo del sistema de corriente alterna y la transmisión inalámbrica de energía eléctrica e información. Más allá de sus particularidades y aunque sus ideas fueron adelantadas a su tiempo, muchas de sus innovaciones sentaron las bases del mundo moderno. El mundo de hoy, se debe, en gran parte, a su genialidad y mente científica visionaria, que ha inspirado a generaciones enteras. 
                .col-sm-12.col-lg-4
                  figure.mb-0
                    img(src='@/assets/curso/temas/t1/16.png', alt='')


                    
              .row.justify-content-center.mb-0.pcus-1(titulo="Albert Einstein")
                .col-sm-12.col-lg-8.mb-cus
                  h4.mb-5 Albert Einstein
                  p.mb-0 Físico alemán de origen judío, nacido en 1879 y reconocido como una de las mentes más brillantes e influyentes de la ciencia. Formuló la Teoría de la Relatividad, que revolucionó la forma en la que se entiende el universo, transformó por completo la concepción del tiempo, el espacio y la energía. En 1905 publicó la famosa ecuación E = mc², que establece la relación entre la masa y la energía. Recibió el Premio Nobel de Física en 1921 por su explicación del efecto fotoeléctrico, base de la física cuántica. 
                .col-sm-12.col-lg-4
                  figure.mb-0
                    img(src='@/assets/curso/temas/t1/17.png', alt='')

                    
              .row.justify-content-center.mb-0.pcus-1(titulo="Alexander Fleming")
                .col-sm-12.col-lg-8.mb-cus
                  h4.mb-5 Alexander Fleming
                  p.mb-0 Médico y científico escocés, célebre por el descubrimiento de la penicilina, un antibiótico de origen fúngico. Este hallazgo se dio de forma accidental, cuando algunas de sus cajas Petri con colonias bacterianas se contaminaran con esporas de Penicillium notatum, lo que inhibió el crecimiento de las bacterias. En 1945, fue galardonado con el Premio Nobel de Fisiología o Medicina, junto con los químicos Ernst Boris Chain y Howard Walter Florey, por el desarrollo de este antibiótico que revolucionó la medicina.
                .col-sm-12.col-lg-4
                  figure.mb-0
                    img(src='@/assets/curso/temas/t1/18.png', alt='')
                    



      Separador
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 1.1 El método científico
      
      p.mb-5(data-aos="fade-right") El método científico es una herramienta de investigación que permite generar conocimiento objetivo al resolver la veracidad o falsedad de un postulado por medio de la aplicación de una serie de etapas o pasos. Constituye una forma estructurada y sistemática de afrontar una duda. Su propósito es convertir una verdad subjetiva en objetiva, gracias a que se prueban y comprueban los hechos, con la finalidad de mostrar su existencia real (UNIR, 2025).
      .row.align-items-center.mb-5.titulo-icono(data-aos="fade-right")
        .col-auto.titulo-icono-img
          img(src='@/assets/curso/temas/bg/2.svg', alt='')
        .col
          h3.mb-0.titulo-icono-text.px-0.py-2 Etapas del método científico

      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-sm-12.col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/t1/19.svg', alt='')
        .col-sm-12.col-lg-7
          p.mb-4 El conocimiento se valida y reafirma en la medida en que la ciencia se vuelve cada vez más rigurosa en sus técnicas experimentales, metodologías y procedimientos. Ya lo afirmaba René Descartes en su discurso del método: “Sólo se puede decir que existe aquello que puede ser probado”, una visión compartida por numerosos intelectuales, académicos y filósofos naturales a lo largo de la historia. La convergencia entre ideas racionalistas e inductivas, junto con la necesidad de depurar la actividad científica de subjetivismos y sesgos cognitivos, dio origen a lo que hoy conocemos como el método científico.
          .bg-color-3.p-4
            p.mb-0 El método científico es una metodología o serie de tácticas implementadas para descubrir y construir conocimiento de manera válida (Holton, 1988), y aunque éste suele asociarse de manera exclusiva a las ciencias naturales, en realidad, todas las demás disciplinas emplean este método hipotético-deductivo en su ejercicio científico, por supuesto, adaptándolo según sus necesidades, contexto y objetivos particulares. 
      p.mb-5(data-aos="fade-right") Esta estrategia, a grandes rasgos, consta de las siguientes etapas:
      PasosA.color-acento-contenido.mb-5(tipo="n")(data-aos="fade-right")
        .row
          .col-sm-12.col-md-12.col-lg-10.mb-4.mb-md-0
            h3 Observación
            p.mb-0 Es el punto de partida el proceso. Consiste en examinar detenidamente un fenómeno, hecho o situación. El resultado de un ejercicio de observación minucioso es formular una pregunta y, de esta manera, plantear un problema.
          .col-sm-12.col-md-6.col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/t1/20.svg', alt='')
        
        .row
          .col-sm-12.col-md-6.col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/t1/21.svg', alt='')
          .col-sm-12.col-md-12.col-lg-10.mb-4.mb-md-0.text-left
            h3 Documentación
            p.mb-0 La documentación o revisión del “estado del arte” consiste en la indagación documental que se realiza de manera previa, con el objetivo de profundizar en materia. Esto permite identificar los antecedentes bibliográficos y verificar si determinado problema ya ha sido abordado y resuelto. Es fundamental que dicha revisión se base en fuentes confiables y verificables de rigor científico. 
        
        .row
          .col-sm-12.col-md-12.col-lg-10.mb-4.mb-md-0
            h3 Formulación de la hipótesis
            p.mb-0 Una vez culminada la etapa de revisión bibliográfica, se define una pregunta de investigación clara y se propone una posible respuesta o explicación, denominada hipótesis, que será puesta a prueba mediante la experimentación. La hipótesis surge como elemento deductivo y lógico. 
          .col-sm-12.col-md-6.col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/t1/22.svg', alt='')
  
        .row
          .col-sm-12.col-md-6.col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/t1/23.svg', alt='')
          .col-sm-12.col-md-12.col-lg-10.mb-4.mb-md-0.text-left
            h3 Experimentación
            p.mb-0 A continuación, prosigue la verificación experimental de la hipótesis. Se establece un diseño de experimentos o pruebas específicas, que permitan, bajo condiciones controladas, manipular una serie de factores y variables, logrando recopilar datos cuantitativos y/o cualitativos de forma rigurosa, que permitirán estudiar el efecto de cada uno de estos en el objeto de estudio. Resulta fundamental garantizar que las observaciones y los datos obtenidos sean reproducibles y no el resultado de azar o de errores experimentales. Además, se debe asegurar que los datos experimentales provengan de una muestra representativa. 
        
        .row
          .col-sm-12.col-md-12.col-lg-10.mb-4.mb-md-0
            h3 Análisis de resultados
            p.mb-0 Consiste en el procesamiento, interpretación y análisis objetivo y racional de la información recolectada y de los datos obtenidos experimentalmente, de manera que permita confrontar, deducir e inferir si la evidencia obtenida sustenta, respalda o refuta la hipótesis planteada inicialmente.
          .col-sm-12.col-md-6.col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/t1/24.svg', alt='')


        .row
          .col-sm-12.col-md-6.col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/t1/25.svg', alt='')
          .col-sm-12.col-md-12.col-lg-10.mb-4.mb-md-0.text-left
            h3 Conclusión
            p.mb-0 Una vez se cuenta con todos los elementos, a partir del análisis anterior, se extraen conclusiones que confirmen, modifiquen o rechacen la hipótesis planteada inicialmente. Si es necesario, se plantea una nueva hipótesis y se reinicia el proceso.
        
        .row
          .col-sm-12.col-md-12.col-lg-10.mb-4.mb-md-0
            h3 Comunicación de resultados
            p.mb-0 Finalmente, los hallazgos y las conclusiones deben ser presentados a la comunidad científica, de manera clara, ordenada y replicable, en función del avance del conocimiento, para una revisión rigurosa. Este proceso permite validar y fortalecer los hallazgos e identificar áreas de profundización y/o mejora. 
          .col-sm-12.col-md-6.col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/t1/26.svg', alt='')
  
  
  
  
  
  
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
