import React from 'react';
import HayperMarket from "./components/HayperMarket"
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset, } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import customTheme from './assets/customTheme';

import { Router } from 'react-router-dom';
import history from './utils/history'
import './assets/webFonts/css/fontiran.css'
import "./app.css"
// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  return (
    <div >
      <Router history={history}>
        <ThemeProvider theme={customTheme}>
          <StylesProvider jss={jss}>
              <HayperMarket />
          </StylesProvider>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
