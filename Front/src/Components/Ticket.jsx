import React from "react";

function Ticket({
  selectedDrinks,
  conteo,
  total,
  eliminarTrago,
  borrarTodosLosTragos,
}) {
  const today = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const formattedDate = today.toLocaleDateString("es-ES", options);

  const confirmarBorrarTodos = () => {
    if (window.confirm("¿Estás seguro de borrar todos los tragos?")) {
      borrarTodosLosTragos();
    }
  };

  const confirmarEliminarTrago = (trago) => {
    //if (window.confirm(`¿Estás seguro de eliminar el trago ${trago.nombre}?`)) {
    eliminarTrago(trago);
    //}
  };

  return (
    <>
      <div className="bg-white h-full rounded-[50px] p-3 m-4 flex flex-col justify-start max-w-[500px]">
        <h2 className="text-[50px] font-fredericka">Ticket</h2>
        <div>{formattedDate}</div>
        <div className="w-full flex items-center justify-center pt-3">
          <div className="w-[80%] flex items-center bg-gray-700 h-[2px]"></div>
        </div>
        <div className="text-xl flex flex-cols-7 justify-around h-[80%] overflow-y-auto max-h-[300px]">
          <ul className="flex flex-col justify-start  mt-3 items-start col-span-3">
            {selectedDrinks.map((selectedDrink, index) => (
              <div className="flex flex-row gap-2" key={index}>
                <button
                  className="text-white text-sm bg-red-500 px-2 h-[25px] rounded-xl"
                  onClick={() => confirmarEliminarTrago(selectedDrink)}
                >
                  x
                </button>
                <li>{selectedDrink.nombre}</li>
              </div>
            ))}
          </ul>

          <ul className="flex flex-col justify-start   items-start col-span-3">
            {selectedDrinks.map((selectedDrink, index) => (
              <li key={index}>$ {selectedDrink.precio}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col-2 justify-around text-xl font-bold w-full ">
          <div>Cantidad: {conteo}</div>
          <div>Total: {total}</div>
        </div>
      </div>
      <div className=" flex justify-around">
        <button
          onClick={confirmarBorrarTodos}
          className="font-fredericka rounded-lg w-[40%] bg-red-500 px-2 hover:bg-red-600  font-bold text-[20px] hover:scale-105 transition"
        >
          Borrar todo
        </button>
        <button className="font-fredericka rounded-lg w-[40%] bg-sky-500 py-2 hover:bg-sky-600 hover:scale-105 transition font-bold text-[30px]">
          Cobrar
        </button>
      </div>
    </>
  );
}

export default Ticket;
