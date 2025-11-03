import type { CSSProperties } from "react"
import Dashboard from "../../../components/Dashboard"
import styles from "../../../components/Dashboard/Dashboard.module.css"
import Header from "../../../components/Header"
import Menu from "../../../components/Menu"
import ReceitopnistMenu from "../Menu"
import { Link } from "react-router-dom"
import { BsPencilSquare } from "react-icons/bs"
import { FaRegTrashAlt } from "react-icons/fa"
import { GoPlusCircle } from "react-icons/go"

const Guests = () => {
    const guestsGridColumns: CSSProperties = {
        gridTemplateColumns: "repeat(8, 1fr)"
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
                        <h3>Lista de hóspedes</h3>
                    </header>

                    <div className={`${styles.dashboard__list} ${styles.centered}`}>
                        <div
                            className={styles.dashboard__listRow}
                            style={guestsGridColumns}>
                            <p>
                                <strong>ID</strong>
                            </p>

                            <p>
                                <strong>Nome</strong>
                            </p>

                            <p>
                                <strong>E-mail</strong>
                            </p>

                            <p>
                                <strong>Telefone</strong>
                            </p>

                            <p>
                                <strong>Documento</strong>
                            </p>

                            <p>
                                <strong>Data de Nascimento</strong>
                            </p>

                            <p>
                                <strong>Data de Cadastro</strong>
                            </p>

                            <p>
                                <strong>Ações</strong>
                            </p>
                        </div>

                        <div
                            className={styles.dashboard__listRow}
                            style={guestsGridColumns}>
                            <p>1</p>
                            <p>Fulano</p>
                            <p>fulano@email.com</p>
                            <p>--</p>
                            <p>12345678</p>
                            <p>31/10/1900</p>
                            <p>31/10/2025</p>

                            <p className={styles.dashboard__listActions}>
                                <Link
                                    to={`/recepcionista/hospedes/editar/1`}
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
                        to="/recepcionista/hospedes/criar"
                        className={`button large grow green ${styles.dashboard__buttonAction}`}>
                        <GoPlusCircle />
                        Novo Hóspede
                    </Link>
                </section>
            </section>
        </Dashboard>
    )
}

export default Guests