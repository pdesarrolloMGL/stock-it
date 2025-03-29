const apiUrl = "http://localhost/apiv2/api";

export const productsAll = async () => {
    try {
        const response = await fetch(`${apiUrl}/products`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.error || "Error al encontrar los productos");
        }

        return result;
    } catch (error) {
        throw new Error(error.message || "Error de conexión con el servidor");
    }
}