import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item:string)=>void;
}
function ListGroup({items, heading,onSelectItem}: Props) {


  const getMessage = ()  => {
    return items.length === 0 ? <p>No items Found</p> : false;
  };

  // let selected = 0; -> No longer need this because we have the use state making it

  //State Hook that tells react this variable will change
  const [selected, setSelected] = useState(-1);

  // const [name, setName] = useState('');

  //Event Handler
  const handleClick = () => {
    console.log("clicked on");
  };

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selected === index ? "list-group-item active" : "list-group-item"
            }
            onClick={() => {
              setSelected(index);
              handleClick;
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
