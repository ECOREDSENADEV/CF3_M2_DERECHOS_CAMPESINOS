<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Barreras y desafíos para la participación campesina
    
    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        p(data-aos="fade-left") En Colombia, el campesinado ha enfrentado obstáculos estructurales que han limitado históricamente el ejercicio pleno de sus derechos y su participación efectiva en la vida pública. La pobreza rural se manifiesta en el escaso acceso a servicios básicos, la precariedad de la infraestructura y la falta de recursos para sostener procesos organizativos o integrarse en espacios institucionales.
    
        .bg-color-2.p-4.tarjeta(data-aos="fade-left")
          p.mb-0 Sin condiciones económicas dignas, es difícil destinar tiempo o esfuerzo a la participación, ya que las prioridades cotidianas están centradas en la subsistencia. A esto se suma la falta de acceso a información clara y oportuna, lo cual impide conocer derechos, participar en convocatorias o incidir en la formulación de políticas públicas. En muchos territorios, la información no llega o se presenta en lenguaje técnico poco comprensible.
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      .col-lg-7
        p(data-aos="fade-left") Además, la discriminación social y cultural hacia el campesinado profundiza su exclusión. Persiste un estigma que considera al campo como un espacio atrasado, sin capacidad de propuesta, lo que debilita la legitimidad de su voz en la toma de decisiones. Esta exclusión se agrava en contextos marcados por el conflicto armado, donde el miedo, el desplazamiento forzado y la violencia han fracturado las organizaciones y debilitado los liderazgos rurales. En zonas con presencia de actores armados, participar puede incluso significar riesgo para la vida.
    
    p.mb-5 Superar estas barreras requiere políticas integrales que garanticen justicia social, educación rural, seguridad y el reconocimiento pleno de los derechos del campesinado, como base para una democracia realmente incluyente. A continuación, se presentan las principales barreras y desafíos que limitan la participación campesina en Colombia:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-7.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Pobreza estructural
              p Impide dedicar tiempo y recursos a la participación; las prioridades giran en torno a la subsistencia diaria.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Falta de información accesible
              p La información no llega a los territorios o está en lenguaje técnico; esto dificulta el conocimiento y ejercicio de derechos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Discriminación social y cultural
              p Estigmas que restan legitimidad a la voz campesina y refuerzan su exclusión de espacios institucionales.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Consecuencias del conflicto armado
              p Violencia, miedo y desplazamiento han fracturado organizaciones y amenazan la vida de líderes rurales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Debilidad organizativa
              p La falta de apoyo sostenido limita la capacidad de incidencia política de las comunidades.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Ausencia de garantías institucionales
              p No existen siempre condiciones reales ni seguras para la participación efectiva en escenarios públicos.
    
    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Obstáculos institucionales
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5
        p.mb-5 Los obstáculos institucionales representan una barrera significativa para que la participación campesina sea efectiva, vinculante y transformadora. Uno de los principales problemas es la burocracia excesiva dentro de las entidades públicas, que impone trámites complejos, documentos difíciles de obtener y procesos lentos. Esta situación desmotiva la participación y dificulta que las propuestas campesinas avancen dentro de los marcos formales de planificación y gestión pública.
        .row
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/9.png", data-aos="zoom-in")
          .col-lg-8
            .bg-color-6.tarjeta.p-4.mb-3(data-aos="fade-left")
              p.mb-0(data-aos="fade-left") La falta de acompañamiento técnico y la poca claridad en los procedimientos agravan esta barrera, dejando a las comunidades rurales en desventaja frente a quienes dominan el lenguaje institucional. Además, el exceso de requisitos, junto con la escasez de personal capacitado en las zonas rurales, profundiza la exclusión y limita las posibilidades de incidencia real.
            .row.align-items-start.mb-3
              .col-lg-auto.mb-3.mb-lg-0
                img(src="@/assets/curso/tema3/10.png").mx-auto
              .col-lg
                p.mb-0 A estos problemas se suma el centralismo, que debilita la participación desde los territorios. Muchas decisiones se toman desde el nivel nacional sin considerar las realidades locales, y los espacios regionales o municipales suelen carecer de autonomía, recursos y capacidad de decisión. En este contexto, la falta de voluntad política de ciertos gobiernos e instituciones reduce la participación a un acto simbólico, sin efectos reales en la toma de decisiones.
            p Superar estos obstáculos exige descentralizar el poder, simplificar los trámites administrativos y fortalecer la institucionalidad con enfoque territorial y participativo. 
        
        separador
        
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 3.2 Estrategias para superar barreras
        
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/11.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p(data-aos="fade-left") Superar las barreras que limitan la participación campesina en Colombia requiere de estrategias integrales, construidas desde los territorios y con enfoque comunitario. Una de las claves es el fortalecimiento organizativo, mediante formación política y técnica adaptada al contexto rural, que permita a las comunidades comprender sus derechos, conocer la legislación vigente y manejar los mecanismos de participación.

            .bg-color-2.p-4(data-aos="fade-left").mb-3
              p.mb-0(data-aos="fade-left") El acceso a información clara, oportuna y en lenguaje comprensible es esencial para que las comunidades puedan tomar decisiones informadas. Igualmente, promover espacios de encuentro e interacción entre organizaciones sociales, líderes rurales y entidades públicas fortalece las redes de colaboración y confianza.
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img(src="@/assets/curso/tema3/12.png").mx-auto
              .col-lg
                p.mb-0 El uso de tecnologías apropiadas —como emisoras comunitarias o plataformas digitales accesibles— puede acercar los procesos institucionales a las zonas más apartadas. Asimismo, es fundamental exigir a las instituciones mayor apertura, descentralización y voluntad política, lo cual implica simplificar trámites, adaptar horarios y lugares de reunión, y ofrecer apoyo logístico cuando sea necesario.
        
        .bg-color-6.tarjeta.mb-5
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img(src="@/assets/curso/tema3/13.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 También es clave fomentar la inclusión activa de jóvenes, mujeres y personas mayores, ampliando la representatividad y sostenibilidad de las decisiones. El reconocimiento del campesinado como sujeto político, cultural y económico debe estar en el centro de las políticas públicas. Este reconocimiento solo será posible mediante la alianza entre lo institucional y lo comunitario, construyendo una participación real como herramienta de cambio y justicia. 

</template>

<script>
export default {
  name: 'Tema3',
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
