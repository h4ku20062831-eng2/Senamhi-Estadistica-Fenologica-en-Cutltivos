import type { FormEvent } from "react"
import { usePost } from "../hooks/usePost"
import CultivoForm from "../components/Forms/CultivoForm"


const CreateCultivoPage = () => {
    const { post, loading, error, showSuccess } = usePost("http://localhost:3000/cultivos")

    console.log("showSuccess en Page:", showSuccess);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        console.log("handleSubmit ejecutado");
        e.preventDefault();
        
        const form = e.currentTarget;
        const formData = new FormData(form);
        const body = Object.fromEntries(formData.entries());

        console.log("Body a enviar:", body);

        const res = await post(body);
        console.log("Respuesta recibida:", res);

        if (res) {
            form.reset();
        }
    };

    return (
        <>
            <CultivoForm 
                handleSubmit={handleSubmit} 
                showSuccess={showSuccess}
            />
        </>
    );
};

export default CreateCultivoPage;