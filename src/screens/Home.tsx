import { useState } from "react";

import { Product as ProductType } from "../products";

import { AddModal } from "../components/shared/AddModal";
import { AddModalButton } from "../components/shared/AddModalButton";
import { products } from "../products";
import { Product } from "../components/shared/Product";

export const Home = () => {
  const [productsList, setProductsList] = useState(products);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const headleOpen = () => setIsModalOpen(true);

  const headleClose = () => setIsModalOpen(false);

  const handleRemove = (id: number) => {
    setProductsList((previousList) => {
      return previousList.filter((product) => product.id != id);
    });
  };

  const addProduct = (product: ProductType) => {
    setProductsList((previousList) => {
      return [product, ...previousList];
    });
    setIsModalOpen(false);
  };

  return (
    <>
      <AddModalButton onOpen={headleOpen} />

      <section className="products-section" id="products-section">
        {productsList.map((product) => (
          <Product key={product.id} product={product} onRemove={handleRemove} />
        ))}
      </section>

      <AddModalButton onOpen={headleOpen} />

      <AddModal
        isOpen={isModalOpen}
        onClose={headleClose}
        addProduct={addProduct}
      />
    </>
  );
};
