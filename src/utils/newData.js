import vzgm90 from "../assets/images/tractors/VZGM-90.jpg";
import vzgm150 from "../assets/images/tractors/VZGM-150.jpg";
import engineIcon from "../assets/icons/engineIcon.svg";
import powerIcon from "../assets/icons/powerIcon.svg";
import speedIcon from "../assets/icons/speedIcon.svg";
import tankIcon from "../assets/icons/tankIcon.svg";

//VZGM-90 base
import vzgm_90_base_1 from "../assets/images/tractors/vzgm-90/base/VZGM-90-1.png";
import vzgm_90_base_2 from "../assets/images/tractors/vzgm-90/base/VZGM-90-2.png";
import vzgm_90_base_3 from "../assets/images/tractors/vzgm-90/base/VZGM-90-3.png";
import vzgm_90_base_4 from "../assets/images/tractors/vzgm-90/base/xconvert.com-2-2.png";
import vzgm_90_base_5 from "../assets/images/tractors/vzgm-90/base/xconvert.com-3-2.png";

//VZGM-150 base
import vzgm_150_base_1 from "../assets/images/tractors/vzgm-150/base/VZGM-150-1.png";
import vzgm_150_base_2 from "../assets/images/tractors/vzgm-150/base/VZGM-150-2.png";
import vzgm_150_base_3 from "../assets/images/tractors/vzgm-150/base/VZGM-150-3.png";
import vzgm_150_base_4 from "../assets/images/tractors/vzgm-150/base/VZGM-150-4.png";

//VZGM-90 otval
import vzgm_90_otval_1 from "../assets/images/tractors/vzgm-90/otval/VZGM-90-4.png";
// import vzgm_90_otval_2 from "../assets/images/tractors/vzgm-90/otval/VZGM-90-5.png";
import vzgm_90_otval_3 from "../assets/images/tractors/vzgm-90/otval/VZGM-90-6.png";
import vzgm_90_otval_4 from "../assets/images/tractors/vzgm-90/otval/VZGM-90-7.png";
import vzgm_90_otval_11 from "../assets/images/tractors/vzgm-90/otval/VZGM-90-11.png";
import vzgm_90_otval_5 from "../assets/images/tractors/vzgm-90/otval/VZGM-90-9.png";
import vzgm_90_otval_6 from "../assets/images/tractors/vzgm-90/otval/VZGM-90-10.png";
//import vzgm_90_otval_7 from "../assets/images/tractors/vzgm-90/otval/1-2-2.png";
import vzgm_90_otval_8 from "../assets/images/tractors/vzgm-90/otval/xconvert.com-4-2.png";
import vzgm_90_otval_12 from "../assets/images/tractors/vzgm-90/otval/xconvert.com-5.png";

//VZGM-150 otval
import vzgm_150_otval_1 from "../assets/images/tractors/vzgm-150/otval/VZGM-150-4.png";
import vzgm_150_otval_2 from "../assets/images/tractors/vzgm-150/otval/VZGM-150-5.png";
import vzgm_150_otval_3 from "../assets/images/tractors/vzgm-150/otval/VZGM-150-6.png";
import vzgm_150_otval_4 from "../assets/images/tractors/vzgm-150/otval/VZGM-150-7.png";

//VZGM-90 special
import vzgm_90_spec_1 from "../assets/images/tractors/vzgm-90/special/VZGM-90-8 (1).png";
import vzgm_90_spec_2 from "../assets/images/tractors/vzgm-90/special/VZGM-90-5.png";
import vzgm_90_spec_3 from "../assets/images/tractors/vzgm-90/special/VZGM-90-5 (1).png";

//VZGM-150 special
import vzgm_150_spec_1 from "../assets/images/tractors/vzgm-150/special/VZGM-150-8.png";
import vzgm_150_spec_2 from "../assets/images/tractors/vzgm-150/special/VZGM-150-9.png";
import vzgm_150_spec_3 from "../assets/images/tractors/vzgm-150/special/VZGM-150-10.png";

import vzgm90p1 from "../assets/images/tractors/vzgm-90/VZGM-90-1.png";
import vzgm90p2 from "../assets/images/tractors/vzgm-90/VZGM-90-2.png";
// import vzgm90p3 from "../assets/images/tractors/vzgm-90/VZGM-90-3.png";

import vzgm150p1 from "../assets/images/tractors/vzgm-150/VZGM-150-1.png";
import vzgm150p2 from "../assets/images/tractors/vzgm-150/VZGM-150-2.png";
import vzgm150p3 from "../assets/images/tractors/vzgm-150/VZGM-150-3.png";
import vzgm150p4 from "../assets/images/tractors/vzgm-150/VZGM-150-4.png";
import vzgm150p5 from "../assets/images/tractors/vzgm-150/VZGM-150-5.png";
import vzgm150p6 from "../assets/images/tractors/vzgm-150/VZGM-150-6.png";
import vzgm150p7 from "../assets/images/tractors/vzgm-150/VZGM-150-7.png";

const newtractorData = [
  {
    name: "Трактор ДТ-75 без навесного оборудования",
    chassis: "Гусеничный",
    shortName: "ДТ-75",
    url: "dt-75-bez-navesnogo",
    price: "3 100 000",
    type: "dt-75",
    catalog: "catalog-dt-75",
    img: vzgm90,
    inStock: true,
    onMainPage: true,
    pageTitle:
      " Купить новый ДТ-75 без навесного оборудования. Цена 3 100 000 руб| ВЗГМ",
    pageDescription:
      " Купить новый гусеничный трактор ДТ-75 от производителя. Каталог тракторов. Доставка от 0 руб. Технические характеристики ДТ-75| ВЗГМ. ",
    alt: " Трактор ДТ-75",
    gallery: [
      {
        img: "https://www.vzgm.ru/content/tractors/vzgm-90/DT-75-bez-navesnogo- oborudovania/DT-75-bez-navesnogo- oborudovania-1.webp",
        alt: "Трактор ДТ-75",
      },
      {
        img: "https://www.vzgm.ru/content/tractors/vzgm-90/DT-75-bez-navesnogo- oborudovania/DT-75-bez-navesnogo- oborudovania-2.webp ",
        alt: "Трактор ДТ-75 с открытым капотом",
      },
      {
        img: "https://www.vzgm.ru/content/tractors/vzgm-90/DT-75-bez-navesnogo- oborudovania/DT-75-bez-navesnogo- oborudovania-3.webp ",
        alt: "Трактор ДТ-75 со снятыми гусеницами",
      },
      {
        img: "https://www.vzgm.ru/content/tractors/vzgm-90/DT-75-bez-navesnogo- oborudovania/DT-75-bez-navesnogo- oborudovania-4.webp ",
        alt: "Кабина трактора ДТ-75",
      },
      {
        img: "https://www.vzgm.ru/content/tractors/vzgm-90/DT-75-bez-navesnogo- oborudovania/DT-75-bez-navesnogo- oborudovania-5.webp ",
        alt: "Трактор ДТ-75 красного цвета",
      },
      {
        img: "https://www.vzgm.ru/content/tractors/vzgm-90/DT-75-bez-navesnogo- oborudovania/DT-75-bez-navesnogo- oborudovania-6.webp ",
        alt: "Двигатель трактора ДТ-75",
      },
      {
        img: "https://www.vzgm.ru/content/tractors/vzgm-90/DT-75-bez-navesnogo- oborudovania/DT-75-bez-navesnogo- oborudovania-7.webp ",
        alt: "Приборная панель трактора ДТ-75",
      },
    ],
    shortDescription: " Трактор ДТ- 75 от производителя. ",
    metaDescription:
      "Гусеничный трактор Дт-75 для широкого спектра работ в наличии в Московской области. Сервисное обслуживание. Гарантия 1 год.",

    description: [
      {
        type: "paragraph",
        content:
          " Гусеничный трактор ДТ-75  – это универсальная  техника специального назначения. Технические характеристики трактора Дт-75 позволяют ему эффективно решать разноплановый круг задач. Наиболее часто  используется – в сельском хозяйстве, строительстве, работе с грунтом. При установке дополнительного навесного оборудования существенно расширяется номенклатура выполняемых работ. ",
      },
      {
        type: "paragraph",
        content:
          " Как известно, трактор Дт -75, был самый массовый в СССР, и не зря, т.к. совместил в себе приемлемую мощность для большинства задач, простоту конструкции, высокую ремонтопригодность и тд. Эти преимущества сохранены и в нашей модификации. ",
      },
      {
        type: "paragraph",
        content:
          "Наш трактор ДТ-75 имеет конструктивные отличия от своего предшественника выпускаемого в прошлом на ОАО 'Волгоградский тракторный завод',  кабина выполнена из композитного материала, улучшена шумо и виброизоляция, система вентиляции обеспечат улучшенную эргономику для  механизатора, а значит повысят его производительность. ",
      },
      {
        type: "paragraph",
        content: "На трактор ДТ 75 устанавливаются двигатели:",
      },
      {
        type: "table",
        content: [
          { column1: "А 41", column2: 90, column3: "Алтайский моторный завод" },
          { column1: "Д-245", column2: 95, column3: "Минский моторный завод" },
          { column1: "Д-260", column2: 98, column3: "Минский моторный завод" },
        ],
      },

      {
        type: "paragraph",
        content:
          " Каркас кабины трактора стал более безопасным, а сама она стала более комфортной. Капот машины сделан из стеклопластика и откидывается.",
      },
      {
        type: "paragraph",
        content:
          "Глушитель и выхлопная труба расположены на передней стойке кабины. Также разработана и применена новая расцветка трактора: бело-голубая, синего цвета.",
      },
      {
        type: "paragraph",
        content: " На Трактор ДТ-75 комплектуется следующими типами отвалов:",
      },

      {
        type: "list",
        content: [
          "прямой отвал БНДТ-10",
          "поворотный отвал БПДТ-20",
          "поворотный отвал БПДТ",
          "универсальный отвал БУДТ",
        ],
      },
      {
        type: "paragraph",
        content:
          "Вы можете посмотреть и купить трактор Дт-75 в Московской области или г. Волгоград, в нашем штате мобильная ремонтная бригада, сможем помочь в случае возникновения проблем в течение 1 – 2 дней. ",
      },
      {
        type: "paragraph",
        content:
          " Вес трактора Дт-75 составляет 6950 кг. позволяет транспортировать его в грузовых автомобилях грузоподъемностью до 10 тонн.",
      },

      {
        type: "paragraph",
        content:
          "Приобретая гусеничный трактор ДТ-75 у производителя ООО ВЗГМ, вы получаете:",
      },
      {
        type: "list",
        content: [
          "возможность покупки в лизинг",
          "сертифицированное качество",
          "заводскую гарантию",
          "конкурентные цены",
          "доставку в любой регион РФ",
        ],
      },
    ],

    characteristics: [
      { column1: "Тяговый класс", column2: 3 },
      { column1: "Двигатель", column2: "Д-440-22 (А-41)" },
      { column1: "Эксплуатационная мощность, л.с.", column2: 95 },
      {
        column1:
          "Частота вращения коленвала при эксплуатационной мощности, об/мин",
        column2: 1750,
      },
      {
        column1:
          "Удельный расход топлива при эксплуатационной мощности, г/л.с.ч.",
        column2: 175,
      },
      {
        column1: "Коэффициент запаса крутящего момента в тяговом режиме, %",
        column2: 35,
      },
      {
        column1:
          "Число передач - переднего хода (с ходоуменьшителем и реверс-редуктором)",
        column2: "7 (23,14)",
      },
      {
        column1:
          "Число передач - заднего хода (с ходоуменьшителем и реверс-редуктором)",
        column2: "1 (5,7)",
      },
      {
        column1: "Диапазон скоростей переднего хода, км/ч - основной",
        column2: "5,3…11,2",
      },
      {
        column1: "Диапазон скоростей переднего хода, км/ч - с ходоуменьшителем",
        column2: "0,33…11,2",
      },
      {
        column1:
          "Диапазон скоростей переднего хода, км/ч - с реверс-редуктором",
        column2: "3,17…11,2",
      },
      { column1: "Продольная база, мм", column2: 1612 },
      { column1: "Колея, мм", column2: 1330 },
      { column1: "Дорожный просвет, мм", column2: 38 },
      { column1: "Колея, мм", column2: 1330 },
      { column1: "Дорожный просвет, мм", column2: 380 },
      { column1: "Ширина гусениц, мм", column2: "390 или 470" },
      {
        column1:
          "Габаритные размеры, мм - длина (с навесным устройством в транспортном положении)",
        column2: 4400,
      },
      { column1: "Габаритные размеры, мм - ширина", column2: 1850 },
      { column1: "Габаритные размеры, мм - высота", column2: 2710 },
      { column1: "Масса эксплуатационная, кг", column2: 6950 },
      { column1: "Среднее давление на почву, кПа", column2: "41,5" },
    ],
  },
  {
    name: "Бульдозер ДТ-75 с прямым отвалом",
    shortName: "ДТ-75",
    chassis: "Гусеничный",
    url: "DT-75-s-pryamin-otvalom",
    price: "3 350 000",
    type: "dt-75",
    catalog: "catalog-dt-75",
    img: vzgm90,
    inStock: true,
    onMainPage: true,
    pageTitle:
      "Купить новый бульдозер ДТ-75 с прямым отвалом. Цена 3 350 000 руб|ВЗГМ ",
    pageDescription:
      "Купить новый бульдозер ДТ-75 с прямым отвалом от производителя. Каталог тракторов. Доставка от 0 руб. Технические характеристики, вес бульдозера ДТ-75| ВЗГМ",
    alt: "Трактор ДТ-75 с прямым отвалом",
    gallery: [
      {
        img: "https://www.vzgm.ru/content/tractors/vzgm-90/Buldozer-DT-75-s-nepovorotnim-otvalom/Buldozer s nepovorotnim otvalom -4.webp",
        alt: "Синий трактор ДТ-75 с отвалом",
      },
      {
        img: "https://www.vzgm.ru/content/tractors/vzgm-90/Buldozer-DT-75-s-nepovorotnim-otvalom/Buldozer-s-nepovorotnim-otvalom-1.webp",
        alt: "Трактор ДТ-75 с отвалом вид сбоку",
      },
      {
        img: "https://www.vzgm.ru/content/tractors/vzgm-90/Buldozer-DT-75-s-nepovorotnim-otvalom/Buldozer s nepovorotnim otvalom -8.webp",
        alt: "Трактор ДТ-75 с отвалом приборная панель",
      },
      {
        img: "https://www.vzgm.ru/content/tractors/vzgm-90/Buldozer-DT-75-s-nepovorotnim-otvalom/Buldozer s nepovorotnim otvalom -7.webp",
        alt: "Трактор ДТ-75 вид сзади",
      },
      {
        img: "https://www.vzgm.ru/content/tractors/vzgm-90/Buldozer-DT-75-s-nepovorotnim-otvalom/Buldozer s nepovorotnim otvalom -6.webp",
        alt: "Трактор ДТ-75 с отвалом вид сзади",
      },
      {
        img: "https://www.vzgm.ru/content/tractors/vzgm-90/Buldozer-DT-75-s-nepovorotnim-otvalom/Buldozer s nepovorotnim otvalom -5.webp",
        alt: "Синий трактор ДТ-75 с отвалом вид спереди",
      },
      {
        img: "https://www.vzgm.ru/content/tractors/vzgm-90/Buldozer-DT-75-s-nepovorotnim-otvalom/Buldozer s nepovorotnim otvalom -3.webp",
        alt: "Трактор ДТ-75  кабина",
      },

      {
        img: "https://www.vzgm.ru/content/tractors/vzgm-90/Buldozer-DT-75-s-nepovorotnim-otvalom/Buldozer s nepovorotnim otvalom -2.webp",
        alt: "Бульдозер  ДТ-75",
      },
    ],
    shortDescription: " Трактор ДТ- 75 с прямым отвалом от производителя. ",
    metaDescription:
      "Гусеничный трактор Дт-75 с прямым отвалом для широкого спектра работ в наличии в Московской области. Сервисное обслуживание. Гарантия 1 год.",

    description: [
      {
        type: "paragraph",
        content:
          " Гусеничный трактор ДТ-75  – это универсальная  техника специального назначения. Технические характеристики трактора Дт-75 позволяют ему эффективно решать разноплановый круг задач. Наиболее часто  используется – в сельском хозяйстве, строительстве, работе с грунтом. При установке дополнительного навесного оборудования существенно расширяется номенклатура выполняемых работ.",
      },
      {
        type: "paragraph",
        content:
          " Как известно, трактор Дт -75, был самый массовый в СССР, и не зря, т.к. совместил в себе приемлемую мощность для большинства задач, простоту конструкции, высокую ремонтопригодность и тд. Эти преимущества сохранены и в нашей модификации. ",
      },
      {
        type: "paragraph",
        content:
          "Наш трактор ДТ-75 имеет конструктивные отличия от своего предшественника выпускаемого в прошлом на ОАО 'Волгоградский тракторный завод',  кабина выполнена из композитного материала, улучшена шумо и виброизоляция, система вентиляции обеспечат улучшенную эргономику для  механизатора, а значит повысят его производительность. ",
      },
      {
        type: "paragraph",
        content: "На трактор ДТ 75 устанавливаются двигатели:",
      },
      {
        type: "table",
        content: [
          { column1: "А 41", column2: 90, column3: "Алтайский моторный завод" },
          { column1: "Д-245", column2: 95, column3: "Минский моторный завод" },
          { column1: "Д-260", column2: 98, column3: "Минский моторный завод" },
        ],
      },

      {
        type: "paragraph",
        content:
          " Каркас кабины трактора стал более безопасным, а сама она стала более комфортной. Капот машины сделан из стеклопластика и откидывается.",
      },
      {
        type: "paragraph",
        content:
          "Глушитель и выхлопная труба расположены на передней стойке кабины. Также разработана и применена новая расцветка трактора: бело-голубая, синего цвета.",
      },
      {
        type: "paragraph",
        content: " На Трактор ДТ-75 комплектуется следующими типами отвалов:",
      },

      {
        type: "list",
        content: [
          "прямой отвал БНДТ-10",
          "прямой отвал БПДТ-20",
          "поворотный отвал БПДТ",
          "универсальный отвал БУДТ",
        ],
      },
      {
        type: "paragraph",
        content:
          "Вы можете посмотреть и купить трактор Дт-75 в Московской области или г. Волгоград, в нашем штате мобильная бригада, сможем помочь в случае возникновения проблем в течение 1 – 2 дней. ",
      },
      {
        type: "paragraph",
        content:
          " Вес трактора Дт-75 составляет 6950 кг. позволяет транспортировать его в грузовых автомобилях грузоподъемностью до 10 тонн.",
      },

      {
        type: "paragraph",
        content:
          "Приобретая гусеничный трактор ДТ-75 у производителя ООО 'ВЗГМ', вы получаете:",
      },
      {
        type: "list",
        content: [
          "возможность покупки в лизинг",
          "сертифицированное качество",
          "заводскую гарантию",
          "конкурентные цены",
          "доставку в любой регион РФ",
        ],
      },
      { type: "paragraph", content: "Варианты комплектации:" },
      {
        type: "list",
        content: [
          "Реверс-редуктор",
          "Ходоуменьшитель",
          "Задняя гидронавесная система",
          "Кондиционер",
          "Подогреватель двигателя",
          "Отопитель кабины",
        ],
      },
    ],

    characteristics: [
      { column1: "Тяговый класс", column2: 3 },
      { column1: "Двигатель", column2: "Д-440-22 (А-41)" },
      { column1: "Эксплуатационная мощность, л.с.", column2: 95 },
      {
        column1:
          "Частота вращения коленвала при эксплуатационной мощности, об/мин",
        column2: 1750,
      },
      {
        column1:
          "Удельный расход топлива при эксплуатационной мощности, г/л.с.ч.",
        column2: 175,
      },
      {
        column1: "Коэффициент запаса крутящего момента в тяговом режиме, %",
        column2: 35,
      },
      {
        column1:
          "Число передач - переднего хода (с ходоуменьшителем и реверс-редуктором)",
        column2: "7 (23,14)",
      },
      {
        column1:
          "Число передач - заднего хода (с ходоуменьшителем и реверс-редуктором)",
        column2: "1 (5,7)",
      },
      {
        column1: "Диапазон скоростей переднего хода, км/ч - основной",
        column2: "5,3…11,2",
      },
      {
        column1: "Диапазон скоростей переднего хода, км/ч - с ходоуменьшителем",
        column2: "0,33…11,2",
      },
      {
        column1:
          "Диапазон скоростей переднего хода, км/ч - с реверс-редуктором",
        column2: "3,17…11,2",
      },
      { column1: "Продольная база, мм", column2: 1612 },
      { column1: "Колея, мм", column2: 1330 },
      { column1: "Дорожный просвет, мм", column2: 38 },
      { column1: "Колея, мм", column2: 1330 },
      { column1: "Дорожный просвет, мм", column2: 380 },
      { column1: "Ширина гусениц, мм", column2: "390 или 470" },
      {
        column1:
          "Габаритные размеры, мм - длина (с навесным устройством в транспортном положении)",
        column2: 4400,
      },
      { column1: "Габаритные размеры, мм - ширина", column2: 1850 },
      { column1: "Габаритные размеры, мм - высота", column2: 2710 },
      { column1: "Масса эксплуатационная, кг", column2: 6950 },
      { column1: "Среднее давление на почву, кПа", column2: "41,5" },
    ],
  },
  {
    name: "Дт-75 Болотник без навесного оборудования",
    shortName: "ДТ-75",
    url: "dt-75-bolotnik",
    onMainPage: true,
    price: "3 280 000",
    chassis: "Гусеничный",
    img: vzgm_90_base_1,
    inStock: true,
    catalog: "catalog-dt-75",
    type: "dt-75",
    alt: "Гусеничный болотник ВЗГМ-90 – усовершенствованная модель трактора ДТ-75",
    pageTitle:
      "Купить новый ДТ-75 болотник без навесного оборудования. Цена 3 280 000 руб| ВЗГМ",
    pageDescription:
      " Купить новый ДТ-75 болотник (болотоход) от производителя. Каталог тракторов. Доставка от 0 руб.| ВЗГМ ",

    gallery: [
      {
        img: "http://www.vzgm.ru/content/tractors/vzgm-90/DT-75-Bolotnik-bez-navesnogo-oborudovania/DT-75-bez-navesnogo- oborudovania-9.webp",
        alt: "Синий болотник ДТ-75 без навески",
      },

      {
        img: "http://www.vzgm.ru/content/tractors/vzgm-90/DT-75-Bolotnik-bez-navesnogo-oborudovania/DT-75-bez-navesnogo- oborudovania-10.webp",
        alt: "Болотник ДТ-75 в Московской области",
      },
      {
        img: "http://www.vzgm.ru/content/tractors/vzgm-90/DT-75-Bolotnik-bez-navesnogo-oborudovania/DT-75-bez-navesnogo- oborudovania-12.webp",
        alt: "Болотоход ДТ-75 в Москве",
      },
      {
        img: " http://www.vzgm.ru/content/tractors/vzgm-90/DT-75-Bolotnik-bez-navesnogo-oborudovania/DT-75-bez-navesnogo- oborudovania-4.webp",
        alt: "Болотоход ДТ-75",
      },
      {
        img: "http://www.vzgm.ru/content/tractors/vzgm-90/DT-75-Bolotnik-bez-navesnogo-oborudovania/DT-75-bez-navesnogo- oborudovania-3.webp",
        alt: "Болотник ДТ-75",
      },
      {
        img: " http://www.vzgm.ru/content/tractors/vzgm-90/DT-75-Bolotnik-bez-navesnogo-oborudovania/DT-75-bez-navesnogo- oborudovania-5.webp",
        alt: "Болотник ДТ-75 под снегом",
      },
      {
        img: "http://www.vzgm.ru/content/tractors/vzgm-90/DT-75-Bolotnik-bez-navesnogo-oborudovania/DT-75-bez-navesnogo- oborudovania-7.webp",
        alt: "2 Болотохода на белом фоне",
      },
      {
        img: " http://www.vzgm.ru/content/tractors/vzgm-90/DT-75-Bolotnik-bez-navesnogo-oborudovania/DT-75-bez-navesnogo- oborudovania-6.webp",
        alt: "3 Болотохода Дт-75",
      },

      {
        img: "http://www.vzgm.ru/content/tractors/vzgm-90/DT-75-Bolotnik-bez-navesnogo-oborudovania/DT-75-bez-navesnogo- oborudovania-1.webp",
        alt: "Панель трактора ДТ-75",
      },
      {
        img: "http://www.vzgm.ru/content/tractors/vzgm-90/DT-75-Bolotnik-bez-navesnogo-oborudovania/DT-75-bez-navesnogo- oborudovania-2.webp",
        alt: "Кабина трактора ДТ-75",
      },
      {
        img: "http://www.vzgm.ru/content/tractors/vzgm-90/DT-75-Bolotnik-bez-navesnogo-oborudovania/DT-75-bez-navesnogo- oborudovania-8.webp",
        alt: "Двигатель болотника ДТ-75",
      },
    ],
    shortDescription: "Болотоход ДТ-75 без навесного оборудования ",
    metaDescription:
      "Новый болотник ДТ-75 от производителя в Московской области. Гарантия 1 год или 1000 мч. Помощь в доставке.",
    description: [
      {
        type: "paragraph",
        content:
          "Новый  ДТ-75 болотник имеет некоторые конструкторские и дизайнерские отличия от оригинального выпускаемого  в прошлом ОАО 'Волгоградский тракторный завод'",
      },
      {
        type: "paragraph",
        content:
          "На тракторе установлен улучшенный двигатель с повышенными техническими характеристиками, как правило, А-41 мощностью 95 л. с., в линейке есть моторы с большей мощностью. Каркас кабины трактора стал более безопасным, а сама она стала более комфортной. Капот машины сделан из стеклопластика и откидывается.",
      },
      {
        type: "paragraph",
        content:
          "Глушитель и выхлопная труба расположены на передней стойке кабины. Также разработана и применена новая расцветка трактора: бело-голубая, синего цвета. Конструктивно он шире обычного ДТ имеет специальные болотоходные гусеницы, шириной 670 мм., колея имеет размеры до 1570 мм. Он создает меньшую нагрузку на грунт , за счет этого востребован именно там, где чаще всего земля содержит значительное количество влаги.",
      },
      {
        type: "paragraph",
        content:
          "Простота конструкции, высокая ремонтопригодность гусеничного движителя болотника и отличная проходимость, позволяют снизить стоимость владения, сберечь структуру почвы и повысить урожайность.",
      },
      {
        type: "paragraph",
        content:
          " Болотоход ДТ-75 трактор используется чаще всего в сельском хозяйстве, строительстве, транспортных работах и тд., его легко ремонтировать. Опытный ремонтник без труда справиться с любой поломкой, тем более что к нему подходят запчасти от предшественника.",
      },
      {
        type: "paragraph",
        content:
          " На заднюю гидронавеску вешается различное оборудование  - плуг, корчеватель и тд.   используется вместе с различными торфодобывающими и иными мелиоративными машинами. ",
      },
      {
        type: "paragraph",
        content:
          " Осуществляем доставку во все регионы России. Доступен к продаже в лизинг. Покупка болотника ДТ-75 субсидируется государством.",
      },
    ],

    characteristics: [
      { column1: "Тяговый класс", column2: 3 },
      { column1: "Двигатель", column2: "Д-440-22 (А-41)" },
      { column1: "Эксплуатационная мощность, л.с.", column2: 95 },
      {
        column1:
          "Частота вращения коленвала при эксплуатационной мощности, об/мин",
        column2: 1750,
      },
      {
        column1:
          "Удельный расход топлива при эксплуатационной мощности, г/л.с.ч.",
        column2: 175,
      },
      {
        column1: "Коэффициент запаса крутящего момента в тяговом режиме, %",
        column2: 35,
      },
      {
        column1:
          "Число передач - переднего хода (с ходоуменьшителем и реверс-редуктором)",
        column2: "7 (23,14)",
      },
      {
        column1:
          "Число передач - заднего хода (с ходоуменьшителем и реверс-редуктором)",
        column2: "1 (5,7)",
      },
      {
        column1: "Диапазон скоростей переднего хода, км/ч - основной",
        column2: "5,3…11,2",
      },
      {
        column1: "Диапазон скоростей переднего хода, км/ч - с ходоуменьшителем",
        column2: "0,33…11,2",
      },
      {
        column1:
          "Диапазон скоростей переднего хода, км/ч - с реверс-редуктором",
        column2: "3,17…11,2",
      },
      { column1: "Продольная база, мм", column2: 1612 },
      { column1: "Колея, мм", column2: 1330 },
      { column1: "Дорожный просвет, мм", column2: 38 },
      { column1: "Колея, мм", column2: 1330 },
      { column1: "Дорожный просвет, мм", column2: 380 },
      { column1: "Ширина гусениц, мм", column2: "670" },
      {
        column1:
          "Габаритные размеры, мм - длина (с навесным устройством в транспортном положении)",
        column2: 4400,
      },
      { column1: "Габаритные размеры, мм - ширина", column2: 1850 },
      { column1: "Габаритные размеры, мм - высота", column2: 2710 },
      { column1: "Масса эксплуатационная, кг", column2: 6950 },
      { column1: "Среднее давление на почву, кПа", column2: "41,5" },
    ],
  },
  {
    name: "Бульдозер ДТ-75 с универсальным отвалом",
    shortName: "ДТ-75",
    url: "DT-75-s-universalnym-otvalom",
    price: "3 460 000",
    chassis: "Гусеничный",
    type: "dt-75",
    catalog: "catalog-dt-75",
    img: vzgm90,
    inStock: true,

    pageTitle:
      "Купить новый бульдозер ДТ-75 с универсальным отвалом. Цена 3 460 000 руб| ВЗГМ",
    pageDescription:
      "Купить новый бульдозер ДТ-75 с универсальным отвалом от производителя. Каталог тракторов. Доставка от 0 руб. Технические характеристики, вес бульдозера ДТ-75| ВЗГМ",
    alt: " Бульдозер ДТ-75 с универсальным отвалом",
    gallery: [
      {
        img: "https://www.vzgm.ru/content/tractors/vzgm-90/Buldozer-DT-75-s-uniresalnim-otvalom/Buldozer-DT-75-s-uniresalnim-otvalom-7.webp",
        alt: "Бульдозер Дт-75 с универсальным отвалом",
      },
      {
        img: "https://www.vzgm.ru/content/tractors/vzgm-90/Buldozer-DT-75-s-uniresalnim-otvalom/Buldozer-DT-75-s-uniresalnim-otvalom-2.webp",
        alt: "Двигатель А-41",
      },
      {
        img: "https://www.vzgm.ru/content/tractors/vzgm-90/Buldozer-DT-75-s-uniresalnim-otvalom/Buldozer-DT-75-s-uniresalnim-otvalom-3.webp",
        alt: "Кабина трактора Дт-75",
      },
      {
        img: "https://www.vzgm.ru/content/tractors/vzgm-90/Buldozer-DT-75-s-uniresalnim-otvalom/Buldozer-DT-75-s-uniresalnim-otvalom-4.webp",
        alt: "Приборная панель трактора Дт-75",
      },
      {
        img: "https://www.vzgm.ru/content/tractors/vzgm-90/Buldozer-DT-75-s-uniresalnim-otvalom/Buldozer-DT-75-s-uniresalnim-otvalom-5.webp",
        alt: "Кабина  трактора Дт-75",
      },
      {
        img: "https://www.vzgm.ru/content/tractors/vzgm-90/Buldozer-DT-75-s-uniresalnim-otvalom/Buldozer-DT-75-s-uniresalnim-otvalom-6.webp",
        alt: "Трактор Дт-75 вид сзади",
      },
    ],
    shortDescription: " Бульдозер ДТ- 75 с универсальным отвалом. ",
    metaDescription:
      "Трактор Дт-75 бульдозер для широкого спектра работ.  В наличии от производителя. Сервисное обслуживание. Гарантия 1 год.  ",

    description: [
      {
        type: "paragraph",
        content:
          "Новый трактор ДТ-75 бульдозер имеет конструктивные отличия от своего предшественника выпускаемого на ВгТЗ - кабина из композитного материала, улучшенная шумо и виброизоляция, система вентиляции обеспечат улучшенную эргономику для  механизатора, а значит повысят его производительность. ",
      },
      {
        type: "paragraph",
        content: "На бульдозер ДТ 75 устанавливаются двигатели:",
      },
      {
        type: "table",
        content: [
          { column1: "А 41", column2: 90, column3: "Алтайский моторный завод" },
          { column1: "Д-245", column2: 95, column3: "Минский моторный завод" },
          { column1: "Д-260", column2: 98, column3: "Минский моторный завод" },
        ],
      },

      {
        type: "paragraph",
        content:
          "Бульдозер  ДТ-75 может выпускать с различными типами отвалов:",
      },
      {
        type: "list",
        content: ["поворотный отвал БПДТ", "универсальный отвал БУДТ"],
      },
      {
        type: "subtitle",
        content: "Бульдозер Дт-75 с поворотным отвалом БПДТ",
      },
      {
        type: "paragraph",
        content:
          "Поворотного отвала БПДТ для ДТ-75 может изменяться, поворачиваясь в обе стороны на 35°. Это позволяет бульдозеры выполнять различные работы с большей производительностью. ",
      },
      {
        type: "paragraph",
        content:
          "Поворотный отвал может смещаться вправо и влево относительно хода ДТ-75, подниматься и опускаться, придавая при этом машине определенную мобильность  по сравнению с неповоротным отвалом.",
      },
      {
        type: "paragraph",
        content: "Конструктивно  БПДТ состоит из: ",
      },

      {
        type: "list",
        content: [
          "Нижней и верхней коробки жесткости;",
          "Вертикальных ребер жесткости;",
          "Боковой стенки.",
        ],
      },
      {
        type: "paragraph",
        content:
          "Задняя поверхность отвала БПДТ оснащена шаровым гнездом для соединения его с толкающей рамой, на которой имеется шаровая пята. Находящиеся по обе стороны от двигателя гидроцилиндры  приводят в рабочее раму, которая соединяет два верхних и два нижних толкателя. Установка рабочего угла ножей осуществляется  с помощью винтовых раскосов.",
      },
      {
        type: "paragraph",
        content:
          "Отвал не только может менять рабочий угол, но его можно по-разному установить. Он может стоять перпендикулярно к оси трактора, и продольно;",
      },
      {
        type: "paragraph",
        content:
          "Отвал оснащается как металлическими, так и резиновыми ножами, используемыми в дорожно-строительных работах. Определенные модели ножей применяются для разных видов работ: уборочных, планировочных, ландшафтных. Полотно для отвалов, в том числе и поворотных, изготавливается из легированной стали, что существенно увеличивает срок эксплуатации.",
      },
      {
        type: "subtitle",
        content: "Бульдозер Дт-75  с универсальным отвалом БУДТ",
      },
      {
        type: "paragraph",
        content:
          "Отвальные агрегаты, которые могут регулировать углы поворота и перекоса, и имеют шесть степеней свободы, называются универсальными, поворотными отвалами с гидроперекосом.",
      },
      {
        type: "paragraph",
        content: "Достоинства отвалов БУДТ:",
      },
      {
        type: "list",
        content: [
          "Могут изменять поперечные и продольные углы установки  за счет шарнирного типа прикрепления отвала к П-образной раме трактора;",
          "Могут перемещаться в различных плоскостях с помощью трех гидроцилиндров;",
          "Гидроцилиндры приводятся в действие и управляются из кабины трактора;",
        ],
      },

      {
        type: "paragraph",
        content: "Конструкция:",
      },
      {
        type: "paragraph",
        content:
          " Отвал БУДТ выглядит как металлическая сварная конструкция жесткого коробчатого типа, с приваренным к ней лобовым листом из высокопрочной легированной стали. Лист криволинейного профиля состоит из двух частей, скрепленных между собой шарнирами. Такая конструкция делает каждую из частей отвала самостоятельной единицей, которая может изменять свое положение относительно другой части. Это расширяет функциональные возможности универсального отвала по сравнению с отвалами другой конструкции.",
      },
      {
        type: "paragraph",
        content:
          "Отвал БУДТ имеет меньшую высоту и используется в основном при планировочных работах в перемещении сыпучих строительных материалов, в расчистке дорожного полотна от грязи и снега. ",
      },
      {
        type: "paragraph",
        content: "Может также использоваться:",
      },
      {
        type: "list",
        content: [
          "Как прямой отвал;",
          "Как поворотный отвал;",
          "Как поперечный перекос.",
        ],
      },
      {
        type: "paragraph",
        content:
          "Приобретая бульдозер ДТ-75 с неповоротным отвалом у производителя ООО 'ВЗГМ', вы получаете:",
      },
      {
        type: "list",
        content: [
          "сертифицированное качество",
          "заводскую гарантию",
          "конкурентные    цены",
          "доставку в любой регион РФ",
        ],
      },
      { type: "paragraph", content: "Варианты комплектации:" },
      {
        type: "list",
        content: [
          "Реверс-редуктор",
          "Ходоуменьшитель",
          "Задняя гидронавесная система",
        ],
      },
    ],

    characteristics: [
      { column1: "Тяговый класс", column2: 3 },
      { column1: "Двигатель", column2: "Д-440-22 (А-41)" },
      { column1: "Эксплуатационная мощность, л.с.", column2: 95 },
      {
        column1:
          "Частота вращения коленвала при эксплуатационной мощности, об/мин",
        column2: 1750,
      },
      {
        column1:
          "Удельный расход топлива при эксплуатационной мощности, г/л.с.ч.",
        column2: 175,
      },
      {
        column1: "Коэффициент запаса крутящего момента в тяговом режиме, %",
        column2: 35,
      },
      {
        column1:
          "Число передач - переднего хода (с ходоуменьшителем и реверс-редуктором)",
        column2: "7 (23,14)",
      },
      {
        column1:
          "Число передач - заднего хода (с ходоуменьшителем и реверс-редуктором)",
        column2: "1 (5,7)",
      },
      {
        column1: "Диапазон скоростей переднего хода, км/ч - основной",
        column2: "5,3…11,2",
      },
      {
        column1: "Диапазон скоростей переднего хода, км/ч - с ходоуменьшителем",
        column2: "0,33…11,2",
      },
      {
        column1:
          "Диапазон скоростей переднего хода, км/ч - с реверс-редуктором",
        column2: "3,17…11,2",
      },
      { column1: "Продольная база, мм", column2: 1612 },
      { column1: "Колея, мм", column2: 1330 },
      { column1: "Дорожный просвет, мм", column2: 38 },
      { column1: "Колея, мм", column2: 1330 },
      { column1: "Дорожный просвет, мм", column2: 380 },
      { column1: "Ширина гусениц, мм", column2: "390 или 470" },
      {
        column1:
          "Габаритные размеры, мм - длина (с навесным устройством в транспортном положении)",
        column2: 4400,
      },
      { column1: "Габаритные размеры, мм - ширина", column2: 1850 },
      { column1: "Габаритные размеры, мм - высота", column2: 2710 },
      { column1: "Масса эксплуатационная, кг", column2: 6950 },
      { column1: "Среднее давление на почву, кПа", column2: "41,5" },
    ],
  },
  {
    name: "Трактор ДТ-75 с задней гидронавеской",
    shortName: "ДТ-75",
    url: "DT-75-s-gidronaveskoy",
    price: "3 150 000",
    type: "dt-75",
    catalog: "catalog-dt-75",
    img: vzgm90,
    chassis: "Гусеничный",
    inStock: true,
    pageTitle:
      "Купить новый трактор ДТ-75 с задней гидронавеской. Цена 3 150 000 руб| ВЗГМ ",
    pageDescription:
      " Купить новый трактор ДТ-75 с задней навеской  от производителя. Каталог тракторов. Доставка от 0 руб. Технические характеристики, вес бульдозера ДТ-75| ВЗГМ.",
    alt: " Трактор ДТ-75 с задней гидронавеской",
    gallery: [
      {
        img: "https://www.vzgm.ru/content/tractors/vzgm-90/Dt-75-s-zadnei-naveskoi/Dt-75-s-zadnei-naveskoi-2.webp",
        alt: "Задняя навеска трактора ДТ-75",
      },
      {
        img: "https://www.vzgm.ru/content/tractors/vzgm-90/Dt-75-s-zadnei-naveskoi/Dt-75-s-zadnei-naveskoi-1.webp",
        alt: "Задняя навеска болотника ДТ-75",
      },

      {
        img: "https://www.vzgm.ru/content/tractors/vzgm-90/Dt-75-s-zadnei-naveskoi/Dt-75-s-zadnei-naveskoi-3.webp",
        alt: "Задняя навеска болотохода ДТ-75",
      },
    ],
    shortDescription:
      " Трактор ДТ- 75 с задней гидронавеской от производителя. ",
    metaDescription:
      "Гусеничный трактор Дт-75 с задней гидронавеской для широкого спектра работ в наличии в Московской области. Сервисное обслуживание. ",

    description: [
      {
        type: "paragraph",
        content:
          " Гусеничный трактор ДТ-75  – это универсальная  техника специального назначения. Технические характеристики трактора Дт-75 позволяют ему эффективно решать разноплановый круг задач. Наиболее часто  используется – в сельском хозяйстве, строительстве, работе с грунтом. Установка  задней гидронавески расширяет номенклатуру выполняемых работ, наиболее часто навешивается плуг и корчеватель.",
      },
      {
        type: "paragraph",
        content:
          " Как известно, трактор Дт -75, был самый массовый в СССР, и не зря, т.к. совместил в себе приемлемую мощность для большинства задач, простоту конструкции, высокую ремонтопригодность и тд. Эти преимущества сохранены и в нашей модификации. ",
      },
      {
        type: "paragraph",
        content:
          "Наш трактор ДТ-75 имеет конструктивные отличия от своего предшественника выпускаемого в прошлом на ОАО 'Волгоградский тракторный завод',  кабина выполнена из композитного материала, улучшена шумо и виброизоляция, система вентиляции обеспечат улучшенную эргономику для  механизатора, а значит повысят его производительность. ",
      },
      {
        type: "paragraph",
        content: "На трактор ДТ 75 устанавливаются двигатели:",
      },
      {
        type: "table",
        content: [
          { column1: "А 41", column2: 90, column3: "Алтайский моторный завод" },
          { column1: "Д-245", column2: 95, column3: "Минский моторный завод" },
          { column1: "Д-260", column2: 98, column3: "Минский моторный завод" },
        ],
      },

      {
        type: "paragraph",
        content:
          " Каркас кабины трактора стал более безопасным, а сама она стала более комфортной. Капот машины сделан из стеклопластика и откидывается.",
      },
      {
        type: "paragraph",
        content:
          "Глушитель и выхлопная труба расположены на передней стойке кабины. Также разработана и применена новая расцветка трактора: бело-голубая, синего цвета.",
      },
      {
        type: "paragraph",
        content: " На Трактор ДТ-75 комплектуется следующими типами отвалов:",
      },

      {
        type: "list",
        content: [
          "прямой отвал БНДТ-10",
          "поворотный отвал БПДТ-20",
          "поворотный отвал БПДТ",
          "универсальный отвал БУДТ",
        ],
      },
      {
        type: "paragraph",
        content:
          "Вы можете посмотреть и купить трактор Дт-75 в Московской области или г. Волгоград. ",
      },
      {
        type: "paragraph",
        content:
          " Вес трактора Дт-75 составляет 6950 кг. позволяет транспортировать его в грузовых автомобилях грузоподъемностью до 10 тонн.",
      },

      {
        type: "paragraph",
        content:
          "Приобретая гусеничный трактор ДТ-75 у производителя ООО 'ВЗГМ', вы получаете:",
      },
      {
        type: "list",
        content: [
          "возможность покупки в лизинг",
          "сертифицированное качество",
          "заводскую гарантию",
          "конкурентные цены",
          "доставку в любой регион РФ",
        ],
      },
    ],
    characteristics: [
      { column1: "Тяговый класс", column2: 3 },
      { column1: "Двигатель", column2: "Д-440-22 (А-41)" },
      { column1: "Эксплуатационная мощность, л.с.", column2: 95 },
      {
        column1:
          "Частота вращения коленвала при эксплуатационной мощности, об/мин",
        column2: 1750,
      },
      {
        column1:
          "Удельный расход топлива при эксплуатационной мощности, г/л.с.ч.",
        column2: 175,
      },
      {
        column1: "Коэффициент запаса крутящего момента в тяговом режиме, %",
        column2: 35,
      },
      {
        column1:
          "Число передач - переднего хода (с ходоуменьшителем и реверс-редуктором)",
        column2: "7 (23,14)",
      },
      {
        column1:
          "Число передач - заднего хода (с ходоуменьшителем и реверс-редуктором)",
        column2: "1 (5,7)",
      },
      {
        column1: "Диапазон скоростей переднего хода, км/ч - основной",
        column2: "5,3…11,2",
      },
      {
        column1: "Диапазон скоростей переднего хода, км/ч - с ходоуменьшителем",
        column2: "0,33…11,2",
      },
      {
        column1:
          "Диапазон скоростей переднего хода, км/ч - с реверс-редуктором",
        column2: "3,17…11,2",
      },
      { column1: "Продольная база, мм", column2: 1612 },
      { column1: "Колея, мм", column2: 1330 },
      { column1: "Дорожный просвет, мм", column2: 38 },
      { column1: "Колея, мм", column2: 1330 },
      { column1: "Дорожный просвет, мм", column2: 380 },
      { column1: "Ширина гусениц, мм", column2: "390 или 470" },
      {
        column1:
          "Габаритные размеры, мм - длина (с навесным устройством в транспортном положении)",
        column2: 4400,
      },
      { column1: "Габаритные размеры, мм - ширина", column2: 1850 },
      { column1: "Габаритные размеры, мм - высота", column2: 2710 },
      { column1: "Масса эксплуатационная, кг", column2: 6950 },
      { column1: "Среднее давление на почву, кПа", column2: "41,5" },
    ],
  },
  {
    name: "Дт-75 Болотник с прямым отвалом",
    shortName: "ДТ-75",
    url: "dt-75-bolotnik-s-pryamim-otvalom",
    price: "3 530 000",
    chassis: "Гусеничный",
    img: vzgm_90_base_1,
    inStock: true,
    catalog: "catalog-dt-75",
    type: "dt-75",
    alt: "Гусеничный болотник ВЗГМ-90 – усовершенствованная модель трактора ДТ-75",
    pageTitle:
      "Купить новый ДТ-75 болотник с прямым отвалом. Цена 3 530 000 руб| ВЗГМ",
    pageDescription:
      "Купить новый ДТ-75 болотник (болотоход) с прямым отвалом от производителя. Каталог тракторов. Доставка от 0 руб.| ВЗГМ",

    gallery: [
      {
        img: " http://www.vzgm.ru/content/tractors/vzgm-90/bolotnik-c-pryamim-otvalom/photo1706544823 (3).webp",
        alt: "Трактора ДТ-75 с отвалом",
      },
      {
        img: " http://www.vzgm.ru/content/tractors/vzgm-90/bolotnik-c-pryamim-otvalom/photo1706544823 (1).webp",
        alt: "Трактора ДТ-75",
      },
      {
        img: "http://www.vzgm.ru/content/tractors/vzgm-90/bolotnik-c-pryamim-otvalom/724A0134.webp",
        alt: "Панель трактора ДТ-75",
      },
      {
        img: " http://www.vzgm.ru/content/tractors/vzgm-90/bolotnik-c-pryamim-otvalom/724A0137.webp",
        alt: "Двигатель трактора ДТ-75",
      },
      {
        img: " http://www.vzgm.ru/content/tractors/vzgm-90/bolotnik-c-pryamim-otvalom/724A9352.webp",
        alt: "Кабина трактора ДТ-75",
      },

      {
        img: " http://www.vzgm.ru/content/tractors/vzgm-90/bolotnik-c-pryamim-otvalom/photo1706544823.webp",
        alt: "Гусеница трактора ДТ-75",
      },
      {
        img: " http://www.vzgm.ru/content/tractors/vzgm-90/bolotnik-c-pryamim-otvalom/photo1706545174.webp",
        alt: "Трактор ДТ-75 вид сбоку",
      },
    ],
    shortDescription: "Болотоход ДТ-75 с прямым отвалом ",
    metaDescription:
      "Купить новый болотник ДТ-75 от производителя в Московской области. Гарантия 1 год или 1000 мч. Помощь в доставке. ",
    description: [
      {
        type: "paragraph",
        content:
          "Новый  ДТ-75 болотник имеет некоторые конструкторские и дизайнерские отличия от оригинального выпускаемого  в прошлом ОАО 'Волгоградский тракторный завод'. ",
      },
      {
        type: "paragraph",
        content:
          "На тракторе установлен улучшенный двигатель с повышенными техническими характеристиками, как правило, А-41 мощностью 95 л. с., в линейке есть моторы с большей мощностью. Каркас кабины трактора стал более безопасным, а сама она стала более комфортной. Капот машины сделан из стеклопластика и откидывается.",
      },
      {
        type: "paragraph",
        content:
          "Глушитель и выхлопная труба расположены на передней стойке кабины. Также разработана и применена новая расцветка трактора: бело-голубая, синего цвета.",
      },
      {
        type: "paragraph",
        content:
          "Простота конструкции, высокая ремонтопригодность гусеничного движителя болотника и отличная проходимость, позволяют снизить стоимость владения, сберечь структуру почвы и повысить урожайность.",
      },
      {
        type: "paragraph",
        content:
          "Болотоход ДТ-75 трактор, используемый чаще всего в сельском хозяйстве. Конструктивно он шире обычного ДТ имеет специальные болотоходные гусеницы, шириной 670 мм., колея имеет размеры до 1570 мм. Он создает меньшую нагрузку на грунт , за счет этого востребован именно там, где чаще всего земля содержит значительное колличество влаги. ",
      },
      {
        type: "paragraph",
        content:
          " На заднюю гидронавеску вешается различное оборудование  - плуг, корчеватель и тд.   используется вместе с различными торфодобывающими и иными мелиоративными машинами. ",
      },
      {
        type: "paragraph",
        content:
          " Осуществляем доставку во все регионы России. Доступен к продаже в лизинг. Покупка болотника ДТ-75 субсидируется государством.",
      },
    ],

    characteristics: [
      { column1: "Тяговый класс", column2: 3 },
      { column1: "Двигатель", column2: "Д-440-22 (А-41)" },
      { column1: "Эксплуатационная мощность, л.с.", column2: 95 },
      {
        column1:
          "Частота вращения коленвала при эксплуатационной мощности, об/мин",
        column2: 1750,
      },
      {
        column1:
          "Удельный расход топлива при эксплуатационной мощности, г/л.с.ч.",
        column2: 175,
      },
      {
        column1: "Коэффициент запаса крутящего момента в тяговом режиме, %",
        column2: 35,
      },
      {
        column1:
          "Число передач - переднего хода (с ходоуменьшителем и реверс-редуктором)",
        column2: "7 (23,14)",
      },
      {
        column1:
          "Число передач - заднего хода (с ходоуменьшителем и реверс-редуктором)",
        column2: "1 (5,7)",
      },
      {
        column1: "Диапазон скоростей переднего хода, км/ч - основной",
        column2: "5,3…11,2",
      },
      {
        column1: "Диапазон скоростей переднего хода, км/ч - с ходоуменьшителем",
        column2: "0,33…11,2",
      },
      {
        column1:
          "Диапазон скоростей переднего хода, км/ч - с реверс-редуктором",
        column2: "3,17…11,2",
      },
      { column1: "Продольная база, мм", column2: 1612 },
      { column1: "Колея, мм", column2: 1330 },
      { column1: "Дорожный просвет, мм", column2: 38 },
      { column1: "Колея, мм", column2: 1330 },
      { column1: "Дорожный просвет, мм", column2: 380 },
      { column1: "Ширина гусениц, мм", column2: "670" },
      {
        column1:
          "Габаритные размеры, мм - длина (с навесным устройством в транспортном положении)",
        column2: 4400,
      },
      { column1: "Габаритные размеры, мм - ширина", column2: 1850 },
      { column1: "Габаритные размеры, мм - высота", column2: 2710 },
      { column1: "Масса эксплуатационная, кг", column2: 6950 },
      { column1: "Среднее давление на почву, кПа", column2: "41,5" },
    ],
  },
  {
    name: "Трактор ДТ-75 на резиновых гусеницах",
    shortName: "ДТ-75",
    url: "DT-75-na-rezinovyh-gusenitsah",
    price: "3 900 000",
    type: "dt-75",
    chassis: "Гусеничный",
    catalog: "catalog-dt-75",
    img: vzgm90,
    inStock: true,
    pageTitle:
      "Купить новый ДТ-75 на резиновых гуcеницах. Цена 3 900 000 руб| ВЗГМ",
    pageDescription:
      " Купить новый трактор ДТ-75 на резиновых гуcеницах от производителя. Каталог тракторов. Доставка от 0 руб. Технические характеристики ДТ-75| ВЗГМ",
    alt: " Трактор ДТ-75 на резиновых гусеницах.",
    gallery: [
      {
        img: "http://www.vzgm.ru/content/tractors/vzgm-90/tractor-DT-75-na-rezinovih-gusenithah/tractor-DT-75-na-rezinovih-gusenithah-1.webp",
        alt: "Трактор ДТ-75 на резиновых гусеницах",
      },
      {
        img: "http://www.vzgm.ru/content/tractors/vzgm-90/tractor-DT-75-na-rezinovih-gusenithah/724A9352.webp",
        alt: "Кабина трактора ДТ-75 на резиновых гусеницах",
      },
      {
        img: "http://www.vzgm.ru/content/tractors/vzgm-90/tractor-DT-75-na-rezinovih-gusenithah/724A0137.webp",
        alt: "Двигатель трактора ДТ-75 на резиновых гусеницах",
      },
      {
        img: "http://www.vzgm.ru/content/tractors/vzgm-90/tractor-DT-75-na-rezinovih-gusenithah/724A0134.webp",
        alt: "Панель управления трактора ДТ-75 на резиновых гусеницах",
      },
    ],
    shortDescription:
      " Трактор ДТ- 75 на резиновых гусеницах от производителя. ",
    metaDescription:
      "Трактор Дт-75 на резиновых гусеницах для широкого спектра работ в наличии. Сервисное обслуживание. Гарантия 1 год.",

    description: [
      {
        type: "paragraph",
        content:
          " Гусеничный трактор ДТ-75 на резиновых гусеницах  –  универсальная техника, которая имеет ряд преимуществ:",
      },
      {
        type: "list",
        content: [
          "- не портит покрытие дорог",
          "- имеет низкий шум",
          "-  хорошую амортизацию.",
          "Также можно отметить улучшение маневренности, снижение расхода топлива, увеличение скорости движения .",
        ],
      },
      {
        type: "paragraph",
        content:
          " Резиноармированные гусеницы легче устанавливать. Но нельзя перетягивать и с осторожностью применять на грунтах , которые могут разрезать покрытие.",
      },

      {
        type: "paragraph",
        content:
          " Трактор Дт -75 на резиновых гусеницах  были еще в  СССР. В настоящее время лидерами по производству и использованию резиноармированных гусениц являются азиатские страны и США,  в России , к счастью, остались несколько качественных производителей, с которыми мы сотрудничаем.   В сельском хозяйстве  основной причиной использования является то, что резиноармированные гусеницы не  оставляют серьезных повреждений на почве.",
      },
      {
        type: "paragraph",
        content: "На трактор ДТ 75 устанавливаются двигатели:",
      },
      {
        type: "table",
        content: [
          { column1: "А 41", column2: 90, column3: "Алтайский моторный завод" },
          { column1: "Д-245", column2: 95, column3: "Минский моторный завод" },
          { column1: "Д-260", column2: 98, column3: "Минский моторный завод" },
        ],
      },

      {
        type: "paragraph",
        content: " На ДТ-75 устанавливаются следующие   типы отвалов:",
      },

      {
        type: "list",
        content: [
          "прямой отвал БНДТ-10",
          "прямой отвал БПДТ-20",
          "поворотный отвал БПДТ",
          "универсальный отвал БУДТ",
        ],
      },
      {
        type: "paragraph",
        content:
          "Вы можете посмотреть и купить трактор Дт-75 в Московской области или г. Волгоград.  В нашем штате мобильная бригада, поможем  в случае возникновения проблем в кратчайший срок.",
      },
      {
        type: "paragraph",
        content:
          " Вес трактора Дт-75 составляет 6950 кг. позволяет транспортировать его в грузовых автомобилях грузоподъемностью до 10 тонн.",
      },

      {
        type: "paragraph",
        content:
          "Приобретая гусеничный трактор ДТ-75 у производителя ООО 'ВЗГМ', вы получаете:",
      },
      {
        type: "list",
        content: [
          "возможность покупки в лизинг",
          "сертифицированное качество",
          "заводскую гарантию",
          "конкурентные цены",
          "доставку в любой регион РФ",
        ],
      },
      { type: "paragraph", content: "Варианты комплектации:" },
      {
        type: "list",
        content: [
          "Реверс-редуктор",
          "Ходоуменьшитель",
          "Задняя гидронавесная система",
          "Кондиционер",
          "Подогреватель двигателя",
          "Отопитель кабины",
        ],
      },
    ],

    characteristics: [
      { column1: "Тяговый класс", column2: 3 },
      { column1: "Двигатель", column2: "Д-440-22 (А-41)" },
      { column1: "Эксплуатационная мощность, л.с.", column2: 95 },
      {
        column1:
          "Частота вращения коленвала при эксплуатационной мощности, об/мин",
        column2: 1750,
      },
      {
        column1:
          "Удельный расход топлива при эксплуатационной мощности, г/л.с.ч.",
        column2: 175,
      },
      {
        column1: "Коэффициент запаса крутящего момента в тяговом режиме, %",
        column2: 35,
      },
      {
        column1:
          "Число передач - переднего хода (с ходоуменьшителем и реверс-редуктором)",
        column2: "7 (23,14)",
      },
      {
        column1:
          "Число передач - заднего хода (с ходоуменьшителем и реверс-редуктором)",
        column2: "1 (5,7)",
      },
      {
        column1: "Диапазон скоростей переднего хода, км/ч - основной",
        column2: "5,3…11,2",
      },
      {
        column1: "Диапазон скоростей переднего хода, км/ч - с ходоуменьшителем",
        column2: "0,33…11,2",
      },
      {
        column1:
          "Диапазон скоростей переднего хода, км/ч - с реверс-редуктором",
        column2: "3,17…11,2",
      },
      { column1: "Продольная база, мм", column2: 1612 },
      { column1: "Колея, мм", column2: 1330 },
      { column1: "Дорожный просвет, мм", column2: 38 },
      { column1: "Колея, мм", column2: 1330 },
      { column1: "Дорожный просвет, мм", column2: 380 },
      { column1: "Ширина гусениц, мм", column2: "390 или 470" },
      {
        column1:
          "Габаритные размеры, мм - длина (с навесным устройством в транспортном положении)",
        column2: 4400,
      },
      { column1: "Габаритные размеры, мм - ширина", column2: 1850 },
      { column1: "Габаритные размеры, мм - высота", column2: 2710 },
      { column1: "Масса эксплуатационная, кг", column2: 6950 },
      { column1: "Среднее давление на почву, кПа", column2: "41,5" },
    ],
  },

  {
    name: "Трактор ХТЗ 150 - Слобожанец",
    shortName: "ХТЗ-150",
    url: "XTZ-150",
    type: "t-150",
    price: "6 800 000",
    chassis: "Колесный",
    catalog: "catalog-htz-t150",
    pageTitle: "Купить трактор ХТЗ 150",
    pageDescription:
      "Купить ХТЗ Т150 от производителя с доставкой. Гарантия 1 год.  Цена трактора ХТЗ 150 - 6 800 000 руб. ",
    inStock: true,

    gallery: [
      {
        img: "http://www.vzgm.ru/content/tractors/VZGM-150/slobozhanec/VZGM-150-1.webp",
        alt: "Трактор ДТ-75 с отвалом",
      },
      {
        img: "http://www.vzgm.ru/content/tractors/VZGM-150/slobozhanec/VZGM-150-10.webp",
        alt: "Трактор ДТ-75 с отвалом",
      },

      {
        img: "http://www.vzgm.ru/content/tractors/VZGM-150/slobozhanec/VZGM-150-2.webp",
        alt: "Трактор ДТ-75 с отвалом",
      },
      {
        img: "http://www.vzgm.ru/content/tractors/VZGM-150/slobozhanec/VZGM-150-3.webp",
        alt: "Трактор ДТ-75 с отвалом",
      },
      {
        img: "http://www.vzgm.ru/content/tractors/VZGM-150/slobozhanec/VZGM-150-4.webp",
        alt: "Трактор ДТ-75 с отвалом",
      },
      {
        img: "http://www.vzgm.ru/content/tractors/VZGM-150/slobozhanec/VZGM-150-8.webp",
        alt: "Трактор ДТ-75 с отвалом",
      },
      {
        img: "http://www.vzgm.ru/content/tractors/VZGM-150/slobozhanec/VZGM-150-9.webp",
        alt: "Трактор ДТ-75 с отвалом",
      },
    ],
    shortDescription: "Трактор ХТЗ-150 для широко спектра работ. ",

    img: vzgm_150_base_4,
    alt: "Усовершенствованная модель трактора ХТЗ-150",
    description: [
      {
        type: "paragraph",
        content:
          "Трактор ХТЗ 150  - популярность модели обусловлена простотой в обслуживании, значительными показателями производительности, надежностью и консервативными ценами (в том числе и на запчасти).",
      },
      {
        type: "paragraph",
        content:
          "Трактор ХТЗ Т150 наиболее значительное применение нашел в сельском хозяйстве при земельной обработке, сборе и посеве урожая, пахоте, внесении минеральных и органических удобрений, сплошной культивации и транспортных работ с прицепами до 20 тонн. Функциональность техники существенно повышается благодаря широкому ассортименту полунавесного и навесного оснащения, устанавливаемого на нее. Отлично чувствует себя в условиях бездорожья. А также для решения разных коммунальных задач.",
      },
      {
        type: "paragraph",
        content:
          "Преимуществом трактора является низкая стоимость владения. Колесный трактор Т-150К максимально унифицирован с гусеничной моделью Т-150 по широкой номенклатуре узлов и деталей. Недостатка в запасных частях нет.",
      },
      {
        type: "paragraph",
        content:
          "Трактор комплектуется дизельными двигателями ЯМЗ-236 (132 лс) или ЯМЗ-238 (176 лс). Благодаря этому, трактор имеет высокую производительность. Кроме того, трактор имеет переднеприводную конструкцию, что позволяет улучшить управляемость на дорогах и повысить маневренность.",
      },
      {
        type: "paragraph",
        content:
          "Коробка передач – механическая ступенчатая имеет 12 скоростей, распределенных между четырьмя диапазонами: замедленный, рабочий, транспортный и задний ход.",
      },
      {
        type: "paragraph",
        content:
          "Возможность работы на магистральных дорогах с твёрдым покрытием за счёт колёсного хода и обеспечения габарита по ширине менее 2,5 метра.",
      },
      {
        type: "paragraph",
        content:
          " Увеличенная база трактора (расстояние между осями передних и задних колёс), установка одинаковых передних и задних колёс увеличенной грузоподъёмности размером 1440 × 510 мм с развитыми грунтозацепами, наличие свободного пространства на задней полураме позволяют существенно увеличить количество агрегатируемых с трактором сельхозмашин",
      },
    ],

    characteristics: [
      { column1: "Тяговый класс", column2: 3 },
      { column1: "Двигатель", column2: " ЯМЗ-238 (236)" },
      {
        column1: "Эксплуатационная мощность, л.с.",
        column2: "176 / 240 кВт /л.с.",
      },
      {
        column1:
          "Частота вращения коленвала при эксплуатационной мощности, об/мин",
        column2: 2150,
      },
      {
        column1: "Рабочий объем мотора",
        column2: "11 л",
      },
      {
        column1: "Полный привод 4х4 ",
        column2: "есть",
      },
      {
        column1: "Число передач - переднего хода ",
        column2: "12 ",
      },
      {
        column1:
          "Число передач - заднего хода (с ходоуменьшителем и реверс-редуктором)",
        column2: "1 (5,7)",
      },
      {
        column1: "Максимальная скорость вперед",
        column2: "30 км/час",
      },
      {
        column1: " Максимальная скорость назад ",
        column2: "10 км/час",
      },
      {
        column1: " Клиренс ",
        column2: "400 мм",
      },
      {
        column1:
          "Габаритные размеры, мм - длина (с навесным устройством в транспортном положении)",
        column2: 6000,
      },
      { column1: "Габаритные размеры, мм - ширина", column2: 2406 },
      { column1: "Габаритные размеры, мм - высота", column2: 3195 },
      { column1: "Масса эксплуатационная, кг", column2: 8000 },
      { column1: "Среднее давление на почву, кПа", column2: "130,33" },
    ],

    modifications: [
      { type: "paragraph", content: "Модификации трактора ВЗГМ-150:" },
      {
        type: "list",
        content: [
          "Оборудован гидравлической навесной системой, валом отбора мощности, прицепной скобой и упряжной серьгой. Установлен предпусковой подогреватель ПБЖ 3000",
          "Оборудован гидравлическим крюком",
          "Оборудован бульдозерным отвалом",
          "Фронтальный погрузчик, оборудован навесным ковшом грузоподъемностью 3 тонны.",
          "Лесопромышленный, оборудован каркасом безопасности кабины и трелёвочным оборудованием.",
          "Промышленный вариант, оборудован тягово-сцепным устройством автомобильного типа",
        ],
      },
      { type: "paragraph", content: "Варианты комплектации:" },
      {
        type: "list",
        content: [
          "Реверс-редуктор",
          "Ходоуменьшитель",
          "Задняя гидронавесная система",
          "БНДТ-10, БНДТ-20 – неповоротный бульдозерный отвал",
          "БПДТ – поворотный бульдозерный отвал",
          "БУДТ – универсальный бульдозерный отвал с гидроперекосом",
        ],
      },
      {
        type: "paragraph",
        content: "",
      },
      {
        type: "paragraph",
        content: "",
      },
    ],
  },

  {
    name: "ДТ-75 с навесным оборудованием",
    shortName: "ДТ-75",
    url: "dt-75-s-navesnym-oborydovaniem",
    price: "3 495 000",
    type: "dt-75",
    img: vzgm90,
    chassis: "Гусеничный",
    catalog: "catalog-dt-75",
    inStock: false,
    pageTitle:
      " Купить новый ДТ-75 с навесным оборудованием. Цена 3 495 000 руб| ВЗГМ ",
    pageDescription:
      "Купить новый трактор ДТ-75 с навесным оборудованием от производителя. Каталог тракторов. Доставка от 0 руб. Технические характеристики ДТ-75| ВЗГМ ",
    alt: "Гусеничный трактор ДТ-75",
    gallery: [
      {
        img: "http://www.vzgm.ru/content/tractors/vzgm-90/Dt-75-special/ImageGallery16.webp",
        alt: "Красный трактор ДТ-75 с отвалом",
      },
      {
        img: "http://www.vzgm.ru/content/tractors/vzgm-90/Dt-75-special/ImageGallery10.webp ",
        alt: "Трактор ДТ-75 с отвалом",
      },
      {
        img: "http://www.vzgm.ru/content/tractors/vzgm-90/Dt-75-special/ImageGallery15.webp",
        alt: "Трактор ДТ-75 с плугом",
      },
    ],

    shortDescription: "Новый модернизированный трактор Дт-75. ",

    description: [
      {
        type: "paragraph",
        content:
          "Новый трактор ДТ-75 имеет конструкторские и дизайнерские отличия, для его создания использовались современные композитные материалы.",
      },
      {
        type: "paragraph",
        content:
          "На тракторе ДТ-75 установлен улучшенный двигатель с повышенными техническими характеристиками, как правило А-41. Каркас кабины трактора стал более безопасным, а сама она стала более комфортной. Капот машины сделан из стеклопластика и откидывается.",
      },
      {
        type: "paragraph",
        content:
          "Глушитель и выхлопная труба расположены на передней стойке кабины. Также разработана и применена новая расцветка трактора: бело-голубая или синего цвета.",
      },
      {
        type: "paragraph",
        content:
          "Простота конструкции, высокая ремонтопригодность гусеничного движителя и отличная проходимость, позволяют снизить стоимость владения, сберечь структуру почвы и повысить урожайность.",
      },
      {
        type: "paragraph",
        content:
          "Трактор ДТ-75 используется в сельском хозяйстве, строительстве, транспортных работах и тд. Трактор легко ремонтировать. Опытный ремонтник без труда справиться с любой поломкой, тем более что к нему подходят запчасти от его предшественника.",
      },
      {
        type: "paragraph",
        content:
          "На данный модели установлен прямой отвал и плуг. Используется для вспашки земли. ",
      },
      {
        type: "paragraph",
        content:
          "В зависимости от цели применения машины, она оборудуется гусеницами разного типа:",
      },
      {
        type: "list",
        content: [
          "Для сельхозработ и дорожного строительства ставятся звенчатые гусеницы",
          "Для города и пашни ставятся ленточные, резиноармированные.",
        ],
      },
    ],

    characteristics: [
      { column1: "Тяговый класс", column2: 3 },
      { column1: "Двигатель", column2: "Д-440-22 (А-41)" },
      { column1: "Эксплуатационная мощность, л.с.", column2: 95 },
      {
        column1:
          "Частота вращения коленвала при эксплуатационной мощности, об/мин",
        column2: 1750,
      },
      {
        column1:
          "Удельный расход топлива при эксплуатационной мощности, г/л.с.ч.",
        column2: 175,
      },
      {
        column1: "Коэффициент запаса крутящего момента в тяговом режиме, %",
        column2: 35,
      },
      {
        column1:
          "Число передач - переднего хода (с ходоуменьшителем и реверс-редуктором)",
        column2: "7 (23,14)",
      },
      {
        column1:
          "Число передач - заднего хода (с ходоуменьшителем и реверс-редуктором)",
        column2: "1 (5,7)",
      },
      {
        column1: "Диапазон скоростей переднего хода, км/ч - основной",
        column2: "5,3…11,2",
      },
      {
        column1: "Диапазон скоростей переднего хода, км/ч - с ходоуменьшителем",
        column2: "0,33…11,2",
      },
      {
        column1:
          "Диапазон скоростей переднего хода, км/ч - с реверс-редуктором",
        column2: "3,17…11,2",
      },
      { column1: "Продольная база, мм", column2: 1612 },
      { column1: "Колея, мм", column2: 1330 },
      { column1: "Дорожный просвет, мм", column2: 38 },
      { column1: "Колея, мм", column2: 1330 },
      { column1: "Дорожный просвет, мм", column2: 380 },
      { column1: "Ширина гусениц, мм", column2: "390 или 470" },
      {
        column1:
          "Габаритные размеры, мм - длина (с навесным устройством в транспортном положении)",
        column2: 4400,
      },
      { column1: "Габаритные размеры, мм - ширина", column2: 1850 },
      { column1: "Габаритные размеры, мм - высота", column2: 2710 },
      { column1: "Масса эксплуатационная, кг", column2: 6950 },
      { column1: "Среднее давление на почву, кПа", column2: "41,5" },
    ],

    modifications: [
      { type: "paragraph", content: "Модификации трактора ВЗГМ-90:" },
      {
        type: "list",
        content: [
          "Фронтальный погрузчик",
          "Трактор на резиновых гуcеницах",
          "Торфяник без навесного оборудования",
          "Снегоочиститель",
          "Трубоукладчик",
          "Бульдозер с универсальным отвалом",
          "Бульдозер с неповоротным отвалом",
        ],
      },
      { type: "paragraph", content: "Варианты комплектации:" },
      {
        type: "list",
        content: [
          "Реверс-редуктор",
          "Ходоуменьшитель",
          "Задняя гидронавесная система",
          "БНДТ-10, БНДТ-20 – неповоротный бульдозерный отвал",
          "БПДТ – поворотный бульдозерный отвал",
          "БУДТ – универсальный бульдозерный отвал с гидроперекосом",
        ],
      },
      {
        type: "paragraph",
        content: "Варианты для исполнения гусеничного шасси:",
      },
      {
        type: "list",
        content: ["Стандартная гусеница 390 мм", "Болотная гусеница 670 мм"],
      },
    ],
  },

  {
    name: "Трактор ХТЗ-150 с навесным оборудованием",
    shortName: "ХТЗ-150",
    url: "XTZ-150-s-otvalom",
    price: "6 400 000",
    type: "t-150",
    chassis: "Колесный",
    catalog: "catalog-htz-t150",
    pageTitle:
      "Купить новый трактор ХТЗ 150 с навесным оборудованием. Цена 7 400 000 руб. - ВЗГМ",
    pageDescription:
      "Купить новый трактор ХТЗ Т 150 от производителя. Каталог тракторов. Доставка от 0 руб. Технические характеристики ХТЗ Т 150| ВЗГМ ",
    inStock: true,
    gallery: [
      {
        img: "http://www.vzgm.ru/content/tractors/VZGM-150/XTZ-150/VZGM-150-13.webp",
        alt: "Трактор ХТЗ-150 с отвалом в гараже",
      },
      {
        img: "http://www.vzgm.ru/content/tractors/VZGM-150/XTZ-150/VZGM-150-10.webp",
        alt: "Трактор ХТЗ-150 вид сзади",
      },
      {
        img: "http://www.vzgm.ru/content/tractors/VZGM-150/XTZ-150/VZGM-150-11.webp",
        alt: "Трактор ХТЗ-150 на платформе",
      },

      {
        img: "http://www.vzgm.ru/content/tractors/VZGM-150/XTZ-150/VZGM-150-14.webp",
        alt: "Трактор ХТЗ-150 с отвалом вид спереди",
      },
      {
        img: "http://www.vzgm.ru/content/tractors/VZGM-150/XTZ-150/VZGM-150-12.webp",
        alt: "Трактор ХТЗ-150 транспортировка",
      },

      {
        img: "http://www.vzgm.ru/content/tractors/VZGM-150/XTZ-150/VZGM-150-9.webp",
        alt: "Трактор ХТЗ-150 кабина",
      },
      {
        img: "http://www.vzgm.ru/content/tractors/VZGM-150/XTZ-150/724A9918.webp",
        alt: "Трактор ХТЗ-150 приборная панель",
      },
      {
        img: "http://www.vzgm.ru/content/tractors/VZGM-150/XTZ-150/724A9921.webp",
        alt: "Трактор ХТЗ-150 рулевое колесо",
      },
    ],
    shortDescription: "Современный трактор ХТЗ-150 для широкого спектра работ.",

    description: [
      {
        type: "paragraph",
        content:
          "Трактор ХТЗ 150  - популярность модели обусловлена простотой в обслуживании, значительными показателями производительности, надежностью и консервативными ценами (в том числе и на запчасти).",
      },
      {
        type: "paragraph",
        content:
          "Трактор ХТЗ Т150 наиболее значительное применение нашел в сельском хозяйстве при обработке земли, сборе и посеве урожая, пахоте, внесении минеральных и органических удобрений, сплошной культивации и транспортных работ с прицепами до 20 тонн. Функциональность техники существенно повышается благодаря широкому ассортименту полунавесного и навесного оснащения. Трактор отлично чувствует себя в условиях бездорожья. А также для решения разных коммунальных задач.",
      },
      {
        type: "paragraph",
        content:
          "Преимуществом трактора является низкая стоимость владения. Колесный трактор Т-150К максимально унифицирован с гусеничной моделью Т-150 по широкой номенклатуре узлов и деталей. Недостатка в запасных частях нет. ",
      },
      {
        type: "paragraph",
        content:
          "Трактор комплектуется дизельными двигателями ЯМЗ-236 (132 лс) или ЯМЗ-238 (176 лс). Благодаря этому, трактор имеет высокую производительность. Кроме того, трактор имеет переднеприводную конструкцию, что позволяет улучшить управляемость на дорогах и повысить маневренность.",
      },
      {
        type: "paragraph",
        content:
          "Коробка передач – механическая ступенчатая имеет 12 скоростей, распределенных между четырьмя диапазонами: замедленный, рабочий, транспортный и задний ход.",
      },
      {
        type: "paragraph",
        content:
          "Возможность работы на магистральных дорогах с твёрдым покрытием за счёт колёсного хода и обеспечения габарита по ширине менее 2,5 метра.",
      },
      {
        type: "paragraph",
        content:
          " Увеличенная база трактора (расстояние между осями передних и задних колёс), установка одинаковых передних и задних колёс увеличенной грузоподъёмности размером 1440 × 510 мм с развитыми грунтозацепами, наличие свободного пространства на задней полураме позволяют существенно увеличить количество агрегатируемых с трактором сельхозмашин",
      },
    ],

    characteristics: [
      { column1: "Тяговый класс", column2: 3 },
      { column1: "Двигатель", column2: " ЯМЗ-238 (236)" },
      {
        column1: "Эксплуатационная мощность, л.с.",
        column2: "176 / 240 кВт /л.с.",
      },
      {
        column1:
          "Частота вращения коленвала при эксплуатационной мощности, об/мин",
        column2: 2150,
      },
      {
        column1: "Рабочий объем мотора",
        column2: "11 л",
      },
      {
        column1: "Полный привод 4х4 ",
        column2: "есть",
      },
      {
        column1: "Число передач - переднего хода ",
        column2: "12 ",
      },
      {
        column1:
          "Число передач - заднего хода (с ходоуменьшителем и реверс-редуктором)",
        column2: "1 (5,7)",
      },
      {
        column1: "Максимальная скорость вперед",
        column2: "30 км/час",
      },
      {
        column1: " Максимальная скорость назад ",
        column2: "10 км/час",
      },
      {
        column1: " Клиренс ",
        column2: "400 мм",
      },
      {
        column1:
          "Габаритные размеры, мм - длина (с навесным устройством в транспортном положении)",
        column2: 6000,
      },
      { column1: "Габаритные размеры, мм - ширина", column2: 2406 },
      { column1: "Габаритные размеры, мм - высота", column2: 3195 },
      { column1: "Масса эксплуатационная, кг", column2: 8000 },
      { column1: "Среднее давление на почву, кПа", column2: "130,33" },
    ],

    modifications: [
      { type: "paragraph", content: "Модификации трактора ХТЗ Т-150:" },
      {
        type: "list",
        content: [
          "Оборудован гидравлической навесной системой, валом отбора мощности, прицепной скобой и упряжной серьгой. Установлен предпусковой подогреватель ПБЖ 3000",
          "Оборудован гидравлическим крюком",
          "Оборудован бульдозерным отвалом",
          "Фронтальный погрузчик, оборудован навесным ковшом грузоподъемностью 3 тонны.",
          "Лесопромышленный, оборудован каркасом безопасности кабины и трелёвочным оборудованием.",
          "Промышленный вариант, оборудован тягово-сцепным устройством автомобильного типа",
        ],
      },
      { type: "paragraph", content: "Варианты комплектации:" },
      {
        type: "list",
        content: [
          "Реверс-редуктор",
          "Ходоуменьшитель",
          "Задняя гидронавесная система",
          "БНДТ-10, БНДТ-20 – неповоротный бульдозерный отвал",
          "БПДТ – поворотный бульдозерный отвал",
          "БУДТ – универсальный бульдозерный отвал с гидроперекосом",
        ],
      },
      {
        type: "paragraph",
        content: "",
      },
      {
        type: "paragraph",
        content: "",
      },
    ],
  },

  {
    name: "Трактор ХТЗ 150",
    shortName: "ХТЗ-150",
    url: "XTZ-150-s-navesnym",
    price: "6 200 000",
    chassis: "Колесный",
    catalog: "catalog-htz-t150",
    type: "t-150",
    inStock: true,
    pageTitle: " Купить новый трактор ХТЗ 150. Цена 7 200 000 руб.| ВЗГМ",
    pageDescription:
      " Купить новый трактор ХТЗ Т 150 от производителя. Каталог тракторов. Доставка от 0 руб. Технические характеристики ХТЗ Т150К| ВЗГМ. ",
    gallery: [
      {
        img: "http://www.vzgm.ru/content/tractors/VZGM-150/XTZ-150-bez-navesnogo/photo1704893963 (8).webp",
        alt: "Трактор ХТЗ-150 зима",
      },
      {
        img: "http://www.vzgm.ru/content/tractors/VZGM-150/XTZ-150-bez-navesnogo/VZGM-150-1.webp",
        alt: "Трактор ХТЗ-150 на белом фоне вид сбоку ",
      },
      {
        img: "http://www.vzgm.ru/content/tractors/VZGM-150/XTZ-150-bez-navesnogo/VZGM-150-2.webp",
        alt: "Трактор ХТЗ-150 с задней гидронавеской",
      },
      {
        img: "http://www.vzgm.ru/content/tractors/VZGM-150/XTZ-150-bez-navesnogo/VZGM-150-3.webp",
        alt: "Трактор ХТЗ-150 вид сбоку со стороны водителя",
      },
      {
        img: "http://www.vzgm.ru/content/tractors/VZGM-150/XTZ-150-bez-navesnogo/VZGM-150-4.webp",
        alt: "Синий трактор ХТЗ-150",
      },
      {
        img: "http://www.vzgm.ru/content/tractors/VZGM-150/XTZ-150-bez-navesnogo/VZGM-150-5.webp",
        alt: "Красный  трактор ХТЗ-150",
      },
      {
        img: "http://www.vzgm.ru/content/tractors/VZGM-150/XTZ-150-bez-navesnogo/VZGM-150-6.webp",
        alt: "Красный  трактор ХТЗ-150 вид спереди",
      },
      {
        img: "http://www.vzgm.ru/content/tractors/VZGM-150/XTZ-150-bez-navesnogo/VZGM-150-7.webp",
        alt: "Трактор ХТЗ-150 лето",
      },
      {
        img: "http://www.vzgm.ru/content/tractors/VZGM-150/XTZ-150-bez-navesnogo/VZGM-150-8.webp",
        alt: "Трактор новый ХТЗ-150 производство",
      },

      {
        img: "http://www.vzgm.ru/content/tractors/VZGM-150/XTZ-150-bez-navesnogo/photo1705564183 (1).webp",
        alt: "Серый трактор ХТЗ-150 зима",
      },
      {
        img: "http://www.vzgm.ru/content/tractors/VZGM-150/XTZ-150-bez-navesnogo/photo1705564183.webp",
        alt: "Трактор ХТЗ-150 и Слобожанец",
      },
    ],

    shortDescription:
      "Усовершенствованная модель трактора ХТЗ-150, созданного на базе Харьковского тракторного завода (ХТЗ) в далеком 1974 г. ",
    description: [
      {
        type: "paragraph",
        content:
          "Трактор ХТЗ -150, популярность модели обусловлена простотой в обслуживании, значительными показателями производительности, надежностью и консервативными ценами (в том числе и на запчасти).",
      },
      {
        type: "paragraph",
        content:
          "Трактор характеризуется как умелый помощник в сельском хозяйстве. Применяется при земельной обработке, сборе и посеве урожая, пахоте, внесении минеральных и органических удобрений, сплошной культивации и транспортных работ с прицепами до 20 тонн. Функциональность техники существенно повышается благодаря широкому ассортименту полунавесного и навесного оснащения, устанавливаемого на нее. ХТЗ Т-150К отлично чувствует себя в условиях бездорожья.",
      },
      {
        type: "paragraph",
        content:
          "Другим достоинством модели является то, что отечественные специалисты уже хорошо изучили конструкцию предшественника. Это позволило существенно удешевить обслуживание.",
      },
      {
        type: "paragraph",
        content:
          "Несомненным преимуществом трактора является низкая стоимость владения.",
      },
      {
        type: "paragraph",
        content:
          "Трактор может комплектоваться дизельными двигателями ЯМЗ-236 (132 л.с) или ЯМЗ-238 (176 л.с.). Благодаря этому, трактор имеет высокую производительность и может легко справляться с задачами любой сложности. Кроме того, трактор имеет переднеприводную конструкцию, что позволяет улучшить управляемость на дорогах и повысить маневренность, что, несомненно, является большим преимуществом.",
      },
      {
        type: "paragraph",
        content:
          "Возможность работы на магистральных дорогах с твёрдым покрытием за счёт колёсного хода и обеспечения габарита по ширине менее 2,5 метра.",
      },
      {
        type: "paragraph",
        content:
          "Универсальность. Увеличенная база трактора (расстояние между осями передних и задних колёс), установка одинаковых передних и задних колёс увеличенной грузоподъёмности, наличие свободного пространства на задней полураме позволяют существенно увеличить количество агрегатируемых с трактором сельхозмашин",
      },
      {
        type: "list",
        content: [
          "Повышение надёжности и долговечности",
          "Улучшение условий труда",
          "Повышенные транспортные скорости",
        ],
      },
    ],

    leasing: [
      { type: "paragraph", content: "Как получить трактор в лизинг?" },
      {
        type: "list",
        content: [
          "Выбрать лизинговую компанию",
          "Оставить заявку",
          "Подготовить необходимые документы ",
          "Согласовать условия и подписать договор ",
          "Получить свою технику",
        ],
      },
      { type: "paragraph", content: "Как правило, для юридических лиц:" },
      {
        type: "list",
        content: [
          "Заявление-анкета.",
          "Правоустанавливающие документы",
          "Копия паспорта директора/учредителей",
          "Бухгалтерская отчетность",
          "Решение учредителей об одобрении крупной сделки (если она крупная).",
        ],
      },
      { type: "paragraph", content: "Для индивидуальных предпринимателей:" },
      {
        type: "list",
        content: [
          "Паспорт РФ. Свидетельство об открытии.",
          "Свидетельство о постановке на учет в налоговых органах.",
          "Налоговые декларации с отметкой за 2  последних года.",
          "Справка из банка об обслуживании счета.",
        ],
      },
    ],
    characteristics: [
      { column1: "Тяговый класс", column2: 3 },
      { column1: "Двигатель", column2: " ЯМЗ-238 (236)" },
      {
        column1: "Эксплуатационная мощность, л.с.",
        column2: "176 / 240 кВт /л.с.",
      },
      {
        column1:
          "Частота вращения коленвала при эксплуатационной мощности, об/мин",
        column2: 2150,
      },
      {
        column1: "Рабочий объем мотора",
        column2: "11 л",
      },
      {
        column1: "Полный привод 4х4 ",
        column2: "есть",
      },
      {
        column1: "Число передач - переднего хода ",
        column2: "12 ",
      },
      {
        column1:
          "Число передач - заднего хода (с ходоуменьшителем и реверс-редуктором)",
        column2: "1 (5,7)",
      },
      {
        column1: "Максимальная скорость вперед",
        column2: "30 км/час",
      },
      {
        column1: " Максимальная скорость назад ",
        column2: "10 км/час",
      },
      {
        column1: " Клиренс ",
        column2: "400 мм",
      },
      {
        column1:
          "Габаритные размеры, мм - длина (с навесным устройством в транспортном положении)",
        column2: 6000,
      },
      { column1: "Габаритные размеры, мм - ширина", column2: 2406 },
      { column1: "Габаритные размеры, мм - высота", column2: 3195 },
      { column1: "Масса эксплуатационная, кг", column2: 8000 },
      { column1: "Среднее давление на почву, кПа", column2: "130,33" },
    ],

    modifications: [
      { type: "paragraph", content: "Модификации трактора ВЗГМ-150:" },
      {
        type: "list",
        content: [
          "Оборудован гидравлической навесной системой, валом отбора мощности, прицепной скобой и упряжной серьгой. Установлен предпусковой подогреватель ПБЖ 3000",
          "Оборудован гидравлическим крюком",
          "Оборудован бульдозерным отвалом",
          "Фронтальный погрузчик, оборудован навесным ковшом грузоподъемностью 3 тонны.",
          "Лесопромышленный, оборудован каркасом безопасности кабины и трелёвочным оборудованием.",
          "Промышленный вариант, оборудован тягово-сцепным устройством автомобильного типа",
        ],
      },
      { type: "paragraph", content: "Варианты комплектации:" },
      {
        type: "list",
        content: [
          "Реверс-редуктор",
          "Ходоуменьшитель",
          "Задняя гидронавесная система",
          "БНДТ-10, БНДТ-20 – неповоротный бульдозерный отвал",
          "БПДТ – поворотный бульдозерный отвал",
          "БУДТ – универсальный бульдозерный отвал с гидроперекосом",
        ],
      },
      {
        type: "paragraph",
        content:
          "Возможность работы на магистральных дорогах с твёрдым покрытием за счёт колёсного хода и обеспечения габарита по ширине менее 2,5 метра.",
      },
      {
        type: "paragraph",
        content:
          "Универсальность. Увеличенная база трактора (расстояние между осями передних и задних колёс), установка одинаковых передних и задних колёс увеличенной грузоподъёмности, наличие свободного пространства на задней полураме позволяют существенно увеличить количество агрегатируемых с трактором сельхозмашин",
      },
      {
        type: "list",
        content: [
          "Повышение надёжности и долговечности",
          "Улучшение условий труда",
          "Повышенные транспортные скорости",
        ],
      },
      {
        type: "paragraph",
        content: "",
      },
      {
        type: "paragraph",
        content: "",
      },
    ],
  },
];

export default newtractorData;
