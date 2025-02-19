import { useState } from "react"

const Ex1 = () => {
    const [name, setName] = useState("");


    return (

        <>
        <h3>Ex1</h3>
        <div>
        <input type="text" style={{marginRight: "10px"}} onChange={(e)=>{setName(e.target.value)}} placeholder="input name"/>
        <span>This is input: {name}</span>
        </div>
        </>
    )
}

export default Ex1