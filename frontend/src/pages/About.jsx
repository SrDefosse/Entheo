import AboutHero from '../components/about/AboutHero'
import AboutSection from '../components/about/AboutSection'
import AboutCallout from '../components/about/AboutCallout'
import AboutArtist from '../components/about/AboutArtist'

function About() {
  return (
    <main className="pt-28">
      <AboutHero />

      <AboutSection
        image="/products/producto13.png"
        imageSide="left"
        text={
          "¿Qué pasa cuando dejas de ver el mundo con los mismos ojos? ¿Y si te dijera que hay un camino para conectar con tu yo interior, un lugar donde la realidad cambia y el universo te habla? Entheo es más que una marca de joyería; es una experiencia, una invitación a romper los límites de tu mente y explorar lo desconocido."
        }
      />

      <AboutSection
        image="/hero/hero-3.png"
        imageSide="right"
        text={
          "Inspirado en los enteógenos y en el concepto griego de entheos (lo divino dentro), Entheo busca guiarte en un viaje profundo y personal donde cada pieza refleja las etapas de un viaje psicodélico. No se trata solo de lo que ves, sino de quién eres, de en quién puedes convertirte cuando te atreves a cambiar tu perspectiva. Cada colección es una historia que te acompaña durante el proceso, desde el ascenso hasta el pico, el descenso, el aterrizaje y el post-viaje — un ciclo que te transforma y desafía todo lo que alguna vez creíste \"real.\""
        }
      />

      <AboutCallout text={"¿Estás listo para descubrir lo que hay más allá?"} />

      <AboutSection
        image="/hero/hero-5.png"
        imageSide="left"
        text={
          "Entheo es un portal. Una puerta que solo tú puedes abrir. Cada pieza es una llave, una manifestación del viaje interior que todos llevamos dentro. La primera colección, Origins, es solo el comienzo: una introducción a todo lo que puedes llegar a ser, al despertar de tu conciencia. En futuras colecciones, iremos más profundo, explorando cada etapa del viaje psicodélico mediante piezas únicas y hechas a mano, elaboradas con piedras naturales y materiales de primera, en edición limitada."
        }
      />

      <AboutSection
        image="/products/producto15.png"
        imageSide="right"
        text={
          "Más que joyería, cada pieza de Entheo es una obra de arte, llena de simbolismo — una invitación a ir más allá de lo conocido y abrirte al misterio del universo. Porque Entheo no solo te invita a una comunidad: te invita a un viaje personal, uno que te dejará con una perspectiva completamente nueva."
        }
      />

      <AboutCallout text={"¿Te atreves a abrir tu mente?"} />

      <AboutArtist/>
    </main>
  )
}

export default About

