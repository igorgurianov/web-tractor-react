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
};
