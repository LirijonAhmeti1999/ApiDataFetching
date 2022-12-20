import plusIcon from "../../assets/icons/plus.svg";

interface Props {
  onOpen: () => void;
}

export const AddModalButton = (props: Props) => {
  return (
    <div className="add_button">
      <span>Add New</span>
      <div className="add_button__circle" onClick={props.onOpen}>
        <img src={plusIcon} alt="add icon" />
      </div>
    </div>
  );
};
