import React, {useState} from "react";
import { Field } from "react-final-form";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "@material-ui/core/TextField";
import RaisedButton from "material-ui/RaisedButton";

import Wizard from "./Wizard";
import Error from "./Error";
import required from "../utils/required";
import { DatePicker } from "material-ui-pickers";

// Picker
// import DateFnsUtils from "@date-io/date-fns";
// import {
//   MuiPickersUtilsProvider,
//   DatePicker,
//   TimePicker
// } from "material-ui-pickers";

// function DatePickerWrapper(props) {
//   const {
//     input: { name, onChange, value, ...restInput },
//     meta,
//     ...rest
//   } = props;
//   const showError =
//     ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
//     meta.touched;

//   return (
//     <DatePicker
//       {...rest}
//       name={name}
//       helperText={showError ? meta.error || meta.submitError : undefined}
//       error={showError}
//       inputProps={restInput}
//       onChange={onChange}
//       value={value === "" ? null : value}
//     />
//   );
// }

// function TimePickerWrapper(props) {
//   const {
//     input: { name, onChange, value, ...restInput },
//     meta,
//     ...rest
//   } = props;
//   const showError =
//     ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
//     meta.touched;

//   return (
//     <TimePicker
//       {...rest}
//       name={name}
//       helperText={showError ? meta.error || meta.submitError : undefined}
//       error={showError}
//       inputProps={restInput}
//       onChange={onChange}
//       value={value === "" ? null : value}
//     />
//   );
// }

const PersonalInformation = () => {
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <React.Fragment>
      <div>
        <Field name="fullName" validate={required}>
          {({ input, meta }) => (
            <React.Fragment>
              {/* <label>Full Name</label> */}
              <TextField
                label="Full Name"
                hintText="Full Name"
                floatingLabelText="Full Name"
                onChange={input.onChange}
                defaultValue={input.value}
                autoFocus={true}
              />
            </React.Fragment>
          )}
        </Field>
        <Error name="phoneNumber" />
      </div>

      <div>
        <Field name="phoneNumber" validate={required}>
          {({ input, meta }) => (
            <React.Fragment>
              {/* <label>Phone Number</label> */}
              <TextField
                id="standard-require"
                label="Phone Number"
                hintText="Phone Number"
                floatingLabelText="Phone Number"
                onChange={input.onChange}
                defaultValue={input.value}
                autoFocus={false}
                margin="dense"
              />
            </React.Fragment>
          )}
        </Field>
        <Error name="phoneNumber" />
      </div>

      <div style={{paddingLeft: "54px"}}>
      <Field name="dob" validate={required}>
      {({ input, meta }) => (
        <DatePicker
        keyboard
        clearable
        label="Birthday"
        value={selectedDate}
        onChange={input.onChange}
        animateYearScrolling={false}
        defaultValue={input.value}
        onInputChange={input.onChange}
      />
      )}
      </Field>
      </div>
    </React.Fragment>
  );
};

export default PersonalInformation;
