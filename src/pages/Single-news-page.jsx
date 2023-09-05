import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { newsData } from "../utils/newsData";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import Breadcrumbs from "../UI/Breadcrumbs";
import { Helmet } from "react-helmet";

const SingleNewsPage = () => {
  const { id } = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    const activeItem = newsData.find((post) => post.url === id);
    setPost(activeItem);
  }, [id]);

  return (
    <Section>
      {post && (
        <Helmet>
          <title>{`ВЗГМ - ${post.title}`}</title>
          <meta name="description" content={post.previewLG} />
        </Helmet>
      )}
      <Breadcrumbs />
      <SectionHeader headerText="Новости" styles="mt-6 lg:mt-8" />
      {post && (
        <div>
          <div className="text-left">
            <h3 className="">{post.title}</h3>
            <time
              className=" text-color_accent_red font-bold"
              dateTime={post.date.iso}
            >
              {post.date.human}
            </time>
          </div>

          <div className="mt-6 text-left md:columns-2 md:gap-8">
            <img
              className="my-3 mx-auto md:my-0 md:order-4"
              src={post.img}
              alt={post.alt}
            />
            <div className="">
              {post.body.map((item, index) => {
                if (item.type && item.type === "paragraph") {
                  return (
                    <p key={index} className="mt-2 first-of-type:md:">
                      {item.content}
                    </p>
                  );
                } else if (item.type === "subheader") {
                  return (
                    <h4 className="mt-4" key={index}>
                      {item.content}
                    </h4>
                  );
                } else if ((item.type = "list")) {
                  return (
                    <ul key={index} className="list-disc ml-8 mt-2 mb-6">
                      {item.content.map((li, index) => {
                        return (
                          <li key={index}>
                            <p>{li}</p>
                          </li>
                        );
                      })}
                    </ul>
                  );
                }
              })}
            </div>
          </div>
        </div>
      )}
    </Section>
  );
};

export default SingleNewsPage;
