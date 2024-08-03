import { useState } from "react";
import axios from "axios";

function ChatBox() {
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Loading");
  const [messages, setMessages] = useState([
    {
      is_user_message: false,
      content:
        "Hi, I'm an AI assistant designed to work perfectly with Ink. Good at giving nonsense that never helps. How can I help you?",
    },
  ]);
  var loadingInterval;
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    updateLoadingMessage();
    const response = await axios.post("http://localhost:3005/chatbot", {
      question: e.target.message.value,
    });
    setMessages([
      ...messages,
      { is_user_message: true, content: e.target.message.value },
      { is_user_message: false, content: response.data },
    ]);
    clearInterval(loadingInterval);
    setLoading(false);
  }

  function createRandomString(length) {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  function updateLoadingMessage() {
    loadingInterval = setInterval(() => {
      setLoadingMessage(createRandomString(10));
    }, 100);
  }

  return (
    <div className="flex flex-col items-center h-3/4 py-2">
      {loading && <div className="modal z-50}"></div>}
      <div className="border-white border border-solid p-4 mb-2 grow overflow-y-scroll">
        <pre>
          {messages.map((elem, key) => (
            <p key={key} className="whitespace-pre-wrap">
              <b>{elem.is_user_message ? "Human:" : "Poofessor of Ink:"}</b>{" "}
              {elem.content}
            </p>
          ))}
        </pre>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex"
        style={{ width: "-webkit-fill-available" }}
      >
        <div className="flex grow items-center border-white border border-solid">
          <div className="font-bold ml-4">Human:</div>
          <input
            className="p-1 my-2 mx-4 h-12 font-mono grow"
            placeholder="Try type your message here !"
            name="message"
          />
        </div>
        <input
          className="cursor-pointer bg-black text-white ml-2 p-2 px-5 font-mono font-bold"
          value={loading ? loadingMessage : "Send >"}
          type="submit"
          disabled={loading}
        />
      </form>
    </div>
  );
}

export default ChatBox;
