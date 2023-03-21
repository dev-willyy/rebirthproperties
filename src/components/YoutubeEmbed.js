import React from "react";
import PropTypes from "prop-types";
import "../styles/YoutubeEmbed.scss";

function YoutubeEmbed(props) {
    return (
        <div className="embedded-yt-container">
            <iframe
                title="embedded-yt-video"
                src={`https://www.youtube.com/embed/${props.embedId}`}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                allowFullScreen
            />
        </div>
    );
}

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
