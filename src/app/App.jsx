import { Header } from "@components/Header"
import { ActorContextProvider } from "../entities/actor/model/store/ActorContext"
import { MovieContextProvider } from "../entities/movie/model/store/MovieContext"
import { Home } from "../pages/Home/Home"


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
