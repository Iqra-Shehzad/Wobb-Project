import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme";
import HomePage from "./pages/HomePage";

function App() {
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <HomePage />
      </ThemeProvider>    
    </>
  )
}

export default App;
