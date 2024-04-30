import React from "react";

const CustomNote =({notes}) => {
    return (
        <React.Fragment>
            <div className="d-flex">
                <p className="text-warning mb-0 font-12">Note:</p>
                <ul className="list-unstyled m-0 p-0 ms-2">
                    {notes.map(note=>{
                    return(<li className="small py-0 ps-0">{note}</li>)
                })}
                </ul>
            </div>
        </React.Fragment>
    )
}
export default CustomNote;