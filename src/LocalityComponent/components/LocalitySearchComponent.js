import React, { useEffect, useRef, useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import debounce from '../Debounce';
import Validate from '../helpers/Validate';
import LocalityService from '../services/LocalityService';
var base64 = require('base-64');

const LocalitySearchComponent = (props) => {
    const validate = Validate();
    const localityService = LocalityService();
    const [isLoading, setLoading] = useState(false);
    const [localitySuggestions, setLocalitySuggestions] = useState([]);
    const localitySearchInputRef = useRef();
    const [localitySelectedName, setSelectedLocalityName] = useState("");
    const [localitySelectedList, setLocalitySelectedList] = useState([]);
    

    useEffect(() => {
            localitySearchInputRef.current.focus();
                         
    },[])
    const toggleLocality = () => {
        props.setLocality(prevState => !prevState);
      };
    const getLocalityAutoSuggestions =debounce((searchText) => {
        if(!(validate.isNotEmpty(searchText) && searchText.length > 0)) {
            setLocalitySuggestions([]);
            setLoading(false);
        } 
        if(validate.isNotEmpty(searchText) && searchText.trim().length >= 3){
            setLoading(true);
            let paramsObj={localitySearchStr: base64.encode(searchText)}
            let config={headers:{customerId:props.customerId},params:paramsObj};
            localityService.getLocalityAutoSuggestions(config).then((response) => {
                if(validate.isNotEmpty(response) && 'SUCCESS' == response.statusCode){
                    let topGoogleLocations = [];
                    for(const eachGoogleLocation of response.dataObject.suggestedLocations) {
                        let commaIndex = eachGoogleLocation.location.indexOf(",");
                        let location = eachGoogleLocation.location;
                        let address = "India";
                        if(location != undefined && location.indexOf(",") != -1){
                            location = eachGoogleLocation.location.substring(0, commaIndex);
                            address = eachGoogleLocation.location.substring(commaIndex+1, eachGoogleLocation.location.length); 
                        }
                        eachGoogleLocation.mainLocation = location;
                        eachGoogleLocation.address = address;
                        topGoogleLocations.push(eachGoogleLocation);
                        if(topGoogleLocations.length >= 5) {
                            break;
                        }
                    }
                    setLocalitySuggestions(topGoogleLocations);
                    setLoading(false);
                } else if("FAILURE" == response.statusCode) {
                    console.log("Error: "+ response.message);
                    setLocalitySuggestions([]);
                    setLoading(false);
                }
            }).catch(function(error) {
            console.log(error);
            });
        }
    },500);

    const setSelectedLocality = (location) => {
        if(validate.isNotEmpty(location)){
            setLoading(true);
    }
        let locationObject = { location : location }
        let paramsObj={locationInfo : JSON.stringify(locationObject)}
        let config={headers:{customerId:props.customerId},params:paramsObj};
        localityService.setSelectedLocality(config).then(async response => {
            if(validate.isNotEmpty(response) && response.statusCode === "SUCCESS") {
                setLoading(false);
                if(props.setLocality !== undefined){
                    toggleLocality();
                }
            } else if("FAILURE" == response.statusCode) {
                console.log("Error: "+ response.message);
            }
        }).catch(function(error) {
            console.log(error);
        });
    } 

    const localitySelection = (selectedLocality) => {
        setLocalitySelectedList(selectedLocality);
        let selectedLocalityName = "";
        selectedLocality.map((eachLocality) => {
            if(validate.isNotEmpty(eachLocality.location)){
                selectedLocalityName = eachLocality.location;
            }
        });
        setSelectedLocalityName(selectedLocalityName);
        setSelectedLocality(selectedLocalityName);
    }

    const handleEnterEvent = (searchText) => {
        localitySearchInputRef.current.clear();
        if(validate.isNotEmpty(searchText) && searchText.trim().length >= 3){
            if(localitySuggestions.length > 0){
                let localityArray=[];
                localitySelection( localityArray.concat(localitySuggestions[0]));
            }
        }
    }
    
    const handleonClear = (e) => {
       e.preventDefault();
       localitySearchInputRef.current.clear();
       setLocalitySelectedList([]);
       setLocalitySuggestions([]);
    }

    return (
        <form className={"form-inline locality"} data-type="locality-search">
            <div className="inputgroup d-flex align-items-center">
                <Form.Group>
                <InputGroup>
                <InputGroup.Text>Locality</InputGroup.Text> 
                <AsyncTypeahead
                    id="LocalityName"
                    filterBy={() => true}
                    isLoading={isLoading}
                    labelKey={props.displayFullAddress ? (eachLocation) => `${eachLocation.location}`: (eachLocation) => `${eachLocation.mainLocation}`}
                    minLength={3}
                    maxResults={100}
                    ref={localitySearchInputRef}
                     onKeyDown={event => { 
                         if (event.key === 'Enter') {
                            handleEnterEvent(event.target.value);
                        }else{ 
                            getLocalityAutoSuggestions();
                        }
                      }} 
                    onSearch={getLocalityAutoSuggestions}
                    onChange={(selectedLocality) => {
                        localitySelection(selectedLocality)
                        }
                    }
                    defaultInputValue ={props.defaultAddress ? props.defaultAddress : ''}
                    options={localitySuggestions}
                    placeholder="Type your area name / pincode"
                    selected={localitySelectedList}
                    renderMenuItemChildren = {(eachLocation, index) => {
                       return ( <React.Fragment key={index}>
                        <li className={index == 0 ? "no-gutters active" : "no-gutters"} >
                            <div className="col">
                                <svg width="20" height="20" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11 4a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    <path d="M7.5 4h1v9a.5.5 0 01-1 0V4z"/>
                                </svg>
                                <p>
                                    <span className="d-block text-truncate" title={eachLocation.mainLocation}>{eachLocation.mainLocation}</span>
                                    <small className="m-0"><span className="d-block text-truncate" title={eachLocation.address}>{eachLocation.address}</span></small>
                                </p>
                                <svg className="chevron-right" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z" clipRule="evenodd"/>
                                </svg>
                            </div>
                         </li>
                        </React.Fragment>);
                    }}
                >
                 {(selected) => (
                        <div className="rbt-aux">
                            {!!selected.length && <Loader/>}
                        </div>
                )} 
                </AsyncTypeahead>
                <button className="inner-btn" onClick={handleonClear}>X</button>
                </InputGroup>
                </Form.Group>
            </div>
            {props.displayCurrentLocation && <div className="d-block w-100 mt-2">
                <p id="currentLocation" className="form-text text-muted w-100 mb-0">Current Location: <strong className="text-dark">{localitySelectedName}</strong></p>
            </div>}
        </form>
    )
}

export default LocalitySearchComponent;
