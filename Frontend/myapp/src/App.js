import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/topbar";
import Sidebar from "./scenes/global/sidebar"
//import Dashboard from "./scenes/dashboard";
// import Team Profile "./scenes/team";
//import About Us "./scenes/About";
import TimeLine from "./scenes/issues";
//import Form from "./scenes/form";
import Line from "./scenes/line";
import Commits from "./scenes/commits";

import {Route, Routes} from "react-router-dom";
import {useState} from "react";
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <div className="app">
                 <Sidebar isSidebar={isSidebar} />
                <main className= "content">
                    <Topbar/>
                    <Routes>
                        {/*<Route path="/" element={<Dashboard />} />*/}
                        {/*<Route path="/team" element={<Team />} />*/}
                        {/*<Route path="/contacts" element={<Contacts />} />*/}
                        {/*<Route path="/form" element={<Form />} />*/}
                        <Route path="/bar" element={<TimeLine />} />
                        <Route path="/commits" element={<Commits />} />
                        <Route path="/line" element={<Line />} />
                    </Routes>
                </main>
            </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
  );
}

export default App;
