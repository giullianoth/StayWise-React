import styles from "../Form.module.css"
import { Link } from "react-router-dom"
import { useAppContext } from "../../../context/app_context"
import type { FormComponentProps } from "../../../types/form"

const EmployeeForm = ({ action, onChange, onSubmit }: FormComponentProps) => {
    const { formFields } = useAppContext().manager

    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <label>
                <span>Nome do funcionário:</span>

                <input
                    type="text"
                    name="nome"
                    value={formFields?.nome || ""}
                    onChange={onChange} />
            </label>

            <label className={styles.half}>
                <span>E-mail do funcionário:</span>
                <input
                    type="email"
                    name="email"
                    value={formFields?.email || ""}
                    onChange={onChange} />
            </label>

            <label className={styles.half}>
                <span>Senha:</span>
                <input
                    type="password"
                    name="senha"
                    value={formFields?.senha || ""}
                    onChange={onChange} />
            </label>

            <label className={styles.half}>
                <span>Perfil:</span>
                <select
                    name="nome_perfil"
                    value={formFields?.nome_perfil || ""}
                    onChange={onChange}>
                    <option value="Recepcionista">Recepcionista</option>
                    <option value="Governança">Governança</option>
                </select>
            </label>

            <label className={styles.half}>
                <span>Status:</span>
                <select
                    name="status"
                    disabled={action === "create"}
                    value={formFields?.status || ""}
                    onChange={onChange}>
                    <option value="Ativo">Ativo</option>
                    <option value="Inativo">Inativo</option>
                    <option value="Desligado">Desligado</option>
                </select>
            </label>

            <button type="submit" className="button">
                {action === "create" && "Criar"}
                {action === "edit" && "Atualizar"}
            </button>

            <Link to="/gerente/funcionarios" className="button clear">
                Cancelar
            </Link>
        </form>
    )
}

export default EmployeeForm