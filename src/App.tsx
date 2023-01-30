import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
    </>
  );
}

export default App;
