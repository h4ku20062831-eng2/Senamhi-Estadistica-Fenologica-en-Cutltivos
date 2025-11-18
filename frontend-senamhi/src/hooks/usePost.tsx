import { useState } from "react"

const API = 'http://localhost:3000'


export const usePost = (url: string) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const post = async (body: any) => {
        setLoading(true) // 
        setError(null)

        try {

            const res = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)

            })

            if (!res.ok) throw new Error("Error en la petición")

            const data = await res.json()
            console.log(`Cuerpo enviado ${data}`)

            return data;    


        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false)
        }
    };
    return { post, loading, error }
}