import './App.css'
import {Routes,Route} from "react-router-dom"
import Login from './Views/Login'
import Admin from './Views/admin'




function App() {
 

  return (
    <Routes>
      <Route exact path='/' element={<Login />}/>
      <Route exact path ='/admin' element={<Admin />} />
    </Routes>
  )
}

export default App
