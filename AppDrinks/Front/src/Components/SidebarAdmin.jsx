import { Link } from "react-router-dom"



const SideBarAmin = () =>{

    return (
        <div className="bg-black w-64 h-screen border-t-4 border-white">
            <Link className="font-fredericka text-white text-2xl " to="/admin/NewDrinks">
                New Drinks
            </Link>
            {/* Otro contenido de la barra lateral */}
        </div>
    )
}

export default SideBarAmin