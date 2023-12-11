import { useLocation, useNavigate } from "react-router";

const NavBarAdmin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <nav className="bg-black p-4 flex justify-between items-center">
      <h1 className="font-fredericka text-white text-xl md:text-4xl  p-4">
        Drinks App Administrador
      </h1>
      {location.pathname == "/home" ? (
        <>
          <button
            onClick={() => navigate("/admin")}
            className="bg-slate-200 font-fredericka text-lg  text-black px-4 py-2 rounded"
          >
            Adminitrador
          </button>
          <button className="bg-slate-200 font-fredericka text-lg  text-black px-4 py-2 rounded">
            Cierre Turno
          </button>
        </>
      ) : (
        <button
          onClick={() => navigate("/home")}
          className="bg-slate-200 font-fredericka text-lg  text-black px-4 py-2 rounded"
        >
          Pagina principal{" "}
        </button>
      )}
    </nav>
  );
};

export default NavBarAdmin;