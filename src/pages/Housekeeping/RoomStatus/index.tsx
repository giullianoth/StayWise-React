import { useState } from 'react'
import styles from "../../../components/Dashboard/Dashboard.module.css"
import Dashboard from '../../../components/Dashboard'
import Menu from '../../../components/Menu'
import HousekeepingMenu from "../Menu"
import Header from '../../../components/Header'
import RoomCard from '../../../components/RoomCard'

const RoomStatus = () => {
    const [search, setSearch] = useState<string>("")

    return (
        <Dashboard>
            <Menu employeeRole="Governança">
                <HousekeepingMenu />
            </Menu>

            <section className={styles.dashboard__container}>
                <Header target="/governanca" />

                <section>
                    <header className={styles.dashboard__heading}>
                        <h3>Alterar status dos quartos</h3>
                    </header>

                    <div className={styles.dashboard__search}>
                        <label>
                            <span>
                                <strong>Digite o número do quarto:</strong>
                            </span>

                            <input
                                type="text"
                                name="search"
                                value={search}
                                onChange={event => setSearch(event.target.value)} />
                        </label>
                    </div>

                    <div className={styles.dashboard__grid}>
                        <RoomCard
                            target={`/governanca/status-quartos/alterar-status/1`}
                            title="Clique para alterar o status" />
                            
                        <RoomCard
                            target={`/governanca/status-quartos/alterar-status/1`}
                            title="Clique para alterar o status" />
                            
                        <RoomCard
                            target={`/governanca/status-quartos/alterar-status/1`}
                            title="Clique para alterar o status" />
                            
                        <RoomCard
                            target={`/governanca/status-quartos/alterar-status/1`}
                            title="Clique para alterar o status" />
                    </div>
                </section>
            </section>
        </Dashboard>
    )
}

export default RoomStatus