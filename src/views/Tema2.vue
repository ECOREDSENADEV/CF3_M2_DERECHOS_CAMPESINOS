<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Mecanismos e instrumentos de participación
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5
        .row.mb-5
          .col-lg-3.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/1.svg", data-aos="zoom-in")
          .col-lg-9.order-lg-1
            p(data-aos="fade-left") En Colombia existen diversos mecanismos de participación ciudadana que permiten a la población intervenir en decisiones públicas, ejercer control social y fortalecer la democracia. Estos mecanismos están respaldados por la Constitución Política y por leyes como la Ley 134 de 1994 y la Ley 1757 de 2015, que regulan los canales formales para que la ciudadanía participe de forma activa en los asuntos que afectan a la comunidad. A través de estos instrumentos, se hace posible proponer, opinar, vigilar y decidir sobre políticas, planes y decisiones del Estado. Entre los más conocidos se encuentran:

            .row.justify-content-center.align-items-stretch.mb-3
              .col-lg-4.mb-3.mb-lg-0
                .bg-color-3.tarjeta.p-3(data-aos="fade-left").h-100
                  .row.align-items-center
                    .col-lg-auto.mb-3.mb-lg-0
                      img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
                    .col-lg
                      p.mb-0 El voto
              .col-lg-4.mb-3.mb-lg-0
                .bg-color-3.tarjeta.p-3(data-aos="fade-left").h-100
                  .row.align-items-center
                    .col-lg-auto.mb-3.mb-lg-0
                      img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
                    .col-lg
                      p.mb-0 El plebiscito
              .col-lg-4.mb-3.mb-lg-0
                .bg-color-3.tarjeta.p-3(data-aos="fade-left").h-100
                  .row.align-items-center
                    .col-lg-auto.mb-3.mb-lg-0
                      img(src="@/assets/curso/tema2/4.svg", style="max-width: 90px").mx-auto
                    .col-lg
                      p.mb-0 El referendo
            .row.justify-content-center.align-items-stretch.mb-3
              .col-lg-4.mb-3.mb-lg-0
                .bg-color-3.tarjeta.p-3(data-aos="fade-left").h-100
                  .row.align-items-center
                    .col-lg-auto.mb-3.mb-lg-0
                      img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
                    .col-lg
                      p.mb-0 La consulta popular
              .col-lg-4.mb-3.mb-lg-0
                .bg-color-3.tarjeta.p-3(data-aos="fade-left").h-100
                  .row.align-items-center
                    .col-lg-auto.mb-3.mb-lg-0
                      img(src="@/assets/curso/tema2/6.svg", style="max-width: 90px").mx-auto
                    .col-lg
                      p.mb-0 La iniciativa legislativa
              .col-lg-4.mb-3.mb-lg-0
                img(src="@/assets/curso/tema2/7.svg").mx-auto
        
        .row.mb-5
          .col-lg-6.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/8.png", data-aos="zoom-in")
          .col-lg-6
            p(data-aos="fade-left") También existen otras formas de participación directa, como el cabildo abierto, las veedurías ciudadanas y los consejos de planeación, espacios donde la ciudadanía puede ejercer vigilancia y control sobre la gestión pública.
        
            .bg-color-2.p-4.tarjeta(data-aos="fade-left")
              p.mb-0 El uso de estos mecanismos fortalece el vínculo entre las instituciones y la ciudadanía, especialmente cuando se busca que las decisiones reflejen las necesidades reales de las comunidades. En el ámbito rural, su implementación permite que poblaciones campesinas, indígenas y afrodescendientes hagan oír su voz y propongan soluciones desde su experiencia y conocimiento del territorio.
        
        p.mb-5 Participar a través de estos instrumentos requiere información, organización y voluntad colectiva. La historia ha demostrado que, cuando se utilizan de manera consciente y estratégica, pueden generar transformaciones importantes en lo social, político y territorial. Por ello, conocer y ejercer estos mecanismos no solo es un derecho constitucional, sino una herramienta esencial para la construcción de una Colombia más justa y participativa. A continuación, se presentan los principales mecanismos e instrumentos de participación reconocidos en Colombia:

        .bg-full-width.bg-fondo-2
          .px-4.px-md-5.pb-md-3
            .row.justify-content-center.align-items-center
              .col-lg-7.mb-3.mb-lg-0.order-lg-2
                SlyderF(columnas="col-12 col-lg-6")
                  .bg-color-white.p-4.h-100.box-shadow
                    img(src='@/assets/curso/tema2/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Voto
                    p.text-center Elección de representantes y toma de decisiones a través de sufragio directo.
                  .bg-color-white.p-4.h-100.box-shadow
                    img(src='@/assets/curso/tema2/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Plebiscito
                    p.text-center Mecanismo mediante el cual la ciudadanía aprueba o rechaza decisiones del Ejecutivo sobre temas de especial importancia nacional.
                  .bg-color-white.p-4.h-100.box-shadow
                    img(src='@/assets/curso/tema2/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Referendo
                    p.text-center Consulta popular para aprobar o derogar una norma legal.
                  .bg-color-white.p-4.h-100.box-shadow
                    img(src='@/assets/curso/tema2/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Consulta popular
                    p.text-center Pregunta directa a la ciudadanía sobre decisiones trascendentales a nivel nacional, departamental o municipal.
                  .bg-color-white.p-4.h-100.box-shadow
                    img(src='@/assets/curso/tema2/14.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Iniciativa legislativa
                    p.text-center Derecho ciudadano de presentar proyectos de ley ante el Congreso o concejos municipales.
                  .bg-color-white.p-4.h-100.box-shadow
                    img(src='@/assets/curso/tema2/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Cabildo abierto
                    p.text-center Reunión pública donde la ciudadanía expone opiniones y propuestas ante autoridades locales.
                  .bg-color-white.p-4.h-100.box-shadow
                    img(src='@/assets/curso/tema2/16.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Veedurías ciudadanas
                    p.text-center Grupos ciudadanos que hacen seguimiento a la gestión pública y al uso de los recursos del Estado.
                  .bg-color-white.p-4.h-100.box-shadow
                    img(src='@/assets/curso/tema2/17.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Consejos de planeación
                    p.text-center Espacios de participación en la formulación, ejecución y evaluación de planes de desarrollo a nivel territorial.
        
              .col-lg-3.order-lg-1
                figure
                  img(src='@/assets/curso/tema2/9.png', alt='')
            
            separador
            
            #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
              h2 2.1 Espacios institucionales 
            
            p.mb-5 En Colombia, los espacios institucionales de participación rural son escenarios creados por la ley con el objetivo de garantizar que las comunidades rurales —en especial el campesinado, los pueblos indígenas, las comunidades afrodescendientes, las mujeres rurales y los jóvenes— puedan intervenir en la formulación, seguimiento y evaluación de las políticas públicas.

            .row.align-items-center
              .col-lg-4.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema2/18.png", data-aos="zoom-in")
              .col-lg-8
                .bg-color-5.tarjeta.p-4(data-aos="fade-left")
                  p Entre los principales espacios se encuentran los Consejos Municipales de Desarrollo Rural (CMDR), las Mesas de Desarrollo Rural y los Consejos Territoriales de Planeación. Estos espacios representan canales formales de diálogo entre la sociedad civil y el Estado, donde se debaten temas clave como:
                  .row
                    .col-lg-5.mb-3.mb-lg-0
                      figure
                        img(src="@/assets/curso/tema2/19.svg", data-aos="zoom-in")
                    .col-lg-5   
                      ul.lista-ul--color
                        li.mb-2.d-flex.bg-color-11.tarjeta.p-2
                          i.fas.fa-leaf.bg-color-10
                          p.mb-0 Acceso a tierras
                        li.mb-2.d-flex.bg-color-11.tarjeta.p-2
                          i.fas.fa-leaf.bg-color-10
                          p.mb-0 Proyectos productivos
                        li.mb-2.d-flex.bg-color-11.tarjeta.p-2
                          i.fas.fa-leaf.bg-color-10
                          p.mb-0 Infraestructura
                        li.mb-2.d-flex.bg-color-11.tarjeta.p-2
                          i.fas.fa-leaf.bg-color-10
                          p.mb-0 Educación rural
                        li.mb-2.d-flex.bg-color-11.tarjeta.p-2
                          i.fas.fa-leaf.bg-color-10
                          p.mb-0 Protección del medio ambiente

    p.mb-5 Su existencia tiene como propósito construir una gobernanza más democrática y participativa desde el territorio, garantizando que las decisiones respondan a las realidades y necesidades locales. Las características principales de estos espacios:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-7.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/20.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 CMDR (Consejo Municipal de Desarrollo Rural)
              p Escenario municipal donde se articulan representantes comunitarios, organizaciones campesinas, entidades públicas y autoridades locales para coordinar acciones de desarrollo rural.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/21.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Mesas de Desarrollo Rural
              p Espacios más flexibles y contextuales que facilitan el diálogo temático entre distintos actores del campo, abordando problemas y propuestas desde lo local.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/22.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Consejos Territoriales de Planeación
              p Participan en la elaboración y seguimiento de los planes de desarrollo, actuando como canales directos de evaluación y propuesta de políticas públicas.
    
    .row.justify-content-center
      .col-lg-10
        .bg-color-9
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/23.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Participar en estos espacios requiere organización comunitaria, conocimiento del territorio y voluntad de incidir. Fortalecerlos es esencial para lograr un desarrollo rural incluyente, justo y con participación efectiva de quienes habitan el campo.
    
    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Rol del campesinado
    
    p.mb-5 A continuación, se presenta un video que analiza el papel histórico, social y político del campesinado en Colombia, resaltando su importancia en la producción de alimentos, la protección de los ecosistemas y la construcción de paz en los territorios rurales.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 La nueva institucionalidad agraria
    
    .row.mb-5
      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/24.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        .bg-color-9.tarjeta.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema2/25.png", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La nueva institucionalidad agraria en Colombia surge como una respuesta a la necesidad de transformar las relaciones entre el Estado y las comunidades rurales, promoviendo un enfoque incluyente, participativo y territorial. Esta estructura se fundamenta en principios de equidad, sostenibilidad y desarrollo rural integral, articulando diversas entidades y mecanismos con el fin de garantizar el acceso a la tierra, el ordenamiento del territorio y el fortalecimiento de la economía campesina.
    
    p.mb-5 Se reconoce la importancia de dar voz a quienes habitan el campo y de construir políticas públicas que respondan a sus realidades, aspirando a una planificación participativa y una implementación eficaz. En este contexto, se fortalece el tejido rural y se avanza hacia una paz con justicia social. Las principales entidades de la nueva institucionalidad agraria son:

    .row
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/26.png", data-aos="zoom-in")
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-8")
          div(titulo="Agencia Nacional de Tierras")
            p.ms-5 Administra, recupera, adjudica y formaliza tierras rurales con enfoque social. Busca garantizar el acceso a la tierra como derecho fundamental para comunidades campesinas, indígenas y afrodescendientes. Fue creada para implementar políticas de redistribución y regularización de tierras, conforme al Acuerdo Final de Paz. Promueve el ordenamiento social del territorio y la seguridad jurídica, priorizando a quienes carecen de tierra o la poseen informalmente.
          div(titulo="Agencia de Desarrollo Rural")
            p.ms-5 Fortalece las capacidades del campo mediante proyectos productivos, infraestructura y servicios rurales. Su misión es integrar a las comunidades en el desarrollo económico y social, fomentando la asociatividad y el cierre de brechas entre campo y ciudad. Trabaja con enfoque territorial, apoyando la comercialización, asistencia técnica y acceso a recursos, con el fin de transformar las condiciones estructurales del agro.
          div(titulo="Consejo Nacional de Reforma Agraria y Desarrollo Rural")
            p.ms-5 Espacio de concertación entre el Estado y actores rurales. Garantiza la participación directa en las decisiones sobre el uso y distribución de la tierra y el desarrollo rural. Compuesto por representantes del gobierno y organizaciones campesinas, indígenas y afrodescendientes. Evalúa avances, propone ajustes normativos y asegura la alineación de políticas públicas con el interés colectivo. Refuerza la democracia participativa.
          div(titulo="Agencia para la Renovación del Territorio")
            p.ms-5 Lidera procesos de transformación en zonas afectadas por pobreza, violencia y desigualdad. Implementa los Programas de Desarrollo con Enfoque Territorial (PDET). Su trabajo se basa en la participación comunitaria, con inversiones en infraestructura, salud, educación, reactivación económica y fortalecimiento institucional. Actúa con enfoque diferencial, adaptando sus acciones a las particularidades culturales, sociales y ambientales de cada región.
    
    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 La defensoría del pueblo en la participación campesina
    
    p.mb-5 La Defensoría del Pueblo desempeña un papel fundamental en la promoción y protección de los derechos del campesinado, asegurando que sus voces sean escuchadas en los procesos de toma de decisiones. Su labor se centra en acompañar a las comunidades rurales en el ejercicio pleno de sus derechos, vigilar el cumplimiento de la normatividad sobre participación y exigir condiciones de equidad y representación en los espacios institucionales.

    .row.mb-5.align-items-center
      .col-lg-5.mb-3.mb-lg-0
        .bg-color-6.tarjeta.px-4.py-5.h-100(data-aos="fade-left").align-content-center
          p.mb-0(data-aos="fade-left") Mediante acciones de acompañamiento, orientación jurídica y promoción del diálogo, la Defensoría fortalece la organización y capacidad de incidencia de las comunidades rurales. Además, emite alertas tempranas, informes y recomendaciones dirigidas a las entidades estatales, para que se creen condiciones reales de participación, se respeten los derechos y se reconozca la identidad campesina.
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/27.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        p.mb-0(data-aos="fade-left") La presencia activa de esta entidad en el territorio permite actuar de forma preventiva frente a vulneraciones de derechos, promoviendo la construcción de confianza entre las instituciones y la población rural. Su intervención es clave para asegurar una participación efectiva, digna y representativa de los sectores campesinos en el diseño e implementación de políticas públicas.
  

    
          



                        
                

    
        

</template>

<script>
export default {
  name: 'Tema2',
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
