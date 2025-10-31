import { Link } from "react-router-dom"
import styles from "../../../components/Dashboard/Dashboard.module.css"
import { HiUsers } from "react-icons/hi"
import { IoBed } from "react-icons/io5"

type Props = {
  buttonsLayout?: boolean
}

const Menu = ({ buttonsLayout }: Props) => {
  return (
    <ul className={buttonsLayout ? styles.buttonsLayout : ""}>
      <li className={styles.menuItem}>
        <Link
          to="/gerente/funcionarios"
          className={buttonsLayout ? "button large vertical" : ""}>
          <HiUsers />
          Funcionários
        </Link>
      </li>

      <li className={styles.menuItem}>
        <Link
          to="/gerente/quartos"
          className={buttonsLayout ? "button large vertical" : ""}>
          <IoBed />
          Quartos
        </Link>
      </li>
    </ul>
  )
}

export default Menu