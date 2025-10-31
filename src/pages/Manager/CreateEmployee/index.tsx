import { useEffect, type ChangeEvent, type FormEvent } from "react"
import Dashboard from "../../../components/Dashboard"
import styles from "../../../components/Dashboard/Dashboard.module.css"
import EmployeeForm from "../../../components/Form/EmployeeForm"
import Header from "../../../components/Header"
import Menu from "../../../components/Menu"
import ManagerMenu from "../Menu"
import { useAppContext } from "../../../context/app_context"
import type { EmployeeFormFields } from "../../../types/employee"

const CreateEmployee = () => {
    const { handleChangeForm, handleCreateEmployee, clearEmployeeForm } = useAppContext().manager
    const { token } = useAppContext().auth

    useEffect(() => {
        clearEmployeeForm();
        handleChangeForm("nome_perfil", "Recepcionista");
        handleChangeForm("status", "Ativo");
    }, []);

    const handleChangeData = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        handleChangeForm(event.target.name as keyof EmployeeFormFields, event.target.value)
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        await handleCreateEmployee(token!)
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