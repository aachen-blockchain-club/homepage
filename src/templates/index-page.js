import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import logo from "../img/logo.svg";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const IndexPageTemplate = ({ image, title, subheading, mainpitch, intro, activity }) => {
    const heroImage = getImage(image) || image;

    return (
        <div>
            <FullWidthImage
                img={heroImage}
                title={title}
                subheading={subheading}
            />
            <section className="section section--gradient">
                <div className="container">
                    <div className="section">
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                                <div className="content">
                                    <div className="content">
                                        <div className="tile">
                                            <h1 className="is-size-3-tablet is-size-4-mobile title">
                                                {mainpitch.title}
                                            </h1>
                                        </div>
                                        <div className="tile">
                                            <p className="is-size-5-tablet">{mainpitch.description}</p>
                                        </div>
                                    </div>
                                    <img
                                        className="column mx-auto my-6"
                                        style={{ width: "10rem", opacity: 0.1 }}
                                        src={logo}
                                        alt="Aachen Blockchain Club"
                                    />
                                    <div className="columns">
                                        <div className="column is-12">
                                            <h3 className="has-text-weight-semibold is-size-3-tablet is-size-4-mobile">
                                                {intro.heading}
                                            </h3>
                                            <p className="is-size-5-tablet">{intro.description}</p>
                                        </div>
                                    </div>
                                    <Features gridItems={intro.blurbs} />
                                    <div className="columns">
                                        <div className="column has-text-centered is-12">
                                            <Link
                                                className="button"
                                                to="/products"
                                            >
                                                See all products
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="column is-12">
                                        <h3 className="has-text-weight-semibold is-size-3-tablet is-size-4-mobile">
                                            {activity.heading}
                                        </h3>
                                        <p className="is-size-5-tablet">{activity.description}</p>
                                    </div>
                                    <div className="column my-4">
                                        <BlogRoll />
                                    </div>
                                    <div className="column has-text-centered is-12">
                                        <Link
                                            className="button"
                                            to="/blog"
                                        >
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

IndexPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    subheading: PropTypes.string,
    mainpitch: PropTypes.object,
    intro: PropTypes.shape({
        heading: PropTypes.string,
        description: PropTypes.string,
        blurbs: PropTypes.array,
    }),
    activity: PropTypes.shape({
        heading: PropTypes.string,
        description: PropTypes.string,
    }),
};

const IndexPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout>
            <IndexPageTemplate
                image={frontmatter.image}
                title={frontmatter.title}
                subheading={frontmatter.subheading}
                mainpitch={frontmatter.mainpitch}
                intro={frontmatter.intro}
                activity={frontmatter.activity}
            />
        </Layout>
    );
};

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
};

export default IndexPage;

export const pageQuery = graphql`
    query IndexPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
            frontmatter {
                title
                image {
                    childImageSharp {
                        gatsbyImageData(quality: 100, layout: FULL_WIDTH)
                    }
                }
                subheading
                mainpitch {
                    title
                    description
                }
                intro {
                    heading
                    description
                    blurbs {
                        image {
                            childImageSharp {
                                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
                            }
                        }
                        text
                    }
                }
                activity {
                    heading
                    description
                }
            }
        }
    }
`;
