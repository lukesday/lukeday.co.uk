import React from "react";

const social = [
    {name: "GitHub", link: "https://github.com/lukesday"},
]

export default ({ children, data }) => (
  <div className="footer">
    <div className="container">
        <h3>Follow Me</h3>
        <ul>
        {social.map((entry) => 
            <li><a href={entry.link}>{entry.name}</a></li>
        )}
        </ul>
    </div>
  </div>
);
