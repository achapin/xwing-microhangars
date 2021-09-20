import './App.css';
import { ThemeProvider } from '@theme-ui/core';
import { theme } from './theme'
import { Ships } from './components/ships';

function App() {
  return <>
    <ThemeProvider theme={theme}>
      <Ships />
    </ThemeProvider>
  </>;
}

export default App;
