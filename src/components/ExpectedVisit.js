import React from "react";
import { Field } from "react-final-form";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

import Wizard from "./Wizard";
import Error from "./Error";
import required from "../utils/required";
import amber from '@material-ui/core/colors/amber'

// Picker
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  DatePicker,
  TimePicker
} from "material-ui-pickers";

function DatePickerWrapper(props) {
  const {
    input: { name, onChange, value, ...restInput },
    meta,
    ...rest
  } = props;
  const showError =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
    meta.touched;

  return (
    <DatePicker
      {...rest}
      name={name}
      helperText={showError ? meta.error || meta.submitError : undefined}
      error={showError}
      inputProps={restInput}
      onChange={onChange}
      value={value === "" ? null : value}
    />
  );
}

function TimePickerWrapper(props) {
  const {
    input: { name, onChange, value, ...restInput },
    meta,
    ...rest
  } = props;
  const showError =
    ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) &&
    meta.touched;

  return (
    <TimePicker
      {...rest}
      name={name}
      helperText={showError ? meta.error || meta.submitError : undefined}
      error={showError}
      inputProps={restInput}
      onChange={onChange}
      value={value === "" ? null : value}
    />
  );
}

const ExpectedVisit = () => {
  return (
    
      <React.Fragment>
        <AppBar title="When you want to visit?" position="static" color={amber} />
        <Wizard.Page>

          <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Field
                name="dateFrom"
                component={DatePickerWrapper}
                margin="normal"
                label="Date From"
                validate={required}
              />
            </MuiPickersUtilsProvider>
          </div>
          <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Field
                name="dateTo"
                component={DatePickerWrapper}
                margin="normal"
                label="Date To"
                validate={required}
              />
            </MuiPickersUtilsProvider>
          </div>
        </Wizard.Page>
      </React.Fragment>
    
  );
};

export default ExpectedVisit;
