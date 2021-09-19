import './App.css';
import { ThemeProvider } from '@theme-ui/core';
import { swiss } from '@theme-ui/presets';
import { Ships } from './components/ships';

function App() {
  return <>
    <ThemeProvider theme={swiss}>
      <Ships />
    </ThemeProvider>
  </>;
}

export default App;
