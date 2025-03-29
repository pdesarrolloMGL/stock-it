const apiUrl = "http://localhost/apiv2/api";

export const loginUser = async (credentials) => {
    try {
        const response = await fetch(`${apiUrl}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        });

        const result = await response.json();

        if (!response.ok) {
            throw result;
        }

        return result;
    } catch (error) {
        throw error;
    }
};
