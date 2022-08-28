import logo from './logo.svg';
import {useState, useEffect} from "react";
import {Navbar} from './components/Navbar';
import {Setting} from "./components/Setting";
import {AppContext, ContextProvider} from "./context/app-context";
import {DisplayTheme} from "./components/DisplayTheme";
import {ToggleTheme} from "./components/ToggleTheme";
import './App.css';
import {Reducer} from "./components/Reducer";

function App() {
  return (
    <div className="App">

        <ContextProvider>
            <Navbar />
            <hr />
            <Setting/>
            <hr/>
            <DisplayTheme/>
            <ToggleTheme/>
        </ContextProvider>
        <br/>
        <Reducer/>
    </div>
  );
}

export default App;
