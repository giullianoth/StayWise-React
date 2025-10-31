import { Link } from "react-router-dom"
import type { FormComponentProps } from "../../../types/form"
import styles from "../Form.module.css"

interface Props extends FormComponentProps {
  showNumber?: boolean
  showFare?: boolean
  showCategory?: boolean
  showStatus?: boolean
}

const RoomForm = ({ action, onChange, onSubmit, showCategory, showFare, showNumber, showStatus }: Props) => {
  return (
    <form onSubmit={onSubmit} className={styles.form}>
      {showNumber &&
        <label className={styles.half}>
          <span>Número do quarto:</span>

          <input
            type="text"
            name="numero_quarto" />
        </label>}

      {showFare &&
        <label className={styles.half}>
          <span>Tarifa:</span>

          <input
            type="number"
            name="tarifa_padrao" />
        </label>}

      {showCategory &&
        <label className={styles.half}>
          <span>Categoria:</span>

          <select name="nome_tipo">
            <option value="Standard">Standard</option>
            <option value="Superior">Superior</option>
            <option value="Suite">Suite</option>
          </select>
        </label>}

      {showStatus &&
        <label className={styles.half}>
          <span>Status:</span>

          <select
            name="status">
            <option value="Disponível">Disponível</option>
            <option value="Ocupado">Ocupado</option>
            <option value="Necessita Limpeza">Necessita Limpeza</option>
          </select>
        </label>}

      <div className={styles.form__row}>
        <button type="submit" className="button">
          {action === "create" && "Criar"}
          {action === "edit" && "Atualizar"}
        </button>

        <Link to="/gerente/quartos" className="button clear">
          Cancelar
        </Link>
      </div>
    </form>
  )
}

export default RoomForm