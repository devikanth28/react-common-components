export default StackedImages;
declare function StackedImages(props: any): React.JSX.Element;
declare namespace StackedImages {
    namespace propTypes {
        let images: PropTypes.Requireable<PropTypes.InferProps<{
            thumbnailPath: PropTypes.Requireable<string>;
            imagePath: PropTypes.Requireable<string>;
            altText: PropTypes.Requireable<string>;
            imageName: PropTypes.Requireable<string>;
        }>[]>;
        let includeLightBox: PropTypes.Requireable<boolean>;
        let stackClassName: PropTypes.Requireable<string>;
        let eachImageClassName: PropTypes.Requireable<string>;
    }
}
import React from "react";
import PropTypes from "prop-types";
