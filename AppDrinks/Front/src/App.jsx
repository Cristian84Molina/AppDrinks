import './App.css'
import {Routes,Route} from "react-router-dom"
import Login from './Views/Login'




function App() {
 

  return (
    <Routes>
      <Route exact path='/' element={<Login />}/>
    </Routes>
  )
}

export default App
