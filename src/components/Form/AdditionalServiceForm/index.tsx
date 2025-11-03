import styles from "../Form.module.css"
import type { FormComponentProps } from '../../../types/form'
import { Link } from "react-router-dom"

const AdditionalServiceForm = ({ onChange, onSubmit, action }: FormComponentProps) => {
    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <label className={styles.half}>
                <span>Nome do serviço:</span>

                <input
                    type="text"
                    name="nome_servico" />
            </label>

            <label className={styles.half}>
                <span>Preço:</span>

                <input
                    type="text"
                    name="preco" />
            </label>

            <label>
                <span>Descrição:</span>

                <textarea name="descricao" rows={6}></textarea>
            </label>

            <button type="submit" className="button">
                {action === "create" && "Criar"}
                {action === "edit" && "Atualizar"}
            </button>

            <Link to="/gerente/servicos-adicionais" className="button clear">
                Cancelar
            </Link>
        </form>
    )
}

export default AdditionalServiceForm