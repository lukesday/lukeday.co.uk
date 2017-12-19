import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Footer from "./footer";

import "../styles/main.scss";

import favicon from "../static/favicon.ico";

export default ({ children, data }) => (
  <div>
    <Helmet>
        <title>{data.site.siteMetadata.title} - Web Developer</title>
        <link rel="shortcut icon" href={favicon} />
    </Helmet>
    <div className="poly-background">
        <div className="container main">
            <h1>
            {data.site.siteMetadata.title}
            </h1>
            <nav>       
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/projects/">Projects</Link></li>
                </ul>
            </nav>
        {children()}
        </div>
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