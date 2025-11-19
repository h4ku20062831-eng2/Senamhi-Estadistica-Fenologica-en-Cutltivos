import { useState, type ChangeEvent, type FormEvent, type ReactHTMLElement } from "react"
import "./CultivoForm.css"


interface Props {

    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    showSuccess: boolean;
}


export const CultivoForm = ({ handleSubmit, showSuccess }: Props) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Crear Cultivo Fenológico</h2>

                {showSuccess && ( 
                    <div className="success-message">
                        ✓ Los datos fueron enviados correctamente
                    </div>
                )}
                <div className="form-group">
                    <label htmlFor="nombreCultivo">Nombre del Cultivo</label>
                    <input
                        id="nombreCultivo"
                        name="nombreCultivo"
                        type="text"
                        placeholder="Ej: Maíz, Cacao, Platano "
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="estacion">Estación del Año</label>
                    <input
                        id="estacion"
                        name="estacion"
                        type="text"
                        placeholder="Ej: Aucayacu, Aguaytia, Tingo Maria"
                    />
                </div>

                <button type="submit">Registrar Cultivo</button>
            </form>
        </div>
    )
}






export default CultivoForm