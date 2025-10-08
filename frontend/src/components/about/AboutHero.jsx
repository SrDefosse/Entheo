function AboutHero() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-16 text-center">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-stone-900 drop-shadow-lg">
        Sobre Entheo
      </h1>
      <p className="mt-4 text-stone-600 max-w-2xl mx-auto">
        The Journey of Your Mind
      </p>
      <div className="mt-10 hidden sm:block">
        <img src="/about-images/about-hero.png" alt="Entheo" className="w-full rounded-2xl " />
      </div>
    </section>
  )
}

export default AboutHero


