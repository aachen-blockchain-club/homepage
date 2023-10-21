import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// eslint-disable-next-line
export const ContactPageTemplate = ({ title, content, contentComponent }) => {
    const PageContent = contentComponent || Content;

    return (
        <section className="section section--gradient">
            <div className="container">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <div className="section">
                            <h2 className="has-text-weight-bold is-bold-light is-size-3 title">{title}</h2>
                            <PageContent
                                className="content"
                                content={content}
                            />
                            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSee_vnufQsCanbgZVfsA9ItPpTK43k_nLy_ZpHBM-RYgBXjZw/viewform?embedded=true" className="column is-12" height="650" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

ContactPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
};

const ContactPage = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <Layout>
            <ContactPageTemplate
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                content={post.html}
            />
        </Layout>
    );
};

ContactPage.propTypes = {
    data: PropTypes.object.isRequired,
};

export default ContactPage;

export const contactPageQuery = graphql`
    query ContactPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
            }
        }
    }
`;
