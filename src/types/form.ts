import type { ChangeEventHandler, FormEventHandler } from "react"

export interface FormComponentProps {
    onSubmit: FormEventHandler
    onChange: ChangeEventHandler
    action: "create" | "edit"
}