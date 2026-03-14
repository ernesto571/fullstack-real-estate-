import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import { Toaster } from "react-hot-toast";


function App() {

  return (
      <>
        <BrowserRouter>
          <div>
            <Navbar />
            <Routes>
              <Route path="/"  element={<LandingPage/>}/>
            </Routes>
            <Toaster
              position="bottom-center"
              toastOptions={{
                // Default options for all toasts
                duration: 4000,
                style: {
                  background: '#1f2937', // dark gray background
                  color: '#fff',
                  padding: '16px',
                  borderRadius: '10px',
                  fontSize: '14px',
                },
                
                // Success toast styling
                success: {
                  style: {
                    background: '#059669', // emerald-600
                  },
                  iconTheme: {
                    primary: '#fff',
                    secondary: '#059669',
                  },
                },
                
                // Error toast styling
                error: {
                  style: {
                    background: '#dc2626', // red-600
                  },
                  iconTheme: {
                    primary: '#fff',
                    secondary: '#dc2626',
                  },
                },
                
                // Custom icon (your logo)
                icon:  <img src="https://res.cloudinary.com/dsljbxkfy/image/upload/v1773312096/estate-logo_cmlseg.png" alt="logo" className="w-20 h-10" />,
              }}
            />
          </div>
        </BrowserRouter>
      </>
    )
}

export default App
