import { MainContainer } from "./about.styles";

export function About() {
    return (
      <MainContainer>
        <div>
          <h2 className="function">aboutMe() {"{"}</h2>
          <div className="text-container">
            <div>
              <h1>2018</h1>
              <p className="white">
                Hi, my name is Sergio and i started to fall in love with programming in 2018, when i participated on the 
                Brazilian Olimpic of Robotics and won third place in the country.
              </p>
            </div>

            <div>
              <h1>2019 && 2020</h1>
              <p className="white">
                After that, in 2019, i started to learn how to make games with Unity and my passion for programming become even bigger.
                I programmed every day practically all day, especially in the pandemic and I made several prototypes and personal projects.
              </p>
            </div>

            <div>
              <h1>2021</h1>
              <p className="white">
                In 2021 i started to study Backend Development and i spent a lot of time studying how a game server works and I learned several 
                important concepts for building an online game, such as Login, Store with real payment, Coins system and etc.
              </p>
            </div>

            <div>
              <h1>2022</h1>
              <p className="white">
              In 2022 i decided to study how to write a better code, studying many concepts like Algorithms, Clean Code and Software Architeture.
              </p>
            </div>
          </div>
          <br/>
          <h2 className="function">{"}"}</h2>
        </div>
      </MainContainer>
    )
}