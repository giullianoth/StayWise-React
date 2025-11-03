import { Link } from "react-router-dom"
import styles from "../../../components/Dashboard/Dashboard.module.css"
import { IoBed } from "react-icons/io5"

type Props = {
  buttonsLayout?: boolean
}

const Menu = ({ buttonsLayout }: Props) => {
  return (
    <ul className={buttonsLayout ? styles.buttonsLayout : ""}>
      <li className={styles.menuItem}>
        <Link
          to="/governanca/status-quartos"
          className={buttonsLayout ? "button large vertical" : ""}>
          <IoBed />
          Status dos Quartos
        </Link>
      </li>
    </ul>
  )
}

export default Menu