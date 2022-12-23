import React, { useState } from "react";
import { Product as ProductType } from "../../products";

import closeIcone from "../../assets/icons/close.svg";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  addProduct: (product: ProductType) => void;
}

export const AddModal = (props: Props) => {
  const [formState, setFormState] = useState({
    title: "",
    price: 0,
    description: "",
  });

  const handleInputChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((previousState) => {
      const target = event.target as HTMLInputElement;

      return {
        ...previousState,
        [target.name]: target.value,
      };
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    var product: ProductType = {
      id: Math.random(),
      title: formState.title,
      price: formState.price,
      description: formState.description,
      discountPercentage: 0,
      rating: 0,
      stock: 0,
      brand: "",
      category: "",
      thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
    };

    props.addProduct(product);
  };

  return (
    <aside
      className={`add_modal ${props.isOpen ? "add_modal--shown" : ""} `}
      id="add-modal"
    >
      <div className="add_modal__wrapper">
        <span
          id="close-modal"
          className="add_modal__close"
          onClick={props.onClose}
        >
          <img src={closeIcone} />
        </span>
        <form onSubmit={handleSubmit} className="add_modal__form" id="add-form">
          <h5>Add New</h5>

          <input
            type="text"
            name="title"
            value={formState.title}
            onChange={handleInputChange}
            placeholder="Title"
          />
          <input
            type="text"
            name="price"
            value={formState.price}
            onChange={handleInputChange}
            placeholder="Price"
          />
          <textarea
            name="description"
            id="description"
            value={formState.description}
            onChange={handleInputChange}
            placeholder="Description"
          ></textarea>
          <button type="submit">Add</button>
        </form>
      </div>
    </aside>
  );
};
