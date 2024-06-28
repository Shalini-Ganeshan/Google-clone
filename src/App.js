import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme";
import Home from "./components/Home";
import SearchPage from "./components/SearchPage";

const App = () => {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home toggleTheme={toggleTheme} />} />
            <Route path="/search" element={<SearchPage toggleTheme={toggleTheme} />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;

