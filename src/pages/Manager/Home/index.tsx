import Dashboard from "../../../components/Dashboard"
import styles from "../../../components/Dashboard/Dashboard.module.css"
import Menu from "../../../components/Menu"
import ManagerMenu from "../Menu"

const Home = () => {
  return (
    <Dashboard>
      <Menu employeeRole="Gerente">
        <ManagerMenu />
      </Menu>

      <section className={`${styles.dashboard__container} ${styles.dashboard__home}`}>
        <ManagerMenu buttonsLayout />
      </section>
    </Dashboard>
  )
}

export default Home