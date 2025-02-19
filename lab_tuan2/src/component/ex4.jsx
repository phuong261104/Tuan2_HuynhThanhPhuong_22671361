import { useState } from "react";

const Ex4 = () => {

    const [name, setName] = useState("");
    const [todoData, setTodoData] = useState([])

    const addToDo = (name) => {
        setTodoData([...todoData, name])
    }


    return (

        <>
        <h3>Ex4</h3>
        <div>
        <input type="text" style={{marginRight: "10px"}} onChange={(e)=>{setName(e.target.value)}} placeholder="input name"/>
        <span style={{marginRight: "10px"}}>This is input: {name}</span>
        <button onClick={()=>addToDo(name)} >Them</button>
        </div>
        {todoData
        ? <div>{
            todoData.map((item, index) => {
                return (
                    <div style={{margin: "10px"}}>
                        {item}
                        <button>delete</button>
                    </div>
                )
            })
        } </div>:
        <span>No data</span>
        }
        </>
    )
}

export default Ex4