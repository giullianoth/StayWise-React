import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Manager from "./pages/Manager/Home"
import CreateEmployee from './pages/Manager/CreateEmployee'
import EditEmployee from './pages/Manager/EditEmployee'
// import EditEmployee from './pages/Employees/Manager/EditEmployee'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gerente' element={<Manager />} />
          <Route path='/gerente/funcionarios/criar' element={<CreateEmployee />} />
          <Route path='/gerente/funcionarios/editar/:id' element={<EditEmployee />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
