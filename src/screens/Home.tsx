import { useState } from "react";

import { AddModal } from "../components/shared/AddModal";
import { AddModalButton } from "../components/shared/AddModalButton";
import { products } from "../products";
import { Product } from "../components/shared/Product";

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const headleOpen = () => setIsModalOpen(true);

  const headleClose = () => setIsModalOpen(false);

  console.log(products);
  return (
    <>
      <AddModalButton onOpen={headleOpen} />

      {products.map((item) => {
        <Product key={item.id} product={item} />;
      })}

      <AddModalButton onOpen={headleOpen} />

      <AddModal isOpen={isModalOpen} onClose={headleClose} />
    </>
  );
};
