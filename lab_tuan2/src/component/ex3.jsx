import { useState } from "react";

const Ex3 = () => {
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [operator, setOperator] = useState(null);
    const [rs, setRs] = useState(null);

    const handleCalculate = () => {
        if (a === "" || b === "") {
            alert("Vui lòng nhập số hợp lệ");
            return;
        }

        const numA = Number(a);
        const numB = Number(b);

        if (isNaN(numA) || isNaN(numB)) {
            alert("Vui lòng nhập số hợp lệ");
            return;
        }

        let result;
        switch (operator) {
            case "+":
                result = numA + numB;
                break;
            case "-":
                result = numA - numB;
                break;
            case "*":
                result = numA * numB;
                break;
            case "/":
                result = numB !== 0 ? numA / numB : "b != 0";
                break;
            default:
                result = "Vui lòng chon phep tinh";
        }
        setRs(result);
    };

    return (
        <>
            <h1>Ex3: Máy tính cơ bản</h1>
            <div>
                <input
                    style={{ margin: "10px", width: "60vw", fontSize: "20px", borderRadius: "10px", padding: "10px" }}
                    type="number"
                    value={a}
                    onChange={(e) => setA(e.target.value)}
                    placeholder="Số a"
                />
                <input
                    type="number"
                    value={b}
                    onChange={(e) => setB(e.target.value)}
                    placeholder="Số b"
                    style={{ margin: "10px", width: "60vw", fontSize: "20px", borderRadius: "10px", padding: "10px" }}
                />
                <div style={{ margin: "10px 0", fontSize: "20px" }}>
                    <label>
                        <input
                            type="radio"
                            name="operator"
                            value="+"
                            onChange={(e) => setOperator(e.target.value)}
                        />{" "}
                        +
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="operator"
                            value="-"
                            onChange={(e) => setOperator(e.target.value)}
                        />{" "}
                        -
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="operator"
                            value="*"
                            onChange={(e) => setOperator(e.target.value)}
                        />{" "}
                        *
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="operator"
                            value="/"
                            onChange={(e) => setOperator(e.target.value)}
                        />{" "}
                        /
                    </label>
                </div>
                <button onClick={handleCalculate} style={{ padding: "10px", border: "1px solid #ccc" }}>
                    Tính toán
                </button>
            </div>
            <hr />
            {rs !== null ? <h1>Kết quả: {rs}</h1> : <h1>Vui lòng nhập số và chọn phép tính</h1>}
        </>
    );
};

export default Ex3;
