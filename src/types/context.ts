import type { Employee, EmployeeFormFields } from "./employee"
import type { LoginFormFields } from "./login"
import type { AuthState, ManagerState } from "./reducer_states"

interface AuthContext extends AuthState {
    handleChange: (name: keyof LoginFormFields, value: string) => void
    handleLogin: () => Promise<void>
    logout: () => void
}

interface ManagerContext extends ManagerState {
    fetchEmployees: (token: string) => Promise<void>
    handleChangeForm: (name: keyof EmployeeFormFields, value: any) => void
    handleCreateEmployee: (token: string) => Promise<void>
    handleUpdateEmployee: (token: string) => Promise<void>
    setEmployeeToEdit: (employee: Employee) => void
    clearEmployeeForm: () => void
    findEmployee: (id: string, token: string) => Promise<void>
}

export interface Context {
    auth: AuthContext
    manager: ManagerContext
}