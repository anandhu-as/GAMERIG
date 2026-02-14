import { Route, Routes } from "react-router-dom"
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material"
import NavBar from "./Components/NavBar"
import Store from "./Pages/Store"
import About from "./Pages/About"
import GameDetail from "./Components/GameDetail"

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000000',
      paper: '#121212',
    },
    text: {
      primary: '#ffffff',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>

      <CssBaseline />

      <NavBar />

      {/**routesss..... */}
      <Box sx={{ minHeight: '100vh', color: 'white' }}>
        <Routes>
        
          <Route path="/" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/details/:id" element={<GameDetail/>}/>

        </Routes>
      </Box>
    </ThemeProvider>
  )
}

export default App