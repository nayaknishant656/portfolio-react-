import logo from './logo.svg';
import './App.css';
import Header from "./components/header/index";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";
import Twiiter from "./components/twiiter/twiter"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Switch } from "react-router";
import Main from "./components/main/main"; 
import Timeline from './components/timeline/timeline';
import Blogs from './components/blogs/blogs';
import Gallery from './components/gallery/gallery';
import Asymmetry from './components/asymmetry/asymmetry';
function App() {
  return (
   <>
    <Header/>
      <Switch>
         <Route exact path="/" render={props => <Main />} />
         <Route exact path="/Body" render={props => <Body />} />
         <Route exact path="/Twitter" render={props => <Twiiter />} />
          <Route exact path="/Timeline" render={props => <Timeline />} />
          <Route exact path="/Blogs" render={props => <Blogs />} />
          <Route exact path="/Gallery" render={props => <Gallery/>} />
          <Route exact path="/videos" render={props => <Asymmetry />} />
        </Switch>
       </>
  );
}
export default App;