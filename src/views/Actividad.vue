<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Participación campesina',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> fomentar la comprensión crítica y reflexiva del derecho a la participación campesina en los asuntos públicos, resaltando su importancia como herramienta para defender el territorio, acceder a derechos y contribuir a la construcción de políticas rurales incluyentes.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué implica realmente la participación campesina?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo asistir a reuniones políticas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Estar presente sin opinar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Ser parte activa en decisiones que afectan la vida rural.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Recibir beneficios del Estado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Por qué se considera la participación campesina un derecho?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque está respaldada por la Constitución y leyes nacionales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Porque depende de la voluntad del alcalde.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque es una tradición cultural.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque las comunidades lo exigen en protestas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué expresan las formas organizativas como cooperativas o juntas comunales?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un modelo económico empresarial privado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una forma de participación campesina organizada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un sistema de control gubernamental.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un requisito para obtener subsidios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es uno de los principales obstáculos estructurales para la participación campesina?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El exceso de fertilizantes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El apoyo de organizaciones internacionales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La sobreoferta de servicios rurales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La pobreza y la falta de acceso a la información.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué entidad se encarga de formalizar el acceso a tierras rurales?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Agencia Nacional de Tierras.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Agencia Nacional de Salud.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Defensoría del Pueblo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ministerio de Defensa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué artículo de la Constitución consagra el derecho a la participación ciudadana?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Artículo 50.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Artículo 40.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Artículo 123.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Artículo 1.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué rol cumple la Defensoría del Pueblo en la participación campesina?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Distribuye tierras.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Otorga subsidios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Promueve y protege los derechos del campesinado.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aplica justicia penal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué se busca con la nueva institucionalidad agraria?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Privatizar las tierras agrícolas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituir a las comunidades campesinas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituir a las comunidades campesinas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Promover un desarrollo participativo, justo y sostenible.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué es una Zona de Reserva Campesina (ZRC)?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una finca privada con beneficios tributarios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un territorio protegido por comunidades campesinas para el desarrollo rural.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un área urbana prioritaria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una zona militar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué factores fortalecen la participación campesina?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Organización, formación, alianzas y persistencia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Control institucional, aislamiento y jerarquías.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Subsidios, televisión, redes sociales y suerte.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Intervención extranjera, improvisación y paternalismo estatal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'La participación campesina es un favor que concede el Estado.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Los Consejos Municipales de Desarrollo Rural son espacios de participación institucional.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'La Agencia de Desarrollo Rural promueve el trabajo militar en el campo.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: 'El campesinado participa únicamente a través del voto.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'La historia de la participación campesina en América Latina incluye luchas por la tierra y la soberanía alimentaria.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
