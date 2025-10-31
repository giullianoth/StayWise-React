import styles from "../Form.module.css"
import { Link } from "react-router-dom"
import type { FormComponentProps } from "../../../types/form"

const ReservationForm = ({ action, onChange, onSubmit }: FormComponentProps) => {
    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <label className={styles.half}>
                <span>Hóspede:</span>

                <input
                    type="text"
                    name="nome_hospede" />
            </label>

            <label className={styles.half}>
                <span>Quarto:</span>

                <input
                    type="text"
                    name="numero_quarto" />
            </label>

            <label className={styles.half}>
                <span>Data Check-in:</span>

                <input
                    type="date"
                    name="data_checkin" />
            </label>

            <label className={styles.half}>
                <span>Data Check-out:</span>

                <input
                    type="date"
                    name="data_checkout" />
            </label>

            <button type="submit" className="button">
                {action === "create" && "Criar"}
                {action === "edit" && "Atualizar"}
            </button>

            <Link to="/recepcionista/reservas" className="button clear">
                Cancelar
            </Link>
        </form>
    )
}

export default ReservationForm