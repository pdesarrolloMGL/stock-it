import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { TableProducts } from "../components/TableProducts"

export const Dashboard = () => {

    return (
        <>
            <Sidebar />
            <Header />
            <TableProducts />
        </>
    )
}