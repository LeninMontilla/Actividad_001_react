import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { fetchDelete, fetchPut } from "../../logic/ApiHelper";

const ItemProducto = ({ id, title, description, images }) => {
  const navigate = useNavigate();

  const deleteProduct = (id) => {
    fetchDelete("https://kaoxdc.pythonanywhere.com/api/medicamento/", id).then(
  
      (response) => {
        response
          ? navigate("/productos")
          : alert("No se pudo eliminar este producto");
      }
    );
  };

  const updateProduc = () => {
    fetchPut("https://kaoxdc.pythonanywhere.com/api/medicamento/", )
  };

  return (
    <div className="mt-10 bg-white p-4  flex-1 flex-co rounded-lg shadow-lg">
      <img src={images} alt="product" className="h-80 gap-0 justify-center" />
      <h1 className="text-center text-blue-500 font-bold">{title}</h1>
      <p className="text-start font-medium mt-6">{description}</p>
      <button className="bg-blue-600 shadow-lg text-white rounded-lg p-2 mt-6 w-full">
        <NavLink to={`/Producto/${id}`}>Ver detalle</NavLink>
      </button>
      <button
        onClick={() => deleteProduct(id)}
        className="w-full mt-4 p-2 shadow-lg rounded-lg text-white bg-red-600"
      >
        Eliminar
      </button>

      <button
        onClick={() => updateProduc()}
        className="w-full mt-4 p-2 shadow-lg rounded-lg text-white bg-red-600"
      >
        Modificar
      </button>
    </div>
  );
};

export default ItemProducto;