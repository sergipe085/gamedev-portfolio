import { MainContainer } from "./projects.styles";

export function Projects() {
    return (
      <MainContainer>
        <div>
          <h2 className="function">projects() {"{"}</h2>
          <div className="text-container">
            <div>
              <h1>Minecraft Clone</h1>
              <p className="white">
                I have almost 4 years of experience developing games with the <span style={{color: "#fff"}}>Unity Engine</span> and <span className="green">C#</span> programming langague 
                and i have worked for many companies and indie studios, like 
                <a target="_blank" href="https://www.dexioprotocol.com/" rel="noreferrer"> <u>Dexioprotocol</u></a>, 
                <a target="_blank" href="https://www.instagram.com/diegostudiogames/" rel="noreferrer"> <u>Diego Studio Games </u></a>
                and many freelance works.
              </p>
            </div>
          </div>
          <br/>
          <h2 className="function">{"}"}</h2>
        </div>
      </MainContainer>
    )
}