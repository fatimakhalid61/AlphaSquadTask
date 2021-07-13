import "./App.css";
import './styles/output.css'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./UIPages/HomePage";
import Case_Studies from "./UIPages/Case_Studies";
import Case_Studies_Inner from "./UIPages/Case_Studies_Inner";
import Pricing from "./UIPages/Pricing";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Pricing" component={Pricing}></Route>
        <Route path="/Case_Studies" component={Case_Studies}></Route>
        <Route path="/Case_Studies_Inner" component={Case_Studies_Inner}></Route>
        <Route exact path="/" component={HomePage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;