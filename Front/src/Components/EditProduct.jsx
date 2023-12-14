// EditProduct.js
import { useState, useEffect } from "react";
import axios from "axios";

const EditProduct = ({ productId, onClose, onUpdate }) => {
  const [productData, setProductData] = useState({
    // Definir la estructura de los datos del producto
    name: "",
    preparacion: "",
    precioventa: 0,
    // ... otros campos
  });

  useEffect(() => {
    // Cargar los datos del producto para editar
    axios.get(`http://localhost:3002/productos/${productId}`)
      .then((response) => {
        setProductData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [productId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleUpdate = () => {
    // Lógica para actualizar el producto en la base de datos
    axios.put(`http://localhost:3002/productos/${productId}`, productData)
      .then(() => {
        onUpdate(); // Actualizar la lista de productos en la vista principal
        onClose(); // Cerrar el formulario de edición
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Editar Producto</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">Nombre del Producto</label>
            <input
              type="text"
              id="name"
              name="name"
              value={productData.name}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="preparacion" className="block text-sm font-medium text-gray-600">Ingredientes</label>
            <textarea
              id="preparacion"
              name="preparacion"
              value={productData.preparacion}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="precioventa" className="block text-sm font-medium text-gray-600">Precio de Venta</label>
            <input
              type="number"
              id="precioventa"
              name="precioventa"
              value={productData.precioventa}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          {/* Agregar más campos según la estructura de tu producto */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleUpdate}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Guardar
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-2 text-gray-500 hover:text-gray-700 px-4 py-2 rounded-md"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
