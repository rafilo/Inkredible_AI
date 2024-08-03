import { useState } from "react";
import axios from "axios";
import AIimg from "./assets/WechatIMG149.jpg"
import humanimg from  "./assets/WechatIMG152.jpg"

function ChatBox() {
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("Loading");
  const [messages, setMessages] = useState([
    {
      is_user_message: false,
      content:
        "Hello! I'm a little butterfly which is friendly and honest. Hope you had a good day with me after navigating here!",
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
            <p key={key} className="whitespace-pre-wrap p-3">
              <img className="w-8 h-8 float-start" src={elem.is_user_message ? humanimg : AIimg}></img>
              <b>{elem.is_user_message ? "U:" : "The Little Butterfly:"}</b>{" "}
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
