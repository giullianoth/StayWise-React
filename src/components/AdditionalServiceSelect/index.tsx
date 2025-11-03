import { FaMinus, FaPlus } from "react-icons/fa"
import styles from "./RoomCard.module.css"
import { useRef, useState, type ComponentProps } from "react"

const AdditionalServiceSelect = (props: ComponentProps<"input">) => {
    const [quantity, setQuantity] = useState<number>(1)
    const checkboxRef = useRef<HTMLInputElement | null>(null)

    const handleAddQuantity = () => {
        if (checkboxRef?.current?.checked) {
            setQuantity(quantity + 1)
        }
    }

    const handleDecreaseQuantity = () => {
        if (checkboxRef?.current?.checked && quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <label>
            <input
                ref={checkboxRef}
                type="checkbox"
                name="selectAditionalService"
                className={styles.card__checkbox}
                {...props} />

            <article className={styles.card}>
                <div className={styles.card__image}>
                    <img src="/images/quarto.jpg" alt="Quarto" />
                </div>

                <div>
                    <div className={styles.card__info}>
                        <h4 className={styles.card__number}>Serviço adicional</h4>

                        <p className={styles.card__price}>R$ 25.90</p>
                    </div>

                    <p className={styles.card__description}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, deserunt.
                    </p>
                </div>

                <div className={styles.card__quantity}>
                    <p>Quantidade:</p>
                    <p className={styles.card__quantityChange}>
                        <button
                            className="button small"
                            onClick={handleDecreaseQuantity}>
                            <FaPlus />
                        </button>

                        <span>{quantity}</span>

                        <button
                            className="button small"
                            onClick={handleAddQuantity}>
                            <FaMinus />
                        </button>
                    </p>
                </div>
            </article>
        </label>
    )
}

export default AdditionalServiceSelect