import { useState, type ChangeEvent, type FormEvent, type ReactHTMLElement } from "react"


// logica del backend
interface Props {

    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}


export const CultivoForm = ({ handleSubmit }: Props) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name="nombreCultivo"
                    type="text"
                    placeholder="Write a Cultivo"
                />
                <input
                    name="estacion"
                    type="text"
                    placeholder="Write a Estation"
                />
                <input
                    name="fechaSiembra"
                    type="date"
                    placeholder="Write a fechaSiembra"
                />
                <input
                    name="tempMinOptima"
                    type=""
                    placeholder="Write a tempMinOptima"
                />
                <input
                    name="tempMaxOptima"
                    type="text"
                    placeholder="Write a tempMaxOptima"

                />

                <button type="submit">Send</button>
            </form>
        </div>
    )
}






export default CultivoForm