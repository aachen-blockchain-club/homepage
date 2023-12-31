import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset }) => {
    const data = entry.getIn(["data"]).toJS();

    if (data) {
        return (
            <IndexPageTemplate
                image={getAsset(data.image)}
                title={data.title}
                subheading={data.subheading}
                intro={data.intro || { blurbs: [], heading: "", description: "" }}
                mainpitch={data.mainpitch || {}}
                activity={data.activity || { heading: "", description: "" }}
            />
        );
    } else {
        return <div>Loading...</div>;
    }
};

IndexPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func,
    }),
    getAsset: PropTypes.func,
};

export default IndexPagePreview;
