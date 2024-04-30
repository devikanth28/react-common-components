import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
function Loader({ spinnerClassName, animation, role, size, variant, spinnerContent }) {
  return (
    <React.Fragment>
      <Spinner className={spinnerClassName}
        animation={animation}
        role={role}
        size={size}
        variant={variant}>
        {spinnerContent && spinnerContent()}
      </Spinner>
    </React.Fragment>
  );
}
export default Loader;