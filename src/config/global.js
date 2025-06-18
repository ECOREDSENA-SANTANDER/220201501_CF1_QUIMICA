export default {
  global: {
    Name: 'Entorno químico: principios, fenómenos y leyes.',
    Description:
      'El siguiente componente formativo está diseñado para propiciar en el aprendiz la apropiación de los conceptos esenciales, así como la adquisición y el desarrollo de habilidades y destrezas relacionadas con la química. Comprender cómo interactúan las sustancias y cómo se transforman, es fundamental para interpretar procesos fisicoquímicos, aplicar principios químicos y tomar decisiones informadas en situaciones propias cotidianas o del entorno laboral.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Ciencia: fundamentos y conceptualización básica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'El método científico',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'La materia y sus cambios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.2',
            titulo: 'Los estados de la materia',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Propiedades de la materia',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Unidades y mediciones',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'El átomo: unidad fundamental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Teoría atómica',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Estructura del átomo',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Tabla periódica',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Enlace químico y nomenclatura de compuestos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Fórmula química',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Enlaces químicos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Estructuras de Lewis',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Nomenclatura de los compuestos inorgánicos',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Reacciones químicas',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Introducción a la química orgánica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Grupos funcionales orgánicos',
            hash: 't_6_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Ciencia: fundamentos y conceptualización básica',
      referencia:
        'BrainPOP Español. (1 de junio de 2012). Método científico – BrainPOP Español.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=zzHu-yqdlz0',
    },
    {
      tema: 'Los estados de la materia',
      referencia:
        'University of Colorado Boulder. (8 septiembre de 2020). Estados de la materia.',
      tipo: 'Página web',
      link: 'https://phet.colorado.edu/es/simulations/states-of-matter',
    },
  ],
  glosario: [
    {
      termino: 'Átomo',
      significado:
        'unidad fundamental de la materia que puede intervenir en una combinación química mediante enlaces.',
    },
    {
      termino: 'Compuesto',
      significado:
        'sustancia formada por átomos de dos o más elementos, unidos químicamente en una proporción definida.',
    },
    {
      termino: 'Elemento',
      significado:
        'sustancia pura que no puede separarse en otras más simples mediante métodos químicos.',
    },
    {
      termino: 'Estequiometría',
      significado:
        'estudio cuantitativo de los reactivos y productos en una reacción química.',
    },
    {
      termino: 'Hipótesis',
      significado:
        'explicación factual y tentativa para un conjunto de observaciones.',
    },
    {
      termino: 'Ley',
      significado:
        'enunciado conciso, verbal o matemático de una relación entre fenómenos que es siempre igual en las mismas condiciones.',
    },
    {
      termino: 'Materia',
      significado: 'todo aquello que ocupa espacio y tiene masa.',
    },
    {
      termino: 'Método científico',
      significado:
        'metodología secuencial y rigurosa a partir de la cual se obtiene conocimiento científico.',
    },
    {
      termino: 'Mol',
      significado:
        'cantidad de sustancia de un sistema que contiene tantas entidades elementales como átomos hay en 0.012 kilogramos de carbono 12.',
    },
    {
      termino: 'Nomenclatura',
      significado:
        'sistema para formular y asignar nombre a compuestos químicos de acuerdo a sus propiedades fisicoquímicas.',
    },
    {
      termino: 'Reacción química',
      significado:
        'proceso en el cual una o varias sustancias cambian para formar otras de identidad química diferente.',
    },
    {
      termino: 'Solución',
      significado:
        'mezcla homogénea de dos o más sustancias puras, la de menor proporción recibe el nombre de soluto, a diferencia del solvente que es el componente mayoritario.',
    },
    {
      termino: 'Sustancia pura',
      significado:
        'sustancia que se encuentra constituida por átomos o moléculas de la misma naturaleza, siendo ejemplo los elementos y compuestos.',
    },
    {
      termino: 'Teoría',
      significado:
        'principio unificador que explica un conjunto de hechos y las leyes en las que se basa.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ahmed, I. (2020). What’s the matter with the Universe? Scientists have the answer.',
      link: 'https://phys.org/news/2020-09-universe-scientists.html',
    },
    {
      referencia:
        'Arroyo, S., J. E. (2014). Cambios de estado de la materia. [Esquema]. Blog de ciencias de la naturaleza.',
      link: 'https://www.educ.ar/recursos/14466/cambios-de-estado',
    },
    {
      referencia:
        'Brown, T. L. (2021). Química la ciencia central (11.a ed.). Prentice Hall/Pearson.',
    },
    {
      referencia:
        'Centro Español de Metrología (CEM). (2012). Vocabulario Internacional de Metrología - Conceptos fundamentales y generales, y términos asociados (VIM). (3ª ed.).',
      link: 'https://www.cem.es/sites/default/files/vim-cem-2012web.pdf',
    },
    {
      referencia:
        'Center for Astrophysics. (s.f.). Dark Energy and Dark Matter. Harvard & Smithsoian.',
      link:
        'https://www.cfa.harvard.edu/research/topic/dark-energy-and-dark-matter',
    },
    {
      referencia: 'Chang, R. (2017). Química. (12.ª ed.). Mc Graw Hill.',
      link:
        'https://archive.org/details/libro-de-quimica-raymond-chang-12va-edi/page/1026/mode/1up',
    },
    {
      referencia: 'Chang, R. (2017). Química. (14.ª ed.). Mc Graw Hill.',
    },
    {
      referencia:
        'Dodds, W. (2009). Laws, Theories, and Patterns in Ecology. Amsterdam University Press.',
      link: 'https://doi.org/10.1525/california/9780520260405.001.0001',
    },
    {
      referencia:
        'Equipo editorial, Etecé (16 de febrero de 2025). Ciencia. Enciclopedia Concepto. Recuperado el 4 de junio de 2025 de',
      link: 'https://concepto.de/ciencia/.',
    },
    {
      referencia:
        'Freire, N. (2024). Qué es la enigmática energía oscura y por qué no podemos detectarla. National Geografic.',
      link:
        'https://www.nationalgeographic.com.es/ciencia/que-es-energia-oscura-y-por-que-no-podemos-detectarla_23634',
    },
    {
      referencia:
        'Holton, G.J. (1988). Thematic Origins of Scientific Thought: Kepler to Einstein. Harvard University Press.',
      link:
        'https://dash.harvard.edu/entities/publication/73120379-18f1-6bd4-e053-0100007fdf3b',
    },
    {
      referencia:
        'Libretexts. (2021). 2.2: The Discovery of Atomic Structure. Chemistry LibreTexts.',
      link:
        'https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/02%3A_Atoms_Molecules_and_Ions/2.02%3A_The_Discovery_of_Atomic_Structure',
    },
    {
      referencia:
        'Mann, A. (2019). Confirmado: el nuevo estado de la materia es sólido y líquido a la vez. National Geographic.',
      link:
        'https://www.nationalgeographic.es/ciencia/2019/04/confirmado-el-nuevo-estado-de-la-materia-es-solido-y-liquido-a-la-vez',
    },
    {
      referencia:
        'Picado, A. B., y Álvarez, M. (2010). Química I: introducción al estudio de la materia (2 Edición). Editorial Universidad Estatal a Distancia.',
    },
    {
      referencia:
        'Schneegans, S.; Lewis, J. y T. Straza (editores) (2021) Informe de l’UNESCO sobre la Ciencia:  La Carrera contra el Reloj para un Desarrollo más Inteligente – Resumen Ejecutivo. UNESCO: Paris.',
      link: 'https://unesdoc.unesco.org/ark:/48223/pf0000377250_spa',
    },
    {
      referencia:
        'Yacolca – Tejada, J.D. Los estados de la materia: ¿Cuántos estados existen? Universidad Nacional Mayor de San Marcos. Perú.',
      link:
        'https://www.researchgate.net/publication/380052103_LOS_ESTADOS_DE_LA_MATERIA_CUANTOS_ESTADOS_EXISTEN',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable equipo desarrollo curricular',
          centro:
            'Centro Industrial del Diseño y la Manufactura - - Regional Santander',
        },
        {
          nombre: 'Juan Sebastián Fajardo Dulcey',
          cargo: 'Experto temático',
          centro:
            'Centro de Diseño Tecnológico Industrial CDTI - Regional Valle',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <i>full-stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'María Alejandra Vera Briceño',
          cargo: 'Animadora y productora multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Johann Sebastián Terán Carvajal',
          cargo: 'Animador y productor multimedia',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '--',
          cargo: 'Validadora de recursos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '--',
          cargo: 'Evaluadora para contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
