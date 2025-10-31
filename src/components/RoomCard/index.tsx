import { Link } from "react-router-dom"
import Bullet from "../Bullet"
import styles from "./RoomCard.module.css"

const RoomCard = () => {
    return (
        <article className={styles.card}>
            <div className={styles.card__image}>
                <Link to={`/gerente/quartos/alterar-tipo/1`} title="Clique para alterar o tipo de quarto">
                    <img src="/images/quarto.jpg" alt="Quarto" />
                    <Bullet
                        type="success"
                        message="Disponível"
                        className={styles.card__status}
                        small />
                </Link>
            </div>

            <div>
                <p className={styles.card__category}>
                    <Link to={`/gerente/quartos/alterar-tipo/1`} title="Clique para alterar o tipo de quarto">
                        <strong>Standard</strong>
                    </Link>
                </p>

                <div className={styles.card__info}>
                    <Link to={`/gerente/quartos/alterar-tipo/1`} title="Clique para alterar o tipo de quarto">
                        <h4 className={styles.card__number}>Quarto nº 40</h4>
                    </Link>

                    <p className={styles.card__price}>R$ 169.90</p>
                </div>
            </div>
        </article>
    )
}

export default RoomCard