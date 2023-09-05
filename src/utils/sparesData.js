import cabin from "../assets/images/spares/Cabin.png";
import engineA41 from "../assets/images/spares/Engine-A-41.png";
import engineYMZ238 from "../assets/images/spares/Engine-YMZ-238.png";
import otval from "../assets/images/spares/Otval.png";
import transmision from "../assets/images/spares/Transmission-DT-75.png";
import gearbox from "../assets/images/spares/gearbox-T-150K.png";
import reverseReductor from "../assets/images/spares/reversReductor.png";
import engineIcon from "../assets/icons/engineIcon.svg";
import powerIcon from "../assets/icons/powerIcon.svg";
import speedIcon from "../assets/icons/speedIcon.svg";
import tankIcon from "../assets/icons/tankIcon.svg";

import otval1 from "../assets/images/spares/Pryamoy-otval-10.webp";
import otval2 from "../assets/images/spares/Pryamoy-otval-20.webp";
import otvalPovorot from "../assets/images/spares/Povorotny-otval.webp";
import otvalUniversal from "../assets/images/spares/Universal-otval.webp";

const sparesData = [
  {
    name: "Дизельный двигатель А-41",
    url: "engine-A41",
    category: "engine",
    price: "540 000",
    img: engineA41,
    alt: "Дизельный двигатель А-41 для трактора",
    position: "regular",
    keySpecs: [
      {
        name: "Engine",
        tagImg: engineIcon,
        description: "А-41 (Д-440-22)",
      },
      {
        name: "Power",
        tagImg: powerIcon,
        description: "90/95/98 л.с.",
      },
      {
        name: "Speed",
        tagImg: speedIcon,
        description: "5,3…11,2 км/ч",
      },
      {
        name: "Tank",
        tagImg: tankIcon,
        description: "175 г/л.с.ч.",
      },
    ],
    shortDescription:
      "Двигатели А-41 — надежность и безотказность, проверенная временем. Отличаются простотой конструкции и удобным размещением на машине. Внедрение немецких технологий позволило создать модели А-41с повышенным ресурсом мотора.",
    fullDescription: [
      {
        type: "paragraph",
        content:
          "Четырехцилиндровые дизельные двигатели А-41 разработаны для установки на:",
      },
      {
        type: "list",
        content: [],
      },
      {
        type: "paragraph",
        content:
          "Двигатели предназначены для работы в условиях высоких температур. Предустановленная система охлаждения двигателя успешно справляется с защитой от перегрева, порчи масла и быстрого износа поверхностей рабочих деталей.",
      },
      {
        type: "paragraph",
        content:
          "Во всех моделях реализована раздельные головки цилиндров взамен классическим, что обеспечивает:",
      },
      {
        type: "list",
        content: [
          "Максимальную надежность газового стыка",
          "Уменьшение расхода смазочного материала на угар",
          "Снижение овализации гильзы",
        ],
      },
      {
        type: "paragraph",
        content:
          "Рядное вертикальное расположение цилиндров обеспечивает удобство обслуживания и более рациональное расположение двигателя в тракторе.",
      },
      {
        type: "paragraph",
        content: "По требованию заказчика возможны модификации оборудования:",
      },
      {
        type: "list",
        content: [
          "Генератор 800..3000Вт",
          "Рабочее напряжение 12 или 24 В",
          "Глушитель шума",
          "Муфта сцепления",
          "Предпусковой подогрев воздуха",
        ],
      },
    ],

    characteristics: [
      { column1: "Тип двигателя", column2: "четырехтактный дизель" },
      { column1: "Число цилиндров", column2: 4 },
      { column1: "Порядок работы цилиндров", column2: "1-3-4-2" },
      { column1: "Степень сжатия", column2: "16,5" },
      { column1: "Ресурс дизеля А-41", column2: "не менее 9 тыс. моточасов" },
      {
        column1: "Полезная номинальная мощность",
        column2:
          "номинальная: 69 кВт (94 л.с.); эксплуатационная – 66 кВт (90 л.с.)",
      },

      {
        column1: "Максимальный крутящий момент",
        column2: "от 433 до 482 Н·м, нв зависимости от модификации",
      },
    ],
    advantages: [
      "1. Поставка товара напрямую от поставщика",
      "2. Гарантийное и постгарантийное обслуживание",
      "3. Любой удобный для клиента способ расчета",
      "4. Долгосрочные договора на капремонт и обслуживание",
    ],
    scope: [
      "Дорожно-строительную спецтехнику",
      "Тракторы типа ДТ-75/ВГЗМ 90 сельскохозяйственного, промышленного назначения",
      "Насосные станции, компрессоры, экскаваторы",
      "Стационарные и передвижные электростанции",
    ],
  },
  {
    name: "Дизельный двигатель ЯМЗ-238",
    url: "engine-YMZ-238",
    price: "580 000",
    category: "engine",
    img: engineYMZ238,
    alt: "Дизельный двигатель ЯМЗ-238 для трактора",
    position: "regular",
    keySpecs: [
      {
        name: "Engine",
        tagImg: engineIcon,
        description: "А-41 (Д-440-22)",
      },
      {
        name: "Power",
        tagImg: powerIcon,
        description: "90/95/98 л.с.",
      },
      {
        name: "Speed",
        tagImg: speedIcon,
        description: "5,3…11,2 км/ч",
      },
      {
        name: "Tank",
        tagImg: tankIcon,
        description: "175 г/л.с.ч.",
      },
    ],
    shortDescription:
      "Двигатель ЯМЗ-238 турбо —отличает надежность, значительный ресурс, высокая степень унификации базовых моделей и модификаций. Отличаются простотой конструкции и удобным размещением на машине.",
    fullDescription: [
      {
        type: "paragraph",
        content:
          "Мало какой из дизельных моторов может похвастать таким солидным «послужным списком», как ЯМЗ-238. Этот двигатель стал «сердцем» многих тысяч знакомых всем и каждому грузовых автомобилей «МАЗ», «КрАЗ», «Урал»; тракторов «Кировец» и «ЧТЗ»; комбайнов «Дон» и «Полесье». А также большого количества всевозможной узкоспециализированной техники, катеров, дизельных электростанций. ЯМЗ-238 чрезвычайно надёжен и неприхотлив в эксплуатации, что и обеспечило ему «карьеру долгожителя»  мотор продолжает сходить с конвейера Ярославского моторного завода и сегодня. Несмотря на то, что в ассортименте завода появилось немало более современных его «преемников»",
      },
      {
        type: "paragraph",
        content:
          "Линейка дизельных двигателей ЯМЗ-238 с турбонаддувом экостандарта Евро-0, которые производятся в г. Ярославль по своей конструкции является форсированной версией дизелей семейства ЯМЗ-238М2. Но, кроме наличия турбины, в процессе модернизации существенные конструктивные изменения претерпели блок цилиндров, цилиндро-поршневая группа, ТНВД, коленвал и ряд других деталей.",
      },
      {
        type: "paragraph",
        content:
          "Двигатели семейства ЯМЗ-238 турбо до сих пор очень востребованны, несмотря на свою солидную историю. Во многом благодаря тому, что данные силовые агрегаты выносливы и неприхотливы, способны безотказно работать в тяжелых температурных условиях от -50 до +50 градусов, при высокой влажности, в разреженной атмосфере высокогорья и пыльных пустынях.",
      },
      {
        type: "paragraph",
        content:
          "Двигатели имеют высокую ремонтопригодность, в полном объеме обеспечены запасными частями во всех регионах эксплуатации.",
      },
    ],

    characteristics: [
      { column1: "Тип двигателя", column2: "четырехтактный дизель" },
      { column1: "Число цилиндров", column2: 8 },
      { column1: "Порядок работы цилиндров", column2: "1–5–4–2–6–3–7–8" },
      { column1: "Степень сжатия", column2: "16,5" },
      {
        column1: "Ресурс дизеля А-41",
        column2: "не менее 8 тыс. моточасов или 800 + тыс. км.",
      },
      {
        column1: "Полезная номинальная мощность",
        column2: "240 л.с. ",
      },
      {
        column1: "Максимальный крутящий момент, Н*м (кг*м ",
        column2: "при об./мин. 883 (90) / 1450 ",
      },
    ],

    advantages: [
      "Поставка товара напрямую от поставщика",
      "Гарантийное и постгарантийное обслуживание",
      "Любой удобный для клиента способ расчета",
      "Долгосрочные договора на капремонт и обслуживание",
    ],
    scope: [
      "V-образные дизельные двигатели ЯМЗ-238 турбо применяются:",
      "В технике от автомобилей до автобусов",
      "В тракторах, бульдозерах, комбайнах, экскаваторах",
      "В речных судах",
      "В генераторных станциях",
    ],
  },
  {
    name: "Кабина",
    url: "cabin",
    category: "cabin",
    price: "230 000",
    img: cabin,
    alt: "Кабина ДТ-75 для трактора",
    position: "regular",
    keySpecs: [
      {
        name: "Engine",
        tagImg: engineIcon,
        description: "А-41 (Д-440-22)",
      },
      {
        name: "Power",
        tagImg: powerIcon,
        description: "90/95/98 л.с.",
      },
      {
        name: "Speed",
        tagImg: speedIcon,
        description: "5,3…11,2 км/ч",
      },
      {
        name: "Tank",
        tagImg: tankIcon,
        description: "175 г/л.с.ч.",
      },
    ],
    shortDescription:
      "Кабина ДТ-75 изготовлена из стального профиля и в ней могут свободно разместиться два человека. Крыша кабины изготовлена из стеклопластика, в крыше установлен люк, который при необходимости может служить аварийным выходом.",
    fullDescription: [
      {
        type: "paragraph",
        content:
          "Остекление кабины выполнено из стеклопакета. Кабина закрытого типа, полностью герметизирована. ",
      },
      {
        type: "paragraph",
        content:
          "На пол устанавливается дополнительная шумоизоляция. Сиденье оператора оборудовано  ремнем безопасности. Комфортную температуру в кабине ДТ-75 зимой поддерживает встроенный отопитель, который подает теплый воздух от водяного радиатора по воздухопроводу. Ну а в летний зной оператор может включить для охлаждения воздуха вентилятор. Таким образом, комфортные условия работы обеспечиваются вне зависимости от погоды и температуры за пределами кабины ДТ-75.",
      },
      {
        type: "paragraph",
        content:
          "За чистоту передних и задних стекол отвечают специальные дворники, причем на лобовом стекле им помогает еще и омыватель. Это позволяет легко удалять снег и грязь, поддерживая отличный обзор даже в непогоду.",
      },
      {
        type: "paragraph",
        content:
          "В кабине в зоне прямой доступности все рычаги, педали и переключатели, в том числе рычаг вала отбора мощности и гидрораспределителя, кнопка электросигнала, переключатель «массы» аккумуляторной батареи, а также сам аккумулятор, бак с водой, набор инструментов и аптечка. Кабина ДТ-75 смещена от продольной оси трактора вправо, что значительно улучшает обзор для оператора.",
      },
    ],

    characteristics: [
      { column1: "Петля двери нижняя", column2: 2 },
      { column1: "Петля двери верхняя", column2: 2 },
      { column1: "Петля боковины", column2: 4 },
      { column1: "Ось петель", column2: 4 },
      { column1: "Желобок неподвижного стекла двери на стойке", column2: 2 },
      { column1: "Уплотнитель неподвижного стекла двери", column2: 2 },
      { column1: "Желобок опускного стекла двери верхний", column2: 2 },
      { column1: "Желобок опускного стекла двери боковой", column2: 2 },
      { column1: "Уплотнитель опускного стекла двери наружный", column2: 2 },
      { column1: "Амортизатор упора опускного окна", column2: 4 },
      { column1: "Ручка двери", column2: 4 },
      { column1: "Пружина защелки", column2: 2 },
      { column1: "Розетка", column2: 2 },
      { column1: "Стекло переднее левое", column2: null },
      { column1: "Таблица смазки трактора ДТ-75М", column2: 1 },
      { column1: "Шнур распорный заднего окна", column2: 1 },
      { column1: "Стекло заднего окна", column2: 1 },
      { column1: "Стекло переднее правое", column2: 1 },
      { column1: "Заглушка", column2: 3 },
      { column1: "Стекло двери неподвижное", column2: 2 },
      { column1: "Пружина", column2: 1 },
    ],
    advantages: [
      "У нас можно кабину ДТ-75 купить первой комплектации в сборе, полностью оборудованной всеми приборами, остеклением, сиденьями и электропроводкой. На оригинальную кабину ДТ-75 цена значительно ниже, так как поставки идут напрямую от завода-производителя.",
    ],
    scope: ["Для трактора  ВЗГМ – 90", "Для трактора  ДТ-75"],
  },
  {
    name: "Коробка передач Т-150К",
    url: "gear-T-150K",
    price: "500 000",
    category: "spare",
    img: gearbox,
    position: "span-2",
    alt: "Коробка передач Т-150К для трактора",
    keySpecs: [
      {
        name: "Engine",
        tagImg: engineIcon,
        description: "А-41 (Д-440-22)",
      },
      {
        name: "Power",
        tagImg: powerIcon,
        description: "90/95/98 л.с.",
      },
      {
        name: "Speed",
        tagImg: speedIcon,
        description: "5,3…11,2 км/ч",
      },
      {
        name: "Tank",
        tagImg: tankIcon,
        description: "175 г/л.с.ч.",
      },
    ],
    shortDescription:
      "Гидромеханическая, четырехскоростная с шестернями постоянного зацепления а также персональными гидроподжимными муфтами",
    fullDescription: [
      {
        type: "paragraph",
        content:
          "Вкупе с двухскоростным редуктором раздаточной КП обеспечивает восемь скоростей движения трактора вперед и четыре назад.",
      },
      {
        type: "paragraph",
        content:
          "Дополнительные восемь замедленных скоростей обеспечиваются за счет ходоуменьшителя.",
      },
      {
        type: "paragraph",
        content:
          "Данные скорости необходимы для агрегирования с безмоторными комбайнами и прочими сельскохозяйственными машинами.",
      },
    ],
    characteristics: [
      { column1: "Масло «лето»", column2: " Дизельное масло М10Г2к " },
      { column1: "Масло «зима", column2: " Моторное масло М8Г2к " },
    ],
    advantages: [
      "1. Гарантийное и постгарантийное обслуживание",
      "2. Любой удобный для клиента способ расчета ",
    ],
    scope: [
      "Трактора ВЗГМ-150, серий и модификаций Т-150, Т-155, Т-156, Т157 ",
    ],
  },
  {
    name: "Реверс редуктор",
    url: "revers",
    price: "75 000",
    category: "spare",
    img: reverseReductor,
    alt: "Реверс редуктор для трактора",
    position: "regular",
    keySpecs: [
      {
        name: "Engine",
        tagImg: engineIcon,
        description: "А-41 (Д-440-22)",
      },
      {
        name: "Power",
        tagImg: powerIcon,
        description: "90/95/98 л.с.",
      },
      {
        name: "Speed",
        tagImg: speedIcon,
        description: "5,3…11,2 км/ч",
      },
      {
        name: "Tank",
        tagImg: tankIcon,
        description: "175 г/л.с.ч.",
      },
    ],
    shortDescription:
      "Устройство, способное изменять амплитуду скоростей коробки передач ДТ-75/ВЗГМ - 90 и на другой технике.",
    fullDescription: [
      {
        type: "paragraph",
        content:
          "Этот механизм позволяет настраивать дополнительные передачи переднего и заднего хода. Это увеличивает производительность машины и упрощает управление ею. Он делает возможным перемещение трактора не только на главных, но и на дополнительных скоростях. Например, при передвижении вперед, возможны пониженные реверсивные скорости. При перемещении задним ходом – можно переключаться на реверсивные повышенные скорости.",
      },
      {
        type: "paragraph",
        content:
          "В реверсивном редукторе три передачи для перемещения вперед, назад и для прямого перемещения. Эффективность их работы соответственно снижается от первой скорости до третьей. Это дает трактору возможность при выполнении различных работ применять необходимые технологические скорости: семь пониженных – при движении вперед, и семь повышенных – при движении задним ходом.",
      },
    ],
    characteristics: [
      { column1: "Масло «лето»", column2: " Дизельное масло М10Г2к " },
      { column1: "Масло «зима", column2: " Моторное масло М8Г2к " },
      { column1: "Передняя передача с передаточным числом ", column2: "1.67" },
      { column1: "Задняя передача с передаточным числом ", column2: "1.35" },
    ],
    advantages: [
      "1. Гарантийное и постгарантийное обслуживание",
      "2. Любой удобный для клиента способ расчета ",
    ],
    scope: ["Трактора ВЗГМ-90, модификаций ДТ-75"],
  },
  {
    name: "Трансмиссия на ДТ 75",
    url: "transmision",
    price: "230 000",
    category: "spare",
    img: transmision,
    alt: "Трансмиссия ДТ 75 для трактора",
    position: "regular",
    keySpecs: [
      {
        name: "Engine",
        tagImg: engineIcon,
        description: "А-41 (Д-440-22)",
      },
      {
        name: "Power",
        tagImg: powerIcon,
        description: "90/95/98 л.с.",
      },
      {
        name: "Speed",
        tagImg: speedIcon,
        description: "5,3…11,2 км/ч",
      },
      {
        name: "Tank",
        tagImg: tankIcon,
        description: "175 г/л.с.ч.",
      },
    ],
    shortDescription:
      "Трансмиссия обепередачу мощности от двигателя к ведущим колесам, имеет гидромеханическое исполнение и комплектуется гидротрансформатором.",
    fullDescription: [
      {
        type: "paragraph",
        content:
          "Трансмиссия ДТ 75 состоит из коробки переключения передач, заднего моста, планетарного механизма. Главная передача расположена в редукторе заднего моста.",
      },
      {
        type: "paragraph",
        content:
          "Для расширения тяговых возможностей трактора дополнительно можно установить реверсивный редуктор или ходоуменьшитель.",
      },
    ],
    characteristics: [
      { column1: "Скорость максимальная ", column2: "до 9.3 км/ч" },
      { column1: "Скорость минимальная ", column2: "до 0.34 км/ч" },
    ],
    advantages: [
      "1. Гарантийное и постгарантийное обслуживание",
      "2. Любой удобный для клиента способ расчета ",
    ],
    scope: ["На тракторах серий ВЗГМ-90, модификаций ДТ 75"],
  },
  {
    name: "Прямой отвал БНДТ-10",
    url: "otval-direct",
    price: "245 000",
    category: "blade",
    img: otval1,
    alt: "Отвал прямой для трактора",
    position: "regular",
    keySpecs: [
      {
        name: "Engine",
        tagImg: engineIcon,
        description: "А-41 (Д-440-22)",
      },
      {
        name: "Power",
        tagImg: powerIcon,
        description: "90/95/98 л.с.",
      },
      {
        name: "Speed",
        tagImg: speedIcon,
        description: "5,3…11,2 км/ч",
      },
      {
        name: "Tank",
        tagImg: tankIcon,
        description: "175 г/л.с.ч.",
      },
    ],
    shortDescription: "БНДТ-10 / неповоротный бульдозерный отвал",
    fullDescription: [
      {
        type: "paragraph",
        content:
          "БНДТ-10 применяется в дорожно-строительных и других промышленных сферах, в работах по передвиганию и смещению различных видов сыпучего грунта, выравниванию поверхности при планировках, очистке от снега разных территорий, засыпке ям и котлованов и т.д.",
      },
      {
        type: "paragraph",
        content:
          "Он устанавливается на трактор, с гусеничным шасси, спереди. Управление отвалом осуществляется двумя гидроцилиндрами, приводящимися в работу из кабины трактора.",
      },
    ],
    characteristics: [
      { column1: "Ширина, мм", column2: "2520" },
      { column1: "Высота, мм", column2: "915" },
      { column1: "Заглубление, мм", column2: "300" },
      { column1: "Высота подъема отвала, мм", column2: "650" },
      { column1: "Угол въезда не менее, °", column2: "20" },
      { column1: "Масса конструктивная, кг", column2: "829" },
      { column1: "Ресурс до первого кап ремонта, м/ч", column2: "3200" },
    ],
    advantages: [
      "Гарантийное и постгарантийное обслуживание",
      "Любой удобный для клиента способ расчета ",
    ],
    scope: [" На тракторах серий ВЗГМ-90, модификаций ДТ 75"],
  },
  {
    name: "Прямой отвал БНДТ-20",
    url: "otval-BNDT-20",
    price: "245 000",
    category: "blade",
    img: otval2,
    alt: "Отвал прямой для трактора",
    position: "regular",
    keySpecs: [
      {
        name: "Engine",
        tagImg: engineIcon,
        description: "А-41 (Д-440-22)",
      },
      {
        name: "Power",
        tagImg: powerIcon,
        description: "90/95/98 л.с.",
      },
      {
        name: "Speed",
        tagImg: speedIcon,
        description: "5,3…11,2 км/ч",
      },
      {
        name: "Tank",
        tagImg: tankIcon,
        description: "175 г/л.с.ч.",
      },
    ],
    shortDescription: "БНДТ-10 / неповоротный бульдозерный отвал",
    fullDescription: [
      {
        type: "paragraph",
        content:
          "БНДТ-10 применяется в дорожно-строительных и других промышленных сферах, в работах по передвиганию и смещению различных видов сыпучего грунта, выравниванию поверхности при планировках, очистке от снега разных территорий, засыпке ям и котлованов и т.д.",
      },
      {
        type: "paragraph",
        content:
          "Он устанавливается на трактор, с гусеничным шасси, спереди. Управление отвалом осуществляется двумя гидроцилиндрами, приводящимися в работу из кабины трактора.",
      },
    ],
    characteristics: [
      { column1: "Ширина, мм", column2: "2520" },
      { column1: "Высота, мм", column2: "915" },
      { column1: "Заглубление, мм", column2: "300" },
      { column1: "Высота подъема отвала, мм", column2: "650" },
      { column1: "Угол въезда не менее, °", column2: "20" },
      { column1: "Масса конструктивная, кг", column2: "829" },
      { column1: "Ресурс до первого кап ремонта, м/ч", column2: "3200" },
    ],
    advantages: [
      "Гарантийное и постгарантийное обслуживание",
      "Любой удобный для клиента способ расчета ",
    ],
    scope: [" На тракторах серий ВЗГМ-90, модификаций ДТ 75"],
  },
  {
    name: "Поворотный отвал БПДТ",
    url: "otval-povorotniy-BPDT",
    price: "245 000",
    category: "blade",
    img: otvalPovorot,
    alt: "Отвал прямой для трактора",
    position: "regular",
    keySpecs: [
      {
        name: "Engine",
        tagImg: engineIcon,
        description: "А-41 (Д-440-22)",
      },
      {
        name: "Power",
        tagImg: powerIcon,
        description: "90/95/98 л.с.",
      },
      {
        name: "Speed",
        tagImg: speedIcon,
        description: "5,3…11,2 км/ч",
      },
      {
        name: "Tank",
        tagImg: tankIcon,
        description: "175 г/л.с.ч.",
      },
    ],
    shortDescription: "БНДТ-10 / неповоротный бульдозерный отвал",
    fullDescription: [
      {
        type: "paragraph",
        content:
          "БНДТ-10 применяется в дорожно-строительных и других промышленных сферах, в работах по передвиганию и смещению различных видов сыпучего грунта, выравниванию поверхности при планировках, очистке от снега разных территорий, засыпке ям и котлованов и т.д.",
      },
      {
        type: "paragraph",
        content:
          "Он устанавливается на трактор, с гусеничным шасси, спереди. Управление отвалом осуществляется двумя гидроцилиндрами, приводящимися в работу из кабины трактора.",
      },
    ],
    characteristics: [
      { column1: "Ширина, мм", column2: "2520" },
      { column1: "Высота, мм", column2: "915" },
      { column1: "Заглубление, мм", column2: "300" },
      { column1: "Высота подъема отвала, мм", column2: "650" },
      { column1: "Угол въезда не менее, °", column2: "20" },
      { column1: "Масса конструктивная, кг", column2: "829" },
      { column1: "Ресурс до первого кап ремонта, м/ч", column2: "3200" },
    ],
    advantages: [
      "Гарантийное и постгарантийное обслуживание",
      "Любой удобный для клиента способ расчета ",
    ],
    scope: [" На тракторах серий ВЗГМ-90, модификаций ДТ 75"],
  },
  {
    name: "Универсальный отвал БУДТ",
    url: "otval-universla-BUDT",
    price: "245 000",
    category: "blade",
    img: otvalUniversal,
    alt: "Отвал прямой для трактора",
    position: "regular",
    keySpecs: [
      {
        name: "Engine",
        tagImg: engineIcon,
        description: "А-41 (Д-440-22)",
      },
      {
        name: "Power",
        tagImg: powerIcon,
        description: "90/95/98 л.с.",
      },
      {
        name: "Speed",
        tagImg: speedIcon,
        description: "5,3…11,2 км/ч",
      },
      {
        name: "Tank",
        tagImg: tankIcon,
        description: "175 г/л.с.ч.",
      },
    ],
    shortDescription: "БНДТ-10 / неповоротный бульдозерный отвал",
    fullDescription: [
      {
        type: "paragraph",
        content:
          "БНДТ-10 применяется в дорожно-строительных и других промышленных сферах, в работах по передвиганию и смещению различных видов сыпучего грунта, выравниванию поверхности при планировках, очистке от снега разных территорий, засыпке ям и котлованов и т.д.",
      },
      {
        type: "paragraph",
        content:
          "Он устанавливается на трактор, с гусеничным шасси, спереди. Управление отвалом осуществляется двумя гидроцилиндрами, приводящимися в работу из кабины трактора.",
      },
    ],
    characteristics: [
      { column1: "Ширина, мм", column2: "2520" },
      { column1: "Высота, мм", column2: "915" },
      { column1: "Заглубление, мм", column2: "300" },
      { column1: "Высота подъема отвала, мм", column2: "650" },
      { column1: "Угол въезда не менее, °", column2: "20" },
      { column1: "Масса конструктивная, кг", column2: "829" },
      { column1: "Ресурс до первого кап ремонта, м/ч", column2: "3200" },
    ],
    advantages: [
      "Гарантийное и постгарантийное обслуживание",
      "Любой удобный для клиента способ расчета ",
    ],
    scope: [" На тракторах серий ВЗГМ-90, модификаций ДТ 75"],
  },
];

export default sparesData;
