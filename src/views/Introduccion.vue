<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width.bg-fondo-1.mb-5
      .px-4.px-md-5
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p(data-aos="fade-left") Participar desde el campo significa reconocer que las decisiones que se toman sobre la tierra, el agua, los cultivos y la vida comunitaria también deben pasar por manos campesinas. La participación campesina es el ejercicio activo de opinar, proponer y actuar frente a los asuntos que afectan directamente a quienes habitan y trabajan en el mundo rural. No se limita a estar presente en una reunión o firmar una lista; va más allá, hacia el compromiso con la organización, el diálogo colectivo y la defensa del territorio. Esa participación nace de la experiencia diaria, del conocimiento que da la vida en la vereda, de la historia compartida y del deseo de construir un futuro con dignidad. Cada voz que se alza desde el campo tiene valor y debe ocupar un lugar en las decisiones públicas. Ser parte del proceso es también un acto de reconocimiento del rol que el campesinado cumple en la sociedad.

        .bg-color-1.mb-5.tarjeta(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/intro/2.svg', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") Hacer parte activa de los procesos participativos permite transformar realidades. La participación campesina sirve para que las decisiones no sean impuestas desde afuera, sino construidas con quienes conocen el territorio y sus necesidades. A través de ella se logra mejorar servicios, proteger recursos, orientar políticas públicas y fortalecer la economía local. Además, contribuye al desarrollo con equidad, donde las propuestas nacen desde abajo y no desde intereses externos. Participar también ayuda a exigir derechos, a consolidar procesos organizativos y a que el campo sea visto como un espacio vivo, productivo y con voz propia. Cada espacio ganado, cada idea aportada y cada propuesta defendida suma a la construcción de un modelo de desarrollo más justo y sostenible para el mundo rural.
        
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/intro/3.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left") Llevar a cabo la participación requiere constancia, organización y preparación. Se participa al integrarse en juntas de acción comunal, asociaciones campesinas, consejos municipales o mesas rurales. También se participa cuando se asiste a asambleas, se aporta en una consulta, o se lidera un proyecto colectivo. La participación efectiva no se impone, se construye con formación, diálogo y trabajo conjunto. A pesar de las barreras como la distancia, la falta de información o el temor a no ser escuchado, la experiencia demuestra que donde hay unión, hay avances. El camino no siempre es fácil, pero cada paso dado fortalece la voz campesina y deja huella en la historia local. Participar es sembrar en colectivo para que el fruto del desarrollo llegue a todas y todos, con justicia, respeto y dignidad rural.
        
       
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
