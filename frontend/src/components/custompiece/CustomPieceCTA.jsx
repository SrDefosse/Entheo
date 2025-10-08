import { useState } from 'react'

function CustomPieceCTA() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    vision: '',
    presupuesto: '',
    referencia: null,
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target
    if (files && files.length > 0) {
      setForm((prev) => ({ ...prev, [name]: files[0] }))
    } else {
      setForm((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('nombre', form.nombre)
    formData.append('email', form.email)
    formData.append('vision', form.vision)
    formData.append('presupuesto', form.presupuesto)
    if (form.referencia) formData.append('referencia', form.referencia)

    try {
      const res = await fetch('/api/custom-piece', {
        method: 'POST',
        body: formData,
      })
      if (!res.ok) throw new Error('Error enviando formulario')
      // eslint-disable-next-line no-alert
      alert('Gracias, tu solicitud fue enviada. Te contactaremos pronto.')
      setForm({ nombre: '', email: '', vision: '', presupuesto: '', referencia: null })
    } catch (err) {
      // eslint-disable-next-line no-alert
      alert('No pudimos enviar tu solicitud. Intenta más tarde.')
    }
  }

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="flex justify-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-stone-900 pb-10 drop-shadow-lg">
          Personaliza Tu Pieza
        </h2>
      </div>
      <div className="rounded-3xl bg-white/70 backdrop-blur-md shadow-xl ring-1 ring-black/5 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-gradient-to-b from-stone-900 to-stone-800 text-white p-10 md:p-12">
            <div className="space-y-5">
              <p className="text-lg leading-relaxed">
                Una pieza personalizada es la oportunidad de transformar tu historia, tu símbolo o tu visión en una joya única que solo puede pertenecer a ti.
              </p>
              <p className="text-lg leading-relaxed">
                En Entheo creemos que cada persona guarda un universo propio: recuerdos, pasajes, símbolos que acompañan, heridas que sanan y luces que inspiran. 
                Diseñar una pieza a tu medida es darle forma tangible a esa parte de ti
              </p>
              <p className="text-lg leading-relaxed">
                Escuchamos tu idea, tu intención, tu energía, y la traducimos en materiales, formas y texturas que vibren contigo.
              </p>
              <p className="text-lg leading-relaxed">No es solo joyería, es tu verdad hecha arte.</p>
              <div className="pt-2">
                <h3 className="text-2xl md:text-3xl font-bold">
                  Cuéntanos tu visión y comencemos a crear tu pieza única.
                </h3>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <label className="block text-sm font-medium text-stone-700">Nombre</label>
                  <input
                    type="text"
                    name="nombre"
                    required
                    value={form.nombre}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-800"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-800"
                    placeholder="tucorreo@ejemplo.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700">Tu visión</label>
                <textarea
                  name="vision"
                  required
                  rows={5}
                  value={form.vision}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-800"
                  placeholder="Cuéntanos la idea, símbolos, intención, materiales o sensaciones que quieres habitar en la pieza"
                />
              </div>

              <div className="grid grid-cols-1 gap-5">
                <div>
                  <label className="block text-sm font-medium text-stone-700">Presupuesto aproximado (opcional)</label>
                  <select
                    name="presupuesto"
                    value={form.presupuesto}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-stone-300 bg-white px-4 py-3 text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-800"
                  >
                    <option value="">Selecciona un rango</option>
                    <option value="15000-25000">$15,000 - $25,000</option>
                    <option value="25000-40000">$25,000 - $40,000</option>
                    <option value="40000-60000">$40,000 - $60,000</option>
                    <option value=">60000">Más de $60,000</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700">Referencia (opcional)</label>
                  <input
                    type="file"
                    name="referencia"
                    accept="image/*,.pdf"
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-stone-300 bg-white file:mr-4 file:rounded-md file:border-0 file:bg-stone-900 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-stone-700"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-stone-900 px-6 py-3 text-white font-semibold shadow-sm transition hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-800 cursor-pointer"
                >
                  Enviar solicitud
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CustomPieceCTA


