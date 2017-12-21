import * as React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Footer from "./footer";

import "../styles/main.scss";

import * as favicon from "../static/favicon.ico";

interface IndexLayoutProps {
    data: {
        site: {
            siteMetadata: {
                title: string;
            }
        }
    },
    children: any
}

export default class extends React.Component<IndexLayoutProps, {}> {
    constructor(props:IndexLayoutProps, context: any){
        super(props, context);
    }

    public render() {
        return (
            <div>
                <Helmet>
                    <title>{this.props.data.site.siteMetadata.title} - Web Developer</title>
                    <link rel="shortcut icon" href={favicon} />
                </Helmet>
                <div className="poly-background">
                    <div className="container main">
                        <h1>
                            {this.props.data.site.siteMetadata.title}
                        </h1>
                        <h2 className="title">Full Stack Developer</h2>
                        <nav>       
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/projects/">Projects</Link></li>
                            </ul>
                        </nav>
                        {this.props.children()}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
};

export const query = graphql`
    query LayoutQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`