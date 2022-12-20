import closeIcone from "../../assets/icons/close.svg";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
export const AddModal = (props: Props) => {
  return (
    <aside
      className={` ${props.isOpen ? "add_Modal--shown" : "add_modal"} `}
      id="add-modal"
    >
      <div className="add_modal__wrapper">
        <span
          id="close-modal"
          className="add_modal__close"
          onClick={props.onClose}
        >
          <img src={closeIcone} alt="" />
        </span>
        <form className="add_modal__form" id="add-form">
          <h5>Add New</h5>

          <input type="text" name="title" placeholder="Title" />
          <input type="text" name="price" placeholder="Price" />
          <textarea
            name="description"
            id="description"
            placeholder="Description"
          ></textarea>
          <button type="submit">Add</button>
        </form>
      </div>
    </aside>
  );
};
