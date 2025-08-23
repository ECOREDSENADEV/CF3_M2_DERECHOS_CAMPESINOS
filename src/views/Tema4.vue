<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Buenas prácticas y experiencias de participación campesina
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En distintas regiones de Colombia, la participación campesina ha demostrado ser una fuerza transformadora, capaz de generar propuestas sostenibles desde el territorio y de incidir en la formulación de políticas públicas. Estas experiencias exitosas han estado marcadas por la organización comunitaria, la planeación participativa y la capacidad de diálogo con las instituciones.

    separador
    
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Casos en Colombia
    
    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/2.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        p(data-aos="fade-left") Las Zonas de Reserva Campesina (ZRC), contempladas en la Ley 160 de 1994, han sido una herramienta clave para que comunidades rurales organizadas protejan su territorio, fortalezcan sus economías locales y exijan el cumplimiento de derechos agrarios. Ejemplos como la ZRC del Valle del Río Cimitarra, en el Magdalena Medio, muestran cómo la organización ha permitido frenar la expansión de economías extractivas, defender la tierra y desarrollar proyectos productivos sostenibles. Además, han promovido procesos de planeación desde abajo, elaborando planes de desarrollo con enfoque territorial y comunitario.
    
        .bg-color-2.p-4.tarjeta(data-aos="fade-left")
          p.mb-0 En departamentos como Nariño, Cauca y Putumayo, las organizaciones campesinas han participado activamente en los consejos de planeación municipal, logrando incluir propuestas veredales en los planes de desarrollo. Gracias a la persistencia organizativa y al acompañamiento técnico, estas iniciativas han ganado legitimidad e influencia. Organizaciones como Fensuagro han desempeñado un papel fundamental en la articulación de agendas rurales a nivel nacional.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Casos Relevantes en Santander
    
    .row.mb-5
      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/3.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        p(data-aos="fade-left") En Santander, la ZRC del Valle del Río Cimitarra es un referente nacional en defensa del territorio y en organización comunitaria. Allí, cientos de familias han impulsado un modelo de producción agroecológica, planificación participativa y desarrollo alternativo. La articulación con entidades públicas y organismos internacionales ha permitido obtener reconocimiento, inversión social y visibilización de las propuestas campesinas.
    
        .bg-color-12.tarjeta.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema4/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En municipios como San Vicente de Chucurí, El Carmen de Chucurí y Barrancabermeja, organizaciones como la ACVRA y redes veredales han desarrollado planes de vida, diagnósticos participativos y propuestas de desarrollo rural integral. Estas iniciativas, centradas en la soberanía alimentaria y la defensa del agua, muestran que incluso en contextos de conflicto, el campesinado organizado puede incidir, resistir y transformar sus realidades.

    p.mb-5 Las experiencias de participación campesina en Colombia son:

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-7.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Zonas de Reserva Campesina (ZRC)
              p Protección del territorio, freno a economías extractivas, impulso a economías locales, planeación desde el territorio.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Consejos de planeación participativa (Nariño, Cauca, Putumayo)
              p Inclusión de propuestas veredales en planes de desarrollo, fortalecimiento de la interlocución institucional.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 ZRC del Valle del Río Cimitarra (Santander)
              p Producción agroecológica, planeación territorial participativa, articulación institucional e inversión social.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 ACVRA y redes veredales (Santander)
              p Planes de vida y propuestas integrales con enfoque de soberanía alimentaria, fortalecimiento organizativo.
    
    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Factores de éxito: organización, formación, alianzas y persistencia
    
    p.mb-5 Los procesos exitosos de participación campesina en Colombia comparten ciertos factores clave que han permitido construir propuestas sólidas, sostenibles y con capacidad de incidencia real. Estos factores refuerzan la acción colectiva y le dan al campesinado herramientas para ejercer sus derechos desde el territorio. Los factores clave de éxito son:

    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Organización")
        .row.align-items-center.p-4
          .col-lg-8.mb-4.mb-md-0.order-2
            h4 Organización
            p Permite unir esfuerzos, definir objetivos comunes y actuar colectivamente; mejora la interlocución con las instituciones.
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema4/9.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Formación política y técnica")
        .row.align-items-center.p-4
          .col-lg-8.mb-4.mb-md-0.order-2
            h4 Formación política y técnica
            p Brinda herramientas para comprender derechos, normativas y contextos, fortaleciendo el liderazgo comunitario.
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema4/10.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Alianzas estratégicas")
        .row.align-items-center.p-4
          .col-lg-8.mb-4.mb-md-0.order-2
            h4 Alianzas estratégicas
            p La colaboración con otras comunidades, organizaciones sociales, sectores académicos y entidades estatales amplía el impacto.
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema4/11.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Persistencia")
        .row.align-items-center.p-4
          .col-lg-8.mb-4.mb-md-0.order-2
            h4 Persistencia
            p La constancia en el trabajo colectivo es lo que transforma propuestas en realidades; permite resistir obstáculos y sostener procesos a largo plazo.
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema4/12.png', alt='Texto que describa la imagen')
    
    p.mb-5 Cuando se combinan estos elementos con voluntad institucional y reconocimiento del campesinado como sujeto político, se abren caminos hacia una participación real, transformadora y justa en el campo colombiano.

    .row.justify-content-center
      .col-lg-10
        .row.mb-5.bg-color-13.p-4.p-md-5.tarjeta.align-items-center
          .col-lg-6.order-lg-2.mb-3.mb-lg-0
            .titulo-sexto.color-acento-contenido
              h5 Figura 1.
              span Factores de éxito
            figure
              img(src="@/assets/curso/tema4/13.svg", data-aos="zoom-in", alt="Diagrama sobre factores de éxito que incluye organización, formación, alianzas y persistencia.")
          .col-lg-6.order-lg-1
            p.mb-5(data-aos="fade-left") La siguiente  figura presenta un diagrama que identifica los principales factores que contribuyen al éxito en distintos contextos. Estos elementos: organización, formación, alianzas y persistencia, interactúan entre sí para fortalecer las capacidades, optimizar recursos y mantener el enfoque en los objetivos. Su integración favorece el desarrollo sostenido y la consecución de metas a largo plazo.
            figure
              img(src="@/assets/curso/tema4/14.png", data-aos="zoom-in")
        
           

</template>

<script>
export default {
  name: 'Tema4',
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
