import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/topbar";
import Sidebar from "./scenes/global/sidebar"
import Dashboard from "./scenes/dashboard";
import TeamProfile from "./scenes/team";
import AboutUs from "./scenes/About";
import TimeLine from "./scenes/issues";
import Pull from "./scenes/pull";
import Commits from "./scenes/commits";

import {Route, Routes} from "react-router-dom";
import {useState} from "react";
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const options = [
    {value: "Monthly", label: "Monthly"},
    {value: "Yearly", label: "Yearly"},
    //<Dropdown placeHolder="Select..." options={options}/>
    ];
  return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className="app">
                 <Sidebar isSidebar={isSidebar} />
                <main className= "content">
                    <Topbar/>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/team" element={<TeamProfile />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/issues" element={<TimeLine />} />
                        <Route path="/commits" element={<Commits />} />
                        <Route path="/pull" element={<Pull />} />
                    </Routes>
                </main>
            </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
  );
}

export default App;
