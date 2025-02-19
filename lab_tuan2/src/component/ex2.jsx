import { useState } from "react"

const Ex2 = () => {
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    const [rs, setRs] = useState()

    const handleOnClick = () => {
        if(a !== null && b !== null){
            console.log(a,b)
            setRs(Number(a)+Number(b))
        }
    }

    return (
        <>
        <h3>Ex2: sum</h3>
        <input type="number" onChange={(e)=>{setA(e.target.value)}} placeholder="So a" style={{marginRight: "10px"}}/>
        <input type="number" onChange={(e)=>{setB(e.target.value)}}placeholder="So b" style={{marginRight: "10px"}}/>
        <button style={{marginRight: "10px"}} onClick={() => {handleOnClick()}}>Sum</button>
        {
            rs?<span>{rs}</span>: <span>Vui long nhap so</span>
        }
        </>
    )
}

export default Ex2