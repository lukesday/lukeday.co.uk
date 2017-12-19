import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "../styles/main.scss";

export default ({ children, data }) => (
  <div className="background">
    <Helmet title={`${data.site.siteMetadata.title} - Web Developer`} />
    <div className="container">
        <h1>
          {data.site.siteMetadata.title}
        </h1>
      {children()}
    </div>
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