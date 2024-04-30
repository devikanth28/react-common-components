import React  from 'react';
import { OverlayTrigger } from 'react-bootstrap';
import PopoverComponent from './PopoverComponent';

const UpdatingPopover = React.forwardRef(
    ({...props}, ref) => {
      return <PopoverComponent innerRef= {ref} {...props}/>
    },
  );

const PopoverCellFormatter = (props) => {

    const {cellRenderer , popoverHeader , popoverBody , popoverTrigger , popoverPlacement} = props;

    return <React.Fragment>
        <OverlayTrigger
            trigger={popoverTrigger ? popoverTrigger : 'click'}
            rootClose
            placement={popoverPlacement ? popoverPlacement : 'bottom'}
            overlay={<UpdatingPopover popoverHeader = {popoverHeader} popoverBody= {popoverBody}/>}
        >
            {cellRenderer}
        </OverlayTrigger>

    </React.Fragment>
}

export default PopoverCellFormatter;