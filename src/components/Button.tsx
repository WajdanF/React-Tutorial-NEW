import React from "react";
interface Props {
  text?: string;
  onClick: () => void;
  color?: "primary" | "secondary"; // ? -> Tells us that it is optional and | -> or statement to tell us that it can have primary or secondary only
}
const Button = ({ text, onClick, color }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
