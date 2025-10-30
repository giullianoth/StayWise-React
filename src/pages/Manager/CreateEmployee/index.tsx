import type { ChangeEvent, FormEvent } from "react"
import Dashboard from "../../../components/Dashboard"
import styles from "../../../components/Dashboard/Dashboard.module.css"
import EmployeeForm from "../../../components/EmployeeForm"
import Header from "../../../components/Header"
import Menu from "../../../components/Menu"
import ManagerMenu from "../Menu"

const CreateEmployee = () => {
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
                <Header />

                <section>
                    <header className={styles.dashboard__heading}>
                        <h3>Criar Perfil</h3>
                    </header>

                    <EmployeeForm
                        onChange={handleChangeData}
                        onSubmit={handleSubmit}
                        action="create" />
                </section>
            </section>
        </Dashboard>
    )
}

export default CreateEmployee