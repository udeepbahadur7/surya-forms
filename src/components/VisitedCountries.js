import React, { useState } from "react";
import { Field } from "react-final-form";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Checkbox from "@material-ui/core/Checkbox";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";
import IconButton from "material-ui/IconButton";

import Wizard from "./Wizard";
import Error from "./Error";
import required from "../utils/required";
import { Icon } from "@material-ui/core";

const Condition = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
);

const VisitedCountry = props => {
  const { push, pop } = props;
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <AppBar title="Countries Visited in last 5 years" />
        <Wizard.Page>
          <div>
            <FieldArray name="countries">
              {({ fields }) => (
                <div>
                  {fields.map((name, index) => (
                    <div key={name}>
                      <div>
                        <label>Country</label>
                        <Field
                          name={`${name}`}
                          component="input"
                          required={true}
                        />
                        <RaisedButton
                          label="Remove"
                          primary={true}
                          onClick={() => fields.remove(index)}
                        />
                      </div>
                    </div>
                  ))}

                  <RaisedButton
                    label="Add"
                    primary={true}
                    onClick={() => fields.push("")}
                  />
                </div>
              )}
            </FieldArray>
          </div>
        </Wizard.Page>
      </React.Fragment>
    </MuiThemeProvider>
  );
};

export default VisitedCountry;
