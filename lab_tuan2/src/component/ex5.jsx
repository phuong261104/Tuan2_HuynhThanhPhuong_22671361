import { useState } from "react"

const Ex5 = () => {
    const [content, setContent] = useState(null)

    const text = {
        javascript: "JavaScript là một ngôn ngữ lập trình phổ biến được sử dụng để phát triển các ứng dụng web tương tác. Nó có thể chạy trên trình duyệt và server (Node.js). JavaScript hỗ trợ lập trình hướng đối tượng, lập trình hàm, và lập trình bất đồng bộ.",
        reactJs: "ReactJS là một thư viện JavaScript mã nguồn mở do Facebook phát triển, được sử dụng để xây dựng giao diện người dùng (UI) động và tối ưu hóa hiệu suất. React sử dụng Virtual DOM để cập nhật UI nhanh chóng mà không cần render lại toàn bộ trang.",
        viteJs: "ViteJS là một công cụ build frontend siêu nhanh, hỗ trợ phát triển React, Vue, Svelte và các framework khác. Nó sử dụng trình biên dịch ESBuild để tăng tốc quá trình khởi động và hot module replacement (HMR), giúp quá trình phát triển mượt mà hơn.",
    };

    const hanleClick = (e) => {
        console.log(e.target.textContent);
        switch (e.target.textContent) {
            case "javaScript":
                setContent(text.javascript);
                break;
            case "reactJs":
                setContent(text.reactJs);
                break;
            case "viteJs":
                setContent(text.viteJs);
                break;
        }
    }

    return (
        <>
            <div>
                <button
                    onClick={(e) => hanleClick(e)}
                    style={{
                        margin: "10px",
                        fontSize: "20px",
                        borderRadius: "10px",
                        padding: "10px",
                    }}>javaScript</button>
                <button
                    onClick={(e) => hanleClick(e)}
                    style={{
                        margin: "10px",
                        fontSize: "20px",
                        borderRadius: "10px",
                        padding: "10px",
                    }}>reactJs</button>
                <button
                    onClick={(e) => hanleClick(e)}
                    style={{
                        margin: "10px",
                        fontSize: "20px",
                        borderRadius: "10px",
                        padding: "10px",
                    }}>viteJs</button>
            </div>
            {content !== null ? <h1> {content}</h1> : <h1>Vui lòng chon noi dung</h1>}

        </>
    )
}

export default Ex5