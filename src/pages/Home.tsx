import { MainContainer } from "./home.styles"

export function Home() {
    return (
      <MainContainer>
        <div>
          <h2>Hello, i am</h2>
          <h1 className="title white">{"<"} <span className="blue">Musker</span> {"/>"}</h1>
        </div>
        <div>
          <h1>Game Developer</h1>
        </div>
      </MainContainer>
    )
}