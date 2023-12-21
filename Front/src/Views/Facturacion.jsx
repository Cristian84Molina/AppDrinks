import NavBarAdmin from "../Components/NavBarAdmin";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

const Facturacion = () => {
    const rutaPpal = useSelector((state) => state.rutaReducer.rutaPrincipal);
    //cargamos el localstorage
    let localStorageJSON = localStorage.getItem("Carrito");
    let storedItems = [];
    if(localStorageJSON!==null) {
         storedItems = JSON.parse(localStorageJSON); 
    };
    let suma = 0;
    storedItems.forEach(ele => {suma+=ele.precio});
    const [arrayPagos, setArrayPagos] = useState([]);
    let sele = 1;
    let xsuma = suma;
    let array2 = [];
    arrayPagos.forEach(ele => {
       const item = {
          id: ele.id,
          name: ele.name,
          valor: xsuma,
          seleccionado: sele
       };
       xsuma = 0;
       sele = 0;
       array2.push(item);
    });
    const [fpagos, setFpagos] = useState(array2);
    console.log(fpagos)

    useEffect(() => {
        const fetchFpagos = async () => {
          try {
            const response = await axios.get(`${rutaPpal}formaspago`);
            setArrayPagos(response.data);
          } catch (error) {
            console.error("Error fetching lines:", error);
          }
        };
    
        fetchFpagos();
      }, []);


   return (
      <div>
          <NavBarAdmin/>
          <h1>Facturacion de Pedido</h1>
          <div className="grid grid-cols-3 h-[80%]">
              <div className="col-span-2 bg-white h-[100%] rounded-[50px] m-4 flex flex-col justify-start max-w-[900px]">
                 <table>
                 <thead>
                    <tr>
                    <th>id</th>
                    <th>Detalles</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    </tr>
                 </thead>
                 <tbody>
                    {storedItems.map(ele =>
                    <tr>
                        <td>{ele.id}</td>
                        <td>{ele.name}</td>
                        <td>{ele.cantidad}</td>
                        <td>{ele.precio}</td>
                    </tr> 
                    )}
                    <tr><td></td><td>Totales</td>
                    <td>{storedItems.length}</td>
                    <td>{suma}</td>
                    </tr>
                 </tbody>
                 </table>   
             </div>   
             <div className="col-span-1 bg-white rounded-[50px] m-4">
                <h1>Formas de Pago</h1>
                <table>
                   {fpagos.map(ele =>
                      <tr>
                        <td>{ele.id}</td>
                        <td>{ele.name}</td>
                        <td>{ele.valor}</td>
                        <td>{ele.seleccionado}</td>
                      </tr>
                   )}
                </table>

    
                <button className="font-fredericka rounded-lg w-[40%] bg-green-400 px-2 hover:bg-green-600  font-bold text-[20px] hover:scale-105 transition">
                    Guardar</button>
                <button className="font-fredericka rounded-lg w-[40%] bg-red-400 px-2 hover:bg-red-600  font-bold text-[20px] hover:scale-105 transition">
                    Cancelar</button>
             </div>         
          </div>
      </div>
   )
};

export default Facturacion;