import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import ItemProducto from "../../components/Productos/ItemProduct";
import { fetchGet } from "../../logic/ApiHelper";
import { Link } from "react-router-dom";

function ProductsView() {
  const [products, setProducts] = useState([]);

  useEffect(() => {


    fetchGet("https://kaoxdc.pythonanywhere.com/api/medicamento/").then((response) => {
      setProducts(response);
      console.log(response);
    });
  }, []);

  return (
    <Layout>
      <div>
        <div className=" w-full">
          <div >
            <Link className="p-2 bg-green-400 float-right mt-4 text-white text-lg rounded-lg shadow-lg" to="/CreateProduct">Crear producto</Link>
          </div>

          <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">



            {products?.map((product) => (

              <ItemProducto
                key={product.id}
                id={product.id}
                title={product.nombre}
                description={product.description}
                images={product.photo}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default ProductsView;