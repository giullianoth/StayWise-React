import { useState, type CSSProperties } from "react"
import styles from "../../../components/Dashboard/Dashboard.module.css"
import Dashboard from "../../../components/Dashboard"
import Menu from "../../../components/Menu"
import ReceitopnistMenu from "../Menu"
import Header from "../../../components/Header"
import { BsBoxArrowInRight, BsBoxArrowRight } from "react-icons/bs"
import { Link } from "react-router-dom"

const CheckIn = () => {
    const [search, setSearch] = useState<string>("")

    const reservationGridColumns: CSSProperties = {
        gridTemplateColumns: "repeat(5, 1fr)"
    }

    const handleCheckIn = () => {
        const confirmCheckIn = window.confirm(`Deseja fazer check-in para esta data (${new Date().toLocaleDateString()})?`)

        if (confirmCheckIn) {
            console.log(`Fez check-in em ${new Date().toLocaleDateString()}`)
        }
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

                    <div className={styles.dashboard__search}>
                        <label>
                            <span>
                                <strong>Digite o número da reserva:</strong>
                            </span>

                            <input
                                type="text"
                                name="search"
                                value={search}
                                onChange={event => setSearch(event.target.value)} />
                        </label>
                    </div>

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
                                <strong>Status</strong>
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
                            <p>Confirmada</p>

                            <p className={styles.dashboard__listActions}>
                                <button
                                    onClick={handleCheckIn}
                                    className={`button clear ${styles.dashboard__listConfirm} ${styles.dashboard__listIconLarge}`}
                                    title="Check-in">
                                    <BsBoxArrowInRight />
                                </button>

                                <Link
                                    to={`/recepcionista/confirmar-check-out/1`}
                                    className={`button clear ${styles.dashboard__listDelete} ${styles.dashboard__listIconLarge}`}
                                    title="Check-out">
                                    <BsBoxArrowRight />
                                </Link>
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        </Dashboard>
    )
}

export default CheckIn