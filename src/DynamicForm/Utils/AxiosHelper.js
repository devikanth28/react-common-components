import axios from 'axios';


export const REQUEST_TYPE = {
    GET: 'GET',
    POST: 'POST',
    PATCH: 'PATCH',
    PUT: 'PUT',
    DELETE: 'DELETE'
};



const axiosBaseApi = axios.create();

axiosBaseApi.interceptors.request.use((config) => {
    let requestMethod = config.method;
    let paramsObj = undefined;
    var data = {};
    if (requestMethod === 'POST' || requestMethod === 'post') {
        paramsObj = { ...config.data };
        Object.keys(paramsObj).forEach((each, index) => {
            if (Array.isArray(paramsObj[each])) {
                var arr = paramsObj[each];
                var strData = '';
                arr.forEach((each, index) => { strData += (each + ((index !== arr.length - 1) ? "," : "")) });
                data[each] = strData;
            } else {
                data[each] = paramsObj[each];
            }
        });
        if (config.data instanceof FormData) {
            config["data"] = config.data;
        }
        else {
            config["data"] = data;
        }
    }
    if (requestMethod === 'GET' || requestMethod === 'get') {
        paramsObj = { ...config.params };
        config["params"] = paramsObj;
    }
    return config;
}, (err) => {
    Promise.reject(err)
}
);

axiosBaseApi.interceptors.response.use((response) => {
    return response;
}, (err) => {
    console.log("Actual server Error:", err.response);
    return Promise.reject(err);
});

export const serverRequest = (requestType, url, paramsObj, headers, requestBody) => {
    if (requestType === 'POST' || requestType === 'post') {
        return axiosBaseApi.post(url, requestBody, { params: paramsObj, headers });
    }
    else if (requestType === 'GET' || requestType === 'get') {
        return axiosBaseApi.get(url, { params: paramsObj, headers });
    }
}