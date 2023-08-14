import React from "react";

const DataDisplay = (props) => {

    console.log(props.prodata)
    return(
        <h1>{props.prodata}</h1>
        
    )
}

export default DataDisplay