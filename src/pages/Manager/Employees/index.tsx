import { Link } from "react-router-dom"
import Dashboard from "../../../components/Dashboard"
import styles from "../../../components/Dashboard/Dashboard.module.css"
import Header from "../../../components/Header"
import Menu from "../../../components/Menu"
import { BsPencilSquare } from "react-icons/bs"
import { FaRegTrashAlt } from "react-icons/fa"
import type { CSSProperties } from "react"
import { GoPlusCircle } from "react-icons/go"
import ManagerMenu from "../Menu"

const Employees = () => {
  const employeeGridColumns: CSSProperties = {
    gridTemplateColumns: "repeat(6, 1fr)"
  }

  return (
    <Dashboard>
      <Menu employeeRole="Gerente">
        <ManagerMenu />
      </Menu>

      <section className={styles.dashboard__container}>
        <Header target="/gerente" />

        <section>
          <header className={styles.dashboard__heading}>
            <h3>Lista de funcionários</h3>
          </header>

          <div className={`${styles.dashboard__list} ${styles.centered}`}>
            <div
              className={styles.dashboard__listRow}
              style={employeeGridColumns}>
              <p>
                <strong>ID</strong>
              </p>

              <p>
                <strong>Nome</strong>
              </p>

              <p>
                <strong>Cargo</strong>
              </p>

              <p>
                <strong>E-mail</strong>
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
              style={employeeGridColumns}>
              <p>1</p>
              <p>Fulano</p>
              <p>Recepcionista</p>
              <p>fulano@email.com</p>
              <p>Ativo</p>

              <p className={styles.dashboard__listActions}>
                <Link
                  to={`/gerente/funcionarios/editar/1`}
                  className={styles.dashboard__listEdit} title="Editar" >
                  <BsPencilSquare />
                </Link>

                <button
                  className={`button clear ${styles.dashboard__listDelete}`}
                  title="Desativar">
                  <FaRegTrashAlt />
                </button>
              </p>
            </div>
          </div>

          <Link
            to="/gerente/funcionarios/criar"
            className={`button large grow green ${styles.dashboard__buttonAction}`}>
            <GoPlusCircle />
            Criar Perfil
          </Link>
        </section>
      </section>
    </Dashboard>
  )
}

export default Employees