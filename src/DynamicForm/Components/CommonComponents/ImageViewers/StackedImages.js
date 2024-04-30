import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import ImageLightBox from './ImageLightBox/ImageLightBox';
import Validate from "../../../../LocalityComponent/helpers/Validate";
import { UncontrolledTooltip } from "reactstrap";

const StackedImages = (props) =>{

    const [isLightBoxOpen, setLightBoxOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [imagesForLightBox, setImagesForLightBox] = useState([]);
    const [maxImages, setMaxImages] = useState();
    const [innerContainerWidth, setInnerContainerWidth] = useState(0);
    const [innerContainerHeight, setInnerContainerHeight] = useState(0);
    const validate = Validate();

    useEffect(()=>{
        if(props.images){
            setImagesForLightBox(props.images.map(({ imagePath }) => imagePath))
        }        
    },[props.images])

    useEffect(() => {
        if(props?.closeLightBox){
            setLightBoxOpen(false);
        }
    }, [props?.closeLightBox]);

    useEffect(() => {
        if(props.maxImages && props.maxImages < props.images.length){
            setMaxImages(props.maxImages)
        }
        else if(props.maxImages && props.maxImages > props.images.length){
            setMaxImages(props.images.length);
        }
        else if(props.images){
            setMaxImages(props.images.length);
        }
    }, [])

    const onImageClick = () =>{        
        if(props.includeLightBox) {
            props.handleCloseLightBox && props.handleCloseLightBox(false);
            setLightBoxOpen(true);
        }
    }

    const fetchingFunction = (element) => {
        setInnerContainerWidth(element.target.offsetWidth);
        setInnerContainerHeight(element.target.offsetHeight);
    }

    return (
        <React.Fragment>
            <div id={`stacked_images${validate.isNotEmpty(props.tooltipId) ? `_${props.tooltipId}` : ''}`} className={props.stackClassName ? props.stackClassName : "avatars w-100 h-100" } onClick={onImageClick}>                                
                <div style={{width: `calc(${innerContainerWidth}px + (${(maxImages - 1) * 10}px))`, height: `${innerContainerHeight}px`}}>                    
                    { props.images && props.images.map((eachImage,key)=>{
                            const [imagePath, setImagePath] = useState(eachImage.thumbnailPath);                                                
                            const handleImageLoadError = () => {
                                setImagePath(props.defaultImage ? props.defaultImage : "https://static2.medplusmart.com/live/martpwa/V9/mCart/images/image-load.gif");
                                setTimeout(() => {
                                    const currentImg = new Image();
                                    currentImg.src = eachImage.thumbnailPath;
                                    currentImg.onload = () => {setImagePath(eachImage.thumbnailPath)};
                                    currentImg.onerror = () => {handleImageLoadError()};
                                }, 5000);
                            }
                            if(key < maxImages)                            
                                return(
                                    <span key = {key} className={props.eachImageClassName ? props.eachImageClassName : "avatar" } style={{marginLeft: `${(maxImages - key - 1)*10}px`}}>
                                        <img onLoad={(element) => fetchingFunction(element)} src={imagePath} className={props.setGridImgHeight && "grid-img-height"} onError={() => handleImageLoadError()} alt={eachImage.altText ? eachImage.altText : "" } />
                                        {props.images && props.maxImages && props.images.length > props.maxImages && key === (maxImages - 1) && 
                                            <div className="avatars-counter ">
                                                <span>{props.maxImages}+</span>
                                            </div>                      
                                        }
                                    </span>
                                )                        
                    })}
                </div>
            </div>
            {validate.isNotEmpty(props.tooltip) && 
                <UncontrolledTooltip placement="bottom" target={`stacked_images${validate.isNotEmpty(props.tooltipId) ? `_${props.tooltipId}` : ''}`}>
                    {props.tooltip}
                </UncontrolledTooltip>
            }
            {props.includeLightBox && imagesForLightBox && isLightBoxOpen &&
                <ImageLightBox imageIndex={activeIndex} prescImages={imagesForLightBox}
                mainSrc={imagesForLightBox[activeIndex]}
                imageTitle={props.imageTitle}
                forms={props.forms}
                position = {props.position}
                displayForms={()=>props.displayForms()}
                downloadAll={props.downloadAll}
                onDownloadRequest={(files) => {props.downloadAllFiles(files)}}
                previousFilesHistory={props.previousFilesHistory}
                nextSrc={imagesForLightBox[(activeIndex + 1) % imagesForLightBox.length]}
                prevSrc={imagesForLightBox[(activeIndex + imagesForLightBox.length - 1) % imagesForLightBox.length]}
                onCloseRequest={() => {setLightBoxOpen(false);setActiveIndex(0)}}
                onMovePrevRequest={() => setActiveIndex((activeIndex + imagesForLightBox.length - 1) % imagesForLightBox.length)}
                onMoveNextRequest={() => setActiveIndex((activeIndex + 1) % imagesForLightBox.length)}
                />
            }
        </React.Fragment>
    )
}

StackedImages.propTypes = {
    /**
     * Images list, with full imagePaths including server/domain names 
     */
    images: PropTypes.arrayOf(PropTypes.shape({
        thumbnailPath: PropTypes.string,
        imagePath: PropTypes.string,
        altText: PropTypes.string,
        imageName: PropTypes.string

    })),
    /**
     * LightBox feature flag
     */
    includeLightBox: PropTypes.bool,
    /**
     * parent group div classname
     */
    stackClassName: PropTypes.string,
    /**
     * Each image span classname
     */
    eachImageClassName: PropTypes.string,
  }

export default StackedImages