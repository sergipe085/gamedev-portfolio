import { MainContainer } from "./skills.styles";

export function Skills() {
    return (
      <MainContainer>
        <div>
          <h2 className="function">skills() {"{"}</h2>
          <div className="text-container">
            <div>
              <h1>Unity && C#</h1>
              <p className="white">
                I have almost 4 years of experience developing games with the <span style={{color: "#fff"}}>Unity Engine</span> and <span className="green">C#</span> programming langague 
                and i have worked for many companies and indie studios, like 
                <a target="_blank" href="https://www.dexioprotocol.com/" rel="noreferrer"> <u>Dexioprotocol</u></a>, 
                <a target="_blank" href="https://www.instagram.com/diegostudiogames/" rel="noreferrer"> <u>Diego Studio Games </u></a>
                and many freelance works.
              </p>
            </div>

            <div>
              <h1>Backend</h1>
              <p className="white">
                I have 1 year of experience developing API's with <span className="green">NodeJS</span> and <span className="blue">Typescript</span>.
                I made a API for a Fan Game that have multiple funcionalities, like payments, login, friends, and other personal projects.
              </p>
            </div>

            <div>
              <h1>Clean Code</h1>
              <p className="white">
                I have a rudge knowledge about <span className="blue">Design Patterns</span> and <span className="blue">Clean Code</span> practises so, i can write a easy-to-maintain and scalable code
              </p>
            </div>
          </div>
          <br/>
          <h2 className="function">{"}"}</h2>
        </div>
      </MainContainer>
    )
}