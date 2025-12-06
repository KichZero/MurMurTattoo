// Данные стилей татуировок
export const styleCategories = [
  {
    id: "classic",
    name: "Основные классические стили",
    styles: [
      {
        id: "old-school",
        name: "Old School (Traditional)",
        description:
          "Классический американский стиль. Жирные чёрные контуры, ограниченная палитра (красный, жёлтый, зелёный, синий), простые формы. Символы: якоря, розы, ласточки, сердца.",
        images: [
          "https://i.pinimg.com/736x/44/ef/a2/44efa2fd09a873b4244198b9c22e4b21.jpg",
          "https://i0.wp.com/www.inksane.be/wp-content/uploads/2022/04/old-school-tattoo-patches-blackgrey-%40strazgranica.jpg?fit=1024%2C1024&ssl=1",
          "https://cdn-khggj.nitrocdn.com/hUqPPYFtkLrurkxjVnDBkSOuveVYpOHJ/assets/images/optimized/rev-7103176/thehonorablesociety.com/wp-content/uploads/2023/10/Don_TraditionalCompilation-1024x1024.jpg",
        ],
      },
      {
        id: "new-school",
        name: "New School",
        description:
          "Современная версия олдскула. Яркие цвета, мультяшная эстетика, объёмные формы, преувеличенные пропорции.",
        images: [
          "https://i.pinimg.com/736x/6b/76/1e/6b761eea03ac5f77836645b476da7429.jpg",
          "https://inkppl.com/en/assets/php/files/082018/36995178_286966378720617_3436760734938169344_n.jpg",
          "https://inkppl.com/en/assets/php/files/082018/35537304_257051008384159_511168019519504384_n.jpg",
        ],
      },
      {
        id: "neo-traditional",
        name: "Neo Traditional",
        description:
          "Эволюция традиционного стиля. Детализация, расширенная палитра, реалистичные элементы в классической композиции.",
        images: [
          "/src/assets/tattoostyle/Neotraditional/1.jpg",
          "/src/assets/tattoostyle/Neotraditional/2.jpg",
          "/src/assets/tattoostyle/Neotraditional/3.jpg",
        ],
      },
      {
        id: "blackwork",
        name: "Blackwork",
        description:
          "Плотные чёрные заливки, геометрические орнаменты, минималистичные композиции. Высокая контрастность, долговечность.",
        images: [
          "https://i.pinimg.com/1200x/1e/3f/a5/1e3fa5d688679cec0d7813b1186d7755.jpg",
          "https://i.pinimg.com/736x/b8/bf/9e/b8bf9eeb55128acd3169d574f3d19b3d.jpg",
          "https://i.pinimg.com/736x/95/6c/14/956c14c96b8d89d3877c786bf4847800.jpg",
        ],
      },
      {
        id: "fine-line",
        name: "Linework / Conceptual",
        description:
          "Тонкие линии, детальная проработка, минимальная травматичность. Идеально для небольших работ и надписей.",
        images: [
          "https://i.pinimg.com/736x/62/1d/90/621d90a8bb685c5b660c22cec6a8dd32.jpg",
          "https://i.pinimg.com/736x/49/9b/0a/499b0a1f01ed41b8d1a5529ae44a632e.jpg",
          "/src/assets/tattoostyle/conceptual/1.jpg",
          "https://i.pinimg.com/736x/d2/bb/25/d2bb25fd5f8d518c12b3ebd82dbce646.jpg",
          "https://i.pinimg.com/736x/f5/d8/d0/f5d8d06d2e5aeefec90141836a60483f.jpg",
        ],
      },
      {
        id: "dotwork",
        name: "Dotwork",
        description:
          "Техника точечной татуировки. Создание объёма и текстуры через точки разной плотности. Часто сочетается с геометрией.",
        images: [
          "https://i.pinimg.com/736x/44/76/25/4476256fb54c1d816f0231fa051dfaa9.jpg",
          "/src/assets/tattoostyle/dotwork/1.jpg",
          "/src/assets/tattoostyle/dotwork/2.jpg",
        ],
      },
      {
        id: "realism",
        name: "Realism Fusion",
        description:
          "Фотореалистичные изображения, портреты, градиенты. Высокая детализация, работа с тенями и светом.",
        images: [
          "https://i.pinimg.com/1200x/72/6f/ae/726fae861b7d49dd9aed638ea7f2c69c.jpg",
          "https://i.pinimg.com/1200x/5a/b1/fe/5ab1fee158bd8433ca80b4a9b3d98781.jpg",
          "https://i.pinimg.com/1200x/16/56/ab/1656ab222f17c637899ca626ff3bd5dc.jpg",
        ],
      },
      {
        id: "hyperrealism",
        name: "Realism",
        description:
          "Предельная реалистичность, превышающая фотографию. Иллюзия объёма, текстуры, глубины. Максимальная детализация.",
        images: [
          "https://i.pinimg.com/736x/95/77/5d/95775d653715c0b86a3f830a9758a77a.jpg",
          "https://i.pinimg.com/736x/90/ec/b3/90ecb351dd6e8628eac99d7f119bbfa5.jpg",
          "https://i.pinimg.com/1200x/04/23/05/042305f8c6165a226a4fd8bfb4a3d64e.jpg",
        ],
      },
      {
        id: "portrait",
        name: "Portrait",
        description:
          "Портретные татуировки людей, животных, персонажей. Требует высокого мастерства в передаче черт лица и эмоций.",
        images: [
          "/src/assets/tattoostyle/PortraitTattoo /1.jpg",
          "/src/assets/tattoostyle/PortraitTattoo /2.jpg",
          "https://i.pinimg.com/1200x/e3/68/b1/e368b12a68f4683cd7474492674ebd56.jpg",
        ],
      },
      {
        id: "minimalism",
        name: "Minimalism",
        description:
          "Минималистичные татуировки. Простые формы, тонкие линии, лаконичные композиции. Меньше — лучше.",
        images: [
          "/src/assets/tattoostyle/minimalism/1.jpg",
          "/src/assets/tattoostyle/minimalism/2.jpg",
          "/src/assets/tattoostyle/minimalism/3.jpg",
        ],
      },
      {
        id: "geometric",
        name: "Geometric",
        description:
          "Геометрические формы, мандалы, сакральная геометрия. Симметрия, точные линии, математическая точность.",
        images: [
          "/src/assets/tattoostyle/geometric/1.jpg",
          "/src/assets/tattoostyle/geometric/2.jpg",
          "/src/assets/tattoostyle/geometric/3.jpg",
        ],
      },
      {
        id: "chicano",
        name: "Chicano",
        description:
          "Стиль, связанный с мексикано-американской культурой. Чёрно-серые работы, религиозные мотивы, каллиграфия.",
        images: [
          "https://i.pinimg.com/1200x/df/f8/c8/dff8c82fa9e627e9e6036641d7336a68.jpg",
          "https://i.pinimg.com/736x/9a/54/c7/9a54c7f84dd46b19319db0fe7e62eeca.jpg",
          "/src/assets/tattoostyle/chicano/1.jpg",
        ],
      },
      {
        id: "trash-polka",
        name: "Trash Polka",
        description:
          "Смешение реализма и абстракции. Красные и чёрные элементы, коллажный подход, агрессивная эстетика.",
        images: [
          "https://i.pinimg.com/736x/b1/31/23/b13123accd49922b6b4cae5e9c383cfa.jpg",
          "https://i.pinimg.com/736x/73/f4/22/73f422f1881a6f1f2a1031fad8d30e1b.jpg",
        ],
      },
      {
        id: "ornamental",
        name: "Ornamental",
        description:
          "Декоративные орнаменты, узоры, мандалы. Симметричные композиции, часто покрывающие большие участки тела.",
        images: [
          "https://i.pinimg.com/736x/49/56/45/495645c066e94ee18893c59d26459cf3.jpg",
          "https://i.pinimg.com/1200x/0e/52/ac/0e52ac746a2e5c46636cf9e8b8fbf245.jpg",
          "/src/assets/tattoostyle/ornamental/q.jpg",
          "/src/assets/tattoostyle/ornamental/w.jpg",
        ],
      },
      {
        id: "watercolor",
        name: "Watercolor",
        description:
          "Имитация акварельной живописи. Плавные переходы цветов, размытые края, эффект растекающихся красок. Художественный и выразительный стиль.",
        images: [
          "/src/assets/tattoostyle/Watercolor/1.jpg",
          "/src/assets/tattoostyle/Watercolor/2.jpg",
        ],
      },
      {
        id: "japanese",
        name: "Japanese (Irezumi)",
        description:
          "Традиционный японский стиль. Драконы, карпы, самураи, цветущая сакура. Яркие цвета, детализированные сюжеты, глубокий символизм.",
        images: [
          "/src/assets/tattoostyle/japan/1.jpg",
          "/src/assets/tattoostyle/japan/2.jpg",
          "/src/assets/tattoostyle/japan/3.jpg",
          "/src/assets/tattoostyle/japan/4.jpg",
        ],
      },
      {
        id: "lettering",
        name: "Lettering / Calligraphy",
        description:
          "Татуировки с текстом и надписями. Различные шрифты, каллиграфия, граффити-стиль. От простых надписей до сложных композиций.",
        images: [
          "https://i.pinimg.com/736x/fd/f7/e4/fdf7e44d24eed847c256e1785523a846.jpg",
          "https://i.pinimg.com/736x/c4/2c/c0/c42cc0f84a82e43f0ff57bf374effcab.jpg",
        ],
      },
      {
        id: "mandala",
        name: "Mandala",
        description:
          "Сакральные геометрические узоры. Симметричные композиции, концентрические круги, духовный символизм. Популярны на спине, груди, руках.",
        images: [
          "https://i.pinimg.com/736x/88/cc/ee/88ccee1a48ca362c11864c5fbd6303f8.jpg",
          "https://i.pinimg.com/736x/b2/99/f9/b299f947167bea151cce845dc0d3857e.jpg",
        ],
      },
      {
        id: "surrealism",
        name: "Surrealism",
        description:
          "Сюрреалистичные композиции. Смешение реальности и фантазии, необычные образы, сновидческие сюжеты. Высокий уровень художественности.",
        images: [
          "https://i.pinimg.com/736x/8c/d2/14/8cd214eb1fe4be619f1324fe87ddaf2f.jpg",
          "https://i.pinimg.com/736x/d2/ce/e7/d2cee72dd7ca57bae23e0e6e70f3ac0e.jpg",
          "https://i.pinimg.com/736x/02/d1/30/02d1309f50a60bd3eebc3b0391b55fb6.jpg",
        ],
      },
      {
        id: "abstract",
        name: "Abstract",
        description:
          "Абстрактные композиции. Свободные формы, цветовые пятна, нефигуративные изображения. Уникальность и самовыражение.",
        images: [
          "/src/assets/tattoostyle/abstaraction/1.jpg",
          "/src/assets/tattoostyle/abstaraction/2.jpg",
          "/src/assets/tattoostyle/abstaraction/3.jpg",
        ],
      },
      {
        id: "3d",
        name: "3D",
        description:
          "Объёмные татуировки с эффектом 3D. Иллюзия глубины, объёма, выхода за пределы кожи. Современный и впечатляющий стиль.",
        images: [
          "https://i.pinimg.com/736x/15/0f/a1/150fa1b86fbfd0ff7b371b08898a04dd.jpg",
          "/src/assets/3d/1.jpg",
          "/src/assets/3d/2.jpg",
        ],
      },
      {
        id: "optic-illusion",
        name: "Optic Illusion",
        description:
          "Оптические иллюзии и обман зрения. Трёхмерные эффекты, искажения перспективы, визуальные парадоксы. Завораживающие и интригующие татуировки.",
        images: [
          "/src/assets/tattoostyle/illusion/1.jpg",
          "/src/assets/tattoostyle/illusion/2.jpg",
        ],
      },
      {
        id: "cartoon",
        name: "Cartoon Tattoo",
        description:
          "Мультяшный стиль татуировок. Яркие цвета, выразительные персонажи, игривая эстетика. От классических мультфильмов до современных анимационных стилей. Идеально для тех, кто хочет добавить веселья и индивидуальности.",
        images: [
          "/src/assets/tattoostyle/cartoon/1.jpg",
          "/src/assets/tattoostyle/cartoon/2.jpg",
          "/src/assets/tattoostyle/cartoon/photo_2025-12-06 14.19.52.jpeg",
          "/src/assets/tattoostyle/cartoon/photo_2025-12-06 14.19.55.jpeg",
        ],
      },
      {
        id: "sketch",
        name: "Sketch / Sketchy",
        description:
          "Эскизный стиль. Имитация карандашного рисунка, набросков, незавершённых линий. Художественная небрежность и выразительность.",
        images: [
          "https://i.pinimg.com/1200x/c4/97/20/c49720a0fa633d943af126103c9ddf29.jpg",
          "/src/assets/tattoostyle/sketchstyle/1.jpg",
          "/src/assets/tattoostyle/sketchstyle/2.jpg",
        ],
      },
      {
        id: "engraving",
        name: "Engraving",
        description:
          "Стиль гравюры. Чёткие линии, штриховка, перекрёстная штриховка. Напоминает старинные гравюры и иллюстрации.",
        images: [
          "https://i.pinimg.com/736x/ef/db/59/efdb595c27eb16b1fe7c7790148de8a7.jpg",
          "/src/assets/tattoostyle/engraving/2.jpg",
          "/src/assets/tattoostyle/engraving/3.jpg",
        ],
      },
    ],
  },
  {
    id: "monochrome",
    name: "Монохромные стили (Чёрная работа)",
    styles: [
      {
        id: "black-gray",
        name: "Black & Gray",
        description:
          "Работа в чёрно-серой гамме. Градиенты, объём, реалистичность без цвета. Классический подход к монохрому.",
        images: [
          "/src/assets/tattoostyle/black gray/1.jpg",
          "/src/assets/tattoostyle/black gray/2.jpg",
          "/src/assets/tattoostyle/black gray/3.jpg",
        ],
      },
    ],
  },
];
