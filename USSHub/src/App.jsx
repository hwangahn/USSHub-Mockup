import { useContext } from "react"
import { AuthContext } from "./contexts/authContext" 
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/login"
import { Spin } from "antd";
import ProtectedRoute from "./components/protectedRoute";
import Home from "./components/home";
import "./styles/web.css"
import Outline from "./components/outline";
import Book from "./components/book";
import Chat from "./components/chat";
import Game from "./components/game";
import Connect from "./components/connect";
import Report from "./components/report";


function App() {

  let { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      {
        isLoggedIn !== null ?
        <BrowserRouter>
          <Routes>
            <Route path='/login' Component={Login}></Route>
            <Route Component={ProtectedRoute}>
                <Route path='/' Component={Home}></Route>
                <Route path='/syllabus' Component={Outline}></Route>
                <Route path='/book' Component={Book}></Route>
                <Route path='/chat' Component={Chat}></Route>
                <Route path='/game' Component={Game}></Route>
                <Route path='/connect' Component={Connect}></Route>
                <Route path='/report' Component={Report}></Route>
            </Route>
            <Route path='*' exact Component={Spin}></Route>
          </Routes>
        </BrowserRouter>
        :
        <BrowserRouter>
          <Routes>
            <Route path='*' exact Component={Spin}></Route>
          </Routes>
        </BrowserRouter>
      }
    </>
  )
}

export default App
