import { useState } from "react"
import { loginUser } from "../services/authService"
import { useNavigate } from "react-router-dom"

export const Login = () => {

    const [user, setUser] = useState("");
    const [password, setPass] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const data = await loginUser({ name: user, password: password });

            if (data.error) { 
                throw new Error(data.error); 
            }

            if (data.token) {
                localStorage.setItem("token", data.token);
            } else {
                console.warn("No se recibió token en la respuesta");
            }
    
            localStorage.setItem("user", JSON.stringify(data.user));
            setSuccess("Login Exitoso");

            setTimeout(() => {
                navigate("/home");
            }, 1000);
        } catch (error) {
            setError("Error desconocido");
        }
    }
   
    return (
        <div className='h-screen flex items-center justify-center bg-gray-100'>
        <form method='POST' onSubmit={handleSubmit} className='max-w-sm mx-auto bg-white p-10 rounded-3xl shadow-2xl'>
            <div className='mb-5 flex flex-col'>
                <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900'>User</label>
                <input type='text' id='name' name='name' value={user} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 placeholder-gray-400 outline-none focus:ring-blue-800 focus:ring-2'
                        placeholder='user: admin' autoComplete="off" onChange={(e) => setUser(e.target.value)} required/>
            </div>
            <div className='mb-5 flex flex-col'>
                <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900'>Password</label>
                <input type='password' id='password' name='password' value={password} className='bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg block w-full p-2.5 outline-none focus:ring-blue-800 focus:ring-2 placeholder-gray-400'
                        placeholder='****' autoComplete="off" onChange={(e) => setPass(e.target.value)} required/>
            </div>
        
            <div className='mb-5 flex flex-col'>
            <button type='submit' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>Submit</button>
                {error && <p className="text-xs text-red-700">{error}</p>}
                {!error && success && <p className=" mt-4 text-xs text-green-700">{success}</p>}
            </div>
        </form>
    </div> 
    )
}