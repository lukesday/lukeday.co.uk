import React from "react";

const links = [
    {name: "GitHub", link: "https://github.com/lukesday"},
]

const Social = () => (
    <ul>
    {links.map((entry) => 
        <li><a href={entry.link}>{entry.name}</a></li>
    )}
    </ul>
)

export default ({ children, data }) => (
  <div className="footer">
    <div className="container">
        <h3>Follow Me</h3>
        <Social />
    </div>
  </div>
);
