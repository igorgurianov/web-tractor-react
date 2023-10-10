import React from "react";
import { Helmet } from "react-helmet";

function NotFoundPage() {
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
  );
}

export default NotFoundPage;
