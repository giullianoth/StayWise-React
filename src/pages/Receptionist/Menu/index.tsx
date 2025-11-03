import { Link } from "react-router-dom"
import styles from "../../../components/Dashboard/Dashboard.module.css"
import { LuNotebookPen } from "react-icons/lu"
import { RiArrowUpDownLine } from "react-icons/ri"
import { HiUsers } from "react-icons/hi"

type Props = {
  buttonsLayout?: boolean
}

const Menu = ({ buttonsLayout }: Props) => {
  return (
    <ul className={buttonsLayout ? styles.buttonsLayout : ""}>
      <li className={styles.menuItem}>
        <Link
          to="/recepcionista/reservas"
          className={buttonsLayout ? "button large vertical" : ""}>
          <LuNotebookPen />
          Reservas
        </Link>
      </li>

      <li className={styles.menuItem}>
        <Link
          to="/recepcionista/check-in"
          className={buttonsLayout ? "button large vertical" : ""}>
          <RiArrowUpDownLine />
          Check-in / Check-out
        </Link>
      </li>

      <li className={styles.menuItem}>
        <Link
          to="/recepcionista/hospedes"
          className={buttonsLayout ? "button large vertical" : ""}>
          <HiUsers />
          Hóspedes
        </Link>
      </li>
    </ul>
  )
}

export default Menu