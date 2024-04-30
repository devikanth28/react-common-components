import { serverRequest } from '../axios';
import COMMON_CONFIG from '../constants/CommonConfig';

export default function LocalityService() {

    function getLocalityAutoSuggestions(config) {
        return serverRequest(COMMON_CONFIG.GET_LOCALITY_AUTO_SUGGESTIONS,config);
    }
    function setSelectedLocality(config) {
        return serverRequest(COMMON_CONFIG.SET_SELECTED_LOCALITY,config);
    }

    return Object.freeze({
        getLocalityAutoSuggestions,
        setSelectedLocality
    });
}
