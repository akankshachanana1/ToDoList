import { useState } from "react";
import ToDoList from "./ToDo";
const App=()=>{
  const x="";
  const [it,sit]=useState(x);
  const [items,setItems]=useState([]);
  const X =(e)=>{
sit(e.target.value);
  }
  const X1=()=>{
setItems((oldItems)=>{
  return [...oldItems,it]
})
sit("");
  }
  const change=(id)=>{
    console.log("deleted");
    setItems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index!==id;
      })
    })
        }
  return(
    [
      <div className="main_div"> <div className="center_div">
        <h1>To Do List</h1>
      
      <br />

      <input type="text" id="text1"placeholder="add-tems"value={it} onChange={X}></input>
      <button onClick={X1}>+</button>
      <ol>
       { items.map((item,index)=>{
         return(<ToDoList
         key={index}
         id={index}
         itemv={item} 
          onSelect={change}
         />
       ) })}
      </ol></div></div>
    ]
  )
} 

export default App;
