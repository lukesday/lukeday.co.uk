import * as React from "react";

interface IndexTemplateProps {
    data: {
        markdownRemark: {
            html: string
            frontmatter: {
                title: string;
            }
        }
    },
    children: any,
    transition: any,
}

export default class extends React.Component<IndexTemplateProps, {}> {
    constructor(props:IndexTemplateProps, context: any){
        super(props, context);
    }
    public render() {
        const post = this.props.data.markdownRemark
        return (
            <div style={this.props.transition && this.props.transition.style}>
                <h2>{post.frontmatter.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>  
        )   
    }
};

export const query = graphql`
    query BlogPostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
            }
        }
    }
`;