import { AddProduct } from "./addProduct";


export const ButtonAddProduct = () => {
    return (
        <>
            <button data-modal-target="default-modal" data-modal-toggle="default-modal" className="text-white bg-blue-900 hover:bg-blue-950 focus:outline-none focus:ring-4 focus:ring-blue-950 font-medium rounded-xl px-5 py-2.5 sm:w-aut" type="button">
                <i className="mr-2 fa-lg fa-solid fa-plus"></i> <span>Añadir productos</span>
            </button>

            <AddProduct />
        </>
    )
}