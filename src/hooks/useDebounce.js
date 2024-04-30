import { useEffect, useState } from "react"

export const useDebounce = ({initialValue , waitTime}) => {

    const [debounceValue,setDebounceValue] = useState('');


    useEffect(() => {
        let timerId;
        if(debounceValue != initialValue) {
            timerId = setTimeout(()=>{
                setDebounceValue(initialValue);
            },waitTime);

        }

        return ()=>{
            clearTimeout(timerId);
        }
        

    },[initialValue,waitTime]);

    return [debounceValue];

    
}