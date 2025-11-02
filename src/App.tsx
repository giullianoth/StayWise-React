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
import Receptionist from "./pages/Receptionist/Home"
import ReceptionistReservations from "./pages/Receptionist/Reservations"
import ReceptionistCreateReservation from "./pages/Receptionist/CreateReservation"
import ReceptionisEditReservation from "./pages/Receptionist/EditReservation"
import ReceptionisCheckin from "./pages/Receptionist/Checkin"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gerente' element={<Manager />} />
          <Route path='/recepcionista' element={<Receptionist />} />
          <Route path='/gerente/funcionarios' element={<ManagerEmployees />} />
          <Route path='/gerente/quartos' element={<ManagerRooms />} />
          <Route path='/recepcionista/reservas' element={<ReceptionistReservations />} />
          <Route path='/recepcionista/check-in' element={<ReceptionisCheckin />} />
          <Route path='/gerente/funcionarios/criar' element={<ManagerCreateEmployee />} />
          <Route path='/gerente/quartos/criar' element={<ManagerCreateRoom />} />
          <Route path='/recepcionista/reservas/criar' element={<ReceptionistCreateReservation />} />
          <Route path='/gerente/funcionarios/editar/:id' element={<ManagerEditEmployee />} />
          <Route path='/gerente/quartos/alterar-tipo/:id' element={<ManagerChangeRoomType />} />
          <Route path='/recepcionista/reservas/editar/:id' element={<ReceptionisEditReservation />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
