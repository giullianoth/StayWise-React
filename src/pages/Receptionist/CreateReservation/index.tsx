import type { ChangeEvent, FormEvent } from "react"
import styles from "../../../components/Dashboard/Dashboard.module.css"
import Dashboard from "../../../components/Dashboard"
import ReceitopnistMenu from "../Menu"
import Menu from "../../../components/Menu"
import Header from "../../../components/Header"
import ReservationForm from "../../../components/Form/ReservationForm"

const CreateReservation = () => {
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
                        action="create"
                        onChange={handleChangeData}
                        onSubmit={handleSubmit} />
                </section>
            </section>
        </Dashboard>
    )
}

export default CreateReservation