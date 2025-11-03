import Dashboard from "../../../components/Dashboard"
import styles from "../../../components/Dashboard/Dashboard.module.css"
import Menu from "../../../components/Menu"
import HousekeepingMenu from "../Menu"

const Home = () => {
  return (
    <Dashboard>
      <Menu employeeRole="Governança">
        <HousekeepingMenu />
      </Menu>

      <section className={`${styles.dashboard__container} ${styles.dashboard__home}`}>
        <HousekeepingMenu buttonsLayout />
      </section>
    </Dashboard>
  )
}

export default Home