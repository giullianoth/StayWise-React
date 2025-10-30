import type { ChangeEventHandler, FormEventHandler } from "react"
import styles from "./EmployeeForm.module.css"
import { Link } from "react-router-dom"

type Props = {
    onSubmit: FormEventHandler
    onChange: ChangeEventHandler
    action: "create" | "edit"
}

const EmployeeForm = ({ action, onChange, onSubmit }: Props) => {
    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <label>
                <span>Nome do funcionário:</span>

                <input
                    type="text"
                    name="nome" />
            </label>

            <label className={styles.half}>
                <span>E-mail do funcionário:</span>
                <input
                    type="email"
                    name="email" />
            </label>

            <label className={styles.half}>
                <span>Senha:</span>
                <input
                    type="password"
                    name="senha" />
            </label>

            <label className={styles.half}>
                <span>Perfil:</span>
                <select
                    name="nome_perfil">
                    <option value="Recepcionista">Recepcionista</option>
                    <option value="Governança">Governança</option>
                </select>
            </label>

            <label className={styles.half}>
                <span>Status:</span>
                <select
                    name="status"
                    disabled={action === "create"}>
                    <option value="Ativo">Ativo</option>
                    <option value="Inativo">Inativo</option>
                    <option value="Desligado">Desligado</option>
                </select>
            </label>

            <button type="submit" className="button">
                {action === "create" && "Criar"}
                {action === "edit" && "Atualizar"}
            </button>

            <Link to="/gerente" className="button clear">
                Cancelar
            </Link>
        </form>
    )
}

export default EmployeeForm