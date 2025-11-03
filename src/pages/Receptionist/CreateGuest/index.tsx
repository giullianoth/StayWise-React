import type { ChangeEvent, FormEvent } from "react"
import Dashboard from "../../../components/Dashboard"
import styles from "../../../components/Dashboard/Dashboard.module.css"
import GuestForm from "../../../components/Form/GuestForm"
import Header from "../../../components/Header"
import Menu from "../../../components/Menu"
import ReceitopnistMenu from "../Menu"

const CreateGuest = () => {
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
                        <h3>Criar novo hóspede</h3>
                    </header>

                    <GuestForm
                        action="create"
                        onChange={handleChangeData}
                        onSubmit={handleSubmit} />
                </section>
            </section>
        </Dashboard>
    )
}

export default CreateGuest