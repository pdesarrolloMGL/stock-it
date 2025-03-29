import userImage from "../assets/user.png";

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
                    <button type="submit" className="text-white bg-blue-900 hover:bg-blue-950 focus:outline-none focus:ring-4 focus:ring-blue-950 font-medium rounded-xl px-5 py-2.5 sm:w-aut">
                        <i className="mr-2 fa-lg fa-solid fa-plus"></i> <span>Añadir productos</span>
                    </button>
                </div>
            </section>
        </header>
    )
}