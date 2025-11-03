import { Link } from "react-router-dom"
import Bullet from "../Bullet"
import styles from "./RoomCard.module.css"

type Props = {
    target: string
    title?: string
}

const RoomCard = ({ target, title }: Props) => {
    return (
        <article className={styles.card}>
            <div className={styles.card__image}>
                <Link to={target} title={title}>
                    <img src="/images/quarto.jpg" alt="Quarto" />
                    <Bullet
                        type="success"
                        message="Disponível"
                        className={styles.card__status}
                        small />

                    {/* <Bullet
                        type="warning"
                        message="Necessita Limpeza"
                        className={styles.card__status}
                        small />

                    <Bullet
                        type="error"
                        message="Ocupado"
                        className={styles.card__status}
                        small /> */}
                </Link>
            </div>

            <div>
                <p className={styles.card__category}>
                    <Link to={target} title={title}>
                        <strong>Standard</strong>
                    </Link>
                </p>

                <div className={styles.card__info}>
                    <Link to={target} title={title}>
                        <h4 className={styles.card__number}>Quarto nº 40</h4>
                    </Link>

                    <p className={styles.card__price}>R$ 169.90</p>
                </div>
            </div>
        </article>
    )
}

export default RoomCard