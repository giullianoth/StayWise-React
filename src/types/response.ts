import type { Employee } from "./employee"

interface SuccessResponse {
    success: true
    statusCode: 200 | 201
}

interface ErrorResponse {
    success: false
    statusCode: number
}

// Autenticação
export interface AuthSuccessResponse extends SuccessResponse {
    body: {
        employee: Employee
        token: string
    }
}

export interface AuthErrorResponse extends ErrorResponse {
    body: Error | {
        text: string
    }
}

export type AuthResponse = AuthSuccessResponse | AuthErrorResponse

// Funcionários
export interface EmployeeListSuccessResponse extends SuccessResponse {
    body: {
        employees: Employee[]
    }
}

export interface EmployeeListErrorResponse extends ErrorResponse {
    body: {
        text: string
    }
}

export type EmployeeResponse = EmployeeListSuccessResponse | EmployeeListErrorResponse

export interface EmployeeMutationSuccessResponse extends SuccessResponse {
    body: {
        text: string
        employee?: Employee
    }
}

export interface EmployeeMutationErrorResponse extends ErrorResponse {
    body: {
        text: string
    }
}

export type EmployeeMutationResponse = EmployeeMutationSuccessResponse | EmployeeMutationErrorResponse

export interface EmployeeFindSuccessResponse extends SuccessResponse {
    body: {
        employee: Employee
    }
}

export interface EmployeeFindErrorResponse extends ErrorResponse {
    body: {
        text: string
    }
}

export type EmployeeFindResponse = EmployeeFindSuccessResponse | EmployeeFindErrorResponse