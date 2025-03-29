import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoginPage } from "./pages/LoginPage/LoginPage"
import { MainPage } from "./pages/MainPage/MainPage"


function App() {

  return (
    <>
    <div className="App">
        <div className="container">
          <BrowserRouter>
            <Routes>
              <Route element={<LoginPage/>} path="/"/>
              <Route element={<MainPage/>} path="/main-page"/>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App
