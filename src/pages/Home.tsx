import { MainContainer } from "./home.styles"

export function Home() {
    return (
      <MainContainer>
        <div>
          <h2>Hello, i am</h2>
          <h1 className="title">{"<"} Musker {"/>"}</h1>
        </div>
        <div>
          <h1>Game Developer</h1>
        </div>
      </MainContainer>
    )
}