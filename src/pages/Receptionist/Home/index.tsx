import Dashboard from "../../../components/Dashboard"
import styles from "../../../components/Dashboard/Dashboard.module.css"
import Menu from "../../../components/Menu"
import ReceitopnistMenu from "../Menu"

const Home = () => {
  return (
    <Dashboard>
      <Menu employeeRole="Recepcionista">
        <ReceitopnistMenu />
      </Menu>

      <section className={`${styles.dashboard__container} ${styles.dashboard__home}`}>
        <ReceitopnistMenu buttonsLayout />
      </section>
    </Dashboard>
  )
}

export default Home