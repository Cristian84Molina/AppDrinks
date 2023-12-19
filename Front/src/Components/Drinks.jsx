import { useState, useEffect } from "react";
import Ticket from "./Ticket";
import { useSelector, useDispatch } from "react-redux";
import { getArticles } from "../Redux/actions";

function Drinks() {
  // fesfsefesf
  const rutaPpal = useSelector((state) => state.rutaReducer.rutaPrincipal);
  const [drinks, setDrinks] = useState([]);
  const [selectedDrinks, setSelectedDrinks] = useState([]);
  const [conteo, setConteo] = useState(0);
  const [sumaPrecio, setSumaPrecios] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch(`${rutaPpal}productos`);
        if (!response.ok) {
          throw new Error("Error al obtener los productos");
        }
        const data = await response.json();
        setDrinks(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProductos();
  }, [rutaPpal]);

  function eliminarTrago(trago) {
    const eliminarTragoSelec = selectedDrinks.filter(
      (selectedDrink) => selectedDrink !== trago
    );

    setSelectedDrinks(eliminarTragoSelec);
    setConteo((prevConteo) => prevConteo - 1);
    setSumaPrecios((prevSumaPrecios) => prevSumaPrecios - trago.precio);
  }

  function borrarTodosLosTragos() {
    setSelectedDrinks([]);
    setConteo(0);
    setSumaPrecios(0);
  }

  function guardarTrago(trago) {
    setSelectedDrinks((prevSelectedDrinks) => [...prevSelectedDrinks, trago]);
    setConteo((prev) => prev + 1);
    setSumaPrecios((prev) => prev + trago.precio);
  }

  return (
    <div className="grid grid-cols-3 h-[70%]">
      <div className="col-span-2 bg-white  rounded-[50px] m-4 flex flex-col justify-start max-w-[700px] ">
        <div className="w-full flex justify-around ml-9">
          <h2 className="text-[50px] font-fredericka">Drinks</h2>
          <div className="flex justify-sdt items-center">
            <input
              placeholder="Buscar trago"
              className="p-3 border border-1 border-gray-400 rounded-lg h-[50%]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="grid grid-cols-2">
          {drinks
            .filter((drink) =>
              drink.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((drink, index) => (
              <div key={index} className="m-3">
                <button
                  onClick={() => {
                    guardarTrago({
                      id: drink.id,
                      nombre: drink.name,
                      precio: drink.precioventa,
                    });
                  }}
                  className="hover:bg-sky-300 p-2 w-full rounded flex flex-col-2 gap-2"
                >
                  <div>
                    <img
                      className="rounded-lg max-w-[100px] max-h-[100px]"
                      src={drink.image}
                      alt={drink.name}
                    />
                  </div>

                  <div className="flex flex-col gap-2  items-start justify-center">
                    <h6 className="font-semibold">{drink.name}</h6>
                    <h6 className="text-sm text-gray-700 text-left">
                      {drink.preparacion}
                    </h6>
                    <h6>${drink.precioventa}</h6>
                  </div>
                </button>
              </div>
            ))}
        </div>
      </div>
      <div className="col-span-1">
        <Ticket
          eliminarTrago={eliminarTrago}
          selectedDrinks={selectedDrinks}
          conteo={conteo}
          total={sumaPrecio}
          borrarTodosLosTragos={borrarTodosLosTragos}
        />
      </div>
    </div>
  );
}

export default Drinks;

/*
{drink.ingredientes.map((ing, index) => (
  <span className="" key={index}>
    {index === drink.ingredientes.length - 1
      ? `${ing}. `
      : `${ing}, `}
  </span>
))}
*/
