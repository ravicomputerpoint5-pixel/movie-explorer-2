import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import MovieDetail from './pages/MovieDetail'


function App() {

  return (
    <>
      <h1 className="bg-dark text-light p-3">Movie Explorer</h1>
      <div className="container">
        <BrowserRouter>
          <Link to="/" className="btn btn-dark">Home</Link>
          <hr />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/movie/:id" element={<MovieDetail />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
