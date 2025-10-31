import type { ChangeEvent, FormEvent } from "react"
import styles from "../../../components/Dashboard/Dashboard.module.css"
import Dashboard from "../../../components/Dashboard"
import Header from "../../../components/Header"
import ReservationForm from "../../../components/Form/ReservationForm"
import Menu from "../../../components/Menu"
import ReceitopnistMenu from "../Menu"

const EditReservation = () => {
    const handleChangeData = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        event
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
    }
    return (
        <Dashboard>
            <Menu employeeRole="Recepcionista">
                <ReceitopnistMenu />
            </Menu>

            <section className={styles.dashboard__container}>
                <Header target="/recepcionista" />

                <section>
                    <header className={styles.dashboard__heading}>
                        <h3>Nova reserva</h3>
                    </header>

                    <ReservationForm
                        action="edit"
                        onChange={handleChangeData}
                        onSubmit={handleSubmit} />
                </section>
            </section>
        </Dashboard>
    )
}

export default EditReservation