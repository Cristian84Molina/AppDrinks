import './App.css'
import {Routes,Route} from "react-router-dom"
import Login from './Views/Login'
import Admin from './Views/Admin'
import Home from "./Views/Home";




function App() {
 

  return (
    <Routes>
      <Route exact path='/' element={<Login />}/>
      <Route exact path ='/admin' element={<Admin />} />
      <Route exact path="/home" element={<Home />} />
    </Routes>
  )
}

export default App
