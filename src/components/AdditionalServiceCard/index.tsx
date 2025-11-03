import { Link } from "react-router-dom"
import styles from "./RoomCard.module.css"

const AdditionalServiceCard = () => {
    return (
        <article className={styles.card}>
            <div className={styles.card__image}>
                <Link to="/gerente/servicos-adicionais/editar/1" title="">
                    <img src="/images/quarto.jpg" alt="Quarto" />
                </Link>
            </div>

            <div>
                <div className={styles.card__info}>
                    <Link to="/gerente/servicos-adicionais/editar/1" title="">
                        <h4 className={styles.card__number}>Serviço adicional</h4>
                    </Link>

                    <p className={styles.card__price}>R$ 25.90</p>
                </div>

                <p className={styles.card__description}>
                    <Link to="/gerente/servicos-adicionais/editar/1" title="">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, deserunt.
                    </Link>
                </p>
            </div>
        </article>
    )
}

export default AdditionalServiceCard