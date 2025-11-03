import type { ChangeEvent, FormEvent } from "react"
import styles from "../../../components/Dashboard/Dashboard.module.css"
import Dashboard from "../../../components/Dashboard"
import Menu from "../../../components/Menu"
import Header from "../../../components/Header"
import HousekeepingMenu from "../Menu"
import RoomForm from "../../../components/Form/RoomForm"

const ChangeRoomStatus = () => {
    const handleChangeData = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        event
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
    }

    return (
        <Dashboard>
            <Menu employeeRole="Governança">
                <HousekeepingMenu />
            </Menu>

            <section className={styles.dashboard__container}>
                <Header target="/governanca" />

                <section>
                    <header className={styles.dashboard__heading}>
                        <h3>Alterar status do quarto nª 50</h3>
                    </header>

                    <RoomForm
                        action="edit"
                        onChange={handleChangeData}
                        onSubmit={handleSubmit}
                        showStatus
                        targetBack="/governanca/status-quartos" />
                </section>
            </section>
        </Dashboard>
    )
}

export default ChangeRoomStatus