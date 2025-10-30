import { useCallback, useReducer } from "react";
import type { ManagerAction, ManagerState } from "../types/reducer_states";
import type { Employee, EmployeeFormFields } from "../types/employee";

const initialState: ManagerState = {
    employees: [],
    loading: false,
    fetchError: null,
    isSubmitting: false,
    mutationError: null,
    currentEmployee: null,
    findError: null,
    formFields: {
        nome: "",
        email: "",
        nome_perfil: "",
        status: "",
        senha: ""
    }
}

const managerReducerActions = (state: ManagerState, action: ManagerAction): ManagerState => {
    switch (action.type) {
        case "FETCH_START":
            return {
                ...state,
                loading: true,
                fetchError: null
            }

        case "FETCH_SUCCESS":
            return {
                ...state,
                loading: false,
                employees: action.payload
            }

        case "FETCH_FAILURE":
            return {
                ...state,
                loading: false,
                fetchError: action.payload
            }

        case 'SET_EMPLOYEE_FOR_EDIT':
            return {
                ...state,
                loading: false,
                currentEmployee: action.payload,
                formFields: {
                    id_perfil: action.payload.id_perfil,
                    nome: action.payload.nome,
                    email: action.payload.email,
                    nome_perfil: action.payload.nome_perfil,
                    status: action.payload.status,
                    senha: ""
                },
                mutationError: null,
                findError: null
            }

        case 'FORM_FIELD_CHANGE':
            return {
                ...state,
                mutationError: null,
                formFields: {
                    ...state.formFields,
                    [action.payload.name]: action.payload.value
                }
            }

        case 'CLEAR_FORM':
            return {
                ...state,
                formFields: initialState.formFields,
                currentEmployee: null,
                mutationError: null
            }

        case 'MUTATION_START':
            return {
                ...state,
                isSubmitting: true,
                mutationError: null
            }

        case 'MUTATION_SUCCESS':
            const updatedEmployees = state.currentEmployee
                ? state.employees.map(employee => employee.id_perfil === action.payload.id_perfil ? action.payload : employee)
                : [...state.employees, action.payload];

            return {
                ...state,
                isSubmitting: false,
                employees: updatedEmployees,
                ...initialState.formFields,
                currentEmployee: null,
            }

        case 'MUTATION_FAILURE':
            return {
                ...state,
                isSubmitting: false,
                mutationError: action.payload,
            }

        case 'FIND_START':
            return {
                ...state,
                loading: true,
                findError: null
            }

        case 'FIND_FAILURE':
            return {
                ...state,
                loading: false,
                findError: action.payload,
                mutationError: action.payload
            }

        case "CLEAR_DATA":
            return initialState

        default:
            return state
    }
}

export const useManagerReducer = () => {
    const [managerState, dispatch] = useReducer<ManagerState, [action: ManagerAction]>(managerReducerActions, initialState)

    const fetchEmployees = useCallback(async (token: string) => {
        // if (!token) {
        //     dispatch({
        //         type: "FETCH_FAILURE",
        //         payload: "Acesso negado."
        //     })
        //     return
        // }

        // dispatch({ type: "FETCH_START" })

        // const response = await fetchEmployeeList(token)

        // if (!response?.success) {
        //     dispatch({
        //         type: "FETCH_FAILURE",
        //         payload: response?.body.text ?? "Falha ao carregar a lista de funcionários."
        //     })
        //     return
        // }

        // dispatch({
        //     type: "FETCH_SUCCESS",
        //     payload: response.body.employees
        // })
    }, [])

    const handleChangeForm = useCallback((name: keyof EmployeeFormFields, value: string | undefined) => {
        dispatch({
            type: "FORM_FIELD_CHANGE",
            payload: { name, value }
        })
    }, [managerState.formFields.id_funcionario])

    const setEmployeeToEdit = useCallback((employee: Employee) => {
        dispatch({
            type: "SET_EMPLOYEE_FOR_EDIT",
            payload: employee
        })
    }, [])

    const clearEmployeeForm = useCallback(() => {
        dispatch({ type: "CLEAR_FORM" })
    }, [])

    const handleCreateEmployee = useCallback(async (token: string) => {
        // if (!token) {
        //     dispatch({
        //         type: "MUTATION_FAILURE",
        //         payload: "Acesso negado."
        //     })
        //     return
        // }

        // dispatch({ type: "MUTATION_START" })

        // switch (managerState.formFields.nome_perfil) {
        //     case "Recepcionista":
        //         managerState.formFields.id_perfil = 2
        //         break;

        //     case "Governança":
        //         managerState.formFields.id_perfil = 3
        //         break;
        // }

        // const response = await createEmployee(
        //     managerState.formFields as EmployeeFormFields,
        //     token
        // )

        // if (!response.success) {
        //     dispatch({
        //         type: "MUTATION_FAILURE",
        //         payload: response.body.text ?? "Falha ao criar funcionário."
        //     })
        //     return
        // }

        // dispatch({
        //     type: "MUTATION_SUCCESS",
        //     payload: {
        //         employee: response.body.employee,
        //         message: response.body.text
        //     }
        // })
    }, [managerState.formFields])

    const handleUpdateEmployee = useCallback(async (token: string) => {
        // if (!token) {
        //     dispatch({
        //         type: "MUTATION_FAILURE",
        //         payload: "Acesso negado."
        //     })
        //     return
        // }

        // dispatch({ type: "MUTATION_START" })

        // switch (managerState.formFields.nome_perfil) {
        //     case "Recepcionista":
        //         managerState.formFields.id_perfil = 2
        //         break;

        //     case "Governança":
        //         managerState.formFields.id_perfil = 3
        //         break;
        // }

        // const response = await updateEmployee(
        //     managerState.formFields.id_funcionario!,
        //     managerState.formFields as EmployeeFormFields,
        //     token
        // )

        // if (!response.success) {
        //     dispatch({
        //         type: "MUTATION_FAILURE",
        //         payload: response.body.text ?? "Falha ao atualizar funcionário."
        //     })
        //     return
        // }

        // dispatch({
        //     type: "MUTATION_SUCCESS",
        //     payload: response.body.employee
        // })
    }, [managerState.formFields])

    const findEmployee = useCallback(async (id: string, token: string) => {
        // if (!token) {
        //     dispatch({
        //         type: "FIND_FAILURE",
        //         payload: "Acesso negado."
        //     })
        //     return
        // }

        // dispatch({ type: "FIND_START" })

        // const response = await findEmployeeById(id, token)

        // if (!response.success) {
        //     dispatch({
        //         type: "FIND_FAILURE",
        //         payload: response.body.text ?? "Falha ao buscar funcionário."
        //     })
        //     return
        // }

        // dispatch({
        //     type: "SET_EMPLOYEE_FOR_EDIT",
        //     payload: response.body.employee
        // })
    }, [])

    return { ...managerState, fetchEmployees, handleChangeForm, setEmployeeToEdit, clearEmployeeForm, handleCreateEmployee, handleUpdateEmployee, findEmployee }
}