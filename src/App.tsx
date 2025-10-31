import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Manager from "./pages/Manager/Home"
import ManagerEmployees from "./pages/Manager/Employees"
import ManagerCreateEmployee from './pages/Manager/CreateEmployee'
import ManagerEditEmployee from './pages/Manager/EditEmployee'
import ManagerRooms from "./pages/Manager/Rooms"
import ManagerCreateRoom from './pages/Manager/CreateRoom'
import ManagerChangeRoomType from './pages/Manager/ChangeRoomType'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gerente' element={<Manager />} />
          <Route path='/gerente/funcionarios' element={<ManagerEmployees />} />
          <Route path='/gerente/quartos' element={<ManagerRooms />} />
          <Route path='/gerente/funcionarios/criar' element={<ManagerCreateEmployee />} />
          <Route path='/gerente/funcionarios/editar/:id' element={<ManagerEditEmployee />} />
          <Route path='/gerente/quartos/criar' element={<ManagerCreateRoom />} />
          <Route path='/gerente/quartos/alterar-tipo/:id' element={<ManagerChangeRoomType />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
