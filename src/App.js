import React from "react"
import { Router } from "@reach/router"
import Login from "./service/login"
import Home from "./pages/home"
import Nav from "./components/Nav"
import Info from "./pages/myinfo"
import Details from "./pages/details"

function App() {
  return (
    <div className="App">
      <Router>
        <Nav
          path="/"
          links={[
            { url: "/login", component: "login" },
            { url: "/home", component: "home" },
            { url: "/info", component: "info" },
            { url: "/detail", component: "detail" }
          ]}
        />
        <Login path="/login" />
        <Home path="/home" />
        <Info path="/info" />
        <Details path="/detail" />
      </Router>
    </div>
  )
}

export default App
