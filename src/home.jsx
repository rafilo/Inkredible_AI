import { useNavigate } from "react-router-dom";
import MovingButton from "./MovingButton";
export default function Home() {
  const navigate = useNavigate()
  const buttonStyle = {
    backgroundColor: "green",
    color: "white",
    width: "100px",
    height: "100px",
    borderRadius: "100%",
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom:"10px"
  };
  return (
    <div>
      <h1>Hi and welcome to TRUE AWSEME INK EXPERT AI</h1>
      <button style={buttonStyle}>NO</button>
      <div>
        {" "}
        <span>please </span>
        <span style={{ textDecoration: "underline", cursor: "pointer" }}>
          click 
        </span>
        <span>HERE to </span>
        <a
          style={{ color: "white", cursor:"default", fontWeight:"400"}}
          href="./CatchLogin/index.html"
        >
          GO 
        </a>
        <span>to the </span>
        <span style={{ color: "white" }}>next page</span>
        <MovingButton />
      </div>
    </div>
  );
}
