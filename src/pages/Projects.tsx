import { MainContainer } from "./projects.styles";

const projects = [
  {
    title: "Minecraft",
    description: `A Minecraft clone made with Unity in almost 1 week. Making this project i learned a lot about game optimization techniques and how 3d models works. I also learned
    a lot about procedural world generation and perlin noise algorithm.`,
    videoName: "minecraft_clone.mp4"
  },
  {
    title: "Minecraft Craft",
    description: `A clone of Minecraft Crafting System made with Unity in almost 3 days. Making this project i learned how to use ScriptableObjects to store game data into unity
    and use this to store the crafting recipes of each item.`,
    videoName: "minecraft_crafting.mp4"
  },
]

export function Projects() {
    return (
      <MainContainer>
        <div>
          <h2 className="function">projects() {"["}</h2>
          <div className="text-container">
            {
              projects.map(project => {
                return (
                  <div key={project.videoName} className="element">
                    <h1 className="white">{"<"} <span className="green">{project.title}</span> {"/>"}</h1>
                    <div className="video-container">
                      <video controls width={420}>
                        <source src={"/videos/" + project.videoName}></source>
                      </video>
                      <p className="white">{project.description}</p>
                    </div>
                  </div>
                )
              })
            }
            
          </div>
          <br/>
          <h2 className="function">{"]"}</h2>
        </div>
      </MainContainer>
    )
}