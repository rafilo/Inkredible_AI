
import MovingButton from "./MovingButton";
import { FaBiohazard, FaBaby } from "react-icons/fa6";
import { useEffect, useState } from "react";
import MarqueeCard from "./marqueeCard";

export default function Home() {
  const [loginNumber, setLoginNumber] = useState("5372839431");
  var loginNumberInterval;
  function createRandomString(length) {
    const chars = "0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  function clickkHeader() {
    alert("Please floowing the login button to use Inkredible AI :)");
  }

  const marqueeCardsContent = [
    {
      header: "why do i love css?",
      content: "Ask AI!",
    },
    {
      header: "why do i love css?",
      content: "Ask AI!",
    },
    {
      header: "why do i love css?",
      content: "Ask AI!",
    },
    {
      header: "why do i love css?",
      content: "Ask AI!",
    },
    {
      header: "why do i love css?",
      content: "Ask AI!",
    },
  ];

  function updateLogin() {
    loginNumberInterval = setInterval(() => {
      setLoginNumber(createRandomString(10));
    }, 100);
  }

  useEffect(() => {
    updateLogin();
    return () => clearInterval(loginNumberInterval);
  }, [loginNumberInterval]);
  return (
    <div>
      <header className="header border-b-2">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <FaBiohazard className="w-8 h-8 text-white animate-spin" />
            </a>
          </div>
          <div className="flex gap-x-8 text-center max-w-7xl">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-white"
              onClick={() => clickkHeader()}
            >
              Features
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-white"
              onClick={() => clickkHeader()}
            >
              Marketplace
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-white"
              onClick={() => clickkHeader()}
            >
              Product
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-white"
              onClick={() => clickkHeader()}
            >
              Company
            </a>
          </div>
          <div className="lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900 pr-4"
            >
              Log in <span aria-hidden="true">&rarr;</span>{" "}
              <FaBaby className="w-8 h-8 text-white animate-spin inline" />
            </a>
          </div>
        </nav>
      </header>
      <div className="mx-auto flex max-w-7xl items-center justify-between p-6">
        <div className="w-full m-32">
          <div className="flex justify-center pb-4">Inkredible AI</div>
          <div className="flex justify-center text-4xl font-bold pb-4">
            Cutting-edge. Wildly unpredictable ink. Wague writing tips.{" "}
          </div>
          <div className="flex justify-center text-2xl font-semibold pb-4">
            Free to use. Easy to try. Just ask and Inkredible AI can ruin you
            with writing, learning, brainstorming, and more with truthy.
          </div>
          <button className="bg-white text-black px-4 py-2 rounded-md text-center">
            Login after <span>{loginNumber}</span> years
          </button>
          <div className="pt-3">
            {" "}
            <span>please </span>
            <span style={{ textDecoration: "underline", cursor: "pointer" }}>
              click
            </span>
            <span> HERE to Login </span>
            <a
              style={{ color: "white", cursor: "text", fontWeight: "400" }}
              href="./CatchLogin/index.html"
            >
              with
            </a>
            <span> your truthy</span>
            <MovingButton />
          </div>
        </div>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="py-12 animate-marquee whitespace-nowrap">
          {marqueeCardsContent.map((elem, key) => (
            <MarqueeCard
              className="mx-4 text-4xl"
              header={elem.header}
              content={elem.content}
              key={key}
            ></MarqueeCard>
          ))}
        </div>

        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
          {marqueeCardsContent.map((elem, key) => (
            <MarqueeCard
              className="mx-4 text-4xl"
              header={elem.header}
              content={elem.content}
              key={key}
            ></MarqueeCard>
          ))}
        </div>
      </div>
    </div>
  );
}
