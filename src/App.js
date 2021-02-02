import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Start from './components/Start';
import Fundacje from './components/Fundacje';
import ONas from './components/ONas';
import OCoChodzi from './components/OCoChodzi';
import Kontakt from "./components/Kontakt";
import Login from "./components/start/Login";
import SignUp from "./components/start/SignUp";

function Home() {
  return (
  <Start/>
  );
}

function Purpose() {
  return (
  <OCoChodzi/>
  );
}

function Ngos() {
  return (
    <Fundacje/>
  );
}

function About() {
  return (
    <ONas/>
  );
}

function Contact() {
  return (
    <Kontakt/>
    );
}

function App() {
  return (
    <Router>
      <div>
        <Link to="/login">Zaloguj się</Link>
        <Link to="/signup">Załóż konto</Link>
        <nav>
          <ul>
            <li>
              <Link to="/">Start</Link>
            </li>
            <li>
              <Link to="/purpose">O co chodzi?</Link>
            </li>
            <li>
              <Link to="/about">O nas</Link>
            </li>
            <li>
              <Link to="/ngos">Fundacja i organizacje</Link>
            </li>
            <li>
              <Link to="/contact">Kontakt</Link>
            </li>
          </ul>
        </nav>

        <Switch>
        <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/purpose">
            <Purpose />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/ngos">
            <Ngos />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
