import type { ChangeEvent, FormEvent } from "react"
import styles from "../../../components/Dashboard/Dashboard.module.css"
import Dashboard from "../../../components/Dashboard"
import ManagerMenu from "../Menu"
import Menu from "../../../components/Menu"
import Header from "../../../components/Header"
import RoomForm from "../../../components/Form/RoomForm"

const ChangeRoomType = () => {
    const handleChangeData = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        event
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
    }

    return (
        <Dashboard>
            <Menu employeeRole="Gerente">
                <ManagerMenu />
            </Menu>

            <section className={styles.dashboard__container}>
                <Header target="/gerente" />

                <section>
                    <header className={styles.dashboard__heading}>
                        <h3>Alterar Tipo de Quarto</h3>
                    </header>

                    <RoomForm
                        action="edit"
                        onChange={handleChangeData}
                        onSubmit={handleSubmit}
                        showCategory
                        targetBack="/gerente/quartos" />
                </section>
            </section>
        </Dashboard>
    )
}

export default ChangeRoomType