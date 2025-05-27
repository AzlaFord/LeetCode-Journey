import "./DiscussChat.css";
import { useEffect, useState } from 'react';

function DiscussChat(){
    const [messages, setMessages] = useState(() => {
        const savedMessages = localStorage.getItem("discussChat");
        return savedMessages ? JSON.parse(savedMessages) : [];
    });
    const [chatInput, setChatInput] = useState("");

    const handleInputChange = (e) => {
        setChatInput(e.target.value);
    }
    
    const sendInput = () => {
        if (chatInput.trim() !== "") {
            let newMessages = [...messages, chatInput];
            if(newMessages.length > 8) {
                newMessages = newMessages.slice(newMessages.length - 8);
            }
            setMessages(newMessages);
            setChatInput("");
        }
    }

    useEffect(() => {
        localStorage.setItem("discussChat", JSON.stringify(messages));
    }, [messages]);

    return (
        <div className="blockChat">
            <div className="chat">
                {messages.map((message, index) => (
                    <div className="message" key={index}>
                        {message}
                    </div>
                ))}
            </div>
            <div className="inputcont">
                <input className="chatbar" value={chatInput} onChange={handleInputChange} type="text" />
                <button className="sendButton" onClick={sendInput}>Send</button>
            </div>
        </div>
    );
}

export default DiscussChat;
