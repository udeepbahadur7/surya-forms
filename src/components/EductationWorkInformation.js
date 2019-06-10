// import React, { useState } from "react";
// import { Field } from "react-final-form";
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import AppBar from "material-ui/AppBar";
// import TextField from "material-ui/TextField";
// import RaisedButton from "material-ui/RaisedButton";
// import Checkbox from "@material-ui/core/Checkbox";

// import Wizard from "./Wizard";
// import Error from "./Error";
// import required from "../utils/required";

// const Condition = ({ when, is, children }) => (
//   <Field name={when} subscription={{ value: true }}>
//     {({ input: { value } }) => (value === is ? children : null)}
//   </Field>
// );

// const EducationWorkInformation = () => {
//   return (
//     <React.Fragment>
//       <div>
//         <label>College or work</label>
//         <div>
//           <label>
//             <Field
//               name="reception"
//               component="input"
//               type="radio"
//               value="delivery"
//             />{" "}
//             Delivery
//           </label>
//           <label>
//             <Field
//               name="reception"
//               component="input"
//               type="radio"
//               value="pickup"
//             />{" "}
//             Pickup
//           </label>
//         </div>
//         <Error name="reception" />
//       </div>
//       <Condition when="reception" is="delivery">
//         <div>
//           <label>Street</label>
//           <Field
//             name="street"
//             component="input"
//             type="text"
//             placeholder="Street Address"
//           />
//           <Error name="street" />
//         </div>
//       </Condition>
//       <Condition when="reception" is="pickup">
//         <div>
//           <label>Pickup Time</label>
//           <Field name="pickupTime" component="select">
//             <option />$
//             {pickupTimes.map(time => (
//               <option key={time} value={time}>
//                 {time}
//               </option>
//             ))}
//           </Field>
//           <Error name="pickupTime" />
//         </div>
//       </Condition>
//     </React.Fragment>
//   );
// };

// export default EducationWorkInformation;
