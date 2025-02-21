import { useState } from "react"

const Ex1 = () => {
    const [name, setName] = useState("");


    return (

        <>
            <h1>Ex1</h1>
            <div>
                <input type="text"
                    style={{ marginRight: "10px", width: "60vw", fontSize: "20px", borderRadius: "10px", padding: "10px" }}
                    onChange={(e) => { setName(e.target.value) }}
                    placeholder="input name" />
                <h1>This is input: {name}</h1>
            </div>
        </>
    )
}

export default Ex1