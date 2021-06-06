import React from 'react';
import HayperMarket from "./components/HayperMarket"
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset, } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import customTheme from './assets/customTheme';
import './assets/webFonts/css/fontiran.css'

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function App() {
  return (
    <div >
      <ThemeProvider theme={customTheme}>
        <StylesProvider jss={jss}>
          <div >
            <HayperMarket />
          </div>
        </StylesProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
