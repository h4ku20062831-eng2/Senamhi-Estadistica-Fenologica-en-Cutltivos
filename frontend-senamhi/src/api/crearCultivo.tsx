const API = 'http://localhost:3000'

interface Crear {
    nombreCultivo: string,
    estacion: string,
    fechaSiembra: Date,
    tempMinOptima: number,
    tempMaxOptima: number,

}

export const createCultivoRequest = (crear: Crear) => {
    return fetch(`${API}/cultivos`, {
        method: 'POST',
        body: JSON.stringify(crear),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}