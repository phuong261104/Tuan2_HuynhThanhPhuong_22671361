import { useState } from "react"

const Ex3 = () => {
    const [a, setA] = useState()
    const [b, setB] = useState()
    const [rs, setRs] = useState()


    return (

        <>
        <h3>Ex3</h3>
        <div>
        <input type="number" onChange={(e)=>{setA(e.target.value)}} placeholder="So a" style={{marginRight: "10px"}}/>
        <input type="number" onChange={(e)=>{setB(e.target.value)}}placeholder="So b" style={{marginRight: "10px"}}/>
        <input type="radio" onClick={()=> {setRs(Number(a)+Number(b))}} name="gr" id="" value={"+"} />+
        <input type="radio" onClick={()=> {setRs(Number(a)-Number(b))}} name="gr" id="" value={"-"} />-
        <input type="radio" onClick={()=> {setRs(Number(a)*Number(b))}} name="gr" id="" value={"*"} />*
        <input type="radio" onClick={()=> {setRs(Number(a)/Number(b))}} name="gr" id="" value={"/"} />/
        </div>
        {
            rs?<span>{rs}</span>: <span>Vui long nhap so</span>
        }
        </>
    )
}

export default Ex3