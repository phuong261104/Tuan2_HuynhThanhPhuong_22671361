import { useState } from "react";

const Ex4 = () => {

    const [name, setName] = useState("");
    const [todoData, setTodoData] = useState([])

    const addToDo = () => {
        if (name.trim() === "") {
            alert("Vui lòng nhập công việc!");
            return;
        }
        setTodoData([...todoData, name]);
        setName("");
    };

    const deleteToDo = (index) => {
        const newList = todoData.filter((_, i) => i !== index);
        setTodoData(newList);
    };


    return (

        <>
            <h1>To do list</h1>
            <div>
                <input
                    value={name}
                    style={{ margin: "10px", width: "25vw", fontSize: "20px", borderRadius: "10px", padding: "10px" }}
                    type="text" onChange={(e) => { setName(e.target.value) }} placeholder="input name" />
                <button
                    style={{ padding: "10px", border: "1px solid #ccc" }}
                    onClick={() => addToDo(name)} >Them</button>

                {todoData
                    ? <div style={{ width: "30vw", padding: "10px" }} >
                        {todoData.map((item, index) => (
                            <div key={index} style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                                {item}
                                <button
                                    style={{
                                        margin: "10px",
                                        fontSize: "20px",
                                        borderRadius: "10px",
                                        padding: "10px",
                                        color: "white", backgroundColor: "red"
                                    }}
                                    onClick={() => deleteToDo(index)} >
                                    Xóa
                                </button>
                            </div>
                        ))}
                    </div> :
                    <span>No data</span>
                }
            </div>
        </>
    )
}

export default Ex4