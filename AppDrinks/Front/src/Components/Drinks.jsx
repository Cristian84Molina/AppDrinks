import React, { useState } from "react";
import drinks from "../json/drinks.json";
import Ticket from "./Ticket";

function Drinks() {
  const [selectedDrinks, setSelectedDrinks] = useState([]);
  const [conteo, setConteo] = useState(0);
  const [sumaPrecio, setSumaPrecios] = useState(0);

  function eliminarTrago(trago) {
    const eliminarTragoSelec = selectedDrinks.filter((selectedDrink) => {
      return selectedDrink !== trago;
    });

    setSelectedDrinks(eliminarTragoSelec);

    setConteo((prevConteo) => prevConteo - 1);
    setSumaPrecios((prevSumaPrecios) => prevSumaPrecios - trago.precio);
  }

  function guardarTrago(trago) {
    setSelectedDrinks((prevSelectedDrinks) => [...prevSelectedDrinks, trago]);
    setConteo((prev) => prev + 1);
    setSumaPrecios((prev) => prev + trago.precio);
  }
  return (
    <div className="grid grid-cols-3 gap-">
      <div className="col-span-2 bg-white  rounded-[50px] m-4 flex flex-col justify-start max-w-[700px] ">
        <h2 className="text-[50px] font-fredericka">Drinks</h2>
        <div className="grid grid-cols-2">
          {drinks.map((drink, index) => (
            <div key={index} className="m-3 ">
              <button
                onClick={() => {
                  guardarTrago({ nombre: drink.nombre, precio: drink.precio });
                }}
                className="hover:bg-sky-300 p-2 w-full rounded flex flex-col-2 gap-2"
              >
                <div>
                  <img
                    className="rounded-lg max-w-[100px] max-h-[100px]"
                    src={`${drink.imagen}`}
                    alt={drink.nombre}
                  />
                </div>

                <div className="flex flex-col gap-2  items-start justify-center">
                  <h6 className="font-semibold">{drink.nombre}</h6>
                  <h6 className="text-sm text-gray-700 text-left">
                    {drink.ingredientes.map((ing, index) => (
                      <span className="" key={index}>
                        {index === drink.ingredientes.length - 1
                          ? `${ing}. `
                          : `${ing}, `}
                      </span>
                    ))}
                  </h6>
                  <h6>${drink.precio}</h6>
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
        />
      </div>
    </div>
  );
}

export default Drinks;
