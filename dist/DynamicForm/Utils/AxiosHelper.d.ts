export namespace REQUEST_TYPE {
    let GET: string;
    let POST: string;
    let PATCH: string;
    let PUT: string;
    let DELETE: string;
}
export function serverRequest(requestType: any, url: any, paramsObj: any, headers: any, requestBody: any): Promise<import("axios").AxiosResponse<any, any>>;
