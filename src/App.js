import logo from './logo.svg';
import './App.css';
import Header from "./components/header/index";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Switch } from "react-router";
import Main from "./components/main/main"; 

function App() {
  return (
   <>
    <Header/>
      <Switch>
         <Route exact path="/" render={props => <Body />} />
         <Route exact path="/Body" render={props => <Body />} />
        </Switch>
        <Footer/> </>
  );
}
export default App;