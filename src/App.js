import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function home() {
  return <h1>Welcome to the page</h1>  
}

function about() {
  return <h1>Welcome to the about page</h1>  
}

function contact() {
  return <h1>Welcome to the contact page</h1>  
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={home} />
        <Route path='/about' exact component={about} />
        <Route path='/contact' exact component={contact} />
      </Switch>
    </Router>
  )
}

export default App;
