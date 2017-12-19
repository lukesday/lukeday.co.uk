import React from "react";
import Link from "gatsby-link";

const social = [
    {name: "Google", link: "http://www.google.com"},
    {name: "GitHub", link: "https://github.com/lukesday"}
]

export default ({ children, data }) => (
  <div className="footer">
    <div className="container">
        <h3>Follow Me</h3>
        <ul>
        {social.map((entry) => 
            <li><Link to={entry.link}>{entry.name}</Link></li>
        )}
        </ul>
    </div>
  </div>
);
