export interface Employee {
    id_funcionario?: number;
    id_perfil: number;
    nome: string;
    email: string;
    senha_hash: string;
    status?: string;
    data_criacao?: Date;
    nome_perfil?: string
}

export interface EmployeeFormFields extends Employee {
    senha?: string
}