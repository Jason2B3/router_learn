import React from "react";
import { useParams } from "react-router";
export default function ProductDetail() {
  const params = useParams(); // an object's returned
  console.log(params);
  console.log(params.productID);
  return (
    <section>
      <h1>Product Detail component rendering now</h1>
    </section>
  );
}
