import { useState } from "react"

const Ex1 = () => {
    const [name, setName] = useState("");


    return (

        <>
        <div>
        <input type="text" onChange={(e)=>{setName(e.target.value)}} placeholder="input name"/>
        <br />
        </div>
        <span>This is input: {name}</span>
        </>
    )
}

export default Ex1