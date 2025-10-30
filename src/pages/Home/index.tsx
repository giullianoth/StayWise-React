import type { ChangeEvent, FormEvent } from "react"
import { useAppContext } from "../../context/app_context"
import styles from "./Home.module.css"
import type { LoginFormFields } from "../../types/login"

const Home = () => {
    const { fields, handleChange, handleLogin } = useAppContext().auth

    const handleChangeData = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        handleChange(event.target.name as keyof LoginFormFields, event.target.value)
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault()
        await handleLogin()
    }

    return (
        <section className={styles.home}>
            <div className={styles.home__container}>
                <div className={styles.home__wrapper}>
                    <header className={styles.home__title}>
                        <h1>StayWise</h1>
                    </header>

                    <form className={styles.home__form} onSubmit={handleSubmit}>
                        <label>
                            <span>E-mail:</span>

                            <input
                                required
                                type="email"
                                name="email"
                                placeholder="Digite o seu e-mail"
                                value={fields.email}
                                onChange={handleChangeData} />
                        </label>

                        <label>
                            <span>Senha:</span>

                            <input
                                required
                                type="password"
                                name="senha"
                                placeholder="Digite a sua senha"
                                value={fields.senha}
                                onChange={handleChangeData} />
                        </label>

                        <button type="submit" className="button">
                            Entrar
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Home