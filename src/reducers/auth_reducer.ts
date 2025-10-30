import { useCallback, useReducer } from "react"
import type { AuthAction, AuthState } from "../types/reducer_states"
import type { LoginFormFields } from "../types/login"

const storagedAuthData = localStorage.getItem("staywise-auth")

const initialState: AuthState = {
    fields: { email: "", senha: "" },
    loading: false,
    authenticated: storagedAuthData ? true : false,
    employee: storagedAuthData ? JSON.parse(storagedAuthData).employee : null,
    token: storagedAuthData ? JSON.parse(storagedAuthData).token : null,
    loginError: null
}

const authReducerActions = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case "FIELD_CHANGE":
            return {
                ...state,
                fields: {
                    ...state.fields,
                    [action.payload.name]: action.payload.value
                },
                loginError: null
            }

        case "SUBMIT_START":
            return {
                ...state,
                loading: true,
                loginError: null
            }

        case "SUBMIT_SUCCESS":
            return {
                ...state,
                loading: false,
                authenticated: true,
                employee: action.payload.employee,
                token: action.payload.token
            }

        case "SUBMIT_FAILURE":
            return {
                ...state,
                loading: false,
                loginError: action.payload
            }

        case "LOGOUT":
            return initialState

        default:
            return state
    }
}

export const useAuthReducer = () => {
    const [authState, dispatch] = useReducer<AuthState, [action: AuthAction]>(authReducerActions, initialState)

    const handleChange = useCallback((name: keyof LoginFormFields, value: string) => {
        dispatch({ type: "FIELD_CHANGE", payload: { name, value } })
    }, [])

    const logout = useCallback(() => {
        localStorage.removeItem("staywise-auth")
        dispatch({ type: "LOGOUT" })
    }, [])

    const handleLogin = useCallback(async () => {
        // dispatch({ type: "SUBMIT_START" })

        // const response = await loginService(authState.fields)

        // if (!response || !response.success) {
        //     dispatch({
        //         type: "SUBMIT_FAILURE",
        //         payload: response?.body.text || "Erro inesperado ao efetuar login."
        //     })
        //     return
        // }

        // localStorage.setItem("staywise-auth", JSON.stringify(response.body))

        // dispatch({
        //     type: "SUBMIT_SUCCESS",
        //     payload: { employee: response.body.employee, token: response.body.token }
        // })
    }, [authState.fields])

    return { ...authState, handleChange, logout, handleLogin }
}