import type { CSSProperties } from "react"
import Dashboard from "../../../components/Dashboard"
import styles from "../../../components/Dashboard/Dashboard.module.css"
import Header from "../../../components/Header"
import Menu from "../../../components/Menu"
import ReceitopnistMenu from "../Menu"
import { BsPencilSquare } from "react-icons/bs"
import { Link } from "react-router-dom"
import { FaRegTrashAlt } from "react-icons/fa"
import { GoPlusCircle } from "react-icons/go"

const Reservations = () => {
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
                        <h3>Lista de reservas</h3>
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
                                <Link
                                    to={`/recepcionista/reservas/editar/1`}
                                    className={styles.dashboard__listEdit} title="Editar" >
                                    <BsPencilSquare />
                                </Link>

                                <button
                                    className={`button clear ${styles.dashboard__listDelete}`}
                                    title="Cancelar">
                                    <FaRegTrashAlt />
                                </button>
                            </p>
                        </div>
                    </div>

                    <Link
                        to="/recepcionista/reservas/criar"
                        className={`button large grow green ${styles.dashboard__buttonAction}`}>
                        <GoPlusCircle />
                        Nova Reserva
                    </Link>
                </section>
            </section>
        </Dashboard>
    )
}

export default Reservations