import type { ChangeEvent, FormEvent } from "react"
import Dashboard from "../../../components/Dashboard"
import styles from "../../../components/Dashboard/Dashboard.module.css"
import RoomForm from "../../../components/Form/RoomForm"
import Header from "../../../components/Header"
import Menu from "../../../components/Menu"
import ManagerMenu from "../Menu"

const CreateRoom = () => {
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
                        <h3>Criar Novo Quarto</h3>
                    </header>

                    <RoomForm
                        action="create"
                        onChange={handleChangeData}
                        onSubmit={handleSubmit}
                        showNumber
                        showCategory
                        showFare />
                </section>
            </section>
        </Dashboard>
    )
}

export default CreateRoom