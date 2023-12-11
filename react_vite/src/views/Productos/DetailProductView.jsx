import React, { useEffect, useState } from "react";
import { fetchGet } from "../../logic/ApiHelper";
import { useParams } from "react-router-dom";

const DetailProductView = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  useEffect(() => {
    fetchGet("https://kaoxdc.pythonanywhere.com/api/medicamento/" + id).then(
      (response) => setProduct(response)
    );
  }, []);

  return (
    <div>
      <h1>{product.title}</h1>
      <h4>{product.price}</h4>
      <p>{product.description}</p>
    </div>
  );
};

export default DetailProductView;