export default ReactImageLightbox;
declare class ReactImageLightbox extends React.Component<any, any, any> {
    static isTargetMatchImage(target: any): boolean;
    static parseMouseEvent(mouseEvent: any): {
        id: string;
        source: number;
        x: number;
        y: number;
    };
    static parseTouchPointer(touchPointer: any): {
        id: any;
        source: number;
        x: number;
        y: number;
    };
    static parsePointerEvent(pointerEvent: any): {
        id: any;
        source: number;
        x: number;
        y: number;
    };
    static getTransform({ x, y, zoom, width, targetWidth, forms, rotate, position }: {
        x?: number;
        y?: number;
        zoom?: number;
        width: any;
        targetWidth: any;
        forms: any;
        rotate: any;
        position: any;
    }): {
        transform: string;
    };
    constructor(props: any);
    state: {
        download: any;
        isClosing: boolean;
        shouldAnimate: boolean;
        zoomLevel: number;
        offsetX: number;
        offsetY: number;
        rotate: number;
        loadErrorStatus: {};
    };
    outerEl: React.RefObject<any>;
    zoomInBtn: React.RefObject<any>;
    zoomOutBtn: React.RefObject<any>;
    caption: React.RefObject<any>;
    closeIfClickInner(event: any): void;
    /**
     * Handle a double click on the current image
     */
    handleImageDoubleClick(event: any): void;
    handleImageMouseWheel(event: any): void;
    /**
     * Handle user keyboard actions
     */
    handleKeyInput(event: any): void;
    handleMouseUp(event: any): void;
    handleMouseDown(event: any): void;
    handleMouseMove(event: any): void;
    /**
     * Handle a mouse wheel event over the lightbox container
     */
    handleOuterMousewheel(event: any): void;
    handleTouchStart(event: any): void;
    handleTouchMove(event: any): void;
    handleTouchEnd(event: any): void;
    handlePointerEvent(event: any): void;
    handleCaptionMousewheel(event: any): void;
    handleWindowResize(): void;
    handleZoomInButtonClick(): void;
    handleZoomOutButtonClick(): void;
    requestClose(event: any): void;
    downloadAllFiles(event: any): void;
    requestMoveNext(event: any): void;
    requestMovePrev(event: any): void;
    handleLeftRotationButtonClick(): void;
    handleRightRotationButtonClick(): void;
    UNSAFE_componentWillMount(): void;
    timeouts: any;
    currentAction: number;
    eventsSource: any;
    pointerList: any;
    preventInnerClose: boolean;
    preventInnerCloseTimeout: any;
    keyPressed: boolean;
    imageCache: {};
    lastKeyDownTime: number;
    resizeTimeout: NodeJS.Timeout;
    wheelActionTimeout: any;
    resetScrollTimeout: NodeJS.Timeout;
    scrollX: number;
    scrollY: number;
    moveStartX: any;
    moveStartY: any;
    moveStartOffsetX: number;
    moveStartOffsetY: number;
    swipeStartX: any;
    swipeStartY: any;
    swipeEndX: any;
    swipeEndY: any;
    pinchTouchList: any;
    pinchDistance: number;
    keyCounter: number;
    moveRequested: boolean;
    componentDidMount(): void;
    windowContext: Window & typeof globalThis;
    listeners: {
        resize: () => void;
        mouseup: (event: any) => void;
        touchend: (event: any) => void;
        touchcancel: (event: any) => void;
        pointerdown: (event: any) => void;
        pointermove: (event: any) => void;
        pointerup: (event: any) => void;
        pointercancel: (event: any) => void;
    };
    UNSAFE_componentWillReceiveProps(nextProps: any): void;
    shouldComponentUpdate(): boolean;
    componentWillUnmount(): void;
    didUnmount: boolean;
    setTimeout(func: any, time: any): NodeJS.Timeout;
    setPreventInnerClose(): void;
    getBestImageForType(srcType: any): {
        src: any;
        height: any;
        width: any;
        targetHeight: any;
        targetWidth: any;
    };
    getFitSizes(width: any, height: any, stretch: any): {
        width: number;
        height: number;
    };
    getMaxOffsets(zoomLevel?: number): {
        maxX: number;
        minX: number;
        maxY: number;
        minY: number;
    };
    getSrcTypes(): {
        name: string;
        keyEnding: string;
    }[];
    /**
     * Get sizing when the image is scaled
     */
    getZoomMultiplier(zoomLevel?: number): number;
    /**
     * Get the size of the lightbox in pixels
     */
    getLightboxRect(): any;
    clearTimeout(id: any): void;
    changeZoom(zoomLevel: any, clientX: any, clientY: any): void;
    shouldHandleEvent(source: any): boolean;
    addPointer(pointer: any): void;
    removePointer(pointer: any): void;
    filterPointersBySource(): void;
    decideMoveOrSwipe(pointer: any): void;
    multiPointerStart(event: any): void;
    multiPointerMove(event: any, pointerList: any): void;
    multiPointerEnd(event: any): void;
    handleEnd(event: any): void;
    handleMoveStart({ x: clientX, y: clientY }: {
        x: any;
        y: any;
    }): void;
    handleMove({ x: clientX, y: clientY }: {
        x: any;
        y: any;
    }): void;
    handleMoveEnd(): void;
    handleSwipeStart({ x: clientX, y: clientY }: {
        x: any;
        y: any;
    }): void;
    handleSwipe({ x: clientX, y: clientY }: {
        x: any;
        y: any;
    }): void;
    handleSwipeEnd(event: any): void;
    calculatePinchDistance([a, b]?: any): number;
    calculatePinchCenter([a, b]?: any): {
        x: number;
        y: number;
    };
    handlePinchStart(pointerList: any): void;
    handlePinch(pointerList: any): void;
    handlePinchEnd(): void;
    isAnimating(): boolean;
    isImageLoaded(imageSrc: any): any;
    loadImage(srcType: any, imageSrc: any, done: any): void;
    loadAllImages(props?: Readonly<any>): void;
    requestMove(direction: any, event: any): void;
    render(): React.JSX.Element;
}
declare namespace ReactImageLightbox {
    namespace propTypes {
        let mainSrc: PropTypes.Validator<string>;
        let prevSrc: PropTypes.Requireable<string>;
        let nextSrc: PropTypes.Requireable<string>;
        let mainSrcThumbnail: PropTypes.Requireable<string>;
        let prevSrcThumbnail: PropTypes.Requireable<string>;
        let nextSrcThumbnail: PropTypes.Requireable<string>;
        let onCloseRequest: PropTypes.Validator<(...args: any[]) => any>;
        let onDownloadRequest: PropTypes.Requireable<(...args: any[]) => any>;
        let onMovePrevRequest: PropTypes.Requireable<(...args: any[]) => any>;
        let onMoveNextRequest: PropTypes.Requireable<(...args: any[]) => any>;
        let onImageLoadError: PropTypes.Requireable<(...args: any[]) => any>;
        let onImageLoad: PropTypes.Requireable<(...args: any[]) => any>;
        let onAfterOpen: PropTypes.Requireable<(...args: any[]) => any>;
        let discourageDownloads: PropTypes.Requireable<boolean>;
        let animationDisabled: PropTypes.Requireable<boolean>;
        let animationOnKeyInput: PropTypes.Requireable<boolean>;
        let animationDuration: PropTypes.Requireable<number>;
        let keyRepeatLimit: PropTypes.Requireable<number>;
        let keyRepeatKeyupBonus: PropTypes.Requireable<number>;
        let imageTitle: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        let imageCaption: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        let imageCrossOrigin: PropTypes.Requireable<string>;
        let downloadAll: PropTypes.Requireable<boolean>;
        let reactModalStyle: PropTypes.Requireable<PropTypes.InferProps<{}>>;
        let imagePadding: PropTypes.Requireable<number>;
        let wrapperClassName: PropTypes.Requireable<string>;
        let toolbarButtons: PropTypes.Requireable<PropTypes.ReactNodeLike[]>;
        let clickOutsideToClose: PropTypes.Requireable<boolean>;
        let enableZoom: PropTypes.Requireable<boolean>;
        let reactModalProps: PropTypes.Requireable<PropTypes.InferProps<{}>>;
        let nextLabel: PropTypes.Requireable<string>;
        let prevLabel: PropTypes.Requireable<string>;
        let zoomInLabel: PropTypes.Requireable<string>;
        let zoomOutLabel: PropTypes.Requireable<string>;
        let closeLabel: PropTypes.Requireable<string>;
        let imageLoadErrorMessage: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        let position: PropTypes.Requireable<string>;
    }
    namespace defaultProps {
        let imageTitle_1: any;
        export { imageTitle_1 as imageTitle };
        let imageCaption_1: any;
        export { imageCaption_1 as imageCaption };
        let toolbarButtons_1: any;
        export { toolbarButtons_1 as toolbarButtons };
        let reactModalProps_1: {};
        export { reactModalProps_1 as reactModalProps };
        let animationDisabled_1: boolean;
        export { animationDisabled_1 as animationDisabled };
        let animationDuration_1: number;
        export { animationDuration_1 as animationDuration };
        let animationOnKeyInput_1: boolean;
        export { animationOnKeyInput_1 as animationOnKeyInput };
        let clickOutsideToClose_1: boolean;
        export { clickOutsideToClose_1 as clickOutsideToClose };
        let closeLabel_1: string;
        export { closeLabel_1 as closeLabel };
        let discourageDownloads_1: boolean;
        export { discourageDownloads_1 as discourageDownloads };
        let enableZoom_1: boolean;
        export { enableZoom_1 as enableZoom };
        let downloadAll_1: boolean;
        export { downloadAll_1 as downloadAll };
        let imagePadding_1: number;
        export { imagePadding_1 as imagePadding };
        let imageCrossOrigin_1: any;
        export { imageCrossOrigin_1 as imageCrossOrigin };
        let keyRepeatKeyupBonus_1: number;
        export { keyRepeatKeyupBonus_1 as keyRepeatKeyupBonus };
        let keyRepeatLimit_1: number;
        export { keyRepeatLimit_1 as keyRepeatLimit };
        let mainSrcThumbnail_1: any;
        export { mainSrcThumbnail_1 as mainSrcThumbnail };
        let nextLabel_1: string;
        export { nextLabel_1 as nextLabel };
        let nextSrc_1: any;
        export { nextSrc_1 as nextSrc };
        let nextSrcThumbnail_1: any;
        export { nextSrcThumbnail_1 as nextSrcThumbnail };
        export function onAfterOpen_1(): void;
        export { onAfterOpen_1 as onAfterOpen };
        export function onImageLoadError_1(): void;
        export { onImageLoadError_1 as onImageLoadError };
        export function onImageLoad_1(): void;
        export { onImageLoad_1 as onImageLoad };
        export function onMoveNextRequest_1(): void;
        export { onMoveNextRequest_1 as onMoveNextRequest };
        export function onMovePrevRequest_1(): void;
        export { onMovePrevRequest_1 as onMovePrevRequest };
        let prevLabel_1: string;
        export { prevLabel_1 as prevLabel };
        let prevSrc_1: any;
        export { prevSrc_1 as prevSrc };
        let prevSrcThumbnail_1: any;
        export { prevSrcThumbnail_1 as prevSrcThumbnail };
        let reactModalStyle_1: {};
        export { reactModalStyle_1 as reactModalStyle };
        let wrapperClassName_1: string;
        export { wrapperClassName_1 as wrapperClassName };
        let zoomInLabel_1: string;
        export { zoomInLabel_1 as zoomInLabel };
        let zoomOutLabel_1: string;
        export { zoomOutLabel_1 as zoomOutLabel };
        let imageLoadErrorMessage_1: string;
        export { imageLoadErrorMessage_1 as imageLoadErrorMessage };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
