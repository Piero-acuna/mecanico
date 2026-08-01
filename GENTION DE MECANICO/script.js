/* =========================================================
   TorqueFlow — Dashboard
   JavaScript Vanilla orientado a datos JSON y futura API/BD
   ========================================================= */

"use strict";

/**
 * Fuente simulada de datos.
 * En producción, este objeto puede reemplazarse por:
 * const appData = await api.getDashboard();
 */
const appData = {
  workshop: {
    name: "TorqueFlow Taller",
    currency: "PEN",
    dailyGoal: 4200,
    billedToday: 3040,
    efficiency: 86
  },
  orders: [
    {
      id: "OT-1048",
      plate: "M4R-921",
      vehicle: "Toyota Hilux 2021",
      client: "Carlos Mendoza",
      phone: "987 221 410",
      status: "refaccionaria",
      mechanic: "José Ramírez",
      service: "Rectificado de culata",
      enteredAt: "2026-07-31T08:10:00-05:00",
      promisedAt: "2026-07-31T15:00:00-05:00",
      budget: 1450,
      currentCost: 1320,
      priority: 1
    },
    {
      id: "OT-1047",
      plate: "T8D-447",
      vehicle: "Hyundai Accent 2018",
      client: "María Torres",
      phone: "965 348 201",
      status: "esperando",
      mechanic: "Luis Pérez",
      service: "Cambio de kit de embrague",
      enteredAt: "2026-07-31T07:45:00-05:00",
      promisedAt: "2026-07-31T14:30:00-05:00",
      budget: 980,
      currentCost: 710,
      priority: 2
    },
    {
      id: "OT-1046",
      plate: "B6P-038",
      vehicle: "Kia Sportage 2020",
      client: "Andrea Salazar",
      phone: "944 522 716",
      status: "revision",
      mechanic: "Miguel Rojas",
      service: "Diagnóstico de suspensión",
      enteredAt: "2026-07-31T09:05:00-05:00",
      promisedAt: "2026-07-31T17:30:00-05:00",
      budget: 520,
      currentCost: 180,
      priority: 3
    },
    {
      id: "OT-1045",
      plate: "C2X-710",
      vehicle: "Nissan Versa 2019",
      client: "Pablo Ríos",
      phone: "975 631 089",
      status: "listo",
      mechanic: "José Ramírez",
      service: "Mantenimiento preventivo",
      enteredAt: "2026-07-30T14:20:00-05:00",
      promisedAt: "2026-07-31T11:00:00-05:00",
      budget: 460,
      currentCost: 308,
      priority: 4
    },
    {
      id: "OT-1044",
      plate: "A7K-526",
      vehicle: "Chevrolet Sail 2017",
      client: "Rosa Delgado",
      phone: "986 777 120",
      status: "revision",
      mechanic: "Luis Pérez",
      service: "Falla eléctrica intermitente",
      enteredAt: "2026-07-31T10:15:00-05:00",
      promisedAt: "2026-08-01T10:00:00-05:00",
      budget: 650,
      currentCost: 190,
      priority: 5
    },
    {
      id: "OT-1043",
      plate: "Q9M-183",
      vehicle: "Suzuki Swift 2022",
      client: "Daniel Campos",
      phone: "958 220 345",
      status: "esperando",
      mechanic: "Miguel Rojas",
      service: "Cambio de pastillas y discos",
      enteredAt: "2026-07-30T16:40:00-05:00",
      promisedAt: "2026-07-31T13:30:00-05:00",
      budget: 740,
      currentCost: 460,
      priority: 2
    },
    {
      id: "OT-1042",
      plate: "F1A-309",
      vehicle: "Volkswagen Tiguan 2020",
      client: "Sofía Cabrera",
      phone: "912 745 991",
      status: "listo",
      mechanic: "José Ramírez",
      service: "Servicio de frenos",
      enteredAt: "2026-07-30T09:20:00-05:00",
      promisedAt: "2026-07-31T09:30:00-05:00",
      budget: 860,
      currentCost: 590,
      priority: 4
    }
  ],
  financials: {
    costsToday: 2870,
    costsMonth: 38460,
    projectedProfit: 18640,
    incomeMonth: 57100,
    incomeSeries: [4200, 5150, 4620, 6080, 5660, 7240, 6810],
    costSeries: [2610, 3020, 2870, 3640, 3180, 3910, 3560],
    labels: ["Vie 25", "Sáb 26", "Lun 28", "Mar 29", "Mié 30", "Jue 31", "Hoy"]
  },
  alerts: [
    {
      id: "AL-01",
      level: "critical",
      title: "Presupuesto al 91%",
      detail: "OT-1048 · Toyota Hilux",
      type: "budget"
    },
    {
      id: "AL-02",
      level: "warning",
      title: "Retraso de 1 h 20 min en torno",
      detail: "OT-1048 · Culata pendiente",
      type: "external"
    },
    {
      id: "AL-03",
      level: "warning",
      title: "Stock bajo: pastillas delanteras",
      detail: "Quedan 2 juegos disponibles",
      type: "stock"
    },
    {
      id: "AL-04",
      level: "info",
      title: "Orden sin aprobación del cliente",
      detail: "OT-1046 · S/ 520 pendientes",
      type: "approval"
    }
  ],
  history: [
    {
      id: "OT-1039", plate: "M2K-641", vehicle: "Toyota Corolla 2019", client: "Julio Fernández", phone: "978 451 220",
      mechanic: "José Ramírez", service: "Mantenimiento 60 000 km", status: "entregado",
      enteredAt: "2026-07-29T08:15:00-05:00", completedAt: "2026-07-29T16:35:00-05:00", deliveredAt: "2026-07-29T17:10:00-05:00",
      diagnosis: "Mantenimiento preventivo, desgaste de pastillas delanteras y filtro de aire saturado.",
      laborCost: 150, laborCharge: 280, otherCosts: 18, discount: 20, billed: 765, paymentMethod: "Yape", paid: true, warrantyDays: 30,
      parts: [
        { name: "Aceite 5W-30", qty: 4, unitCost: 28, unitPrice: 42 },
        { name: "Filtro de aceite", qty: 1, unitCost: 18, unitPrice: 32 },
        { name: "Filtro de aire", qty: 1, unitCost: 31, unitPrice: 55 }
      ],
      externals: [], delayCause: "Sin demora", notes: "Cliente autorizó cambio preventivo de pastillas para próxima visita.",
      timeline: [
        { label: "Ingreso y recepción", date: "2026-07-29T08:15:00-05:00" },
        { label: "Diagnóstico aprobado", date: "2026-07-29T09:05:00-05:00" },
        { label: "Servicio finalizado", date: "2026-07-29T16:35:00-05:00" },
        { label: "Vehículo entregado", date: "2026-07-29T17:10:00-05:00" }
      ]
    },
    {
      id: "OT-1038", plate: "B8L-224", vehicle: "Hyundai Tucson 2020", client: "Elena Vásquez", phone: "987 660 314",
      mechanic: "Luis Pérez", service: "Reparación de sistema de frenos", status: "entregado",
      enteredAt: "2026-07-28T09:20:00-05:00", completedAt: "2026-07-29T12:40:00-05:00", deliveredAt: "2026-07-29T15:00:00-05:00",
      diagnosis: "Vibración al frenar y espesor mínimo en discos delanteros.",
      laborCost: 190, laborCharge: 340, otherCosts: 25, discount: 0, billed: 1390, paymentMethod: "Tarjeta", paid: true, warrantyDays: 60,
      parts: [
        { name: "Discos de freno delanteros", qty: 2, unitCost: 235, unitPrice: 335 },
        { name: "Pastillas delanteras", qty: 1, unitCost: 142, unitPrice: 230 },
        { name: "Líquido de frenos DOT 4", qty: 1, unitCost: 25, unitPrice: 48 }
      ],
      externals: [{ provider: "Torno El Norte", service: "Rectificado de discos posteriores", cost: 70, charged: 110, start: "2026-07-28T15:30:00-05:00", end: "2026-07-29T09:10:00-05:00" }],
      delayCause: "Torno externo", notes: "Se realizó prueba de ruta y asentamiento inicial.",
      timeline: [
        { label: "Ingreso al taller", date: "2026-07-28T09:20:00-05:00" },
        { label: "Salida a torno", date: "2026-07-28T15:30:00-05:00" },
        { label: "Retorno de torno", date: "2026-07-29T09:10:00-05:00" },
        { label: "Vehículo entregado", date: "2026-07-29T15:00:00-05:00" }
      ]
    },
    {
      id: "OT-1037", plate: "A5R-908", vehicle: "Kia Rio 2018", client: "Marco Linares", phone: "966 704 889",
      mechanic: "Miguel Rojas", service: "Cambio de kit de embrague", status: "entregado",
      enteredAt: "2026-07-26T07:50:00-05:00", completedAt: "2026-07-27T18:20:00-05:00", deliveredAt: "2026-07-28T09:15:00-05:00",
      diagnosis: "Patinamiento, pedal duro y rodamiento de empuje con ruido.",
      laborCost: 340, laborCharge: 560, otherCosts: 35, discount: 30, billed: 1580, paymentMethod: "Transferencia", paid: true, warrantyDays: 90,
      parts: [
        { name: "Kit de embrague", qty: 1, unitCost: 610, unitPrice: 850 },
        { name: "Retén de cigüeñal", qty: 1, unitCost: 38, unitPrice: 68 },
        { name: "Aceite de caja 75W-90", qty: 2, unitCost: 32, unitPrice: 54 }
      ],
      externals: [], delayCause: "Espera de repuesto", notes: "Repuesto llegó al día siguiente. Prueba final conforme.",
      timeline: [
        { label: "Ingreso", date: "2026-07-26T07:50:00-05:00" },
        { label: "Presupuesto aprobado", date: "2026-07-26T09:30:00-05:00" },
        { label: "Repuesto recibido", date: "2026-07-27T11:25:00-05:00" },
        { label: "Entrega", date: "2026-07-28T09:15:00-05:00" }
      ]
    },
    {
      id: "OT-1036", plate: "T3S-481", vehicle: "Nissan X-Trail 2017", client: "Alicia Romero", phone: "955 348 706",
      mechanic: "José Ramírez", service: "Reparación de culata", status: "garantia",
      enteredAt: "2026-07-21T08:40:00-05:00", completedAt: "2026-07-25T17:50:00-05:00", deliveredAt: "2026-07-26T10:20:00-05:00",
      diagnosis: "Sobrecalentamiento, pérdida de compresión y mezcla de refrigerante con aceite.",
      laborCost: 720, laborCharge: 1200, otherCosts: 85, discount: 100, billed: 3180, paymentMethod: "Tarjeta", paid: true, warrantyDays: 180,
      parts: [
        { name: "Juego de empaques de motor", qty: 1, unitCost: 380, unitPrice: 590 },
        { name: "Pernos de culata", qty: 1, unitCost: 210, unitPrice: 330 },
        { name: "Aceite 10W-30", qty: 5, unitCost: 26, unitPrice: 40 },
        { name: "Refrigerante 50/50", qty: 2, unitCost: 31, unitPrice: 52 }
      ],
      externals: [{ provider: "Rectificaciones Lambayeque", service: "Cepillado y prueba hidráulica de culata", cost: 430, charged: 590, start: "2026-07-21T16:10:00-05:00", end: "2026-07-24T11:40:00-05:00" }],
      delayCause: "Rectificadora", notes: "Orden bajo seguimiento de garantía por 180 días.",
      timeline: [
        { label: "Ingreso por sobrecalentamiento", date: "2026-07-21T08:40:00-05:00" },
        { label: "Culata enviada a rectificadora", date: "2026-07-21T16:10:00-05:00" },
        { label: "Retorno de rectificadora", date: "2026-07-24T11:40:00-05:00" },
        { label: "Entrega con garantía", date: "2026-07-26T10:20:00-05:00" }
      ]
    },
    {
      id: "OT-1035", plate: "C7P-115", vehicle: "Chevrolet Spark GT 2021", client: "Nancy Ruiz", phone: "941 025 681",
      mechanic: "Luis Pérez", service: "Diagnóstico y reparación eléctrica", status: "entregado",
      enteredAt: "2026-07-23T10:05:00-05:00", completedAt: "2026-07-23T16:50:00-05:00", deliveredAt: "2026-07-23T17:30:00-05:00",
      diagnosis: "Descarga de batería por consumo parasitario en circuito de radio.",
      laborCost: 120, laborCharge: 260, otherCosts: 8, discount: 0, billed: 420, paymentMethod: "Efectivo", paid: true, warrantyDays: 30,
      parts: [{ name: "Relé automotriz 30A", qty: 1, unitCost: 14, unitPrice: 32 }],
      externals: [], delayCause: "Sin demora", notes: "Se corrigió instalación no original del equipo multimedia.",
      timeline: [
        { label: "Ingreso", date: "2026-07-23T10:05:00-05:00" },
        { label: "Falla localizada", date: "2026-07-23T13:15:00-05:00" },
        { label: "Entrega", date: "2026-07-23T17:30:00-05:00" }
      ]
    },
    {
      id: "OT-1034", plate: "V9D-305", vehicle: "Volkswagen Amarok 2019", client: "Renato Silva", phone: "933 519 274",
      mechanic: "Miguel Rojas", service: "Suspensión delantera completa", status: "entregado",
      enteredAt: "2026-07-20T08:00:00-05:00", completedAt: "2026-07-21T15:25:00-05:00", deliveredAt: "2026-07-21T18:00:00-05:00",
      diagnosis: "Golpeteo en baches, amortiguadores con fuga y rótulas con juego.",
      laborCost: 290, laborCharge: 520, otherCosts: 30, discount: 50, billed: 2410, paymentMethod: "Transferencia", paid: true, warrantyDays: 90,
      parts: [
        { name: "Amortiguadores delanteros", qty: 2, unitCost: 410, unitPrice: 590 },
        { name: "Rótulas inferiores", qty: 2, unitCost: 125, unitPrice: 195 },
        { name: "Bieletas de barra", qty: 2, unitCost: 68, unitPrice: 105 }
      ],
      externals: [{ provider: "Alineamiento Pro", service: "Alineamiento 3D", cost: 65, charged: 100, start: "2026-07-21T14:00:00-05:00", end: "2026-07-21T15:05:00-05:00" }],
      delayCause: "Espera de repuesto", notes: "Se entregó reporte de alineamiento.",
      timeline: [
        { label: "Ingreso", date: "2026-07-20T08:00:00-05:00" },
        { label: "Repuestos recibidos", date: "2026-07-21T09:30:00-05:00" },
        { label: "Alineamiento final", date: "2026-07-21T14:00:00-05:00" },
        { label: "Entrega", date: "2026-07-21T18:00:00-05:00" }
      ]
    },
    {
      id: "OT-1033", plate: "H4G-702", vehicle: "Suzuki Swift 2020", client: "Claudia Paredes", phone: "944 306 722",
      mechanic: "José Ramírez", service: "Afinamiento y limpieza de inyectores", status: "entregado",
      enteredAt: "2026-07-18T09:10:00-05:00", completedAt: "2026-07-18T14:55:00-05:00", deliveredAt: "2026-07-18T16:10:00-05:00",
      diagnosis: "Ralentí inestable y consumo elevado.",
      laborCost: 130, laborCharge: 270, otherCosts: 12, discount: 15, billed: 685, paymentMethod: "Yape", paid: true, warrantyDays: 30,
      parts: [
        { name: "Bujías iridium", qty: 4, unitCost: 34, unitPrice: 52 },
        { name: "Filtro de combustible", qty: 1, unitCost: 42, unitPrice: 68 }
      ],
      externals: [{ provider: "Inyección Norte", service: "Limpieza ultrasónica de inyectores", cost: 85, charged: 125, start: "2026-07-18T10:30:00-05:00", end: "2026-07-18T12:50:00-05:00" }],
      delayCause: "Servicio externo", notes: "Parámetros de corrección de combustible normalizados.",
      timeline: [
        { label: "Ingreso", date: "2026-07-18T09:10:00-05:00" },
        { label: "Inyectores enviados", date: "2026-07-18T10:30:00-05:00" },
        { label: "Entrega", date: "2026-07-18T16:10:00-05:00" }
      ]
    },
    {
      id: "OT-1032", plate: "P6A-940", vehicle: "Mazda CX-5 2022", client: "Sergio Peña", phone: "972 640 118",
      mechanic: "Luis Pérez", service: "Mantenimiento preventivo", status: "listo",
      enteredAt: "2026-07-16T08:35:00-05:00", completedAt: "2026-07-16T13:20:00-05:00", deliveredAt: null,
      diagnosis: "Servicio de 30 000 km y revisión general.",
      laborCost: 110, laborCharge: 240, otherCosts: 10, discount: 0, billed: 670, paymentMethod: "Pendiente", paid: false, warrantyDays: 30,
      parts: [
        { name: "Aceite sintético 0W-20", qty: 5, unitCost: 32, unitPrice: 48 },
        { name: "Filtro de aceite", qty: 1, unitCost: 24, unitPrice: 42 },
        { name: "Filtro de cabina", qty: 1, unitCost: 35, unitPrice: 62 }
      ],
      externals: [], delayCause: "Cliente no recoge", notes: "Vehículo listo. Cliente solicitó recogerlo el fin de semana.",
      timeline: [
        { label: "Ingreso", date: "2026-07-16T08:35:00-05:00" },
        { label: "Servicio finalizado", date: "2026-07-16T13:20:00-05:00" },
        { label: "Notificación al cliente", date: "2026-07-16T13:30:00-05:00" }
      ]
    },
    {
      id: "OT-1031", plate: "D1E-586", vehicle: "Ford Ranger 2018", client: "Omar Castillo", phone: "990 316 805",
      mechanic: "Miguel Rojas", service: "Reparación de dirección hidráulica", status: "entregado",
      enteredAt: "2026-07-12T07:40:00-05:00", completedAt: "2026-07-14T18:10:00-05:00", deliveredAt: "2026-07-15T09:00:00-05:00",
      diagnosis: "Fuga en cremallera y bomba con presión deficiente.",
      laborCost: 420, laborCharge: 720, otherCosts: 48, discount: 0, billed: 2120, paymentMethod: "Transferencia", paid: true, warrantyDays: 90,
      parts: [
        { name: "Kit de reparación de cremallera", qty: 1, unitCost: 260, unitPrice: 410 },
        { name: "Bomba hidráulica", qty: 1, unitCost: 520, unitPrice: 760 },
        { name: "Fluido hidráulico", qty: 2, unitCost: 21, unitPrice: 38 }
      ],
      externals: [{ provider: "Hidráulica Chiclayo", service: "Prueba y calibración de cremallera", cost: 190, charged: 260, start: "2026-07-12T15:20:00-05:00", end: "2026-07-14T11:15:00-05:00" }],
      delayCause: "Refaccionaria", notes: "Se controló ausencia de fugas tras prueba de ruta.",
      timeline: [
        { label: "Ingreso", date: "2026-07-12T07:40:00-05:00" },
        { label: "Cremallera enviada", date: "2026-07-12T15:20:00-05:00" },
        { label: "Retorno", date: "2026-07-14T11:15:00-05:00" },
        { label: "Entrega", date: "2026-07-15T09:00:00-05:00" }
      ]
    },
    {
      id: "OT-1030", plate: "R2F-611", vehicle: "Renault Duster 2019", client: "Patricia Rojas", phone: "950 882 430",
      mechanic: "José Ramírez", service: "Cambio de distribución", status: "entregado",
      enteredAt: "2026-07-10T08:25:00-05:00", completedAt: "2026-07-10T18:15:00-05:00", deliveredAt: "2026-07-11T08:50:00-05:00",
      diagnosis: "Kilometraje de reemplazo alcanzado y tensor con ruido.",
      laborCost: 240, laborCharge: 430, otherCosts: 22, discount: 0, billed: 1320, paymentMethod: "Efectivo", paid: true, warrantyDays: 90,
      parts: [
        { name: "Kit de distribución", qty: 1, unitCost: 430, unitPrice: 650 },
        { name: "Bomba de agua", qty: 1, unitCost: 155, unitPrice: 245 }
      ],
      externals: [], delayCause: "Sin demora", notes: "Se colocó etiqueta con próximo kilometraje de control.",
      timeline: [
        { label: "Ingreso", date: "2026-07-10T08:25:00-05:00" },
        { label: "Autorización", date: "2026-07-10T09:20:00-05:00" },
        { label: "Finalización", date: "2026-07-10T18:15:00-05:00" },
        { label: "Entrega", date: "2026-07-11T08:50:00-05:00" }
      ]
    },
    {
      id: "OT-1029", plate: "K5W-339", vehicle: "Honda Civic 2016", client: "Diego Montenegro", phone: "932 602 147",
      mechanic: "Luis Pérez", service: "Reparación de aire acondicionado", status: "entregado",
      enteredAt: "2026-07-07T09:40:00-05:00", completedAt: "2026-07-08T15:05:00-05:00", deliveredAt: "2026-07-08T17:20:00-05:00",
      diagnosis: "Compresor no acopla y fuga en sello de tubería de alta.",
      laborCost: 190, laborCharge: 350, otherCosts: 18, discount: 20, billed: 1040, paymentMethod: "Tarjeta", paid: true, warrantyDays: 60,
      parts: [
        { name: "Bobina de compresor A/C", qty: 1, unitCost: 235, unitPrice: 360 },
        { name: "O-rings A/C", qty: 1, unitCost: 18, unitPrice: 38 },
        { name: "Gas refrigerante R134a", qty: 1, unitCost: 85, unitPrice: 150 }
      ],
      externals: [{ provider: "Clima Auto", service: "Vacío y carga certificada", cost: 90, charged: 140, start: "2026-07-08T11:00:00-05:00", end: "2026-07-08T13:20:00-05:00" }],
      delayCause: "Espera de repuesto", notes: "Temperatura de salida medida en 7.8 °C.",
      timeline: [
        { label: "Ingreso", date: "2026-07-07T09:40:00-05:00" },
        { label: "Repuesto recibido", date: "2026-07-08T09:10:00-05:00" },
        { label: "Carga de refrigerante", date: "2026-07-08T11:00:00-05:00" },
        { label: "Entrega", date: "2026-07-08T17:20:00-05:00" }
      ]
    },
    {
      id: "OT-1028", plate: "L8C-742", vehicle: "Mitsubishi L200 2020", client: "Agro Norte SAC", phone: "979 422 610",
      mechanic: "Miguel Rojas", service: "Mantenimiento de flota", status: "entregado",
      enteredAt: "2026-07-05T07:30:00-05:00", completedAt: "2026-07-05T16:45:00-05:00", deliveredAt: "2026-07-05T17:15:00-05:00",
      diagnosis: "Mantenimiento preventivo, revisión de frenos y engrase general.",
      laborCost: 180, laborCharge: 360, otherCosts: 25, discount: 45, billed: 1180, paymentMethod: "Crédito 15 días", paid: false, warrantyDays: 30,
      parts: [
        { name: "Aceite diésel 15W-40", qty: 7, unitCost: 25, unitPrice: 39 },
        { name: "Filtro de aceite", qty: 1, unitCost: 27, unitPrice: 45 },
        { name: "Filtro de combustible", qty: 1, unitCost: 58, unitPrice: 92 },
        { name: "Filtro de aire", qty: 1, unitCost: 52, unitPrice: 86 }
      ],
      externals: [], delayCause: "Sin demora", notes: "Factura emitida a crédito para cliente corporativo.",
      timeline: [
        { label: "Ingreso de flota", date: "2026-07-05T07:30:00-05:00" },
        { label: "Mantenimiento concluido", date: "2026-07-05T16:45:00-05:00" },
        { label: "Entrega", date: "2026-07-05T17:15:00-05:00" }
      ]
    }
  ],
  parts: [
    { id: "RP-001", sku: "FRE-001", barcode: "775100000001", name: "Pastillas de freno delanteras", brand: "Bosch", category: "Frenos", unit: "juego", stock: 2, minStock: 4, maxStock: 18, location: "Estante A-01", averageCost: 142, salePrice: 230, supplier: "Autopartes Norte", compatibility: "Hyundai Accent / Kia Rio", notes: "Cerámicas, eje delantero", consumedMonth: 8, lastPurchase: "2026-07-18" },
    { id: "RP-002", sku: "MOT-014", barcode: "775100000002", name: "Aceite sintético 5W-30 1 L", brand: "Shell", category: "Lubricantes", unit: "litro", stock: 18, minStock: 12, maxStock: 48, location: "Estante L-02", averageCost: 28, salePrice: 42, supplier: "Lubricentro Perú", compatibility: "Gasolina / GLP", notes: "API SP", consumedMonth: 34, lastPurchase: "2026-07-24" },
    { id: "RP-003", sku: "FIL-006", barcode: "775100000003", name: "Filtro de aceite universal M20", brand: "Mann", category: "Filtros", unit: "unidad", stock: 6, minStock: 8, maxStock: 30, location: "Estante F-01", averageCost: 18, salePrice: 32, supplier: "Filtros Chiclayo", compatibility: "Toyota / Hyundai / Kia", notes: "Rosca M20 x 1.5", consumedMonth: 15, lastPurchase: "2026-07-20" },
    { id: "RP-004", sku: "EMB-003", barcode: "775100000004", name: "Kit de embrague 215 mm", brand: "Valeo", category: "Transmisión", unit: "juego", stock: 1, minStock: 2, maxStock: 8, location: "Estante T-03", averageCost: 610, salePrice: 850, supplier: "Importaciones Motor", compatibility: "Kia Rio / Hyundai Accent", notes: "Disco, plato y rodamiento", consumedMonth: 3, lastPurchase: "2026-07-16" },
    { id: "RP-005", sku: "SUS-021", barcode: "775100000005", name: "Amortiguador delantero derecho", brand: "Monroe", category: "Suspensión", unit: "unidad", stock: 4, minStock: 2, maxStock: 10, location: "Estante S-04", averageCost: 410, salePrice: 590, supplier: "Suspensiones SAC", compatibility: "Volkswagen Amarok", notes: "Gas presurizado", consumedMonth: 2, lastPurchase: "2026-07-15" },
    { id: "RP-006", sku: "ELE-008", barcode: "775100000006", name: "Relé automotriz 12 V 30 A", brand: "Hella", category: "Electricidad", unit: "unidad", stock: 12, minStock: 6, maxStock: 30, location: "Gaveta E-05", averageCost: 14, salePrice: 32, supplier: "Electrocar", compatibility: "Universal", notes: "5 terminales", consumedMonth: 7, lastPurchase: "2026-07-22" },
    { id: "RP-007", sku: "REF-010", barcode: "775100000007", name: "Refrigerante 50/50 1 galón", brand: "Vistony", category: "Refrigeración", unit: "galón", stock: 9, minStock: 5, maxStock: 20, location: "Estante L-04", averageCost: 31, salePrice: 52, supplier: "Lubricentro Perú", compatibility: "Universal", notes: "Orgánico, color verde", consumedMonth: 11, lastPurchase: "2026-07-21" },
    { id: "RP-008", sku: "MOT-031", barcode: "775100000008", name: "Juego de empaques de motor", brand: "Ajusa", category: "Motor", unit: "juego", stock: 0, minStock: 1, maxStock: 5, location: "Estante M-02", averageCost: 380, salePrice: 590, supplier: "Motores del Norte", compatibility: "Nissan MR20DE", notes: "Juego superior completo", consumedMonth: 1, lastPurchase: "2026-07-19" },
    { id: "RP-009", sku: "ENC-012", barcode: "775100000009", name: "Bujía iridium IFR6J11", brand: "NGK", category: "Encendido", unit: "unidad", stock: 16, minStock: 12, maxStock: 48, location: "Gaveta E-01", averageCost: 34, salePrice: 52, supplier: "Autopartes Norte", compatibility: "Suzuki / Honda", notes: "Luz 1.1 mm", consumedMonth: 20, lastPurchase: "2026-07-23" },
    { id: "RP-010", sku: "DIR-004", barcode: "775100000010", name: "Fluido de dirección hidráulica 1 L", brand: "Mobil", category: "Dirección", unit: "litro", stock: 5, minStock: 4, maxStock: 18, location: "Estante L-03", averageCost: 21, salePrice: 38, supplier: "Lubricentro Perú", compatibility: "ATF Dexron III", notes: "Dirección y transmisión", consumedMonth: 9, lastPurchase: "2026-07-13" },
    { id: "RP-011", sku: "CLI-007", barcode: "775100000011", name: "Gas refrigerante R134a", brand: "Chemours", category: "Climatización", unit: "unidad", stock: 3, minStock: 3, maxStock: 12, location: "Gabinete C-01", averageCost: 85, salePrice: 150, supplier: "Clima Auto", compatibility: "A/C automotriz", notes: "Lata 340 g", consumedMonth: 5, lastPurchase: "2026-07-08" },
    { id: "RP-012", sku: "DIS-015", barcode: "775100000012", name: "Kit de distribución completo", brand: "Gates", category: "Motor", unit: "juego", stock: 3, minStock: 2, maxStock: 8, location: "Estante M-05", averageCost: 430, salePrice: 650, supplier: "Importaciones Motor", compatibility: "Renault K4M", notes: "Correa y tensores", consumedMonth: 2, lastPurchase: "2026-07-09" },
    { id: "RP-013", sku: "FIL-018", barcode: "775100000013", name: "Filtro de combustible diésel", brand: "Donaldson", category: "Filtros", unit: "unidad", stock: 7, minStock: 5, maxStock: 20, location: "Estante F-03", averageCost: 58, salePrice: 92, supplier: "Filtros Chiclayo", compatibility: "Mitsubishi L200", notes: "Con separador de agua", consumedMonth: 6, lastPurchase: "2026-07-04" },
    { id: "RP-014", sku: "FRE-026", barcode: "775100000014", name: "Líquido de frenos DOT 4 500 ml", brand: "Bosch", category: "Frenos", unit: "unidad", stock: 22, minStock: 8, maxStock: 30, location: "Estante L-01", averageCost: 25, salePrice: 48, supplier: "Autopartes Norte", compatibility: "Universal", notes: "Alto punto de ebullición", consumedMonth: 10, lastPurchase: "2026-07-27" }
  ],
  stockMovements: [
    { id: "MV-101", partId: "RP-014", type: "entrada", quantity: 12, date: "2026-07-30T10:20:00-05:00", orderId: "", reference: "F001-8842", responsible: "Autopartes Norte", unitCost: 25, stockAfter: 22, notes: "Compra semanal" },
    { id: "MV-100", partId: "RP-001", type: "salida", quantity: 1, date: "2026-07-29T11:15:00-05:00", orderId: "OT-1038", reference: "Vale OT-1038", responsible: "Luis Pérez", unitCost: 142, stockAfter: 2, notes: "Instalación en eje delantero" },
    { id: "MV-099", partId: "RP-002", type: "salida", quantity: 4, date: "2026-07-29T09:05:00-05:00", orderId: "OT-1039", reference: "Vale OT-1039", responsible: "José Ramírez", unitCost: 28, stockAfter: 18, notes: "Mantenimiento" },
    { id: "MV-098", partId: "RP-003", type: "salida", quantity: 1, date: "2026-07-29T09:05:00-05:00", orderId: "OT-1039", reference: "Vale OT-1039", responsible: "José Ramírez", unitCost: 18, stockAfter: 6, notes: "Mantenimiento" },
    { id: "MV-097", partId: "RP-004", type: "salida", quantity: 1, date: "2026-07-27T12:30:00-05:00", orderId: "OT-1037", reference: "Vale OT-1037", responsible: "Miguel Rojas", unitCost: 610, stockAfter: 1, notes: "Cambio de embrague" },
    { id: "MV-096", partId: "RP-008", type: "salida", quantity: 1, date: "2026-07-24T13:45:00-05:00", orderId: "OT-1036", reference: "Vale OT-1036", responsible: "José Ramírez", unitCost: 380, stockAfter: 0, notes: "Reparación de culata" },
    { id: "MV-095", partId: "RP-009", type: "entrada", quantity: 24, date: "2026-07-23T15:40:00-05:00", orderId: "", reference: "B001-3490", responsible: "Autopartes Norte", unitCost: 34, stockAfter: 20, notes: "Reposición" },
    { id: "MV-094", partId: "RP-007", type: "entrada", quantity: 10, date: "2026-07-21T12:25:00-05:00", orderId: "", reference: "F004-1168", responsible: "Lubricentro Perú", unitCost: 31, stockAfter: 11, notes: "Compra" },
    { id: "MV-093", partId: "RP-005", type: "salida", quantity: 2, date: "2026-07-21T10:40:00-05:00", orderId: "OT-1034", reference: "Vale OT-1034", responsible: "Miguel Rojas", unitCost: 410, stockAfter: 4, notes: "Suspensión delantera" },
    { id: "MV-092", partId: "RP-006", type: "salida", quantity: 1, date: "2026-07-23T14:20:00-05:00", orderId: "OT-1035", reference: "Vale OT-1035", responsible: "Luis Pérez", unitCost: 14, stockAfter: 12, notes: "Corrección eléctrica" },
    { id: "MV-091", partId: "RP-010", type: "ajuste-", quantity: 1, date: "2026-07-19T17:10:00-05:00", orderId: "", reference: "AJ-007", responsible: "Leonardo Acuña", unitCost: 21, stockAfter: 5, notes: "Envase dañado" },
    { id: "MV-090", partId: "RP-012", type: "entrada", quantity: 4, date: "2026-07-09T11:30:00-05:00", orderId: "", reference: "F002-5571", responsible: "Importaciones Motor", unitCost: 430, stockAfter: 4, notes: "Compra mensual" }
  ],
  activities: [
    {
      id: "AC-01",
      icon: "check",
      text: "<strong>OT-1045</strong> pasó a estado Listo",
      time: "Hace 8 min"
    },
    {
      id: "AC-02",
      icon: "box",
      text: "Se agregó <strong>kit de embrague</strong> a OT-1047",
      time: "Hace 24 min"
    },
    {
      id: "AC-03",
      icon: "wallet",
      text: "Costo externo de <strong>S/ 180</strong> registrado",
      time: "Hace 42 min"
    },
    {
      id: "AC-04",
      icon: "car",
      text: "Ingresó <strong>Kia Sportage B6P-038</strong>",
      time: "Hace 1 h"
    }
  ]
};

const UI = {
  metricsGrid: document.querySelector("#metricsGrid"),
  priorityOrders: document.querySelector("#priorityOrders"),
  alertsList: document.querySelector("#alertsList"),
  activityList: document.querySelector("#activityList"),
  financeChart: document.querySelector("#financeChart"),
  ordersChart: document.querySelector("#ordersChart"),
  statusLegend: document.querySelector("#statusLegend"),
  globalSearch: document.querySelector("#globalSearch"),
  searchResults: document.querySelector("#searchResults"),
  sidebar: document.querySelector("#sidebar"),
  sidebarOverlay: document.querySelector("#sidebarOverlay"),
  openSidebar: document.querySelector("#openSidebar"),
  closeSidebar: document.querySelector("#closeSidebar"),
  themeToggle: document.querySelector("#themeToggle"),
  dashboardView: document.querySelector("#dashboardView"),
  historyView: document.querySelector("#historyView"),
  partsView: document.querySelector("#partsView"),
  placeholderView: document.querySelector("#placeholderView"),
  placeholderTitle: document.querySelector("#placeholderTitle"),
  placeholderText: document.querySelector("#placeholderText"),
  toastRegion: document.querySelector("#toastRegion")
};

const statusConfig = {
  revision: { label: "En revisión", color: "#2f8cff", pill: "info" },
  esperando: { label: "Esperando repuestos", color: "#f6c85f", pill: "warning" },
  refaccionaria: { label: "En refaccionaria", color: "#ff8a2b", pill: "warning" },
  listo: { label: "Listo", color: "#34c987", pill: "success" }
};

const viewCopy = {
  "nueva-orden": {
    title: "Nueva Orden",
    text: "La siguiente entrega incluirá el formulario de ingreso, diagnóstico inicial, servicios y cotización."
  },
  ordenes: {
    title: "Órdenes de Trabajo",
    text: "Aquí se conectará el tablero Kanban y el modal completo de edición, piezas, externos y costos en vivo."
  },
  historial: {
    title: "Historial y Reportes",
    text: "Esta vista contendrá filtros avanzados, paginación, detalle financiero e impresión del resumen final."
  },
  repuestos: {
    title: "Repuestos e Inventario",
    text: "Módulo complementario para stock mínimo, costos promedio, proveedores y alertas de reposición."
  },
  clientes: {
    title: "Clientes y Vehículos",
    text: "Ficha unificada de clientes, vehículos, servicios anteriores y recordatorios de mantenimiento."
  },
  configuracion: {
    title: "Configuración",
    text: "Usuarios, permisos, mecánicos, servicios, impuestos, impresión y parámetros generales del taller."
  }
};

const formatCurrency = (value) => new Intl.NumberFormat("es-PE", {
  style: "currency",
  currency: appData.workshop.currency,
  maximumFractionDigits: 0
}).format(value);

const escapeHTML = (value = "") => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");

function calculateDashboardMetrics() {
  const activeOrders = appData.orders.filter((order) => order.status !== "listo").length;
  const readyOrders = appData.orders.filter((order) => order.status === "listo").length;
  const delayedOrders = appData.orders.filter((order) => {
    const isExternal = order.status === "refaccionaria";
    const exceededPromise = new Date(order.promisedAt).getTime() < Date.now();
    return isExternal || exceededPromise;
  }).length;

  return [
    {
      label: "Órdenes activas",
      value: activeOrders,
      helper: `${appData.orders.length} órdenes registradas`,
      icon: "wrench",
      color: "#2f8cff",
      soft: "rgba(47, 140, 255, 0.14)",
      trend: "+2 hoy",
      trendType: "positive"
    },
    {
      label: "Vehículos listos",
      value: readyOrders,
      helper: "Pendientes de entrega",
      icon: "check",
      color: "#34c987",
      soft: "rgba(52, 201, 135, 0.14)",
      trend: "+1",
      trendType: "positive"
    },
    {
      label: "Vehículos demorados",
      value: delayedOrders,
      helper: "Requieren seguimiento",
      icon: "clock",
      color: "#ff8a2b",
      soft: "rgba(255, 138, 43, 0.14)",
      trend: "Atención",
      trendType: "negative"
    },
    {
      label: "Ganancia proyectada",
      value: formatCurrency(appData.financials.projectedProfit),
      helper: `${formatCurrency(appData.financials.costsMonth)} en costos del mes`,
      icon: "trending",
      color: "#a978ff",
      soft: "rgba(169, 120, 255, 0.14)",
      trend: "+12.4%",
      trendType: "positive"
    }
  ];
}

function renderMetrics() {
  const metrics = calculateDashboardMetrics();

  UI.metricsGrid.innerHTML = metrics.map((metric) => `
    <article class="metric-card" style="--metric-color:${metric.color};--metric-soft:${metric.soft};--metric-glow:${metric.soft}">
      <div class="metric-card__top">
        <span class="metric-card__icon"><svg><use href="#icon-${metric.icon}"></use></svg></span>
        <span class="metric-card__trend is-${metric.trendType}">${escapeHTML(metric.trend)}</span>
      </div>
      <div class="metric-card__body">
        <strong>${escapeHTML(metric.value)}</strong>
        <span>${escapeHTML(metric.label)}</span>
      </div>
      <div class="metric-card__footer">${escapeHTML(metric.helper)}</div>
    </article>
  `).join("");

  document.querySelector("#activeOrdersBadge").textContent = metrics[0].value;
}

function renderPriorityOrders() {
  const orders = [...appData.orders]
    .filter((order) => order.status !== "listo")
    .sort((a, b) => a.priority - b.priority)
    .slice(0, 4);

  UI.priorityOrders.innerHTML = orders.map((order) => {
    const status = statusConfig[order.status];
    const budgetUse = Math.round((order.currentCost / order.budget) * 100);

    return `
      <button class="order-row" type="button" data-order-id="${escapeHTML(order.id)}" aria-label="Abrir ${escapeHTML(order.id)}">
        <span class="order-row__vehicle"><svg><use href="#icon-car"></use></svg></span>
        <span class="order-row__content">
          <span class="order-row__title">
            <strong>${escapeHTML(order.plate)} · ${escapeHTML(order.vehicle)}</strong>
            <span>${escapeHTML(order.id)}</span>
          </span>
          <span class="order-row__meta">
            <span class="pill pill--${status.pill}">${escapeHTML(status.label)}</span>
            <span>${escapeHTML(order.service)}</span>
          </span>
        </span>
        <span class="order-row__time">
          <strong>${budgetUse}%</strong>
          <span>presupuesto</span>
        </span>
      </button>
    `;
  }).join("");
}

function renderAlerts() {
  UI.alertsList.innerHTML = appData.alerts.map((alert) => `
    <article class="alert-item" data-level="${escapeHTML(alert.level)}" data-alert-id="${escapeHTML(alert.id)}">
      <span class="alert-item__icon"><svg><use href="#icon-alert"></use></svg></span>
      <div class="alert-item__content">
        <strong>${escapeHTML(alert.title)}</strong>
        <span>${escapeHTML(alert.detail)}</span>
      </div>
      <button class="icon-button" type="button" data-dismiss-alert="${escapeHTML(alert.id)}" aria-label="Descartar alerta">
        <svg><use href="#icon-x"></use></svg>
      </button>
    </article>
  `).join("");

  updateAlertCounters();
}

function updateAlertCounters() {
  const visibleAlerts = document.querySelectorAll(".alert-item").length;
  const urgentAlerts = appData.alerts.filter((alert) => alert.level === "critical" || alert.level === "warning").length;
  document.querySelector("#notificationCount").textContent = visibleAlerts;
  document.querySelector("#alertCountPill").textContent = `${urgentAlerts} urgentes`;
}

function renderActivity() {
  UI.activityList.innerHTML = appData.activities.map((activity) => `
    <article class="activity-item">
      <span class="activity-item__marker"><svg><use href="#icon-${escapeHTML(activity.icon)}"></use></svg></span>
      <div class="activity-item__content"><p>${activity.text}</p></div>
      <time>${escapeHTML(activity.time)}</time>
    </article>
  `).join("");
}

function renderGoal() {
  const { billedToday, dailyGoal } = appData.workshop;
  const percentage = Math.min(100, Math.round((billedToday / dailyGoal) * 100));
  const remaining = Math.max(0, dailyGoal - billedToday);

  document.querySelector("#goalRing").style.setProperty("--goal", percentage);
  document.querySelector("#goalValue").textContent = `${percentage}%`;
  document.querySelector("#goalCurrent").textContent = formatCurrency(billedToday);
  document.querySelector("#goalTarget").textContent = formatCurrency(dailyGoal);
  document.querySelector("#goalRemaining").textContent = formatCurrency(remaining);
  document.querySelector("#efficiencyValue").textContent = `${appData.workshop.efficiency}%`;
}

function renderFinanceSummary() {
  const margin = appData.financials.incomeMonth - appData.financials.costsMonth;
  document.querySelector("#estimatedMargin").textContent = formatCurrency(margin);
}

function getCanvasColors() {
  const styles = getComputedStyle(document.documentElement);
  return {
    grid: styles.getPropertyValue("--border-strong").trim() || "rgba(159,183,211,.22)",
    text: styles.getPropertyValue("--text-muted").trim() || "#718198",
    primary: styles.getPropertyValue("--primary").trim() || "#2f8cff",
    orange: styles.getPropertyValue("--orange").trim() || "#ff8a2b",
    surface: styles.getPropertyValue("--surface").trim() || "#121a25"
  };
}

function prepareCanvas(canvas) {
  const rect = canvas.getBoundingClientRect();
  const ratio = Math.max(window.devicePixelRatio || 1, 1);
  canvas.width = Math.round(rect.width * ratio);
  canvas.height = Math.round(rect.height * ratio);
  const context = canvas.getContext("2d");
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  return { context, width: rect.width, height: rect.height };
}

function drawFinanceChart() {
  const { context: ctx, width, height } = prepareCanvas(UI.financeChart);
  const colors = getCanvasColors();
  const padding = { top: 18, right: 12, bottom: 28, left: 42 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const income = appData.financials.incomeSeries;
  const costs = appData.financials.costSeries;
  const maxValue = Math.ceil(Math.max(...income, ...costs) / 1000) * 1000;
  const steps = 4;

  ctx.clearRect(0, 0, width, height);
  ctx.font = "11px Inter, system-ui, sans-serif";
  ctx.textBaseline = "middle";

  for (let i = 0; i <= steps; i += 1) {
    const y = padding.top + (chartHeight / steps) * i;
    const value = maxValue - (maxValue / steps) * i;

    ctx.beginPath();
    ctx.strokeStyle = colors.grid;
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 5]);
    ctx.moveTo(padding.left, y);
    ctx.lineTo(width - padding.right, y);
    ctx.stroke();

    ctx.fillStyle = colors.text;
    ctx.textAlign = "right";
    ctx.fillText(`S/${Math.round(value / 1000)}k`, padding.left - 8, y);
  }

  ctx.setLineDash([]);

  const pointX = (index) => padding.left + (chartWidth / (income.length - 1)) * index;
  const pointY = (value) => padding.top + chartHeight - (value / maxValue) * chartHeight;

  appData.financials.labels.forEach((label, index) => {
    ctx.fillStyle = colors.text;
    ctx.textAlign = "center";
    ctx.fillText(label, pointX(index), height - 10);
  });

  const drawSeries = (series, color, fillAlpha) => {
    const gradient = ctx.createLinearGradient(0, padding.top, 0, height - padding.bottom);
    gradient.addColorStop(0, hexToRgba(color, fillAlpha));
    gradient.addColorStop(1, hexToRgba(color, 0));

    ctx.beginPath();
    series.forEach((value, index) => {
      const x = pointX(index);
      const y = pointY(value);
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.lineTo(pointX(series.length - 1), padding.top + chartHeight);
    ctx.lineTo(pointX(0), padding.top + chartHeight);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    ctx.beginPath();
    series.forEach((value, index) => {
      const x = pointX(index);
      const y = pointY(value);
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.strokeStyle = color;
    ctx.lineWidth = 2.4;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.stroke();

    series.forEach((value, index) => {
      ctx.beginPath();
      ctx.fillStyle = colors.surface;
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.arc(pointX(index), pointY(value), 3.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
    });
  };

  drawSeries(income, colors.primary, 0.20);
  drawSeries(costs, colors.orange, 0.12);
}

function hexToRgba(hex, alpha) {
  const normalized = hex.replace("#", "");
  const value = Number.parseInt(normalized, 16);
  const red = (value >> 16) & 255;
  const green = (value >> 8) & 255;
  const blue = value & 255;
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function drawOrdersChart() {
  const { context: ctx, width, height } = prepareCanvas(UI.ordersChart);
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) * 0.38;
  const lineWidth = Math.max(16, radius * 0.25);
  const counts = Object.keys(statusConfig).map((status) => ({
    status,
    value: appData.orders.filter((order) => order.status === status).length,
    ...statusConfig[status]
  }));
  const total = counts.reduce((sum, item) => sum + item.value, 0);
  let startAngle = -Math.PI / 2;

  ctx.clearRect(0, 0, width, height);
  ctx.lineCap = "round";

  counts.forEach((item) => {
    if (item.value === 0) return;
    const angle = (item.value / total) * Math.PI * 2;
    ctx.beginPath();
    ctx.strokeStyle = item.color;
    ctx.lineWidth = lineWidth;
    ctx.arc(centerX, centerY, radius, startAngle + 0.025, startAngle + angle - 0.025);
    ctx.stroke();
    startAngle += angle;
  });

  document.querySelector("#totalOrdersDonut").textContent = total;
  UI.statusLegend.innerHTML = counts.map((item) => `
    <div class="status-legend__item" style="--status-color:${item.color}">
      <i></i><span>${escapeHTML(item.label)}</span><strong>${item.value}</strong>
    </div>
  `).join("");
}

function updateClock() {
  const now = new Date();
  document.querySelector("#currentDate").textContent = new Intl.DateTimeFormat("es-PE", {
    weekday: "short",
    day: "2-digit",
    month: "short"
  }).format(now);
  document.querySelector("#currentTime").textContent = new Intl.DateTimeFormat("es-PE", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  }).format(now);
}

function openSidebar() {
  document.body.classList.add("sidebar-open");
  UI.openSidebar.setAttribute("aria-expanded", "true");
  UI.sidebarOverlay.setAttribute("aria-hidden", "false");
}

function closeSidebar() {
  document.body.classList.remove("sidebar-open");
  UI.openSidebar.setAttribute("aria-expanded", "false");
  UI.sidebarOverlay.setAttribute("aria-hidden", "true");
}

function setActiveView(viewName) {
  const validView = ["dashboard", "historial", "repuestos"].includes(viewName) ? viewName : viewName;
  const isDashboard = validView === "dashboard";
  const isHistory = validView === "historial";
  const isParts = validView === "repuestos";
  const isPlaceholder = !isDashboard && !isHistory && !isParts;

  document.querySelectorAll(".nav-item[data-view]").forEach((link) => {
    const isActive = link.dataset.view === validView;
    link.classList.toggle("is-active", isActive);
    if (isActive) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  UI.dashboardView.hidden = !isDashboard;
  UI.historyView.hidden = !isHistory;
  UI.partsView.hidden = !isParts;
  UI.placeholderView.hidden = !isPlaceholder;

  if (isHistory) {
    renderHistoryModule();
  } else if (isParts) {
    renderPartsModule();
  } else if (isPlaceholder) {
    const copy = viewCopy[validView] || {
      title: "Módulo preparado",
      text: "Esta vista será conectada en la siguiente etapa."
    };
    UI.placeholderTitle.textContent = copy.title;
    UI.placeholderText.textContent = copy.text;
  } else {
    requestAnimationFrame(drawAllCharts);
  }

  window.location.hash = validView;
  closeSidebar();
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function handleGlobalSearch() {
  const query = UI.globalSearch.value.trim().toLowerCase();

  if (!query) {
    UI.searchResults.hidden = true;
    UI.searchResults.innerHTML = "";
    return;
  }

  const activeMatches = appData.orders.filter((order) => [order.id, order.plate, order.vehicle, order.client, order.phone, order.mechanic]
    .join(" ").toLowerCase().includes(query)).map((order) => ({ type: "order", item: order }));
  const historyMatches = appData.history.filter((order) => [order.id, order.plate, order.vehicle, order.client, order.phone, order.service]
    .join(" ").toLowerCase().includes(query)).map((order) => ({ type: "history", item: order }));
  const partMatches = appData.parts.filter((part) => [part.id, part.sku, part.barcode, part.name, part.brand, part.category]
    .join(" ").toLowerCase().includes(query)).map((part) => ({ type: "part", item: part }));
  const matches = [...activeMatches, ...historyMatches, ...partMatches].slice(0, 8);

  UI.searchResults.hidden = false;
  UI.searchResults.innerHTML = matches.length ? matches.map(({ type, item }) => {
    if (type === "order") {
      return `<button class="search-result" type="button" role="option" data-search-order="${escapeHTML(item.id)}"><span class="search-result__icon"><svg><use href="#icon-car"></use></svg></span><span class="search-result__content"><strong>${highlightMatch(`${item.plate} · ${item.vehicle}`, query)}</strong><small>${highlightMatch(`${item.id} · ${item.client}`, query)}</small></span><span class="pill pill--${statusConfig[item.status].pill}">${escapeHTML(statusConfig[item.status].label)}</span></button>`;
    }
    if (type === "history") {
      const status = historyStatusConfig[item.status];
      return `<button class="search-result" type="button" role="option" data-search-history="${escapeHTML(item.id)}"><span class="search-result__icon"><svg><use href="#icon-history"></use></svg></span><span class="search-result__content"><strong>${highlightMatch(`${item.plate} · ${item.vehicle}`, query)}</strong><small>${highlightMatch(`${item.id} · ${item.service}`, query)}</small></span><span class="history-status ${status.className}">${status.label}</span></button>`;
    }
    const stock = stockStatusConfig[getStockStatus(item)];
    return `<button class="search-result" type="button" role="option" data-search-part="${escapeHTML(item.id)}"><span class="search-result__icon"><svg><use href="#icon-box"></use></svg></span><span class="search-result__content"><strong>${highlightMatch(item.name, query)}</strong><small>${highlightMatch(`${item.sku} · ${item.brand}`, query)}</small></span><span class="stock-status ${stock.className}">${item.stock} ${escapeHTML(item.unit)}</span></button>`;
  }).join("") : '<div class="search-empty">No se encontraron vehículos, clientes, órdenes o repuestos.</div>';
}
function highlightMatch(text, query) {
  const safeText = escapeHTML(text);
  const safeQuery = escapeHTML(query).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return safeText.replace(new RegExp(`(${safeQuery})`, "ig"), "<mark>$1</mark>");
}

function showToast(title, message, icon = "check") {
  const toast = document.createElement("article");
  toast.className = "toast";
  toast.innerHTML = `
    <span class="toast__icon"><svg><use href="#icon-${escapeHTML(icon)}"></use></svg></span>
    <span class="toast__content"><strong>${escapeHTML(title)}</strong><span>${escapeHTML(message)}</span></span>
    <button class="icon-button" type="button" aria-label="Cerrar aviso"><svg><use href="#icon-x"></use></svg></button>
  `;

  const removeToast = () => {
    if (!toast.isConnected) return;
    toast.classList.add("is-hiding");
    window.setTimeout(() => toast.remove(), 190);
  };

  toast.querySelector("button").addEventListener("click", removeToast);
  UI.toastRegion.appendChild(toast);
  window.setTimeout(removeToast, 3800);
}

function dismissAlert(alertId) {
  const alertElement = document.querySelector(`[data-alert-id="${CSS.escape(alertId)}"]`);
  if (!alertElement) return;

  alertElement.animate(
    [
      { opacity: 1, transform: "translateX(0)" },
      { opacity: 0, transform: "translateX(16px)" }
    ],
    { duration: 180, easing: "ease", fill: "forwards" }
  ).finished.then(() => {
    alertElement.remove();
    updateAlertCounters();
  });

  showToast("Alerta revisada", "Se ocultó del panel actual.", "check");
}

function handleAction(action) {
  if (action === "add-part") {
    setActiveView("repuestos");
    openMovementModal();
    return;
  }
  const actions = {
    "new-order": ["Nueva orden", "La vista de ingreso se conectará en la siguiente entrega.", "plus"],
    "add-expense": ["Registro de gasto", "Este acceso alimentará los costos reales de cada orden.", "wallet"]
  };
  const payload = actions[action];
  if (payload) showToast(...payload);
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem("torqueflow-theme", theme);
  } catch (error) {
    console.warn("No se pudo guardar el tema.", error);
  }
  requestAnimationFrame(drawAllCharts);
}

function toggleTheme() {
  const current = document.documentElement.dataset.theme || "dark";
  applyTheme(current === "dark" ? "light" : "dark");
}

function drawAllCharts() {
  if (!UI.dashboardView.hidden) {
    drawFinanceChart();
    drawOrdersChart();
  }
}

function debounce(callback, delay = 160) {
  let timeout;
  return (...args) => {
    window.clearTimeout(timeout);
    timeout = window.setTimeout(() => callback(...args), delay);
  };
}

function bindEvents() {
  UI.openSidebar.addEventListener("click", openSidebar);
  UI.closeSidebar.addEventListener("click", closeSidebar);
  UI.sidebarOverlay.addEventListener("click", closeSidebar);
  UI.themeToggle.addEventListener("click", toggleTheme);
  UI.globalSearch.addEventListener("input", handleGlobalSearch);

  document.addEventListener("click", (event) => {
    const navLink = event.target.closest("[data-view]");
    const viewButton = event.target.closest("[data-view-target]");
    const actionButton = event.target.closest("[data-action]");
    const alertButton = event.target.closest("[data-dismiss-alert]");
    const orderButton = event.target.closest("[data-order-id], [data-search-order]");
    const historySearchButton = event.target.closest("[data-search-history]");
    const partSearchButton = event.target.closest("[data-search-part]");

    if (navLink) {
      event.preventDefault();
      setActiveView(navLink.dataset.view);
    }

    if (viewButton) {
      setActiveView(viewButton.dataset.viewTarget);
    }

    if (actionButton) {
      handleAction(actionButton.dataset.action);
    }

    if (alertButton) {
      dismissAlert(alertButton.dataset.dismissAlert);
    }

    if (orderButton) {
      const orderId = orderButton.dataset.orderId || orderButton.dataset.searchOrder;
      const order = appData.orders.find((item) => item.id === orderId);
      UI.searchResults.hidden = true;
      if (order) {
        showToast(`${order.id} · ${order.plate}`, `${order.client} — ${statusConfig[order.status].label}.`, "car");
      }
    }

    if (historySearchButton) {
      UI.searchResults.hidden = true;
      setActiveView("historial");
      openHistoryDetail(historySearchButton.dataset.searchHistory);
    }

    if (partSearchButton) {
      UI.searchResults.hidden = true;
      setActiveView("repuestos");
      openPartEditor(partSearchButton.dataset.searchPart);
    }

    if (!event.target.closest(".global-search")) {
      UI.searchResults.hidden = true;
    }
  });

  document.addEventListener("keydown", (event) => {
    const isSearchShortcut = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k";
    const isNewOrderShortcut = !event.metaKey && !event.ctrlKey && event.key.toLowerCase() === "n";

    if (isSearchShortcut) {
      event.preventDefault();
      UI.globalSearch.focus();
    }

    if (isNewOrderShortcut && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
      event.preventDefault();
      handleAction("new-order");
    }

    if (event.key === "Escape") {
      closeSidebar();
      UI.searchResults.hidden = true;
    }
  });

  window.addEventListener("resize", debounce(drawAllCharts, 180));
}


/* =========================================================
   Historial de servicios
   ========================================================= */

const historyState = {
  page: 1,
  pageSize: 6,
  currentDetailId: null
};

const partsState = {
  view: "table",
  initializedFilters: false
};

const historyStatusConfig = {
  entregado: { label: "Entregado", className: "status-success" },
  listo: { label: "Listo para entregar", className: "status-info" },
  garantia: { label: "En garantía", className: "status-warning" }
};

const stockStatusConfig = {
  critical: { label: "Crítico", className: "status-danger", color: "var(--red)" },
  low: { label: "Stock bajo", className: "status-warning", color: "var(--orange)" },
  normal: { label: "Normal", className: "status-success", color: "var(--green)" },
  overstock: { label: "Sobrestock", className: "status-info", color: "var(--primary)" }
};

function parseStoredArray(key, fallback) {
  try {
    const stored = JSON.parse(localStorage.getItem(key));
    return Array.isArray(stored) ? stored : fallback;
  } catch (error) {
    console.warn(`No se pudo leer ${key}`, error);
    return fallback;
  }
}

function initializeInventoryStorage() {
  appData.parts = parseStoredArray("torqueflow-parts", appData.parts);
  appData.stockMovements = parseStoredArray("torqueflow-stock-movements", appData.stockMovements);
}

function persistInventory() {
  try {
    localStorage.setItem("torqueflow-parts", JSON.stringify(appData.parts));
    localStorage.setItem("torqueflow-stock-movements", JSON.stringify(appData.stockMovements));
  } catch (error) {
    console.warn("El almacenamiento local no está disponible.", error);
  }
}

function formatCurrencyDetailed(value) {
  return new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: appData.workshop.currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(Number(value) || 0);
}

function formatDate(value, options = {}) {
  if (!value) return "Pendiente";
  const normalizedValue = /^\d{4}-\d{2}-\d{2}$/.test(String(value)) ? `${value}T12:00:00` : value;
  const date = new Date(normalizedValue);
  if (Number.isNaN(date.getTime())) return "—";
  return new Intl.DateTimeFormat("es-PE", {
    day: "2-digit",
    month: "short",
    year: options.year === false ? undefined : "numeric",
    hour: options.time ? "2-digit" : undefined,
    minute: options.time ? "2-digit" : undefined
  }).format(date);
}

function durationBetween(start, end) {
  if (!start || !end) return 0;
  return Math.max(0, new Date(end).getTime() - new Date(start).getTime());
}

function formatDuration(milliseconds) {
  if (!milliseconds || milliseconds < 60000) return "0 min";
  const totalMinutes = Math.round(milliseconds / 60000);
  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const minutes = totalMinutes % 60;
  const chunks = [];
  if (days) chunks.push(`${days} d`);
  if (hours) chunks.push(`${hours} h`);
  if (minutes && days === 0) chunks.push(`${minutes} min`);
  return chunks.join(" ");
}

function getHistoryFinancials(order) {
  const partsCost = order.parts.reduce((sum, item) => sum + item.qty * item.unitCost, 0);
  const partsCharge = order.parts.reduce((sum, item) => sum + item.qty * item.unitPrice, 0);
  const externalCost = order.externals.reduce((sum, item) => sum + item.cost, 0);
  const externalCharge = order.externals.reduce((sum, item) => sum + item.charged, 0);
  const totalCost = partsCost + externalCost + order.laborCost + order.otherCosts;
  const profit = order.billed - totalCost;
  const margin = order.billed ? (profit / order.billed) * 100 : 0;
  return { partsCost, partsCharge, externalCost, externalCharge, totalCost, profit, margin };
}

function getExternalDuration(order) {
  return order.externals.reduce((total, item) => total + durationBetween(item.start, item.end), 0);
}

function getHistoryFilters() {
  return {
    query: document.querySelector("#historySearch").value.trim().toLowerCase(),
    dateFrom: document.querySelector("#historyDateFrom").value,
    dateTo: document.querySelector("#historyDateTo").value,
    status: document.querySelector("#historyStatusFilter").value,
    mechanic: document.querySelector("#historyMechanicFilter").value,
    minCost: Number(document.querySelector("#historyMinCost").value || 0),
    maxCost: Number(document.querySelector("#historyMaxCost").value || Infinity),
    sort: document.querySelector("#historySort").value
  };
}

function getFilteredHistory() {
  const filters = getHistoryFilters();
  const from = filters.dateFrom ? new Date(`${filters.dateFrom}T00:00:00-05:00`).getTime() : -Infinity;
  const to = filters.dateTo ? new Date(`${filters.dateTo}T23:59:59-05:00`).getTime() : Infinity;

  const filtered = appData.history.filter((order) => {
    const financials = getHistoryFinancials(order);
    const dateValue = new Date(order.deliveredAt || order.completedAt).getTime();
    const haystack = [order.id, order.plate, order.vehicle, order.client, order.phone, order.mechanic, order.service]
      .join(" ")
      .toLowerCase();
    return (!filters.query || haystack.includes(filters.query))
      && dateValue >= from
      && dateValue <= to
      && (filters.status === "all" || order.status === filters.status)
      && (filters.mechanic === "all" || order.mechanic === filters.mechanic)
      && financials.totalCost >= filters.minCost
      && financials.totalCost <= filters.maxCost;
  });

  const sorters = {
    newest: (a, b) => new Date(b.deliveredAt || b.completedAt) - new Date(a.deliveredAt || a.completedAt),
    oldest: (a, b) => new Date(a.deliveredAt || a.completedAt) - new Date(b.deliveredAt || b.completedAt),
    highest: (a, b) => getHistoryFinancials(b).totalCost - getHistoryFinancials(a).totalCost,
    profit: (a, b) => getHistoryFinancials(b).profit - getHistoryFinancials(a).profit,
    duration: (a, b) => durationBetween(b.enteredAt, b.deliveredAt || b.completedAt) - durationBetween(a.enteredAt, a.deliveredAt || a.completedAt)
  };

  return filtered.sort(sorters[filters.sort] || sorters.newest);
}

function populateHistoryMechanics() {
  const select = document.querySelector("#historyMechanicFilter");
  const current = select.value || "all";
  const mechanics = [...new Set(appData.history.map((item) => item.mechanic))].sort();
  select.innerHTML = '<option value="all">Todos</option>' + mechanics.map((name) => `<option value="${escapeHTML(name)}">${escapeHTML(name)}</option>`).join("");
  select.value = mechanics.includes(current) ? current : "all";
}

function renderHistoryMetrics(historyRows) {
  const totalBilled = historyRows.reduce((sum, order) => sum + order.billed, 0);
  const totalProfit = historyRows.reduce((sum, order) => sum + getHistoryFinancials(order).profit, 0);
  const averageDuration = historyRows.length
    ? historyRows.reduce((sum, order) => sum + durationBetween(order.enteredAt, order.deliveredAt || order.completedAt), 0) / historyRows.length
    : 0;
  const externalTime = historyRows.reduce((sum, order) => sum + getExternalDuration(order), 0);
  const metrics = [
    { label: "Servicios registrados", value: historyRows.length, helper: "Según filtros aplicados", icon: "history", color: "var(--primary)", soft: "var(--primary-soft)", delta: `${historyRows.filter((o) => o.status === "garantia").length} en garantía`, deltaType: "warning" },
    { label: "Facturación acumulada", value: formatCurrency(totalBilled), helper: "Importe cobrado y pendiente", icon: "wallet", color: "var(--green)", soft: "var(--green-soft)", delta: `${historyRows.filter((o) => o.paid).length} pagadas`, deltaType: "positive" },
    { label: "Utilidad real", value: formatCurrency(totalProfit), helper: "Cobro menos costos directos", icon: "trending", color: "var(--purple)", soft: "rgba(169, 120, 255, 0.14)", delta: totalBilled ? `${Math.round((totalProfit / totalBilled) * 100)}% margen` : "0% margen", deltaType: "positive" },
    { label: "Tiempo promedio", value: formatDuration(averageDuration), helper: `${formatDuration(externalTime)} en externos`, icon: "clock", color: "var(--orange)", soft: "var(--orange-soft)", delta: "Tiempo total", deltaType: "warning" }
  ];

  document.querySelector("#historyMetrics").innerHTML = metrics.map((metric) => `
    <article class="module-metric" style="--metric-color:${metric.color};--metric-soft:${metric.soft}">
      <div class="module-metric__head"><span>${escapeHTML(metric.label)}</span><span class="module-metric__icon"><svg><use href="#icon-${metric.icon}"></use></svg></span></div>
      <strong>${escapeHTML(String(metric.value))}</strong>
      <div class="module-metric__footer"><span>${escapeHTML(metric.helper)}</span><span class="metric-delta is-${metric.deltaType}">${escapeHTML(metric.delta)}</span></div>
    </article>
  `).join("");
}

function renderHistoryTable(historyRows) {
  const totalPages = Math.max(1, Math.ceil(historyRows.length / historyState.pageSize));
  historyState.page = Math.min(historyState.page, totalPages);
  const start = (historyState.page - 1) * historyState.pageSize;
  const pageRows = historyRows.slice(start, start + historyState.pageSize);
  const tableBody = document.querySelector("#historyTableBody");
  const empty = document.querySelector("#historyEmpty");

  tableBody.innerHTML = pageRows.map((order) => {
    const financials = getHistoryFinancials(order);
    const totalDuration = durationBetween(order.enteredAt, order.deliveredAt || order.completedAt);
    const externalDuration = getExternalDuration(order);
    const status = historyStatusConfig[order.status];
    return `
      <tr>
        <td>
          <div class="order-cell"><span class="order-cell__icon"><svg><use href="#icon-wrench"></use></svg></span><span><strong class="table-primary">${escapeHTML(order.id)}</strong><span class="table-secondary">${escapeHTML(order.service)}</span></span></div>
        </td>
        <td><div class="vehicle-cell"><strong class="table-primary">${escapeHTML(order.plate)} · ${escapeHTML(order.vehicle)}</strong><span class="table-secondary">${escapeHTML(order.client)} · ${escapeHTML(order.mechanic)}</span></div></td>
        <td><div class="time-cell"><span><i></i>${formatDate(order.enteredAt, { time: true })}</span><span><i></i>${formatDate(order.deliveredAt || order.completedAt, { time: true })}</span></div></td>
        <td><strong class="duration-value">${formatDuration(totalDuration)}</strong><span class="duration-note">Ingreso a salida</span></td>
        <td><strong class="duration-value ${externalDuration ? "money-warning" : ""}">${formatDuration(externalDuration)}</strong><span class="duration-note">${order.externals.length ? `${order.externals.length} servicio(s)` : "Sin terceros"}</span></td>
        <td><strong class="table-primary">${formatCurrencyDetailed(financials.totalCost)}</strong><span class="table-secondary">Cobrado ${formatCurrencyDetailed(order.billed)}</span></td>
        <td><strong class="table-primary ${financials.profit >= 0 ? "money-positive" : "money-negative"}">${formatCurrencyDetailed(financials.profit)}</strong><span class="table-secondary">${Math.round(financials.margin)}% margen</span></td>
        <td><span class="history-status ${status.className}">${status.label}</span></td>
        <td><div class="table-actions"><button class="icon-button" type="button" data-history-detail="${escapeHTML(order.id)}" aria-label="Ver detalle de ${escapeHTML(order.id)}"><svg><use href="#icon-eye"></use></svg></button></div></td>
      </tr>`;
  }).join("");

  empty.hidden = historyRows.length > 0;
  document.querySelector("#historyResultCount").textContent = `${historyRows.length} registro${historyRows.length === 1 ? "" : "s"}`;
  document.querySelector("#historyPaginationInfo").textContent = historyRows.length
    ? `Mostrando ${start + 1}–${Math.min(start + historyState.pageSize, historyRows.length)} de ${historyRows.length}`
    : "Mostrando 0 de 0";

  renderHistoryPagination(totalPages);
}

function renderHistoryPagination(totalPages) {
  const container = document.querySelector("#historyPagination");
  const pages = [];
  for (let page = 1; page <= totalPages; page += 1) {
    if (page === 1 || page === totalPages || Math.abs(page - historyState.page) <= 1) pages.push(page);
  }
  let previous = 0;
  const buttons = pages.map((page) => {
    const separator = previous && page - previous > 1 ? '<span aria-hidden="true">…</span>' : "";
    previous = page;
    return `${separator}<button class="pagination-button ${page === historyState.page ? "is-active" : ""}" type="button" data-history-page="${page}" aria-label="Página ${page}">${page}</button>`;
  }).join("");
  container.innerHTML = `
    <button class="pagination-button" type="button" data-history-page="${historyState.page - 1}" ${historyState.page === 1 ? "disabled" : ""} aria-label="Página anterior">‹</button>
    ${buttons}
    <button class="pagination-button" type="button" data-history-page="${historyState.page + 1}" ${historyState.page === totalPages ? "disabled" : ""} aria-label="Página siguiente">›</button>`;
}

function renderHistoryInsights(historyRows) {
  const serviceMap = new Map();
  historyRows.forEach((order) => {
    const current = serviceMap.get(order.service) || { count: 0, profit: 0 };
    current.count += 1;
    current.profit += getHistoryFinancials(order).profit;
    serviceMap.set(order.service, current);
  });
  const topServices = [...serviceMap.entries()].sort((a, b) => b[1].profit - a[1].profit).slice(0, 5);
  const maxProfit = Math.max(...topServices.map(([, value]) => value.profit), 1);
  document.querySelector("#historyTopServices").innerHTML = topServices.length ? topServices.map(([name, value], index) => `
    <div class="ranked-item">
      <span class="ranked-item__index">${index + 1}</span>
      <div class="ranked-item__content"><strong>${escapeHTML(name)}</strong><span>${value.count} orden${value.count === 1 ? "" : "es"}</span></div>
      <strong class="ranked-item__value">${formatCurrency(value.profit)}</strong>
      <div class="ranked-progress"><span style="--rank-value:${Math.max(5, (value.profit / maxProfit) * 100)}%"></span></div>
    </div>`).join("") : '<p class="table-secondary">Sin datos para el periodo.</p>';

  const delayMap = new Map();
  historyRows.forEach((order) => delayMap.set(order.delayCause, (delayMap.get(order.delayCause) || 0) + 1));
  const delayRows = [...delayMap.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);
  const maxDelay = Math.max(...delayRows.map(([, count]) => count), 1);
  document.querySelector("#historyDelayCauses").innerHTML = delayRows.map(([name, count], index) => `
    <div class="ranked-item">
      <span class="ranked-item__index">${index + 1}</span>
      <div class="ranked-item__content"><strong>${escapeHTML(name)}</strong><span>${count} orden${count === 1 ? "" : "es"}</span></div>
      <strong class="ranked-item__value ${name === "Sin demora" ? "money-positive" : "money-warning"}">${count}</strong>
      <div class="ranked-progress"><span style="--rank-value:${Math.max(5, (count / maxDelay) * 100)}%;background:${name === "Sin demora" ? "var(--green)" : "var(--orange)"}"></span></div>
    </div>`).join("");
}

function renderHistoryModule() {
  populateHistoryMechanics();
  const rows = getFilteredHistory();
  renderHistoryMetrics(rows);
  renderHistoryTable(rows);
  renderHistoryInsights(rows);
}

function openHistoryDetail(orderId) {
  const order = appData.history.find((item) => item.id === orderId);
  if (!order) return;
  historyState.currentDetailId = orderId;
  const financials = getHistoryFinancials(order);
  const totalDuration = durationBetween(order.enteredAt, order.deliveredAt || order.completedAt);
  const externalDuration = getExternalDuration(order);
  const status = historyStatusConfig[order.status];
  const partsRows = order.parts.map((item) => `
    <div class="breakdown-row"><span>${item.qty} × ${escapeHTML(item.name)}<small class="table-secondary">Costo ${formatCurrencyDetailed(item.unitCost)} · Venta ${formatCurrencyDetailed(item.unitPrice)}</small></span><strong>${formatCurrencyDetailed(item.qty * item.unitPrice)}</strong></div>`).join("");
  const externalRows = order.externals.length ? order.externals.map((item) => `
    <div class="breakdown-row"><span>${escapeHTML(item.service)}<small class="table-secondary">${escapeHTML(item.provider)} · ${formatDuration(durationBetween(item.start, item.end))}</small></span><strong>${formatCurrencyDetailed(item.charged)}</strong></div>`).join("") : '<div class="breakdown-row"><span>Sin trabajos externos</span><strong>S/ 0.00</strong></div>';
  document.querySelector("#historyDetailTitle").textContent = `${order.id} · ${order.plate}`;
  document.querySelector("#historyDetailContent").innerHTML = `
    <div class="voucher">
      <section class="voucher-hero">
        <div class="voucher-hero__top"><div><h3>${escapeHTML(order.vehicle)}</h3><p>${escapeHTML(order.client)} · ${escapeHTML(order.phone)}</p></div><span class="history-status ${status.className}">${status.label}</span></div>
        <div class="voucher-meta-grid">
          <div class="voucher-meta"><span>Servicio</span><strong>${escapeHTML(order.service)}</strong></div>
          <div class="voucher-meta"><span>Mecánico</span><strong>${escapeHTML(order.mechanic)}</strong></div>
          <div class="voucher-meta"><span>Ingreso</span><strong>${formatDate(order.enteredAt, { time: true })}</strong></div>
          <div class="voucher-meta"><span>Salida / cierre</span><strong>${formatDate(order.deliveredAt || order.completedAt, { time: true })}</strong></div>
        </div>
        <p><strong>Diagnóstico:</strong> ${escapeHTML(order.diagnosis)}</p>
      </section>
      <div class="voucher-summary-grid">
        <div class="voucher-summary-card"><span>Costo real</span><strong>${formatCurrencyDetailed(financials.totalCost)}</strong></div>
        <div class="voucher-summary-card"><span>Total cobrado</span><strong>${formatCurrencyDetailed(order.billed)}</strong></div>
        <div class="voucher-summary-card"><span>Utilidad</span><strong class="${financials.profit >= 0 ? "money-positive" : "money-negative"}">${formatCurrencyDetailed(financials.profit)}</strong></div>
        <div class="voucher-summary-card"><span>Tiempo total</span><strong>${formatDuration(totalDuration)}</strong></div>
      </div>
      <div class="voucher-grid">
        <section class="voucher-section"><h3>Piezas y materiales cobrados</h3><div class="breakdown-list">${partsRows}<div class="breakdown-row"><span>Mano de obra</span><strong>${formatCurrencyDetailed(order.laborCharge)}</strong></div><div class="breakdown-row"><span>Otros cargos</span><strong>${formatCurrencyDetailed(order.otherCosts)}</strong></div><div class="breakdown-row"><span>Descuento</span><strong>− ${formatCurrencyDetailed(order.discount)}</strong></div><div class="breakdown-row is-total"><strong>Total facturado</strong><strong>${formatCurrencyDetailed(order.billed)}</strong></div></div></section>
        <section class="voucher-section"><h3>Trabajos externos</h3><div class="breakdown-list">${externalRows}<div class="breakdown-row is-total"><strong>Tiempo perdido externo</strong><strong>${formatDuration(externalDuration)}</strong></div></div></section>
        <section class="voucher-section"><h3>Costos internos y margen</h3><div class="breakdown-list"><div class="breakdown-row"><span>Costo de repuestos</span><strong>${formatCurrencyDetailed(financials.partsCost)}</strong></div><div class="breakdown-row"><span>Costo de mano de obra</span><strong>${formatCurrencyDetailed(order.laborCost)}</strong></div><div class="breakdown-row"><span>Costo externo</span><strong>${formatCurrencyDetailed(financials.externalCost)}</strong></div><div class="breakdown-row"><span>Otros costos</span><strong>${formatCurrencyDetailed(order.otherCosts)}</strong></div><div class="breakdown-row is-total"><strong>Margen real</strong><strong class="money-positive">${Math.round(financials.margin)}%</strong></div></div></section>
        <section class="voucher-section"><h3>Línea de tiempo</h3><div class="timeline-list">${order.timeline.map((item) => `<div class="timeline-item"><span class="timeline-dot"></span><div class="timeline-content"><strong>${escapeHTML(item.label)}</strong><span>${formatDate(item.date, { time: true })}</span></div></div>`).join("")}</div></section>
      </div>
      <section class="voucher-section"><h3>Pago, garantía y observaciones</h3><div class="voucher-meta-grid"><div class="voucher-meta"><span>Pago</span><strong>${order.paid ? "Pagado" : "Pendiente"}</strong></div><div class="voucher-meta"><span>Método</span><strong>${escapeHTML(order.paymentMethod)}</strong></div><div class="voucher-meta"><span>Garantía</span><strong>${order.warrantyDays} días</strong></div><div class="voucher-meta"><span>Causa de demora</span><strong>${escapeHTML(order.delayCause)}</strong></div></div><p>${escapeHTML(order.notes)}</p></section>
    </div>`;
  openModal("historyDetailModal");
}

function clearHistoryFilters() {
  document.querySelector("#historySearch").value = "";
  document.querySelector("#historyDateFrom").value = "";
  document.querySelector("#historyDateTo").value = "";
  document.querySelector("#historyStatusFilter").value = "all";
  document.querySelector("#historyMechanicFilter").value = "all";
  document.querySelector("#historyMinCost").value = "";
  document.querySelector("#historyMaxCost").value = "";
  document.querySelector("#historySort").value = "newest";
  historyState.page = 1;
  renderHistoryModule();
}

function historyToCsv(rows) {
  const header = ["Orden", "Placa", "Vehículo", "Cliente", "Mecánico", "Servicio", "Ingreso", "Salida", "Tiempo total", "Tiempo externo", "Costo", "Cobrado", "Utilidad", "Estado"];
  const data = rows.map((order) => {
    const finances = getHistoryFinancials(order);
    return [order.id, order.plate, order.vehicle, order.client, order.mechanic, order.service, formatDate(order.enteredAt, { time: true }), formatDate(order.deliveredAt || order.completedAt, { time: true }), formatDuration(durationBetween(order.enteredAt, order.deliveredAt || order.completedAt)), formatDuration(getExternalDuration(order)), finances.totalCost.toFixed(2), order.billed.toFixed(2), finances.profit.toFixed(2), historyStatusConfig[order.status].label];
  });
  return [header, ...data].map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n");
}

function downloadTextFile(content, filename, type = "text/plain;charset=utf-8") {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function printHistoryPeriod() {
  const rows = getFilteredHistory();
  const totalBilled = rows.reduce((sum, item) => sum + item.billed, 0);
  const totalProfit = rows.reduce((sum, item) => sum + getHistoryFinancials(item).profit, 0);
  const reportWindow = window.open("", "_blank", "width=1000,height=720");
  if (!reportWindow) {
    showToast("Ventana bloqueada", "Permite ventanas emergentes para imprimir el reporte.", "alert");
    return;
  }
  reportWindow.document.write(`<!doctype html><html lang="es"><head><meta charset="utf-8"><title>Reporte de historial</title><style>body{font-family:Arial,sans-serif;color:#172033;padding:28px}h1{margin:0}p{color:#58677a}.summary{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:20px 0}.box{border:1px solid #d9e0e8;border-radius:10px;padding:14px}.box span{display:block;color:#6c7a8d;font-size:12px}.box strong{display:block;margin-top:5px;font-size:20px}table{width:100%;border-collapse:collapse;font-size:11px}th,td{border-bottom:1px solid #e1e6ed;padding:8px;text-align:left}th{background:#f4f7fa}@media print{button{display:none}}</style></head><body><h1>TorqueFlow · Reporte de historial</h1><p>Generado el ${formatDate(new Date().toISOString(), { time: true })}</p><div class="summary"><div class="box"><span>Servicios</span><strong>${rows.length}</strong></div><div class="box"><span>Facturación</span><strong>${formatCurrency(totalBilled)}</strong></div><div class="box"><span>Utilidad</span><strong>${formatCurrency(totalProfit)}</strong></div></div><table><thead><tr><th>Orden</th><th>Vehículo</th><th>Cliente</th><th>Servicio</th><th>Salida</th><th>Costo</th><th>Cobrado</th><th>Utilidad</th></tr></thead><tbody>${rows.map((order) => { const f = getHistoryFinancials(order); return `<tr><td>${escapeHTML(order.id)}</td><td>${escapeHTML(order.plate)} · ${escapeHTML(order.vehicle)}</td><td>${escapeHTML(order.client)}</td><td>${escapeHTML(order.service)}</td><td>${formatDate(order.deliveredAt || order.completedAt)}</td><td>${formatCurrencyDetailed(f.totalCost)}</td><td>${formatCurrencyDetailed(order.billed)}</td><td>${formatCurrencyDetailed(f.profit)}</td></tr>`; }).join("")}</tbody></table><script>window.onload=()=>window.print()<\/script></body></html>`);
  reportWindow.document.close();
}

/* =========================================================
   Catálogo de repuestos y Kardex
   ========================================================= */

function getStockStatus(part) {
  if (part.stock <= 0) return "critical";
  if (part.stock < part.minStock) return "low";
  if (part.stock > part.maxStock) return "overstock";
  return "normal";
}

function getStockProgress(part) {
  return Math.min(100, Math.max(0, (part.stock / Math.max(part.maxStock, 1)) * 100));
}

function getPartsFilters() {
  return {
    query: document.querySelector("#partsSearch").value.trim().toLowerCase(),
    category: document.querySelector("#partsCategoryFilter").value,
    stock: document.querySelector("#partsStockFilter").value,
    supplier: document.querySelector("#partsSupplierFilter").value,
    location: document.querySelector("#partsLocationFilter").value
  };
}

function getFilteredParts() {
  const filters = getPartsFilters();
  return appData.parts.filter((part) => {
    const haystack = [part.id, part.sku, part.barcode, part.name, part.brand, part.category, part.supplier, part.compatibility].join(" ").toLowerCase();
    return (!filters.query || haystack.includes(filters.query))
      && (filters.category === "all" || part.category === filters.category)
      && (filters.stock === "all" || getStockStatus(part) === filters.stock)
      && (filters.supplier === "all" || part.supplier === filters.supplier)
      && (filters.location === "all" || part.location === filters.location);
  }).sort((a, b) => {
    const statusWeight = { critical: 0, low: 1, normal: 2, overstock: 3 };
    return statusWeight[getStockStatus(a)] - statusWeight[getStockStatus(b)] || a.name.localeCompare(b.name);
  });
}

function fillSelectWithValues(selector, values, allLabel) {
  const select = document.querySelector(selector);
  const current = select.value || "all";
  select.innerHTML = `<option value="all">${allLabel}</option>` + values.map((value) => `<option value="${escapeHTML(value)}">${escapeHTML(value)}</option>`).join("");
  select.value = values.includes(current) ? current : "all";
}

function populatePartsFilters() {
  const categories = [...new Set(appData.parts.map((part) => part.category))].sort();
  const suppliers = [...new Set(appData.parts.map((part) => part.supplier).filter(Boolean))].sort();
  const locations = [...new Set(appData.parts.map((part) => part.location))].sort();
  fillSelectWithValues("#partsCategoryFilter", categories, "Todas");
  fillSelectWithValues("#partsSupplierFilter", suppliers, "Todos");
  fillSelectWithValues("#partsLocationFilter", locations, "Todas");

  const categorySelect = document.querySelector("#partCategory");
  const currentCategory = categorySelect.value;
  const extendedCategories = [...new Set([...categories, "Motor", "Frenos", "Suspensión", "Electricidad", "Transmisión", "Lubricantes", "Filtros", "Refrigeración", "Dirección", "Encendido", "Climatización", "Otros"])].sort();
  categorySelect.innerHTML = extendedCategories.map((category) => `<option value="${escapeHTML(category)}">${escapeHTML(category)}</option>`).join("");
  if (extendedCategories.includes(currentCategory)) categorySelect.value = currentCategory;

  const movementPart = document.querySelector("#movementPartId");
  const currentPartId = movementPart.value;
  movementPart.innerHTML = '<option value="">Seleccionar repuesto</option>' + appData.parts.slice().sort((a, b) => a.name.localeCompare(b.name)).map((part) => `<option value="${part.id}">${escapeHTML(part.sku)} · ${escapeHTML(part.name)} (${part.stock} ${escapeHTML(part.unit)})</option>`).join("");
  if (appData.parts.some((part) => part.id === currentPartId)) movementPart.value = currentPartId;

  const orderSelect = document.querySelector("#movementOrder");
  const currentOrder = orderSelect.value;
  orderSelect.innerHTML = '<option value="">Sin orden</option>' + [...appData.orders, ...appData.history].map((order) => `<option value="${escapeHTML(order.id)}">${escapeHTML(order.id)} · ${escapeHTML(order.plate)}</option>`).join("");
  if ([...appData.orders, ...appData.history].some((order) => order.id === currentOrder)) orderSelect.value = currentOrder;
}

function renderPartsMetrics(partsRows) {
  const inventoryValue = partsRows.reduce((sum, part) => sum + part.stock * part.averageCost, 0);
  const lowStock = partsRows.filter((part) => ["critical", "low"].includes(getStockStatus(part))).length;
  const consumption = partsRows.reduce((sum, part) => sum + part.consumedMonth, 0);
  const potentialSales = partsRows.reduce((sum, part) => sum + part.stock * part.salePrice, 0);
  const metrics = [
    { label: "Repuestos activos", value: partsRows.length, helper: `${new Set(partsRows.map((p) => p.category)).size} categorías`, icon: "box", color: "var(--primary)", soft: "var(--primary-soft)", delta: `${partsRows.reduce((s, p) => s + p.stock, 0)} unidades`, deltaType: "positive" },
    { label: "Valor de inventario", value: formatCurrency(inventoryValue), helper: "Valorizado a costo promedio", icon: "wallet", color: "var(--green)", soft: "var(--green-soft)", delta: formatCurrency(potentialSales), deltaType: "positive" },
    { label: "Reposición urgente", value: lowStock, helper: "Agotados o bajo mínimo", icon: "alert", color: "var(--red)", soft: "var(--red-soft)", delta: lowStock ? "Revisar hoy" : "Sin alertas", deltaType: lowStock ? "danger" : "positive" },
    { label: "Consumo del mes", value: consumption, helper: "Unidades usadas en órdenes", icon: "trending", color: "var(--orange)", soft: "var(--orange-soft)", delta: `${appData.stockMovements.filter((m) => m.type === "salida").length} salidas`, deltaType: "warning" }
  ];
  document.querySelector("#partsMetrics").innerHTML = metrics.map((metric) => `
    <article class="module-metric" style="--metric-color:${metric.color};--metric-soft:${metric.soft}">
      <div class="module-metric__head"><span>${escapeHTML(metric.label)}</span><span class="module-metric__icon"><svg><use href="#icon-${metric.icon}"></use></svg></span></div>
      <strong>${escapeHTML(String(metric.value))}</strong>
      <div class="module-metric__footer"><span>${escapeHTML(metric.helper)}</span><span class="metric-delta is-${metric.deltaType}">${escapeHTML(metric.delta)}</span></div>
    </article>`).join("");
}

function renderStockBar(part) {
  const status = getStockStatus(part);
  const config = stockStatusConfig[status];
  return `<div class="stock-cell"><div class="stock-cell__top"><strong>${part.stock} ${escapeHTML(part.unit)}</strong><span>mín. ${part.minStock} · máx. ${part.maxStock}</span></div><div class="stock-progress"><span style="--stock-progress:${getStockProgress(part)}%;--stock-color:${config.color}"></span></div></div>`;
}

function renderPartsTable(partsRows) {
  const body = document.querySelector("#partsTableBody");
  body.innerHTML = partsRows.map((part) => {
    const statusKey = getStockStatus(part);
    const status = stockStatusConfig[statusKey];
    return `<tr>
      <td><div class="part-name-cell"><span class="part-avatar"><svg><use href="#icon-box"></use></svg></span><span><strong class="table-primary">${escapeHTML(part.name)}</strong><span class="table-secondary">${escapeHTML(part.sku)} · ${escapeHTML(part.brand)}</span></span></div></td>
      <td><span class="pill pill--info">${escapeHTML(part.category)}</span></td>
      <td>${renderStockBar(part)}</td>
      <td><strong class="table-primary">${escapeHTML(part.location)}</strong><span class="table-secondary">${escapeHTML(part.compatibility)}</span></td>
      <td><strong class="table-primary">${formatCurrencyDetailed(part.averageCost)}</strong><span class="table-secondary">Últ. compra ${formatDate(part.lastPurchase, { year: false })}</span></td>
      <td><strong class="table-primary">${formatCurrencyDetailed(part.salePrice)}</strong><span class="table-secondary">${Math.round(((part.salePrice - part.averageCost) / Math.max(part.salePrice, 1)) * 100)}% margen</span></td>
      <td><strong class="table-primary">${formatCurrencyDetailed(part.stock * part.averageCost)}</strong><span class="table-secondary">${part.consumedMonth} usados este mes</span></td>
      <td><strong class="table-primary">${escapeHTML(part.supplier || "Sin proveedor")}</strong><span class="table-secondary">${escapeHTML(part.barcode || "Sin código")}</span></td>
      <td><span class="stock-status ${status.className}">${status.label}</span></td>
      <td><div class="table-actions"><button class="icon-button" type="button" data-part-move="${part.id}" aria-label="Mover stock"><svg><use href="#icon-swap"></use></svg></button><button class="icon-button" type="button" data-part-edit="${part.id}" aria-label="Editar repuesto"><svg><use href="#icon-edit"></use></svg></button><button class="icon-button" type="button" data-part-delete="${part.id}" aria-label="Eliminar repuesto"><svg><use href="#icon-trash"></use></svg></button></div></td>
    </tr>`;
  }).join("");
  document.querySelector("#partsEmpty").hidden = partsRows.length > 0;
  document.querySelector("#partsResultCount").textContent = `${partsRows.length} repuesto${partsRows.length === 1 ? "" : "s"}`;
}

function renderPartsCards(partsRows) {
  const grid = document.querySelector("#partsCardGrid");
  grid.innerHTML = partsRows.length ? partsRows.map((part) => {
    const status = stockStatusConfig[getStockStatus(part)];
    return `<article class="part-card">
      <div class="part-card__top"><div class="part-card__identity"><span class="part-avatar"><svg><use href="#icon-box"></use></svg></span><div><strong>${escapeHTML(part.name)}</strong><span>${escapeHTML(part.sku)} · ${escapeHTML(part.brand)}</span></div></div><span class="stock-status ${status.className}">${status.label}</span></div>
      <div><div class="part-card__stock-head"><strong>${part.stock} ${escapeHTML(part.unit)}</strong><span class="table-secondary">Mín. ${part.minStock} / Máx. ${part.maxStock}</span></div><div class="stock-progress"><span style="--stock-progress:${getStockProgress(part)}%;--stock-color:${status.color}"></span></div></div>
      <div class="part-card__meta"><div><span>Categoría</span><strong>${escapeHTML(part.category)}</strong></div><div><span>Ubicación</span><strong>${escapeHTML(part.location)}</strong></div><div><span>Costo promedio</span><strong>${formatCurrencyDetailed(part.averageCost)}</strong></div><div><span>Precio venta</span><strong>${formatCurrencyDetailed(part.salePrice)}</strong></div><div><span>Valor stock</span><strong>${formatCurrencyDetailed(part.stock * part.averageCost)}</strong></div><div><span>Proveedor</span><strong>${escapeHTML(part.supplier || "—")}</strong></div></div>
      <div class="part-card__footer"><span class="table-secondary">${part.consumedMonth} usados este mes</span><div class="table-actions"><button class="icon-button" type="button" data-part-move="${part.id}"><svg><use href="#icon-swap"></use></svg></button><button class="icon-button" type="button" data-part-edit="${part.id}"><svg><use href="#icon-edit"></use></svg></button></div></div>
    </article>`;
  }).join("") : '<div class="table-empty"><span><svg><use href="#icon-box"></use></svg></span><strong>No hay repuestos que coincidan</strong><p>Revisa la búsqueda o los filtros seleccionados.</p></div>';
}

function renderRestockList() {
  const lowParts = appData.parts.filter((part) => ["critical", "low"].includes(getStockStatus(part))).sort((a, b) => (a.stock - a.minStock) - (b.stock - b.minStock));
  document.querySelector("#lowStockCount").textContent = `${lowParts.length} crítico${lowParts.length === 1 ? "" : "s"}`;
  document.querySelector("#restockList").innerHTML = lowParts.length ? lowParts.slice(0, 6).map((part) => `
    <div class="restock-item"><span class="restock-item__icon"><svg><use href="#icon-alert"></use></svg></span><div class="restock-item__content"><strong>${escapeHTML(part.name)}</strong><span>${part.stock} ${escapeHTML(part.unit)} · mínimo ${part.minStock}</span></div><button class="restock-item__action" type="button" data-restock-part="${part.id}">Reponer</button></div>`).join("") : '<p class="table-secondary">Todo el inventario está por encima del mínimo.</p>';
}

function getMovementPresentation(type) {
  const isEntry = ["entrada", "ajuste+", "devolucion"].includes(type);
  const labels = { entrada: "Entrada", salida: "Salida", "ajuste+": "Ajuste +", "ajuste-": "Ajuste −", devolucion: "Devolución" };
  return { label: labels[type] || type, isEntry, sign: isEntry ? "+" : "−" };
}

function renderMovements() {
  const rows = appData.stockMovements.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
  document.querySelector("#movementList").innerHTML = rows.slice(0, 7).map((movement) => {
    const part = appData.parts.find((item) => item.id === movement.partId);
    const presentation = getMovementPresentation(movement.type);
    return `<div class="movement-item"><span class="movement-item__icon ${presentation.isEntry ? "" : "is-exit"}"><svg><use href="#icon-${presentation.isEntry ? "plus" : "arrow"}"></use></svg></span><div class="movement-item__content"><strong>${escapeHTML(part?.name || "Repuesto eliminado")}</strong><span>${presentation.label} · ${movement.orderId || movement.reference || "Sin referencia"} · ${formatDate(movement.date, { time: true })}</span></div><strong class="movement-item__value ${presentation.isEntry ? "is-entry" : "is-exit"}">${presentation.sign}${movement.quantity}</strong></div>`;
  }).join("");

  document.querySelector("#allMovementsTableBody").innerHTML = rows.map((movement) => {
    const part = appData.parts.find((item) => item.id === movement.partId);
    const presentation = getMovementPresentation(movement.type);
    return `<tr><td>${formatDate(movement.date, { time: true })}</td><td><strong class="table-primary">${escapeHTML(part?.name || "Repuesto eliminado")}</strong><span class="table-secondary">${escapeHTML(part?.sku || movement.partId)}</span></td><td><span class="movement-type ${presentation.isEntry ? "status-success" : "status-warning"}">${presentation.label}</span></td><td><strong class="${presentation.isEntry ? "money-positive" : "money-warning"}">${presentation.sign}${movement.quantity}</strong></td><td>${movement.stockAfter}</td><td>${escapeHTML(movement.orderId || movement.reference || "—")}</td><td>${escapeHTML(movement.responsible || "—")}</td></tr>`;
  }).join("");
}

function setPartsView(view) {
  partsState.view = view;
  const isTable = view === "table";
  document.querySelector("#partsTablePanel").hidden = !isTable;
  document.querySelector("#partsCardGrid").hidden = isTable;
  document.querySelector("#partsTableViewButton").classList.toggle("is-active", isTable);
  document.querySelector("#partsCardViewButton").classList.toggle("is-active", !isTable);
  document.querySelector("#partsTableViewButton").setAttribute("aria-pressed", String(isTable));
  document.querySelector("#partsCardViewButton").setAttribute("aria-pressed", String(!isTable));
}

function renderPartsModule() {
  populatePartsFilters();
  const rows = getFilteredParts();
  renderPartsMetrics(rows);
  renderPartsTable(rows);
  renderPartsCards(rows);
  renderRestockList();
  renderMovements();
  setPartsView(partsState.view);
  document.querySelector(".nav-item[data-view='repuestos'] .nav-alert").textContent = appData.parts.filter((part) => ["critical", "low"].includes(getStockStatus(part))).length;
}

function clearPartsFilters() {
  document.querySelector("#partsSearch").value = "";
  document.querySelector("#partsCategoryFilter").value = "all";
  document.querySelector("#partsStockFilter").value = "all";
  document.querySelector("#partsSupplierFilter").value = "all";
  document.querySelector("#partsLocationFilter").value = "all";
  renderPartsModule();
}

function generatePartId() {
  const max = appData.parts.reduce((value, item) => Math.max(value, Number(item.id.replace(/\D/g, "")) || 0), 0);
  return `RP-${String(max + 1).padStart(3, "0")}`;
}

function openPartEditor(partId = null) {
  document.querySelector("#partEditorForm").reset();
  document.querySelector("#partEditorId").value = "";
  document.querySelector("#partStock").value = "0";
  document.querySelector("#partMinStock").value = "2";
  document.querySelector("#partMaxStock").value = "20";
  document.querySelector("#partAverageCost").value = "0";
  document.querySelector("#partSalePrice").value = "0";
  document.querySelector("#partEditorTitle").textContent = partId ? "Editar repuesto" : "Nuevo repuesto";
  if (partId) {
    const part = appData.parts.find((item) => item.id === partId);
    if (!part) return;
    const fields = {
      partEditorId: part.id, partName: part.name, partSku: part.sku, partBarcode: part.barcode, partBrand: part.brand,
      partCategory: part.category, partUnit: part.unit, partLocation: part.location, partStock: part.stock,
      partMinStock: part.minStock, partMaxStock: part.maxStock, partAverageCost: part.averageCost,
      partSalePrice: part.salePrice, partSupplier: part.supplier, partCompatibility: part.compatibility, partNotes: part.notes
    };
    Object.entries(fields).forEach(([id, value]) => { document.querySelector(`#${id}`).value = value ?? ""; });
  }
  openModal("partEditorModal");
  setTimeout(() => document.querySelector("#partName").focus(), 80);
}

function savePart() {
  const requiredIds = ["partName", "partSku", "partCategory", "partLocation"];
  const invalid = requiredIds.find((id) => !document.querySelector(`#${id}`).value.trim());
  if (invalid) {
    document.querySelector(`#${invalid}`).focus();
    showToast("Dato obligatorio", "Completa los campos marcados antes de guardar.", "alert");
    return;
  }
  const existingId = document.querySelector("#partEditorId").value;
  const sku = document.querySelector("#partSku").value.trim().toUpperCase();
  if (appData.parts.some((part) => part.sku.toUpperCase() === sku && part.id !== existingId)) {
    showToast("Código duplicado", "Ya existe un repuesto con ese SKU.", "alert");
    return;
  }
  const data = {
    id: existingId || generatePartId(),
    name: document.querySelector("#partName").value.trim(),
    sku,
    barcode: document.querySelector("#partBarcode").value.trim(),
    brand: document.querySelector("#partBrand").value.trim() || "Genérico",
    category: document.querySelector("#partCategory").value,
    unit: document.querySelector("#partUnit").value,
    location: document.querySelector("#partLocation").value.trim(),
    stock: Math.max(0, Number(document.querySelector("#partStock").value || 0)),
    minStock: Math.max(0, Number(document.querySelector("#partMinStock").value || 0)),
    maxStock: Math.max(1, Number(document.querySelector("#partMaxStock").value || 1)),
    averageCost: Math.max(0, Number(document.querySelector("#partAverageCost").value || 0)),
    salePrice: Math.max(0, Number(document.querySelector("#partSalePrice").value || 0)),
    supplier: document.querySelector("#partSupplier").value.trim(),
    compatibility: document.querySelector("#partCompatibility").value.trim(),
    notes: document.querySelector("#partNotes").value.trim(),
    consumedMonth: existingId ? (appData.parts.find((part) => part.id === existingId)?.consumedMonth || 0) : 0,
    lastPurchase: existingId ? (appData.parts.find((part) => part.id === existingId)?.lastPurchase || new Date().toISOString().slice(0, 10)) : new Date().toISOString().slice(0, 10)
  };
  if (data.maxStock < data.minStock) data.maxStock = data.minStock;
  const index = appData.parts.findIndex((part) => part.id === data.id);
  if (index >= 0) appData.parts[index] = data;
  else appData.parts.push(data);
  persistInventory();
  closeModal("partEditorModal");
  renderPartsModule();
  showToast(existingId ? "Repuesto actualizado" : "Repuesto creado", `${data.sku} · ${data.name}`, "box");
}

function deletePart(partId) {
  const part = appData.parts.find((item) => item.id === partId);
  if (!part) return;
  if (part.stock > 0) {
    showToast("No se puede eliminar", "Primero deja el stock en cero mediante un ajuste.", "alert");
    return;
  }
  if (!window.confirm(`¿Eliminar ${part.name}? Esta acción no elimina su historial de movimientos.`)) return;
  appData.parts = appData.parts.filter((item) => item.id !== partId);
  persistInventory();
  renderPartsModule();
  showToast("Repuesto eliminado", part.name, "trash");
}

function openMovementModal(partId = "", defaultType = "entrada") {
  document.querySelector("#stockMovementForm").reset();
  document.querySelector("#movementQuantity").value = "1";
  document.querySelector("#movementType").value = defaultType;
  document.querySelector("#movementPartId").value = partId;
  if (partId) {
    const part = appData.parts.find((item) => item.id === partId);
    document.querySelector("#movementCost").value = part?.averageCost || 0;
  }
  updateMovementPreview();
  openModal("stockMovementModal");
}

function updateMovementPreview() {
  const part = appData.parts.find((item) => item.id === document.querySelector("#movementPartId").value);
  const type = document.querySelector("#movementType").value;
  const quantity = Math.max(0, Number(document.querySelector("#movementQuantity").value || 0));
  const presentation = getMovementPresentation(type);
  const resulting = part ? part.stock + (presentation.isEntry ? quantity : -quantity) : 0;
  document.querySelector("#movementPreview").innerHTML = part
    ? `<strong>${escapeHTML(part.name)}</strong><br>Stock actual: ${part.stock} ${escapeHTML(part.unit)} → Stock resultante: <strong class="${resulting < 0 ? "money-negative" : presentation.isEntry ? "money-positive" : "money-warning"}">${resulting} ${escapeHTML(part.unit)}</strong>`
    : "Selecciona un repuesto para visualizar el cambio de stock.";
}

function saveStockMovement() {
  const partId = document.querySelector("#movementPartId").value;
  const part = appData.parts.find((item) => item.id === partId);
  const type = document.querySelector("#movementType").value;
  const quantity = Math.max(0, Number(document.querySelector("#movementQuantity").value || 0));
  const unitCost = Math.max(0, Number(document.querySelector("#movementCost").value || 0));
  if (!part || quantity <= 0) {
    showToast("Movimiento incompleto", "Selecciona un repuesto e indica una cantidad válida.", "alert");
    return;
  }
  const presentation = getMovementPresentation(type);
  if (!presentation.isEntry && quantity > part.stock) {
    showToast("Stock insuficiente", `Solo hay ${part.stock} ${part.unit} disponibles.`, "alert");
    return;
  }
  const previousStock = part.stock;
  const newStock = previousStock + (presentation.isEntry ? quantity : -quantity);
  if (type === "entrada" && unitCost > 0) {
    part.averageCost = previousStock + quantity > 0
      ? ((previousStock * part.averageCost) + (quantity * unitCost)) / (previousStock + quantity)
      : unitCost;
    part.lastPurchase = new Date().toISOString().slice(0, 10);
  }
  part.stock = newStock;
  if (type === "salida") part.consumedMonth += quantity;
  const maxMovement = appData.stockMovements.reduce((value, item) => Math.max(value, Number(item.id.replace(/\D/g, "")) || 0), 0);
  appData.stockMovements.unshift({
    id: `MV-${maxMovement + 1}`,
    partId,
    type,
    quantity,
    date: new Date().toISOString(),
    orderId: document.querySelector("#movementOrder").value,
    reference: document.querySelector("#movementReference").value.trim(),
    responsible: document.querySelector("#movementResponsible").value.trim() || "Leonardo Acuña",
    unitCost,
    stockAfter: newStock,
    notes: document.querySelector("#movementNotes").value.trim()
  });
  persistInventory();
  closeModal("stockMovementModal");
  renderPartsModule();
  showToast("Movimiento registrado", `${presentation.sign}${quantity} ${part.unit} · ${part.name}`, presentation.isEntry ? "plus" : "arrow");
}

function openModal(id) {
  const modal = document.querySelector(`#${id}`);
  if (!modal) return;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  const modal = document.querySelector(`#${id}`);
  if (!modal) return;
  modal.hidden = true;
  if (!document.querySelector(".modal-backdrop:not([hidden])")) document.body.style.overflow = "";
}

function exportPartsCsv() {
  const rows = getFilteredParts();
  const header = ["Código", "Nombre", "Marca", "Categoría", "Stock", "Unidad", "Mínimo", "Máximo", "Ubicación", "Costo promedio", "Precio venta", "Valor stock", "Proveedor", "Estado"];
  const data = rows.map((part) => [part.sku, part.name, part.brand, part.category, part.stock, part.unit, part.minStock, part.maxStock, part.location, part.averageCost.toFixed(2), part.salePrice.toFixed(2), (part.stock * part.averageCost).toFixed(2), part.supplier, stockStatusConfig[getStockStatus(part)].label]);
  const csv = [header, ...data].map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n");
  downloadTextFile(`\ufeff${csv}`, `repuestos-${new Date().toISOString().slice(0, 10)}.csv`, "text/csv;charset=utf-8");
  showToast("Inventario exportado", `${rows.length} repuestos incluidos.`, "download");
}

function bindHistoryPartsEvents() {
  const rerenderHistory = debounce(() => { historyState.page = 1; renderHistoryModule(); }, 120);
  ["historySearch", "historyDateFrom", "historyDateTo", "historyStatusFilter", "historyMechanicFilter", "historyMinCost", "historyMaxCost", "historySort"].forEach((id) => {
    const element = document.querySelector(`#${id}`);
    element.addEventListener(element.tagName === "INPUT" ? "input" : "change", rerenderHistory);
  });
  document.querySelector("#historyClearFilters").addEventListener("click", clearHistoryFilters);
  document.querySelector("#historyFilterToggle").addEventListener("click", () => {
    const grid = document.querySelector("#historyFilterGrid");
    grid.hidden = !grid.hidden;
    document.querySelector("#historyFilterToggle").setAttribute("aria-expanded", String(!grid.hidden));
  });
  document.querySelector("#historyExportButton").addEventListener("click", () => {
    const rows = getFilteredHistory();
    downloadTextFile(`\ufeff${historyToCsv(rows)}`, `historial-taller-${new Date().toISOString().slice(0, 10)}.csv`, "text/csv;charset=utf-8");
    showToast("Historial exportado", `${rows.length} servicios incluidos.`, "download");
  });
  document.querySelector("#historyReportButton").addEventListener("click", printHistoryPeriod);
  document.querySelector("#historyDetailPrint").addEventListener("click", () => {
    document.body.classList.add("printing-voucher");
    window.print();
    window.setTimeout(() => document.body.classList.remove("printing-voucher"), 300);
  });
  document.querySelector("#historyDetailExport").addEventListener("click", () => {
    const order = appData.history.find((item) => item.id === historyState.currentDetailId);
    if (order) downloadTextFile(JSON.stringify(order, null, 2), `${order.id}-${order.plate}.json`, "application/json;charset=utf-8");
  });

  const rerenderParts = debounce(renderPartsModule, 120);
  ["partsSearch", "partsCategoryFilter", "partsStockFilter", "partsSupplierFilter", "partsLocationFilter"].forEach((id) => {
    const element = document.querySelector(`#${id}`);
    element.addEventListener(element.tagName === "INPUT" ? "input" : "change", rerenderParts);
  });
  document.querySelector("#partsClearFilters").addEventListener("click", clearPartsFilters);
  document.querySelector("#partsTableViewButton").addEventListener("click", () => setPartsView("table"));
  document.querySelector("#partsCardViewButton").addEventListener("click", () => setPartsView("cards"));
  document.querySelector("#partsNewButton").addEventListener("click", () => openPartEditor());
  document.querySelector("#partsMovementButton").addEventListener("click", () => openMovementModal());
  document.querySelector("#partsExportButton").addEventListener("click", exportPartsCsv);
  document.querySelector("#partSaveButton").addEventListener("click", savePart);
  document.querySelector("#movementSaveButton").addEventListener("click", saveStockMovement);
  document.querySelector("#viewAllMovements").addEventListener("click", () => openModal("movementsModal"));
  ["movementPartId", "movementType", "movementQuantity"].forEach((id) => document.querySelector(`#${id}`).addEventListener("input", updateMovementPreview));

  document.addEventListener("click", (event) => {
    const detailButton = event.target.closest("[data-history-detail]");
    const pageButton = event.target.closest("[data-history-page]");
    const editButton = event.target.closest("[data-part-edit]");
    const moveButton = event.target.closest("[data-part-move]");
    const deleteButton = event.target.closest("[data-part-delete]");
    const restockButton = event.target.closest("[data-restock-part]");
    const closeButton = event.target.closest("[data-close-modal]");

    if (detailButton) openHistoryDetail(detailButton.dataset.historyDetail);
    if (pageButton && !pageButton.disabled) {
      historyState.page = Number(pageButton.dataset.historyPage);
      renderHistoryModule();
      document.querySelector("#historyView .data-panel").scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (editButton) openPartEditor(editButton.dataset.partEdit);
    if (moveButton) openMovementModal(moveButton.dataset.partMove, "salida");
    if (deleteButton) deletePart(deleteButton.dataset.partDelete);
    if (restockButton) openMovementModal(restockButton.dataset.restockPart, "entrada");
    if (closeButton) closeModal(closeButton.dataset.closeModal);
    if (event.target.classList.contains("modal-backdrop")) closeModal(event.target.id);
  });
}

function initializeTheme() {
  let savedTheme = null;
  try {
    savedTheme = localStorage.getItem("torqueflow-theme");
  } catch (error) {
    console.warn("No se pudo leer el tema guardado.", error);
  }
  const preferredTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  applyTheme(savedTheme || preferredTheme);
}

function initializeApp() {
  initializeInventoryStorage();
  initializeTheme();
  renderMetrics();
  renderPriorityOrders();
  renderAlerts();
  renderActivity();
  renderGoal();
  renderFinanceSummary();
  bindEvents();
  bindHistoryPartsEvents();
  populateHistoryMechanics();
  populatePartsFilters();
  renderPartsModule();
  updateClock();
  window.setInterval(updateClock, 1000);
  const initialView = window.location.hash.replace("#", "");
  if (["historial", "repuestos"].includes(initialView)) setActiveView(initialView);
  else requestAnimationFrame(drawAllCharts);
}

document.addEventListener("DOMContentLoaded", initializeApp);
