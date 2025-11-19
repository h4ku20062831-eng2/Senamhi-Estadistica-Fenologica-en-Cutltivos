import { useState } from "react"

export const usePost = (url: string) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [showSuccess, setShowSuccess] = useState(false);

    const post = async (body: any) => {
        setLoading(true);
        setError(null);

        try {
            const res = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            if (!res.ok) throw new Error("Error en la petición");

            const data = await res.json(); 

            setShowSuccess(true);

            setTimeout(() => {
                setShowSuccess(false);
            }, 3000);

            return data;

        } catch (err) {
            setError((err as Error).message);
            return null;
        } finally {
            setLoading(false);
        }
    };

    return { post, loading, error, showSuccess };
};