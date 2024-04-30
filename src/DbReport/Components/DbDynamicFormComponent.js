import React from "react";
import DynamicForm from "../../DynamicForm";
import FormButton from "./Buttons/FormButton";
import MinimizeButton from "./Buttons/MinimizeButton";


const DbDynamicFormComponent = (props) => {

    const  {showForm, showGrid,isFormOpened , formBodyClassName  , formBodyStyle, isLoading , observersMap , helpers , loaderComponent , formHeader} = props;

    const handleOnClickButton = (e) => {
        showForm();
    }

    const handleMinimizeClickButton = () => {
        showGrid();
    }

    return <React.Fragment>
             <header className={`d-flex align-items-center ${isFormOpened ? "custom-tabs-forms justify-content-between pb-0" : "p-2 custom-tabs-forms justify-content-center border-0"} `}>
                {isFormOpened ? 
                    <React.Fragment>
                        {formHeader ? <p class="mb-0">{formHeader}</p> : null}
                        <button type="button" id="vehicle-master-minimize-button" class="rounded-5 icon-hover  btn btn-link"></button>
                        <MinimizeButton handleOnClick = {handleMinimizeClickButton} id= "minimize-btn" toolTip= "Minimize"/>
                    </React.Fragment>
                :
                     <FormButton handleOnClick = {handleOnClickButton} id= "form_id" toolTip= "Show Form"/> }
            </header>
            <div className={formBodyClassName} style={{...formBodyStyle}}>
                <div>
                    {isFormOpened && !isLoading? <DynamicForm
                            observers={observersMap}
                            helpers={helpers}
                        /> : null}
                {isFormOpened && isLoading ? loaderComponent : null}  
                </div>              
            </div>



    </React.Fragment>
}

export default DbDynamicFormComponent;