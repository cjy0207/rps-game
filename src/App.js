import { useState } from "react";
import "./App.css";
import Box from "./component/Box";


const choice = {
  rock:{
    name : "Rock",
    img : "https://previews.123rf.com/images/8dda/8dda1605/8dda160500010/56822337-%ED%9D%B0-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%EB%B0%94%EC%9C%84-%EB%8F%8C.jpg"
  },
  scissors:{
    name : "Scissors",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa5Ch3-1SK0QKazmVVNFrJQ8d5C7qL18zoMQ&s"
  },
  paper:{
    name : "Paper",
    img : "https://i.pinimg.com/736x/0b/41/25/0b41253a4041ddb57004d633e4979430.jpg"
  }
}

function App() {

  const [userSelect, setUserSelect] = useState(null)

  const play=(userChoice)=>{
    setUserSelect(choice[userChoice])
  }
  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} />
        <Box title="Computer" />
      </div>

      <div className="main">
        <button onClick={()=>play("scissors")}>가위</button>
        <button onClick={()=>play("rock")}>바위</button>
        <button onClick={()=>play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
