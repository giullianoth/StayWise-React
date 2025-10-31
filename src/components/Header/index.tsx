import { MdOutlineLogout } from "react-icons/md"
import styles from "./Header.module.css"
import { Link } from "react-router-dom"

type Props = {
  target: string
}

const Header = ({ target }: Props) => {
  return (
    <header className={styles.header}>
      <h1>
        <Link to={target}>StayWise</Link>
      </h1>

      <div className={styles.header__employee}>
        <span>
          Bem-vindo, <strong>Fulano</strong>!
        </span>

        <button
          className={`button clear ${styles.header__logout}`}
          title="Sair da minha conta">
          <MdOutlineLogout />
        </button>
      </div>
    </header>
  )
}

export default Header