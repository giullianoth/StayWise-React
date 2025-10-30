import { MdOutlineLogout } from "react-icons/md"
import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>StayWise</h1>

      <div className={styles.header__employee}>
        <span>
          Bem-vindo, <strong>Fulano</strong>!
        </span>

        <button className={`button clear ${styles.header__logout}`}>
          <MdOutlineLogout />
        </button>
      </div>
    </header>
  )
}

export default Header