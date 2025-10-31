import { useEffect, type ChangeEvent, type FormEvent } from "react"
import Dashboard from "../../../components/Dashboard"
import styles from "../../../components/Dashboard/Dashboard.module.css"
import EmployeeForm from "../../../components/Form/EmployeeForm"
import Header from "../../../components/Header"
import Menu from "../../../components/Menu"
import ManagerMenu from "../Menu"
import { useNavigate, useParams } from "react-router-dom"
import { useAppContext } from "../../../context/app_context"
import type { EmployeeFormFields } from "../../../types/employee"

const EditEmployee = () => {
    const { id } = useParams()
    const { handleChangeForm, findEmployee, handleUpdateEmployee } = useAppContext().manager
    const { token } = useAppContext().auth
    const navigate = useNavigate()

    useEffect(() => {
        // if (!token || !id) {
        //     navigate("/");
        //     return;
        // }

        const find = async () => {
            await findEmployee(id!, token!);
        };

        find();
    }, [token, id])

    const handleChangeData = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        handleChangeForm(event.target.name as keyof EmployeeFormFields, event.target.value)
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        await handleUpdateEmployee(token!)
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
                        <h3>Editar perfil de Fulano</h3>
                    </header>

                    <EmployeeForm
                        onChange={handleChangeData}
                        onSubmit={handleSubmit}
                        action="edit" />
                </section>
            </section>
        </Dashboard>
    )
}

export default EditEmployee