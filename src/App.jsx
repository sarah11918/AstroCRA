import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import { Link, Switch, Route } from "react-router-dom"
import Home from "./Home.jsx"
import Recent from "./Recent.jsx"
import Notable from "./Notable.jsx"
import Baywalk from "./Baywalk.jsx"
import Regions from "./Regions.jsx"

const Appz = () => {

  return (

    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/recent">Recent</Link>
        <Link to="/notable">Notable</Link>
        <Link to="/baywalk">Species List</Link>
        <Link to="/regions">Find a Region ID</Link>
      </nav>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/recent"><Recent /></Route>
        <Route exact path="/notable"><Notable /></Route>
        <Route exact path="/baywalk"><Baywalk /></Route>
        <Route exact path="/regions"><Regions /></Route>
      </Switch>
    </div>
  
  );
}


export default App = () => {

 return (
  <Router>
    <Appz />
    <p>slkfjd</p>
  </Router>
);

}

// ReactDOM.render(
//   <Router>
//     <App/>
//   </Router>,
//   document.getElementById('root')
// );
