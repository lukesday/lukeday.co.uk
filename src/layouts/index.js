import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Footer from "./footer";

import "../styles/main.scss";

import favicon from "../static/favicon.ico";

export default ({ children, data }) => (
  <div className="background">
    <Helmet>
        <title>{data.site.siteMetadata.title} - Web Developer</title>
        <link rel="shortcut icon" href={favicon} />
    </Helmet>
    <div className="container main">
        <h1>
          {data.site.siteMetadata.title}
        </h1>
      {children()}
    </div>
    <Footer />
  </div>
);

export const query = graphql`
    query LayoutQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`