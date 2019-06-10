import React, { Component } from 'react';
import { Field } from 'react-final-form';

const Error = ({ name }) => (
  <Field
    name={name}
    subscribe={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span style={{color: 'red'}}>{error}</span> : null
    }
  />
)

export default Error;