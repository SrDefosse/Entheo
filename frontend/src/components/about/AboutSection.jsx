function AboutSection({ text, image, imageSide = 'right' }) {
  const isLeft = imageSide === 'left'
  return (
    <section className={`mx-auto max-w-6xl px-6 py-12`}>
      <div className={`grid grid-cols-1 md:grid-cols-12 gap-8 items-center`}>
        <div className={`md:col-span-6 ${isLeft ? '' : 'md:order-2'}`}>
          <img src={image} alt="Entheo" className="w-full h-[320px] md:h-[420px] object-cover rounded-2xl " />
        </div>
        <div className={`md:col-span-6 ${isLeft ? '' : 'md:order-1'}`}>
          <p className="text-stone-700 leading-relaxed text-lg">{text}</p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection


