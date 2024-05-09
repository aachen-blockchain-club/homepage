import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { navigate } from "gatsby";

// eslint-disable-next-line
export const InfoPageTemplate = ({ title, content, contentComponent }) => {
    const PageContent = contentComponent || Content;

    // redirect to linktree
    // if (typeof window !== "undefined") navigate("https://linktr.ee/aachen_blockchain");

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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

InfoPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
};

const InfoPage = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <Layout>
            <InfoPageTemplate
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                content={post.html}
            />
        </Layout>
    );
};

InfoPage.propTypes = {
    data: PropTypes.object.isRequired,
};

export default InfoPage;

export const InfoPageQuery = graphql`
    query InfoPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
            }
        }
    }
`;
