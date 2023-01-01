import { useState } from 'react'
import { Header } from "@components/Header"
import { GlobalStyles } from "./styles/default"
import { Routes, Route, Outlet } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { ActorContextProvider } from "./context/ActorContext"
import { MovieContextProvider } from "./context/MovieContext"


function App() {

  return (
    <MovieContextProvider>
      <ActorContextProvider>
        <div className="App">
          <Header />
          <Home />
        </div>
      </ActorContextProvider>
    </MovieContextProvider>
  )
}

export default App
