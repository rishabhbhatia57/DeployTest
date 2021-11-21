import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import CompetetionDetails from "./pages/CompetetionDetails";
import PanellistsInfo from "./pages/PanellistsInfo";
import Platform from "./pages/Platform";
import Prizes from "./pages/Prizes";
import RegistrationInfo from "./pages/RegistrationInfo";
import Spnsors from "./pages/Spnsors";
import Timeline from "./pages/Timeline";
function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li>
              <Link to={"/"} className="nav-link">
                {" "}
                CompetetionDetails{" "}
              </Link>
            </li>
            <li>
              <Link to={"/PanellistsInfo"} className="nav-link">
                PanellistsInfo
              </Link>
            </li>
            <li>
              <Link to={"/Platform"} className="nav-link">
                Platform
              </Link>
            </li>
            <li>
              <Link to={"/Prizes"} className="nav-link">
                Prizes
              </Link>
            </li>
            <li>
              <Link to={"/RegistrationInfo"} className="nav-link">
                RegistrationInfo
              </Link>
            </li>
            <li>
              <Link to={"/Spnsors"} className="nav-link">
                Spnsors
              </Link>
            </li>
            <li>
              <Link to={"/Timeline"} className="nav-link">
                Timeline
              </Link>
            </li>
          </ul>
        </nav>

        {/* <div>
        <Link to="/">CompetetionDetails</Link>
      </div>
      <div>
        <Link to="/PanellistsInfo">PanellistsInfo</Link>
      </div>
      <div>
        <Link to="/Platform">Platform</Link>
      </div>
      <div>
        <Link to="/Prizes">Prizes</Link>
      </div>
      <div>
        <Link to="/RegistrationInfo">RegistrationInfo</Link>
      </div>
      <div>
        <Link to="/Spnsors">Spnsors</Link>
      </div>
      <div>
        <Link to="/Timeline">Timeline</Link>
      </div> */}

        <Routes>
          <Route exact path="/" element={<CompetetionDetails />} />
          <Route exact path="/PanellistsInfo" element={<PanellistsInfo />} />
          <Route exact path="/Platform" element={<Platform />} />
          <Route exact path="/Prizes" element={<Prizes />} />
          <Route
            exact
            path="/RegistrationInfo"
            element={<RegistrationInfo />}
          />
          <Route exact path="/Spnsors" element={<Spnsors />} />
          <Route exact path="/Timeline" element={<Timeline />} />
        </Routes>

        {/* <Routes>
        
        <Route exact path="/">
          <CompetetionDetails />
        </Route>
        <Route path="/PanellistsInfo">
          <PanellistsInfo />
        </Route>
        <Route path="/Platform">
          <Platform />
        </Route>
        <Route path="/Prizes">
          <Prizes />
        </Route>
        <Route path="/RegistrationInfo">
          <RegistrationInfo />
        </Route>
        <Route path="/Spnsors">
          <Spnsors />
        </Route>
        <Route path="/Timeline">
          <Timeline />
        </Route>
      </Routes> */}
      </div>
    </Router>
  );
}

export default App;
