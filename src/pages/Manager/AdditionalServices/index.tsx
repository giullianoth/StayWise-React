import styles from "../../../components/Dashboard/Dashboard.module.css"
import ManagerMenu from "../Menu"
import Dashboard from '../../../components/Dashboard'
import Menu from '../../../components/Menu'
import Header from '../../../components/Header'
import AdditionalServiceCard from "../../../components/AdditionalServiceCard"
import { Link } from "react-router-dom"
import { GoPlusCircle } from "react-icons/go"

const AdditionalServices = () => {
    return (
        <Dashboard>
            <Menu employeeRole="Gerente">
                <ManagerMenu />
            </Menu>

            <section className={styles.dashboard__container}>
                <Header target="/gerente" />

                <section>
                    <header className={styles.dashboard__heading}>
                        <h3>Serviços Adicionais</h3>
                    </header>

                    <div className={styles.dashboard__grid}>
                        <AdditionalServiceCard />
                        <AdditionalServiceCard />
                        <AdditionalServiceCard />
                    </div>

                    <Link
                        to="/gerente/servicos-adicionais/criar"
                        className={`button large grow green ${styles.dashboard__buttonAction}`}>
                        <GoPlusCircle />
                        Novo Serviço Adicional
                    </Link>
                </section>
            </section>
        </Dashboard>
    )
}

export default AdditionalServices