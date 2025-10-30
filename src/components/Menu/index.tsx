import { useState, type ReactNode } from "react"
import styles from "./Menu.module.css"
import { HiOutlineMenuAlt2 } from "react-icons/hi"

type Props = {
    children: ReactNode,
    employeeRole: "Gerente" | "Recepcionista" | "Governança"
}

const Menu = ({ children, employeeRole }: Props) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)

    return (
        <aside className={styles.menu + (collapsed ? ` ${styles.collapsed}` : "")}>
            <div className={styles.menu__hamburgerIcon} onClick={() => setCollapsed(!collapsed)}>
                <HiOutlineMenuAlt2 />
            </div>

            <nav>
                <header className={styles.menu__heading}>
                    <h2>Área restrita para {employeeRole}</h2>
                </header>

                {children}
            </nav>
        </aside>
    )
}

export default Menu