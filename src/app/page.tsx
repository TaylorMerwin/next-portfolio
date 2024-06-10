import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";

const projectData = [
  {
    title: "Project 1",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    imageUrl: "/placeholder.jpg",
    liveUrl: "...",
    codeUrl: "...",
    tags: ["React", "Tailwind CSS"],
  },
  {
    title: "Project 2",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    imageUrl: "/placeholder.jpg",
    liveUrl: "...",
    codeUrl: "...",
    tags: ["PHP", "JQuery"],
  },
];




export default function Home() {
  return (
    <>
    <Header/>
    <Intro/>
    <Projects projects={projectData}/>
    </>
  );
}
