import gallery1 from "../assets/images/gallery/ImageGallery1.png";
import gallery2 from "../assets/images/gallery/ImageGallery2.png";
import gallery3 from "../assets/images/gallery/ImageGallery3.png";
import gallery4 from "../assets/images/gallery/ImageGallery4.jpg";
import gallery5 from "../assets/images/gallery/ImageGallery5.jpeg";

import gallery7 from "../assets/images/gallery/ImageGallery7.webp";
import gallery8 from "../assets/images/gallery/ImageGallery8.jpeg";
import gallery9 from "../assets/images/gallery/ImageGallery9.jpeg";
import gallery10 from "../assets/images/gallery/ImageGallery10.jpeg";
import gallery11 from "../assets/images/gallery/ImageGallery11.jpeg";
import gallery12 from "../assets/images/gallery/ImageGallery12.jpeg";

import gallery14 from "../assets/images/gallery/ImageGallery14.jpeg";
import gallery15 from "../assets/images/gallery/ImageGallery15.jpeg";

// what we do
import ourServicesImg from "../assets/images/whatWeDo/ourServices.png";
import ourSparePartsImg from "../assets/images/whatWeDo/ourSpareParts.png";
import ourTractorsImg from "../assets/images/whatWeDo/ourTractors.png";

import sertificate from "../assets/images/sertificates/sertificate.png";

import partner1 from "../assets/images/partners/bank1.png";
import partner2 from "../assets/images/partners/bank2.png";
import partner3 from "../assets/images/partners/bank3.png";
import partner4 from "../assets/images/partners/bank4.png";

import expert1 from "../assets/images/experts/expert1.png";
import expert2 from "../assets/images/experts/expert2.png";
import expert3 from "../assets/images/experts/expert3.png";
import expert4 from "../assets/images/experts/expert4.png";

import capital1 from "../assets/images/services/gallery/capital-1.jpg";
import capital2 from "../assets/images/services/gallery/capital-2.jpg";
import capital3 from "../assets/images/services/gallery/capital-3.jpg";
import capital4 from "../assets/images/services/gallery/capital-4.jpg";
import capital5 from "../assets/images/services/gallery/capital-5.jpg";
import capital6 from "../assets/images/services/gallery/capital-6.jpg";
import capital7 from "../assets/images/services/gallery/capital-7.jpg";

// Services
import technicalService from "../assets/images/services/ImageTechnical.jpg";
import capitalService from "../assets/images/services/ImageCapital.jpg";
import profilacticService from "../assets/images/services/ImageProfilactic.jpeg";

// Equipment
import engines from "../assets/images/spares/Engine-A-41.png";
import blades from "../assets/images/spares/Pryamoy-otval-20.webp";
import spares from "../assets/images/spares/Transmission-DT-75.png";

const servicesImages = [
  { img: capital1, title: "", subtitle: "" },
  { img: capital2, title: "", subtitle: "" },
  { img: capital3, title: "", subtitle: "" },
  { img: capital4, title: "", subtitle: "" },
  { img: capital5, title: "", subtitle: "" },
  { img: capital6, title: "", subtitle: "" },
  { img: capital7, title: "", subtitle: "" },
];

const experts = [
  { img: expert1, title: "Игорь Исаев", subtitle: "Директор" },
  { img: expert2, title: "Игорь Исаев", subtitle: "Директор" },
  { img: expert3, title: "Игорь Исаев", subtitle: "Директор" },
  { img: expert4, title: "Игорь Исаев", subtitle: "Директор" },
];
const galleryData = [
  { img: gallery1, title: "", subtitle: "" },
  { img: gallery2, title: "", subtitle: "" },
  { img: gallery3, title: "", subtitle: "" },
  { img: gallery4, title: "", subtitle: "" },
  { img: gallery5, title: "", subtitle: "" },
  { img: gallery7, title: "", subtitle: "" },
  { img: gallery8, title: "", subtitle: "" },
  { img: gallery9, title: "", subtitle: "" },
  { img: gallery10, title: "", subtitle: "" },
  { img: gallery11, title: "", subtitle: "" },
  { img: gallery12, title: "", subtitle: "" },
  { img: gallery14, title: "", subtitle: "" },
  { img: gallery15, title: "", subtitle: "" },
];

const sertificates = [{ img: sertificate, id: "001", title: "", subtitle: "" }];

const partners = [
  { img: partner1, title: "", subtitle: "" },
  { img: partner2, title: "", subtitle: "" },
  { img: partner3, title: "", subtitle: "" },
  { img: partner4, title: "", subtitle: "" },
];

const organizationInfo = {
  phone: {
    callNow: { toShow: "+7 (8442) 26-30-69", toLink: "+78442263069" },
    aroundClock: { toShow: "+7 (902) 386-80-00", toLink: "+79023868000" },
  },
  email: "info@vzgm.ru",
  address: "400006 г. Волгоград, ул. Переяславская 3А",
  hours: "Пн - Пт: 9:00 - 18:00 (МСК) | Cб - Вс: выходной",
};

const whatWeDo = [
  {
    img: ourTractorsImg,
    caption: "Наша техника",
    text: "Собственное производство",
    to: "/tractors",
    alt: "Производство собсвенной сельскохозяйственной техники",
  },
  {
    img: ourSparePartsImg,
    caption: "Запчасти",
    text: "Продаем запчасти",
    to: "/eqipment",
    alt: "Продажа всех видов запчастей для сельскохозяйственной техники",
  },
  {
    img: ourServicesImg,
    caption: "Сервисы",
    text: "Обслуживаем и ремонтируем",
    to: "/services",
    alt: "Техническое обслуживание, ремонт и сервис сельскохозяйственной техники",
  },
];

const ourServices = [
  {
    img: technicalService,
    to: "/services/technical",
    caption: "Техническое обслуживание",
    alt: "Мы проводим техническое обслуживание тракторов и другой сельскохозяйственной техники",
  },
  {
    img: capitalService,
    to: "/services/capital",
    caption: "Капитальный ремонт",
    alt: "Мы проводим капитальный ремонт тракторов и другой сельскохозяйственной техники",
  },
  {
    img: profilacticService,
    to: "/services/profilactic",
    caption: "Профилактическое обслуживание",
    alt: "Мы проводим профилактическое обслуживание тракторов и другой сельскохозяйственной техники",
  },
];

const equipmentData = [
  {
    img: engines,
    to: "/eqipment/engine",
    caption: "Двигатели",
    alt: "",
  },
  {
    img: blades,
    to: "/eqipment/blade",
    caption: "Навесное оборудование",
    alt: "",
  },
  {
    img: spares,
    to: "/eqipment/spare",
    caption: "Запчасти",
    alt: "",
  },
];

const interactivePicRepair = [
  {
    element: "engine",
    name: "Двигатель",
    previewText: [
      {
        type: "para",
        content:
          "Мы можем провести модернизацию трактора, установив один из более современных моторов: ",
      },
      {
        type: "para",
        content:
          " - Д 245 , 4-цилинровый, с прямым электростартерным запуском, турбонаддувом с промежуточным охлаждением воздуха, выдающий 95 л/с мощности. ",
      },
      {
        type: "para",
        content:
          " - Дт 260, рядный 6 - цилиндровый дизельный двигатель мощностью 155 л. с., жидкостного охлаждения с турбонаддувом.Выбор двигателя зависит от профиля решаемых задач.",
      },
    ],
  },
  {
    element: "tank",
    name: "Гидравлика",
    previewText: [
      {
        type: "para",
        content:
          "Заменяем неисправное электроооборудование, аккумулятор, провода.",
      },
      {
        type: "para",
        content:
          "Однопроводная 12 вольтовая система делает электрообрудование Дт 75 достаточно безопасным и имеет высокую и недорогую ремонтопригодность.",
      },
      {
        type: "para",
        content:
          "Раздельно агрегатная гидронавеска позволяет установить  навесное оборудование для  двух или трех точечного соединения. ",
      },
      {
        type: "para",
        content:
          "Грузоподъемность навесной системы трактора в районе  1,8 тонны.",
      },
    ],
  },
  {
    element: "chassis",
    name: "Ходовая",
    previewText: [
      {
        type: "para",
        content:
          "Ходовая часть трактора ДТ-75 состоит из подвески, направляющих колес с пружинными амортизаторами, поддерживающих роликов и гусениц ДТ-75.",
      },
      {
        type: "para",
        content:
          "Каретка подвески трактора ДТ-75 - критически важный узел, от которого зависят плавность хода и проходимость машины.",
      },
      {
        type: "para",
        content:
          "Взависимости от режима эксплуатации, на тракторе ДТ-75 используют  3 типа гусениц: ",
      },

      {
        type: "list",
        content: ["стандартные", "усиленные", "болотоходные"],
      },
    ],
  },
  {
    element: "cabin",
    name: "Кабина",
    previewText: [
      {
        type: "para",
        content:
          "Кабина трактора представлена в двух модификациях: классической “почтальон” и новой улучшенной.",
      },
      {
        type: "para",
        content:
          "Новая кабина существенно уменьшает  шумо и вибро нагрузку рабочего места водителя.",
      },
      {
        type: "para",
        content:
          "Улучшенные характеристики вентиляции и отопления, повышенная герметичность  и легкая тонировка кабины  - положительно влияют на эргономику внутреннего пространства, улучшают комфорт и производительность.",
      },
    ],
  },
  {
    element: "transmission",
    name: "Трансмиссия",
    previewText: [
      {
        type: "para",
        content:
          "Ремонт трансмиссии включает в себя восстановление  коробки, заднего моста и планетарного механизма. ",
      },
      {
        type: "para",
        content:
          "Активная  эксплуатация часто приводит к проблемам в коробке  передач.",
      },
      {
        type: "para",
        content:
          "Базовая схема коробки ДТ 75 предусматривает восемь скоростных режимов: семь — для движения вперед и одну — для движения назад.",
      },
      {
        type: "para",
        content:
          "Число передач можно увеличить, установив дополнительное оборудование:",
      },

      {
        type: "list",
        content: ["реверс-редуктор", "ходоуменьшитель"],
      },
    ],
  },
];

const repairCalculator = [
  {
    id: "transmission",
    description: "Капитальный ремонт трансмиссии",
    price: 350000,
  },
  { id: "engine", description: "Капитальный ремонт двигателя", price: 190000 },
  { id: "chassis", description: "Ремонт ходовой части", price: 173000 },
  { id: "cabin", description: "Ремонт кабины", price: 450000 },
  {
    id: "tank",
    description: "Замена электропроводки и гидравлической системы;",
    price: 167000,
  },
];

const priceListRepair = [
  {
    id: "transmission",
    description: "Капитальный ремонт трансмиссии",
    price: 350000,
    details: {
      name: "Капитальный ремонт трансмиссии",
      content: {
        description: [
          {
            type: "para",
            content:
              "В ходе диагностики обращаем внимание на нештатную работу трансмиссии:",
          },

          {
            type: "list",
            content: [
              "Посторонний шум, возникающий в процессе запуска ДТ-75 и его эксплуатации. Обычно его несложно распознать даже на фоне привычного гула.",
              "Протечки СОЖ. Их можно выявить поверхностным осмотром - даже небольшие подтеки показывают на проблемы с уплотнением.",
              "Пробуксовывание ДТ-75 или рывки во время движения.",
              "Не окончательное завершение процессов после управляющего воздействия.",
            ],
          },
        ],

        priceTable: [
          {
            column1: "Устранение течи масла",
            column2: "50 000",
          },
          {
            column1: "Замена масла",
            column2: "25 000",
          },
          {
            column1: "Замена шестерен и подшипников",
            column2: "-",
          },
          {
            column1: "Замена пружин ",
            column2: "-",
          },
          {
            column1: "Замена накладок тормозных лент",
            column2: "-",
          },
          {
            column1: "Замена колодок",
            column2: "-",
          },
          {
            column1: "Регулирование тормозного механизма",
            column2: "-",
          },
          {
            column1: "Замена манжеты маслонасоса",
            column2: "-",
          },
          {
            column1: "Дооборудование",
            column2: "по запросу",
          },
        ],
      },
    },
  },
  {
    id: "engine",
    description: "Капитальный ремонт двигателя",
    price: 190000,
    details: {
      name: "Капитальный ремонт двигателя",
      content: {
        description: [
          {
            type: "para",
            content:
              "В основном на тракторах ДТ-75 используется двигатель А41 в различных модификациях, с  разным дополнительным оборудованием.",
          },
          {
            type: "para",
            content:
              "Существуют определённые нормы межремонтных сроков производительности ДВС, по которым рассчитывают график проведения работ.",
          },
          {
            type: "list",
            content: [
              "показатель пробега",
              "мото-часы",
              "количество расхода топлива.",
            ],
          },
          {
            type: "para",
            content:
              "Процесс починки включает в себя частичный, либо полный разбор мотора, осмотр деталей, их замену при наличии дефекта. В случае необходимости проводим разбор агрегатов и узлов.",
          },
        ],

        priceTable: [
          {
            column1:
              " Замена поршневой группы (гильза, поршень, палец, кольца)",
            column2: "50 000",
          },
          {
            column1: "Замена коренных и шатунных вкладышей",
            column2: "25 000",
          },
          {
            column1: "Ремонт коленчатого вала (шлифовка/полировка)",
            column2: "-",
          },
          {
            column1: "Ремонт ГБЦ, регулировка зазоров клапанов",
            column2: "-",
          },
          {
            column1: "Ремонт топливной аппаратуры",
            column2: "-",
          },
          {
            column1: "Замена всех РТИ, прокладок, подшипников",
            column2: "-",
          },
          {
            column1: "Ремонт пневмокомпрессора",
            column2: "-",
          },
          {
            column1: "Обкатка двигателя на стенде в 3 режимах",
            column2: "-",
          },
          {
            column1: "Покраска",
            column2: "-",
          },
        ],
      },
    },
  },
  {
    id: "chassis",
    description: "Ремонт ходовой части",
    price: 173000,
    details: {
      name: "Капитальный ремонт ходовой части",
      content: {
        description: [
          {
            type: "para",
            content:
              "В результате диагностики определяются неисправности ходовой части трактора ДТ-75, а именно: ",
          },
          {
            type: "list",
            content: [
              "трактор уводит в сторону;",
              "утечка масла",
              "проскальзывание гусениц и тд.",
            ],
          },
          {
            type: "para",
            content:
              "Составляется дефектовая ведомость деталей, требущих замены или ремонта. ",
          },

          {
            type: "para",
            content:
              "Так, при неправильном натяжении гусениц у трактора на его передвижение требуется мощности на 7…9% больше обычного, т.е. меньше мощности остается для полезной работы",
          },
          {
            type: "para",
            content:
              "Ремонт ведущих колес (звездочек) осуществляется путем электродуговой наплавки изношенных зубъев или же в тех случаях, когда это допустимо, отверстия восстанавливают путем установки в них втулок, привариваемых к телу звездочки.",
          },
          {
            type: "para",
            content:
              "Изношенные ободы опорных катков наплавляем до нормального размера.",
          },
        ],

        priceTable: [
          {
            column1: "Замена каретки",
            column2: "50 000",
          },
          {
            column1: "Ремонт рессоры",
            column2: "25 000",
          },
          {
            column1: "Устранение трещин с помощью сварки",
            column2: "-",
          },
          {
            column1: "Замена смазки подшипников катков",
            column2: "-",
          },
          {
            column1: "Замена изношенных уплотнений",
            column2: "-",
          },
          {
            column1: "Замена катка",
            column2: "-",
          },
          {
            column1: "Стандартные гусеницы",
            column2: "-",
          },
          {
            column1: "Болотоходные  гусеницы",
            column2: "-",
          },
          {
            column1: "Резиновые гусеницы",
            column2: "-",
          },
        ],
      },
    },
  },
  {
    id: "cabin",
    description: "Ремонт кабины",
    price: 450000,
    details: {
      name: "Капитальный ремонт кабины",
      content: {
        description: [
          {
            type: "para",
            content:
              "Ремонт старой кабины ДТ-75,  как правило, заключается в избавлении от ржачины, прогнивших элементах, с последующей покраской, заменой кресла механизатора, рычагов стекол и уплотнений.",
          },

          {
            type: "para",
            content:
              "Мы рекомендуем устанавливать новую кабину, взамен морального устаревшего “почтальона”.",
          },

          {
            type: "para",
            content:
              "Если трактор будет эксплуатироваться в экстремальных условиях, то доустановим отопитель или кондиционер/вентилятор.",
          },
          {
            type: "para",
            content:
              "Мы закупаем запчасти и узлы для кабины у производителя, поэтому цена минимальны, либо можете приобрести самостоятельно.",
          },
        ],

        priceTable: [
          {
            column1: "Восстановление каркаса кабины",
            column2: "50 000",
          },
          {
            column1: "Покраска",
            column2: "25 000",
          },
          {
            column1: "Замена сиденья  механизатора+ малое сиденье",
            column2: "-",
          },
          {
            column1: "Замена стекол, уплотнителей.",
            column2: "-",
          },
          {
            column1: "Замена рычагов",
            column2: "-",
          },
          {
            column1: "Замена освещения",
            column2: "-",
          },
          {
            column1: "Шумо и виброизоляция",
            column2: "-",
          },
          {
            column1: "Ремонт приборной панели",
            column2: "-",
          },
          {
            column1: "Дооборудование",
            column2: "по запросу",
          },
        ],
      },
    },
  },
  {
    id: "tank",
    description: "Замена электропроводки и гидравлической системы;",
    price: 167000,
    details: {
      name: "Капитальный ремонт электрооборудования и гидравлики",
      content: {
        description: [
          {
            type: "para",
            content:
              "Ремонт гидравлической системы включает в себя оценку работоспособностиузлов и механизмов: масляных насосов, гидроусилителя, маслопроводов, силового цилиндра и тд.",
          },

          {
            type: "para",
            content:
              "Герметичность гидростемы проверяется после устранения утечек рабочей жидкости и исправности присоединительной арматуры.",
          },

          {
            type: "para",
            content:
              "Основными неисправностями гидравлической системы являются: низкое или неустойчивое давление в системе, шумы при работе насосов, отказ работы системы клапанов.",
          },
        ],

        priceTable: [
          {
            column1: "Оценка работоспособности системы",
            column2: "50 000",
          },
          {
            column1: "Замена масла",
            column2: "25 000",
          },
          {
            column1: "Замена масляного насоса",
            column2: "-",
          },
          {
            column1: "Замена уплотнений, манжет",
            column2: "-",
          },
          {
            column1: "Устранение течей рабочих жидкостей",
            column2: "-",
          },
          {
            column1: "Замена проводов",
            column2: "-",
          },
          {
            column1: "Замена электроприборов ",
            column2: "-",
          },
          {
            column1: "Замена аккумуляторной батареи",
            column2: "-",
          },
          {
            column1: "Дооборудование",
            column2: "по запросу",
          },
        ],
      },
    },
  },
  // {
  //   id: "blade",
  //   description: "Установка доп. оборудования",
  //   price: 0,
  // },
];

export {
  galleryData,
  sertificates,
  partners,
  experts,
  servicesImages,
  organizationInfo,
  whatWeDo,
  ourServices,
  equipmentData,
  interactivePicRepair,
  priceListRepair,
  repairCalculator,
};
