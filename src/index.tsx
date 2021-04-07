import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./i18next";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import Loading from "./components/Loading";

const theme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: '#27AE60',
        '& .MuiPickersToolbarText-toolbarBtnSelected': {
          color: 'white',
        },
        '& .MuiPickersToolbarText-toolbarTxt': {
          color: '#F3F3F3',
        },
      },
    },
    MuiPickersClock: {
      clock: {
        '& .MuiPickersClockNumber-clockNumberSelected': {
          color: 'white',
        },
      },
    },
    MuiPickersDay: {
      day: {
        color: '#141414',
      },
      daySelected: {
        backgroundColor: '#27AE60',
        color: 'white',
      },
      dayDisabled: {
        color: '#B3B6BA',
      },
      current: {
        color: '#27AE60',
      },
    },
    MuiPickersModal: {
      dialogAction: {
        color: '#B3B6BA',
      },
    },
  },
  palette: {
    primary: {
      light: '#7DCEA0',
      main: '#27AE60',
      dark: '#1F7042',
    },
    secondary: {
      main: '#E9F7EF',
      dark: '#BEEBD1',
    },
    info: {
      main: '#28759A',
    },
    error: {
      main: '#C84F4F',
    },
    grey: {
      50: '#F3F3F3', //background
      100: '#E6E7E8', //disabled
      200: '#CCCFD1', //border
      300: '#B3B6BA',
      400: '#80868C', //icon
      500: '#4D565F',
      600: '#000D1A', //black
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
