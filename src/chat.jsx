import { useState, useEffect } from "react";
import { FaPenFancy } from "react-icons/fa";
import axios from "axios";
import ChatBox from "./chatbox";
import { CiFaceFrown } from "react-icons/ci";

export default function Chat() {
  const [value, setValue] = useState("");
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  var [showInk, setShowInk] = useState(false);
  useEffect(() => {
    setInterval(() => {
      const rand = Math.random();
      if (rand > 0.1) {
        setShowInk(true);
      } else {
        setShowInk(false);
      }
    }, 10000);
  }, []);

  // In our return statement, we add an input field so that the user can ask
  // questions to the API
  // We also add a button so that the user can submit their question which then
  // updates the response from the API
  // We show the updated response on our page

  return (
    <>
      <div className="container w-full h-full">
        <div className="nav w-auto float-left border border-white p-4 h-full">
          <div className="h-12">
            <FaPenFancy className="w-8 h-8 float-right animate-bounce"></FaPenFancy>
          </div>
          <div className="text-3xl font-extrabold">Chat Ink</div>
          <ul className="pb-6">
            <li className="pb-2">Does this really helps?</li>
            <li className="pb-2">What is the meaning of life?</li>
            <li className="pb-2">This is useless</li>
          </ul>

          <div className="text-3xl font-extrabold">Earlier Ink</div>
          <ul>
            <li className="pb-2">What is my history?</li>
            <li className="pb-2">ways to never give ink up</li>
          </ul>
        </div>
        <div className="dashboard flex-col" style={{ display: "flex", height: "100%" }}>
          <div className="header h-20 w-full border-white border px-4 flex flex-row justify-between items-center text-right">
            Welcome!{" "}
            <span className="text-slate-400 pl-2 animate-ping">
              Why do I have to login for this
            </span>
            <CiFaceFrown className="w-4 h-4" />
          </div>

          <ChatBox></ChatBox>
        </div>
      </div>

      <div
        onPointerMove={(e) => {
          setPosition({
            x: e.clientX,
            y: e.clientY,
          });
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
        }}
      >
        {showInk && (
          <>
            <div
              style={{
                position: "absolute",
                backgroundColor: "white",
                borderRadius: "50%",
                transform: `translate(${position.x - 20}px, ${
                  position.y - 100
                }px)`,
                left: -10,
                top: -10,
                width: 20,
                height: 250,
                opacity: 0.5,
              }}
            />
            <div
              style={{
                position: "absolute",
                backgroundColor: "white",
                borderRadius: "50%",
                transform: `translate(${position.x - 20}px, ${
                  position.y - 100
                }px) rotate(45deg)`,
                left: -10,
                top: -10,
                width: 20,
                height: 250,
                opacity: 0.5,
              }}
            />
            <div
              style={{
                position: "absolute",
                backgroundColor: "white",
                borderRadius: "50%",
                transform: `translate(${position.x - 20}px, ${
                  position.y - 100
                }px) rotate(90deg)`,
                left: -10,
                top: -10,
                width: 20,
                height: 250,
                opacity: 0.5,
              }}
            />
            <div
              style={{
                position: "absolute",
                backgroundColor: "white",
                borderRadius: "50%",
                transform: `translate(${position.x - 20}px, ${
                  position.y - 100
                }px) rotate(135deg)`,
                left: -10,
                top: -10,
                width: 20,
                height: 250,
                opacity: 0.5,
              }}
            />
            <div
              style={{
                position: "absolute",
                backgroundColor: "white",
                borderRadius: "50%",
                transform: `translate(${position.x - 20}px, ${
                  position.y - 100
                }px) rotate(125deg)`,
                left: -10,
                top: -10,
                width: 20,
                height: 250,
                opacity: 0.5,
              }}
            />
            <div
              style={{
                position: "absolute",
                backgroundColor: "white",
                borderRadius: "50%",
                transform: `translate(${position.x - 20}px, ${
                  position.y - 100
                }px) rotate(115deg)`,
                left: -10,
                top: -10,
                width: 20,
                height: 250,
                opacity: 0.5,
              }}
            />
            <div
              style={{
                position: "absolute",
                backgroundColor: "white",
                borderRadius: "50%",
                transform: `translate(${position.x - 20}px, ${
                  position.y - 100
                }px) rotate(105deg)`,
                left: -10,
                top: -10,
                width: 20,
                height: 250,
                opacity: 0.5,
              }}
            />
          </>
        )}
      </div>
    </>
  );
}