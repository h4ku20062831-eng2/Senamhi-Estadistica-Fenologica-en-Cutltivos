import type { FormEvent } from "react"
import { usePost } from "../hooks/usePost"
import CultivoForm from "../components/Forms/CultivoForm"

const CreateCultivoPage = () => {
    const { post, loading, error } = usePost("http://localhost:3000/cultivos")

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.currentTarget;
        const formData = new FormData(form);

        const body = Object.fromEntries(formData.entries())

        const res = await post(body)

        if (res) {
            console.log("Los datos fueron enviados")
            form.reset()
        }
    }
    return (
        <CultivoForm handleSubmit={handleSubmit} />
    )

}



export default CreateCultivoPage