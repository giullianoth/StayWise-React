import type { CSSProperties } from "react"
import styles from "../../../components/Dashboard/Dashboard.module.css"
import Dashboard from "../../../components/Dashboard"
import Menu from "../../../components/Menu"
import ReceitopnistMenu from "../Menu"
import Header from "../../../components/Header"
import { BsBoxArrowInRight, BsBoxArrowRight } from "react-icons/bs"

const CheckIn = () => {
    const reservationGridColumns: CSSProperties = {
        gridTemplateColumns: "repeat(9, 1fr)"
    }

    return (
        <Dashboard>
            <Menu employeeRole="Recepcionista">
                <ReceitopnistMenu />
            </Menu>

            <section className={styles.dashboard__container}>
                <Header target="/recepcionista" />

                <section>
                    <header className={styles.dashboard__heading}>
                        <h3>Realizar Check-in / Check-out</h3>
                    </header>

                    <div className={`${styles.dashboard__list} ${styles.centered}`}>
                        <div
                            className={styles.dashboard__listRow}
                            style={reservationGridColumns}>
                            <p>
                                <strong>ID</strong>
                            </p>

                            <p>
                                <strong>Hóspede</strong>
                            </p>

                            <p>
                                <strong>Nº do quarto</strong>
                            </p>

                            <p>
                                <strong>Data check-in</strong>
                            </p>

                            <p>
                                <strong>Data check-out</strong>
                            </p>

                            <p>
                                <strong>Funcionário</strong>
                            </p>

                            <p>
                                <strong>Status</strong>
                            </p>

                            <p>
                                <strong>Valor total</strong>
                            </p>

                            <p>
                                <strong>Ações</strong>
                            </p>
                        </div>

                        <div
                            className={styles.dashboard__listRow}
                            style={reservationGridColumns}>
                            <p>1</p>
                            <p>Fulano</p>
                            <p>40</p>
                            <p>31/10/2025</p>
                            <p>--</p>
                            <p>Um recepcionista</p>
                            <p>Confirmada</p>
                            <p>R$ 159,90</p>

                            <p className={styles.dashboard__listActions}>
                                <button
                                    className={`button clear ${styles.dashboard__listConfirm}`}
                                    title="Check-in">
                                    <BsBoxArrowInRight />
                                </button>

                                <button
                                    className={`button clear ${styles.dashboard__listDelete}`}
                                    title="Check-out">
                                    <BsBoxArrowRight />
                                </button>
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        </Dashboard>
    )
}

export default CheckIn