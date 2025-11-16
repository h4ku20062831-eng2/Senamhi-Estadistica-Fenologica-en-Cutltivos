import { useState, type ChangeEvent, type FormEvent, type ReactHTMLElement } from "react"
import { createCultivoRequest } from "../../api/crearCultivo";




export const CultivoForm = () => {
    const [cultivoForm, setCultivoForm] = useState({
        nombreCultivo: "",
        estacion: "",
        fechaSiembra: "",
        tempMinOptima: "",
        tempMaxOptima: "",
    });


    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setCultivoForm({ ...cultivoForm, [e.target.name]: e.target.value })

        // Trae los name de un input o label junto al valor haciendo que se cree un nuevo objeto cultivoForm, con los valores nuevos ingresados
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const payload = {
            nombreCultivo: cultivoForm.nombreCultivo,
            estacion: cultivoForm.estacion,
            fechaSiembra: new Date(cultivoForm.fechaSiembra),
            tempMinOptima: Number(cultivoForm.tempMinOptima),
            tempMaxOptima: Number(cultivoForm.tempMaxOptima),
        }

        // Especificamos el tipo de dato que recibira createRequest, ya que si dejamos solo el useState, los valores entrarian como string y romperia mi backend
        // Por ende hacemos otra validación para que tenga los datos exactos del backend

        await createCultivoRequest(payload)

        alert("Cultivo enviado")
    }





    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="nombreCultivo"
                    type="text"
                    placeholder="Write a Cultive"
                    onChange={handleChange}
                    
                />

                <input
                    name="estacion"
                    type="text"
                    placeholder="Write a Estation"
                    onChange={handleChange}
                
                />
                <input
                    name="fechaSiembra"
                    type="date"
                    placeholder="Write a fechaSiembra"
                    onChange={handleChange}
                
                />
                <input
                    name="tempMinOptima"
                    type=""
                    placeholder="Write a tempMinOptima"
                    onChange={handleChange}
                
                />
                <input
                    name="tempMaxOptima"
                    type="text"
                    placeholder="Write a tempMaxOptima"
                    onChange={handleChange}
                
                />

                <button type="submit">Send</button>
            </form>
        </div>
    )
}   

export default CultivoForm