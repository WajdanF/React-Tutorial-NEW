import { useState } from "react";
import Alerts from "./Alerts";
import Button from "./Button";

const Interaction = () => {
  const [clicked, setClicked] = useState(false);

  const onClick = () => {
    setClicked(true);
  };

  const onClickAlert = () => {
    setClicked(false);
  };
  return (
    <>
      {clicked && <Alerts onClick={onClickAlert} text="ALLERTING" />}
      <Button color = "primary" onClick={setClicked}/>
    </>
  );
};

export default Interaction;
