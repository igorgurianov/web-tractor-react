import React from "react";
import imageTechnical1 from "../assets/images/services/ImageTechnical1.jpg";
import imageTechnical2 from "../assets/images/services/ImageTechnical2.jpg";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

function HowWeDoRepair() {
  return (
    <div>
      <Section styles="md:mb-14 md:mt-6 lg:mb-20">
        <SectionHeader
          headerText="Как мы делаем ремонт"
          styles="mt-6 lg:mt-8"
          subheaderText="мы являемся сертифицированным производителем гусеничных тракторов"
        />

        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row gap-5 md:gap-10">
            <img
              src={imageTechnical1}
              className="md:w-1/3 object-cover md:grayscale hover:cursor-pointer hover:grayscale-0 hover:duration-200 rounded-sm"
              alt="Капитальный ремонт трактора ДТ-75"
            />
            <div>
              <p>
                Периодичность капитального ремонта трактора ДТ составляет
                4500...6500 мото-ч., взависимости от условий эксплуатации.
              </p>
              <p>
                В соответствии с требованием к капитальному ремонту
                восстанавливается работоспособность и ресурс, обеспечивающий его
                пробег не менее 80% от нормы пробега для нового трактора и его
                агрегатов.
              </p>
              <p>
                В ходе капитального ремонта трактора ДТ-75 мы разбираем его до
                базового узла – рамы.
              </p>
              <p>
                Все детали промываются и проходят дефектацию. Детали не
                прошедшие дефектацию, заменяются новыми. После разборки и
                анализа деталей и узлов, машину собирают заново.
              </p>
              <p>
                Проводится регулировка узлов и механизмов, с последующей их
                обкаткой. После обкатки и испытания трактора, его красят он
                готов к дальнейшей эксплуатации.
              </p>
            </div>
          </div>
          <div className="flex md:flex-row-reverse flex-col gap-5 md:gap-10 mt-5">
            <img
              src={imageTechnical2}
              className="md:w-1/3 object-cover md:grayscale hover:cursor-pointer hover:grayscale-0 hover:duration-200 rounded-sm"
              alt="Капитальный ремонт трактора ДТ-75"
            />
            <div>
              <p>
                ООО “ВЗГМ” является сертифицированным производителем гусеничных
                тракторов.
              </p>
              <p>
                Мы преобразовали и интегрировали наш многолетний опыт в услуги
                по проведению капитального ремонта.
              </p>
              <p>
                Мы проводим капремонт всех тракторов семейства ДТ-75, ВгТЗ, ВЗГМ
                и их модификаций. Ремонтируем также и другие колесные и
                гусеничные тракторы, которые производились и производятся на
                территории России и Белоруссии.
              </p>
              <p>Гарантия на капитальный ремонт 1 год.</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default HowWeDoRepair;
