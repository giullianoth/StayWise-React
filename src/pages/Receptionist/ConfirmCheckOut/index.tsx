import { Link } from "react-router-dom"
import Dashboard from "../../../components/Dashboard"
import styles from "../../../components/Dashboard/Dashboard.module.css"
import Header from "../../../components/Header"
import Menu from "../../../components/Menu"
import ReceitopnistMenu from "../Menu"
import AdditionalServiceSelect from "../../../components/AdditionalServiceSelect"

const ConfirmCheckOut = () => {
    return (
        <Dashboard>
            <Menu employeeRole="Recepcionista">
                <ReceitopnistMenu />
            </Menu>

            <section className={styles.dashboard__container}>
                <Header target="/recepcionista" />

                <section>
                    <header className={styles.dashboard__heading}>
                        <h3>Confirmar Check-out</h3>
                    </header>

                    <p className={styles.dashboard__text}>
                        <strong>Selecione os serviços adicionais consumidos:</strong>
                    </p>

                    <div className={styles.dashboard__grid}>
                        <AdditionalServiceSelect />
                        <AdditionalServiceSelect />
                        <AdditionalServiceSelect />
                    </div>

                    <div className={styles.dashboard__consumptionValue}>
                        <p>
                            Valor Total:
                        </p>

                        <p>
                            <strong>R$ 399,90</strong>
                        </p>
                    </div>

                    <div className={styles.dashboard__actions}>
                        <button className="button large green">Confirmar Check-out</button>

                        <Link
                            to="/recepcionista/check-in"
                            className="button large clear">
                            Cancelar
                        </Link>
                    </div>
                </section>
            </section>
        </Dashboard>
    )
}

export default ConfirmCheckOut