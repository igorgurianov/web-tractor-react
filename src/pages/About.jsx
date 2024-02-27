import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import about from "../assets/images/about/about-img.jpg";
import Numbers from "../components/Numbers";
import Licenses from "../components/Licenses";
import Breadcrumbs from "../UI/Breadcrumbs";
import { Helmet } from "react-helmet";

const AboutPage = () => {
  return (
    <div>
      <Helmet>
        <title>ВЗГМ - О компании</title>
        <meta
          name="description"
          content="Более 25 лет опыта в сельском хозяйстве, ремонте и модификации техники. Мы создали ВЗГМ-90 и ВЗГМ-150 – идеальное сочетание традиций и инноваций. Наши тракторы покорили множество регионов России. Гарантия, сервис и надежное обслуживание. "
        />
        <link rel="canonical" href="https://vzgm.ru/about" />
      </Helmet>
      <Section styles="md:mt-6">
        <Breadcrumbs />
        <SectionHeader
          headerText="Как все начиналось"
          subheaderText="История от основателей"
          styles="mt-6 lg:mt-8"
        />
        <div className="md:grid md:grid-cols-2 md:gap-x-5">
          <img
            src={about}
            alt="Ремонт тракторов, продажа деталей для сельхоз техники"
            className="mx-auto md:h-full object-cover"
          />
          <div className="mt-4 md:mt-0">
            <p className="text-left lg:text-xl">
              Мой отец занимался сельским хозяйством, я ему помогал, у нас были
              свои ДТ-75, К 700, сеялки, культиваторы и тд. Эксплуатация техники
              неизбежно приводила к ее поломкам, необходимости ремонта -
              приходилось быстро обучаться и приводить в рабочее состояние все ,
              что использовалось.
            </p>
            <p className="text-left lg:text-xl mt-3">
              С подобной техникой я знаком уже более 25 лет и, до настоящего
              момента, сам участвую в ремонте и могу устранить любую
              неисправность.
            </p>
            <p className="text-left lg:text-xl mt-3">
              Весь свой практический опыт работы с тракторной техникой я смог
              реализовать, основав собственный бизнес. совместно с инженерами мы
              модифицировали и улучшили старые, добрые ДТ-75 и ХТЗ-150, так
              родились ВЗГМ – 90 и ВЗГМ – 150. Модели оказались более чем
              удачны, совмещая достоинства знакомой всем техники и новых
              конструкторских идей.
            </p>
            <p className="text-left lg:text-xl mt-3">
              Наша новая техника уже бегает почти по всем регионам России.
              Гарантия, сервис, обслуживание и безукоризненное качество - все
              это вы найдете в моей компании!
            </p>
            <p className="text-right lg:text-xl mt-3">
              С уважением, <br /> Виталий Щербаков
            </p>
          </div>

          <div className="text-left mt-6">
            <h3>Наша миссия</h3>
            <p className="mt-2 lg:text-xl">
              Наша миссия состоит в том, чтобы обеспечивать высочайший уровень
              обслуживания клиентов; развивать нашу команду и стремиться к
              постоянному совершенствованию.
            </p>
          </div>
          <div className="text-left mt-6">
            <h3>Наше видение</h3>
            <p className="mt-2 lg:text-xl">
              Стать выдающимся лидером в области производства и ремонта техники.
              Мы создаём воодушевление, реализуя новаторские идеи, решая
              проблемы и превосходя ожидания наших клиентов.
            </p>
          </div>
        </div>
      </Section>
      <Numbers />

      <div className="bg-color_light_gray">
        <Licenses />
      </div>
    </div>
  );
};

export default AboutPage;
