import * as React from "react";
import * as links from "../constants/links";

const Social = () => (
    <ul>
    {links.social.map((entry, index) => 
        <li key="index"><a href={entry.link}>{entry.name}</a></li>
    )}
    </ul>
)

export default class extends React.Component {

    public render() {
        return(
            <div className="footer">
                <div className="container">
                    <h3>Follow Me</h3>
                    <Social />
                </div>
            </div>
        )
    }
};
