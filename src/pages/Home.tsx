import { MainContainer } from "./home.styles"

import { BsArrowDownCircle } from "react-icons/bs";

import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";
import { SiDiscord } from "react-icons/si";
import Animated from "../components/Animated";

export function Home() {
    return (
      <MainContainer id="home">
        <div>
          <Animated>
            <h2>Hello, i am</h2>
          </Animated>
          <Animated>
            <h1 className="title white">{"<"} <span className="blue">Musker</span> {"/>"}</h1>
          </Animated>
          <Animated>
            <div  style={{display: "flex", flexDirection: "row", gap: "0.7rem", marginTop: "0.3rem"}}>
              <a target="_blank" href="https://twitter.com/sergipdev" rel="noreferrer"><AiFillTwitterCircle size={42}/></a>
              <a target="_blank" href="https://github.com/sergipe085" rel="noreferrer"><AiFillGithub size={42}/></a>
              <a target="_blank" href="https://discordapp.com/channels/@me/991400068080996462" rel="noreferrer"><SiDiscord size={35}/></a>
            </div>
          </Animated>
        </div>
        <Animated>
          <div>
            <h1>Game Developer</h1>
          </div>
        </Animated>
        <Animated>
          <a href="#about"><BsArrowDownCircle size={30}/></a>
        </Animated>
      </MainContainer>
    )
}