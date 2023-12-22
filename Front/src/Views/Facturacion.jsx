import NavBarAdmin from "../Components/NavBarAdmin";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";

const Facturacion = () => {
   const location = useLocation();
   const navigate = useNavigate();
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
    const [forpago, setForpago] = useState(1); //establecemos la forma de pago x defecto efectivo

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



   const handleFormaPago = (e) => {
      e.preventDefault();
      const valor = e.target.value;
      setForpago(valor);
   };

   const handleGrabar = (e) => {
       e.preventDefault();
       const fecha = new Date(Date.now()).toLocaleDateString()
       const items = [];
       let bru = 0;
       storedItems.forEach(ele => {
          const registro = {
             cantidad: ele.cantidad,
             preciocosto: ele.costo,
             impuesto: ele.impuesto,
             valorunitario: ele.precio,
             producto_id: ele.id
          };
          bru+= (ele.precio*ele.cantidad)/(1+ele.impuesto/100);
          items.push(registro);
       });
       const comanda = {
         fecha,
         bruto: suma,
         impuesto: suma - bru,
         neto: suma,
         cajero_id: 1,
         items,
         itemsPago: [{
            formapago_id: forpago,
            ctabancaria_id: 1,
            valor: suma,
         }],
       };
       const grabar = async() => {
          try {
             const grabado = await axios.post(`${rutaPpal}comandas`, comanda);
             let storedItems = [];
             const updatedItemsJSON = JSON.stringify(storedItems);
             localStorage.setItem("Carrito", updatedItemsJSON);
             navigate("/home");
          } catch (error) {
            console.log("Error al intentar Grabar la comanda");
          }
       };
       grabar();
   };

   return (
      <div>
          <NavBarAdmin/>
          <h1>Facturacion de Pedido</h1>
          <div className="grid grid-cols-3 h-[80%]">
              <div className="col-span-2 bg-white h-[100%] rounded-[20px] m-4 flex flex-col justify-start max-w-[900px]">
                 <table>
                 <thead>
                    <tr>
                    <th>id</th>
                    <th>Detalles</th>
                    <th>Cantidad</th>
                    <th>Impuesto</th>
                    <th>Precio</th>
                    </tr>
                 </thead>
                 <tbody>
                    {storedItems.map(ele =>
                    <tr>
                        <td>{ele.id}</td>
                        <td>{ele.name}</td>
                        <td>{ele.cantidad}</td>
                        <td>{ele.impuesto}</td>
                        <td>{ele.precio}</td>
                    </tr> 
                    )}
                    <tr><td></td><td>Totales</td>
                    <td>{storedItems.length}</td><td></td>
                    <td>{suma}</td>
                    </tr>
                 </tbody>
                 </table>   
             </div>   
             <div className="col-span-1 bg-white rounded-[20px] m-4">
                <h1>Formas de Pago</h1>
                <select name="fpago" className="mb-3" onChange={(e)=>handleFormaPago(e)}>
                   {arrayPagos.map(ele =>
                      <option value={ele.id} >{ele.name}</option>
                   )}
                </select>

                <button className="font-fredericka rounded-lg w-[40%] bg-green-400 px-2 hover:bg-green-600  font-bold text-[20px] hover:scale-105 transition"
                    onClick={(e)=>handleGrabar(e)}>
                    Guardar</button>
                <button className="font-fredericka rounded-lg w-[40%] bg-red-400 px-2 hover:bg-red-600  font-bold text-[20px] hover:scale-105 transition"
                    onClick={() => navigate("/home")}>
                    Cancelar</button>
             </div>         
          </div>
      </div>
   )
};

export default Facturacion;