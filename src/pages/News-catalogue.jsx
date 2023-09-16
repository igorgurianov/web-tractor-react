import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { newsData } from "../utils/newsData";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import Breadcrumbs from "../UI/Breadcrumbs";
import { Helmet } from "react-helmet";

const NewsCatalogue = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    setNews(newsData);
  }, []);

  return (
    <div>
      <Helmet>
        <title>ВЗГМ - Новости</title>
        <meta
          name="description"
          content="Будьте в курсе последних событий и новостей в мире сельскохозяйственной техники. На странице новостей вы найдете информацию о новых моделях тракторов, улучшениях в обслуживании, успешных проектах и многое другое. Следите за нашими обновлениями, чтобы быть впереди в развитии аграрной техники."
        />
        <link rel="canonical" href="https://vzgm.ru/news" />
      </Helmet>
      <Section>
        <Breadcrumbs />
        <SectionHeader headerText="Новости" styles="mt-6 lg:mt-8" />
        <ul className="flex flex-col gap-y-6 md:gap-y-14 lg:gap-y-20">
          {news.map((item) => {
            return (
              <Link key={item.id} to={`/news/${item.url}`}>
                <li className="text-left md:grid md:grid-cols-2 md:gap-6 hover:bg-color_light_gray hover:shadow-xl duration-300">
                  <img src={item.img} alt={item.alt} className="w-full" />
                  <div>
                    <h4 className="my-4">{item.title}</h4>

                    <time
                      className=" text-color_accent_red font-bold"
                      dateTime={item.date.iso}
                    >
                      {item.date.human}
                    </time>
                    <p className="mt-1">{item.previewLG}</p>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      </Section>
    </div>
  );
};

export default NewsCatalogue;
