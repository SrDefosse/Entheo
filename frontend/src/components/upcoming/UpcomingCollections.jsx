import React from 'react';

const collections = [
  {
    id: 1,
    title: 'Sustancias – Las llaves prohibidas',
    subtitle: 'Ayahuasca. Hongos. DMT. Peyote. Bufo.',
    content: 'La primera colección es el inicio del sacrilegio: ingerir lo sagrado y permitir que lo humano se rompa.\n\nCada pieza es un talismán de esas llaves que destrozan la mente para abrir universos.\n\nNo es joyería. Es un recordatorio de que un solo respiro puede borrarlo todo.',
  },
  {
    id: 2,
    title: 'Unwrap Your Mind – El desgarro',
    subtitle: 'Las puertas se quiebran.',
    content: 'De pronto, lo real ya no es real. Lo familiar se derrumba y lo imposible se vuelve inevitable.\n\nLas piezas nacen de ese desgarro: fracturas, luces líquidas, símbolos que sangran belleza.\n\nNo abres tu mente: la desgarras hasta que grita.',
  },
  {
    id: 3,
    title: 'Peak – Disolución del Ego',
    subtitle: 'Aquí mueres.',
    content: 'El "yo" se hace polvo. No hay identidad, no hay nombre, no hay cuerpo.\n\nLas joyas de esta colección son cenizas de ego fundidas con destellos de infinito.\n\nMorir para entender que nunca exististe.',
  },
  {
    id: 4,
    title: 'Peak – Laberinto',
    subtitle: 'El viaje no es recto. Es espiral.',
    content: 'Sombras, espejos, pasajes imposibles. Cada mente crea su propio infierno y su propio paraíso.\n\nEsta colección encarna la geometría del extravío. Piezas que giran, se cruzan, se pierden.\n\nEl centro existe, pero tendrás que sangrar para llegar.',
  },
  {
    id: 5,
    title: 'Peak – Cosmos',
    subtitle: 'De pronto eres galaxia.',
    content: 'Estrellas brotan en tu piel, el tiempo estalla. No miras el universo: lo eres.\n\nLas piezas son fragmentos de explosiones cósmicas, talismanes de expansión.\n\nEl clímax absoluto: perderte en el todo para recordar que eres todo.',
  },
  {
    id: 6,
    title: 'Descenso – El golpe de volver',
    subtitle: 'Lo eterno exige regreso.',
    content: 'Caes. Pesas. Vuelves al cuerpo como si fuera una prisión recién estrenada.\n\nEsta colección es transición: carne mezclada con lo etéreo, tierra con chispa de cielo.\n\nVolver… con la certeza de que el regreso ya no existe.',
  },
  {
    id: 7,
    title: 'Resaca – La sombra después de la luz',
    subtitle: 'El precio del viaje.',
    content: 'Ansiedad. Confusión. El vacío de haber visto demasiado.\n\nLas piezas son fragmentos rotos, espejos incompletos. Un rompecabezas que nadie termina.\n\nAquí entiendes que la claridad no siempre llega al amanecer.',
  },
  {
    id: 8,
    title: 'Post Trip – El rompecabezas se arma',
    subtitle: 'Después del caos, el orden oculto.',
    content: 'La mente se aquieta, las piezas encajan, lo aprendido respira.\n\nEsta colección son pulsos suaves, geometrías que vibran en ascenso.\n\nEl viaje no terminó: apenas comienza a revelarse.',
  },
  {
    id: 9,
    title: 'Renacimiento – La nueva carne del alma',
    subtitle: 'Muerto, pero vivo.',
    content: 'De la ceniza surge otra versión de ti, más fresca, más feroz, más real.\n\nLas joyas aquí son semillas abiertas: símbolos de la vida que renace tras la quema.\n\nEl verdadero nacimiento nunca es el primero.',
  },
  {
    id: 10,
    title: 'Conexión Infinita – Todo late al mismo pulso',
    subtitle: 'No hay separación.',
    content: 'El aire que respiras, la mano que toca, la piedra que vibra: todo es uno.\n\nLas piezas se enlazan en redes infinitas, geometrías que no terminan.\n\nNo llevas joyas: llevas el mapa de la unidad tatuado en metal.',
  },
  {
    id: 11,
    title: 'Luz Interior – El eterno retorno',
    subtitle: 'La última revelación: la joya eres tú.',
    content: 'La paz ya no se busca, se habita.\n\nLas piezas son espejos de claridad, cristales que no brillan por sí mismos, sino porque devuelven tu propia luz.\n\nEl viaje no acaba. Ahora se vive.',
  },
];

const CollectionCard = ({ collection }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-200">
      <div className="flex items-start gap-4">
        <span className="text-5xl font-bold text-gray-900 drop-shadow-md">
          {collection.id}
        </span>
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            {collection.title}
          </h3>
          <p className="text-gray-700 text-lg md:text-xl font-medium mb-4 italic">
            {collection.subtitle}
          </p>
          <div className="text-gray-800 leading-relaxed space-y-3">
            {collection.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-base md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const UpcomingCollections = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 pt-16">
      {/* Header */}
      <div className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        {/* Efecto de fondo */}
        
        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 drop-shadow-lg">
            Las Colecciones de Entheo
          </h1>
          
          <div className="space-y-2 text-xl md:text-2xl text-gray-700">
            <p className="font-light">No son colecciones.</p>
            <p className="font-medium text-gray-900">Son capítulos de un rito.</p>
            <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              Una odisea que cada año abre otra puerta, hasta deshacerte y rehacerte.
            </p>
          </div>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-8">
          {collections.map((collection) => (
            <CollectionCard
              key={collection.id}
              collection={collection}
            />
          ))}
        </div>
      </div>

      {/* Footer decorativo */}
      <div className="py-16 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mb-8"></div>
          <p className="text-gray-600 text-lg italic drop-shadow">
            El viaje continúa...
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingCollections;

