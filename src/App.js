import React from 'react';
import logo from './logo.svg';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import amber from '@material-ui/core/colors/amber'
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';
import './App.css';
import SuryaForm from './components/SuryaForm';

const theme = createMuiTheme({
  palette: {
    primary: amber,
  },
});
function App() {
  return (
    <div className="App">
    <MuiThemeProvider theme={theme}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <SuryaForm />
      </MuiPickersUtilsProvider>
    </MuiThemeProvider>
    </div>
  );
}

export default App;
