import React, {useState} from "react";
import { Field } from "react-final-form";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Checkbox from "@material-ui/core/Checkbox";

import Wizard from "./Wizard";
import Error from "./Error";  
import required from "../utils/required";

const Condition = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
);

const LastEductation = () => {
  const [married, setMarried] = useState(false);
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Family Introduction" />
        <Wizard.Page whatthehell={"this should be outputed"}>
          <div>
            <Field name="collegeName" validate={required}>
              {({ input, meta }) => (
                <React.Fragment>
                  
                  <TextField
                    label="School/College Name"
                    hintText="School/College Name"
                    floatingLabelText="School/College Name"
                    onChange={input.onChange}
                    defaultValue={input.value}
                    autoFocus={true}
                  />
                </React.Fragment>
              )}
            </Field>
            <Error name="collegeName" />
          </div>

          <div>
            <Field name="collegeAddress" validate={required}>
              {({ input, meta }) => (
                <React.Fragment>
                  <TextField
                    label="School/College Address"
                    hintText="School/College Address"
                    floatingLabelText="School/College Address"
                    onChange={input.onChange}
                    defaultValue={input.value}
                  />
                </React.Fragment>
              )}
            </Field>
            <Error name="collegeAddress" />
          </div>

          <div>
            <Field name="collegePhoneNumber" validate={required}>
              {({ input, meta }) => (
                <React.Fragment>
                  <TextField
                    label="School/College Phone No"
                    hintText="School/College Phone No"
                    floatingLabelText="School/College Phone No"
                    onChange={input.onChange}
                    defaultValue={input.value}
                  />
                </React.Fragment>
              )}
            </Field>
            <Error name="collegePhoneNumber" />
          </div>

          
        </Wizard.Page>
      </React.Fragment>
    </MuiThemeProvider>
  );
};

export default LastEductation;
