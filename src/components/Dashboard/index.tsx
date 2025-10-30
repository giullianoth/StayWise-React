import type { ReactNode } from "react"
import styles from "./Dashboard.module.css"

type Props = {
    children: ReactNode
}

const Dashboard = ({ children }: Props) => {
    return (
        <div className={styles.dashboard}>
            {children}
        </div>
    )
}

export default Dashboard