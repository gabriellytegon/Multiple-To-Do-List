import "./style.css";

export const Input = ({ ...props }) => {
  return (
    <>
      <input type="text" {...props} className="itemInput" />
    </>
  );
};
