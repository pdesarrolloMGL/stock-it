import userImage from "../assets/user.png";
import { ButtonAddProduct } from "./ButtonAddProduct";

export const Header = () => {

    return (
        <header className="flex flex-col pl-65 sticky">
            <nav className="flex justify-end p-5">
                <img className="w-10" src={userImage} alt="" />
            </nav>
            <section className="p-4">
                <div className="flex justify-between items-end">
                    <div>
                        <h1 className="text-3xl font-bold">Mi inventario</h1>
                        <p className="text-md text-gray-500">Controla fácilmente la disponibilidad y stock de tus productos</p>
                    </div>
                    <ButtonAddProduct />
                </div>
            </section>
        </header>
    )
}