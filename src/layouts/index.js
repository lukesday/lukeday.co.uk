import React from "react";
import Link from "gatsby-link";

import { rhythm } from "../utils/typography";

export default ({ children, data }) => (
  <div>
    <Link to={`/`}>
      <h3>
        {data.site.siteMetadata.title}
      </h3>
    </Link>
    {children()}
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