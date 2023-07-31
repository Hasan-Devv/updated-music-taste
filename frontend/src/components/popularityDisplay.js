import React, { useState } from "react";

const PopularityDisplay = ({popularity}) => {
   const [Message, setMessage] = useState(null)
    if (popularity && popularity > 30) {
      setMessage(`test`)
    }
    console.log(Message)

    return (
        <div>
      {popularity !== null && (
        <div>
          <h3>Your popularity score is: {popularity}</h3>
          <h3>{Message}</h3>
        </div>
      )}
    </div>
    );
}

export default PopularityDisplay;