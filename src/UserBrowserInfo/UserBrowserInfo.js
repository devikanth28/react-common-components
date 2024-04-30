import React from "react";
import Bowser from "bowser";
import Validate from "../LocalityComponent/helpers/Validate";
import PropTypes from "prop-types";

const BROWSER_UPDATE_URLS = {
    CHROME : 'https://www.google.com/chrome/',
    FIREFOX : 'https://www.mozilla.org/en-US/firefox/new/',
    EDGE : 'https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/',
    SAFARI : 'https://www.apple.com/in/safari/'
}

const DefaultWebBrowserVersions = {
    chromeVersion:95, 
    fireFoxVersion:95, 
    edgeVersion:95, 
    safariVersion:15
}

const DefaultMobileBrowserVersions = {
    chromeVersion:115, 
    fireFoxVersion:115, 
    edgeVersion:115, 
    safariVersion:15
}

const DefaultSupportedPlatforms = [
    'desktop',
    'mobile',
    'tablet'
]

export const getNameAndVersion = (browser) => {
    const browserName = browser.getBrowserName();
    const browserVersion = browser.getBrowserVersion();
    return { browserName, browserVersion };
}

export const getPlatform = (browser) => {
    return browser.getPlatformType(true);
}

export const getBowserParser = () => {
    return Bowser.getParser(window.navigator.userAgent);
}

const UserBrowserInfo = ({minWebBrowserVersions = {}, minMobileBrowserVersions = {}, supportedPlatForms = []}) => {
    const browser = getBowserParser();
    const validate = Validate();
    let errorMessage = "";
    let isValidBrowser = false;
    let webBrowserVersions = DefaultWebBrowserVersions;
    let mobileBrowserVersions = DefaultMobileBrowserVersions;
    let applicationSupportedPlatForms = validate.isNotEmpty(supportedPlatForms) ? supportedPlatForms : DefaultSupportedPlatforms;

    if(validate.isNotEmpty(minWebBrowserVersions)) 
        webBrowserVersions = {...webBrowserVersions, ...minWebBrowserVersions};

    if(validate.isNotEmpty(minMobileBrowserVersions))
        mobileBrowserVersions = {...mobileBrowserVersions, ...minMobileBrowserVersions};    
    
    const { browserName, browserVersion } = getNameAndVersion(browser);
    const browserMajorVersion =  browserVersion .split(".")[0];
    const browserPlatform = getPlatform(browser);

    if(applicationSupportedPlatForms.includes(browserPlatform)){
        switch(browserPlatform){
            case "desktop" :
                if(browserName.toLowerCase() == "chrome"){
                    if(Number(browserMajorVersion) >= webBrowserVersions.chromeVersion) isValidBrowser = true;
                    else errorMessage = <span>Please ensure your browser is updated to version {webBrowserVersions.chromeVersion} or higher. <a target="_blank" href={BROWSER_UPDATE_URLS.CHROME} className="alert-link">Update Here</a></span>              
                }
                else if(browserName.toLowerCase() == "firefox"){
                    if(Number(browserMajorVersion) >= webBrowserVersions.fireFoxVersion) isValidBrowser = true;
                    else errorMessage = <span>Please ensure your browser is updated to version {webBrowserVersions.fireFoxVersion} or higher. <a target="_blank" href={BROWSER_UPDATE_URLS.FIREFOX} className="alert-link">Update Here</a></span>
                }
                else if(browserName.toLowerCase() == "edge"){
                    if(Number(browserMajorVersion) >= webBrowserVersions.edgeVersion) isValidBrowser = true;
                    else errorMessage = <span>Please ensure your browser is updated to version {webBrowserVersions.edgeVersion} or higher. <a target="_blank" href={BROWSER_UPDATE_URLS.EDGE} className="alert-link">Update Here</a></span>
                }
                else if(browserName.toLowerCase() == "safari"){
                    if(Number(browserMajorVersion) >= webBrowserVersions.safariVersion) isValidBrowser = true;
                    else errorMessage = <span>Please ensure your browser is updated to version {webBrowserVersions.safariVersion} or higher. <a target="_blank" href={BROWSER_UPDATE_URLS.SAFARI} className="alert-link">Update Here</a></span>
                }
                else{
                    errorMessage=<span>We currently do not support ${browserName}. Please use <a target="_blank" href={BROWSER_UPDATE_URLS.CHROME} className="alert-link">Chrome</a> or <a target="_blank" href={BROWSER_UPDATE_URLS.FIREFOX} className="alert-link">Firefox</a> for better experience</span>;
                }
            break;
    
            case "mobile" :
            case "tablet" :
                if(browserName.toLowerCase() == "chrome"){
                    if(Number(browserMajorVersion) >= mobileBrowserVersions.chromeVersion) isValidBrowser = true;
                    else errorMessage = <span>Please ensure your browser is updated to version {mobileBrowserVersions.chromeVersion} or higher. <a target="_blank" href={BROWSER_UPDATE_URLS.CHROME} className="alert-link">Update Here</a></span>
                }
                else if(browserName.toLowerCase() == "firefox"){
                    if(Number(browserMajorVersion) >= mobileBrowserVersions.fireFoxVersion) isValidBrowser = true;
                    else errorMessage = <span>Please ensure your browser is updated to version {mobileBrowserVersions.fireFoxVersion} or higher. <a target="_blank" href={BROWSER_UPDATE_URLS.FIREFOX} className="alert-link">Update Here</a></span>
                }
                else if(browserName.toLowerCase() == "edge"){
                    if(Number(browserMajorVersion) >= mobileBrowserVersions.edgeVersion) isValidBrowser = true;
                    else errorMessage = <span>Please ensure your browser is updated to version {mobileBrowserVersions.edgeVersion} or higher. <a target="_blank" href={BROWSER_UPDATE_URLS.EDGE} className="alert-link">Update Here</a></span>
                }
                else if(browserName.toLowerCase() == "safari"){
                    if(Number(browserMajorVersion) >= mobileBrowserVersions.safariVersion) isValidBrowser = true;
                    else errorMessage = <span>Please ensure your browser is updated to version {mobileBrowserVersions.safariVersion} or higher. <a target="_blank" href={BROWSER_UPDATE_URLS.SAFARI} className="alert-link">Update Here</a></span>
                }
                else{
                    errorMessage=<span>We currently do not support ${browserName}. Please use <a target="_blank" href={BROWSER_UPDATE_URLS.CHROME} className="alert-link">Chrome</a> or <a target="_blank" href={BROWSER_UPDATE_URLS.FIREFOX} className="alert-link">Firefox</a> for better experience</span>;
                }
            break;
    
            default :
                errorMessage = `We currently do not support ${browserPlatform} devices. Please use desktop`;
        }
    }
    else{
        errorMessage = `We currently do not support ${browserPlatform} devices. Please use desktop`
    }

    return {isValidBrowser, errorMessage};
};

export default UserBrowserInfo;

UserBrowserInfo.propTypes = {
    minWebBrowserVersions: PropTypes.object,
    minMobileBrowserVersions: PropTypes.object,
    supportedPlatForms: PropTypes.array,
}