import React, { useEffect, useState } from 'react';
import Validate from '../../../LocalityComponent/helpers/Validate';
import { Popover, PopoverBody, PopoverHeader } from 'reactstrap';
import PropTypes from "prop-types";

const CustomPopOver = (props) => {

    const { target, value, closePopOver = false, setClosePopOver = () => {}, headerText, placement = "right", trigger = "legacy"} = props;
    const validate = Validate();
    const [openPopOver, setOpenPopOver] = useState(false);

    useEffect(() => {
        if(closePopOver){
            setOpenPopOver(false);
            setTimeout(() => {
                setClosePopOver(false);
            }), [500];
        }
    }, [closePopOver]);

    const toggle = () => {
        setOpenPopOver(!openPopOver);
    }

    return (
        <React.Fragment>
            {
                validate.isNotEmpty(value)
                    ?
                    <React.Fragment>
                        <Popover isOpen={openPopOver} toggle={toggle} target={target} popperClassName="custom-popover" placement={placement} trigger={trigger}>
                           {validate.isNotEmpty(headerText) && <PopoverHeader>
                                {headerText}
                            </PopoverHeader>}
                            <PopoverBody>
                                <span>{value}</span>
                            </PopoverBody>
                        </Popover>
                    </React.Fragment>
                    :
                    <p>-</p>
            }
        </React.Fragment>
    );
};

export default CustomPopOver;

CustomPopOver.propTypes = {
    target: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    closePopOver: PropTypes.bool,
    setClosePopOver: PropTypes.func,
    headerText: PropTypes.string,
    placement: PropTypes.string,
    trigger: PropTypes.string
}
