function AboutCallout({ text }) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-10">
      <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm text-center">
        <p className="text-xl md:text-2xl font-semibold text-stone-900">{text}</p>
      </div>
    </section>
  )
}

export default AboutCallout


