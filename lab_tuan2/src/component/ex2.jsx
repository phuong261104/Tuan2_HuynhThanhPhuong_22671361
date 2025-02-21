import { useState } from "react"

const Ex2 = () => {
    const [a, setA] = useState("")
    const [b, setB] = useState("")
    const [rs, setRs] = useState(null)

    const numA = Number(a)
    const numB = Number(b)

    const handleOnClick = () => {
        if (a === "" || b === "") {
            console.log(a, b)
            alert("Vui long nhap so hop le")
        }
        setRs(a + b)
    }

    return (
        <>
            <h1>Ex2: SUM</h1>
            <div>
                <input
                    style={{ margin: "10px", width: "60vw", fontSize: "20px", borderRadius: "10px", padding: "10px" }}
                    type="number" onChange={(e) => { setA(e.target.value) }} placeholder="So a" />
                <input
                    style={{ margin: "10px", width: "60vw", fontSize: "20px", borderRadius: "10px", padding: "10px" }}
                    type="number" onChange={(e) => { setB(e.target.value) }} placeholder="So b" />
            </div>
            <button style={{ marginRight: "10px", padding: "10px" }} onClick={() => { handleOnClick() }}>Sum</button>
            <hr />
            {
                rs ? <span>{rs}</span> : <span>Vui long nhap so</span>
            }
        </>
    )
}

export default Ex2