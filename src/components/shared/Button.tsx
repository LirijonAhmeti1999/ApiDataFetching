interface Props {
  name: string;
}

export const Button = (props: Props) => {
  return (
    <div className="button-div">
      <button className="our-button">{props.name}</button>
    </div>
  );
};
