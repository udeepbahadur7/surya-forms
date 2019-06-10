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

const TravellingCountry = () => {
  const [married, setMarried] = useState(false);
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Travelling Country (inviting person information)" />
        <Wizard.Page>
          <div>
            <Field name="fullName" validate={required}>
              {({ input, meta }) => (
                <React.Fragment>
                  <label>Full Name</label>
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
            <Error name="fullName" />
          </div>

          <div>
            <Field name="fullAddress" validate={required}>
              {({ input, meta }) => (
                <React.Fragment>
                  <label>Full Name</label>
                  <TextField
                    label="Full Address"
                    hintText="Full Address"
                    floatingLabelText="Full Address"
                    onChange={input.onChange}
                    defaultValue={input.value}
                    autoFocus={true}
                  />
                </React.Fragment>
              )}
            </Field>
            <Error name="fullAddress" />
          </div>

          <div>
            <Field name="phoneNumber" validate={required}>
              {({ input, meta }) => (
                <React.Fragment>
                  <label>Phone Number with Country Code</label>
                  <TextField
                    label="Phone Number"
                    hintText="Phone Number"
                    floatingLabelText="Phone Number"
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
            <Field name="relationship" validate={required}>
              {({ input, meta }) => (
                <React.Fragment>
                  <label>Phone Number with Country Code</label>
                  <TextField
                    label="Relationship with applicant"
                    hintText="specify your relationship"
                    floatingLabelText="relationship"
                    onChange={input.onChange}
                    defaultValue={input.value}
                    autoFocus={true}
                  />
                </React.Fragment>
              )}
            </Field>
            <Error name="relationship" />
          </div>




          

          
        </Wizard.Page>
      </React.Fragment>
    </MuiThemeProvider>
  );
};

export default TravellingCountry;
