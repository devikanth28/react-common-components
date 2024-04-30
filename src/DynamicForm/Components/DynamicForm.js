import React, { useEffect, useState } from 'react';
import DefaultLoader from '../Components/CommonComponents/Loader';
import { serverRequest } from '../Utils/AxiosHelper';
import FormActions from './FormActions';

const DynamicForm = ({ requestUrl, requestMethod, parameters, headers, Loader, history,customHtml,observers={}, formJson,helpers }) => {

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (formJson && helpers.isEmpty()) {
      helpers.addForm(formJson);
    }
    else if (requestMethod && requestUrl && helpers.isEmpty()) {
      getFormData();
    }
  }, [])

  


  const getFormData = async () => {
    try {
      setLoading(true);
      const response = await serverRequest(requestMethod, requestUrl, parameters, headers);
      Object.entries(observers).map(([key,configs])=>{
        if(key =='RESPONSE'){
          configs.map(config=>{
            const [e,callBack] = config;
            if(e == 'RESPONSE'){
              callBack(response);
          }
          })
        }
      })
      setLoading(false);
      const {data}=response;
      if (data && data.statusCode == 'SUCCESS') {
        const { action } = data;
        if (action != null && action.event === 'RESPONSE') {
            action.domElements.map(domInfo => {
              helpers.addForm(domInfo.element);
          })
        }
      }
    }
    catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  const spinnerContent = ()=> {
    return(<span className="visually-hidden">Loading...</span>);
  }

  return (
    <React.Fragment>
      {(isLoading) && (Loader ? <Loader /> : <div className='align-items-center d-flex h-100 justify-content-center text-danger page-spinner-position'><DefaultLoader  spinnerClassName={"loader"} animation={"border"} role={"status"} spanClassName={"visually-hidden"} spinnerContent={spinnerContent}  /></div>)}
      {(!isLoading && !helpers.isEmpty()) && <FormActions history={history} helpers={helpers} customHtml={customHtml} observers={observers}  />}
    </React.Fragment>);

}
export default DynamicForm;