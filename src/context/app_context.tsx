import { createContext, useContext, type ReactNode } from "react"
import { useAuthReducer } from "../reducers/auth_reducer"
import type { Context } from "../types/context"
import { useManagerReducer } from "../reducers/manager_reducer"

type Props = {
    children: ReactNode
}

const AppContext = createContext<Context | null>(null)

export const AppContextProvider = ({ children }: Props) => {
    const value: Context = {
        auth: useAuthReducer(),
        manager: useManagerReducer()
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
    const context = useContext(AppContext)

    if (!context) {
        throw new Error("Fora do contexto. Use o componente 'AppContextProvider'.")
    }

    return context
} 
