/* =========================================================
   TorqueFlow — Gestión integral de taller
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



const serviceCatalogData = [
  { id: "SRV-001", category: "mantenimiento", name: "Mantenimiento preventivo", description: "Cambio de aceite, filtro y revisión de puntos básicos.", price: 180, hours: 2, icon: "wrench" },
  { id: "SRV-002", category: "motor", name: "Diagnóstico electrónico", description: "Escaneo, lectura de códigos y diagnóstico inicial.", price: 120, hours: 1, icon: "gauge" },
  { id: "SRV-003", category: "frenos", name: "Servicio de frenos", description: "Inspección, limpieza y regulación del sistema.", price: 160, hours: 2, icon: "shield" },
  { id: "SRV-004", category: "frenos", name: "Cambio de pastillas", description: "Desmontaje, instalación y asentamiento de pastillas.", price: 130, hours: 1.5, icon: "shield" },
  { id: "SRV-005", category: "suspension", name: "Diagnóstico de suspensión", description: "Revisión de amortiguadores, rótulas, terminales y bujes.", price: 100, hours: 1, icon: "car" },
  { id: "SRV-006", category: "motor", name: "Afinamiento de motor", description: "Revisión de encendido, admisión y parámetros de operación.", price: 240, hours: 3, icon: "gauge" },
  { id: "SRV-007", category: "transmision", name: "Cambio de kit de embrague", description: "Desmontaje de caja, instalación y calibración.", price: 650, hours: 8, icon: "wrench" },
  { id: "SRV-008", category: "electrico", name: "Diagnóstico eléctrico", description: "Pruebas de carga, continuidad, batería y alternador.", price: 140, hours: 2, icon: "trending" },
  { id: "SRV-009", category: "refrigeracion", name: "Servicio de refrigeración", description: "Limpieza, purga y revisión de fugas del sistema.", price: 190, hours: 2.5, icon: "gauge" },
  { id: "SRV-010", category: "motor", name: "Prueba de compresión", description: "Medición de cilindros y evaluación del sellado interno.", price: 130, hours: 1.5, icon: "trending" },
  { id: "SRV-011", category: "direccion", name: "Alineamiento y dirección", description: "Inspección de dirección y preparación para alineamiento.", price: 110, hours: 1.5, icon: "car" },

  { id: "SRV-013", category: "direccion", name: "Diagnóstico de dirección", description: "Revisión de terminales, cremallera, bomba, fugas y holguras.", price: 120, hours: 1.5, icon: "car" },
  { id: "SRV-014", category: "transmision", name: "Diagnóstico de transmisión", description: "Prueba funcional, inspección de fugas, ruidos y accionamiento.", price: 180, hours: 2.5, icon: "wrench" },
  { id: "SRV-015", category: "refrigeracion", name: "Limpieza de sistema de refrigeración", description: "Drenaje, lavado, purga, refrigerante y control de temperatura.", price: 220, hours: 3, icon: "gauge" },
  { id: "SRV-016", category: "climatizacion", name: "Diagnóstico de aire acondicionado", description: "Prueba de presión, temperatura, fugas y control eléctrico.", price: 150, hours: 2, icon: "gauge" },
  { id: "SRV-017", category: "electrico", name: "Prueba de batería y alternador", description: "Medición de arranque, carga, consumo y caída de tensión.", price: 80, hours: 1, icon: "trending" },
  { id: "SRV-018", category: "suspension", name: "Cambio de amortiguadores", description: "Desmontaje, instalación, torque y verificación de altura.", price: 320, hours: 4, icon: "car" },
  { id: "SRV-019", category: "motor", name: "Reparación de culata", description: "Desmontaje, armado, calibración y pruebas posteriores.", price: 950, hours: 14, icon: "wrench" },
  { id: "SRV-020", category: "mantenimiento", name: "Mantenimiento integral", description: "Servicio completo con inspección multipunto y reporte técnico.", price: 360, hours: 4.5, icon: "clipboard" },
  { id: "SRV-012", category: "mantenimiento", name: "Cambio de aceite de caja", description: "Drenaje, llenado y verificación de fugas.", price: 120, hours: 1.5, icon: "wrench" }
];

const serviceCategories = [
  { id: "todos", label: "Todos" },
  { id: "mantenimiento", label: "Mantenimiento" },
  { id: "motor", label: "Motor" },
  { id: "frenos", label: "Frenos" },
  { id: "suspension", label: "Suspensión" },
  { id: "direccion", label: "Dirección" },
  { id: "transmision", label: "Transmisión" },
  { id: "electrico", label: "Eléctrico" },
  { id: "refrigeracion", label: "Refrigeración" },
  { id: "climatizacion", label: "Climatización" }
];

const existingClients = [
  { name: "Carlos Mendoza", document: "45872103", phone: "987 221 410", email: "carlos.mendoza@email.com" },
  { name: "María Torres", document: "47419328", phone: "965 348 201", email: "maria.torres@email.com" },
  { name: "Andrea Salazar", document: "70192844", phone: "944 522 716", email: "andrea.salazar@email.com" },
  { name: "Pablo Ríos", document: "42775102", phone: "975 631 089", email: "" }
];

const newOrderState = {
  selectedServices: new Map(),
  photos: [],
  category: "todos",
  lastGeneratedOrder: null,
  draftTimer: null
};

const workOrdersState = {
  viewMode: "kanban",
  search: "",
  filters: { status: "all", mechanic: "all", priority: "all", cost: "all" },
  sort: "priority",
  selected: new Set(),
  draggedOrderId: null,
  editorOrderId: null,
  editorDraft: null,
  editorTab: "summary",
  timerInterval: null,
  restoredFromStorage: false
};

const workOrderDetailsSeed = {
  "OT-1048": {
    diagnosis: "Pérdida de compresión y recalentamiento. Se detectó deformación de culata y fuga en la junta.",
    notes: "Confirmar prueba hidráulica antes del montaje. Cliente solicita fotografías del proceso.",
    approvalStatus: "approved", paymentStatus: "partial", laborCost: 420, otherCost: 0, discount: 0, workSeconds: 12600,
    parts: [
      { id: "P-1048-1", name: "Juego de empaquetaduras", qty: 1, unitCost: 360, supplier: "MotorParts" },
      { id: "P-1048-2", name: "Pernos de culata", qty: 1, unitCost: 220, supplier: "Repuestos Norte" }
    ],
    externalWorks: [
      { id: "EXT-1048-1", type: "Rectificadora", vendor: "Rectificaciones El Norte", description: "Cepillado, prueba hidráulica y asentado de válvulas", outAt: "2026-07-31T09:20:00-05:00", returnAt: null, cost: 320, status: "in_progress" }
    ]
  },
  "OT-1047": {
    diagnosis: "Embrague patina bajo carga y el pedal presenta recorrido irregular.", notes: "Esperando llegada del kit confirmado por el proveedor.",
    approvalStatus: "approved", paymentStatus: "pending", laborCost: 200, otherCost: 0, discount: 0, workSeconds: 5400,
    parts: [{ id: "P-1047-1", name: "Kit de embrague", qty: 1, unitCost: 510, supplier: "Autopartes San José" }], externalWorks: []
  },
  "OT-1046": {
    diagnosis: "Ruido delantero al pasar irregularidades. Se requiere desmontaje para validar rótulas y bujes.", notes: "Cotización aún no aprobada.",
    approvalStatus: "pending", paymentStatus: "pending", laborCost: 180, otherCost: 0, discount: 0, workSeconds: 2700, parts: [], externalWorks: []
  },
  "OT-1045": {
    diagnosis: "Mantenimiento por kilometraje. Filtros saturados y aceite próximo al límite de servicio.", notes: "Vehículo listo para entrega.",
    approvalStatus: "approved", paymentStatus: "paid", laborCost: 140, otherCost: 0, discount: 0, workSeconds: 6300,
    parts: [
      { id: "P-1045-1", name: "Aceite 5W-30", qty: 4, unitCost: 28, supplier: "Lubricentro Central" },
      { id: "P-1045-2", name: "Filtro de aceite", qty: 1, unitCost: 32, supplier: "Lubricentro Central" },
      { id: "P-1045-3", name: "Filtro de aire", qty: 1, unitCost: 24, supplier: "Lubricentro Central" }
    ], externalWorks: []
  },
  "OT-1044": {
    diagnosis: "Falla eléctrica intermitente en luces y elevavidrios. Se inspeccionará alimentación principal y tierras.", notes: "Revisar instalación de accesorios no originales.",
    approvalStatus: "approved", paymentStatus: "pending", laborCost: 190, otherCost: 0, discount: 0, workSeconds: 1800, parts: [], externalWorks: []
  },
  "OT-1043": {
    diagnosis: "Vibración al frenar y espesor de pastillas por debajo del mínimo.", notes: "Proveedor confirmó discos para esta tarde.",
    approvalStatus: "approved", paymentStatus: "partial", laborCost: 150, otherCost: 0, discount: 0, workSeconds: 3900,
    parts: [{ id: "P-1043-1", name: "Juego de pastillas delanteras", qty: 1, unitCost: 160, supplier: "Frenos Chiclayo" }, { id: "P-1043-2", name: "Discos delanteros", qty: 2, unitCost: 75, supplier: "Frenos Chiclayo" }], externalWorks: []
  },
  "OT-1042": {
    diagnosis: "Desgaste irregular de pastillas y líquido de frenos contaminado.", notes: "Trabajo finalizado y probado en ruta.",
    approvalStatus: "approved", paymentStatus: "paid", laborCost: 190, otherCost: 0, discount: 0, workSeconds: 7200,
    parts: [{ id: "P-1042-1", name: "Pastillas delanteras", qty: 1, unitCost: 260, supplier: "EuroParts" }, { id: "P-1042-2", name: "Líquido DOT 4", qty: 2, unitCost: 70, supplier: "EuroParts" }], externalWorks: []
  }
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
  clientsView: document.querySelector("#clientsView"),
  settingsView: document.querySelector("#settingsView"),
  placeholderView: document.querySelector("#placeholderView"),
  placeholderTitle: document.querySelector("#placeholderTitle"),
  placeholderText: document.querySelector("#placeholderText"),
  toastRegion: document.querySelector("#toastRegion"),
  newOrderView: document.querySelector("#newOrderView"),
  newOrderForm: document.querySelector("#newOrderForm"),
  serviceCatalog: document.querySelector("#serviceCatalog"),
  serviceCategories: document.querySelector("#serviceCategories"),
  serviceSearch: document.querySelector("#serviceSearch"),
  selectedServices: document.querySelector("#selectedServices"),
  quoteEmpty: document.querySelector("#quoteEmpty"),
  jsonPreviewDialog: document.querySelector("#jsonPreviewDialog"),
  orderSuccessDialog: document.querySelector("#orderSuccessDialog"),
  workOrdersView: document.querySelector("#workOrdersView"),
  workOrdersMetrics: document.querySelector("#workOrdersMetrics"),
  ordersKanban: document.querySelector("#ordersKanban"),
  ordersTableView: document.querySelector("#ordersTableView"),
  ordersTableBody: document.querySelector("#ordersTableBody"),
  ordersEmptyState: document.querySelector("#ordersEmptyState"),
  orderEditorDialog: document.querySelector("#orderEditorDialog"),
  orderEditorForm: document.querySelector("#orderEditorForm")
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

function safeStorageGet(key) {
  try { return window.localStorage.getItem(key); }
  catch (error) { console.warn(`Almacenamiento local no disponible para ${key}.`, error); return null; }
}

function safeStorageSet(key, value) {
  try { window.localStorage.setItem(key, value); return true; }
  catch (error) { console.warn(`No se pudo guardar ${key}.`, error); return false; }
}

function safeStorageRemove(key) {
  try { window.localStorage.removeItem(key); return true; }
  catch (error) { console.warn(`No se pudo eliminar ${key}.`, error); return false; }
}

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
  const validViews = ["dashboard", "nueva-orden", "ordenes", "historial", "repuestos", "clientes", "configuracion"];
  const validView = validViews.includes(viewName) ? viewName : "dashboard";
  const isDashboard = validView === "dashboard";
  const isNewOrder = validView === "nueva-orden";
  const isWorkOrders = validView === "ordenes";
  const isHistory = validView === "historial";
  const isParts = validView === "repuestos";
  const isClients = validView === "clientes";
  const isSettings = validView === "configuracion";
  const isPlaceholder = false;

  document.querySelectorAll(".nav-item[data-view]").forEach((link) => {
    const isActive = link.dataset.view === validView;
    link.classList.toggle("is-active", isActive);
    if (isActive) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  UI.dashboardView.hidden = !isDashboard;
  UI.newOrderView.hidden = !isNewOrder;
  UI.workOrdersView.hidden = !isWorkOrders;
  UI.historyView.hidden = !isHistory;
  UI.partsView.hidden = !isParts;
  UI.clientsView.hidden = !isClients;
  UI.settingsView.hidden = !isSettings;
  UI.placeholderView.hidden = !isPlaceholder;

  if (isNewOrder) {
    updateNextOrderNumber();
    updateOrderSummary();
  } else if (isWorkOrders) {
    renderWorkOrdersModule();
  } else if (isHistory) {
    renderHistoryModule();
  } else if (isParts) {
    renderPartsModule();
  } else if (isClients) {
    renderClientsModule();
  } else if (isSettings) {
    renderSettingsModule();
  } else if (isPlaceholder) {
    const copy = viewCopy[validView] || { title: "Módulo preparado", text: "Esta vista será conectada en una siguiente etapa." };
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

  const activeMatches = appData.orders
    .filter((order) => [order.id, order.plate, order.vehicle, order.client, order.phone, order.mechanic, order.service].join(" ").toLowerCase().includes(query))
    .map((item) => ({ type: "order", item }));
  const historyMatches = appData.history
    .filter((order) => [order.id, order.plate, order.vehicle, order.client, order.phone, order.service].join(" ").toLowerCase().includes(query))
    .map((item) => ({ type: "history", item }));
  const partMatches = appData.parts
    .filter((part) => [part.id, part.sku, part.barcode, part.name, part.brand, part.category, part.supplier].join(" ").toLowerCase().includes(query))
    .map((item) => ({ type: "part", item }));
  const matches = [...activeMatches, ...historyMatches, ...partMatches].slice(0, 10);

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
    return `<button class="search-result" type="button" role="option" data-search-part="${escapeHTML(item.id)}"><span class="search-result__icon"><svg><use href="#icon-box"></use></svg></span><span class="search-result__content"><strong>${highlightMatch(item.name, query)}</strong><small>${highlightMatch(`${item.sku} · ${item.category}`, query)}</small></span><span class="stock-status ${stock.className}">${item.stock} ${escapeHTML(item.unit)}</span></button>`;
  }).join("") : '<div class="search-empty">No se encontraron órdenes, clientes, vehículos o repuestos.</div>';
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


function currencyWithDecimals(value) {
  return new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: appData.workshop.currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(Number(value) || 0);
}

function getNextOrderNumber() {
  const maxId = appData.orders.reduce((max, order) => {
    const numeric = Number.parseInt(String(order.id).replace(/\D/g, ""), 10) || 0;
    return Math.max(max, numeric);
  }, 1048);
  return `OT-${String(maxId + 1).padStart(4, "0")}`;
}

function updateNextOrderNumber() {
  const element = document.querySelector("#nextOrderNumber");
  if (element) element.textContent = getNextOrderNumber();
}

function setDefaultOrderDates() {
  const entryInput = document.querySelector("#entryDateTime");
  const promiseInput = document.querySelector("#promisedDateTime");
  if (!entryInput || entryInput.value) return;
  const now = new Date();
  const promise = new Date(now.getTime() + 24 * 60 * 60 * 1000);
  const toLocalInput = (date) => {
    const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
    return local.toISOString().slice(0, 16);
  };
  entryInput.value = toLocalInput(now);
  promiseInput.value = toLocalInput(promise);
}

function renderServiceCategories() {
  if (!UI.serviceCategories) return;
  UI.serviceCategories.innerHTML = serviceCategories.map((category) => `
    <button class="${category.id === newOrderState.category ? "is-active" : ""}" type="button" data-service-category="${category.id}">${category.label}</button>
  `).join("");
}

function renderServiceCatalog() {
  if (!UI.serviceCatalog) return;
  const query = (UI.serviceSearch?.value || "").trim().toLowerCase();
  const filtered = serviceCatalogData.filter((service) => {
    const inCategory = newOrderState.category === "todos" || service.category === newOrderState.category;
    const haystack = `${service.id} ${service.name} ${service.description} ${service.category}`.toLowerCase();
    return inCategory && haystack.includes(query);
  });

  renderServiceCategories();
  document.querySelector("#catalogResultCount").textContent = filtered.length;
  document.querySelector("#selectedServiceCount").textContent = newOrderState.selectedServices.size;

  UI.serviceCatalog.innerHTML = filtered.length ? filtered.map((service) => {
    const isSelected = newOrderState.selectedServices.has(service.id);
    return `
      <button class="service-card ${isSelected ? "is-selected" : ""}" type="button" data-service-id="${service.id}" aria-pressed="${isSelected}">
        <span class="service-card__top">
          <span class="service-card__icon"><svg><use href="#icon-${service.icon}"></use></svg></span>
          <span class="service-card__check"><svg><use href="#icon-check"></use></svg></span>
        </span>
        <span><strong>${escapeHTML(service.name)}</strong><p>${escapeHTML(service.description)}</p></span>
        <span class="service-card__footer"><span>${service.hours} h aprox.</span><strong>${currencyWithDecimals(service.price)}</strong></span>
      </button>
    `;
  }).join("") : '<div class="catalog-empty">No encontramos servicios con ese filtro. Puedes agregar uno personalizado.</div>';
}

function toggleService(serviceId) {
  const service = serviceCatalogData.find((item) => item.id === serviceId);
  if (!service) return;
  if (newOrderState.selectedServices.has(serviceId)) newOrderState.selectedServices.delete(serviceId);
  else newOrderState.selectedServices.set(serviceId, { ...service });
  renderServiceCatalog();
  renderSelectedServices();
  markDraftDirty();
}

function addCustomService() {
  const nameInput = document.querySelector("#customServiceName");
  const priceInput = document.querySelector("#customServicePrice");
  const hoursInput = document.querySelector("#customServiceHours");
  const name = nameInput.value.trim();
  const price = Number(priceInput.value);
  const hours = Number(hoursInput.value);
  if (!name || price < 0 || !hours) {
    showToast("Datos incompletos", "Ingresa descripción, precio y duración del servicio.", "alert");
    return;
  }
  const id = `CUSTOM-${Date.now()}`;
  newOrderState.selectedServices.set(id, { id, name, price, hours, category: "personalizado", description: "Servicio personalizado", icon: "wrench", custom: true });
  nameInput.value = "";
  priceInput.value = "";
  hoursInput.value = "1";
  document.querySelector("#customServiceForm").hidden = true;
  renderSelectedServices();
  renderServiceCatalog();
  markDraftDirty();
}

function renderSelectedServices() {
  if (!UI.selectedServices) return;
  const services = [...newOrderState.selectedServices.values()];
  UI.quoteEmpty.hidden = services.length > 0;
  UI.selectedServices.innerHTML = services.map((service) => `
    <div class="selected-service" data-selected-service="${service.id}">
      <span class="selected-service__info"><strong>${escapeHTML(service.name)}</strong><small>${service.hours} h · ${escapeHTML(service.id)}</small></span>
      <input class="selected-service__price" type="number" min="0" step="0.01" value="${Number(service.price).toFixed(2)}" data-service-price="${service.id}" aria-label="Precio de ${escapeHTML(service.name)}">
      <button class="remove-selected-service" type="button" data-remove-service="${service.id}" aria-label="Quitar ${escapeHTML(service.name)}"><svg><use href="#icon-trash"></use></svg></button>
    </div>
  `).join("");
  document.querySelector("#selectedServiceCount").textContent = services.length;
  updateOrderSummary();
}

function getNumericValue(selector) {
  return Math.max(0, Number(document.querySelector(selector)?.value) || 0);
}

function updateOrderSummary() {
  const services = [...newOrderState.selectedServices.values()];
  const servicesSubtotal = services.reduce((sum, service) => sum + Number(service.price || 0), 0);
  const parts = getNumericValue("#partsEstimate");
  const external = getNumericValue("#externalEstimate");
  const discount = getNumericValue("#discountAmount");
  const total = Math.max(0, servicesSubtotal + parts + external - discount);
  const duration = services.reduce((sum, service) => sum + Number(service.hours || 0), 0);

  document.querySelector("#servicesSubtotal").textContent = currencyWithDecimals(servicesSubtotal);
  document.querySelector("#extrasSubtotal").textContent = currencyWithDecimals(parts + external);
  document.querySelector("#discountTotal").textContent = `- ${currencyWithDecimals(discount)}`;
  document.querySelector("#estimatedTotal").textContent = currencyWithDecimals(total);
  document.querySelector("#estimatedDuration").textContent = `Duración estimada: ${duration.toFixed(1).replace(".0", "")} h`;

  const plate = document.querySelector("#vehiclePlate")?.value.trim().toUpperCase();
  const brand = document.querySelector("#vehicleBrand")?.value;
  const model = document.querySelector("#vehicleModel")?.value.trim();
  const summary = document.querySelector("#vehicleMiniSummary");
  if (plate || brand || model) {
    summary.querySelector("strong").textContent = [plate, brand, model].filter(Boolean).join(" · ");
    summary.querySelector("small").textContent = document.querySelector("#clientName")?.value.trim() || "Cliente por completar";
  } else {
    summary.querySelector("strong").textContent = "Vehículo sin registrar";
    summary.querySelector("small").textContent = "Completa la placa, marca y modelo.";
  }

  updateBudgetHealth(total);
  updateSectionCompleteness();
  return { servicesSubtotal, parts, external, discount, total, duration };
}

function updateBudgetHealth(total) {
  const budget = getNumericValue("#authorizedBudget");
  const container = document.querySelector("#budgetHealth");
  if (!budget) {
    container.hidden = true;
    return;
  }
  container.hidden = false;
  const percentage = Math.round((total / budget) * 100);
  const capped = Math.min(100, percentage);
  document.querySelector("#budgetHealthPercent").textContent = `${percentage}%`;
  document.querySelector("#budgetHealthBar").style.setProperty("--progress", `${capped}%`);
  container.classList.toggle("is-warning", percentage >= 85 && percentage <= 100);
  container.classList.toggle("is-danger", percentage > 100);
  document.querySelector("#budgetHealthMessage").textContent = percentage > 100
    ? `La cotización excede el presupuesto en ${currencyWithDecimals(total - budget)}.`
    : percentage >= 85
      ? "La cotización está cerca del límite autorizado."
      : `Quedan ${currencyWithDecimals(budget - total)} disponibles.`;
}

function updateSectionCompleteness() {
  const customerFields = ["#clientName", "#clientPhone", "#vehiclePlate", "#vehicleBrand", "#vehicleModel"];
  const customerDone = customerFields.filter((selector) => document.querySelector(selector)?.value.trim()).length;
  const inspectionDone = document.querySelector("#entryDateTime")?.value ? 1 : 0;
  const servicesDone = document.querySelector("#initialDiagnosis")?.value.trim() && newOrderState.selectedServices.size ? 2 : (document.querySelector("#initialDiagnosis")?.value.trim() || newOrderState.selectedServices.size ? 1 : 0);
  const approvalDone = document.querySelector("#clientAuthorization")?.checked ? 1 : 0;
  const values = { customer: Math.round(customerDone / customerFields.length * 100), inspection: inspectionDone * 100, services: servicesDone * 50, approval: approvalDone * 100 };

  document.querySelectorAll("[data-completeness]").forEach((element) => {
    const value = values[element.dataset.completeness] || 0;
    element.textContent = `${value}%`;
    element.classList.toggle("is-complete", value === 100);
  });
  const steps = document.querySelectorAll(".order-progress__step");
  [values.customer, values.inspection, values.services, values.approval].forEach((value, index) => steps[index]?.classList.toggle("is-complete", value === 100));
}

function getCheckedValues(containerSelector) {
  return [...document.querySelectorAll(`${containerSelector} input:checked`)].map((input) => input.value);
}

function buildOrderPayload() {
  const totals = updateOrderSummary();
  const formData = new FormData(UI.newOrderForm);
  const promisedAt = formData.get("promisedDateTime") || null;
  const selectedServices = [...newOrderState.selectedServices.values()].map((service) => ({
    id: service.id,
    name: service.name,
    category: service.category,
    estimatedHours: Number(service.hours),
    quotedPrice: Number(service.price),
    custom: Boolean(service.custom)
  }));

  return {
    id: getNextOrderNumber(),
    createdAt: new Date().toISOString(),
    createdBy: { id: "USR-001", name: "Leonardo Acuña", role: "Administrador" },
    status: "revision",
    priority: formData.get("orderPriority"),
    customer: {
      name: formData.get("clientName")?.trim(),
      document: formData.get("clientDocument")?.trim() || null,
      phone: formData.get("clientPhone")?.trim(),
      email: formData.get("clientEmail")?.trim() || null,
      preferredChannel: formData.get("contactChannel")
    },
    vehicle: {
      plate: formData.get("vehiclePlate")?.trim().toUpperCase(),
      brand: formData.get("vehicleBrand"),
      model: formData.get("vehicleModel")?.trim(),
      year: Number(formData.get("vehicleYear")) || null,
      color: formData.get("vehicleColor")?.trim() || null,
      mileageKm: Number(formData.get("vehicleMileage")) || null,
      fuelType: formData.get("fuelType"),
      vin: formData.get("vehicleVin")?.trim().toUpperCase() || null,
      fuelLevelPercent: Number(formData.get("fuelLevel"))
    },
    reception: {
      enteredAt: formData.get("entryDateTime"),
      promisedAt,
      mechanic: formData.get("assignedMechanic"),
      visibleDamage: getCheckedValues("#damageChecks"),
      receivedAccessories: getCheckedValues("#accessoryChecks"),
      notes: formData.get("receptionNotes")?.trim() || null,
      photos: newOrderState.photos.map((photo) => ({ name: photo.name, type: photo.type, size: photo.size }))
    },
    diagnosis: {
      customerReport: formData.get("initialDiagnosis")?.trim(),
      internalNotes: formData.get("internalNotes")?.trim() || null
    },
    quotation: {
      services: selectedServices,
      servicesSubtotal: totals.servicesSubtotal,
      partsEstimate: totals.parts,
      externalWorkEstimate: totals.external,
      discount: totals.discount,
      estimatedTotal: totals.total,
      estimatedHours: totals.duration,
      authorizedBudget: getNumericValue("#authorizedBudget"),
      advancePayment: getNumericValue("#advancePayment"),
      paymentMethod: formData.get("paymentMethod")
    },
    approvals: {
      viaWhatsapp: document.querySelector("#approvalWhatsapp").checked,
      notifyProgress: document.querySelector("#notifyProgress").checked,
      allowAdditionalWork: document.querySelector("#allowExtraWork").checked,
      entryTermsAccepted: document.querySelector("#clientAuthorization").checked
    }
  };
}

function validateNewOrder() {
  const requiredSelectors = ["#clientName", "#clientPhone", "#vehiclePlate", "#vehicleBrand", "#vehicleModel", "#entryDateTime", "#initialDiagnosis"];
  let firstInvalid = null;
  requiredSelectors.forEach((selector) => {
    const input = document.querySelector(selector);
    const field = input.closest(".field");
    const invalid = !String(input.value || "").trim();
    field?.classList.toggle("is-invalid", invalid);
    if (invalid && !firstInvalid) firstInvalid = input;
  });

  const phone = document.querySelector("#clientPhone");
  const digits = phone.value.replace(/\D/g, "");
  if (digits.length < 9) {
    phone.closest(".field")?.classList.add("is-invalid");
    firstInvalid ||= phone;
  }

  if (!newOrderState.selectedServices.size) {
    showToast("Falta seleccionar servicios", "Agrega al menos un trabajo a la cotización.", "alert");
    firstInvalid ||= UI.serviceSearch;
  }

  const terms = document.querySelector("#clientAuthorization");
  terms.closest(".terms-check")?.classList.toggle("is-invalid", !terms.checked);
  if (!terms.checked) firstInvalid ||= terms;

  if (firstInvalid) {
    firstInvalid.focus({ preventScroll: true });
    firstInvalid.closest(".form-card, .terms-check")?.scrollIntoView({ behavior: "smooth", block: "center" });
    showToast("Revisa la información", "Completa los campos obligatorios marcados.", "alert");
    return false;
  }
  return true;
}

function previewOrderJson() {
  const payload = buildOrderPayload();
  document.querySelector("#jsonPreviewContent").textContent = JSON.stringify(payload, null, 2);
  UI.jsonPreviewDialog.showModal();
}

function generateOrder() {
  if (!validateNewOrder()) return;
  const payload = buildOrderPayload();
  newOrderState.lastGeneratedOrder = payload;
  appData.orders.unshift({
    id: payload.id,
    plate: payload.vehicle.plate,
    vehicle: `${payload.vehicle.brand} ${payload.vehicle.model}${payload.vehicle.year ? ` ${payload.vehicle.year}` : ""}`,
    client: payload.customer.name,
    phone: payload.customer.phone,
    status: "revision",
    mechanic: payload.reception.mechanic,
    service: payload.quotation.services.map((service) => service.name).join(", "),
    enteredAt: payload.reception.enteredAt,
    promisedAt: payload.reception.promisedAt || payload.reception.enteredAt,
    budget: payload.quotation.authorizedBudget || payload.quotation.estimatedTotal,
    currentCost: 0,
    priority: payload.priority === "urgente" ? 1 : payload.priority === "alta" ? 2 : 3,
    diagnosis: payload.diagnosis.customerReport,
    notes: payload.diagnosis.internalNotes || "",
    approvalStatus: payload.approvals.entryTermsAccepted ? "approved" : "pending",
    paymentStatus: payload.quotation.advancePayment > 0 ? "partial" : "pending",
    laborCost: 0,
    otherCost: 0,
    discount: 0,
    workSeconds: 0,
    parts: [],
    externalWorks: [],
    history: [{ id: `H-${Date.now()}`, at: payload.createdAt, type: "created", title: "Orden creada", detail: `Registrada por ${payload.createdBy.name}` }]
  });
  persistWorkOrders();
  safeStorageRemove("torqueflow-new-order-draft");
  renderMetrics();
  renderPriorityOrders();
  renderWorkOrdersModule();
  drawOrdersChart();
  document.querySelector("#successOrderNumber").textContent = payload.id;
  document.querySelector("#successOrderDescription").textContent = `${payload.vehicle.brand} ${payload.vehicle.model} · ${payload.vehicle.plate} fue registrado a nombre de ${payload.customer.name}.`;
  document.querySelector("#successOrderTotal").textContent = currencyWithDecimals(payload.quotation.estimatedTotal);
  document.querySelector("#successPromisedDate").textContent = payload.reception.promisedAt ? new Intl.DateTimeFormat("es-PE", { dateStyle: "medium", timeStyle: "short" }).format(new Date(payload.reception.promisedAt)) : "Por definir";
  UI.jsonPreviewDialog.close();
  UI.orderSuccessDialog.showModal();
}

function saveNewOrderDraft() {
  const draft = buildOrderPayload();
  safeStorageSet("torqueflow-new-order-draft", JSON.stringify(draft));
  const status = document.querySelector("#draftStatus");
  status.classList.add("is-saved");
  status.innerHTML = "<i></i> Borrador guardado";
  showToast("Borrador guardado", "Puedes continuar editándolo en este navegador.", "save");
}

function markDraftDirty() {
  const status = document.querySelector("#draftStatus");
  if (!status) return;
  status.classList.remove("is-saved");
  status.innerHTML = "<i></i> Cambios sin guardar";
}

function resetNewOrderForm() {
  UI.newOrderForm.reset();
  newOrderState.selectedServices.clear();
  newOrderState.photos.forEach((photo) => URL.revokeObjectURL(photo.url));
  newOrderState.photos = [];
  document.querySelector("#photoPreviewGrid").innerHTML = "";
  document.querySelector("#fuelLevel").value = 50;
  document.querySelector("#fuelLevelText").textContent = "50%";
  document.querySelector("#customServiceForm").hidden = true;
  document.querySelector("#existingClientBanner").hidden = true;
  document.querySelectorAll(".is-invalid").forEach((element) => element.classList.remove("is-invalid"));
  setDefaultOrderDates();
  renderServiceCatalog();
  renderSelectedServices();
  updateNextOrderNumber();
  markDraftDirty();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleClientLookup() {
  const name = document.querySelector("#clientName").value.trim().toLowerCase();
  const match = existingClients.find((client) => client.name.toLowerCase() === name);
  const banner = document.querySelector("#existingClientBanner");
  if (!match) {
    banner.hidden = true;
    return;
  }
  document.querySelector("#clientDocument").value = match.document;
  document.querySelector("#clientPhone").value = match.phone;
  document.querySelector("#clientEmail").value = match.email;
  document.querySelector("#existingClientText").textContent = `${match.phone} · Datos completados automáticamente.`;
  banner.hidden = false;
  updateOrderSummary();
}

function handlePhotoSelection(files) {
  const availableSlots = 6 - newOrderState.photos.length;
  [...files].slice(0, availableSlots).forEach((file) => {
    if (!file.type.startsWith("image/")) return;
    newOrderState.photos.push({ name: file.name, type: file.type, size: file.size, url: URL.createObjectURL(file) });
  });
  renderPhotoPreviews();
  if (files.length > availableSlots) showToast("Límite de fotografías", "Solo se permiten hasta 6 evidencias por orden.", "camera");
}

function renderPhotoPreviews() {
  const grid = document.querySelector("#photoPreviewGrid");
  grid.innerHTML = newOrderState.photos.map((photo, index) => `
    <figure class="photo-thumb"><img src="${photo.url}" alt="Evidencia ${index + 1}: ${escapeHTML(photo.name)}"><button type="button" data-remove-photo="${index}" aria-label="Eliminar foto"><svg><use href="#icon-x"></use></svg></button></figure>
  `).join("");
}

function initializeNewOrderModule() {
  if (!UI.newOrderForm) return;
  setDefaultOrderDates();
  renderServiceCatalog();
  renderSelectedServices();
  updateNextOrderNumber();
  updateSectionCompleteness();
}


/* =========================================================
   Módulo de catálogo y control de órdenes de trabajo
   ========================================================= */
const mechanicNames = ["José Ramírez", "Luis Pérez", "Miguel Rojas", "Sin asignar"];
const priorityConfig = {
  1: { label: "Urgente", className: "1" },
  2: { label: "Alta", className: "2" },
  3: { label: "Normal", className: "3" },
  4: { label: "Baja", className: "4" },
  5: { label: "Programada", className: "5" }
};

function deepClone(value) {
  return typeof structuredClone === "function" ? structuredClone(value) : JSON.parse(JSON.stringify(value));
}

function hydrateWorkOrders() {
  if (!workOrdersState.restoredFromStorage) {
    workOrdersState.restoredFromStorage = true;
    try {
      const storedOrders = JSON.parse(safeStorageGet("torqueflow-work-orders") || "null");
      if (Array.isArray(storedOrders) && storedOrders.length) appData.orders.splice(0, appData.orders.length, ...storedOrders);
    } catch (error) {
      console.warn("No se pudo restaurar el catálogo local de órdenes.", error);
    }
  }
  appData.orders.forEach((order) => {
    const seed = workOrderDetailsSeed[order.id] || {};
    order.diagnosis ??= seed.diagnosis || `Diagnóstico inicial pendiente para ${order.service}.`;
    order.notes ??= seed.notes || "";
    order.approvalStatus ??= seed.approvalStatus || "pending";
    order.paymentStatus ??= seed.paymentStatus || "pending";
    order.laborCost ??= seed.laborCost ?? Number(order.currentCost || 0);
    order.otherCost ??= seed.otherCost || 0;
    order.discount ??= seed.discount || 0;
    order.workSeconds ??= seed.workSeconds || 0;
    order.timerStartedAt ??= null;
    order.parts ??= deepClone(seed.parts || []);
    order.externalWorks ??= deepClone(seed.externalWorks || []);
    order.history ??= [
      { id: `H-${order.id}-1`, at: order.enteredAt, type: "created", title: "Ingreso registrado", detail: `${order.vehicle} ingresó al taller.` },
      { id: `H-${order.id}-2`, at: order.enteredAt, type: "assigned", title: "Mecánico asignado", detail: order.mechanic || "Sin asignar" }
    ];
    order.currentCost = calculateOrderCosts(order).total;
  });
}

function persistWorkOrders() {
  safeStorageSet("torqueflow-work-orders", JSON.stringify(appData.orders));
}

function calculateOrderCosts(order) {
  const parts = (order.parts || []).reduce((sum, item) => sum + Number(item.qty || 0) * Number(item.unitCost || 0), 0);
  const external = (order.externalWorks || []).reduce((sum, item) => sum + Number(item.cost || 0), 0);
  const labor = Math.max(0, Number(order.laborCost || 0));
  const other = Math.max(0, Number(order.otherCost || 0));
  const discount = Math.max(0, Number(order.discount || 0));
  return { parts, external, labor, other, discount, total: Math.max(0, parts + external + labor + other - discount) };
}

function getCostHealth(order) {
  const total = calculateOrderCosts(order).total;
  const budget = Math.max(0, Number(order.budget || 0));
  const percentage = budget ? Math.round(total / budget * 100) : 0;
  if (budget && percentage > 100) return { key: "exceeded", label: "Excedido", percentage, className: "is-exceeded" };
  if (budget && percentage >= 85) return { key: "risk", label: "En riesgo", percentage, className: "is-risk" };
  return { key: "healthy", label: "Controlado", percentage, className: "is-healthy" };
}

function isWorkOrderDelayed(order) {
  if (order.status === "listo") return false;
  return order.status === "refaccionaria" || (order.promisedAt && new Date(order.promisedAt).getTime() < Date.now());
}

function formatDateShort(value) {
  if (!value) return "Sin fecha";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Sin fecha";
  return new Intl.DateTimeFormat("es-PE", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }).format(date);
}

function toDateTimeLocal(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 16);
}

function hoursBetween(start, end = new Date()) {
  if (!start) return 0;
  const startTime = new Date(start).getTime();
  const endTime = end instanceof Date ? end.getTime() : new Date(end).getTime();
  if (!Number.isFinite(startTime) || !Number.isFinite(endTime)) return 0;
  return Math.max(0, (endTime - startTime) / 3600000);
}

function formatDuration(hours) {
  if (!Number.isFinite(hours) || hours <= 0) return "0 h";
  if (hours < 1) return `${Math.round(hours * 60)} min`;
  const whole = Math.floor(hours);
  const minutes = Math.round((hours - whole) * 60);
  return minutes ? `${whole} h ${minutes} min` : `${whole} h`;
}

function renderWorkOrdersMetrics() {
  if (!UI.workOrdersMetrics) return;
  const active = appData.orders.filter((order) => order.status !== "listo").length;
  const waiting = appData.orders.filter((order) => order.status === "esperando" || order.status === "refaccionaria").length;
  const delayed = appData.orders.filter(isWorkOrderDelayed).length;
  const risk = appData.orders.filter((order) => ["risk", "exceeded"].includes(getCostHealth(order).key)).length;
  const committed = appData.orders.reduce((sum, order) => sum + calculateOrderCosts(order).total, 0);
  const stats = [
    { label: "Órdenes activas", value: active, helper: `${appData.orders.length} registradas`, icon: "wrench", color: "#2f8cff", soft: "rgba(47,140,255,.12)" },
    { label: "Esperas externas", value: waiting, helper: "Repuestos o terceros", icon: "clock", color: "#ff8a2b", soft: "rgba(255,138,43,.12)" },
    { label: "Entregas demoradas", value: delayed, helper: delayed ? "Requieren seguimiento" : "Todo a tiempo", icon: "alert", color: "#ff6577", soft: "rgba(255,101,119,.12)" },
    { label: "Costos en riesgo", value: risk, helper: "Sobre 85% del presupuesto", icon: "wallet", color: "#f6c85f", soft: "rgba(246,200,95,.12)" },
    { label: "Capital comprometido", value: currencyWithDecimals(committed), helper: "Costo real acumulado", icon: "dollar", color: "#34c987", soft: "rgba(52,201,135,.12)" }
  ];
  UI.workOrdersMetrics.innerHTML = stats.map((stat) => `<article class="work-order-stat" style="--stat-color:${stat.color};--stat-soft:${stat.soft}"><span class="work-order-stat__icon"><svg><use href="#icon-${stat.icon}"></use></svg></span><div><span>${escapeHTML(stat.label)}</span><strong>${escapeHTML(stat.value)}</strong><small>${escapeHTML(stat.helper)}</small></div></article>`).join("");
}

function populateMechanicFilters() {
  const options = mechanicNames.map((name) => `<option value="${escapeHTML(name)}">${escapeHTML(name)}</option>`).join("");
  const filter = document.querySelector("#ordersMechanicFilter");
  const bulk = document.querySelector("#bulkMechanic");
  if (filter && filter.options.length <= 1) filter.insertAdjacentHTML("beforeend", options);
  if (bulk && bulk.options.length <= 1) bulk.insertAdjacentHTML("beforeend", options);
}

function getFilteredWorkOrders() {
  const query = workOrdersState.search.trim().toLowerCase();
  const filtered = appData.orders.filter((order) => {
    const text = [order.id, order.plate, order.vehicle, order.client, order.phone, order.mechanic, order.service, order.diagnosis].join(" ").toLowerCase();
    const health = getCostHealth(order);
    return (!query || text.includes(query))
      && (workOrdersState.filters.status === "all" || order.status === workOrdersState.filters.status)
      && (workOrdersState.filters.mechanic === "all" || order.mechanic === workOrdersState.filters.mechanic)
      && (workOrdersState.filters.priority === "all" || String(order.priority) === workOrdersState.filters.priority)
      && (workOrdersState.filters.cost === "all" || health.key === workOrdersState.filters.cost);
  });
  return filtered.sort((a, b) => {
    if (workOrdersState.sort === "promise") return new Date(a.promisedAt) - new Date(b.promisedAt);
    if (workOrdersState.sort === "budget-desc") return calculateOrderCosts(b).total - calculateOrderCosts(a).total;
    if (workOrdersState.sort === "recent") return new Date(b.enteredAt) - new Date(a.enteredAt);
    return Number(a.priority || 5) - Number(b.priority || 5) || new Date(a.promisedAt) - new Date(b.promisedAt);
  });
}

function getOrderAlerts(order) {
  const alerts = [];
  const health = getCostHealth(order);
  if (health.key === "exceeded") alerts.push({ text: `Presupuesto +${health.percentage - 100}%`, danger: true });
  else if (health.key === "risk") alerts.push({ text: `Costo al ${health.percentage}%`, danger: false });
  if (isWorkOrderDelayed(order)) alerts.push({ text: order.status === "refaccionaria" ? "Seguimiento externo" : "Entrega vencida", danger: true });
  if (order.approvalStatus === "pending") alerts.push({ text: "Aprobación pendiente", danger: false });
  return alerts;
}

function workOrderCardTemplate(order) {
  const costs = calculateOrderCosts(order);
  const health = getCostHealth(order);
  const priority = priorityConfig[order.priority] || priorityConfig[5];
  const alerts = getOrderAlerts(order);
  const selected = workOrdersState.selected.has(order.id);
  return `<article class="work-order-card ${selected ? "is-selected" : ""}" draggable="true" data-drag-order="${escapeHTML(order.id)}" data-work-order-open="${escapeHTML(order.id)}">
    <div class="work-order-card__top"><div class="work-order-card__identity"><label class="order-select" data-order-select><input type="checkbox" data-select-work-order="${escapeHTML(order.id)}" ${selected ? "checked" : ""} aria-label="Seleccionar ${escapeHTML(order.id)}"></label><div><strong>${escapeHTML(order.id)}</strong><small>Ingreso ${formatDateShort(order.enteredAt)}</small></div></div><span class="priority-badge priority-badge--${priority.className}">${priority.label}</span></div>
    <div class="work-order-card__vehicle"><strong>${escapeHTML(order.plate)}</strong><span>${escapeHTML(order.vehicle)}</span></div>
    <div class="work-order-card__service">${escapeHTML(order.service)}</div>
    <div class="work-order-card__meta"><div><span>Mecánico</span><strong>${escapeHTML(order.mechanic || "Sin asignar")}</strong></div><div><span>Entrega</span><strong>${formatDateShort(order.promisedAt)}</strong></div></div>
    ${alerts.length ? `<div class="work-order-card__alerts">${alerts.map((alert) => `<span class="mini-alert ${alert.danger ? "is-danger" : ""}"><svg><use href="#icon-alert"></use></svg>${escapeHTML(alert.text)}</span>`).join("")}</div>` : ""}
    <div class="card-cost-control ${health.className}"><div class="card-cost-control__head"><span>Costo real</span><strong>${health.percentage}%</strong></div><div class="progress"><span style="--progress:${Math.min(100, health.percentage)}%"></span></div><div class="card-cost-control__foot"><strong>${currencyWithDecimals(costs.total)}</strong><span>de ${currencyWithDecimals(order.budget)}</span></div></div>
    <div class="work-order-card__footer"><div class="card-client"><strong>${escapeHTML(order.client)}</strong><span>${escapeHTML(order.phone || "Sin teléfono")}</span></div><button class="card-open-button" type="button" data-work-order-open="${escapeHTML(order.id)}">Editar <svg><use href="#icon-chevron"></use></svg></button></div>
  </article>`;
}

function renderOrdersKanban(orders) {
  const statuses = ["revision", "esperando", "refaccionaria", "listo"];
  UI.ordersKanban.innerHTML = statuses.map((statusKey) => {
    const status = statusConfig[statusKey];
    const items = orders.filter((order) => order.status === statusKey);
    const amount = items.reduce((sum, order) => sum + calculateOrderCosts(order).total, 0);
    return `<section class="kanban-column" data-drop-status="${statusKey}" style="--column-color:${status.color}"><header class="kanban-column__header"><div class="kanban-column__title"><i></i><strong>${status.label}</strong><span>${items.length}</span></div><small class="kanban-column__amount">${currencyWithDecimals(amount)}</small></header><div class="kanban-column__body">${items.length ? items.map(workOrderCardTemplate).join("") : '<div class="kanban-empty">Arrastra una orden aquí o crea una nueva.</div>'}</div></section>`;
  }).join("");
}

function renderOrdersTable(orders) {
  UI.ordersTableBody.innerHTML = orders.map((order) => {
    const costs = calculateOrderCosts(order);
    const health = getCostHealth(order);
    const status = statusConfig[order.status];
    const selected = workOrdersState.selected.has(order.id);
    return `<tr class="${selected ? "is-selected" : ""}" data-work-order-open="${escapeHTML(order.id)}"><td><label class="order-select" data-order-select><input type="checkbox" data-select-work-order="${escapeHTML(order.id)}" ${selected ? "checked" : ""} aria-label="Seleccionar ${escapeHTML(order.id)}"></label></td><td><div class="table-order-main"><strong>${escapeHTML(order.id)} · ${escapeHTML(order.plate)}</strong><span>${escapeHTML(order.vehicle)}</span></div></td><td><div class="table-client-main"><strong>${escapeHTML(order.client)}</strong><span>${escapeHTML(order.service)}</span></div></td><td><span class="pill pill--${status.pill}">${status.label}</span></td><td>${escapeHTML(order.mechanic || "Sin asignar")}</td><td>${formatDateShort(order.promisedAt)}</td><td><div class="table-cost"><div><strong>${currencyWithDecimals(costs.total)}</strong><span>${health.percentage}% de ${currencyWithDecimals(order.budget)}</span></div><div class="progress"><span style="--progress:${Math.min(100, health.percentage)}%"></span></div></div></td><td><button class="icon-button" type="button" data-work-order-open="${escapeHTML(order.id)}" aria-label="Editar ${escapeHTML(order.id)}"><svg><use href="#icon-edit"></use></svg></button></td></tr>`;
  }).join("");
}

function updateBulkActions() {
  const count = workOrdersState.selected.size;
  const bulk = document.querySelector("#bulkActions");
  if (!bulk) return;
  bulk.hidden = count === 0;
  document.querySelector("#bulkSelectedCount").textContent = `${count} seleccionada${count === 1 ? "" : "s"}`;
}

function renderWorkOrdersModule() {
  if (!UI.workOrdersView) return;
  hydrateWorkOrders();
  populateMechanicFilters();
  renderWorkOrdersMetrics();
  const orders = getFilteredWorkOrders();
  const hasFilters = workOrdersState.search || Object.values(workOrdersState.filters).some((value) => value !== "all");
  document.querySelector("#ordersResultCount").textContent = `${orders.length} orden${orders.length === 1 ? "" : "es"}`;
  document.querySelector("#ordersFilterSummary").textContent = hasFilters ? "Resultado de búsqueda y filtros aplicados" : "Mostrando toda la operación";
  UI.ordersKanban.hidden = workOrdersState.viewMode !== "kanban" || orders.length === 0;
  UI.ordersTableView.hidden = workOrdersState.viewMode !== "table" || orders.length === 0;
  UI.ordersEmptyState.hidden = orders.length > 0;
  renderOrdersKanban(orders);
  renderOrdersTable(orders);
  document.querySelectorAll("[data-orders-view]").forEach((button) => {
    const active = button.dataset.ordersView === workOrdersState.viewMode;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  const selectAll = document.querySelector("#selectAllVisibleOrders");
  selectAll.checked = orders.length > 0 && orders.every((order) => workOrdersState.selected.has(order.id));
  selectAll.indeterminate = orders.some((order) => workOrdersState.selected.has(order.id)) && !selectAll.checked;
  updateBulkActions();
}

function resetWorkOrderFilters() {
  workOrdersState.search = "";
  workOrdersState.filters = { status: "all", mechanic: "all", priority: "all", cost: "all" };
  workOrdersState.sort = "priority";
  document.querySelector("#ordersCatalogSearch").value = "";
  document.querySelector("#ordersStatusFilter").value = "all";
  document.querySelector("#ordersMechanicFilter").value = "all";
  document.querySelector("#ordersPriorityFilter").value = "all";
  document.querySelector("#ordersCostFilter").value = "all";
  document.querySelector("#ordersSort").value = "priority";
  renderWorkOrdersModule();
}

function addOrderHistory(order, type, title, detail) {
  order.history ??= [];
  order.history.unshift({ id: `H-${Date.now()}-${Math.random().toString(16).slice(2)}`, at: new Date().toISOString(), type, title, detail });
}

function changeOrdersStatus(orderIds, status) {
  if (!status) return;
  orderIds.forEach((id) => {
    const order = appData.orders.find((item) => item.id === id);
    if (!order || order.status === status) return;
    order.status = status;
    addOrderHistory(order, "status", "Estado actualizado", `La orden pasó a ${statusConfig[status].label}.`);
  });
  persistWorkOrders();
  renderWorkOrdersModule();
  renderMetrics();
  renderPriorityOrders();
  drawOrdersChart();
}

function downloadJSON(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function setEditorTab(tabName) {
  workOrdersState.editorTab = tabName;
  document.querySelectorAll("[data-editor-tab]").forEach((button) => button.classList.toggle("is-active", button.dataset.editorTab === tabName));
  document.querySelectorAll("[data-editor-panel]").forEach((panel) => {
    const active = panel.dataset.editorPanel === tabName;
    panel.classList.toggle("is-active", active);
    panel.hidden = !active;
  });
}

function openOrderEditor(orderId) {
  hydrateWorkOrders();
  const order = appData.orders.find((item) => item.id === orderId);
  if (!order) return;
  workOrdersState.editorOrderId = orderId;
  workOrdersState.editorDraft = deepClone(order);
  const draft = workOrdersState.editorDraft;
  document.querySelector("#editorOrderId").textContent = draft.id;
  document.querySelector("#editorVehicleTitle").textContent = `${draft.plate} · ${draft.vehicle}`;
  document.querySelector("#editorClientTitle").textContent = draft.client;
  document.querySelector("#editorStatus").value = draft.status;
  document.querySelector("#editorDiagnosis").value = draft.diagnosis || "";
  document.querySelector("#editorService").value = draft.service || "";
  document.querySelector("#editorMechanic").value = mechanicNames.includes(draft.mechanic) ? draft.mechanic : "Sin asignar";
  document.querySelector("#editorPriority").value = String(draft.priority || 3);
  document.querySelector("#editorEnteredAt").value = toDateTimeLocal(draft.enteredAt);
  document.querySelector("#editorPromisedAt").value = toDateTimeLocal(draft.promisedAt);
  document.querySelector("#editorApproval").value = draft.approvalStatus || "pending";
  document.querySelector("#editorPayment").value = draft.paymentStatus || "pending";
  document.querySelector("#editorNotes").value = draft.notes || "";
  document.querySelector("#editorCustomerName").textContent = draft.client || "—";
  document.querySelector("#editorCustomerPhone").textContent = draft.phone || "—";
  document.querySelector("#editorLaborCost").value = Number(draft.laborCost || 0).toFixed(2);
  document.querySelector("#editorOtherCost").value = Number(draft.otherCost || 0).toFixed(2);
  document.querySelector("#editorDiscount").value = Number(draft.discount || 0).toFixed(2);
  document.querySelector("#editorSaveState").className = "editor-save-state";
  document.querySelector("#editorSaveState").innerHTML = "<i></i> Sin cambios";
  setEditorTab("summary");
  renderEditorParts();
  renderEditorExternalWorks();
  renderEditorTimeline();
  refreshEditorTotals();
  resetExternalEntryForm();
  updateEditorTimerDisplay();
  startEditorTimerInterval();
  UI.orderEditorDialog.showModal();
}

function syncEditorDraftFromFields() {
  const draft = workOrdersState.editorDraft;
  if (!draft) return;
  draft.status = document.querySelector("#editorStatus").value;
  draft.diagnosis = document.querySelector("#editorDiagnosis").value.trim();
  draft.service = document.querySelector("#editorService").value.trim();
  draft.mechanic = document.querySelector("#editorMechanic").value;
  draft.priority = Number(document.querySelector("#editorPriority").value);
  draft.enteredAt = document.querySelector("#editorEnteredAt").value ? new Date(document.querySelector("#editorEnteredAt").value).toISOString() : draft.enteredAt;
  draft.promisedAt = document.querySelector("#editorPromisedAt").value ? new Date(document.querySelector("#editorPromisedAt").value).toISOString() : draft.promisedAt;
  draft.approvalStatus = document.querySelector("#editorApproval").value;
  draft.paymentStatus = document.querySelector("#editorPayment").value;
  draft.notes = document.querySelector("#editorNotes").value.trim();
  draft.laborCost = Math.max(0, Number(document.querySelector("#editorLaborCost").value) || 0);
  draft.otherCost = Math.max(0, Number(document.querySelector("#editorOtherCost").value) || 0);
  draft.discount = Math.max(0, Number(document.querySelector("#editorDiscount").value) || 0);
}

function markEditorDirty() {
  const state = document.querySelector("#editorSaveState");
  state.className = "editor-save-state is-dirty";
  state.innerHTML = "<i></i> Cambios sin guardar";
}

function renderEditorParts() {
  const draft = workOrdersState.editorDraft;
  if (!draft) return;
  const body = document.querySelector("#editorPartsBody");
  const empty = document.querySelector("#editorPartsEmpty");
  empty.hidden = draft.parts.length > 0;
  body.innerHTML = draft.parts.map((part) => `<tr data-part-row="${escapeHTML(part.id)}"><td><strong>${escapeHTML(part.name)}</strong><small>${escapeHTML(part.supplier || "Sin referencia")}</small></td><td><input type="number" min="0.01" step="0.01" value="${Number(part.qty)}" data-part-field="qty" data-part-id="${escapeHTML(part.id)}" aria-label="Cantidad de ${escapeHTML(part.name)}"></td><td><input type="number" min="0" step="0.01" value="${Number(part.unitCost).toFixed(2)}" data-part-field="unitCost" data-part-id="${escapeHTML(part.id)}" aria-label="Costo de ${escapeHTML(part.name)}"></td><td><strong>${currencyWithDecimals(Number(part.qty) * Number(part.unitCost))}</strong></td><td><button type="button" data-remove-part="${escapeHTML(part.id)}" aria-label="Eliminar ${escapeHTML(part.name)}"><svg><use href="#icon-trash"></use></svg></button></td></tr>`).join("");
  document.querySelector("#editorPartsCount").textContent = draft.parts.length;
  refreshEditorTotals();
}

function addPartToEditor() {
  const name = document.querySelector("#partNameInput").value.trim();
  const qty = Math.max(0, Number(document.querySelector("#partQtyInput").value) || 0);
  const unitCost = Math.max(0, Number(document.querySelector("#partCostInput").value) || 0);
  const supplier = document.querySelector("#partSupplierInput").value.trim();
  if (!name || qty <= 0) {
    showToast("Pieza incompleta", "Ingresa el nombre y una cantidad válida.", "alert");
    return;
  }
  workOrdersState.editorDraft.parts.push({ id: `P-${Date.now()}`, name, qty, unitCost, supplier });
  document.querySelector("#partNameInput").value = "";
  document.querySelector("#partQtyInput").value = "1";
  document.querySelector("#partCostInput").value = "";
  document.querySelector("#partSupplierInput").value = "";
  renderEditorParts();
  markEditorDirty();
}

function externalWorkHours(item) {
  if (!item.outAt) return 0;
  return hoursBetween(item.outAt, item.returnAt || new Date());
}

function renderEditorExternalWorks() {
  const draft = workOrdersState.editorDraft;
  if (!draft) return;
  const list = document.querySelector("#externalWorkList");
  const empty = document.querySelector("#externalWorkEmpty");
  empty.hidden = draft.externalWorks.length > 0;
  list.innerHTML = draft.externalWorks.map((item) => `<article class="external-work-item"><div class="external-work-item__top"><div><strong>${escapeHTML(item.type)} · ${escapeHTML(item.vendor || "Proveedor sin registrar")}</strong><span class="pill pill--${item.status === "returned" ? "success" : item.status === "in_progress" ? "warning" : "info"}">${item.status === "returned" ? "Regresó" : item.status === "in_progress" ? "En proceso" : "Pendiente"}</span></div><button type="button" data-remove-external="${escapeHTML(item.id)}" aria-label="Eliminar trabajo externo"><svg><use href="#icon-trash"></use></svg></button></div><p class="external-work-item__description">${escapeHTML(item.description || "Sin descripción")}</p><div class="external-work-item__details"><div><span>Salida</span><strong>${formatDateShort(item.outAt)}</strong></div><div><span>Tiempo externo</span><strong>${formatDuration(externalWorkHours(item))}</strong></div><div><span>Costo</span><strong>${currencyWithDecimals(item.cost)}</strong></div></div></article>`).join("");
  document.querySelector("#editorExternalCount").textContent = draft.externalWorks.length;
  const totalHours = draft.externalWorks.reduce((sum, item) => sum + externalWorkHours(item), 0);
  document.querySelector("#externalTimePill").textContent = `${formatDuration(totalHours)} externas`;
  refreshEditorTotals();
  updateEditorTimeOverview();
}

function resetExternalEntryForm() {
  ["#externalVendorInput", "#externalDescriptionInput", "#externalCostInput"].forEach((selector) => { const element = document.querySelector(selector); if (element) element.value = ""; });
  const now = new Date();
  document.querySelector("#externalOutInput").value = toDateTimeLocal(now);
  document.querySelector("#externalReturnInput").value = "";
  document.querySelector("#externalTypeInput").value = "Torno";
  document.querySelector("#externalStatusInput").value = "in_progress";
}

function addExternalWorkToEditor() {
  const type = document.querySelector("#externalTypeInput").value;
  const vendor = document.querySelector("#externalVendorInput").value.trim();
  const description = document.querySelector("#externalDescriptionInput").value.trim();
  const outValue = document.querySelector("#externalOutInput").value;
  const returnValue = document.querySelector("#externalReturnInput").value;
  const cost = Math.max(0, Number(document.querySelector("#externalCostInput").value) || 0);
  const status = document.querySelector("#externalStatusInput").value;
  if (!vendor || !description || !outValue) {
    showToast("Trabajo externo incompleto", "Registra proveedor, descripción y hora de salida.", "alert");
    return;
  }
  workOrdersState.editorDraft.externalWorks.push({ id: `EXT-${Date.now()}`, type, vendor, description, outAt: new Date(outValue).toISOString(), returnAt: returnValue ? new Date(returnValue).toISOString() : null, cost, status });
  renderEditorExternalWorks();
  resetExternalEntryForm();
  markEditorDirty();
}

function refreshEditorTotals() {
  const draft = workOrdersState.editorDraft;
  if (!draft) return;
  syncEditorDraftFromFields();
  const costs = calculateOrderCosts(draft);
  draft.currentCost = costs.total;
  const health = getCostHealth(draft);
  const margin = Number(draft.budget || 0) - costs.total;
  document.querySelector("#editorBudgetQuick").textContent = currencyWithDecimals(draft.budget);
  document.querySelector("#editorCostQuick").textContent = currencyWithDecimals(costs.total);
  document.querySelector("#editorMarginQuick").textContent = currencyWithDecimals(margin);
  document.querySelector("#editorMarginQuick").style.color = margin < 0 ? "#ff6577" : "";
  document.querySelector("#editorElapsedQuick").textContent = formatDuration(hoursBetween(draft.enteredAt));
  document.querySelector("#editorPartsSubtotal").textContent = currencyWithDecimals(costs.parts);
  document.querySelector("#partsSubtotalPill").textContent = currencyWithDecimals(costs.parts);
  document.querySelector("#editorExternalSubtotal").textContent = currencyWithDecimals(costs.external);
  document.querySelector("#editorLaborSubtotal").textContent = currencyWithDecimals(costs.labor + costs.other - costs.discount);
  document.querySelector("#editorGrandTotal").textContent = currencyWithDecimals(costs.total);
  document.querySelector("#editorCostPercent").textContent = `${health.percentage}%`;
  document.querySelector("#editorCostBar").style.setProperty("--progress", `${Math.min(100, health.percentage)}%`);
  const healthCard = document.querySelector("#editorCostHealth");
  healthCard.classList.toggle("is-risk", health.key === "risk");
  healthCard.classList.toggle("is-exceeded", health.key === "exceeded");
  document.querySelector("#editorCostMessage").textContent = !draft.budget ? "Sin presupuesto configurado." : health.key === "exceeded" ? `Se excedió el presupuesto en ${currencyWithDecimals(costs.total - draft.budget)}.` : `Quedan ${currencyWithDecimals(Math.max(0, draft.budget - costs.total))} disponibles.`;
  updateEditorTimeOverview();
}

function renderEditorTimeline() {
  const draft = workOrdersState.editorDraft;
  if (!draft) return;
  const timeline = [...(draft.history || [])].sort((a, b) => new Date(b.at) - new Date(a.at));
  document.querySelector("#editorTimeline").innerHTML = timeline.map((entry) => `<article class="timeline-entry"><span class="timeline-entry__icon"><svg><use href="#icon-${entry.type === "status" ? "refresh" : entry.type === "cost" ? "wallet" : entry.type === "assigned" ? "user" : "check"}"></use></svg></span><div class="timeline-entry__content"><strong>${escapeHTML(entry.title)}</strong><span>${escapeHTML(entry.detail || "")}</span></div><time>${formatDateShort(entry.at)}</time></article>`).join("") || '<div class="cost-empty">Sin actividad registrada.</div>';
}

function getDraftWorkSeconds() {
  const draft = workOrdersState.editorDraft;
  if (!draft) return 0;
  const base = Number(draft.workSeconds || 0);
  if (!draft.timerStartedAt) return base;
  return base + Math.max(0, Math.floor((Date.now() - new Date(draft.timerStartedAt).getTime()) / 1000));
}

function secondsToClock(seconds) {
  const safe = Math.max(0, Math.floor(seconds));
  const h = String(Math.floor(safe / 3600)).padStart(2, "0");
  const m = String(Math.floor((safe % 3600) / 60)).padStart(2, "0");
  const s = String(safe % 60).padStart(2, "0");
  return `${h}:${m}:${s}`;
}

function updateEditorTimerDisplay() {
  const draft = workOrdersState.editorDraft;
  if (!draft) return;
  document.querySelector("#workTimerDisplay").textContent = secondsToClock(getDraftWorkSeconds());
  document.querySelector("#workTimerStatus").textContent = draft.timerStartedAt ? `En marcha · ${escapeHTML(draft.mechanic || "Mecánico")}` : "Cronómetro detenido";
  const button = document.querySelector("#toggleWorkTimer");
  button.innerHTML = draft.timerStartedAt ? '<svg><use href="#icon-pause"></use></svg><span>Pausar trabajo</span>' : '<svg><use href="#icon-play"></use></svg><span>Iniciar trabajo</span>';
  updateEditorTimeOverview();
}

function startEditorTimerInterval() {
  window.clearInterval(workOrdersState.timerInterval);
  workOrdersState.timerInterval = window.setInterval(updateEditorTimerDisplay, 1000);
}

function toggleEditorTimer() {
  const draft = workOrdersState.editorDraft;
  if (!draft) return;
  if (draft.timerStartedAt) {
    draft.workSeconds = getDraftWorkSeconds();
    draft.timerStartedAt = null;
  } else {
    draft.timerStartedAt = new Date().toISOString();
  }
  updateEditorTimerDisplay();
  markEditorDirty();
}

function resetEditorTimer() {
  const draft = workOrdersState.editorDraft;
  if (!draft) return;
  draft.workSeconds = 0;
  draft.timerStartedAt = null;
  updateEditorTimerDisplay();
  markEditorDirty();
}

function updateEditorTimeOverview() {
  const draft = workOrdersState.editorDraft;
  if (!draft) return;
  const workshopHours = hoursBetween(draft.enteredAt);
  const effectiveHours = getDraftWorkSeconds() / 3600;
  const externalHours = (draft.externalWorks || []).reduce((sum, item) => sum + externalWorkHours(item), 0);
  const deviation = draft.promisedAt ? (Date.now() - new Date(draft.promisedAt).getTime()) / 3600000 : 0;
  document.querySelector("#timeTotalWorkshop").textContent = formatDuration(workshopHours);
  document.querySelector("#timeEffectiveWork").textContent = formatDuration(effectiveHours);
  document.querySelector("#timeExternalLost").textContent = formatDuration(externalHours);
  document.querySelector("#timeDeviation").textContent = draft.status === "listo" && deviation <= 0 ? "Entregado a tiempo" : deviation > 0 ? `${formatDuration(deviation)} de retraso` : "A tiempo";
}

function saveEditorChanges() {
  const original = appData.orders.find((order) => order.id === workOrdersState.editorOrderId);
  const draft = workOrdersState.editorDraft;
  if (!original || !draft) return;
  syncEditorDraftFromFields();
  draft.currentCost = calculateOrderCosts(draft).total;
  addOrderHistory(draft, "cost", "Orden actualizada", `Costos y datos guardados por Leonardo Acuña. Total real: ${currencyWithDecimals(draft.currentCost)}.`);
  Object.assign(original, deepClone(draft));
  persistWorkOrders();
  document.querySelector("#editorSaveState").className = "editor-save-state is-saved";
  document.querySelector("#editorSaveState").innerHTML = "<i></i> Cambios guardados";
  renderWorkOrdersModule();
  renderMetrics();
  renderPriorityOrders();
  drawOrdersChart();
  showToast("Orden actualizada", `${original.id} guardó un costo real de ${currencyWithDecimals(original.currentCost)}.`, "save");
  window.setTimeout(() => UI.orderEditorDialog.close(), 250);
}

function closeOrderEditor() {
  window.clearInterval(workOrdersState.timerInterval);
  workOrdersState.timerInterval = null;
  if (UI.orderEditorDialog?.open) UI.orderEditorDialog.close();
}

function exportOrder(order) {
  downloadJSON(order, `${order.id.toLowerCase()}-${order.plate.toLowerCase()}.json`);
}

function printOrder(order) {
  const costs = calculateOrderCosts(order);
  const partsRows = (order.parts || []).map((part) => `<tr><td>${escapeHTML(part.name)}</td><td>${part.qty}</td><td>${currencyWithDecimals(part.unitCost)}</td><td>${currencyWithDecimals(part.qty * part.unitCost)}</td></tr>`).join("") || '<tr><td colspan="4">Sin piezas registradas</td></tr>';
  const externalRows = (order.externalWorks || []).map((item) => `<tr><td>${escapeHTML(item.type)}</td><td>${escapeHTML(item.vendor)}</td><td>${formatDuration(externalWorkHours(item))}</td><td>${currencyWithDecimals(item.cost)}</td></tr>`).join("") || '<tr><td colspan="4">Sin trabajos externos</td></tr>';
  const popup = window.open("", "_blank", "width=900,height=760");
  if (!popup) { showToast("Ventana bloqueada", "Permite ventanas emergentes para imprimir la ficha.", "alert"); return; }
  popup.document.write(`<!doctype html><html lang="es"><head><meta charset="utf-8"><title>${order.id}</title><style>body{font-family:Arial,sans-serif;color:#17202c;padding:30px}header{display:flex;justify-content:space-between;border-bottom:2px solid #1976d2;padding-bottom:15px}.muted{color:#64748b}h1{margin:0;color:#1976d2}section{margin-top:22px}table{width:100%;border-collapse:collapse}th,td{border:1px solid #d9e0e8;padding:8px;text-align:left;font-size:13px}.totals{margin-left:auto;width:330px}.totals div{display:flex;justify-content:space-between;padding:6px 0}.grand{font-size:18px;font-weight:bold;border-top:2px solid #17202c}.grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.box{border:1px solid #d9e0e8;padding:12px;border-radius:8px}@media print{button{display:none}}</style></head><body><header><div><h1>TorqueFlow</h1><div class="muted">Orden de trabajo ${order.id}</div></div><div><strong>${escapeHTML(order.plate)}</strong><br>${escapeHTML(order.vehicle)}</div></header><section class="grid"><div class="box"><strong>Cliente</strong><br>${escapeHTML(order.client)}<br>${escapeHTML(order.phone || "")}</div><div class="box"><strong>Estado</strong><br>${statusConfig[order.status].label}<br>Mecánico: ${escapeHTML(order.mechanic)}</div></section><section><h3>Diagnóstico</h3><p>${escapeHTML(order.diagnosis)}</p><p><strong>Trabajo:</strong> ${escapeHTML(order.service)}</p></section><section><h3>Piezas y materiales</h3><table><thead><tr><th>Descripción</th><th>Cantidad</th><th>Costo unit.</th><th>Subtotal</th></tr></thead><tbody>${partsRows}</tbody></table></section><section><h3>Trabajos externos</h3><table><thead><tr><th>Tipo</th><th>Proveedor</th><th>Tiempo</th><th>Costo</th></tr></thead><tbody>${externalRows}</tbody></table></section><section class="totals"><div><span>Piezas</span><strong>${currencyWithDecimals(costs.parts)}</strong></div><div><span>Externos</span><strong>${currencyWithDecimals(costs.external)}</strong></div><div><span>Mano de obra</span><strong>${currencyWithDecimals(costs.labor)}</strong></div><div class="grand"><span>Costo total</span><strong>${currencyWithDecimals(costs.total)}</strong></div></section><script>window.onload=()=>window.print()<\/script></body></html>`);
  popup.document.close();
}

function duplicateCurrentOrder() {
  const draft = workOrdersState.editorDraft;
  if (!draft) return;
  const copy = deepClone(draft);
  copy.id = getNextOrderNumber();
  copy.status = "revision";
  copy.enteredAt = new Date().toISOString();
  copy.promisedAt = new Date(Date.now() + 24 * 3600000).toISOString();
  copy.parts = [];
  copy.externalWorks = [];
  copy.laborCost = 0;
  copy.otherCost = 0;
  copy.discount = 0;
  copy.currentCost = 0;
  copy.workSeconds = 0;
  copy.timerStartedAt = null;
  copy.paymentStatus = "pending";
  copy.history = [{ id: `H-${Date.now()}`, at: copy.enteredAt, type: "created", title: "Orden duplicada", detail: `Creada a partir de ${draft.id}.` }];
  appData.orders.unshift(copy);
  persistWorkOrders();
  renderWorkOrdersModule();
  renderMetrics();
  closeOrderEditor();
  showToast("Orden duplicada", `${copy.id} fue creada sin costos consumidos.`, "copy");
}

function initializeWorkOrdersModule() {
  if (!UI.workOrdersView) return;
  hydrateWorkOrders();
  populateMechanicFilters();
  renderWorkOrdersModule();

  document.querySelector("#ordersCatalogSearch").addEventListener("input", debounce((event) => { workOrdersState.search = event.target.value; renderWorkOrdersModule(); }, 120));
  [["#ordersStatusFilter", "status"], ["#ordersMechanicFilter", "mechanic"], ["#ordersPriorityFilter", "priority"], ["#ordersCostFilter", "cost"]].forEach(([selector, key]) => document.querySelector(selector).addEventListener("change", (event) => { workOrdersState.filters[key] = event.target.value; renderWorkOrdersModule(); }));
  document.querySelector("#ordersSort").addEventListener("change", (event) => { workOrdersState.sort = event.target.value; renderWorkOrdersModule(); });
  document.querySelector("#resetOrdersFilters").addEventListener("click", resetWorkOrderFilters);
  document.querySelector("#emptyResetFilters").addEventListener("click", resetWorkOrderFilters);
  document.querySelector("#selectAllVisibleOrders").addEventListener("change", (event) => { getFilteredWorkOrders().forEach((order) => event.target.checked ? workOrdersState.selected.add(order.id) : workOrdersState.selected.delete(order.id)); renderWorkOrdersModule(); });
  document.querySelector("#clearOrderSelection").addEventListener("click", () => { workOrdersState.selected.clear(); renderWorkOrdersModule(); });
  document.querySelector("#bulkStatus").addEventListener("change", (event) => { changeOrdersStatus([...workOrdersState.selected], event.target.value); event.target.value = ""; });
  document.querySelector("#bulkMechanic").addEventListener("change", (event) => { const mechanic = event.target.value; if (!mechanic) return; workOrdersState.selected.forEach((id) => { const order = appData.orders.find((item) => item.id === id); if (order) { order.mechanic = mechanic; addOrderHistory(order, "assigned", "Mecánico reasignado", mechanic); } }); event.target.value = ""; persistWorkOrders(); renderWorkOrdersModule(); showToast("Mecánico asignado", `${workOrdersState.selected.size} órdenes fueron actualizadas.`, "user"); });
  document.querySelector("#exportOrdersButton").addEventListener("click", () => downloadJSON(getFilteredWorkOrders(), "ordenes-de-trabajo.json"));
  document.querySelector("#exportSelectedOrders").addEventListener("click", () => downloadJSON(appData.orders.filter((order) => workOrdersState.selected.has(order.id)), "ordenes-seleccionadas.json"));

  document.querySelectorAll("[data-orders-view]").forEach((button) => button.addEventListener("click", () => { workOrdersState.viewMode = button.dataset.ordersView; renderWorkOrdersModule(); }));

  UI.workOrdersView.addEventListener("click", (event) => {
    const select = event.target.closest("[data-select-work-order]");
    const opener = event.target.closest("[data-work-order-open]");
    if (select) {
      event.stopPropagation();
      select.checked ? workOrdersState.selected.add(select.dataset.selectWorkOrder) : workOrdersState.selected.delete(select.dataset.selectWorkOrder);
      renderWorkOrdersModule();
      return;
    }
    if (opener && !event.target.closest("[data-order-select]")) openOrderEditor(opener.dataset.workOrderOpen);
  });

  UI.ordersKanban.addEventListener("dragstart", (event) => { const card = event.target.closest("[data-drag-order]"); if (!card) return; workOrdersState.draggedOrderId = card.dataset.dragOrder; card.classList.add("is-dragging"); event.dataTransfer.effectAllowed = "move"; });
  UI.ordersKanban.addEventListener("dragend", (event) => { event.target.closest("[data-drag-order]")?.classList.remove("is-dragging"); document.querySelectorAll(".kanban-column.is-drag-over").forEach((column) => column.classList.remove("is-drag-over")); workOrdersState.draggedOrderId = null; });
  UI.ordersKanban.addEventListener("dragover", (event) => { const column = event.target.closest("[data-drop-status]"); if (!column) return; event.preventDefault(); column.classList.add("is-drag-over"); });
  UI.ordersKanban.addEventListener("dragleave", (event) => { const column = event.target.closest("[data-drop-status]"); if (column && !column.contains(event.relatedTarget)) column.classList.remove("is-drag-over"); });
  UI.ordersKanban.addEventListener("drop", (event) => { const column = event.target.closest("[data-drop-status]"); if (!column || !workOrdersState.draggedOrderId) return; event.preventDefault(); changeOrdersStatus([workOrdersState.draggedOrderId], column.dataset.dropStatus); showToast("Estado actualizado", `La orden pasó a ${statusConfig[column.dataset.dropStatus].label}.`, "refresh"); });

  document.querySelector("#closeOrderEditor").addEventListener("click", closeOrderEditor);
  document.querySelector("#cancelOrderEditor").addEventListener("click", closeOrderEditor);
  UI.orderEditorDialog.addEventListener("close", () => { window.clearInterval(workOrdersState.timerInterval); workOrdersState.timerInterval = null; });
  document.querySelectorAll("[data-editor-tab]").forEach((button) => button.addEventListener("click", () => setEditorTab(button.dataset.editorTab)));
  UI.orderEditorForm.addEventListener("input", (event) => { if (event.target.matches("#editorLaborCost, #editorOtherCost, #editorDiscount")) refreshEditorTotals(); markEditorDirty(); });
  document.querySelector("#addPartToOrder").addEventListener("click", addPartToEditor);
  document.querySelector("#editorPartsBody").addEventListener("change", (event) => { const id = event.target.dataset.partId; const field = event.target.dataset.partField; if (!id || !field) return; const part = workOrdersState.editorDraft.parts.find((item) => item.id === id); if (part) { part[field] = Math.max(0, Number(event.target.value) || 0); renderEditorParts(); markEditorDirty(); } });
  document.querySelector("#editorPartsBody").addEventListener("click", (event) => { const button = event.target.closest("[data-remove-part]"); if (!button) return; workOrdersState.editorDraft.parts = workOrdersState.editorDraft.parts.filter((item) => item.id !== button.dataset.removePart); renderEditorParts(); markEditorDirty(); });
  document.querySelector("#addExternalWork").addEventListener("click", addExternalWorkToEditor);
  document.querySelector("#externalWorkList").addEventListener("click", (event) => { const button = event.target.closest("[data-remove-external]"); if (!button) return; workOrdersState.editorDraft.externalWorks = workOrdersState.editorDraft.externalWorks.filter((item) => item.id !== button.dataset.removeExternal); renderEditorExternalWorks(); markEditorDirty(); });
  document.querySelector("#toggleWorkTimer").addEventListener("click", toggleEditorTimer);
  document.querySelector("#resetWorkTimer").addEventListener("click", resetEditorTimer);
  document.querySelector("#saveOrderChanges").addEventListener("click", saveEditorChanges);
  document.querySelector("#exportOrderJsonButton").addEventListener("click", () => { syncEditorDraftFromFields(); exportOrder(workOrdersState.editorDraft); });
  document.querySelector("#printOrderButton").addEventListener("click", () => { syncEditorDraftFromFields(); printOrder(workOrdersState.editorDraft); });
  document.querySelector("#duplicateOrderButton").addEventListener("click", duplicateCurrentOrder);
  document.querySelector("#editorWhatsAppButton").addEventListener("click", () => { const phone = String(workOrdersState.editorDraft?.phone || "").replace(/\D/g, ""); if (!phone) { showToast("Teléfono no disponible", "Registra el número del cliente antes de contactarlo.", "alert"); return; } window.open(`https://wa.me/51${phone}?text=${encodeURIComponent(`Hola ${workOrdersState.editorDraft.client}, te contactamos por la orden ${workOrdersState.editorDraft.id} de tu vehículo ${workOrdersState.editorDraft.plate}.`)}`, "_blank", "noopener,noreferrer"); });
}


function handleAction(action) {
  if (action === "new-order") {
    setActiveView("nueva-orden");
    return;
  }
  if (action === "add-part") {
    setActiveView("repuestos");
    openMovementModal("", "entrada");
    return;
  }
  const actions = {
    "add-expense": ["Registro de gasto", "Este acceso alimentará los costos reales de cada orden.", "wallet"]
  };
  const payload = actions[action];
  if (payload) showToast(...payload);
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  safeStorageSet("torqueflow-theme", theme);
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

  UI.serviceSearch?.addEventListener("input", renderServiceCatalog);
  UI.newOrderForm?.addEventListener("input", (event) => {
    if (event.target.id === "vehiclePlate" || event.target.id === "vehicleVin") event.target.value = event.target.value.toUpperCase();
    if (event.target.matches("[data-service-price]")) {
      const service = newOrderState.selectedServices.get(event.target.dataset.servicePrice);
      if (service) service.price = Math.max(0, Number(event.target.value) || 0);
    }
    event.target.closest(".field")?.classList.remove("is-invalid");
    updateOrderSummary();
    markDraftDirty();
  });
  UI.newOrderForm?.addEventListener("change", (event) => {
    if (event.target.id === "fuelLevel") document.querySelector("#fuelLevelText").textContent = `${event.target.value}%`;
    updateOrderSummary();
    markDraftDirty();
  });
  UI.newOrderForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    generateOrder();
  });
  document.querySelector("#clientName")?.addEventListener("change", handleClientLookup);
  document.querySelector("#vehiclePhotos")?.addEventListener("change", (event) => {
    handlePhotoSelection(event.target.files);
    event.target.value = "";
  });
  document.querySelector("#saveDraftButton")?.addEventListener("click", saveNewOrderDraft);
  document.querySelector("#previewJsonButton")?.addEventListener("click", previewOrderJson);
  document.querySelector("#closeJsonDialog")?.addEventListener("click", () => UI.jsonPreviewDialog.close());
  document.querySelector("#closeJsonDialogFooter")?.addEventListener("click", () => UI.jsonPreviewDialog.close());
  document.querySelector("#confirmFromPreview")?.addEventListener("click", generateOrder);
  document.querySelector("#createAnotherOrder")?.addEventListener("click", () => { UI.orderSuccessDialog.close(); resetNewOrderForm(); });
  document.querySelector("#goToOrdersButton")?.addEventListener("click", () => { UI.orderSuccessDialog.close(); setActiveView("ordenes"); });
  document.querySelector("#clearExistingClient")?.addEventListener("click", () => {
    ["#clientName", "#clientDocument", "#clientPhone", "#clientEmail"].forEach((selector) => { document.querySelector(selector).value = ""; });
    document.querySelector("#existingClientBanner").hidden = true;
    document.querySelector("#clientName").focus();
  });
  document.querySelector("#openCustomService")?.addEventListener("click", () => { document.querySelector("#customServiceForm").hidden = false; document.querySelector("#customServiceName").focus(); });
  document.querySelector("#closeCustomService")?.addEventListener("click", () => { document.querySelector("#customServiceForm").hidden = true; });
  document.querySelector("#addCustomService")?.addEventListener("click", addCustomService);

  document.addEventListener("click", (event) => {
    const navLink = event.target.closest("[data-view]");
    const viewButton = event.target.closest("[data-view-target]");
    const actionButton = event.target.closest("[data-action]");
    const alertButton = event.target.closest("[data-dismiss-alert]");
    const orderButton = event.target.closest("[data-order-id], [data-search-order]");
    const serviceButton = event.target.closest("[data-service-id]");
    const categoryButton = event.target.closest("[data-service-category]");
    const removeServiceButton = event.target.closest("[data-remove-service]");
    const removePhotoButton = event.target.closest("[data-remove-photo]");
    const symptomButton = event.target.closest("[data-symptom]");
    const scrollButton = event.target.closest("[data-scroll-section]");

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

    if (orderButton && !event.target.closest("[data-order-select]")) {
      const orderId = orderButton.dataset.orderId || orderButton.dataset.searchOrder;
      const order = appData.orders.find((item) => item.id === orderId);
      UI.searchResults.hidden = true;
      if (order) {
        setActiveView("ordenes");
        openOrderEditor(orderId);
      }
    }

    if (serviceButton) toggleService(serviceButton.dataset.serviceId);

    if (categoryButton) {
      newOrderState.category = categoryButton.dataset.serviceCategory;
      renderServiceCatalog();
    }

    if (removeServiceButton) {
      newOrderState.selectedServices.delete(removeServiceButton.dataset.removeService);
      renderServiceCatalog();
      renderSelectedServices();
      markDraftDirty();
    }

    if (removePhotoButton) {
      const index = Number(removePhotoButton.dataset.removePhoto);
      const [removed] = newOrderState.photos.splice(index, 1);
      if (removed) URL.revokeObjectURL(removed.url);
      renderPhotoPreviews();
      markDraftDirty();
    }

    if (symptomButton) {
      const diagnosis = document.querySelector("#initialDiagnosis");
      const prefix = diagnosis.value.trim() ? `${diagnosis.value.trim()} · ` : "";
      diagnosis.value = `${prefix}${symptomButton.dataset.symptom}.`;
      diagnosis.dispatchEvent(new Event("input", { bubbles: true }));
    }

    if (scrollButton) {
      document.querySelector(`#${CSS.escape(scrollButton.dataset.scrollSection)}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
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
      setActiveView("nueva-orden");
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
    const stored = JSON.parse(safeStorageGet(key));
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
    safeStorageSet("torqueflow-parts", JSON.stringify(appData.parts));
    safeStorageSet("torqueflow-stock-movements", JSON.stringify(appData.stockMovements));
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

function formatHistoryDuration(milliseconds) {
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
    { label: "Tiempo promedio", value: formatHistoryDuration(averageDuration), helper: `${formatHistoryDuration(externalTime)} en externos`, icon: "clock", color: "var(--orange)", soft: "var(--orange-soft)", delta: "Tiempo total", deltaType: "warning" }
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
        <td><strong class="duration-value">${formatHistoryDuration(totalDuration)}</strong><span class="duration-note">Ingreso a salida</span></td>
        <td><strong class="duration-value ${externalDuration ? "money-warning" : ""}">${formatHistoryDuration(externalDuration)}</strong><span class="duration-note">${order.externals.length ? `${order.externals.length} servicio(s)` : "Sin terceros"}</span></td>
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
    <div class="breakdown-row"><span>${escapeHTML(item.service)}<small class="table-secondary">${escapeHTML(item.provider)} · ${formatHistoryDuration(durationBetween(item.start, item.end))}</small></span><strong>${formatCurrencyDetailed(item.charged)}</strong></div>`).join("") : '<div class="breakdown-row"><span>Sin trabajos externos</span><strong>S/ 0.00</strong></div>';
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
        <div class="voucher-summary-card"><span>Tiempo total</span><strong>${formatHistoryDuration(totalDuration)}</strong></div>
      </div>
      <div class="voucher-grid">
        <section class="voucher-section"><h3>Piezas y materiales cobrados</h3><div class="breakdown-list">${partsRows}<div class="breakdown-row"><span>Mano de obra</span><strong>${formatCurrencyDetailed(order.laborCharge)}</strong></div><div class="breakdown-row"><span>Otros cargos</span><strong>${formatCurrencyDetailed(order.otherCosts)}</strong></div><div class="breakdown-row"><span>Descuento</span><strong>− ${formatCurrencyDetailed(order.discount)}</strong></div><div class="breakdown-row is-total"><strong>Total facturado</strong><strong>${formatCurrencyDetailed(order.billed)}</strong></div></div></section>
        <section class="voucher-section"><h3>Trabajos externos</h3><div class="breakdown-list">${externalRows}<div class="breakdown-row is-total"><strong>Tiempo perdido externo</strong><strong>${formatHistoryDuration(externalDuration)}</strong></div></div></section>
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
    return [order.id, order.plate, order.vehicle, order.client, order.mechanic, order.service, formatDate(order.enteredAt, { time: true }), formatDate(order.deliveredAt || order.completedAt, { time: true }), formatHistoryDuration(durationBetween(order.enteredAt, order.deliveredAt || order.completedAt)), formatHistoryDuration(getExternalDuration(order)), finances.totalCost.toFixed(2), order.billed.toFixed(2), finances.profit.toFixed(2), historyStatusConfig[order.status].label];
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
    const historySearchButton = event.target.closest("[data-search-history]");
    const partSearchButton = event.target.closest("[data-search-part]");

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
    savedTheme = safeStorageGet("torqueflow-theme");
  } catch (error) {
    console.warn("No se pudo leer el tema guardado.", error);
  }
  const preferredTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  applyTheme(savedTheme || preferredTheme);
}

function initializeApp() {
  initializeInventoryStorage();
  initializeClientsSettingsStorage();
  initializeTheme();
  renderMetrics();
  renderPriorityOrders();
  renderAlerts();
  renderActivity();
  renderGoal();
  renderFinanceSummary();
  initializeNewOrderModule();
  initializeWorkOrdersModule();
  bindEvents();
  bindHistoryPartsEvents();
  bindClientsSettingsEvents();
  populateHistoryMechanics();
  populatePartsFilters();
  renderPartsModule();
  updateClock();
  window.setInterval(updateClock, 1000);

  const initialView = window.location.hash.replace("#", "");
  if (["dashboard", "nueva-orden", "ordenes", "historial", "repuestos", "clientes", "configuracion"].includes(initialView)) {
    setActiveView(initialView);
  } else {
    setActiveView("dashboard");
  }
}

document.addEventListener("DOMContentLoaded", initializeApp);

/* =========================================================
   MÓDULOS: CLIENTES Y CONFIGURACIÓN
   ========================================================= */
const CLIENTS_STORAGE_KEY = "torqueflow-clients-v1";
const SETTINGS_STORAGE_KEY = "torqueflow-settings-v1";

const clientsSeed = [
  {
    id: "CLI-001", type: "persona", name: "Carlos Mendoza", document: "43125874", phone: "987 221 410", email: "carlos.mendoza@email.com",
    address: "Urb. Santa Victoria 248", district: "Chiclayo", birthday: "1985-04-18", source: "Recomendación", status: "active", segment: "vip",
    joinedAt: "2024-02-15", lastVisit: "2026-07-31", totalSpent: 12640, pendingBalance: 350, creditLimit: 1500, visits: 11,
    marketingConsent: true, creditEnabled: true, tags: ["pickup", "empresa familiar"], notes: "Prefiere contacto por WhatsApp. Autoriza trabajos adicionales hasta S/ 150.",
    vehicles: [
      { id: "VEH-001", plate: "M4R-921", brand: "Toyota", model: "Hilux", year: 2021, color: "Plata", fuel: "Diésel", mileage: 89740, vin: "8AJBA3CD0M1234567", nextService: "2026-09-10", notes: "Uso mixto ciudad/campo." },
      { id: "VEH-002", plate: "K8P-402", brand: "Toyota", model: "Yaris", year: 2018, color: "Blanco", fuel: "Gasolina", mileage: 62210, vin: "", nextService: "2026-10-05", notes: "Vehículo familiar." }
    ]
  },
  {
    id: "CLI-002", type: "persona", name: "María Torres", document: "45896127", phone: "965 348 201", email: "maria.torres@email.com",
    address: "Calle Los Álamos 511", district: "La Victoria", birthday: "1991-11-02", source: "Google", status: "active", segment: "frecuente",
    joinedAt: "2024-08-03", lastVisit: "2026-07-31", totalSpent: 6840, pendingBalance: 0, creditLimit: 600, visits: 7,
    marketingConsent: true, creditEnabled: false, tags: ["particular"], notes: "Solicita cotización antes de reemplazar piezas.",
    vehicles: [{ id: "VEH-003", plate: "T8D-447", brand: "Hyundai", model: "Accent", year: 2018, color: "Rojo", fuel: "GLP", mileage: 118250, vin: "", nextService: "2026-08-22", notes: "Sistema GLP de quinta generación." }]
  },
  {
    id: "CLI-003", type: "persona", name: "Andrea Salazar", document: "70254863", phone: "944 522 716", email: "andrea.salazar@email.com",
    address: "Av. Grau 1320", district: "Chiclayo", birthday: "1994-06-23", source: "Instagram", status: "active", segment: "nuevo",
    joinedAt: "2026-06-12", lastVisit: "2026-07-31", totalSpent: 920, pendingBalance: 0, creditLimit: 0, visits: 2,
    marketingConsent: true, creditEnabled: false, tags: ["SUV"], notes: "Primer mantenimiento mayor pendiente.",
    vehicles: [{ id: "VEH-004", plate: "B6P-038", brand: "Kia", model: "Sportage", year: 2020, color: "Negro", fuel: "Gasolina", mileage: 58440, vin: "", nextService: "2026-09-01", notes: "" }]
  },
  {
    id: "CLI-004", type: "empresa", name: "Transportes Norte S.A.C.", document: "20608745123", phone: "979 310 662", email: "operaciones@transportesnorte.pe",
    address: "Parque Industrial Mz. D Lt. 8", district: "Pimentel", birthday: "", source: "Empresa / convenio", status: "active", segment: "vip",
    joinedAt: "2023-09-18", lastVisit: "2026-07-29", totalSpent: 28760, pendingBalance: 2450, creditLimit: 5000, visits: 24,
    marketingConsent: true, creditEnabled: true, tags: ["flota", "facturación mensual"], notes: "Cierre de cuenta cada fin de mes. Contacto: Jorge Vásquez, jefe de operaciones.",
    vehicles: [
      { id: "VEH-005", plate: "A5H-812", brand: "Hino", model: "Dutro", year: 2020, color: "Blanco", fuel: "Diésel", mileage: 168900, vin: "", nextService: "2026-08-12", notes: "Unidad 04." },
      { id: "VEH-006", plate: "F9C-330", brand: "Hyundai", model: "HD78", year: 2019, color: "Blanco", fuel: "Diésel", mileage: 204500, vin: "", nextService: "2026-08-07", notes: "Unidad 02; servicio nocturno preferido." },
      { id: "VEH-007", plate: "V2L-901", brand: "JAC", model: "HFC", year: 2021, color: "Azul", fuel: "Diésel", mileage: 132700, vin: "", nextService: "2026-09-15", notes: "Unidad 06." }
    ]
  },
  {
    id: "CLI-005", type: "persona", name: "Pablo Ríos", document: "41673092", phone: "975 631 089", email: "",
    address: "Urb. Monterrico II", district: "Chiclayo", birthday: "1982-09-14", source: "Recomendación", status: "active", segment: "frecuente",
    joinedAt: "2025-01-22", lastVisit: "2026-07-30", totalSpent: 3580, pendingBalance: 0, creditLimit: 0, visits: 6,
    marketingConsent: false, creditEnabled: false, tags: ["mantenimiento preventivo"], notes: "Entrega el vehículo por la mañana y recoge después de las 18:00.",
    vehicles: [{ id: "VEH-008", plate: "C2X-710", brand: "Nissan", model: "Versa", year: 2019, color: "Gris", fuel: "GNV", mileage: 95420, vin: "", nextService: "2026-11-01", notes: "" }]
  },
  {
    id: "CLI-006", type: "persona", name: "Rosa Delgado", document: "27834561", phone: "986 777 120", email: "rosa.delgado@email.com",
    address: "José Leonardo Ortiz", district: "José Leonardo Ortiz", birthday: "1973-03-09", source: "Facebook", status: "active", segment: "frecuente",
    joinedAt: "2024-11-11", lastVisit: "2026-07-31", totalSpent: 4210, pendingBalance: 180, creditLimit: 300, visits: 8,
    marketingConsent: true, creditEnabled: true, tags: ["eléctrico"], notes: "Confirmar por llamada cuando el vehículo esté listo.",
    vehicles: [{ id: "VEH-009", plate: "A7K-526", brand: "Chevrolet", model: "Sail", year: 2017, color: "Azul", fuel: "Gasolina", mileage: 143820, vin: "", nextService: "2026-08-18", notes: "Radio no original." }]
  },
  {
    id: "CLI-007", type: "persona", name: "Daniel Campos", document: "73692015", phone: "958 220 345", email: "daniel.campos@email.com",
    address: "Urb. Los Parques", district: "La Victoria", birthday: "1996-12-20", source: "Instagram", status: "active", segment: "nuevo",
    joinedAt: "2026-04-05", lastVisit: "2026-07-30", totalSpent: 1480, pendingBalance: 0, creditLimit: 0, visits: 3,
    marketingConsent: true, creditEnabled: false, tags: ["hatchback"], notes: "",
    vehicles: [{ id: "VEH-010", plate: "Q9M-183", brand: "Suzuki", model: "Swift", year: 2022, color: "Amarillo", fuel: "Gasolina", mileage: 37200, vin: "", nextService: "2026-09-25", notes: "" }]
  },
  {
    id: "CLI-008", type: "persona", name: "Sofía Cabrera", document: "69014328", phone: "912 745 991", email: "sofia.cabrera@email.com",
    address: "Urb. El Ingeniero", district: "Pimentel", birthday: "1988-08-01", source: "Google", status: "active", segment: "vip",
    joinedAt: "2023-06-27", lastVisit: "2026-07-30", totalSpent: 9420, pendingBalance: 0, creditLimit: 1200, visits: 12,
    marketingConsent: true, creditEnabled: true, tags: ["SUV", "tarjeta"], notes: "Solicita factura electrónica.",
    vehicles: [{ id: "VEH-011", plate: "F1A-309", brand: "Volkswagen", model: "Tiguan", year: 2020, color: "Plata", fuel: "Gasolina", mileage: 70400, vin: "", nextService: "2026-10-16", notes: "" }]
  },
  {
    id: "CLI-009", type: "persona", name: "Luis Fernández", document: "40852197", phone: "933 854 110", email: "",
    address: "Cercado de Chiclayo", district: "Chiclayo", birthday: "1980-01-26", source: "Tránsito", status: "inactive", segment: "inactivo",
    joinedAt: "2023-10-02", lastVisit: "2025-12-15", totalSpent: 1760, pendingBalance: 0, creditLimit: 0, visits: 3,
    marketingConsent: true, creditEnabled: false, tags: ["reactivación"], notes: "No visita el taller hace más de seis meses.",
    vehicles: [{ id: "VEH-012", plate: "D8R-299", brand: "Renault", model: "Logan", year: 2016, color: "Blanco", fuel: "GLP", mileage: 177300, vin: "", nextService: "2026-01-15", notes: "" }]
  }
];

const settingsSeed = {
  business: { workshopName: "TorqueFlow Taller", legalName: "Servicios Automotrices TorqueFlow S.A.C.", ruc: "20612345678", phone: "074 620 480", whatsapp: "987 654 321", email: "atencion@torqueflow.pe", address: "Av. Miguel Grau 1240", district: "Chiclayo", timezone: "America/Lima", theme: "dark", accent: "#2f8cff", density: "comfortable" },
  operations: { orderPrefix: "OT", nextOrder: 1049, deliveryHours: "24", budgetThreshold: 85, requirePhotos: true, requireApproval: true, preventNegativeStock: true, autoClose: true, startAlert: "60", externalAlert: "8", warrantyAlert: 7, fuelSteps: "4" },
  services: { laborHour: 65, diagnosticMinimum: 80, diagnosticMinutes: 45, defaultWarranty: 90, categories: [
    { id: "mantenimiento", name: "Mantenimiento", active: true, margin: 35 }, { id: "motor", name: "Motor", active: true, margin: 40 },
    { id: "frenos", name: "Frenos", active: true, margin: 35 }, { id: "suspension", name: "Suspensión", active: true, margin: 35 },
    { id: "direccion", name: "Dirección", active: true, margin: 35 }, { id: "transmision", name: "Transmisión", active: true, margin: 40 },
    { id: "electrico", name: "Eléctrico", active: true, margin: 45 }, { id: "refrigeracion", name: "Refrigeración", active: true, margin: 35 },
    { id: "climatizacion", name: "Climatización", active: true, margin: 40 }
  ] },
  finance: { taxEnabled: true, currency: "PEN", taxRate: 18, partsMargin: 35, externalMargin: 25, defaultCredit: 0, lowStock: 3, payments: [
    { id: "cash", name: "Efectivo", active: true }, { id: "yape", name: "Yape / Plin", active: true }, { id: "transfer", name: "Transferencia", active: true }, { id: "card", name: "Tarjeta", active: true }, { id: "credit", name: "Crédito", active: true }
  ] },
  notifications: { whatsappEnabled: true, emailEnabled: true, notifyCreated: true, notifyApproval: true, notifyStatus: false, notifyReady: true, notifyStock: true, notifyOverdue: true,
    templateCreated: "Hola {cliente}, recibimos tu vehículo {placa}. Tu orden es {orden}.",
    templateApproval: "Hola {cliente}, el presupuesto de la orden {orden} es {total}. Responde APROBAR para continuar.",
    templateReady: "Hola {cliente}, tu vehículo {placa} ya está listo. Puedes recogerlo en nuestro horario habitual." },
  documents: { logo: true, diagnosis: true, internalCosts: false, signature: true, header: "ORDEN DE TRABAJO Y AUTORIZACIÓN", footer: "Gracias por confiar en TorqueFlow Taller.", terms: "El cliente autoriza el diagnóstico y los trabajos aprobados. Los repuestos sustituidos se entregan a solicitud. La garantía cubre únicamente el servicio realizado y no daños derivados de componentes ajenos." },
  security: { autosave: true, auditLog: true, automaticBackup: true, deleteConfirmation: true, sessionTimeout: "30", backupFrequency: "weekly", lastBackup: null },
  users: [
    { id: "USR-001", name: "Leonardo Acuña", email: "admin@torqueflow.pe", phone: "", role: "Administrador", status: "active", permission: "full", lastAccess: "2026-08-04T20:32:00-05:00" },
    { id: "USR-002", name: "Carla Vásquez", email: "recepcion@torqueflow.pe", phone: "", role: "Recepción", status: "active", permission: "operations", lastAccess: "2026-08-04T18:15:00-05:00" },
    { id: "USR-003", name: "Marco Díaz", email: "almacen@torqueflow.pe", phone: "", role: "Almacén", status: "active", permission: "inventory", lastAccess: "2026-08-04T16:40:00-05:00" }
  ],
  mechanics: [
    { id: "MEC-001", name: "José Ramírez", email: "", phone: "987 100 201", role: "Motor y diagnóstico", status: "active", permission: "operations", activeOrders: 3, efficiency: 92 },
    { id: "MEC-002", name: "Luis Pérez", email: "", phone: "987 100 202", role: "Transmisión y electricidad", status: "active", permission: "operations", activeOrders: 2, efficiency: 88 },
    { id: "MEC-003", name: "Miguel Rojas", email: "", phone: "987 100 203", role: "Suspensión y frenos", status: "active", permission: "operations", activeOrders: 2, efficiency: 90 }
  ]
};

const clientsState = { view: "table", search: "", filters: { type: "all", segment: "all", balance: "all", service: "all" }, sort: "recent", profileId: null, profileTab: "overview" };
let clientsData = [];
let settingsData = null;
let settingsDirty = false;

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function initializeClientsSettingsStorage() {
  try {
    const storedClients = safeStorageGet(CLIENTS_STORAGE_KEY);
    const storedSettings = safeStorageGet(SETTINGS_STORAGE_KEY);
    clientsData = storedClients ? JSON.parse(storedClients) : deepClone(clientsSeed);
    settingsData = storedSettings ? JSON.parse(storedSettings) : deepClone(settingsSeed);
  } catch (error) {
    console.warn("No se pudo restaurar clientes o configuración.", error);
    clientsData = deepClone(clientsSeed);
    settingsData = deepClone(settingsSeed);
  }
  syncClientsWithOrders();
}

function persistClients() {
  safeStorageSet(CLIENTS_STORAGE_KEY, JSON.stringify(clientsData));
}

function persistSettings() {
  safeStorageSet(SETTINGS_STORAGE_KEY, JSON.stringify(settingsData));
}

function syncClientsWithOrders() {
  [...appData.orders, ...appData.history].forEach((order) => {
    if (!order.client) return;
    let client = clientsData.find((item) => item.name.toLowerCase() === order.client.toLowerCase() || item.phone === order.phone);
    if (!client) {
      client = {
        id: `CLI-${String(clientsData.length + 1).padStart(3, "0")}`, type: "persona", name: order.client, document: "", phone: order.phone || "", email: "", address: "", district: "Chiclayo", birthday: "", source: "Orden registrada", status: "active", segment: "nuevo",
        joinedAt: (order.enteredAt || new Date().toISOString()).slice(0, 10), lastVisit: (order.enteredAt || new Date().toISOString()).slice(0, 10), totalSpent: 0, pendingBalance: 0, creditLimit: 0, visits: 1, marketingConsent: false, creditEnabled: false, tags: [], notes: "", vehicles: []
      };
      clientsData.push(client);
    }
    if (order.plate && !client.vehicles.some((vehicle) => vehicle.plate === order.plate)) {
      const [brand = "", ...modelParts] = String(order.vehicle || "").split(" ");
      const yearMatch = String(order.vehicle || "").match(/\b(19|20)\d{2}\b/);
      client.vehicles.push({ id: `VEH-${Date.now()}-${Math.random().toString(16).slice(2, 6)}`, plate: order.plate, brand, model: modelParts.filter((part) => !/^\d{4}$/.test(part)).join(" "), year: yearMatch ? Number(yearMatch[0]) : "", color: "", fuel: "Gasolina", mileage: 0, vin: "", nextService: "", notes: "" });
    }
  });
}

function clientInitials(name = "") {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase() || "CL";
}

function getClientOrders(client) {
  return [...appData.orders, ...appData.history]
    .filter((order) => order.client === client.name || (client.phone && order.phone === client.phone))
    .sort((a, b) => new Date(b.enteredAt || b.deliveredAt || 0) - new Date(a.enteredAt || a.deliveredAt || 0));
}

function getClientNextServiceState(client) {
  const dates = client.vehicles.map((vehicle) => vehicle.nextService).filter(Boolean).sort();
  if (!dates.length) return { key: "none", date: null, label: "Sin programación" };
  const date = new Date(`${dates[0]}T12:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const days = Math.ceil((date - today) / 86400000);
  if (days < 0) return { key: "due", date: dates[0], label: `Vencido hace ${Math.abs(days)} días` };
  if (days <= 30) return { key: "soon", date: dates[0], label: days === 0 ? "Hoy" : `En ${days} días` };
  return { key: "scheduled", date: dates[0], label: formatDate(dates[0], { day: "2-digit", month: "short" }) };
}

function getFilteredClients() {
  const query = clientsState.search.toLowerCase();
  const result = clientsData.filter((client) => {
    const haystack = [client.name, client.document, client.phone, client.email, client.district, ...(client.tags || []), ...(client.vehicles || []).flatMap((vehicle) => [vehicle.plate, vehicle.brand, vehicle.model])].join(" ").toLowerCase();
    const serviceState = getClientNextServiceState(client).key;
    const balanceMatch = clientsState.filters.balance === "all" ||
      (clientsState.filters.balance === "debt" && client.pendingBalance > 0) ||
      (clientsState.filters.balance === "clear" && client.pendingBalance <= 0) ||
      (clientsState.filters.balance === "credit" && client.creditEnabled);
    return (!query || haystack.includes(query)) &&
      (clientsState.filters.type === "all" || client.type === clientsState.filters.type) &&
      (clientsState.filters.segment === "all" || client.segment === clientsState.filters.segment) &&
      balanceMatch &&
      (clientsState.filters.service === "all" || serviceState === clientsState.filters.service);
  });
  const sorters = {
    recent: (a, b) => new Date(b.lastVisit || 0) - new Date(a.lastVisit || 0),
    spent: (a, b) => b.totalSpent - a.totalSpent,
    visits: (a, b) => b.visits - a.visits,
    name: (a, b) => a.name.localeCompare(b.name, "es"),
    balance: (a, b) => b.pendingBalance - a.pendingBalance
  };
  return result.sort(sorters[clientsState.sort] || sorters.recent);
}

function clientSegmentPill(segment) {
  const map = { vip: ["VIP", "success"], frecuente: ["Frecuente", "info"], nuevo: ["Nuevo", "warning"], inactivo: ["Inactivo", "neutral"] };
  const [label, type] = map[segment] || [segment, "neutral"];
  return `<span class="pill pill--${type}">${escapeHTML(label)}</span>`;
}

function renderClientsMetrics() {
  const active = clientsData.filter((client) => client.status === "active").length;
  const value = clientsData.reduce((sum, client) => sum + Number(client.totalSpent || 0), 0);
  const debt = clientsData.reduce((sum, client) => sum + Number(client.pendingBalance || 0), 0);
  const due = clientsData.filter((client) => ["due", "soon"].includes(getClientNextServiceState(client).key)).length;
  document.querySelector("#clientsMetrics").innerHTML = [
    { icon: "users", label: "Clientes activos", value: active, note: `${clientsData.length} registrados`, tone: "info" },
    { icon: "wallet", label: "Facturación acumulada", value: formatCurrency(value), note: "Valor histórico", tone: "success" },
    { icon: "alert", label: "Saldo pendiente", value: formatCurrency(debt), note: `${clientsData.filter((client) => client.pendingBalance > 0).length} cuentas`, tone: debt ? "warning" : "success" },
    { icon: "calendar", label: "Mantenimientos próximos", value: due, note: "Vencidos o 30 días", tone: "warning" }
  ].map((metric) => `<article class="module-metric module-metric--${metric.tone}"><span><svg><use href="#icon-${metric.icon}"></use></svg></span><div><small>${metric.label}</small><strong>${metric.value}</strong><p>${metric.note}</p></div></article>`).join("");
}

function renderClientsTable(clients) {
  const body = document.querySelector("#clientsTableBody");
  const empty = document.querySelector("#clientsEmpty");
  body.innerHTML = clients.map((client) => {
    const vehicles = client.vehicles || [];
    return `<tr>
      <td><div class="client-list-identity"><span class="client-avatar">${clientInitials(client.name)}</span><div><strong>${escapeHTML(client.name)}</strong><small>${escapeHTML(client.document || "Sin documento")} · ${client.type === "empresa" ? "Empresa" : "Persona"}</small></div></div></td>
      <td class="client-contact-cell"><span>${escapeHTML(client.phone || "—")}</span><span>${escapeHTML(client.email || "Sin correo")}</span></td>
      <td><strong>${vehicles.length}</strong><small>${vehicles.slice(0, 2).map((vehicle) => escapeHTML(vehicle.plate)).join(" · ") || "Sin vehículo"}</small></td>
      <td>${client.lastVisit ? formatDate(client.lastVisit, { day: "2-digit", month: "short", year: "numeric" }) : "—"}<small>${client.visits} visitas</small></td>
      <td><strong>${formatCurrency(client.totalSpent || 0)}</strong></td>
      <td class="${client.pendingBalance > 0 ? "client-balance--danger" : "client-balance--clear"}">${client.pendingBalance > 0 ? formatCurrency(client.pendingBalance) : "Al día"}</td>
      <td>${clientSegmentPill(client.segment)}</td>
      <td><div class="client-row-actions"><button class="icon-button" type="button" data-client-profile="${client.id}" aria-label="Ver ficha"><svg><use href="#icon-eye"></use></svg></button><button class="icon-button" type="button" data-client-edit="${client.id}" aria-label="Editar"><svg><use href="#icon-edit"></use></svg></button></div></td>
    </tr>`;
  }).join("");
  empty.hidden = clients.length > 0;
  document.querySelector("#clientsTableSummary").textContent = `${clients.length} registros`;
}

function renderClientsCards(clients) {
  const grid = document.querySelector("#clientsCardGrid");
  grid.innerHTML = clients.map((client) => {
    const next = getClientNextServiceState(client);
    return `<article class="client-card">
      <div class="client-card__header"><div class="client-card__identity"><span class="client-avatar">${clientInitials(client.name)}</span><div><strong>${escapeHTML(client.name)}</strong><small>${escapeHTML(client.document || "Sin documento")}</small></div></div>${clientSegmentPill(client.segment)}</div>
      <div class="client-card__vehicles">${(client.vehicles || []).slice(0, 3).map((vehicle) => `<span class="client-vehicle-chip"><svg><use href="#icon-car"></use></svg>${escapeHTML(vehicle.plate)}</span>`).join("") || '<span class="client-tag">Sin vehículos</span>'}</div>
      <div class="client-card__meta"><div><span>Facturación</span><strong>${formatCurrency(client.totalSpent || 0)}</strong></div><div><span>Saldo</span><strong class="${client.pendingBalance > 0 ? "client-balance--danger" : "client-balance--clear"}">${client.pendingBalance > 0 ? formatCurrency(client.pendingBalance) : "Al día"}</strong></div><div><span>Visitas</span><strong>${client.visits}</strong></div><div><span>Próximo servicio</span><strong>${escapeHTML(next.label)}</strong></div></div>
      <div class="client-card__footer"><div><small>${escapeHTML(client.phone || "Sin teléfono")}</small><strong>${escapeHTML(client.district || "Sin distrito")}</strong></div><div class="client-row-actions"><button class="button button--ghost button--small" type="button" data-client-profile="${client.id}">Ver ficha</button><button class="icon-button" type="button" data-client-edit="${client.id}" aria-label="Editar"><svg><use href="#icon-edit"></use></svg></button></div></div>
    </article>`;
  }).join("");
}

function renderClientSidePanels() {
  const reminders = clientsData.map((client) => ({ client, service: getClientNextServiceState(client) })).filter((item) => ["due", "soon"].includes(item.service.key)).sort((a, b) => new Date(a.service.date) - new Date(b.service.date)).slice(0, 5);
  document.querySelector("#clientReminderCount").textContent = reminders.length;
  document.querySelector("#clientReminderList").innerHTML = reminders.length ? reminders.map(({ client, service }) => `<button class="client-reminder-item text-button" type="button" data-client-profile="${client.id}"><span><svg><use href="#icon-calendar"></use></svg></span><div><strong>${escapeHTML(client.name)}</strong><small>${escapeHTML((client.vehicles[0] || {}).plate || "Sin placa")}</small></div><time>${escapeHTML(service.label)}</time></button>`).join("") : '<div class="empty-inline">No hay recordatorios pendientes.</div>';
  const ranking = [...clientsData].sort((a, b) => b.totalSpent - a.totalSpent).slice(0, 5);
  document.querySelector("#clientRankingList").innerHTML = ranking.map((client, index) => `<button class="client-ranking-item text-button" type="button" data-client-profile="${client.id}"><span>${index + 1}</span><div><strong>${escapeHTML(client.name)}</strong><small>${client.visits} visitas</small></div><strong>${formatCurrency(client.totalSpent)}</strong></button>`).join("");
  const inactive = clientsData.filter((client) => client.segment === "inactivo" || (client.lastVisit && Date.now() - new Date(client.lastVisit).getTime() > 15552000000));
  document.querySelector("#clientOpportunityTitle").textContent = inactive.length ? `Recupera ${inactive.length} cliente${inactive.length === 1 ? "" : "s"}` : "Premia a tus clientes frecuentes";
  document.querySelector("#clientOpportunityText").textContent = inactive.length ? "Tienen más de seis meses sin volver al taller." : "Crea una campaña de mantenimiento preventivo.";
}

function renderClientsModule() {
  if (!clientsData.length) initializeClientsSettingsStorage();
  const clients = getFilteredClients();
  renderClientsMetrics();
  renderClientsTable(clients);
  renderClientsCards(clients);
  renderClientSidePanels();
  document.querySelector("#clientsTablePanel").hidden = clientsState.view !== "table";
  document.querySelector("#clientsCardGrid").hidden = clientsState.view !== "cards";
  document.querySelector("#clientsTableViewButton").classList.toggle("is-active", clientsState.view === "table");
  document.querySelector("#clientsCardViewButton").classList.toggle("is-active", clientsState.view === "cards");
  document.querySelector("#clientsResultCount").textContent = `${clients.length} cliente${clients.length === 1 ? "" : "s"}`;
}

function openClientEditor(clientId = null) {
  const client = clientId ? clientsData.find((item) => item.id === clientId) : null;
  document.querySelector("#clientEditorTitle").textContent = client ? "Editar cliente" : "Nuevo cliente";
  document.querySelector("#clientEditorId").value = client?.id || "";
  document.querySelector("#clientEditorType").value = client?.type || "persona";
  document.querySelector("#clientEditorSegment").value = client?.segment || "nuevo";
  document.querySelector("#clientEditorName").value = client?.name || "";
  document.querySelector("#clientEditorDocument").value = client?.document || "";
  document.querySelector("#clientEditorPhone").value = client?.phone || "";
  document.querySelector("#clientEditorEmail").value = client?.email || "";
  document.querySelector("#clientEditorBirthday").value = client?.birthday || "";
  document.querySelector("#clientEditorAddress").value = client?.address || "";
  document.querySelector("#clientEditorDistrict").value = client?.district || "Chiclayo";
  document.querySelector("#clientEditorSource").value = client?.source || "Recomendación";
  document.querySelector("#clientEditorCreditLimit").value = client?.creditLimit || 0;
  document.querySelector("#clientEditorStatus").value = client?.status || "active";
  document.querySelector("#clientEditorMarketing").checked = Boolean(client?.marketingConsent);
  document.querySelector("#clientEditorCreditEnabled").checked = Boolean(client?.creditEnabled);
  document.querySelector("#clientEditorTags").value = (client?.tags || []).join(", ");
  document.querySelector("#clientEditorNotes").value = client?.notes || "";
  openModal("clientEditorModal");
  setTimeout(() => document.querySelector("#clientEditorName").focus(), 50);
}

function saveClientFromEditor() {
  const form = document.querySelector("#clientEditorForm");
  if (!form.reportValidity()) return;
  const id = document.querySelector("#clientEditorId").value;
  const payload = {
    type: document.querySelector("#clientEditorType").value,
    segment: document.querySelector("#clientEditorSegment").value,
    name: document.querySelector("#clientEditorName").value.trim(),
    document: document.querySelector("#clientEditorDocument").value.trim(),
    phone: document.querySelector("#clientEditorPhone").value.trim(),
    email: document.querySelector("#clientEditorEmail").value.trim(),
    birthday: document.querySelector("#clientEditorBirthday").value,
    address: document.querySelector("#clientEditorAddress").value.trim(),
    district: document.querySelector("#clientEditorDistrict").value.trim(),
    source: document.querySelector("#clientEditorSource").value,
    creditLimit: Number(document.querySelector("#clientEditorCreditLimit").value || 0),
    status: document.querySelector("#clientEditorStatus").value,
    marketingConsent: document.querySelector("#clientEditorMarketing").checked,
    creditEnabled: document.querySelector("#clientEditorCreditEnabled").checked,
    tags: document.querySelector("#clientEditorTags").value.split(",").map((tag) => tag.trim()).filter(Boolean),
    notes: document.querySelector("#clientEditorNotes").value.trim()
  };
  if (id) {
    const index = clientsData.findIndex((client) => client.id === id);
    if (index === -1) return;
    clientsData[index] = { ...clientsData[index], ...payload };
    showToast("Cliente actualizado", "Los datos se guardaron correctamente.", "check");
  } else {
    const nextId = Math.max(0, ...clientsData.map((client) => Number(client.id.replace(/\D/g, "")) || 0)) + 1;
    clientsData.unshift({
      id: `CLI-${String(nextId).padStart(3, "0")}`,
      ...payload,
      joinedAt: new Date().toISOString().slice(0, 10), lastVisit: null, totalSpent: 0, pendingBalance: 0, visits: 0, vehicles: []
    });
    showToast("Cliente registrado", "La ficha ya está disponible en el catálogo.", "check");
  }
  persistClients();
  closeModal("clientEditorModal");
  renderClientsModule();
}

function renderClientProfile() {
  const client = clientsData.find((item) => item.id === clientsState.profileId);
  if (!client) return;
  const orders = getClientOrders(client);
  const completed = orders.filter((order) => appData.history.includes(order));
  const active = orders.filter((order) => appData.orders.includes(order));
  document.querySelector("#clientProfileAvatar").textContent = clientInitials(client.name);
  document.querySelector("#clientProfileDocument").textContent = `${client.type === "empresa" ? "RUC" : "DNI"}: ${client.document || "No registrado"} · ${clientSegmentPill(client.segment).replace(/<[^>]+>/g, "")}`;
  document.querySelector("#clientProfileTitle").textContent = client.name;
  document.querySelector("#clientProfileContact").textContent = [client.phone, client.email, client.district].filter(Boolean).join(" · ") || "Sin datos de contacto";
  document.querySelector("#clientProfileVehicleCount").textContent = client.vehicles.length;
  document.querySelectorAll("[data-client-tab]").forEach((button) => button.classList.toggle("is-active", button.dataset.clientTab === clientsState.profileTab));
  const content = document.querySelector("#clientProfileContent");

  if (clientsState.profileTab === "overview") {
    const next = getClientNextServiceState(client);
    content.innerHTML = `<div class="client-profile-grid">
      <div class="client-profile-summary">
        <div class="client-stat"><small>Facturación histórica</small><strong>${formatCurrency(client.totalSpent)}</strong></div>
        <div class="client-stat"><small>Saldo pendiente</small><strong class="${client.pendingBalance > 0 ? "client-balance--danger" : "client-balance--clear"}">${client.pendingBalance > 0 ? formatCurrency(client.pendingBalance) : "Al día"}</strong></div>
        <div class="client-stat"><small>Visitas</small><strong>${client.visits}</strong></div>
        <div class="client-stat"><small>Próximo servicio</small><strong>${escapeHTML(next.label)}</strong></div>
      </div>
      <div class="client-profile-contact-card"><p class="panel__eyebrow">Datos del cliente</p><h3>Contacto y condiciones</h3><dl>
        <div><dt>Teléfono</dt><dd>${escapeHTML(client.phone || "—")}</dd></div><div><dt>Correo</dt><dd>${escapeHTML(client.email || "—")}</dd></div>
        <div><dt>Dirección</dt><dd>${escapeHTML([client.address, client.district].filter(Boolean).join(", ") || "—")}</dd></div>
        <div><dt>Origen</dt><dd>${escapeHTML(client.source || "—")}</dd></div><div><dt>Crédito</dt><dd>${client.creditEnabled ? formatCurrency(client.creditLimit) : "No habilitado"}</dd></div>
      </dl></div>
      <div class="client-profile-activity field-span-2"><p class="panel__eyebrow">Actividad reciente</p><h3>Órdenes y contacto</h3>${orders.slice(0, 5).map((order) => `<div class="client-activity-row"><span><svg><use href="#icon-wrench"></use></svg></span><div><strong>${escapeHTML(order.id)} · ${escapeHTML(order.service)}</strong><small>${escapeHTML(order.plate)} · ${formatDate(order.enteredAt, { day: "2-digit", month: "short", year: "numeric" })}</small></div><strong>${formatCurrency(order.billed ?? order.budget ?? order.currentCost ?? 0)}</strong></div>`).join("") || '<p class="empty-inline">Este cliente aún no registra órdenes.</p>'}</div>
    </div>`;
  } else if (clientsState.profileTab === "vehicles") {
    content.innerHTML = `<div class="client-vehicle-grid">${client.vehicles.map((vehicle) => `<article class="client-vehicle-card"><div class="client-vehicle-head"><div><span class="client-vehicle-icon"><svg><use href="#icon-car"></use></svg></span><div><strong>${escapeHTML(vehicle.brand)} ${escapeHTML(vehicle.model)}</strong><small>${escapeHTML(vehicle.plate)} · ${escapeHTML(String(vehicle.year || "Año no registrado"))}</small></div></div><button class="icon-button" type="button" data-vehicle-edit="${vehicle.id}" aria-label="Editar vehículo"><svg><use href="#icon-edit"></use></svg></button></div><div class="client-vehicle-details"><span>Color: <strong>${escapeHTML(vehicle.color || "—")}</strong></span><span>Combustible: <strong>${escapeHTML(vehicle.fuel || "—")}</strong></span><span>Kilometraje: <strong>${Number(vehicle.mileage || 0).toLocaleString("es-PE")} km</strong></span><span>VIN: <strong>${escapeHTML(vehicle.vin || "—")}</strong></span></div><div class="client-vehicle-service"><small>Próximo mantenimiento</small><strong>${vehicle.nextService ? formatDate(vehicle.nextService, { day: "2-digit", month: "long", year: "numeric" }) : "Sin programar"}</strong></div>${vehicle.notes ? `<small>${escapeHTML(vehicle.notes)}</small>` : ""}</article>`).join("") || '<p class="empty-inline">No hay vehículos registrados.</p>'}</div>`;
  } else if (clientsState.profileTab === "history") {
    content.innerHTML = `<div class="responsive-table-wrap"><table class="data-table"><thead><tr><th>Orden</th><th>Vehículo</th><th>Servicio</th><th>Fecha</th><th>Estado</th><th>Total</th></tr></thead><tbody>${orders.map((order) => `<tr><td><strong>${escapeHTML(order.id)}</strong></td><td>${escapeHTML(order.plate)}<small>${escapeHTML(order.vehicle || "")}</small></td><td>${escapeHTML(order.service || "—")}</td><td>${formatDate(order.enteredAt, { day: "2-digit", month: "short", year: "numeric" })}</td><td>${escapeHTML(statusConfig[order.status]?.label || order.status || "—")}</td><td><strong>${formatCurrency(order.billed ?? order.budget ?? order.currentCost ?? 0)}</strong></td></tr>`).join("") || '<tr><td colspan="6">Sin historial registrado.</td></tr>'}</tbody></table></div>`;
  } else if (clientsState.profileTab === "finance") {
    const average = completed.length ? completed.reduce((sum, order) => sum + Number(order.billed || 0), 0) / completed.length : 0;
    const creditAvailable = Math.max(0, Number(client.creditLimit || 0) - Number(client.pendingBalance || 0));
    content.innerHTML = `<div class="client-finance-grid"><article class="client-finance-card"><p class="panel__eyebrow">Cuenta corriente</p><h3>Resumen financiero</h3><dl><div><dt>Total facturado</dt><dd>${formatCurrency(client.totalSpent)}</dd></div><div><dt>Ticket promedio</dt><dd>${formatCurrency(average)}</dd></div><div><dt>Saldo pendiente</dt><dd class="${client.pendingBalance > 0 ? "client-balance--danger" : "client-balance--clear"}">${formatCurrency(client.pendingBalance)}</dd></div><div><dt>Crédito disponible</dt><dd>${client.creditEnabled ? formatCurrency(creditAvailable) : "No habilitado"}</dd></div></dl></article><article class="client-finance-card"><p class="panel__eyebrow">Situación actual</p><h3>Órdenes abiertas</h3><dl><div><dt>Órdenes activas</dt><dd>${active.length}</dd></div><div><dt>Presupuesto comprometido</dt><dd>${formatCurrency(active.reduce((sum, order) => sum + Number(order.budget || 0), 0))}</dd></div><div><dt>Pagos pendientes</dt><dd>${formatCurrency(client.pendingBalance)}</dd></div><div><dt>Condición</dt><dd>${client.creditEnabled ? "Crédito autorizado" : "Contado"}</dd></div></dl></article></div>`;
  } else {
    content.innerHTML = `<article class="client-note-card"><p class="panel__eyebrow">Información interna</p><h3>Notas y preferencias</h3><p>${escapeHTML(client.notes || "No existen notas internas para este cliente.")}</p><div class="client-tags">${(client.tags || []).map((tag) => `<span class="client-tag">${escapeHTML(tag)}</span>`).join("")}</div></article>`;
  }
}

function openClientProfile(clientId) {
  const client = clientsData.find((item) => item.id === clientId);
  if (!client) return;
  clientsState.profileId = clientId;
  clientsState.profileTab = "overview";
  renderClientProfile();
  openModal("clientProfileModal");
}

function openVehicleEditor(vehicleId = null) {
  const client = clientsData.find((item) => item.id === clientsState.profileId);
  if (!client) return;
  const vehicle = vehicleId ? client.vehicles.find((item) => item.id === vehicleId) : null;
  document.querySelector("#vehicleEditorTitle").textContent = vehicle ? "Editar vehículo" : "Agregar vehículo";
  document.querySelector("#vehicleEditorId").value = vehicle?.id || "";
  document.querySelector("#vehicleEditorPlate").value = vehicle?.plate || "";
  document.querySelector("#vehicleEditorBrand").value = vehicle?.brand || "";
  document.querySelector("#vehicleEditorModel").value = vehicle?.model || "";
  document.querySelector("#vehicleEditorYear").value = vehicle?.year || "";
  document.querySelector("#vehicleEditorColor").value = vehicle?.color || "";
  document.querySelector("#vehicleEditorFuel").value = vehicle?.fuel || "Gasolina";
  document.querySelector("#vehicleEditorMileage").value = vehicle?.mileage || 0;
  document.querySelector("#vehicleEditorVin").value = vehicle?.vin || "";
  document.querySelector("#vehicleEditorNextService").value = vehicle?.nextService || "";
  document.querySelector("#vehicleEditorNotes").value = vehicle?.notes || "";
  openModal("vehicleEditorModal");
}

function saveVehicleFromEditor() {
  const form = document.querySelector("#vehicleEditorForm");
  if (!form.reportValidity()) return;
  const client = clientsData.find((item) => item.id === clientsState.profileId);
  if (!client) return;
  const vehicleId = document.querySelector("#vehicleEditorId").value;
  const payload = {
    plate: document.querySelector("#vehicleEditorPlate").value.trim().toUpperCase(), brand: document.querySelector("#vehicleEditorBrand").value.trim(), model: document.querySelector("#vehicleEditorModel").value.trim(),
    year: Number(document.querySelector("#vehicleEditorYear").value || 0) || "", color: document.querySelector("#vehicleEditorColor").value.trim(), fuel: document.querySelector("#vehicleEditorFuel").value,
    mileage: Number(document.querySelector("#vehicleEditorMileage").value || 0), vin: document.querySelector("#vehicleEditorVin").value.trim().toUpperCase(), nextService: document.querySelector("#vehicleEditorNextService").value, notes: document.querySelector("#vehicleEditorNotes").value.trim()
  };
  if (vehicleId) {
    const index = client.vehicles.findIndex((vehicle) => vehicle.id === vehicleId);
    client.vehicles[index] = { ...client.vehicles[index], ...payload };
    showToast("Vehículo actualizado", "Los datos técnicos fueron guardados.", "car");
  } else {
    client.vehicles.push({ id: `VEH-${Date.now()}`, ...payload });
    showToast("Vehículo agregado", "Ya forma parte de la ficha del cliente.", "car");
  }
  persistClients();
  closeModal("vehicleEditorModal");
  renderClientProfile();
  renderClientsModule();
}

function prefillNewOrderFromClient(clientId) {
  const client = clientsData.find((item) => item.id === clientId);
  if (!client) return;
  closeModal("clientProfileModal");
  setActiveView("nueva-orden");
  const vehicle = client.vehicles[0];
  const assignments = {
    clientName: client.name, clientDocument: client.document, clientPhone: client.phone, clientEmail: client.email,
    vehiclePlate: vehicle?.plate || "", vehicleBrand: vehicle?.brand || "", vehicleModel: vehicle?.model || "", vehicleYear: vehicle?.year || "", vehicleColor: vehicle?.color || "", vehicleMileage: vehicle?.mileage || "", vehicleVin: vehicle?.vin || ""
  };
  Object.entries(assignments).forEach(([id, value]) => { const input = document.querySelector(`#${id}`); if (input) input.value = value; });
  const fuel = document.querySelector("#vehicleFuel");
  if (fuel && vehicle?.fuel) fuel.value = vehicle.fuel;
  showToast("Datos precargados", `${client.name} y su vehículo fueron cargados en la orden.`, "check");
}

function exportClientsCsv() {
  const header = ["ID", "Tipo", "Nombre", "Documento", "Teléfono", "Correo", "Distrito", "Segmento", "Vehículos", "Visitas", "Facturación", "Saldo"];
  const rows = getFilteredClients().map((client) => [client.id, client.type, client.name, client.document, client.phone, client.email, client.district, client.segment, client.vehicles.map((vehicle) => vehicle.plate).join(" | "), client.visits, client.totalSpent, client.pendingBalance]);
  const csv = [header, ...rows].map((row) => row.map((cell) => `"${String(cell ?? "").replaceAll('"', '""')}"`).join(",")).join("\n");
  downloadTextFile(`\uFEFF${csv}`, `clientes-torqueflow-${new Date().toISOString().slice(0, 10)}.csv`, "text/csv;charset=utf-8");
  showToast("Clientes exportados", "El archivo CSV se descargó correctamente.", "download");
}

function getSettingInput(id) {
  return document.querySelector(`#${id}`);
}

function setSettingValue(id, value) {
  const element = getSettingInput(id);
  if (!element) return;
  if (element.type === "checkbox") element.checked = Boolean(value);
  else element.value = value ?? "";
}

function getSettingValue(id, numeric = false) {
  const element = getSettingInput(id);
  if (!element) return numeric ? 0 : "";
  if (element.type === "checkbox") return element.checked;
  return numeric ? Number(element.value || 0) : element.value;
}

function resolveConfiguredTheme(theme) {
  if (theme !== "system") return theme;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function applyVisualSettings() {
  const business = settingsData.business;
  const accent = business.accent || "#2f8cff";
  document.documentElement.style.setProperty("--primary", accent);
  document.documentElement.style.setProperty("--primary-strong", accent);
  document.documentElement.style.setProperty("--accent", accent);
  applyTheme(resolveConfiguredTheme(business.theme));
  document.body.classList.toggle("density-compact", business.density === "compact");
  const name = business.workshopName || "TorqueFlow Taller";
  appData.workshop.name = name;
  appData.workshop.currency = settingsData.finance.currency || "PEN";
  document.querySelectorAll(".brand__text strong").forEach((node) => { node.textContent = name.replace(/\s+Taller$/i, ""); });
}

function populateSettingsForm() {
  const b = settingsData.business;
  setSettingValue("settingWorkshopName", b.workshopName); setSettingValue("settingLegalName", b.legalName); setSettingValue("settingRuc", b.ruc); setSettingValue("settingPhone", b.phone); setSettingValue("settingWhatsapp", b.whatsapp); setSettingValue("settingEmail", b.email); setSettingValue("settingAddress", b.address); setSettingValue("settingDistrict", b.district); setSettingValue("settingTimezone", b.timezone); setSettingValue("settingAccent", b.accent); setSettingValue("settingAccentText", b.accent); setSettingValue("settingDensity", b.density);
  const themeRadio = document.querySelector(`input[name="settingTheme"][value="${b.theme}"]`); if (themeRadio) themeRadio.checked = true;

  const o = settingsData.operations;
  setSettingValue("settingOrderPrefix", o.orderPrefix); setSettingValue("settingNextOrder", o.nextOrder); setSettingValue("settingDeliveryHours", o.deliveryHours); setSettingValue("settingBudgetThreshold", o.budgetThreshold); setSettingValue("settingRequirePhotos", o.requirePhotos); setSettingValue("settingRequireApproval", o.requireApproval); setSettingValue("settingPreventNegativeStock", o.preventNegativeStock); setSettingValue("settingAutoClose", o.autoClose); setSettingValue("settingStartAlert", o.startAlert); setSettingValue("settingExternalAlert", o.externalAlert); setSettingValue("settingWarrantyAlert", o.warrantyAlert); setSettingValue("settingFuelSteps", o.fuelSteps);

  const s = settingsData.services;
  setSettingValue("settingLaborHour", s.laborHour); setSettingValue("settingDiagnosticMinimum", s.diagnosticMinimum); setSettingValue("settingDiagnosticMinutes", s.diagnosticMinutes); setSettingValue("settingDefaultWarranty", s.defaultWarranty);

  const f = settingsData.finance;
  setSettingValue("settingTaxEnabled", f.taxEnabled); setSettingValue("settingCurrency", f.currency); setSettingValue("settingTaxRate", f.taxRate); setSettingValue("settingPartsMargin", f.partsMargin); setSettingValue("settingExternalMargin", f.externalMargin); setSettingValue("settingDefaultCredit", f.defaultCredit); setSettingValue("settingLowStock", f.lowStock);

  const n = settingsData.notifications;
  setSettingValue("settingWhatsappEnabled", n.whatsappEnabled); setSettingValue("settingEmailEnabled", n.emailEnabled); setSettingValue("settingNotifyCreated", n.notifyCreated); setSettingValue("settingNotifyApproval", n.notifyApproval); setSettingValue("settingNotifyStatus", n.notifyStatus); setSettingValue("settingNotifyReady", n.notifyReady); setSettingValue("settingNotifyStock", n.notifyStock); setSettingValue("settingNotifyOverdue", n.notifyOverdue); setSettingValue("settingTemplateCreated", n.templateCreated); setSettingValue("settingTemplateApproval", n.templateApproval); setSettingValue("settingTemplateReady", n.templateReady);

  const d = settingsData.documents;
  setSettingValue("settingDocumentLogo", d.logo); setSettingValue("settingDocumentDiagnosis", d.diagnosis); setSettingValue("settingDocumentInternalCosts", d.internalCosts); setSettingValue("settingDocumentSignature", d.signature); setSettingValue("settingDocumentHeader", d.header); setSettingValue("settingDocumentFooter", d.footer); setSettingValue("settingDocumentTerms", d.terms);

  const sec = settingsData.security;
  setSettingValue("settingAutosave", sec.autosave); setSettingValue("settingAuditLog", sec.auditLog); setSettingValue("settingAutomaticBackup", sec.automaticBackup); setSettingValue("settingDeleteConfirmation", sec.deleteConfirmation); setSettingValue("settingSessionTimeout", sec.sessionTimeout); setSettingValue("settingBackupFrequency", sec.backupFrequency);
  updateSettingsPreview();
}

function readSettingsForm() {
  const selectedTheme = document.querySelector('input[name="settingTheme"]:checked')?.value || "dark";
  settingsData.business = { ...settingsData.business, workshopName: getSettingValue("settingWorkshopName").trim(), legalName: getSettingValue("settingLegalName").trim(), ruc: getSettingValue("settingRuc").trim(), phone: getSettingValue("settingPhone").trim(), whatsapp: getSettingValue("settingWhatsapp").trim(), email: getSettingValue("settingEmail").trim(), address: getSettingValue("settingAddress").trim(), district: getSettingValue("settingDistrict").trim(), timezone: getSettingValue("settingTimezone"), theme: selectedTheme, accent: getSettingValue("settingAccent"), density: getSettingValue("settingDensity") };
  settingsData.operations = { ...settingsData.operations, orderPrefix: getSettingValue("settingOrderPrefix").trim().toUpperCase(), nextOrder: getSettingValue("settingNextOrder", true), deliveryHours: getSettingValue("settingDeliveryHours"), budgetThreshold: getSettingValue("settingBudgetThreshold", true), requirePhotos: getSettingValue("settingRequirePhotos"), requireApproval: getSettingValue("settingRequireApproval"), preventNegativeStock: getSettingValue("settingPreventNegativeStock"), autoClose: getSettingValue("settingAutoClose"), startAlert: getSettingValue("settingStartAlert"), externalAlert: getSettingValue("settingExternalAlert"), warrantyAlert: getSettingValue("settingWarrantyAlert", true), fuelSteps: getSettingValue("settingFuelSteps") };
  settingsData.services = { ...settingsData.services, laborHour: getSettingValue("settingLaborHour", true), diagnosticMinimum: getSettingValue("settingDiagnosticMinimum", true), diagnosticMinutes: getSettingValue("settingDiagnosticMinutes", true), defaultWarranty: getSettingValue("settingDefaultWarranty", true) };
  settingsData.finance = { ...settingsData.finance, taxEnabled: getSettingValue("settingTaxEnabled"), currency: getSettingValue("settingCurrency"), taxRate: getSettingValue("settingTaxRate", true), partsMargin: getSettingValue("settingPartsMargin", true), externalMargin: getSettingValue("settingExternalMargin", true), defaultCredit: getSettingValue("settingDefaultCredit", true), lowStock: getSettingValue("settingLowStock", true) };
  settingsData.notifications = { ...settingsData.notifications, whatsappEnabled: getSettingValue("settingWhatsappEnabled"), emailEnabled: getSettingValue("settingEmailEnabled"), notifyCreated: getSettingValue("settingNotifyCreated"), notifyApproval: getSettingValue("settingNotifyApproval"), notifyStatus: getSettingValue("settingNotifyStatus"), notifyReady: getSettingValue("settingNotifyReady"), notifyStock: getSettingValue("settingNotifyStock"), notifyOverdue: getSettingValue("settingNotifyOverdue"), templateCreated: getSettingValue("settingTemplateCreated"), templateApproval: getSettingValue("settingTemplateApproval"), templateReady: getSettingValue("settingTemplateReady") };
  settingsData.documents = { ...settingsData.documents, logo: getSettingValue("settingDocumentLogo"), diagnosis: getSettingValue("settingDocumentDiagnosis"), internalCosts: getSettingValue("settingDocumentInternalCosts"), signature: getSettingValue("settingDocumentSignature"), header: getSettingValue("settingDocumentHeader"), footer: getSettingValue("settingDocumentFooter"), terms: getSettingValue("settingDocumentTerms") };
  settingsData.security = { ...settingsData.security, autosave: getSettingValue("settingAutosave"), auditLog: getSettingValue("settingAuditLog"), automaticBackup: getSettingValue("settingAutomaticBackup"), deleteConfirmation: getSettingValue("settingDeleteConfirmation"), sessionTimeout: getSettingValue("settingSessionTimeout"), backupFrequency: getSettingValue("settingBackupFrequency") };
}

function markSettingsDirty() {
  settingsDirty = true;
  const state = document.querySelector("#settingsSaveState");
  state.className = "settings-save-state is-dirty";
  state.innerHTML = "<i></i> Cambios sin guardar";
  updateSettingsPreview();
}

function markSettingsSaved() {
  settingsDirty = false;
  const state = document.querySelector("#settingsSaveState");
  state.className = "settings-save-state is-saved";
  state.innerHTML = "<i></i> Guardado";
  setTimeout(() => { if (!settingsDirty) { state.className = "settings-save-state"; state.innerHTML = "<i></i> Sin cambios"; } }, 1800);
}

function updateSettingsPreview() {
  const workshopName = getSettingValue("settingWorkshopName") || settingsData.business.workshopName;
  const initials = workshopName.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase();
  const preview = document.querySelector("#workshopLogoPreview");
  if (preview) preview.querySelector("span").textContent = initials || "TF";
  const prefix = getSettingValue("settingOrderPrefix") || settingsData.operations.orderPrefix;
  const number = getSettingValue("settingNextOrder", true) || settingsData.operations.nextOrder;
  const orderPreview = document.querySelector("#orderNumberPreview");
  if (orderPreview) orderPreview.textContent = `${prefix}-${number}`;
  const accentText = document.querySelector("#settingAccentText");
  const accent = document.querySelector("#settingAccent");
  if (accent && accentText && document.activeElement !== accentText) accentText.value = accent.value;
  updateSecurityScore();
}

function renderSettingsUsers() {
  document.querySelector("#settingsUsersBody").innerHTML = settingsData.users.map((user) => `<tr><td><div class="settings-member"><span class="settings-member-avatar">${clientInitials(user.name)}</span><div><strong>${escapeHTML(user.name)}</strong><small>${escapeHTML(user.email || user.phone || "Sin contacto")}</small></div></div></td><td>${escapeHTML(user.role)}</td><td><span class="pill pill--${user.status === "active" ? "success" : "neutral"}">${user.status === "active" ? "Activo" : "Inactivo"}</span></td><td>${user.lastAccess ? formatDate(user.lastAccess, { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" }) : "Nunca"}</td><td>${escapeHTML({ full: "Completo", operations: "Operación", inventory: "Inventario", read: "Lectura" }[user.permission] || user.permission)}</td><td><div class="settings-member-actions"><button class="icon-button" type="button" data-settings-member-edit="user:${user.id}" aria-label="Editar"><svg><use href="#icon-edit"></use></svg></button><button class="icon-button" type="button" data-settings-member-toggle="user:${user.id}" aria-label="Cambiar estado"><svg><use href="#icon-shield"></use></svg></button></div></td></tr>`).join("");
}

function renderSettingsMechanics() {
  document.querySelector("#settingsMechanicsGrid").innerHTML = settingsData.mechanics.map((mechanic) => `<article class="settings-mechanic-card"><div class="settings-mechanic-card__head"><span class="settings-member-avatar">${clientInitials(mechanic.name)}</span><div><strong>${escapeHTML(mechanic.name)}</strong><small>${escapeHTML(mechanic.role)}</small></div><span class="pill pill--${mechanic.status === "active" ? "success" : "neutral"}">${mechanic.status === "active" ? "Activo" : "Inactivo"}</span></div><div class="settings-mechanic-card__stats"><div><span>Órdenes activas</span><strong>${mechanic.activeOrders || 0}</strong></div><div><span>Eficiencia</span><strong>${mechanic.efficiency || 0}%</strong></div></div><div class="settings-member-actions"><button class="button button--ghost button--small" type="button" data-settings-member-edit="mechanic:${mechanic.id}"><svg><use href="#icon-edit"></use></svg> Editar</button><button class="icon-button" type="button" data-settings-member-toggle="mechanic:${mechanic.id}" aria-label="Cambiar estado"><svg><use href="#icon-shield"></use></svg></button></div></article>`).join("");
}

function renderSettingsServiceCategories() {
  document.querySelector("#settingsServicesCount").textContent = `${serviceCatalogData.length} servicios`;
  document.querySelector("#settingsServiceCategories").innerHTML = settingsData.services.categories.map((category) => {
    const count = serviceCatalogData.filter((service) => service.category === category.id).length;
    return `<div class="settings-category-row"><div><strong>${escapeHTML(category.name)}</strong><small>${count} servicios configurados</small></div><div class="settings-category-controls"><label class="input-suffix"><input type="number" min="0" max="200" value="${category.margin}" data-category-margin="${category.id}" aria-label="Margen de ${escapeHTML(category.name)}"><span>%</span></label><label class="setting-switch setting-switch--compact" aria-label="Activar ${escapeHTML(category.name)}"><input type="checkbox" data-category-active="${category.id}" ${category.active ? "checked" : ""}><i></i></label></div></div>`;
  }).join("");
}

function renderSettingsPayments() {
  document.querySelector("#settingsPaymentMethods").innerHTML = settingsData.finance.payments.map((payment) => `<label class="settings-payment-item"><div><strong>${escapeHTML(payment.name)}</strong><small>Disponible en órdenes y cobros</small></div><span class="setting-switch setting-switch--compact"><input type="checkbox" data-payment-active="${payment.id}" ${payment.active ? "checked" : ""}><i></i></span></label>`).join("");
}

function updateSecurityScore() {
  if (!settingsData) return;
  const controls = ["settingAutosave", "settingAuditLog", "settingAutomaticBackup", "settingDeleteConfirmation"].map((id) => document.querySelector(`#${id}`)?.checked ?? false);
  let score = 45 + controls.filter(Boolean).length * 10;
  if (getSettingValue("settingSessionTimeout", true) <= 30) score += 10;
  if (settingsData.security.lastBackup) score += 5;
  score = Math.min(100, score);
  const output = document.querySelector("#securityScoreValue");
  if (output) output.textContent = `${score}%`;
}

function renderSettingsModule() {
  if (!settingsData) initializeClientsSettingsStorage();
  populateSettingsForm();
  renderSettingsUsers();
  renderSettingsMechanics();
  renderSettingsServiceCategories();
  renderSettingsPayments();
  applyVisualSettings();
  const lastBackup = document.querySelector("#settingsLastBackup");
  lastBackup.textContent = settingsData.security.lastBackup ? `Último respaldo: ${formatDate(settingsData.security.lastBackup, { day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}` : "Último respaldo: nunca";
}

function switchSettingsTab(tab) {
  document.querySelectorAll("[data-settings-tab]").forEach((button) => button.classList.toggle("is-active", button.dataset.settingsTab === tab));
  document.querySelectorAll("[data-settings-panel]").forEach((panel) => {
    const active = panel.dataset.settingsPanel === tab;
    panel.hidden = !active;
    panel.classList.toggle("is-active", active);
  });
}

function saveSettings() {
  const form = document.querySelector("#settingsForm");
  if (!form.reportValidity()) return;
  readSettingsForm();
  persistSettings();
  applyVisualSettings();
  markSettingsSaved();
  renderSettingsServiceCategories();
  renderSettingsPayments();
  showToast("Configuración guardada", "Los cambios ya están activos en el sistema.", "save");
}

function resetSettings() {
  if (!window.confirm("¿Restaurar la configuración predeterminada? Los usuarios y mecánicos también volverán a los valores iniciales.")) return;
  settingsData = deepClone(settingsSeed);
  persistSettings();
  renderSettingsModule();
  markSettingsSaved();
  showToast("Configuración restaurada", "Se recuperaron los valores predeterminados.", "refresh");
}

function openSettingsMemberEditor(kind, id = null) {
  const collection = kind === "mechanic" ? settingsData.mechanics : settingsData.users;
  const member = id ? collection.find((item) => item.id === id) : null;
  document.querySelector("#settingsMemberTitle").textContent = `${member ? "Editar" : "Nuevo"} ${kind === "mechanic" ? "mecánico" : "usuario"}`;
  document.querySelector("#settingsMemberId").value = member?.id || "";
  document.querySelector("#settingsMemberKind").value = kind;
  document.querySelector("#settingsMemberName").value = member?.name || "";
  document.querySelector("#settingsMemberEmail").value = member?.email || "";
  document.querySelector("#settingsMemberPhone").value = member?.phone || "";
  document.querySelector("#settingsMemberRole").value = member?.role || "";
  document.querySelector("#settingsMemberStatus").value = member?.status || "active";
  document.querySelector("#settingsMemberPermission").value = member?.permission || "operations";
  openModal("settingsMemberModal");
}

function saveSettingsMember() {
  const form = document.querySelector("#settingsMemberForm");
  if (!form.reportValidity()) return;
  const kind = document.querySelector("#settingsMemberKind").value;
  const id = document.querySelector("#settingsMemberId").value;
  const collection = kind === "mechanic" ? settingsData.mechanics : settingsData.users;
  const payload = {
    name: document.querySelector("#settingsMemberName").value.trim(), email: document.querySelector("#settingsMemberEmail").value.trim(), phone: document.querySelector("#settingsMemberPhone").value.trim(), role: document.querySelector("#settingsMemberRole").value.trim(), status: document.querySelector("#settingsMemberStatus").value, permission: document.querySelector("#settingsMemberPermission").value
  };
  if (id) {
    const index = collection.findIndex((item) => item.id === id);
    collection[index] = { ...collection[index], ...payload };
  } else {
    const prefix = kind === "mechanic" ? "MEC" : "USR";
    const next = Math.max(0, ...collection.map((item) => Number(item.id.replace(/\D/g, "")) || 0)) + 1;
    collection.push({ id: `${prefix}-${String(next).padStart(3, "0")}`, ...payload, ...(kind === "mechanic" ? { activeOrders: 0, efficiency: 0 } : { lastAccess: null }) });
  }
  persistSettings();
  closeModal("settingsMemberModal");
  renderSettingsUsers();
  renderSettingsMechanics();
  showToast("Miembro guardado", `${kind === "mechanic" ? "El mecánico" : "El usuario"} fue actualizado correctamente.`, "user");
}

function toggleSettingsMember(kind, id) {
  const collection = kind === "mechanic" ? settingsData.mechanics : settingsData.users;
  const member = collection.find((item) => item.id === id);
  if (!member) return;
  member.status = member.status === "active" ? "inactive" : "active";
  persistSettings();
  renderSettingsUsers();
  renderSettingsMechanics();
  showToast("Estado actualizado", `${member.name} ahora está ${member.status === "active" ? "activo" : "inactivo"}.`, "shield");
}

function renderSettingsDocumentPreview() {
  readSettingsForm();
  const b = settingsData.business;
  const d = settingsData.documents;
  document.querySelector("#settingsDocumentPreview").innerHTML = `<header><div><div class="document-brand">${d.logo ? escapeHTML(b.workshopName) : "Taller mecánico"}</div><p>${escapeHTML(b.legalName || "")}</p><p>RUC ${escapeHTML(b.ruc || "—")} · ${escapeHTML(b.phone || "—")}</p></div><div><strong>${escapeHTML(d.header || "ORDEN DE TRABAJO")}</strong><p>OT-1049</p><p>${formatDate(new Date().toISOString(), { day: "2-digit", month: "long", year: "numeric" })}</p></div></header><div class="document-grid"><div class="document-box"><strong>Cliente</strong><p>Carlos Mendoza</p><p>DNI 43125874 · 987 221 410</p></div><div class="document-box"><strong>Vehículo</strong><p>Toyota Hilux 2021</p><p>Placa M4R-921 · 89 740 km</p></div></div>${d.diagnosis ? '<div class="document-box"><strong>Diagnóstico</strong><p>Pérdida de compresión y recalentamiento. Se requiere revisión de culata.</p></div>' : ""}<table><thead><tr><th>Concepto</th><th>Cantidad</th><th>Precio</th><th>Total</th></tr></thead><tbody><tr><td>Diagnóstico especializado</td><td>1</td><td>S/ 80.00</td><td>S/ 80.00</td></tr><tr><td>Mano de obra estimada</td><td>6 h</td><td>S/ 65.00</td><td>S/ 390.00</td></tr><tr><td>Repuestos estimados</td><td>1</td><td>S/ 580.00</td><td>S/ 580.00</td></tr></tbody><tfoot><tr><th colspan="3">Total autorizado</th><th>S/ 1,050.00</th></tr></tfoot></table>${d.internalCosts ? '<div class="document-box"><strong>Control interno:</strong> costo estimado S/ 720.00 · margen S/ 330.00</div>' : ""}<p><small>${escapeHTML(d.terms || "")}</small></p>${d.signature ? '<div class="document-grid"><div class="document-box">Firma del cliente<br><br>________________________</div><div class="document-box">Responsable del taller<br><br>________________________</div></div>' : ""}<p style="text-align:center"><strong>${escapeHTML(d.footer || "")}</strong></p>`;
}

function openSettingsDocumentPreview() {
  renderSettingsDocumentPreview();
  openModal("settingsDocumentModal");
}

function exportSystemBackup() {
  readSettingsForm();
  settingsData.security.lastBackup = new Date().toISOString();
  persistSettings();
  const backup = { version: 1, exportedAt: settingsData.security.lastBackup, workshop: settingsData.business.workshopName, clients: clientsData, settings: settingsData, dashboard: appData };
  downloadTextFile(JSON.stringify(backup, null, 2), `torqueflow-respaldo-${new Date().toISOString().slice(0, 10)}.json`, "application/json;charset=utf-8");
  document.querySelector("#settingsLastBackup").textContent = `Último respaldo: ${formatDate(settingsData.security.lastBackup, { day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}`;
  updateSecurityScore();
  showToast("Respaldo descargado", "Clientes, configuración y datos operativos fueron incluidos.", "download");
}

function importSystemBackup(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const backup = JSON.parse(reader.result);
      if (!backup.clients || !backup.settings) throw new Error("Formato de respaldo no reconocido.");
      clientsData = backup.clients;
      settingsData = backup.settings;
      persistClients(); persistSettings();
      renderSettingsModule(); renderClientsModule();
      showToast("Respaldo restaurado", "La información fue recuperada correctamente.", "refresh");
    } catch (error) {
      showToast("No se pudo restaurar", error.message || "El archivo no es válido.", "alert");
    }
  };
  reader.readAsText(file);
}

function prepareClientCampaign() {
  const targets = clientsData.filter((client) => client.marketingConsent && (client.segment === "inactivo" || ["due", "soon"].includes(getClientNextServiceState(client).key)));
  if (!targets.length) { showToast("Sin destinatarios", "No hay clientes elegibles para esta campaña.", "alert"); return; }
  const csv = [["Cliente", "Teléfono", "Segmento", "Próximo servicio"], ...targets.map((client) => [client.name, client.phone, client.segment, getClientNextServiceState(client).label])].map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n");
  downloadTextFile(`\uFEFF${csv}`, `campana-clientes-${new Date().toISOString().slice(0, 10)}.csv`, "text/csv;charset=utf-8");
  showToast("Campaña preparada", `${targets.length} clientes fueron incluidos en el archivo.`, "download");
}

function bindClientsSettingsEvents() {
  document.querySelector("#clientsSearch")?.addEventListener("input", (event) => { clientsState.search = event.target.value.trim(); renderClientsModule(); });
  document.querySelector("#clientsTableViewButton")?.addEventListener("click", () => { clientsState.view = "table"; renderClientsModule(); });
  document.querySelector("#clientsCardViewButton")?.addEventListener("click", () => { clientsState.view = "cards"; renderClientsModule(); });
  document.querySelector("#clientsFilterToggle")?.addEventListener("click", (event) => { const grid = document.querySelector("#clientsFilterGrid"); grid.hidden = !grid.hidden; event.currentTarget.setAttribute("aria-expanded", String(!grid.hidden)); });
  [["clientsTypeFilter", "type"], ["clientsSegmentFilter", "segment"], ["clientsBalanceFilter", "balance"], ["clientsServiceFilter", "service"]].forEach(([id, key]) => document.querySelector(`#${id}`)?.addEventListener("change", (event) => { clientsState.filters[key] = event.target.value; renderClientsModule(); }));
  document.querySelector("#clientsSort")?.addEventListener("change", (event) => { clientsState.sort = event.target.value; renderClientsModule(); });
  document.querySelector("#clientsClearFilters")?.addEventListener("click", () => { clientsState.search = ""; clientsState.filters = { type: "all", segment: "all", balance: "all", service: "all" }; clientsState.sort = "recent"; document.querySelector("#clientsSearch").value = ""; ["clientsTypeFilter", "clientsSegmentFilter", "clientsBalanceFilter", "clientsServiceFilter"].forEach((id) => { document.querySelector(`#${id}`).value = "all"; }); document.querySelector("#clientsSort").value = "recent"; renderClientsModule(); });
  document.querySelector("#clientNewButton")?.addEventListener("click", () => openClientEditor());
  document.querySelector("#clientsExportButton")?.addEventListener("click", exportClientsCsv);
  document.querySelector("#clientCampaignButton")?.addEventListener("click", prepareClientCampaign);
  document.querySelector("#clientSaveButton")?.addEventListener("click", saveClientFromEditor);
  document.querySelector("#vehicleSaveButton")?.addEventListener("click", saveVehicleFromEditor);
  document.querySelector("#clientProfileEditButton")?.addEventListener("click", () => { closeModal("clientProfileModal"); openClientEditor(clientsState.profileId); });
  document.querySelector("#clientAddVehicleButton")?.addEventListener("click", () => openVehicleEditor());
  document.querySelector("#clientCreateOrderButton")?.addEventListener("click", () => prefillNewOrderFromClient(clientsState.profileId));
  document.querySelector("#clientProfileWhatsApp")?.addEventListener("click", () => { const client = clientsData.find((item) => item.id === clientsState.profileId); if (!client?.phone) return showToast("Teléfono no disponible", "El cliente no tiene un número registrado.", "alert"); window.open(`https://wa.me/51${client.phone.replace(/\D/g, "")}`, "_blank", "noopener"); });
  document.querySelectorAll("[data-client-tab]").forEach((button) => button.addEventListener("click", () => { clientsState.profileTab = button.dataset.clientTab; renderClientProfile(); }));

  document.querySelectorAll("[data-settings-tab]").forEach((button) => button.addEventListener("click", () => switchSettingsTab(button.dataset.settingsTab)));
  document.querySelector("#settingsForm")?.addEventListener("input", markSettingsDirty);
  document.querySelector("#settingsForm")?.addEventListener("change", markSettingsDirty);
  document.querySelector("#settingsSaveButton")?.addEventListener("click", saveSettings);
  document.querySelector("#settingsResetButton")?.addEventListener("click", resetSettings);
  document.querySelector("#settingsAddUser")?.addEventListener("click", () => openSettingsMemberEditor("user"));
  document.querySelector("#settingsAddMechanic")?.addEventListener("click", () => openSettingsMemberEditor("mechanic"));
  document.querySelector("#settingsMemberSave")?.addEventListener("click", saveSettingsMember);
  document.querySelector("#settingsPreviewDocument")?.addEventListener("click", openSettingsDocumentPreview);
  document.querySelector("#settingsDocumentPrint")?.addEventListener("click", () => window.print());
  document.querySelector("#settingsExportBackup")?.addEventListener("click", exportSystemBackup);
  document.querySelector("#settingsImportBackup")?.addEventListener("change", (event) => { importSystemBackup(event.target.files[0]); event.target.value = ""; });
  document.querySelector("#settingAccent")?.addEventListener("input", (event) => { document.querySelector("#settingAccentText").value = event.target.value; document.documentElement.style.setProperty("--primary", event.target.value); document.documentElement.style.setProperty("--accent", event.target.value); });
  document.querySelector("#settingAccentText")?.addEventListener("change", (event) => { if (/^#[0-9a-f]{6}$/i.test(event.target.value)) { document.querySelector("#settingAccent").value = event.target.value; document.documentElement.style.setProperty("--primary", event.target.value); document.documentElement.style.setProperty("--accent", event.target.value); } });
  document.querySelectorAll('input[name="settingTheme"]').forEach((radio) => radio.addEventListener("change", () => applyTheme(resolveConfiguredTheme(radio.value))));

  document.addEventListener("change", (event) => {
    const categoryActive = event.target.closest("[data-category-active]");
    const categoryMargin = event.target.closest("[data-category-margin]");
    const paymentActive = event.target.closest("[data-payment-active]");
    if (categoryActive) { const category = settingsData.services.categories.find((item) => item.id === categoryActive.dataset.categoryActive); if (category) category.active = categoryActive.checked; markSettingsDirty(); }
    if (categoryMargin) { const category = settingsData.services.categories.find((item) => item.id === categoryMargin.dataset.categoryMargin); if (category) category.margin = Number(categoryMargin.value || 0); markSettingsDirty(); }
    if (paymentActive) { const payment = settingsData.finance.payments.find((item) => item.id === paymentActive.dataset.paymentActive); if (payment) payment.active = paymentActive.checked; markSettingsDirty(); }
  });

  document.addEventListener("click", (event) => {
    const profile = event.target.closest("[data-client-profile]");
    const edit = event.target.closest("[data-client-edit]");
    const vehicleEdit = event.target.closest("[data-vehicle-edit]");
    const memberEdit = event.target.closest("[data-settings-member-edit]");
    const memberToggle = event.target.closest("[data-settings-member-toggle]");
    if (profile) openClientProfile(profile.dataset.clientProfile);
    if (edit) openClientEditor(edit.dataset.clientEdit);
    if (vehicleEdit) openVehicleEditor(vehicleEdit.dataset.vehicleEdit);
    if (memberEdit) { const [kind, id] = memberEdit.dataset.settingsMemberEdit.split(":"); openSettingsMemberEditor(kind, id); }
    if (memberToggle) { const [kind, id] = memberToggle.dataset.settingsMemberToggle.split(":"); toggleSettingsMember(kind, id); }
  });
}
