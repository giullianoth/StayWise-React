import type { ChangeEvent, FormEvent } from "react"
import Dashboard from "../../../components/Dashboard"
import Menu from "../../../components/Menu"
import Header from "../../../components/Header"
import ManagerMenu from "../Menu"
import styles from "../../../components/Dashboard/Dashboard.module.css"
import AdditionalServiceForm from "../../../components/Form/AdditionalServiceForm"

const CreateAdditionalService = () => {
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
                        <h3>Novo Serviço Adicional</h3>
                    </header>

                    <AdditionalServiceForm
                        action="create"
                        onChange={handleChangeData}
                        onSubmit={handleSubmit} />
                </section>
            </section>
        </Dashboard>
    )
}

export default CreateAdditionalService