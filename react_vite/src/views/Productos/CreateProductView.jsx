import React from "react";
import CreateProduct from "../../components/Forms/CreateProduct";
import Layout from "../../components/Layout/Layout";

function CreateProductView() {
  return (
    <Layout>
      Formulario para crear nuevo producto
      <CreateProduct />
    </Layout>
  );
}

export default CreateProductView;