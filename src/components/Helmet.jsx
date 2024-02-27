import React from "react";
import { Helmet } from "react-helmet";

function Helmet({ pageTitle, pageDescription }) {
  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
    </Helmet>
  );
}

export default Helmet;
