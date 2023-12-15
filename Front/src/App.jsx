import './App.css'
import {Routes,Route} from "react-router-dom"
import Login from './Views/Login'
import Admin from './Views/Admin'
import Home from "./Views/Home";
import AdminDrinks from './Views/AdminDrinks';
import AdminNewDrinks from './Views/AdminNewDrinks';




function App() {
 

  return (
    <Routes>
      <Route exact path='/' element={<Login />}/>
      <Route exact path ='/admin' element={<Admin />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/admin/drinks" element={<Admin />} />
      <Route exact path='/admin/NewDrinks' element={<AdminNewDrinks />} />
      
    </Routes>
  )
}

export default App
