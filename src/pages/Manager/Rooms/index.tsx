import { Link } from "react-router-dom"
import Dashboard from "../../../components/Dashboard"
import styles from "../../../components/Dashboard/Dashboard.module.css"
import Header from "../../../components/Header"
import Menu from "../../../components/Menu"
import RoomCard from "../../../components/RoomCard"
import ManagerMenu from "../Menu"
import { GoPlusCircle } from "react-icons/go"

const Rooms = () => {
    return (
        <Dashboard>
            <Menu employeeRole="Gerente">
                <ManagerMenu />
            </Menu>

            <section className={styles.dashboard__container}>
                <Header target="/gerente" />

                <section>
                    <header className={styles.dashboard__heading}>
                        <h3>Lista de Quartos</h3>
                    </header>

                    <ul className={styles.dashboard__tabs}>
                        <li className={`${styles.dashboard__tab} ${styles.active}`}>
                            <button className="button clear">
                                <strong>Todas as categorias</strong>
                            </button>
                        </li>

                        <li className={styles.dashboard__tab}>
                            <button className="button clear">
                                <strong>Standard</strong>
                            </button>
                        </li>

                        <li className={styles.dashboard__tab}>
                            <button className="button clear">
                                <strong>Superior</strong>
                            </button>
                        </li>

                        <li className={styles.dashboard__tab}>
                            <button className="button clear">
                                <strong>Suíte</strong>
                            </button>
                        </li>
                    </ul>

                    <div className={styles.dashboard__grid}>
                        <RoomCard
                            target={`/gerente/quartos/alterar-tipo/1`}
                            title="Clique para alterar o tipo de quarto" />

                        <RoomCard
                            target={`/gerente/quartos/alterar-tipo/1`}
                            title="Clique para alterar o tipo de quarto" />

                        <RoomCard
                            target={`/gerente/quartos/alterar-tipo/1`}
                            title="Clique para alterar o tipo de quarto" />

                        <RoomCard
                            target={`/gerente/quartos/alterar-tipo/1`}
                            title="Clique para alterar o tipo de quarto" />
                    </div>

                    <Link
                        to="/gerente/quartos/criar"
                        className={`button large grow green ${styles.dashboard__buttonAction}`}>
                        <GoPlusCircle />
                        Novo Quarto
                    </Link>
                </section>
            </section>
        </Dashboard>
    )
}

export default Rooms