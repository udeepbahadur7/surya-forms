import React, { useState } from "react";
import { Field } from "react-final-form";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Checkbox from "@material-ui/core/Checkbox";

import Wizard from "./Wizard";
import Error from "./Error";
import required from "../utils/required";
import { InputLabel } from "@material-ui/core";
import { DatePicker } from "material-ui-pickers";

const Condition = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
);

const FamilyInformationForm =   () => {
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <React.Fragment>
      <div>
        <Field name="fatherName" validate={required}>
          {({ input, meta }) => (
            <React.Fragment>
              <TextField
                label="Father's Name"
                hintText="Father's Name"
                floatingLabelText="Father's Name"
                onChange={input.onChange}
                defaultValue={input.value}
                autoFocus={true}
              />
            </React.Fragment>
          )}
        </Field>
        <Error name="fatherName" />
      </div>

      <div>
        <Field name="motherName" validate={required}>
          {({ input, meta }) => (
            <React.Fragment>
              <TextField
                label="Mother's Name"
                hintText="Mother's Name"
                floatingLabelText="Mother's Name"
                onChange={input.onChange}
                defaultValue={input.value}
              />
            </React.Fragment>
          )}
        </Field>
        <Error name="motherName" />
      </div>

      <div>
        <Field name="married">
          {({ input, meta }) => (
            <React.Fragment>
              <InputLabel>Married</InputLabel>
              <Checkbox onChange={input.onChange} defaultValue={input.value} />
            </React.Fragment>
          )}
        </Field>
        <Error name="married" />
      </div>

      <Condition when="married" is={true}>
        <div>
          <Field name="spouseName" validate={required}>
            {({ input, meta }) => (
              <TextField
                label="Spouse's Name"
                hintText="Spouse's Name"
                floatingLabelText="Spouse's Name"
                onChange={input.onChange}
                defaultValue={input.value}
              />
            )}
          </Field>
          <Error name="spouseName" />
        </div>

        <div>
          <Field name="spouseDOB" validate={required}>
            {({ input, meta }) => (
              <DatePicker
                keyboard
                clearable
                label="Spouse Date of Birthday"
                value={selectedDate}
                onChange={input.onChange}
                animateYearScrolling={false}
                defaultValue={input.value}
                onInputChange={input.onChange}
              />
            )}
          </Field>
          <Error name="spouseDOB" />
        </div>

        <div>
          <Field name="spouseAddress" validate={required}>
            {({ input, meta }) => (
              <TextField
                label="Spouse's Address"
                hintText="Spouse's Address"
                floatingLabelText="Spouse's Address"
                onChange={input.onChange}
                defaultValue={input.value}
              />
            )}
          </Field>
          <Error name="spouseAddress" />
        </div>
      </Condition>
    </React.Fragment>
  );
};

export default FamilyInformationForm;
