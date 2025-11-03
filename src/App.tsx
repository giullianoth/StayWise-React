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
import ManagerAdditionalServices from './pages/Manager/AdditionalServices'
import ManagerCreateAdditionalService from './pages/Manager/CreateAdditionalService'
import ManagerEditAdditionalService from './pages/Manager/EditAdditionalService'
import Receptionist from "./pages/Receptionist/Home"
import ReceptionistReservations from "./pages/Receptionist/Reservations"
import ReceptionistCreateReservation from "./pages/Receptionist/CreateReservation"
import ReceptionistEditReservation from "./pages/Receptionist/EditReservation"
import ReceptionistCheckin from "./pages/Receptionist/Checkin"
import ReceptionistConfirmCheckOut from "./pages/Receptionist/ConfirmCheckOut"
import ReceptionistGuests from "./pages/Receptionist/Guests"
import ReceptionistCreateGuest from "./pages/Receptionist/CreateGuest"
import ReceptionistEditGuest from "./pages/Receptionist/EditGuest"
import Housekeeping from "./pages/Housekeeping/Home"
import HousekeepingRoomStatus from "./pages/Housekeeping/RoomStatus"
import HousekeepingChangeRoomStatus from "./pages/Housekeeping/ChangeRoomStatus"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gerente' element={<Manager />} />
          <Route path='/recepcionista' element={<Receptionist />} />
          <Route path='/governanca' element={<Housekeeping />} />
          <Route path='/gerente/funcionarios' element={<ManagerEmployees />} />
          <Route path='/gerente/quartos' element={<ManagerRooms />} />
          <Route path='/gerente/servicos-adicionais' element={<ManagerAdditionalServices />} />
          <Route path='/recepcionista/reservas' element={<ReceptionistReservations />} />
          <Route path='/recepcionista/check-in' element={<ReceptionistCheckin />} />
          <Route path='/recepcionista/hospedes' element={<ReceptionistGuests />} />
          <Route path='/governanca/status-quartos' element={<HousekeepingRoomStatus />} />
          <Route path='/gerente/funcionarios/criar' element={<ManagerCreateEmployee />} />
          <Route path='/gerente/quartos/criar' element={<ManagerCreateRoom />} />
          <Route path='/gerente/servicos-adicionais/criar' element={<ManagerCreateAdditionalService />} />
          <Route path='/recepcionista/reservas/criar' element={<ReceptionistCreateReservation />} />
          <Route path='/recepcionista/hospedes/criar' element={<ReceptionistCreateGuest />} />
          <Route path='/gerente/funcionarios/editar/:id' element={<ManagerEditEmployee />} />
          <Route path='/gerente/quartos/alterar-tipo/:id' element={<ManagerChangeRoomType />} />
          <Route path='/gerente/servicos-adicionais/editar/:id' element={<ManagerEditAdditionalService />} />
          <Route path='/recepcionista/reservas/editar/:id' element={<ReceptionistEditReservation />} />
          <Route path='/recepcionista/hospedes/editar/:id' element={<ReceptionistEditGuest />} />
          <Route path='/recepcionista/confirmar-check-out/:id' element={<ReceptionistConfirmCheckOut />} />
          <Route path='/governanca/status-quartos/alterar-status/:id' element={<HousekeepingChangeRoomStatus />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
