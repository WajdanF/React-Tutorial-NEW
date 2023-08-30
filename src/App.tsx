import Message from "./components/Message"
import ListGroup from "./components/ListGroup"
import Alerts from "./components/Alerts";
import Button from "./components/Button";
function App() {
  const name = "LOL";
  let items = ["A", "B", "C", "D"];

  const handleSelectItem = (item:string)=>{
    console.log(item);
  }

  const handleButtonClick = ()=>{
    console.log("clicked");
    
  }
  return (
    <div>
        <ListGroup items={items} heading = "CITIES" onSelectItem={handleSelectItem}/>

        <Alerts>
          Hello <span>World</span>
        </Alerts>
        <Button text = "BUTTTON" color = "primary" onClick={handleButtonClick}/>
    </div>
  );
}

export default App;