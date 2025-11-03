import styles from "../Form.module.css"
import type { FormComponentProps } from '../../../types/form'
import { Link } from "react-router-dom"

const GuestForm = ({ onChange, onSubmit, action }: FormComponentProps) => {
    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <label className={styles.half}>
                <span>Nome:</span>

                <input
                    type="text"
                    name="nome_completo" />
            </label>

            <label className={styles.half}>
                <span>E-mail:</span>

                <input
                    type="email"
                    name="email" />
            </label>

            <label className={styles.half}>
                <span>Telefone:</span>

                <input
                    type="text"
                    name="telefone" />
            </label>

            <label className={styles.half}>
                <span>Documento:</span>

                <input
                    type="text"
                    name="documento" />
            </label>

            <label className={styles.half}>
                <span>Data de nascimento:</span>

                <input
                    type="date"
                    name="data_nascimento" />
            </label>

            <label className={styles.half}>
                <span>Senha:</span>

                <input
                    type="password"
                    name="senha" />
            </label>

            <button type="submit" className="button">
                {action === "create" && "Criar"}
                {action === "edit" && "Atualizar"}
            </button>

            <Link to="/recepcionista/hospedes" className="button clear">
                Cancelar
            </Link>
        </form>
    )
}

export default GuestForm