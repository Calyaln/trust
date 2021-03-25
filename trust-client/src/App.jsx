import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Recommand from "./pages/Recommand";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/" component={Recommand} />
      </Switch>
    </div>
  );
}

export default App;
