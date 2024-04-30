import { END_POINT, REQUEST_TYPE } from './ServiceConstants';

const COMMON_CONFIG = {
    GET_LOCALITY_AUTO_SUGGESTIONS: {
        url: "/getLocalityAutoSuggestions",
       method:REQUEST_TYPE.GET,
       endPoint:END_POINT.MART_COMMON,
    },
    SET_SELECTED_LOCALITY: {
    url: "/setLocality",
       method:REQUEST_TYPE.GET,
       endPoint:END_POINT.MART_COMMON, 
   }
}
export default COMMON_CONFIG;