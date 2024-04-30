export function getNameAndVersion(browser: any): {
    browserName: any;
    browserVersion: any;
};
export function getPlatform(browser: any): any;
export function getBowserParser(): Bowser.Parser.Parser;
export default UserBrowserInfo;
import Bowser from "bowser";
declare function UserBrowserInfo({ minWebBrowserVersions, minMobileBrowserVersions, supportedPlatForms }: {
    minWebBrowserVersions?: {};
    minMobileBrowserVersions?: {};
    supportedPlatForms?: any[];
}): {
    isValidBrowser: boolean;
    errorMessage: string;
};
declare namespace UserBrowserInfo {
    namespace propTypes {
        let minWebBrowserVersions: PropTypes.Requireable<object>;
        let minMobileBrowserVersions: PropTypes.Requireable<object>;
        let supportedPlatForms: PropTypes.Requireable<any[]>;
    }
}
import PropTypes from "prop-types";
