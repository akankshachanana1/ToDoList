const ToDo=(props)=>{
   
    return(
       
           [ <div className="todo_style">
            <button className="b1"onClick={()=>{
                props.onSelect(props.id);
            }}>X</button><li style={{display:"inline"}}>{props.itemv}</li>
          </div>
        
        ]
          
    )
}
export default ToDo;