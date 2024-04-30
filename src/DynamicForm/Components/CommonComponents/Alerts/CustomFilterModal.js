import React from "react";
import { Card } from "react-bootstrap";

const CustomFilterModal = ({ bodyContent, headerContent, showModal, footerContent, isBigPopOverRequired, className, cardContent }) => {

  return (
    <React.Fragment>
      <div className={`position-relative custom-model-filter-container ${className}`}>
        <div className="position-relative">
          {headerContent && headerContent()}
        </div>
        {showModal &&
          <div className="custom-model-filter custom-form-width">
            <div className={`${isBigPopOverRequired ? 'custom-model-filter custom-model-filter-xl shadow' : 'custom-model-filter shadow'}`} >
              {cardContent && cardContent()}
              {!cardContent && <Card>
                {bodyContent &&
                  <Card.Body>
                    {bodyContent()}
                  </Card.Body>}
                {footerContent && <Card.Footer>
                  {footerContent()}
                </Card.Footer>}
              </Card>}
            </div>  
          </div>}
      </div>
    </React.Fragment>
  );

}

export default CustomFilterModal;