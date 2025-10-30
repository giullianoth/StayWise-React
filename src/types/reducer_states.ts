import type { Employee, EmployeeFormFields } from "./employee"
import type { LoginFormFields } from "./login"

interface ReducerStates {
    loading: boolean
}

// Autenticação
export interface AuthState extends ReducerStates {
    fields: LoginFormFields
    authenticated: boolean
    loginError: string | null
    employee: Employee | null
    token: string | null
}

export type AuthAction =
    | { type: "FIELD_CHANGE"; payload: { name: keyof LoginFormFields, value: string } }
    | { type: "SUBMIT_START" }
    | { type: "SUBMIT_SUCCESS", payload: { employee: Employee, token: string } }
    | { type: "SUBMIT_FAILURE", payload: string }
    | { type: "LOGOUT" }

// Gerente
export interface ManagerState extends ReducerStates {
    employees: Employee[]
    fetchError: string | null
    formFields: Partial<EmployeeFormFields>
    isSubmitting: boolean
    mutationError: string | null
    currentEmployee: Employee | null
    findError: string | null
}

export type ManagerAction =
    | { type: 'FETCH_START' }
    | { type: 'FETCH_SUCCESS', payload: Employee[] }
    | { type: 'FETCH_FAILURE', payload: string }
    | { type: 'CLEAR_DATA' }
    | { type: 'FORM_FIELD_CHANGE', payload: { name: keyof EmployeeFormFields, value: any } }
    | { type: 'SET_EMPLOYEE_FOR_EDIT', payload: Employee }
    | { type: 'CLEAR_FORM' }
    | { type: 'MUTATION_START' }
    | { type: 'MUTATION_SUCCESS', payload: Employee }
    | { type: 'MUTATION_FAILURE', payload: string }
    | { type: 'FIND_START' }
    | { type: 'FIND_FAILURE', payload: string }