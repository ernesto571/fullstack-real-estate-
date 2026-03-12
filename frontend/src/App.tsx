import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";


function App() {

  return (
      <>
        <BrowserRouter>
          <div>
            <Navbar />
            <Routes>
              <Route path="/"  element={<LandingPage/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </>
    )
}

export default App
