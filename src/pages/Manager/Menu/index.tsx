import { Link } from "react-router-dom"
import styles from "../../../components/Dashboard/Dashboard.module.css"
import { HiUsers } from "react-icons/hi"

const Menu = () => {
  return (
    <ul>
          <li className={styles.menuItem}>
            <Link to="/gerente">
              <HiUsers />
              Funcionários
            </Link>
          </li>
        </ul>
  )
}

export default Menu