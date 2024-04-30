import axios from 'axios';
import { API_URL } from '../constants/ServiceConstants';

const checkAndReturnReponse = (response) => {
    if (response.status !== 200) {
        return new Promise((resolve) => {
            return resolve({ statusCode: 'CLIENT_ERROR', message: 'Something went wrong. Please try again!' });
        })
    }
    return response.data;
}

export const serverRequest = async (requestConfig,extraConfig) => {
    let data = {};
    let finalConfig={};
    finalConfig['baseURL']=API_URL;
    Object.entries(requestConfig).map(([key,value]) => {

        if(extraConfig[key] && typeof extraConfig[key] == 'object') {
            finalConfig[key]={...value,...extraConfig[key]};
        }
        else {
            finalConfig[key]=value;
        }
    })
     finalConfig = {...extraConfig,...finalConfig};
     const {params:paramsObj} = finalConfig;
    //processing params data and setting to data variable
    paramsObj && Object.keys(paramsObj).forEach((each, index) => {
        if (Array.isArray(paramsObj[each])) {
            var arr = paramsObj[each];
            var strData = '';
            arr.forEach((each, index) => { strData += (each + ((index !== arr.length - 1) ? "," : "")) });
            data[each] = strData;
        }else{
            if(paramsObj[each] && typeof paramsObj[each] === "string" && (paramsObj[each].indexOf("+") !== -1 || paramsObj[each].indexOf("&") !== -1)){
            	data[each] = encodeURIComponent(paramsObj[each]);
            }else{
                data[each] = paramsObj[each];
            }
        }
    });
    //data = decodeURIComponent(qs.stringify(data));
    finalConfig.params=data;
    if(finalConfig && finalConfig.headers){
        finalConfig.headers.relativeUrl=finalConfig.url;
    }

    if(finalConfig.endPoint){
        finalConfig.url = finalConfig.endPoint+finalConfig.url;
    }

    return axios(finalConfig).then((response) => {
        return checkAndReturnReponse(response);
    }).catch(err => {
        if (err.message === "Network Error" || err.code === `ECONNABORTED`) {
            return new Promise((resolve) => {
                return resolve({ statusCode: "404", message: "Network Error" });
            })
        } else if (err && err.response && err.response.status === 400) {
            return new Promise((resolve) => {
                return resolve({ statusCode: "404", message: "Network Error" });
            })
        }
        else {
            return new Promise((resolve,reject)=>{
                return reject(err);
            });
        }
    });
}
