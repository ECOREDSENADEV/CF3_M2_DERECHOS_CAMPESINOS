export default {
  global: {
    Name: 'Participación campesina ',
    Description:
      'La participación campesina se refiere al proceso mediante el cual las comunidades campesinas intervienen activamente en la toma de decisiones que afectan su vida, su territorio, su economía y su bienestar, especialmente en temas como políticas públicas, desarrollo rural, gestión de recursos naturales, acceso a tierras, programas sociales, entre otros.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
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
        titulo: '¿Qué es la participación campesina?',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Derecho a la participación campesina',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Derechos humanos en la participación campesina',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Participación ciudadana como derecho constitucional',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Cuál es la especial protección constitucional y legal',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Importancia de la participación para el campesinado',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo:
              'Historia de la participación rural en Colombia y América Latina',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Mecanismos e instrumentos de participación ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Espacios institucionales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Rol del campesinado',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'La nueva institucionalidad agraria',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'La defensoría del pueblo en la participación campesina',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Barreras y desafíos para la participación campesina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Obstáculos institucionales',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Estrategias para superar barreras ',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Buenas prácticas y experiencias de participación campesina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Casos en Colombia',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Factores de éxito: organización, formación, alianzas y persistencia',
            hash: 't_4_2',
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
      tema: 'Derecho a la participación campesina',
      referencia:
        'Observatorio de tierras. (s.f.). Derechos políticos del campesinado: consulta y participación forzada. ',
      tipo: 'Documento PDF',
      link:
        'https://www.observatoriodetierras.org/derechos-politicos-del-campesinado-consulta-y-participacion-forzada/   ',
    },
    {
      tema: 'Mecanismos e instrumentos de participación',
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2017). Lineamientos de Política Pública para la Agricultura Campesina, Familiar y Comunitaria: Resolución 464 de 2017 [PDF]. Ministerio de Agricultura.',
      tipo: 'Documento PDF',
      link:
        'https://www.minagricultura.gov.co/Normatividad/Resoluciones/Resoluci%C3%B3n%20No%20000464%20de%202017.pdf ',
    },
    {
      tema: 'Derecho a la participación campesina',
      referencia:
        'Congreso de Colombia. (2022). Ley 2219 de 2022: por la cual se dictan normas para la constitución operación de las asociaciones campesinas y de las asociaciones agropecuarias, se facilitan sus relaciones con la administración pública, y se dictan otras disposiciones. ',
      tipo: 'Documento PDF',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=188726 ',
    },
  ],
  glosario: [
    {
      termino: 'Participación campesina',
      significado:
        'intervención activa y organizada de las comunidades rurales en decisiones que afectan su vida, territorio, cultura y derechos.',
    },
    {
      termino: 'Derecho',
      significado:
        'garantía que tiene una persona o grupo, reconocida por la ley, para exigir algo o actuar de determinada manera.',
    },
    {
      termino: 'Territorio',
      significado:
        'espacio físico habitado y trabajado por comunidades rurales, cargado de sentido cultural, social y productivo.',
    },
    {
      termino: 'Organización comunitaria',
      significado:
        'forma en la que las personas de una comunidad se agrupan para tomar decisiones, defender derechos y trabajar en conjunto.',
    },
    {
      termino: 'Democracia participativa',
      significado:
        'sistema político en el que la ciudadanía interviene de manera directa en la toma de decisiones, más allá del voto, para incidir en las políticas públicas.',
    },
    {
      termino: 'Sujeto político',
      significado:
        'persona o grupo social que tiene conciencia de sus derechos, participa activamente en lo público y busca incidir en las decisiones del Estado.',
    },
    {
      termino: 'Inclusión',
      significado:
        'proceso por el cual se integran activamente personas o grupos tradicionalmente excluidos de la vida social, política o económica.',
    },
    {
      termino: 'Veeduría ciudadana',
      significado:
        'grupo de personas que vigila y hace seguimiento a la gestión pública para asegurar transparencia y legalidad.',
    },
    {
      termino: 'Consejo Municipal de Desarrollo Rural (CMDR)',
      significado:
        'espacio institucional donde las comunidades rurales y el gobierno local dialogan y planifican el desarrollo del campo.',
    },
  ],
  referencias: [
    {
      referencia:
        'Agencia de Desarrollo Rural. (2023). Funciones y servicios institucionales. ',
      link: '',
    },
    {
      referencia:
        'Agencia Nacional de Tierras. (2023). Funciones y estrategias de acceso a la tierra. ',
      link: '',
    },
    {
      referencia:
        'Asamblea General de las Naciones Unidas. (2018). Declaración sobre los derechos de los campesinos y otras personas que trabajan en las zonas rurales (A/RES/73/165). ',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (1991). Constitución Política de Colombia de 1991. ',
      link: 'https://www.constitucioncolombia.com',
    },
    {
      referencia:
        'Defensoría del Pueblo. (2021). Los derechos del campesinado en Colombia: Hacia la construcción de una política pública agraria con enfoque de derechos. ',
      link: '',
    },
    {
      referencia:
        'FAO. (2020). El papel de la agricultura familiar en el desarrollo sostenible y la seguridad alimentaria. Organización de las Naciones Unidas para la Alimentación y la Agricultura. ',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano de Desarrollo Rural. (2022). Zonas de Reserva Campesina y desarrollo rural. ',
      link: '',
    },
    {
      referencia:
        'Procuraduría General de la Nación. (2022). Informe sobre participación ciudadana y control social en el sector rural. ',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas. (2015). Objetivos de Desarrollo Sostenible (ODS). ',
      link: 'https://www.un.org/sustainabledevelopment/es/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
