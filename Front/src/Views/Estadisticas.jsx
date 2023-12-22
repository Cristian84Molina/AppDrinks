import EstadisticasFecha from "../Components/EstadisticaFecha";
import NavBarAdmin from "../Components/NavBarAdmin";
import SideBarAdmin from "../Components/SidebarAdmin";
import EstadisticasDrinks from "../Components/EstadisticaDrinks";

const Estadisticas = () => {
  return (
    <div className="font-sans">
      <div className="relative">
        <NavBarAdmin />
      </div>
      <div className="flex max-h-screen">
        <SideBarAdmin />
        <EstadisticasFecha />
        <EstadisticasDrinks />
      </div>
    </div>
  );
};

export default Estadisticas;
