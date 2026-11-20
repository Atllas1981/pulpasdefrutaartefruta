export interface FaqItem {
  question: string;
  intro: string;
  bullets: string[];
}

export const faqs: FaqItem[] = [
  {
    question: "¿Cuál es el pedido mínimo para despachos como proveedores de pulpa de fruta?",
    intro: "Flexibilidad total de compra para negocios gastronómicos e institucionales:",
    bullets: [
      "<strong class='text-[#F4F3ED] font-semibold'>Venta física sin mínimo ($0 flete):</strong> Puedes llevar desde <strong>1 sola pulpa</strong> (250g, 500g o 1.000g) en nuestro punto comercial en <strong>Centroabastos (Bodega 9, Local 111, Bucaramanga)</strong> sin costo de transporte.",
      "<strong class='text-[#F4F3ED] font-semibold'>Despachos en el Área Metropolitana:</strong> Entregas programadas a domicilio para restaurantes, cafeterías y barras en <strong>Bucaramanga, Floridablanca, Girón y Piedecuesta</strong> coordinadas por <strong>WhatsApp o teléfono (+57 317 7963888)</strong>.",
      "<strong class='text-[#F4F3ED] font-semibold'>Suministro institucional por volumen:</strong> Escalas de precios preferenciales y contratos de proveeduría continua para hoteles, restaurantes, casinos y distribuidores desde nuestra planta."
    ]
  },
  {
    question: "¿Qué cobertura de envíos tienen como distribuidora de pulpa de fruta y cómo se gestiona el transporte?",
    intro: "Cobertura metropolitana e interdepartamental con despacho protegido en cavas térmicas o retiro presencial:",
    bullets: [
      "<strong class='text-[#F4F3ED] font-semibold'>Retiro en punto físico ($0 flete):</strong> Recoge directamente en nuestro punto de venta en <strong>Centroabastos (Bodega 9, Local 111)</strong> sin costo de transporte.",
      "<strong class='text-[#F4F3ED] font-semibold'>Área Metropolitana de Bucaramanga:</strong> Entregas locales programadas a domicilio en <strong>Bucaramanga, Floridablanca, Girón y Piedecuesta</strong>.",
      "<strong class='text-[#F4F3ED] font-semibold'>Envíos interdepartamentales:</strong> Despachos hacia <strong>Norte de Santander, Cesar, Magdalena, Bolívar y Atlántico</strong> bajo modalidad de flete al cobro / contraentrega.",
      "<strong class='text-[#F4F3ED] font-semibold'>Embalaje en cavas térmicas:</strong> Los pedidos se despachan protegidos en <strong>cavas térmicas herméticas</strong> (o caja de cartón según el trayecto) para preservar el producto hasta su destino."
    ]
  },
  {
    question: "¿Dónde están ubicadas sus sedes en Centroabastos Bucaramanga y cuál es el horario de atención?",
    intro: "Operamos dos sedes operativas en el complejo comercial de Centroabastos (Km 4 Vía a Girón, Bucaramanga):",
    bullets: [
      "<strong class='text-[#F4F3ED] font-semibold'>Punto de Venta y Despachos:</strong> <strong>Bodega 9, Local 111</strong>. Diseñado para atención presencial rápida, retiro exprés de pedidos sin monto mínimo ($0 flete) y degustaciones técnicas para chefs o baristas.",
      "<strong class='text-[#F4F3ED] font-semibold'>Planta de Producción:</strong> <strong>Bodega 13, Local 3B</strong>. Instalación industrial con empacadora automática (30 pulpas/minuto), despulpe tecnificado y cámaras de ultracongelación al núcleo a -18°C para grandes volúmenes.",
      "<strong class='text-[#F4F3ED] font-semibold'>Horario comercial madrugador:</strong> <strong>Lunes a viernes desde las 3:00 AM hasta las 4:00 PM</strong>, adaptado a la jornada de abastecimiento de la hostelería."
    ]
  },
  {
    question: "¿Cuáles son las opciones de empaque y sus costos para proteger el producto durante el traslado?",
    intro: "Despachamos en cavas térmicas herméticas y empaques adaptados a la distancia y clima de cada destino:",
    bullets: [
      "<strong class='text-[#F4F3ED] font-semibold'>Caja de cartón ($0 COP):</strong> Sin costo adicional. Recomendada para despachos locales inmediatos en el Área Metropolitana o compras en madrugada con refrigeración rápida.",
      "<strong class='text-[#F4F3ED] font-semibold'>Cava de icopor 8/10 ($50.000 COP):</strong> Opción económica y reutilizable con aislamiento térmico de hasta <strong>24 horas</strong>, ideal para media distancia.",
      "<strong class='text-[#F4F3ED] font-semibold'>Cava de icopor nueva 10/10 ($90.000 COP):</strong> Estructura virgen de grado industrial con sellado hermético superior para rutas hacia la <strong>Costa Caribe (Cesar, Magdalena, Bolívar, Atlántico) y zonas de clima cálido</strong>."
    ]
  },
  {
    question: "¿Cómo funciona la ultracongelación a -18°C y por qué elimina las mermas en restaurantes?",
    intro: "Choque térmico continuo que congela la pulpa pura hasta el núcleo celular:",
    bullets: [
      "<strong class='text-[#F4F3ED] font-semibold'>Conservación al núcleo a -18°C:</strong> Previene la formación de macrocristales de hielo, reteniendo aroma fresco, color vivo, acidez natural (pH) y nutrientes.",
      "<strong class='text-[#F4F3ED] font-semibold'>100% fruta pura sin agua ni conservantes:</strong> Sin dilución en agua, sin conservantes químicos, colorantes ni jarabes añadidos.",
      "<strong class='text-[#F4F3ED] font-semibold'>Rendimiento 100% y 0% de merma:</strong> Eliminas hasta el 40% de pérdida por cáscaras o semillas de la fruta fresca, reduciendo tiempos de pelado y estandarizando costos por porción."
    ]
  },
  {
    question: "¿En qué presentaciones distribuyen pulpa de fruta institucional para el canal HORECA?",
    intro: "Formatos herméticos sellados adaptados a la operación diaria de tu barra o cocina:",
    bullets: [
      "<strong class='text-[#F4F3ED] font-semibold'>Bolsas de 250g y 500g:</strong> Porciones controladas ideales para coctelería de autor, batidos frappé, pastelería fina y cafeterías.",
      "<strong class='text-[#F4F3ED] font-semibold'>Bolsas de 1.000g (1 kg):</strong> Presentación de alto rendimiento para licuadoras industriales, buffets y cocinas de producción masiva.",
      "<strong class='text-[#F4F3ED] font-semibold'>Suministro institucional por volumen:</strong> Capacidad para despachar pedidos por toneladas con empaque continuo desde nuestra Planta (Bodega 13 Local 3B)."
    ]
  },
  {
    question: "¿Cómo consultar el precio de la pulpa de fruta congelada al por mayor y cómo influye la temporada de cosecha?",
    intro: "Precios mayoristas transparentes vinculados a la cosecha directa del campo colombiano:",
    bullets: [
      "<strong class='text-[#F4F3ED] font-semibold'>Cálculo de precios por temporada de cosecha:</strong> Los costos se optimizan según los ciclos agrícolas de Colombia, asegurando el mejor costo por kilo para compras al por mayor.",
      "<strong class='text-[#F4F3ED] font-semibold'>Cotización institucional en tiempo real:</strong> Comunícate vía <strong>WhatsApp o teléfono (+57 317 7963888)</strong> para enviarte la lista oficial de precios institucionales del día y tablas de rendimiento por porción.",
      "<strong class='text-[#F4F3ED] font-semibold'>Descuentos por escala:</strong> Tarifas comerciales especiales para compras continuas en restaurantes, hoteles y barras."
    ]
  },
  {
    question: "¿Ofrecen muestras a chefs y jefes de compras para pruebas de rendimiento en restaurantes y barras?",
    intro: "Pruebas técnicas operativas sin costo ni compromiso para profesionales gastronómicos:",
    bullets: [
      "<strong class='text-[#F4F3ED] font-semibold'>Evaluación técnica:</strong> Diseñada para que chefs, baristas y jefes de compras verifiquen grados Brix, acidez (pH), cero mermas y consistencia en sus recetas.",
      "<strong class='text-[#F4F3ED] font-semibold'>Solicitud rápida:</strong> Escríbenos por <strong>WhatsApp o llámanos al +57 317 7963888</strong> indicando qué sabores deseas probar en tu establecimiento.",
      "<strong class='text-[#F4F3ED] font-semibold'>Catación presencial:</strong> Visítanos en nuestro punto comercial en <strong>Centroabastos (Bodega 9, Local 111)</strong> de lunes a viernes de 3:00 AM a 4:00 PM."
    ]
  },
  {
    question: "¿Cuál es la vida útil de las pulpas de fruta para restaurantes y cómo garantizar la cadena de frío a -18°C?",
    intro: "Guía técnica de almacenamiento y cadena de frío para cocinas y barras profesionales:",
    bullets: [
      "<strong class='text-[#F4F3ED] font-semibold'>Hasta 12 meses de vida útil:</strong> Manteniendo las pulpas ininterrumpidamente a <strong>-18°C en congelador</strong>.",
      "<strong class='text-[#F4F3ED] font-semibold'>Sin preservantes añadidos:</strong> La conservación se logra exclusivamente mediante choque térmico por ultracongelación.",
      "<strong class='text-[#F4F3ED] font-semibold'>Consumo una vez descongelada:</strong> Conservar en refrigeración (2°C a 6°C) y consumir dentro de las siguientes <strong>48 horas</strong>."
    ]
  }
];
