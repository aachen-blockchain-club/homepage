import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage } from "gatsby-plugin-image";

export default function FullWidthImage(props) {
    const { img, title, subheading } = props;

    return (
        <div
            className="is-hidden-mobile margin-top-0"
            style={{
                display: "grid",
                alignItems: "center",
            }}
        >
            {img?.url ? (
                <img
                    src={img}
                    objectFit={"cover"}
                    className="banner"
                    // This is a presentational image, so the alt should be an empty string
                    alt=""
                />
            ) : (
                <GatsbyImage
                    image={img}
                    objectFit={"cover"}
                    className="banner"
                    style={{
                        gridArea: "1/1",
                        // You can set a maximum height for the image, if you wish.
                    }}
                    layout="fullWidth"
                    // You can optionally force an aspect ratio for the generated image
                    aspectratio={3 / 1}
                    // This is a presentational image, so the alt should be an empty string
                    alt=""
                    formats={["auto", "webp", "avif"]}
                />
            )}
            {(title || subheading) && (
                <div
                    style={{
                        // By using the same grid area for both, they are stacked on top of each other
                        gridArea: "1/1",
                        position: "relative",
                        // This centers the other elements inside the hero component
                        placeItems: "center",
                        display: "grid",
                    }}
                >
                    {/* Any content here will be centered in the component */}
                    {title && (
                        <h1 className="is-capitalized is-primary is-size-1-widescreen is-size-2-tablet is-size-3-mobile pt-1 px-6 title-font">
                            {title}
                        </h1>
                    )}
                    {subheading && (
                        <h3 className="is-capitalized is-primary is-size-4-widescreen is-size-5-mobile is-size-5-tablet mt-4 px-6 title-font">
                            {subheading}
                        </h3>
                    )}
                </div>
            )}
        </div>
    );
}

FullWidthImage.propTypes = {
    img: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    height: PropTypes.number,
    subheading: PropTypes.string,
};
