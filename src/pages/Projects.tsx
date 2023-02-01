import Animated from "../components/Animated";
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
  {
    title: "ADM Aniquiller",
    description: `A 2D platformer game made to NoneJam5. In this JAM project i improvement my knowledge about the full game development flow.`,
    videoName: "adm_aniquiller.mp4"
  },
  {
    title: "Survival Pttp",
    description: `A prototype of a Rust style survival game. In this project i learned some good code practises making the interaction system and how do use DoTween to make good animations.`,
    videoName: "survival_test.mp4"
  },
  {
    title: "FPS Pttp",
    description: `A prototype of a FPS game. In this project i learned how to implement a procedural recoil system and a full body hit detection system (The enemy
    takes damage based on the location of the shoot).`,
    videoName: "fps_prototype.mp4"
  },
  {
    title: "Combat System",
    description: `A prototype of a souls like combat system. In this project i learned how to make a complete inventory system with a complete equipment system and 
    a meele combat system with different types of weapons and many different animations for each weapon.`,
    videoName: "souls_like_combat.mp4"
  },
  {
    title: "Quest System",
    description: `A complete costomizable quest system. In this project i improve even more my knowledge about ScriptableObjects and how to manipulate them to
    make these type of systems. I also learned a lot about Design Patterns, like the Observer Pattern, used to update the quest state.`,
    videoName: "quest_system.mkv"
  },
  {
    title: "Top Down Shooter",
    description: `A prototype of a top down shooter inspired in Enter the Gungeon. In this project i learned about 2D ligthining and simple Enemy IA. I also implmented a
    fully costomizable dialogue system with the ScriptableObject concepts learned before.`,
    videoName: "enter_the_dungeon.mp4"
  },
  {
    title: "Climb System",
    description: `A prototype of a climb system. In this project i learned how to use Raycasts to add interesting funcionalities to the Player.`,
    videoName: "climb_system.mp4"
  },
  {
    title: "Turn Strategy",
    description: `A turn strategy game. In this project i learned a lot about good code practises and how to write a ease-to-read and maintainable code.`,
    videoName: "turn_strategy.mp4"
  },
  {
    title: "Tower Defense",
    description: `A tower defense game. In this project i learned even more about Enemy IA, screen transitions and ScriptableObjects. I also implemented a
    fully costomizable and escalable build system.`,
    videoName: "tower_defense.mp4"
  },
  {
    title: "Match 3",
    description: `A Match 3 game. In this project i learned how to work with grid based games and how to make games like Candy Crush.`,
    videoName: "candy_crush.mp4"
  },
  {
    title: "2D Platformer Celeste",
    description: `A 2D platformer inspired on Celeste. In this project i learned how to make a good player controller with a good game feel and responsive controls.`,
    videoName: "platformer_celest.mp4"
  },
  {
    title: "2D Platformer Bullet Hell",
    description: `A 2D platformer bullet hell game. In this project i learned how to implement a portal mechanic and some 2D platformer obstacles and concepts.`,
    videoName: "platformer_bullethell.mp4"
  },
]

export function Projects() {
    return (
      <MainContainer id="projects">
        <div>
          <Animated>
            <h2 className="function">projects() {"["}</h2>
          </Animated>
          <div className="text-container">
            {
              projects.map(project => {
                return (
                  <Animated>
                    <div key={project.videoName} className="element">
                      <h1 className="white">{"<"} <span className="blue">{project.title}</span> {"/>"}</h1>
                      <div className="video-container">
                        <video controls width={420}>
                          <source src={"/videos/" + project.videoName}></source>
                        </video>
                        <p className="white">{project.description}</p>
                      </div>
                    </div>
                  </Animated>
                )
              })
            }
            
          </div>
          <br/>
          <Animated>
            <h2 className="function">{"]"}</h2>
          </Animated>
        </div>
      </MainContainer>
    )
}