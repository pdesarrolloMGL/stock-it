


export const Sidebar = () => {

    return (
        <aside className="w-64 h-screen bg-blue-900 text-white fixed">
            <div className="p-5 font-bold mb-8 flex">
                <i className="ml-3 fa-solid fa-layer-group mr-2 fa-2x"></i>
                <h1 className="text-2xl">Stock It MSI</h1>
            </div>
            <nav className="mt-5">
                <ul>
                    <li className="mb-3 hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-800 cursor-pointer block">
                        <a href="dashboard.php" className="flex items-center space-x-2 p-4 hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-800 cursor-pointer block">
                            <i className="ml-3 fas fa-box-open fa-lg"></i> <span>Mi Inventario</span>
                        </a>
                    </li>
                    <li className="mb-3 hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-800 cursor-pointer block">
                        <a href="add_product.php" className="flex items-center space-x-2 p-4 hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-800 cursor-pointer block">
                            <i className="ml-3 fas fa-lg fa-plus-circle"></i> <span>Añadir Producto</span>
                        </a>
                    </li>
                    <li className="mb-3 hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-800 cursor-pointer block">
                        <a href="suppliers.php" className="flex items-center space-x-2 p-4">
                            <i className="ml-3 fas fa-lg fa-truck"></i> <span>Proveedores</span>
                        </a>
                    </li>
                    <li className="mb-3 hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-800 cursor-pointer block">
                        <a href="reports.php" className="flex items-center space-x-2 p-4 hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-800 cursor-pointer block">
                            <i className="ml-3 fas fa-lg fa-chart-bar"></i> <span>Reportes</span>
                        </a>
                    </li>
                    <li className="mb-3 hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-800 cursor-pointer block">
                        <a href="users.php" className="flex items-center space-x-2 p-4 hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-800 cursor-pointer block">
                            <i className=" ml-3 fas fa-lg fa-users"></i> <span>Usuarios</span>
                        </a>
                    </li>
                    <li className="mb-30 hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-800 cursor-pointer block">
                        <a href="settings.php" className="flex items-center space-x-2 p-4 hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-800 cursor-pointer block">
                            <i className="ml-3 fas fa-lg fa-cog"></i> <span>Configuración</span>
                        </a>
                    </li>
                    <li className="mb-3 hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-800 cursor-pointer block">
                        <a href="logout.php" className="flex items-center space-x-2 p-4 hover:bg-red-700 cursor-pointer block">
                            <i className="ml-3 fas fa-lg fa-sign-out-alt"></i> <span>Cerrar sesión</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}