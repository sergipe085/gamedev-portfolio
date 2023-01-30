import { MainContainer } from "./home.styles"

import { BsArrowDownCircle } from "react-icons/bs";

import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";

export function Home() {
    return (
      <MainContainer id="home">
        <div>
          <h2>Hello, i am</h2>
          <h1 className="title white">{"<"} <span className="blue">Musker</span> {"/>"}</h1>
          <div  style={{display: "flex", flexDirection: "row", gap: "0.7rem", marginTop: "0.3rem"}}>
            <a target="_blank" href="https://twitter.com/sergipdev" rel="noreferrer"><AiFillTwitterCircle size={42}/></a>
            <a target="_blank" href="https://github.com/sergipe085" rel="noreferrer"><AiFillGithub size={42}/></a>
            <a target="_blank" href="https://discordapp.com/channels/@me/991400068080996462" rel="noreferrer"><SiDiscord size={35}/></a>
          </div>
        </div>
        <div>
          <h1>Game Developer</h1>
        </div>
        <a href="#about"><BsArrowDownCircle size={30}/></a>
      </MainContainer>
    )
}