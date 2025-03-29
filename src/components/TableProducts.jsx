import { useEffect, useState } from "react"
import { productsAll } from "../services/productService"

export const TableProducts = () => {

    const [products, setproducts] = useState([])
    const [error, setError] = useState(null)
    
    useEffect(() => {
        productsAll()
            .then(setproducts)
            .catch((err) => setError(err.message));
    }, []);

    return (
        <div className="relative overflow-x-auto pl-65 mt-5">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-center">
                            Nombre
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Disponibilidad
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Categoria
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Precio
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Proveedor
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                            Acción
                        </th>
                    </tr>
                </thead>
                <tbody>
                     {
                        products.map((product, index) => (
                        <tr key={product.product_id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                            <th scope="row" className="px-6 py-4 font-bold text-gray-900 whitespace-nowrap">               
                                {product.product_name}
                            </th> 
                            <td scope="row" className="px-6 text-center py-4 font-medium text-gray-900 whitespace-nowrap">               
                                <span className={`${product.availability === 1 ? "bg-green-700" : "bg-red-300"} w-30 p-1 text-white inline-block rounded-2xl shadow-2xl`}>
                                    {(product.availability !== 1) ? "No disponible" : "Disponible"}
                                </span>
                            </td> 
                            <td scope="row" className="px-6 text-center py-4 font-medium text-gray-900 whitespace-nowrap">               
                                {product.category_name}
                            </td> 
                            <td scope="row" className="px-6 text-center py-4 font-medium text-gray-900 whitespace-nowrap">               
                                {product.price}
                            </td> 
                            <td scope="row" className=" px-6 text-center py-4 font-medium text-gray-900 whitespace-nowrap">               
                                {product.supplier_name}
                            </td> 
                            <td className="px-6 py-4 flex justify-around">
                                <button className="text-blue-900 hover:underline text-center">
                                    <i className="fa-solid fa-pen-to-square fa-lg"></i>
                            </button>
                                <button className="text-red-700 hover:underline">
                                    <i className="fa-solid fa-trash fa-lg"></i>
                                </button>
                            </td>
                        </tr>
                            ))
                        }       
                </tbody>
            </table>
        </div>
    )
}