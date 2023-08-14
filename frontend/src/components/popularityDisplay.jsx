// import React, { useState, useEffect } from "react";

// const PopularityDisplay = (props) => {
//   // const [Message, setMessage] = useState(null);
//   // const popularity = props.popularity
//   console.log(props.popularity)

//   useEffect(() => {
//     // This code will run whenever the popularity prop changes

//     console.log("Popularity prop has changed:", props.popularity);

//    // Perform any additional actions or updates based on the new popularity value
//     // if (popularity && popularity > 30) {
//     //   setMessage(`test`);
//     // } else {
//     //   setMessage("test 2"); // Reset the message if popularity is not greater than 30
//     // }

//     //Clean up any resources if needed
//     return () => {
//       // This function will run when the component is unmounted or the popularity prop changes again
//       console.log("Component is unmounted or popularity prop changed again", props.popularity);
//     };
//   }, [props.popularity]); // The useEffect will only run when the popularity prop changes

//   // console.log(Message);

//   return (
//     <div>
//       {/* {popularity !== null && (  */}
//         <div>
//           <h3>Your popularity score is: {props.popularity}</h3>
//            {/* <h3>Your message: {Message}</h3> */}
//         </div>
//        {/* )}  */}
//     </div>
//   );
// };

// export default PopularityDisplay;
