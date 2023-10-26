import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate, Navigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div>
      <Helmet>
        <title>404</title>
        <meta
          name="description"
          content="Мы предоставляем профессиональные услуги по ремонту тракторов всех марок. Промежуточный и капитальный ремонт, замена запчастей, обслуживание и ТО. Опытные специалисты, высокое качество обслуживания."
        />
        <link rel="canonical" href="https://vzgm.ru/services" />
      </Helmet>
      Страница не найдена
    </div>
    // navigate("https://vzgm.ru/404.html")
    // <div>
    //   <Navigate to="/https://vzgm.ru/404.html"></Navigate>
    // </div>
  );
}

export default NotFoundPage;
